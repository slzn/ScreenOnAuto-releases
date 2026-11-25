#!/usr/bin/env python3
"""Check the app's translated string resources in app-strings/ before they are merged.

Run by .github/workflows/check-strings.yml on pull requests that touch app-strings/, and by
hand: `python3 tools/check_strings.py [app-strings]`. Exits 1 if anything would break the
Android build or the translation's meaning, listing every problem as file:name: message.

What it checks, per locale folder (values-*) against the default folder (values/):
  - the XML parses;
  - every key is one the default file has and marks translatable (no extras, no typos);
  - every translatable key of the default file is present (a missing one falls back to
    English in the app, which this project does not ship);
  - the format arguments (%1$s, %d, ...) match the default string's exactly;
  - no unescaped ' or " (Android's resource compiler rejects the first and silently drops
    the second), and no value starting with @ or ? (read as a resource reference);
  - a literal % in a string without format arguments carries formatted="false";
  - string-arrays have as many items as the default's; plurals have an "other" form.
"""
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

FORMAT = re.compile(r"%(?:(\d+)\$)?[-#+ 0,(]*\d*(?:\.\d+)?([sdfxXoceEgGbBhH%])")


def specs(text):
    """The format arguments in a string, as a sorted list; %% is a literal, not an argument."""
    found = []
    for m in FORMAT.finditer(text):
        if m.group(2) != "%":
            found.append(f"%{m.group(1) + '$' if m.group(1) else ''}{m.group(2)}")
    return sorted(found)


def stray_percent(text):
    """True if the string has a % that is neither %% nor part of a format argument."""
    return "%" in FORMAT.sub("", text)


def value_problems(text):
    """Escaping problems in one raw value (backslash escapes are still in the text)."""
    problems = []
    if text.startswith(("@", "?")) and not re.fullmatch(r"@string/\w+", text):
        problems.append("starts with @ or ? — write \\@ or \\? for a literal")
    quoted = len(text) >= 2 and text.startswith('"') and text.endswith('"')
    body = text[1:-1] if quoted else text
    for i, ch in enumerate(body):
        if ch in "'\"" and (i == 0 or body[i - 1] != "\\"):
            if ch == "'" and quoted:
                continue
            problems.append(f"unescaped {ch} — write \\{ch}")
            break
    return problems


def load(path):
    """{(kind, name): (element, [values])} for one strings.xml / arrays.xml."""
    root = ET.parse(path).getroot()
    out = {}
    for el in root:
        name = el.get("name")
        if el.tag == "string":
            out[("string", name)] = (el, ["".join(el.itertext())])
        elif el.tag == "string-array":
            out[("array", name)] = (el, ["".join(i.itertext()) for i in el.findall("item")])
        elif el.tag == "plurals":
            out[("plurals", name)] = (el, {i.get("quantity"): "".join(i.itertext()) for i in el.findall("item")})
    return out


def translatable(el):
    return el.get("translatable") != "false"


def check(base):
    errors = []
    default = {}
    for fname in ("strings.xml", "arrays.xml"):
        f = base / "values" / fname
        if f.exists():
            default.update({k: (fname, v) for k, v in load(f).items()})

    for folder in sorted(base.glob("values-*")):
        seen = set()
        for fname in ("strings.xml", "arrays.xml"):
            f = folder / fname
            if not f.exists():
                continue
            rel = f"{folder.name}/{fname}"
            try:
                entries = load(f)
            except ET.ParseError as e:
                errors.append(f"{rel}: XML does not parse: {e}")
                continue
            for (kind, name), (el, vals) in entries.items():
                where = f"{rel}:{name}"
                seen.add((kind, name))
                if (kind, name) not in default:
                    errors.append(f"{where}: no such {kind} in values/{fname} (typo, or removed from the app?)")
                    continue
                dfile, (del_, dvals) = default[(kind, name)]
                if not translatable(del_):
                    errors.append(f"{where}: marked translatable=\"false\" in values/{dfile}; remove it here")
                    continue
                if kind == "plurals":
                    if "other" not in vals:
                        errors.append(f"{where}: plurals need an \"other\" item")
                    want = specs(dvals.get("other", ""))
                    pairs = [(q, v, want) for q, v in vals.items()]
                elif kind == "array":
                    if len(vals) != len(dvals):
                        errors.append(f"{where}: {len(vals)} items, values/{dfile} has {len(dvals)}")
                    pairs = [(str(i), v, specs(d)) for i, (v, d) in enumerate(zip(vals, dvals))]
                else:
                    pairs = [("", vals[0], specs(dvals[0]))]
                for label, v, want in pairs:
                    at = f"{where}[{label}]" if label else where
                    got = specs(v)
                    if got != want:
                        errors.append(f"{at}: format arguments {got or 'none'}, expected {want or 'none'}")
                    for p in value_problems(v):
                        errors.append(f"{at}: {p}")
                    if not got and stray_percent(v) and el.get("formatted") != "false":
                        errors.append(f"{at}: literal % needs formatted=\"false\" on the element (or write %%)")

        for (kind, name), (dfile, (del_, _)) in default.items():
            if not translatable(del_) or (kind, name) in seen:
                continue
            # Arrays whose items are @string references are translated through those strings.
            if kind == "array" and all(re.fullmatch(r"@string/\w+", v) for v in default[(kind, name)][1][1]):
                continue
            if kind == "array" and name.endswith("_values"):
                continue
            errors.append(f"{folder.name}/{dfile}:{name}: missing (the app would show English here)")
    return errors


def main():
    base = Path(sys.argv[1] if len(sys.argv) > 1 else Path(__file__).resolve().parent.parent / "app-strings")
    errors = check(base)
    for e in errors:
        print(e)
    print(f"{len(errors)} problem(s)" if errors else "app-strings: all checks passed")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
