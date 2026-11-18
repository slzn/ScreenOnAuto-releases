---
title: "Privacy Policy"
description: "What ScreenOnAuto does and doesn't do with your data: the app has no internet permission, collects nothing and shares nothing."
lang: en
slug: privacy-policy
permalink: /docs/en/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-18
---

# Privacy Policy

ScreenOnAuto is an Android app, developed by Chih-En Liu, that mirrors your phone screen to an Android Auto head unit. This policy covers the app and its website, screenonauto.lzn.idv.tw, including the install page at `/join/`.

**In short: the app does not collect, store on any server, or share any personal data.**

## The app

### No internet access

ScreenOnAuto does not request Android's internet permission, so it cannot send data off your phone. It contains no ads, analytics, crash-reporting or tracking libraries, and it needs no account.

### What the permissions are used for

All of the following happens on your phone. Whatever leaves it goes only to your car, over the Android Auto connection.

| Permission | What it is used for |
|---|---|
| Screen Capture (MediaProjection) | Capturing the phone screen, or one app, and showing it on the car screen. Nothing is recorded or saved. |
| Notification Listener | Reading the active media sessions (what's playing, play/pause, skip) for the media controls. Notification contents are not read or stored. |
| Accessibility Service | Turning taps on the car screen into taps on the phone, and the Back / Home / Recent apps buttons. It does not read screen content and does not use the accessibility events it receives. |
| Display Over Other Apps | The Auto Dim, Lock Orientation and Night Dim overlays. |
| Modify System Settings | Locking the screen rotation while mirroring, on Android 16 and later in tablet mode. |
| Shizuku or root (optional) | The privileged features: turning the phone screen off, touch injection, the phone navigation buttons, and changing the phone's screen size, density, theme, font size and navigation mode while mirroring. The phone's own values are put back when mirroring ends. |

### What is stored

Your settings, and the phone's original display values that the app puts back after mirroring, are saved inside the app's own storage on your phone. Uninstalling the app deletes them. If Android backup is turned on, Android may include these settings in your own Google account backup, or copy them to a new phone when you transfer your data, as it does for most apps.

### Google Play

If you install ScreenOnAuto from Google Play, Google may collect crash and performance statistics according to your device settings, and share them with the developer in aggregate (Android vitals). This is handled by Google under the [Google Privacy Policy](https://policies.google.com/privacy).

## The website

### Install page (`/join/`)

To become a tester you sign in with Google on the install page. Only your account's email address is used, to add you to that round's Google Play tester list. You are never emailed, and the list is deleted when the round's install window ends.

Sign-in is handled by Google: the page loads Google's sign-in script, which may set Google cookies and receives your IP address, under the [Google Privacy Policy](https://policies.google.com/privacy). After you sign in, the sign-in token Google returns, which contains your Google account details such as your email address, is kept in your browser's session storage until you close the tab. The page sends it to the install server (api.screenonauto.lzn.idv.tw), which receives your IP address with each request but does not log your IP address or email address.

### Everything else

Apart from the sign-in on the install page, the site uses no analytics, no tracking and no cookies. Your light/dark theme choice is kept in your browser's local storage. The site is hosted on GitHub Pages and loads its fonts from Google Fonts, so GitHub and Google receive your IP address as part of serving the pages, under their own privacy policies.

## Bug reports you send

If you choose to send a bug report or log, for example through a Google Drive link in a GitHub issue, it may contain information about your device and the apps on it. It is used only to investigate your issue and is deleted once the investigation is done. GitHub issues are public, so do not post personal information there.

## Children

ScreenOnAuto is not directed at children under 13 and does not knowingly collect data from anyone.

## Changes

If this policy changes, the new version will be published on this page, and the “Last updated” date below will change.

## Contact

Open an issue on [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues), or email screenonauto@gmail.com.
