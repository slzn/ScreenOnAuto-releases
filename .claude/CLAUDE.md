# ScreenOnAuto Releases

This repository is the public distribution repo for **ScreenOnAuto**, and also serves
the product website via GitHub Pages at **https://screenonauto.lzn.idv.tw/**.
Source code is kept private; this repo holds the READMEs, the website, and release APKs.

## Languages (i18n rule)

The docs/web ecosystem exists in **10 languages: en / zh-TW / pt-BR / es / de / fr / it / tr / ar / ko**
(fr/it added 2026-07-17; tr added 2026-07-17, ar added 2026-07-20 — both chosen from
tester-roster language analysis; ko added 2026-08-14) — READMEs, landing pages, docs, and
the wiki. **Any content edit must be synced to all ten languages.** Never update just one.

Korean page names: wiki `베타-테스트-참여` / `사용-방법` / `ADB로-미러링-권한-부여`;
site `ko/` + `docs/ko/<slug>`. Terminology follows the app's `values-ko` strings —
mirroring is `미러링`, the privileged section is `특권 기능`, screen-off is
`휴대전화 화면 끄기`, touch forwarding is `터치 전달`.

Google Forms and opt-in/queue emails are also 10-language (fr/it forms created
2026-07-17 via `createFrItForms()`, tr via `createTrForms()`, ar via `createArForms()`,
ko via `createKoForms()` — zero-trigger Plan-A mode; the copy lives in the .gs maps
in the private tooling repo). The app UI itself has 16
locales (adds ja/ko/zh-CN/pl/ru/in/vi/ar). Doc terminology must match the app's
`values-<lang>` strings (e.g. fr "duplication", it "mirroring", tr "yansıtma",
ar "النسخ المطابق").

Turkish page names: wiki `Beta-Testine-Katılın` / `Nasıl-Kullanılır` /
`ADB-ile-Yansıtma-İzni-Verme`; site `tr/` + `docs/tr/<slug>`.

**Arabic (ar) is the only RTL language.** Page names: wiki
`الانضمام-إلى-الاختبار-التجريبي` / `طريقة-الاستخدام` / `منح-إذن-النسخ-المطابق-عبر-ADB`;
site `ar/` + `docs/ar/<slug>`. RTL plumbing: `i18n/ar/index.html` sets
`<html lang="ar" dir="rtl">` (its carousel is pinned `dir="ltr"` — carousel.js
scrollLeft math breaks under RTL); `_layouts/doc.html` emits `dir="rtl"` when
`page.lang == "ar"`; `assets/styles.css` ends with a `[dir="rtl"]` override block for the
physical left/right rules (table alignment, steps counter, blockquote accent border,
docbar spacing). Keep those overrides in sync when adding direction-dependent CSS.

## Repository Structure

```
ScreenOnAuto-releases/
├── README.md               ← English; the only README at the root (GitHub renders it)
├── .github/README.<lang>.md← the 9 translated READMEs (zh-TW/pt-BR/es/de/fr/it/tr/ar/ko)
├── CNAME                   ← screenonauto.lzn.idv.tw (GitHub Pages custom domain)
├── index.html              ← English landing page (the only page served from the root)
├── i18n/<lang>/index.html  ← translated landing pages, one dir per language
├── assets/styles.css       ← shared landing-page stylesheet
├── assets/carousel.js      ← shared carousel script
├── docs/<lang>/<slug>.md   ← on-site copies of the 3 wiki guides × 10 languages
├── _config.yml             ← Jekyll config; defaults apply _layouts/doc.html to docs/
├── _layouts/doc.html       ← doc layout: SEO head, hreflang (Liquid, from slug+lang), TechArticle JSON-LD
├── images/                 ← site images (incl. how-to-use screenshots)
├── robots.txt / sitemap.xml← this site's own SEO files (sitemap: 40 URLs)
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
- **Theme toggle:** fixed top-right button (left in RTL) in every landing page and
  `_layouts/doc.html`; pre-paint script in `<head>` reads localStorage `theme`,
  falls back to system. Aria-labels are localized per language.
- **Hero:** eyebrow + h1-with-icon + two `.paths` install cards (Android 14+ Play /
  ≤13 APK) — these **replaced the old `.cta` buttons and the yellow `.notice` block**
  (notice content was merged into the cards). Features grid is tiered
  `.grid.core` (3) + `.grid.more` (9).
- **Carousel** is framed as a head-unit bezel purely via CSS (markup/carousel.js
  unchanged); top 3px of slide images are clipped in CSS (baked-in artifact).
- **RTL:** `[dir="rtl"]` block at the end of assets/styles.css also moves the toggle and
  zeroes letter-spacing (Arabic joining) — keep in sync for new components.
- **Doc pages:** content screenshots auto-frame as dark panels via
  `.doc p:has(> img:only-child)` (top 3px clipped — source images carry a dashed
  artifact); `.doc ol` reuses the circled step counters; portrait images cap at
  560px height (capture-dialog.jpg is pre-cropped to just the dialog).
- Any future structural edit to one landing page must still be replicated to all ten.

## Website (GitHub Pages)

- **URL:** https://screenonauto.lzn.idv.tw/ (project-site custom domain; DNS = HiNet
  CNAME `screenonauto` → `slzn.github.io`). Old `/ScreenOnAuto-releases/` paths and
  github.io URLs 301 here. All internal links use **root-relative paths**.
- **Landing pages:** `index.html` (en) + one per language dir; SEO head + hreflang +
  JSON-LD (author: Chih-En Liu). **README content edits must be mirrored into the
  landing pages** (all 10 languages).
- **Screenshot carousel** (added 2026-07-17): the hero screenshot is a carousel —
  `.carousel` markup in each landing page + shared `assets/carousel.js` (CSS-scroll-snap
  based, autoplay 6 s, dots/arrows generated by JS). **To add a slide:** append one
  `<figure class="shot"><img …><figcaption>…</figcaption></figure>` inside
  `.carousel-track` in **all 10 landing pages** with localized alt/caption; dots update
  automatically. Keep images 1200×450 like the existing ones. og:image and JSON-LD
  screenshot stay a single static image (`screenshot-legacy-split.png`). Slide 2 (market
  dashboard) is a composited mock: brand-free fictional-content page rendered headless
  and pasted into the mirror area of the legacy-split shot (source in gitignored
  `marketing-mocks/`; mirror area = x58–803, y57–392). Future slide ideas ON HOLD
  (user, 2026-07-17) — shortlist if revived: airport arrivals board > live sports
  scores > casual game (shows touch forwarding) > video-call grid; rejected as
  low-appeal: weather radar, Media Controller shot, delivery-app mock.
- **Docs:** `docs/<lang>/<slug>.md`, slugs `join-the-beta-test` / `how-to-use` /
  `grant-mirror-permission-via-adb`. These are **converted copies of the wiki pages** —
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

`Home.md` plus **3 guides × 10 languages** (30 guide pages):

| Lang | `join-the-beta-test` | `how-to-use` | `grant-mirror-permission-via-adb` |
|---|---|---|---|
| en | Join-the-Beta-Test | How-to-Use | Grant-Mirror-Permission-via-ADB |
| zh-TW | 加入-Beta-測試 | 如何使用 | 使用-ADB-授予鏡像權限 |
| pt-BR | Participar-do-Teste-Beta | Como-Usar | Conceder-Permissão-de-Espelhamento-via-ADB |
| es | Unirse-a-la-Beta | Cómo-Usar | Conceder-Permiso-de-Duplicación-por-ADB |
| de | Beta-Test-beitreten | Verwendung | Spiegelungsberechtigung-per-ADB-erteilen |
| fr | Rejoindre-le-test-bêta | Comment-utiliser | Accorder-la-permission-de-duplication-via-ADB |
| it | Partecipare-al-beta-test | Come-si-usa | Concedere-il-permesso-di-mirroring-via-ADB |
| tr | Beta-Testine-Katılın | Nasıl-Kullanılır | ADB-ile-Yansıtma-İzni-Verme |
| ar | الانضمام-إلى-الاختبار-التجريبي | طريقة-الاستخدام | منح-إذن-النسخ-المطابق-عبر-ADB |
| ko | 베타-테스트-참여 | 사용-방법 | ADB로-미러링-권한-부여 |

### Updating the wiki — and syncing the on-site docs copies

**The wiki is the editing source.** After editing a wiki guide, sync the corresponding
`docs/<lang>/<slug>.md` copy in this repo (all languages touched), applying these
conversion rules:

- drop the `*🌐 [Web version …]*` backlink line (wiki pages link to their docs copy —
  added 2026-07-17; the docs copy must not link to itself)
- GitHub alert syntax (`> [!NOTE]` etc.) → bold label (e.g. `**Note:**`)
- wiki page interlinks → on-site docs URLs (`/docs/<lang>/<slug>`)
- README links → landing-page anchors
- image references → `/images/` paths (copy new images into `images/`)
- do **not** hand-edit the layout — `_config.yml` defaults + `_layouts/doc.html` handle
  SEO head, hreflang, and JSON-LD automatically
- **do** bump `last_modified_at:` in the front matter of every docs file you touched, and
  the matching `<lastmod>` in `sitemap.xml`. The layout renders it as both the visible
  "Last updated" stamp and the `TechArticle` `dateModified` (added 2026-07-30 — these
  three must agree, or Google ignores the date). `date:` is the first-published date and
  never changes; new pages get today's date for both.

Every wiki guide page carries a localized `*🌐 [Web version …](docs URL)*` line right
after the language-switcher line — keep it when editing, and add one to any new guide
page (10 languages).

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

All ten READMEs use a **4-step installation flow via KingInstaller**:

1. Install KingInstaller (from https://github.com/fcaronte/KingInstaller/releases)
2. Use KingInstaller to install ScreenOnAuto APK (so Android Auto accepts it as Play Store installed)
3. Verify in Android Auto — Settings → Connected devices → Android Auto → Customize Launcher — confirm two entries appear: **ScreenOnAuto** (mirror) and **ScreenOnAuto Media Controller** (media proxy)
4. Grant required permissions

When updating the installation section in future versions, keep this 4-step structure and update the APK filename in Step 2.

## Publishing a New Release

Everything upstream of this — version bump, building and signing the artifacts, and the
source-side tag — is **out of scope for this file**; it lives in the private app repo's
`release` skill, which hands over to the steps below once the APK is sitting in
`release/`.

### Step 1 — Update landing pages (EVERY release) + READMEs (usually a no-op)

**1a. Landing-page version bump — required every release (easy to forget):** all 10
landing pages carry `"softwareVersion": "<version>"` in their JSON-LD block — update
it in `index.html` + `i18n/<lang>/index.html` (all 10 languages), and bump the
`<lastmod>` of the 10 **landing-page** URL blocks in `sitemap.xml` to today (leave the
docs blocks alone):

```bash
cd ~/data/workspace/ScreenOnAuto-releases
sed -i 's/"softwareVersion": "{prev}"/"softwareVersion": "{versionName}"/' index.html i18n/*/index.html
# then fix the 10 landing <lastmod> entries in sitemap.xml and validate the XML
```

**Also bump the three date signals in the same 10 files** (added 2026-07-30 so Google can
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
[latest release](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) page (see
`README.md` line ~58 / `.github/README.zh-TW.md` line ~55) — so a routine version bump needs **no README edit**.
The GitHub Release in Step 3 (`--latest`) is what makes that link resolve to the new build.
Only edit the READMEs when the install flow itself changes (e.g. the 4-step KingInstaller
sequence) — then update **all ten READMEs and the ten landing pages**.

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
