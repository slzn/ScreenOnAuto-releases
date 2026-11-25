#!/usr/bin/env python3
"""Draw the settings guide's diagrams into images/settings/ (docs/<lang>/settings.md).

    python3 tools/settings-diagrams.py

The SVGs carry no text, so every language shares them; captions and alt text live in each
settings.md. Colours are their own (a dark car screen in both site themes): bars pure black,
the car's usable area a dashed green frame, cut-off parts hatched amber.
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "images" / "settings"

# ---------- 4-13: Match the phone screen to the car (override-*.svg) ----------
# The reshaped phone re-lays its apps out, so the app mock is drawn for the box it is given
# (two columns when wide, stacked when tall) and never stretched.

def ui(x, y, w, h):
    u = min(w, h) / 20                       # one layout unit, so shapes keep their proportions
    pad, hdr = u * 1.0, u * 2.4
    s = [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="#dfe7ef"/>',
         f'<rect x="{x}" y="{y}" width="{w}" height="{hdr}" fill="#2f6fb0"/>',
         f'<rect x="{x+pad}" y="{y+hdr*0.3}" width="{min(w*0.3, u*7)}" height="{hdr*0.4}" rx="{hdr*0.2}" fill="#cfe0f2"/>']
    top = y + hdr + pad
    avail_h = y + h - pad - top
    def card(cx, cy, cw, ch):                # a big card with a picture and two text lines
        s.append(f'<rect x="{cx}" y="{cy}" width="{cw}" height="{ch}" rx="{u*0.9}" fill="#fff"/>')
        s.append(f'<rect x="{cx+u*0.8}" y="{cy+u*0.8}" width="{cw-u*1.6}" height="{ch*0.55}" rx="{u*0.6}" fill="#9fc3e6"/>')
        s.append(f'<rect x="{cx+u*0.8}" y="{cy+u*1.4+ch*0.55}" width="{(cw-u*1.6)*0.7}" height="{u*0.9}" rx="{u*0.45}" fill="#c5d0db"/>')
    def rows(rx, ry, rw, rh, n):             # list rows with a round icon each
        gap = u * 0.8
        h1 = (rh - gap * (n - 1)) / n
        for i in range(n):
            yy = ry + i * (h1 + gap)
            s.append(f'<rect x="{rx}" y="{yy}" width="{rw}" height="{h1}" rx="{u*0.8}" fill="#fff"/>')
            r = min(h1 * 0.28, u * 1.3)
            s.append(f'<circle cx="{rx+u*0.8+r}" cy="{yy+h1/2}" r="{r}" fill="#9fc3e6"/>')
    if w / h >= 1.2:                          # landscape: card left, list right
        cw = (w - pad * 3) * 0.47
        card(x + pad, top, cw, avail_h)
        rows(x + pad * 2 + cw, top, w - pad * 3 - cw, avail_h, 3)
    else:                                     # portrait / squarish: card on top, list below
        ch = min(avail_h * 0.45, (w - pad * 2) * 0.8)
        card(x + pad, top, w - pad * 2, ch)
        n = max(2, min(5, int((avail_h - ch - pad) / (u * 3.6))))
        rows(x + pad, top + ch + pad, w - pad * 2, avail_h - ch - pad, n)
    return "\n".join(s)

def figure(name, view, phone, content_on_phone, area, content_on_car, bezel):
    px, py, pw, ph = phone
    ax, ay, aw, ah = area
    bx, by = bezel
    mid = ay + ah / 2
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}" role="img">
<rect x="{px-bx}" y="{py-by}" width="{pw+2*bx}" height="{ph+2*by}" rx="10" fill="#1b2430" stroke="#3a4a5a" stroke-width="1.5"/>
<rect x="{px}" y="{py}" width="{pw}" height="{ph}" rx="2" fill="#000"/>
{ui(*content_on_phone)}
<path d="M{px+pw+bx+4} {mid}H{ax-14}" stroke="#8fa1b3" stroke-width="2.5" stroke-linecap="round"/>
<path d="M{ax-17} {mid-5}l5 5-5 5" fill="none" stroke="#8fa1b3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="{ax}" y="{ay}" width="{aw}" height="{ah}" fill="#000"/>
{ui(*content_on_car)}
<rect x="{ax}" y="{ay}" width="{aw}" height="{ah}" fill="none" stroke="#4cb578" stroke-width="2.5" stroke-dasharray="7 5"/>
</svg>
'''
    open(f"{OUT}/{name}.svg", "w").write(svg)

L = (18, 73, 120, 54); LB = (7, 6); LV = "2 54 354 92"    # landscape phone 20:9
# 1. wide car area (~2.6:1): bars left/right on the car -> reshaped phone, bars above/below on it
A = (164, 65.5, 180, 69)
w = 69 * 120 / 54
figure("override-before", LV, L, L, A, (164 + (180 - w) / 2, 65.5, w, 69), LB)
h = 120 * 69 / 180
figure("override-after", LV, L, (18, 73 + (54 - h) / 2, 120, h), A, A, LB)
# 2. narrow car area (3:2): bars above/below on the car -> phone gets bars left/right
A = (194, 60, 120, 80)
figure("override-narrow-before", LV, L, L, A, (194, 60 + (80 - 54) / 2, 120, 54), LB)
w = 54 * 1.5
figure("override-narrow-after", LV, L, (18 + (120 - w) / 2, 73, w, 54), A, A, LB)
# 3. large portrait head unit (3:4), phone upright 9:20
P = (52, 25, 54, 120); PB = (6, 8); PV = "22 6 262 158"
A = (150, 15, 105, 140)
w = 140 * 54 / 120
figure("override-portrait-before", PV, P, P, A, (150 + (105 - w) / 2, 15, w, 140), PB)
h = 54 * 4 / 3
figure("override-portrait-after", PV, P, (52, 25 + (120 - h) / 2, 54, h), A, A, PB)

# ---------- 3-10: mirror width/height adjustment (gap-*.svg) ----------
# The same picture scaled evenly (it is the frame that changes, not the phone's layout), so here
# the mock is a fixed 220x100 drawing stretched into its box.
W, H = 360, 200

def phone(x, y, w, h):
    return f"""<svg x="{x}" y="{y}" width="{w}" height="{h}" viewBox="0 0 220 100" preserveAspectRatio="none">
  <rect width="220" height="100" fill="#dfe7ef"/>
  <rect width="220" height="14" fill="#2f6fb0"/>
  <rect x="8" y="4" width="40" height="6" rx="3" fill="#cfe0f2"/>
  <rect x="8" y="22" width="96" height="70" rx="6" fill="#ffffff"/>
  <rect x="14" y="28" width="84" height="38" rx="4" fill="#9fc3e6"/>
  <rect x="14" y="72" width="60" height="6" rx="3" fill="#c5d0db"/>
  <rect x="14" y="82" width="40" height="5" rx="2.5" fill="#dbe3ea"/>
  <rect x="114" y="22" width="98" height="20" rx="5" fill="#ffffff"/>
  <rect x="114" y="47" width="98" height="20" rx="5" fill="#ffffff"/>
  <rect x="114" y="72" width="98" height="20" rx="5" fill="#ffffff"/>
  <circle cx="125" cy="32" r="5" fill="#9fc3e6"/><circle cx="125" cy="57" r="5" fill="#9fc3e6"/><circle cx="125" cy="82" r="5" fill="#9fc3e6"/>
</svg>"""

def gap_figure(area, content, name):
    ax, ay, aw, ah = area
    cx, cy, cw, ch = content
    outside = f"M0 0H{W}V{H}H0Z M{ax} {ay}V{ay+ah}H{ax+aw}V{ay}Z"   # everything but the usable area
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img">
<defs>
  <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <rect width="8" height="8" fill="#0a0e13" fill-opacity=".72"/><line x1="0" y1="0" x2="0" y2="8" stroke="#d9a441" stroke-width="2.2"/>
  </pattern>
  <clipPath id="out"><path d="{outside}" clip-rule="evenodd"/></clipPath>
</defs>
<rect x="{ax}" y="{ay}" width="{aw}" height="{ah}" fill="#000"/>
{phone(cx, cy, cw, ch)}
<rect x="{cx}" y="{cy}" width="{cw}" height="{ch}" fill="url(#hatch)" clip-path="url(#out)"/>
<rect x="{ax}" y="{ay}" width="{aw}" height="{ah}" fill="none" stroke="#4cb578" stroke-width="2.5" stroke-dasharray="7 5"/>
</svg>
"""
    open(f"{OUT}/{name}", "w").write(svg)

# picture wider than the area: bars above/below; a negative WIDTH gap fills them, spilling right
A = (60, 40, 200, 120)
gap_figure(A, (60, 40 + (120 - 200 / 2.2) / 2, 200, 200 / 2.2), "gap-tb-before.svg")
gap_figure(A, (60, 40, 264, 120), "gap-tb-after.svg")
# picture narrower than the area: bars left/right; a negative HEIGHT gap fills them, spilling down
B = (50, 30, 260, 110)
gap_figure(B, (50 + (260 - 220) / 2, 30, 220, 110), "gap-lr-before.svg")
gap_figure(B, (50, 30, 260, 130), "gap-lr-after.svg")
# the screen shape matched to the car: an exact fit
gap_figure(B, (50, 30, 260, 110), "gap-match.svg")
