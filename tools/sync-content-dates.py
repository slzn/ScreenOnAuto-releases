#!/usr/bin/env python3
"""Sync every page's "last modified" date to what git actually says.

Three places drift apart because each is maintained by hand, and a content edit
that misses one leaves the page claiming it is older than it is:

  * docs/<lang>/<page>.md  — `last_modified_at:` in the front matter
  * index.html, i18n/<lang>/index.html — the JSON-LD "dateModified" and the
    visible `<time>` in the "last updated" line
  * sitemap.xml — `<lastmod>` for the matching `<loc>`

Source of truth is the last commit that changed the file's *content*, read in
Asia/Taipei so a late-evening push does not land on the previous UTC day.
Commits that only rewrite the date fields are skipped deliberately: this
script's own commits are exactly that shape, and so was 6ff0cdc, which merely
introduced the front-matter fields and would otherwise have restamped nine
untouched pages with its own date. Skipping them also makes the script
idempotent — rerunning it right after it commits finds nothing to do.

`datePublished` is never touched — revising a page is not republishing it.

Usage:  sync-content-dates.py [--check]
        --check  report what is stale and exit 1 without writing (for CI/pre-push)
"""
import glob
import re
import subprocess
import sys

SITE = 'https://screenonauto.lzn.idv.tw'
SITEMAP = 'sitemap.xml'


GIT_ENV = {'TZ': 'Asia/Taipei', 'PATH': '/usr/bin:/bin', 'HOME': '/tmp'}

# A changed line that is only a date stamp — not a content change.
DATE_LINE = re.compile(
    r'^[+-]\s*((date|last_modified_at):\s*\d{4}-\d{2}-\d{2}'
    r'|"date(Modified|Published)":\s*"\d{4}-\d{2}-\d{2}",?'
    r'|<time datetime="\d{4}-\d{2}-\d{2}">\d{4}-\d{2}-\d{2}</time>'
    r'|<p class="updated">.*<time datetime="\d{4}-\d{2}-\d{2}">.*</time></p>)\s*$'
)


def _git(*args):
    return subprocess.run(['git', *args], capture_output=True, text=True,
                          check=True, env=GIT_ENV).stdout


def last_commit_date(path):
    """Date of the newest commit that changed `path`'s content, in Asia/Taipei.

    Commits whose diff for this file only adds or removes date stamps do not
    count — see the module docstring.
    """
    shas = _git('log', '--format=%H', '--', path).split()
    for sha in shas:
        patch = _git('show', '--format=', '--unified=0', sha, '--', path)
        for line in patch.splitlines():
            if not line.startswith(('+', '-')) or line.startswith(('+++', '---')):
                continue
            if DATE_LINE.match(line):
                continue
            # Something other than a date stamp changed here.
            return _git('log', '-1', '--date=format-local:%Y-%m-%d',
                        '--format=%cd', sha).strip()
    return None


def page_url(path):
    """Public URL for a content file, or None if it is not a page."""
    if path == 'index.html':
        return SITE + '/'
    m = re.fullmatch(r'i18n/([^/]+)/index\.html', path)
    if m:
        return f'{SITE}/{m.group(1)}/'
    if path.startswith('docs/') and path.endswith('.md'):
        head = open(path, encoding='utf-8').read(2000)
        pm = re.search(r'^permalink: (\S+)', head, re.M)
        if pm:
            return SITE + pm.group(1)
    return None


def content_files():
    return ['index.html'] + sorted(glob.glob('i18n/*/index.html')) + sorted(glob.glob('docs/*/*.md'))


def patch_page(path, date):
    """Rewrite the in-page dates. Returns the list of fields that were stale."""
    s = open(path, encoding='utf-8').read()
    stale, out = [], s

    if path.endswith('.md'):
        m = re.search(r'^last_modified_at: (\S+)$', out, re.M)
        if m and m.group(1) != date:
            stale.append('last_modified_at')
            out = re.sub(r'^last_modified_at: \S+$', f'last_modified_at: {date}', out, count=1, flags=re.M)
    else:
        m = re.search(r'"dateModified": "(\d{4}-\d{2}-\d{2})"', out)
        if m and m.group(1) != date:
            stale.append('dateModified')
            out = re.sub(r'"dateModified": "\d{4}-\d{2}-\d{2}"', f'"dateModified": "{date}"', out, count=1)
        m = re.search(r'<time datetime="(\d{4}-\d{2}-\d{2})">\d{4}-\d{2}-\d{2}</time>', out)
        if m and m.group(1) != date:
            stale.append('visible <time>')
            out = re.sub(r'<time datetime="\d{4}-\d{2}-\d{2}">\d{4}-\d{2}-\d{2}</time>',
                         f'<time datetime="{date}">{date}</time>', out, count=1)
    return stale, out


def patch_sitemap(url_dates):
    """Set <lastmod> per <loc>. Returns (stale_urls, new_text)."""
    s = open(SITEMAP, encoding='utf-8').read()
    stale = []

    def fix(m):
        block = m.group(0)
        loc = re.search(r'<loc>([^<]+)</loc>', block).group(1)
        want = url_dates.get(loc)
        if not want:
            return block
        cur = re.search(r'<lastmod>([^<]+)</lastmod>', block)
        if cur and cur.group(1) != want:
            stale.append(f'{loc} ({cur.group(1)} -> {want})')
            return re.sub(r'<lastmod>[^<]+</lastmod>', f'<lastmod>{want}</lastmod>', block, count=1)
        return block

    return stale, re.sub(r'<url>.*?</url>', fix, s, flags=re.S)


def main():
    check = '--check' in sys.argv
    problems, writes = [], []
    url_dates = {}

    for path in content_files():
        date = last_commit_date(path)
        if not date:            # never committed yet
            continue
        url = page_url(path)
        if url:
            url_dates[url] = date
        stale, new = patch_page(path, date)
        if stale:
            problems.append(f'{path}: {", ".join(stale)} -> {date}')
            writes.append((path, new))

    stale_urls, new_sitemap = patch_sitemap(url_dates)
    if stale_urls:
        problems += [f'{SITEMAP}: {u}' for u in stale_urls]
        writes.append((SITEMAP, new_sitemap))

    if not problems:
        print('content dates are in sync with git')
        return 0

    for p in problems:
        print(('STALE  ' if check else 'FIXED  ') + p)

    if check:
        print(f'\n{len(problems)} stale date(s). Run tools/sync-content-dates.py to fix.')
        return 1

    for path, text in writes:
        open(path, 'w', encoding='utf-8').write(text)
    # Fail loudly rather than commit malformed XML.
    import xml.dom.minidom
    xml.dom.minidom.parse(SITEMAP)
    print(f'\n{len(problems)} date(s) updated.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
