# ScreenOnAuto Releases

This repository is the public distribution repo for **ScreenOnAuto**, and also serves
the product website via GitHub Pages at **https://screenonauto.lzn.idv.tw/**.
Source code is kept private; this repo holds the READMEs, the website, and release APKs.

## Languages (i18n rule)

The docs/web ecosystem exists in **14 languages: en / zh-TW / pt-BR / es / de / fr / it / tr / ar / ko / ru / vi / id / ja**
(fr/it added 2026-07-17; tr added 2026-07-17, ar added 2026-07-20 — both chosen from
tester-roster language analysis; ko added 2026-08-14; ru added 2026-10-06; vi, id and ja added 2026-10-15) — READMEs, landing pages, docs, and
the wiki. **Any content edit must be synced to all fourteen languages.** Never update just one.

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

The `/join/` sign-up page (`i18n/join/index.html`, copy in `assets/join-strings.js`) is
also 14-language. It is the only way to become a tester: half-hourly rounds of up to 95,
run by the rotation backend in the private tooling repo. The old Google Forms + opt-in
email roster was retired and deleted on 2026-10-01 — don't reintroduce form links.
The app UI itself has 16 locales; all but zh-CN and pl have docs (the app's Indonesian is `values-in`). Doc terminology must
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
  and the four `docs/<code>/<slug>.md` guides;
- `.github/README.<code>.md`, plus the switcher line in every other README (GitHub
  renders READMEs directly, without Jekyll);
- `sitemap.xml`: the new URLs, and a `hreflang` alternate in every existing block;
- a block in `assets/join-strings.js` with the same keys as `en`;
- the wiki: four pages, every guide's switcher line, and `Home.md`;
- the language counts in this file, and the release step's `LANGS` set.

`tools/sync-content-dates.py` ignores hreflang-only diffs, so registering a language does
not restamp the other pages' "last updated" dates.

## Repository Structure

```
ScreenOnAuto-releases/
├── README.md               ← English; the only README at the root (GitHub renders it)
├── .github/README.<lang>.md← the 13 translated READMEs (zh-TW/pt-BR/es/de/fr/it/tr/ar/ko/ru/vi/id/ja)
├── CNAME                   ← screenonauto.lzn.idv.tw (GitHub Pages custom domain)
├── index.html              ← English landing page (the only page served from the root;
│                             carries empty `layout: null` front matter so Liquid includes work)
├── i18n/<lang>/index.html  ← translated landing pages, one dir per language
├── _data/languages.yml     ← the language list: code, own name, menu label, "last updated" label, rtl
├── _includes/tools.html    ← shared top-right cluster: GitHub icon · language menu · theme toggle
├── _includes/hreflang.html ← the landing pages' hreflang alternates, generated from _data/languages.yml
├── assets/styles.css       ← shared landing-page stylesheet
├── assets/carousel.js      ← shared carousel script
├── docs/<lang>/<slug>.md   ← on-site copies of the 4 wiki guides × 14 languages
├── _config.yml             ← Jekyll config; defaults apply _layouts/doc.html to docs/
├── _layouts/doc.html       ← doc layout: SEO head, hreflang (Liquid, from slug+lang), TechArticle JSON-LD
├── images/                 ← site images (incl. how-to-use screenshots)
├── robots.txt / sitemap.xml← this site's own SEO files (sitemap: 70 URLs)
├── tools/                  ← excluded from the site in _config.yml; sync-content-dates.py (run by CI) and bold_check.py (lists * / ** that
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
- **Top-right tools (since 2026-09-30):** `_includes/tools.html`, used by all fourteen landing
  pages (`{% include tools.html lang="<code>" %}`) and inside the docbar of
  `_layouts/doc.html` (`lang=page.lang`). It holds a GitHub icon link, a `<details>`
  language menu, and the light/dark toggle. The menu lists all fourteen languages. The current
  one is ticked and not linked. On doc pages it links to the same doc in each language,
  via the layout's `variants`. It replaced the hero's language row, which also carried a
  GitHub link, and the docbar's language list. The cluster is `position: absolute`
  (scrolls away), left in RTL. The pre-paint script in `<head>` still reads localStorage
  `theme` and falls back to the system setting.
- **Hero:** eyebrow + h1-with-icon + two `.paths` install cards (Android 14+ Play /
  ≤13 APK) — these **replaced the old `.cta` buttons and the yellow `.notice` block**
  (notice content was merged into the cards). Features grid is tiered
  `.grid.core` (3) + `.grid.more` (6), one-sentence cards; Privileged Features is a
  2×2 `.grid.core.priv`. Keep the landing page short: troubleshooting and long caveats
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
- Any future structural edit to one landing page must still be replicated to all fourteen.

## Website (GitHub Pages)

- **URL:** https://screenonauto.lzn.idv.tw/ (project-site custom domain; DNS = HiNet
  CNAME `screenonauto` → `slzn.github.io`). Old `/ScreenOnAuto-releases/` paths and
  github.io URLs 301 here. All internal links use **root-relative paths**.
- **Landing pages:** `index.html` (en) + one per language dir; SEO head + hreflang +
  JSON-LD (author: Chih-En Liu). **README content edits must be mirrored into the
  landing pages** (all 14 languages).
- **Screenshot carousel** (added 2026-07-17): the hero screenshot is a carousel —
  `.carousel` markup in each landing page + shared `assets/carousel.js` (CSS-scroll-snap
  based, autoplay 6 s, dots/arrows generated by JS). **To add a slide:** append one
  `<figure class="shot"><img …><figcaption>…</figcaption></figure>` inside
  `.carousel-track` in **all 14 landing pages** with localized alt/caption; dots update
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

`Home.md` plus **4 guides × 14 languages** (56 guide pages):

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
page (14 languages).

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

All fourteen READMEs share one structure (en at the root, the other thirteen in `.github/`):

- **Install notice** (IMPORTANT alert under the screenshot):
  - Android 14+ → Google Play only, through the half-hourly sign-up at
    `https://screenonauto.lzn.idv.tw/join/?lang=<code>`.
  - Android ≤13 → KingInstaller sideload.
- **Installation → Android 14 and above** is one paragraph: why Play, then sign up on `/join/`
  (30-minute rounds, install link at round start), then a link to the Join the Beta Test
  wiki page. There is no "invite-based" wording and no Google Form any more.
- **Installation → Android 13 and below** is the KingInstaller flow:
  1. Install KingInstaller. Step 1.2 says to allow unknown-app installs, without a
     hard-coded settings path.
  2. Install `ScreenOnAuto-*.apk` from the latest release.

  (There is no separate "grant permissions" step since PR #48 — the app prompts on first launch.)
- **Installation → Alternative — with an AAWireless dongle** (added 2026-10-23, PR #48): for
  when the Play install fails (e.g. GrapheneOS with sandboxed Play). Four steps: install the
  APK directly; AAWireless app Passthrough mode off + Developer Mode on; Android Auto
  Developer settings → Application mode Developer + Unknown sources; reboot. The AAWireless
  app's labels (Passthrough mode, Developer Mode) stay in English in every language.
- **Verify in Android Auto** expects **two** entries: ScreenOnAuto and ScreenOnAuto
  (Legacy). ScreenOnAuto Media Controller appears only on older Android Auto, and its
  absence is normal. Do not describe it as a required entry.
- **Privileged Features**: a one-line intro, the table, and a single line linking to
  How to Use → Troubleshooting (the Shizuku-over-USB and screen-wake notes live there).
  Since 2026-10-14 that link, here and on the landing pages, targets the troubleshooting
  group's own heading, "Privileged Features (Shizuku / root)" — `#privileged-features-shizuku--root`
  and its counterpart in each language, generated from the heading text by both GitHub and
  Jekyll. **Rewording that heading in any language breaks its two links** (README +
  landing page); read the new anchor from a local build before changing them.
- **Known limitations → Google Maps black screen** (Android 15+): the README bullet and
  the landing `<li>` link to the How to Use troubleshooting heading "Android Auto's Google
  Maps turns black while mirroring" — `#android-autos-google-maps-turns-black-while-mirroring`
  and its counterpart in each language. The same rule applies: rewording that heading in
  any language breaks its two links. The landing `<li>` stays at the cause plus the link;
  the fix steps, the restart note and the one-time-code caveat live in How to Use.
- The READMEs keep the full Features list. The landing pages carry the condensed
  9-card version. Keep the two consistent in substance, not in length.

When the install flow changes, update all fourteen READMEs **and** the fourteen landing pages.

## Publishing a New Release

Everything upstream of this — version bump, building and signing the artifacts, and the
source-side tag — is **out of scope for this file**; it lives in the private app repo's
`release` skill, which hands over to the steps below once the APK is sitting in
`release/`.

### Step 1 — Update landing pages (EVERY release) + READMEs (usually a no-op)

**1a. Landing-page version bump — required every release (easy to forget):** all 14
landing pages carry `"softwareVersion": "<version>"` in their JSON-LD block — update
it in `index.html` + `i18n/<lang>/index.html` (all 14 languages), and bump the
`<lastmod>` of the 14 **landing-page** URL blocks in `sitemap.xml` to today (leave the
docs blocks alone):

```bash
cd ~/data/workspace/ScreenOnAuto-releases
sed -i 's/"softwareVersion": "{prev}"/"softwareVersion": "{versionName}"/' index.html i18n/*/index.html
```

**Do not `sed` the date across `sitemap.xml`.** More URL blocks carry the previous
release's date than the fourteen landing pages do — `sync-content-dates.yml` stamps that same
date onto every doc it touched in the interval, so a blanket replace silently back-dates
them all. (Concretely, at v1.8.4 fourteen blocks held `2026-09-15`: the ten landing pages
and four German/Italian docs.) Select on `<loc>` instead, which cannot pick up a doc no
matter how the dates line up:

```bash
python3 - <<'EOF'
import re
LANGS = {'', 'zh-TW/', 'pt-BR/', 'es/', 'de/', 'fr/', 'it/', 'tr/', 'ar/', 'ko/', 'ru/', 'vi/', 'id/', 'ja/'}
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

# Must print 14, and the XML must still parse
grep -c '<lastmod>{new-date}</lastmod>' sitemap.xml
python3 -c "import xml.dom.minidom; xml.dom.minidom.parse('sitemap.xml'); print('valid')"
```

**Also bump the three date signals in the same 14 files** (added 2026-07-30 so Google can
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
sequence or the Android 14+ sign-up) — then update **all fourteen READMEs and the fourteen landing pages**.

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
