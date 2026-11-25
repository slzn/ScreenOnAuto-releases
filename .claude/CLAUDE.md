# ScreenOnAuto Releases

This repository is the public distribution repo for **ScreenOnAuto**, and also serves
the product website via GitHub Pages at **https://screenonauto.lzn.idv.tw/**.
Source code is kept private; this repo holds the READMEs, the website, and release APKs.

## Languages (i18n rule)

The docs/web ecosystem exists in **15 languages: en / zh-TW / pt-BR / es / de / fr / it / tr / ar / ko / ru / vi / id / ja / th**
(fr/it added 2026-07-17; tr added 2026-07-17, ar added 2026-07-20 — both chosen from
tester-roster language analysis; ko added 2026-08-14; ru added 2026-10-06; vi, id and ja added 2026-10-15; th added 2026-11-18) — READMEs, landing pages, docs, and
the wiki. **Any content edit must be synced to all fifteen languages.** Never update just one.

Korean page names: wiki `Google-Play-테스트-프로그램으로-설치` / `사용-방법` / `ADB로-미러링-권한-부여`;
site `ko/` + `docs/ko/<slug>`. Terminology follows the app's `values-ko` strings —
mirroring is `미러링`, the privileged section is `특권 기능`, screen-off is
`휴대전화 화면 끄기`, touch forwarding is `터치 전달`.

Russian page names: wiki `Установка-через-программу-тестирования-Google-Play` / `Как-пользоваться` /
`Выдача-разрешения-на-дублирование-через-ADB` / `Управление-дублированием-из-другого-приложения`;
site `ru/` + `docs/ru/<slug>`. Terminology follows the app's `values-ru` strings —
mirroring is `дублирование (экрана)`, the privileged section is `Привилегированные функции`,
screen-off is `Выключать экран телефона`, touch forwarding is `Передача касаний`.

Vietnamese page names: wiki `Cài-đặt-qua-chương-trình-thử-nghiệm-Google-Play` / `Cách-sử-dụng` /
`Cấp-quyền-phản-chiếu-qua-ADB` / `Điều-khiển-phản-chiếu-từ-ứng-dụng-khác`;
site `vi/` + `docs/vi/<slug>`. Terminology follows the app's `values-vi` strings —
mirroring is `phản chiếu (màn hình)`, the privileged section is `Tính năng đặc quyền`,
screen-off is `Tắt màn hình điện thoại`, touch forwarding is `Chuyển tiếp cảm ứng`; quotes are `“X”`.

Indonesian page names: wiki `Instal-melalui-Program-Pengujian-Google-Play` / `Cara-Menggunakan` /
`Berikan-Izin-Pencerminan-melalui-ADB` / `Kontrol-Pencerminan-dari-Aplikasi-Lain`;
site `id/` + `docs/id/<slug>` (BCP 47 `id`; the app's resource folder is the legacy `values-in`).
Terminology follows `values-in` — mirroring is `pencerminan (layar)`, the privileged section is
`Fitur istimewa`, screen-off is `Matikan layar ponsel`, touch forwarding is `Penerusan Sentuhan`;
the phone's own Settings app is `Setelan`, the app's settings are `Pengaturan`.

Japanese page names: wiki `Google-Play-テストプログラムでインストール` / `使い方` /
`ADB-でミラーリング権限を付与` / `他のアプリからミラーリングを操作`; site `ja/` + `docs/ja/<slug>`.
Terminology follows `values-ja` — mirroring is `ミラーリング`, the privileged section is `特権機能`,
screen-off is `スマホの画面を消灯する`, touch forwarding is `タッチ転送`; the phone is `スマホ` (but `端末`
for the device ADB sees or "the same device"), prose is です・ます. Android system labels come from AOSP's `values-ja` (e.g. Connected devices = `接続設定`,
`開発者向けオプション`, `USB デバッグ`, `他のアプリの上に重ねて表示`, the capture dialog's `今すぐ開始`).
Punctuation is full-width (`：` with no space after it — the only `: ` left is the template-driven
`最終更新: <date>` stamp; parentheses in prose are full-width even around Latin text — `（実験的）`,
`（API 24）`, `（Android 15 以上）` — as zh-TW does; only the landing cards' `<span class="muted">(Android 15+)</span>`
tag stays half-width, the same in every language); katakana compounds are written solid (`テスターリスト`,
`ダウンロードリンク`) except official spaced names (`ワイヤレス デバッグ`, `コマンド プロンプト`).
Like zh-TW, keep each paragraph on one line (a soft break renders as a stray space) and run
`tools/bold_check.py` on the wiki pages and README — `**…）**です` and `*（注）*です` show literal
asterisks on GitHub (the site's kramdown is more lenient, but the wiki is the source).

Thai page names: wiki `ติดตั้งผ่านโปรแกรมทดสอบของ-Google-Play` / `วิธีใช้` / `ให้สิทธิ์สะท้อนหน้าจอผ่าน-ADB` /
`ควบคุมการสะท้อนหน้าจอจากแอปอื่น`; site `th/` + `docs/th/<slug>`. Terminology follows `values-th` —
mirroring is `สะท้อนหน้าจอ` (the mirror image `ภาพสะท้อน`), the privileged section is `ฟีเจอร์สิทธิ์พิเศษ`,
screen-off is `ปิดหน้าจอโทรศัพท์`, touch forwarding is `ส่งต่อการสัมผัส`, real touch injection is `ส่งการสัมผัสจริง`;
the phone is `โทรศัพท์`; quotes are `“X”`. Thai has no word spaces — a space marks a clause or sentence break and
there are no full stops — so keep each paragraph on one line (a soft break renders as a stray space) and
run `tools/bold_check.py` like the CJK languages. Fonts: Chakra Petch covers Thai; IBM Plex Mono doesn't
(falls back to the system font, as for ru/CJK/ar). Android system labels were written from memory of AOSP's
`values-th` (`ตัวเลือกสำหรับนักพัฒนาซอฟต์แวร์`, `การแก้ไขข้อบกพร่องผ่าน USB`, `แสดงทับแอปอื่น`, the capture dialog's `เริ่มเลย`);
Android Auto's Customize Launcher is left as `ปรับแต่ง Launcher` — have a Thai tester confirm the labels.

French copy (site, wiki, README, /join/ strings) uses a **no-break space (U+00A0)** before `: ; ? !` and inside
`« »`, so the mark never wraps onto its own line; type it as the character, not `&nbsp;` (Markdown and the
wiki would show the entity). Not in code spans, command lines or JavaScript — and not in a GitHub heading
that has no explicit id (README, wiki): GitHub's slugger drops U+00A0, which changes the heading's anchor
(e.g. README.fr's KingInstaller heading, linked as `#alternative--android-13-et-moins--installation-…`).

The `/join/` sign-up page (`i18n/join/index.html`, copy in `assets/join-strings.js`) is
also 15-language. It is the only way to become a tester: half-hourly rounds of up to 95,
run by the rotation backend in the private tooling repo. The old Google Forms + opt-in
email roster was retired and deleted on 2026-10-01 — don't reintroduce form links.
The app UI itself has 19 locales; all but zh-CN, pl, nl and uk have docs (the app's Indonesian is `values-in`). Doc terminology must
match the app's `values-<lang>` strings (e.g. fr "duplication", it "mirroring", tr "yansıtma",
ar "النسخ المطابق").

Turkish page names: wiki `Google-Play-Test-Programı-Üzerinden-Yükleme` / `Nasıl-Kullanılır` /
`ADB-ile-Yansıtma-İzni-Verme`; site `tr/` + `docs/tr/<slug>`.

**Arabic (ar) is the only RTL language.** Page names: wiki
`التثبيت-عبر-برنامج-اختبار-Google-Play` / `طريقة-الاستخدام` / `منح-إذن-النسخ-المطابق-عبر-ADB`;
site `ar/` + `docs/ar/<slug>`. RTL plumbing: `i18n/ar/index.html` sets
`<html lang="ar" dir="rtl">` (its carousel is pinned `dir="ltr"` — carousel.js
scrollLeft math breaks under RTL); `_layouts/doc.html` emits `dir="rtl"` for
languages marked `rtl: true` in `_data/languages.yml` (only ar); `assets/styles.css` ends with a `[dir="rtl"]` override block for the
physical left/right rules (table alignment, steps counter, blockquote accent border,
docbar spacing). Keep those overrides in sync when adding direction-dependent CSS.

### Adding a language

`_data/languages.yml` is the single list the build reads: one row there gives the new
language its entry in every language menu, its hreflang alternate on every landing page
(`_includes/hreflang.html`), and its "last updated" label and text direction on doc
pages. Since 2026-10-15 nothing about the language list is hard-coded in a template —
do not reintroduce per-language `case`/`when` branches or hand-written hreflang lines.

What Jekyll cannot reach still has to be added by hand:

- the landing page `i18n/<code>/index.html` (copy one; keep its `permalink` front matter)
  and the seven `docs/<code>/<slug>.md` pages (the four guides plus `privacy-policy.md`,
  `terms-of-use.md` — every landing-page footer and the `/join/` footer link to both, so a
  missing copy 404s — and `settings.md`, after which `python3 tools/settings-ui-strings.py`
  must be re-run so its phone gets `assets/settings-ui/<code>.json`; the app resource folder
  mapping for codes that differ lives in that script's `FOLDER`);
- `.github/README.<code>.md`, plus the switcher line in every other README (GitHub
  renders READMEs directly, without Jekyll);
- `sitemap.xml`: the new URLs, and a `hreflang` alternate in every existing block;
- a block in `assets/join-strings.js` with the same keys as `en`;
- the wiki: four pages, every guide's switcher line, and `Home.md`;
- the language counts in this file, and the release step's `LANGS` set.
- the app's About dialog, which picks the docs language for its Privacy Policy / Terms links
  from its own set of site languages (private app source) — a language missing there opens English.

`tools/sync-content-dates.py` ignores hreflang-only diffs, so registering a language does
not restamp the other pages' "last updated" dates.

## App strings (`app-strings/`, since 2026-11-25)

The app's string resources are published here so users can correct translations by pull
request. **This folder is the source of truth**; the private app repo keeps a copy that it
builds from, and the two are reconciled by a sync tool kept in the app repo (it copies
whichever side changed, and stops on a conflict). So:

- **After merging a translation PR,** run that sync in the app repo, build, and commit there —
  the fix only ships once the app copy has it.
- **String changes made in the app repo** go out through the same sync; commit them here as
  their own change.
- `tools/check_strings.py` (CI: `.github/workflows/check-strings.yml`, on PRs touching
  `app-strings/`) checks keys, format arguments and escaping against `values/`. A locale must
  carry every translatable key — a missing one fails, since the app ships no English fallback.
- `app-strings/README.md` is the public translation guide (style rules, terminology,
  punctuation per language). Keep it in step with the app's own string conventions, minus
  internal implementation detail. Contributions are licensed under LICENSE.md's
  *Contributions* section.
- Every README has a short "Help Translate" section (before Special Thanks) linking there.

## Repository Structure

```
ScreenOnAuto-releases/
├── README.md               ← English; the only README at the root (GitHub renders it)
├── .github/README.<lang>.md← the 14 translated READMEs (zh-TW/pt-BR/es/de/fr/it/tr/ar/ko/ru/vi/id/ja/th)
├── CNAME                   ← screenonauto.lzn.idv.tw (GitHub Pages custom domain)
├── index.html              ← English landing page (the only page served from the root;
│                             carries empty `layout: null` front matter so Liquid includes work)
├── i18n/<lang>/index.html  ← translated landing pages, one dir per language
├── _data/languages.yml     ← the language list: code, own name, menu label, "last updated" label, rtl
├── _includes/tools.html    ← shared top-right cluster: GitHub icon · language menu · theme toggle
├── _includes/hreflang.html ← the landing pages' hreflang alternates, generated from _data/languages.yml
├── assets/styles.css       ← shared landing-page stylesheet
├── assets/carousel.js      ← shared carousel script
├── docs/<lang>/<slug>.md   ← on-site copies of the 4 wiki guides × 15 languages, plus privacy-policy.md, terms-of-use.md and settings.md (site-only)
├── _config.yml             ← Jekyll config; defaults apply _layouts/doc.html to docs/
├── _layouts/doc.html       ← doc layout: SEO head, hreflang (Liquid, from slug+lang), TechArticle JSON-LD
├── app-strings/values*/    ← the app's strings.xml + arrays.xml × 19 locales — the SOURCE of the app's
│                             text (Jekyll-excluded; README.md there is the public translation guide)
├── .github/CONTRIBUTING.md ← points contributors at app-strings/README.md
├── images/                 ← site images (incl. how-to-use screenshots)
├── robots.txt / sitemap.xml← this site's own SEO files (sitemap: 120 URLs)
├── <32-hex>.txt            ← IndexNow key file; must sit at the site root to cover the whole host
│                             (the key is public by design; it is also KEY in tools/indexnow.py)
├── tools/                  ← excluded from the site in _config.yml; sync-content-dates.py (run by CI), indexnow.py
│                             (run by CI after Pages deploys a push: submits the pages whose content changed to
│                             IndexNow — Bing etc., not Google; `--dry-run` to preview), check_strings.py (CI on
│                             app-strings/ PRs, see "App strings"), and bold_check.py (lists * / ** that
│                             GitHub won't render as emphasis — run it on CJK wiki/README copy: `tools/bold_check.py <files>`)
├── .claude/CLAUDE.md       ← This file (tracked; Jekyll skips dot-dirs, so it is
│                             never published as a page)
├── .claude/settings.local.json ← personal Claude Code settings (gitignored)
├── marketing-mocks/        ← carousel mock sources (gitignored)
└── release/                ← Local APK storage (gitignored)
    └── ScreenOnAuto-V{versionName}.apk
```

### Layout rules (restructured 2026-07-27 to keep the GitHub root readable)

- **The root holds only what must be there.** GitHub renders the README below the
  file listing, so every extra root entry pushes the content down. Before adding a
  file to the root, check whether it can live in `assets/`, `i18n/`, or `.github/`.
- **`.github/` is Jekyll-excluded.** The translated READMEs are no longer published
  as `/README.<lang>.html`. Their relative links use `../images/…` and `../README.md`;
  the root README links to them as `.github/README.<lang>.md`.
- **`i18n/<lang>/index.html` is decoupled from its URL.** Each carries front matter
  with `layout: null` and an explicit `permalink: /<lang>/`, so the served URLs
  (`/zh-TW/`, `/pt-BR/`, …) are unchanged and sitemap/canonical/hreflang stay valid.
  **Never remove that front matter**, and add it to any new language dir.
- Because source depth no longer matches URL depth, **landing-page asset links must be
  root-relative** (`/assets/styles.css`, `/assets/carousel.js`). The `../images/…`
  favicon/OG paths still work only because the permalink keeps the URL one level deep.

## Design system (since 2026-07-23)

Site-wide "night-drive" visual identity, shared with the hub (lzn.idv.tw):

- **Tokens:** single-source `light-dark()` values in `assets/styles.css` `:root` (dark-first
  asphalt/signal-green/amber). "Screen" surfaces (`--panel*`) stay dark in both themes.
- **Type:** Chakra Petch (display/H1/H2/buttons) + IBM Plex Mono (eyebrows, captions,
  footer) via Google Fonts `<link>` in every page head; body stays system-ui.
- **Top-right tools (since 2026-09-30):** `_includes/tools.html`, used by all fifteen landing
  pages (`{% include tools.html lang="<code>" %}`) and inside the docbar of
  `_layouts/doc.html` (`lang=page.lang`). It holds a GitHub icon link, the **settings-guide
  button** (since 2026-11-25: book icon + the `guide` label from `_data/languages.yml`, `guide_title`
  as its tooltip; shown as the current page on the guide itself; icon only at ≤640px; not on
  `/join/`), a `<details>` language menu, and the light/dark toggle. The menu lists all fifteen languages. The current
  one is ticked and not linked. On doc pages it links to the same doc in each language,
  via the layout's `variants`. It replaced the hero's language row, which also carried a
  GitHub link, and the docbar's language list. The cluster is `position: absolute`
  (scrolls away), left in RTL. The pre-paint script in `<head>` still reads localStorage
  `theme` and falls back to the system setting.
- **Hero:** eyebrow + h1-with-icon + two `.paths` install cards (Play, labelled
  "Recommended · any Android version" / ≤13 APK) — these **replaced the old `.cta` buttons and the yellow `.notice` block**
  (notice content was merged into the cards). Features grid is tiered
  `.grid.core` (3) + `.grid.more` (6), one-sentence cards; Privileged Features is tiered the
  same way: `.grid.core` (3 main: screen off, touch injection, match screen) + `.grid.more`
  (2 minor: nav buttons, and one "phone settings while mirroring" card covering follow day/night,
  font size, navigation mode and launcher (home screen while mirroring, v1.10.1) — merged 2026-10-28 rather than growing to 4 cards; a
  `#privileged .grid.more` rule makes that grid `auto-fit` so the two stretch instead of leaving a column empty). `.grid.priv` was removed (2026-10-27). Keep the landing page short: troubleshooting and long caveats
  belong in How to Use → Troubleshooting, and the landing page links there (2026-09-30).
- **Carousel** is framed as a head-unit bezel purely via CSS (markup/carousel.js
  unchanged); top 3px of slide images are clipped in CSS (baked-in artifact).
- **RTL:** `[dir="rtl"]` block at the end of assets/styles.css also moves the `.tools` cluster and
  zeroes letter-spacing (Arabic joining) — keep in sync for new components.
- **Doc pages:** content screenshots auto-frame as dark panels via
  `.doc p:has(> img:only-child)` (top 3px clipped — source images carry a dashed
  artifact); `.doc ol` reuses the circled step counters; portrait images cap at
  560px height (capture-dialog.jpg is pre-cropped to just the dialog).
  How to Use shows its two mirror entries in `<table class="entry-pair">` (a plain HTML
  table, so the wiki puts them side by side too; the docs CSS drops its borders and stacks
  it at ≤640px). Each screenshot in it sits in its own `<p>`, so it picks up the same frame
  and crop — keep it that way rather than styling the cells' images separately.
  Troubleshooting is one `####` per problem under two `###` groups, so each is linkable.
- Any future structural edit to one landing page must still be replicated to all fifteen.

## Website (GitHub Pages)

- **URL:** https://screenonauto.lzn.idv.tw/ (project-site custom domain; DNS = HiNet
  CNAME `screenonauto` → `slzn.github.io`). Old `/ScreenOnAuto-releases/` paths and
  github.io URLs 301 here. All internal links use **root-relative paths**.
- **Landing pages:** `index.html` (en) + one per language dir; SEO head + hreflang +
  JSON-LD (author: Chih-En Liu). **README content edits must be mirrored into the
  landing pages** (all 15 languages).
- **Screenshot carousel** (added 2026-07-17): the hero screenshot is a carousel —
  `.carousel` markup in each landing page + shared `assets/carousel.js` (CSS-scroll-snap
  based, autoplay 6 s, dots/arrows generated by JS). **To add a slide:** append one
  `<figure class="shot"><img …><figcaption>…</figcaption></figure>` inside
  `.carousel-track` in **all 15 landing pages** with localized alt/caption; dots update
  automatically. Keep images 1200×450 like the existing ones. og:image and JSON-LD
  screenshot stay a single static image (`screenshot-legacy-split.png`). Slide 2 (market
  dashboard) is a composited mock: brand-free fictional-content page rendered headless
  and pasted into the mirror area of the legacy-split shot (source in gitignored
  `marketing-mocks/`; mirror area = x58–803, y57–392). Future slide ideas ON HOLD
  (user, 2026-07-17) — shortlist if revived: airport arrivals board > live sports
  scores > casual game (shows touch forwarding) > video-call grid; rejected as
  low-appeal: weather radar, Media Controller shot, delivery-app mock.
- **Docs:** `docs/<lang>/<slug>.md`, slugs `join-the-beta-test` / `how-to-use` /
  `grant-mirror-permission-via-adb` / `control-mirroring-from-another-app`. These are **converted copies of the wiki pages** —
  the wiki is the editing source (see below).
- **Privacy policy** (added 2026-11-18): `docs/<lang>/privacy-policy.md` × 15, linked from every
  landing-page footer, the `/join/` footer (`privacyLink` in join-strings.js; the link carries
  `data-doc="privacy-policy"` and join.js points every `a[data-doc]` at the page's language) and each README's `## Privacy` section. There is no hand-written effective
  date: the layout's "Last updated" stamp is the policy's date. It is the one docs page with
  **no wiki counterpart** — edit it here directly. Its URL (`/docs/en/privacy-policy/`) is the
  one to give Play Console if it ever asks for a privacy-policy link. Every claim in it is
  checked against the app: no `INTERNET` permission (incl. the merged manifest), the
  accessibility service reads no window content, the notification listener only uses
  `getActiveSessions`, `allowBackup=true`; the `/join/` server logs neither IP nor email (Caddy has no access log); `/join/` loads Google
  Identity Services and keeps the ID token in sessionStorage (`join.idToken`) — the website
  section says so. **If the
  app ever gains network access, a new permission or an SDK, update the policy (15 languages)
  and the README Privacy sections in the same change.**
- **Terms of use** (added 2026-11-18): `docs/<lang>/terms-of-use.md` × 15, the same site-only
  setup as the privacy policy (footer link next to it, `termsLink` + `data-doc="terms-of-use"` on `/join/`,
  no wiki copy, "Last updated" is its date). Decided with the user: free to use by anyone
  (no "personal use" limit, so professional drivers are fine, with a line telling them to follow
  employer/platform rules), no modify/decompile-and-redistribute and no republishing under the
  ScreenOnAuto name; no governing-law clause and no age clause. It names the privileged/rotation
  settings that can stay changed (plus Turn the Phone Screen Off → press power twice) and the
  `wm size/density reset` fix — keep that list in step
  with the app. Each README's Disclaimer has a one-line "as is, at your own risk" link to it.
- **Settings guide** (added 2026-11-25, all 15 languages): `docs/<lang>/settings.md`, site-only like
  the privacy policy (no wiki copy). **Entry points** (keep them when the page moves or is renamed):
  the top tools button (see Design system), a sentence after "Ready? See How to Use" on every
  landing page and README, a landing-footer link after Wiki, and a short section before
  Troubleshooting in every How to Use (wiki → site URL, docs → `/docs/<lang>/settings/`). How to Use
  also links setting names in its text to their guide anchors (`[**Name**](…/settings/#key)`, bold
  inside the link so it renders next to CJK on GitHub) and puts the launcher icon before a mirror's
  name where it matters; renaming a heading id in `settings.md` breaks those links in all 15. Front matter `settings_phone: true` makes `_layouts/doc.html`
  load `assets/settings-phone.css` + `.js` and give `<main>` the two-column `doc-wide` class
  (sticky phone left ≥1100px; below that the title comes first, then the phone). The page body is
  `<div class="sp-intro" markdown="1">` (h1 + intro), an `<aside class="sp-aside">` holding
  `#settings-phone` and its hint, then `<div class="sp-doc" markdown="1">` (everything else).
  - The phone is a replica of the app's four settings screens. **Its structure lives in
    `assets/settings-phone.js`** (`pages()`), copied from the app's `res/xml/*_preferences.xml`
    (row order, defaults, tags, dependencies); **its words come from `app-strings/`** via
    `tools/settings-ui-strings.py` → `assets/settings-ui/<lang>.json` (only the names the JS
    uses, for every language that has a `settings.md`; a missing name fails the script).
    The JSON also carries the version shown in the phone's About row. **It is regenerated
    at each release** (Publishing a New Release, step 1c), not when a translation PR is
    merged, so the phone always matches the released app. Edit `pages()` when the app adds,
    removes or reorders a setting, and then the sections in every `settings.md`.
  - Each row's `doc` (default: its key) is the id of its section — headings carry explicit
    `{#preference_key}` ids, identical in every language, so rows and the "Show setting"
    buttons work unchanged. The JS adds a button after every `h3`/`h4` whose id a row uses; its
    CSS arrow points at the phone (↖ beside it, ↑ above it — flip ↖ to ↗ for RTL).
  - **Section numbers** ("chapter-section", e.g. 2-1) are computed by the JS from the order of
    the h2/h3/h4 in `settings.md` — never write them into the Markdown. The manual shows each
    as its "Show setting" button (just "↖ 2-1"; the words are its tooltip and aria-label); the phone shows it in a gutter *outside* its frame
    (`.sp-nums`), once per setting (the first row of a group), so the replica stays exactly as
    the app draws it. RTL: the gutter moves to the right side.
  - Caveats the app's summaries leave out (see the app repo's string rules) belong here.
  - **Mirror names are marked up** — `<span class="sp-mirror nav">「ScreenOnAuto」鏡像</span>` /
    `<span class="sp-mirror legacy">…</span>` around every mention of either mirror (with the
    language's own quoting/bold inside); CSS puts the launcher icon *in front* of it. Not
    matched by script, because "ScreenOnAuto" alone is also the app's name. Translations must
    keep the spans. Other inline UI in the text: `.sp-ui-go` (the status panel's Start/Stop
    buttons, wording hand-written), `.sp-who.you` (marks only the steps the reader does; automatic ones stay unmarked),
    `img.sp-entry` (entry icons standing on their own, e.g. "either entry (icon or icon)").
  - **Diagrams** live in `images/settings/*.svg`, drawn by `tools/settings-diagrams.py` (edit and re-run
    it rather than hand-editing an SVG). They carry **no text**, so every language shares
    them; captions and alt text are in each `settings.md` (`<div class="sp-figs">` of `<figure>`s).
    They have their own colours (a dark car screen in both site themes, bars pure black on a
    lighter `#243140` backdrop, cut-off parts hatched amber, the usable area a dashed green frame).
  - RTL (ar): the replica's paddings are logical, so it mirrors by itself; the `[dir="rtl"]` block
    at the end of `settings-phone.css` handles what stays physical (number gutter on the right,
    switch thumb and slider, ↗ arrow, mirrored ← and ›). The diagrams are not mirrored: they show
    physical geometry (the mirror is anchored at the car area's top-left in every language).
- GitHub Pages renders **any** root `.md` into `<name>.html` with the primer theme,
  front matter or not — verified 2026-07-27: `/README.zh-TW.html` was live, themed, and
  **self-canonical**, i.e. indexable duplicate content competing with `/zh-TW/`. Moving
  the translations into Jekyll-excluded `.github/` removes those 8 pages. (`/README.html`
  itself 404s — the root `index.html` wins that slot.) Keep this in mind before adding
  any new `.md` to the repo root.
- The main hub **https://lzn.idv.tw/** lives in `~/data/workspace/slzn.github.io/`
  (separate repo, own CLAUDE.md).

## Wiki

The GitHub Wiki is a **separate git repository** maintained at:

```
~/data/workspace/ScreenOnAuto-wiki/
```

Remote: `https://github.com/slzn/ScreenOnAuto-releases.wiki.git`

### Current pages

`Home.md` plus **4 guides × 15 languages** (60 guide pages):

| Lang | `join-the-beta-test` | `how-to-use` | `grant-mirror-permission-via-adb` | `control-mirroring-from-another-app` |
|---|---|---|---|---|
| en | Install-via-the-Google-Play-Testing-Program | How-to-Use | Grant-Mirror-Permission-via-ADB | Control-Mirroring-from-Another-App |
| zh-TW | 透過-Google-Play-測試計畫安裝 | 如何使用 | 使用-ADB-授予鏡像權限 | 從其他應用程式控制鏡像 |
| pt-BR | Instalar-pelo-programa-de-testes-do-Google-Play | Como-Usar | Conceder-Permissão-de-Espelhamento-via-ADB | Controlar-o-Espelhamento-a-partir-de-Outro-App |
| es | Instalar-mediante-el-programa-de-pruebas-de-Google-Play | Cómo-Usar | Conceder-Permiso-de-Duplicación-por-ADB | Controlar-la-Duplicación-desde-Otra-App |
| de | Über-das-Google-Play-Testprogramm-installieren | Verwendung | Spiegelungsberechtigung-per-ADB-erteilen | Spiegelung-aus-einer-anderen-App-steuern |
| fr | Installer-via-le-programme-de-test-Google-Play | Comment-utiliser | Accorder-la-permission-de-duplication-via-ADB | Contrôler-la-duplication-depuis-une-autre-application |
| it | Installare-tramite-il-programma-di-test-di-Google-Play | Come-si-usa | Concedere-il-permesso-di-mirroring-via-ADB | Controllare-il-mirroring-da-altre-app |
| tr | Google-Play-Test-Programı-Üzerinden-Yükleme | Nasıl-Kullanılır | ADB-ile-Yansıtma-İzni-Verme | Yansıtmayı-Başka-Bir-Uygulamadan-Kontrol-Etme |
| ar | التثبيت-عبر-برنامج-اختبار-Google-Play | طريقة-الاستخدام | منح-إذن-النسخ-المطابق-عبر-ADB | التحكم-في-النسخ-المطابق-من-تطبيق-آخر |
| ko | Google-Play-테스트-프로그램으로-설치 | 사용-방법 | ADB로-미러링-권한-부여 | 다른-앱에서-미러링-제어 |
| ru | Установка-через-программу-тестирования-Google-Play | Как-пользоваться | Выдача-разрешения-на-дублирование-через-ADB | Управление-дублированием-из-другого-приложения |
| vi | Cài-đặt-qua-chương-trình-thử-nghiệm-Google-Play | Cách-sử-dụng | Cấp-quyền-phản-chiếu-qua-ADB | Điều-khiển-phản-chiếu-từ-ứng-dụng-khác |
| id | Instal-melalui-Program-Pengujian-Google-Play | Cara-Menggunakan | Berikan-Izin-Pencerminan-melalui-ADB | Kontrol-Pencerminan-dari-Aplikasi-Lain |
| ja | Google-Play-テストプログラムでインストール | 使い方 | ADB-でミラーリング権限を付与 | 他のアプリからミラーリングを操作 |
| th | ติดตั้งผ่านโปรแกรมทดสอบของ-Google-Play | วิธีใช้ | ให้สิทธิ์สะท้อนหน้าจอผ่าน-ADB | ควบคุมการสะท้อนหน้าจอจากแอปอื่น |

### Updating the wiki — and syncing the on-site docs copies

**The wiki is the editing source.** After editing a wiki guide, sync the corresponding
`docs/<lang>/<slug>.md` copy in this repo (all languages touched), applying these
conversion rules:

- drop the `*🌐 [Web version …]*` backlink line (wiki pages link to their docs copy —
  added 2026-07-17; the docs copy must not link to itself)
- GitHub alert syntax (`> [!NOTE]` etc.) → emoji + bold label on its own quote line,
  localized (e.g. `> **ℹ️ Note**`, `> **❗ Important**`, `> **💡 Tip**`, `> **⚠️ Warning**`)
- wiki page interlinks → on-site docs URLs (`/docs/<lang>/<slug>`)
- README links → landing-page anchors
- image references → `/images/` paths (copy new images into `images/`)
- do **not** hand-edit the layout — `_config.yml` defaults + `_layouts/doc.html` handle
  SEO head, hreflang, and JSON-LD automatically
- `last_modified_at:` in the front matter and the matching `<lastmod>` in `sitemap.xml`
  are stamped **automatically** after a push to `main` by the Sync content dates workflow
  (`tools/sync-content-dates.py`, from the last commit that changed each file's content),
  so a docs edit does not need to touch them. The layout renders the date as both the
  visible "Last updated" stamp and the `TechArticle` `dateModified`; the three must agree
  or Google ignores the date. Pull after pushing — the workflow commits on top. `date:` is
  the first-published date and never changes; a new page sets it (and may set
  `last_modified_at` to the same day). (The release steps below still stamp the *landing
  pages* by hand on purpose: the workflow would only add its dates after the tag, and the
  tagged commit has to carry them. It derives the same date, so it then changes nothing.)

Every wiki guide page carries a localized `*🌐 [Web version …](docs URL)*` line right
after the language-switcher line — keep it when editing, and add one to any new guide
page (15 languages).

```bash
cd ~/data/workspace/ScreenOnAuto-wiki
# edit .md files
git add .
git commit -m "Update wiki"
git push
# then sync docs/ copies in this repo and push
```

All README files link to the wiki guides (blockquote tip after the permissions table).

---

## APK Naming Convention

`ScreenOnAuto-V{versionName}.apk`  
Example: `ScreenOnAuto-V1.1.0.apk`

The APK arrives in `release/` already named — this repo never builds it.

## README Structure Notes

All fifteen READMEs share one structure (en at the root, the other fourteen in `.github/`):

- **Install notice** (IMPORTANT alert under the screenshot):
  - Recommended → Google Play on any Android version, through the half-hourly sign-up at
    `https://screenonauto.lzn.idv.tw/join/?lang=<code>` (Android Auto accepts it with no
    extra setup). Play is presented as THE recommended route, the others as extra options.
  - Android ≤13 → can also sideload with KingInstaller.
  - Have an AAWireless dongle → can install the APK directly on any Android version; link to
    the AAWireless alternative section. Framed as an extra option, not as a fallback for a
    failed Play install.
- **Installation → Google Play (recommended)** is one paragraph: why Play, then sign up on `/join/`
  (30-minute rounds, install link at round start), then a link to the Join the Beta Test
  wiki page. There is no "invite-based" wording and no Google Form any more.
- **Installation → Alternative — Android 13 and below: sideload with KingInstaller** is the KingInstaller flow:
  1. Install KingInstaller. Step 1.2 says to allow unknown-app installs, without a
     hard-coded settings path.
  2. Install `ScreenOnAuto-*.apk` from the latest release.

  (There is no separate "grant permissions" step since PR #48 — the app prompts on first launch.)
- **Installation → Alternative — with an AAWireless dongle** (added 2026-10-23, PR #48): for
  anyone with the dongle who would rather install the APK directly; also covers phones where
  Play can't install (e.g. GrapheneOS with sandboxed Play). Four steps: install the
  APK directly; AAWireless app Passthrough mode off + Developer Mode on; Android Auto
  Developer settings → Application mode Developer + Unknown sources; reboot. The AAWireless
  app's labels (Passthrough mode, Developer Mode) stay in English in every language. The
  landing pages carry only a short `<h3>` + one paragraph that links to this README section
  (`…/blob/main/.github/README.<lang>.md#<anchor>`) — rewording the README heading breaks it.
- **Verify in Android Auto** expects **two** entries: ScreenOnAuto and ScreenOnAuto
  (Legacy). ScreenOnAuto Media Controller appears only on older Android Auto, and its
  absence is normal. Do not describe it as a required entry.
- **Privileged Features**: a one-line intro, the table of the three main features (screen
  off, real touch injection, match the phone screen), an "Also with Shizuku or root" list of
  the minor ones (phone navigation buttons, follow day/night mode *(Android 10+)*, font size
  while mirroring, navigation mode while mirroring *(Android 10+)*, home screen while mirroring — described as switching to another launcher, since "home screen" alone does not say so) with a line saying the phone's own theme, font size, navigation mode and launcher come back, and a
  single line linking to How to Use → Troubleshooting (the Shizuku-over-USB and screen-wake notes live there).
  Since 2026-10-14 that link, here and on the landing pages, targets the troubleshooting
  group's own heading, "Privileged Features (Shizuku / root)" — `#privileged-features-shizuku--root`
  and its counterpart in each language, generated from the heading text by both GitHub and
  Jekyll. (The settings-guide section added before Troubleshooting on 2026-11-25 renamed no
  heading, so these anchors are unchanged.) **Rewording that heading in any language breaks its two links** (README +
  landing page); read the new anchor from a local build before changing them.
- **Known limitations → Google Maps black screen** (Android 15+): the README bullet and
  the landing `<li>` link to the How to Use troubleshooting heading "Android Auto's Google
  Maps turns black while mirroring" — `#android-autos-google-maps-turns-black-while-mirroring`
  and its counterpart in each language. The same rule applies: rewording that heading in
  any language breaks its two links. The landing `<li>` stays at the cause plus the link;
  the fix steps, the restart note and the one-time-code caveat live in How to Use.
- **Privacy** (added 2026-11-18): a four-bullet `## Privacy` section between Permissions and
  Known Limitations (no internet permission; no ads/analytics/account; what the notification
  listener and accessibility service do and don't read; `/join/` uses only the email, deleted
  after the round), ending with a link to `/docs/<lang>/privacy-policy/`. Keep it in step with
  the policy page.
- The READMEs keep the full Features list. The landing pages carry the condensed
  9-card version. Keep the two consistent in substance, not in length.

When the install flow changes, update all fifteen READMEs **and** the fifteen landing pages.

## Publishing a New Release

Everything upstream of this — version bump, building and signing the artifacts, and the
source-side tag — is **out of scope for this file**; it lives in the private app repo's
`release` skill, which hands over to the steps below once the APK is sitting in
`release/`.

### Step 1 — Update landing pages (EVERY release) + READMEs (usually a no-op)

**1a. Landing-page version bump — required every release (easy to forget):** all 15
landing pages carry `"softwareVersion": "<version>"` in their JSON-LD block — update
it in `index.html` + `i18n/<lang>/index.html` (all 15 languages), and bump the
`<lastmod>` of the 15 **landing-page** URL blocks in `sitemap.xml` to today (leave the
docs blocks alone):

```bash
cd ~/data/workspace/ScreenOnAuto-releases
sed -i 's/"softwareVersion": "{prev}"/"softwareVersion": "{versionName}"/' index.html i18n/*/index.html
```

**Do not `sed` the date across `sitemap.xml`.** More URL blocks carry the previous
release's date than the fifteen landing pages do — `sync-content-dates.yml` stamps that same
date onto every doc it touched in the interval, so a blanket replace silently back-dates
them all. (Concretely, at v1.8.4 fourteen blocks held `2026-09-15`: the ten landing pages
and four German/Italian docs.) Select on `<loc>` instead, which cannot pick up a doc no
matter how the dates line up:

```bash
python3 - <<'EOF'
import re
LANGS = {'', 'zh-TW/', 'pt-BR/', 'es/', 'de/', 'fr/', 'it/', 'tr/', 'ar/', 'ko/', 'ru/', 'vi/', 'id/', 'ja/', 'th/'}
BASE, NEW = 'https://screenonauto.lzn.idv.tw/', '{new-date}'
s = open('sitemap.xml').read()
def fix(m):
    b = m.group(0)
    loc = re.search(r'<loc>(.*?)</loc>', b).group(1)
    if not loc.startswith(BASE) or loc[len(BASE):] not in LANGS:
        return b                                   # docs/ and anything else: untouched
    return re.sub(r'<lastmod>.*?</lastmod>', f'<lastmod>{NEW}</lastmod>', b)
open('sitemap.xml', 'w').write(re.sub(r'<url>.*?</url>', fix, s, flags=re.S))
EOF

# Must print 15, and the XML must still parse
grep -c '<lastmod>{new-date}</lastmod>' sitemap.xml
python3 -c "import xml.dom.minidom; xml.dom.minidom.parse('sitemap.xml'); print('valid')"
```

**Also bump the three date signals in the same 15 files** (added 2026-07-30 so Google can
show a date in search results — they must stay mutually consistent or Google ignores them):

- JSON-LD `"dateModified"` → the release date
- the visible footer stamp `<p class="updated">…<time datetime="YYYY-MM-DD">` → same date
- the landing `<lastmod>` in `sitemap.xml` → same date

`"datePublished": "2026-05-13"` (the v1.0.0 release) never changes.

```bash
sed -i 's/{prev-date}/{new-date}/g' index.html i18n/*/index.html   # hits dateModified + <time> + text
```

**1b. READMEs — usually a no-op.** The READMEs reference the APK **version-agnostically** —
`ScreenOnAuto-*.apk` downloaded from the
[latest release](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) page (Step 2 of the
Android 13 and below install section in every README) — so a routine version bump needs **no README edit**.
The GitHub Release in Step 3 (`--latest`) is what makes that link resolve to the new build.
Only edit the READMEs when the install flow itself changes (e.g. the KingInstaller
sequence or the Google Play sign-up) — then update **all fifteen READMEs and the fifteen landing pages**.

**1c. Settings guide phone — required every release.** The replica on `docs/<lang>/settings/`
shows the *released* app, so it is regenerated here and nowhere else (decided 2026-11-25: not
on every merged translation PR, or the site would run ahead of the app people have). By now
the app repo's release step 0 has made `app-strings/` match the build, so this picks up the
release's wording, and records its version for the phone's About row:

```bash
python3 tools/settings-ui-strings.py --version {versionName} --code {versionCode}
```

It fails on a string name the app no longer has — then update `pages()` in
`assets/settings-phone.js` (and the matching sections of every `settings.md`) before going on.
If the release renamed a setting, also check the `settings.md` prose that names it in bold:
the script only updates the phone, not the text.

Commit whatever Step 1 touched:

```bash
git add -A
git commit -m "Bump landing pages to v{versionName}"   # or "Release ScreenOnAuto v{versionName}" if READMEs changed too
```

### Step 2 — Tag and push (this repo)

```bash
git tag -a v{versionName} -m "ScreenOnAuto v{versionName}"
git push origin main --tags
```

`git push origin main` is a safe no-op when there was no README commit; `--tags` pushes the new tag regardless.

### Step 3 — Create GitHub Release with APK and release notes

```bash
gh release create v{versionName} \
  release/ScreenOnAuto-V{versionName}.apk \
  --title "ScreenOnAuto v{versionName}" \
  --notes "$(cat <<'EOF'
## What's New

### Bug Fixes
- ...

### Improvements
- ...
EOF
)" \
  --latest
```

Draft release notes from commits since the previous tag (run in the app repo):
```bash
git log --oneline v{prev}..v{new}
```
