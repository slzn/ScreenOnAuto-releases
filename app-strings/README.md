# Translating ScreenOnAuto

The app's text lives in this folder. These are the same Android resource
files the app is built from, so a fix merged here ships in the next release. Corrections are
welcome: a word that sounds machine-made, a setting whose name doesn't match what the phone
calls it, a typo.

## Where your language is

| Folder | Language | | Folder | Language |
|---|---|---|---|---|
| `values` | English (the source) | | `values-pl` | Polski |
| `values-zh-rTW` | 繁體中文 | | `values-pt` | Português (Brasil) |
| `values-zh-rCN` | 简体中文 | | `values-ru` | Русский |
| `values-ja` | 日本語 | | `values-uk` | Українська |
| `values-ko` | 한국어 | | `values-tr` | Türkçe |
| `values-de` | Deutsch | | `values-in` | Bahasa Indonesia |
| `values-es` | Español | | `values-vi` | Tiếng Việt |
| `values-fr` | Français | | `values-th` | ไทย |
| `values-it` | Italiano | | `values-ar` | العربية (right-to-left) |
| `values-nl` | Nederlands | | | |

Indonesian is `values-in`, not `id`: Android resource folders use the old locale code.
`values-pt` is Brazilian Portuguese (`tela`, not `ecrã`).

Each folder has `strings.xml` and, for most languages, `arrays.xml`. Change only the text
between the tags. Never rename, add or remove a `name="…"`.

## How to send a fix

1. Edit the file on GitHub (the pencil icon) or in a fork.
2. Keep one language per pull request, and say in the description what was wrong and why the
   new wording is better. If you are not sure, open an issue instead and describe it there.
3. A check runs on the pull request (`tools/check_strings.py`). If it fails, the log names
   the line and the problem.

You can run the same check locally: `python3 tools/check_strings.py` from the repository root.

## Rules the check enforces

- **Keep every placeholder exactly.** `%1$s`, `%2$d`, `%d` are filled in by the app. You may
  move them within the sentence, but not drop, add or renumber them.
- **Escape apostrophes and quotes:** write `\'` and `\"`. A bare `'` breaks the build. (Ukrainian
  uses the typographic `’`, which needs no escaping.)
- **A value cannot start with `@` or `?`** — write `\@` or `\?`.
- **A literal percent sign** in a string with no placeholders needs `formatted="false"` on the
  `<string>` element, or write `%%`.

## Style

- **"Android Auto" is always spelled out**, never "AA". Connecting and disconnecting are said
  of Android Auto; "the car's screen" (zh 車機) means only the head unit's display.
- **Short.** Setting summaries say what a row does in about one line. Limits and caveats go in
  the dialogs or the website docs, not in summaries.
- **No "(experimental)" or "only for … mirror" in titles.** The app draws those as small tags
  next to the title (`tag_experimental`, `tag_nav_mirror`, `tag_legacy_mirror`).
- **Use the phone's own words** for Android system screens and buttons (Developer options,
  "Display over other apps", the screen-capture dialog's Start button), as your language's
  Android shows them.
- **Some strings quote another string's title** — for example the permission-required
  messages quote the permission row's title. If you rename a title, search the file for it.
- **One word per idea within a file.** Pick one term for "mirroring" and keep it:

  | Language | Mirroring | Language | Mirroring |
  |---|---|---|---|
  | de | Spiegelung | pl | dublowanie |
  | es | duplicación | pt | espelhamento |
  | fr | duplication | ru | дублирование |
  | it | mirroring | uk | дублювання |
  | ja | ミラーリング | tr | yansıtma |
  | ko | 미러링 | in | pencerminan |
  | nl | spiegelen | vi | phản chiếu |
  | th | สะท้อนหน้าจอ | ar | النسخ المطابق |
  | zh-TW | 鏡像 | zh-CN | 镜像 |

  "Touch" means the finger sense (fr `tactile`, not `touches`); a German on-screen button is
  `Schaltfläche`, never `Taste`.

## Punctuation by language

- **Quoting a title:** en `"X"` (escaped as `\"`), zh-TW/ja `「X」`, zh-CN `“X”`, ko `‘X’`,
  fr/es/it/ru/uk/ar `«X»`, de `„X“`, pl `„X”`, pt/tr/in/vi/nl/th `“X”`.
- **French** puts a no-break space inside guillemets and before `:` `;` `?` `!`. Write it as
  `&#160;` (for example `«&#160;X&#160;»`, `Note&#160;:`), not as a plain space.
- **Dashes:** a spaced em dash ` — ` everywhere, except German and Polish, which use the spaced
  en dash ` – `. Number ranges use an unspaced en dash (`0–2000`). zh and ja keep the single
  spaced ` — `. Next to `「」` the dash takes no space on that side.
- **Turkish** suffixes on names take an apostrophe (`Android Auto\'ya`), but not after a closing
  quotation mark.
- **Arabic** keeps Western digits (`15 ثانية`).

## License of contributions

By opening a pull request you agree to the terms in the *Contributions* section of
[LICENSE.md](../LICENSE.md).
