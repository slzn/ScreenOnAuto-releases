#!/usr/bin/env python3
"""Build the settings manual's phone text, assets/settings-ui/<lang>.json, from app-strings/.

The phone on docs/<lang>/settings/ (assets/settings-phone.js) shows the app's own wording. This
script collects every string name that file uses — written as str("…"), fmt("…"), plural("…")
or arr("…") — and resolves each one from the app's resources for every language that has a
docs/<lang>/settings.md page, falling back to the default values/ as the app itself does: silently
for strings marked translatable="false", with a warning for a translation that is missing. A name
missing from the resources is an error, so a string renamed in the app is caught here rather than
showing up as a raw name on the site; on any error nothing is written.

Run as part of every release (Publishing a New Release, step 1c in .claude/CLAUDE.md), so the
phone always shows the released app — its wording and, in About, its version:
    python3 tools/settings-ui-strings.py --version 1.12.0 --code 54
--version and --code go together. Without them the version already in the JSON is kept (e.g. after editing
settings-phone.js between releases).
"""
import argparse
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STRINGS = ROOT / "app-strings"
JS = ROOT / "assets" / "settings-phone.js"
OUT = ROOT / "assets" / "settings-ui"
# Site language code -> Android resource folder, where the two differ.
FOLDER = {"en": "values", "zh-TW": "values-zh-rTW", "pt-BR": "values-pt", "id": "values-in"}
CALL = re.compile(r"\b(str|fmt|plural|arr)\(\s*\"([a-z0-9_]+)\"")


def unescape(raw):
    """An Android resource value as the app displays it."""
    s = raw.strip()
    if len(s) >= 2 and s[0] == s[-1] == '"':
        s = s[1:-1]
    else:
        s = re.sub(r"\s+", " ", s)
    return re.sub(r"\\(u[0-9a-fA-F]{4}|.)", lambda m: chr(int(m.group(1)[1:], 16)) if m.group(1)[0] == "u"
                  else {"n": "\n", "t": "\t"}.get(m.group(1), m.group(1)), s)


def load(folder):
    res = {"string": {}, "plurals": {}, "array": {}, "fixed": set()}
    for fname in ("strings.xml", "arrays.xml"):
        f = STRINGS / folder / fname
        if not f.exists():
            continue
        for el in ET.parse(f).getroot():
            name = el.get("name")
            if el.get("translatable") == "false":
                res["fixed"].add(name)
            if el.tag == "string":
                res["string"][name] = unescape("".join(el.itertext()))
            elif el.tag == "plurals":
                res["plurals"][name] = {i.get("quantity"): unescape("".join(i.itertext())) for i in el.findall("item")}
            elif el.tag == "string-array":
                res["array"][name] = ["".join(i.itertext()).strip() for i in el.findall("item")]
    return res


def main():
    ap = argparse.ArgumentParser(description="Build assets/settings-ui/<lang>.json from app-strings/.")
    ap.add_argument("--version", help="the released versionName, shown in the phone's About row")
    ap.add_argument("--code", type=int, help="the released versionCode")
    args = ap.parse_args()
    if (args.version is None) != (args.code is None):
        ap.error("pass --version and --code together, or neither")
    prev = OUT / "en.json"
    old = json.loads(prev.read_text()).get("version", {}) if prev.exists() else {}
    version = {"name": args.version or old.get("name"), "code": args.code or old.get("code")}
    if not version["name"] or not version["code"]:
        sys.exit("no version recorded yet: pass --version and --code")
    used = {"string": set(), "plurals": set(), "array": set()}
    for kind, name in CALL.findall(JS.read_text()):
        used[{"str": "string", "fmt": "string", "plural": "plurals", "arr": "array"}[kind]].add(name)

    langs = sorted(p.parent.name for p in (ROOT / "docs").glob("*/settings.md"))
    if not langs:
        sys.exit("no docs/<lang>/settings.md pages found")
    default = load("values")
    OUT.mkdir(exist_ok=True)
    errors, warnings, outputs = [], [], {}
    for lang in langs:
        res = load(FOLDER.get(lang, f"values-{lang}"))

        def look(kind, name):
            if name in res[kind]:
                return res[kind][name]
            if name in default[kind]:
                if lang != "en" and name not in default["fixed"]:
                    warnings.append(f"{lang}: {kind} {name} is not translated; showing English, as the app does")
                return default[kind][name]
            errors.append(f"{lang}: no {kind} named {name}")
            return None

        out = {"version": version, "s": {}, "p": {}, "a": {}}
        for name in sorted(used["string"]):
            out["s"][name] = look("string", name)
        for name in sorted(used["plurals"]):
            out["p"][name] = look("plurals", name)
        for name in sorted(used["array"]):
            items = look("array", name) or []
            # Items that point at strings (@string/x) are translated through those strings.
            out["a"][name] = [look("string", i[8:]) if i.startswith("@string/") else unescape(i) for i in items]
        outputs[lang] = json.dumps(out, ensure_ascii=False, indent=1, sort_keys=True) + "\n"
        print(f"{lang} (v{version['name']} ({version['code']})): {len(out['s'])} strings, {len(out['p'])} plurals, {len(out['a'])} arrays")
    if warnings:
        print("\n".join("warning: " + w for w in warnings))
    if errors:
        print("\n".join(errors))
        sys.exit("nothing written")
    for lang, text in outputs.items():
        (OUT / f"{lang}.json").write_text(text)


if __name__ == "__main__":
    main()
