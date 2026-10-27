---
title: "How to Use"
description: "Starting the ScreenOnAuto mirror once the phone is connected: the two mirror entries and their differences, plus the start-up flow step by step."
lang: en
slug: how-to-use
permalink: /docs/en/how-to-use/
date: 2026-07-16
last_modified_at: 2026-10-27
---

# How to Use


> **ℹ️ Note**
> **Before you start**, make sure:
> - ScreenOnAuto is installed and its entries appear in Android Auto's launcher.
> - You've opened the app once on the phone and granted the permissions it asks for.

## The two mirror entries

Android Auto's app launcher shows **two** mirror entries. Both mirror the same phone
screen — they differ in *how* the mirror is shown on the car screen:

![Android Auto launcher showing the ScreenOnAuto entries](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="ScreenOnAuto full-screen mirror"></p>
Full-screen — takes over the map area
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) side-by-side with the map"></p>
On a <b>large enough car screen</b> it can sit <b>side-by-side with the map</b> in split view; on a smaller screen the map simply goes to the background and only the mirror is shown (it does <b>not</b> replace the map)
</td>
</tr>
</table>

Try both and use whichever works better on your head unit. Both show the same mirror,
and you can switch between them at any time — once mirroring is running, opening the
other entry shows it right away without asking for permission again.

> **💡 Tip**
> If you've opened **ScreenOnAuto** (the full-screen entry) before and now want to use
> **ScreenOnAuto (Legacy)**, open your map app (e.g. Google Maps) on the car screen
> first, then start the Legacy mirror. This sets the map app back as the car screen's
> default map, so map-related functions aren't taken over by the full-screen mirror.

## Start mirroring

### With Auto Start Mirror ON (recommended)

1. In the app on the phone, turn on **Auto Start Mirror** (one-time setup).
2. Connect the phone to the car and tap a ScreenOnAuto entry
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="ScreenOnAuto icon"> or
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="ScreenOnAuto (Legacy) icon">) in the Android Auto
   launcher.
3. The phone brings up the screen-capture permission dialog automatically — pick up the
   phone and tap **Start now**:

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Screen-capture permission dialog on the phone">

   If the phone was asleep, its screen turns on by itself. If it is locked with a PIN, pattern or fingerprint, unlock it first; the dialog then appears. If you pre-granted the permission with ADB, there is no dialog: mirroring starts right away, and the car shows your lock screen until you unlock the phone.

4. Your phone screen appears on the head unit:

   ![Phone screen mirrored on the head unit](/images/how-to-use/mirror-active.png)

> **ℹ️ Note**
> The permission dialog is an Android requirement — it appears once each time mirroring
> starts, not on every screen change. With *Auto Start Mirror* off, tapping the entry
> only opens the mirror screen; nothing is captured until you start it yourself.

### Starting manually

If you prefer to keep **Auto Start Mirror** off:

1. Open ScreenOnAuto on the phone and turn on the **Mirror** switch, then tap
   **Start now** in the permission dialog.
2. On the car screen, open one of the ScreenOnAuto entries — the mirror is already
   running and shows immediately.

(The order doesn't matter — you can also open the entry first and flip the **Mirror**
switch after.)

### Skipping the permission dialog

Tired of the dialog appearing every time? You can pre-grant the permission once via
ADB — see [Grant Mirror Permission via ADB](/docs/en/grant-mirror-permission-via-adb/).

## Stop mirroring

Any of these works:

- **Disconnect from the car** — mirroring stops automatically (the default *Stop on
  disconnect* setting).
- Tap **Stop Mirroring** on the persistent phone notification.
- Turn off the **Mirror** switch in the app.

## Troubleshooting

### Mirroring and display

#### Entry opens but stays blank

Mirroring hasn't started yet; check the phone for the permission dialog, or start it via
the **Mirror** switch.

#### Black bars around the image

The phone and car screens have different aspect ratios. Use the **Lock Orientation**
button on the mirror screen (or **Auto-start Lock Orientation** in settings). To fit the
car's usable area exactly, turn on **Match the phone screen to the car** in Privileged
Features (Shizuku or root).

#### Image looks stretched or distorted after the layout changes

This happens when the visible area grows or shrinks in split view. Rotating the phone so
the screen switches between portrait and landscape brings it back (release **Lock Orientation** with its on-screen button first if it's on). Two settings can also
fix it:

- Turn on **Settings → Advanced → Fixed mirror size**. The mirror then keeps its size
  instead of distorting (part of it may be hidden). Applies to the full-screen
  **ScreenOnAuto** entry.
- Turn on **Settings → Advanced → Self-drawn mirror (experimental)**. The app then draws
  the mirror image itself instead of letting the system scale it, so the image no longer
  distorts in split view. It uses slightly more battery and takes effect
  the next time mirroring starts. **Match the phone screen to the car** (Privileged Features) fixes the same problem a different way, and the two can be on together.

#### Android Auto's Google Maps turns black while mirroring

On Android 15 and newer, while any app is capturing the screen (as every mirroring app must), Android hides apps it considers sensitive, and it can put Google Maps on that list. Android Auto's map then stays black until mirroring stops, and other mirroring apps and map apps are affected the same way. To fix it, turn on **Settings → Developer options → Disable screen share protections**. If Developer options isn't shown, search Settings for **Build number** and tap it 7 times. This also stops Android hiding notifications with one-time codes while you share your screen, so leave it off if that matters to you. After turning it on, stop mirroring and start it again: the setting only takes effect when mirroring starts.

#### The Android Auto navigation bar stays on screen

The **Android Auto navigation bar** on the car screen is drawn by Android Auto itself
and cannot be hidden by the app.

### Privileged Features (Shizuku / root)

#### A Shizuku server started via ADB shuts down when you plug into the car

The USB connection puts the phone into accessory mode, which restarts ADB and takes
Shizuku with it — wireless debugging goes through the same ADB, so it does not help.
Start Shizuku again and ScreenOnAuto reconnects on its own; better still, use the
[Shizuku-Next fork](https://github.com/rushiranpise/Shizuku-Next), whose watchdog
service restarts it for you. Root users and wireless Android Auto connections are
unaffected.

#### Waking the screen again

The touchscreen powers down with the panel, so tapping the phone does nothing. Tap the
**Auto Dim** button on the car screen — toggling Auto Dim wakes the screen (turn the
button on first in **On-screen buttons → Control buttons**; it is off by default). Or
press the phone's power button **twice**, since the first press is what puts the system
to sleep. Stopping the mirror or disconnecting Android Auto also brings the screen back.
