#!/usr/bin/env python3
"""Tell IndexNow search engines (Bing, Yandex, Seznam, Naver, ...) which pages a push changed.

Google does not take part; it keeps reading sitemap.xml as before.

A page counts as changed when its source file's diff between the two commits has
at least one line that is not a date stamp or an hreflang alternate — the same
rule tools/sync-content-dates.py uses, so the bot's date-only commits never
resubmit anything. Only content files map to URLs (index.html,
i18n/<lang>/index.html, docs/<lang>/*.md); shared layouts and scripts touch every
page and are deliberately not submitted.

The key is public by design: it is served at SITE/<KEY>.txt to prove we own the host.

Usage:  indexnow.py <before-sha> <after-sha> [--dry-run]
        --dry-run  print the URLs that would be submitted, send nothing
"""
import importlib.util
import json
import os
import sys
import urllib.error
import urllib.request

KEY = '762c987ae50e08155ce91b6a3ac1d10b'
HOST = 'screenonauto.lzn.idv.tw'
ENDPOINT = 'https://api.indexnow.org/indexnow'

sys.dont_write_bytecode = True   # keep tools/__pycache__ out of the repo
_here = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location('scd', os.path.join(_here, 'sync-content-dates.py'))
scd = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(scd)


def content_changed(before, after, path):
    """True if `path` changed between the commits by more than date/hreflang lines."""
    patch = scd._git('diff', '--unified=0', before, after, '--', path)
    for line in patch.splitlines():
        if not line.startswith(('+', '-')) or line.startswith(('+++', '---')):
            continue
        if not line[1:].strip():
            continue
        if scd.DATE_LINE.match(line) or scd.HREFLANG_LINE.match(line):
            continue
        return True
    return False


def changed_urls(before, after):
    urls = []
    for path in scd._git('diff', '--name-only', before, after).split('\n'):
        if not path or not os.path.exists(path):   # deleted pages have no permalink to read
            continue
        url = scd.page_url(path)
        if url and content_changed(before, after, path):
            urls.append(url)
    return sorted(set(urls))


def submit(urls):
    body = json.dumps({
        'host': HOST,
        'key': KEY,
        'keyLocation': f'https://{HOST}/{KEY}.txt',
        'urlList': urls,
    }).encode()
    req = urllib.request.Request(ENDPOINT, data=body, method='POST',
                                 headers={'Content-Type': 'application/json; charset=utf-8'})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.read().decode(errors='replace')
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode(errors='replace')


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    dry = '--dry-run' in sys.argv
    if len(args) != 2:
        print(__doc__)
        return 2
    before, after = args
    if set(before) == {'0'}:
        print('no previous commit (new branch or forced push); nothing to compare')
        return 0

    urls = changed_urls(before, after)
    if not urls:
        print('no page content changed')
        return 0
    print('\n'.join(urls))
    if dry:
        print(f'\n--dry-run: {len(urls)} URL(s) not submitted')
        return 0

    status, text = submit(urls)
    print(f'\nIndexNow responded {status} {text}'.rstrip())
    # 200 = accepted, 202 = accepted, key validation pending
    return 0 if status in (200, 202) else 1


if __name__ == '__main__':
    sys.exit(main())
