# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[繁體中文](.github/README.zh-TW.md) | [Português (Brasil)](.github/README.pt-BR.md) | [Español](.github/README.es.md) | [Deutsch](.github/README.de.md) | [Français](.github/README.fr.md) | [Italiano](.github/README.it.md) | [Türkçe](.github/README.tr.md) | [العربية](.github/README.ar.md) | [한국어](.github/README.ko.md)

*🌐 [Official website](https://screenonauto.lzn.idv.tw/)*

> Mirror your Android phone screen to Android Auto display, with support for media button controls.
>
> **Free to use. No features require additional payment.**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="Phone screen mirrored on the Android Auto display, side-by-side with the map"></p>

> [!IMPORTANT]
> **How you install depends on your Android version:**
> - **Android 14 and above** — install via **Google Play only**: sign up for a half-hourly round, then install within 25 minutes (the app is **not searchable** on the Play Store). [Sign up →](https://screenonauto.lzn.idv.tw/join/?lang=en)
> - **Android 13 and below** — sideload the APK with KingInstaller ([steps below](#installation)), or install via Google Play.

## Features

- **Screen Mirroring** — Capture and mirror your phone screen to the Android Auto head unit in real time
- **Media Session Proxy** — Control any phone media app from Android Auto's native media UI
- **Auto Dim** — Automatically dim phone screen brightness during idle mirroring (15/30/60/120 s delay)
- **Auto Start** — Begin mirroring automatically when Android Auto connects
- **External Control** — Start, stop or toggle mirroring with an intent, from an automation app, a home-screen shortcut or ADB — see [Control Mirroring from Another App](https://github.com/slzn/ScreenOnAuto-releases/wiki/Control-Mirroring-from-Another-App)
- **Prevent Sleep** — Prevent the phone screen from sleeping during mirroring
- **Stop on Disconnect** — Automatically stop mirroring when Android Auto disconnects
- **Auto Launch App** — Automatically launch a chosen app on the phone when mirroring starts and Android Auto is connected
- **Mirror Only This App** *(Android 15+)* — Send just the auto-launch app to the car instead of the whole screen, leaving the rest of the phone private. Needs the Screen Capture permission [pre-granted via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Grant-Mirror-Permission-via-ADB); the car screen blanks while you are away from that app
- **Force Landscape** — Force the phone into landscape while mirroring; auto-starts on connect, with an on-screen toggle
- **Launch Shortcuts** — Add up to 4 app quick-launch buttons to the Android Auto mirror screen
- **On-screen Buttons** — Show or hide the mirror-screen buttons individually on the On-screen buttons page: Force Landscape, Auto Dim, and phone Back / Home / Recent apps (up to 4 at once)
- **Button Placement** — On the Legacy mirror, left-align the on-screen buttons or automatically avoid the phone's navigation bar
- **Mirror Adjustment** — Trim the mirror width/height in Advanced settings for head units that crop the edges; the experimental **Self-drawn mirror** there also prevents split-view distortion
- **Touch Forwarding** *(Experimental)* — Tap, scroll, fling and pinch-to-zoom on the Android Auto display to control your phone

## Privileged Features

Optional — needs [Shizuku](https://shizuku.rikka.app/) or root. Without either, everything else works exactly the same.

| Feature | What it does |
|---|---|
| **Turn the Phone Screen Off** | Switches the phone's panel off when Auto Dim kicks in, while the car keeps showing the mirror — saves battery and stops the phone lighting up the cabin at night |
| **Real Touch Injection** | Forwards your actual finger movements instead of synthesised gestures, so **long-press, drag and multi-finger** work on the Legacy mirror |
| **Phone Navigation Buttons** | Back / Home / Recent apps work with **no Accessibility Service enabled at all**. Turn the buttons on in **On-screen buttons → Control buttons** |
| **Match the Phone Screen to the Car** | Reshapes the phone's display to the head unit's aspect ratio while mirroring, so the black bars and the split-view distortion are gone at the source — the car screen is measured automatically |

Shizuku stopped when you plugged in, or the screen won't wake up? See [Troubleshooting](https://github.com/slzn/ScreenOnAuto-releases/wiki/How-to-Use#troubleshooting).

## Requirements

- Android 7.0 (API 24) or higher
- Android Auto installed on phone
- A vehicle supporting Android Auto
- *(Optional)* [Shizuku](https://shizuku.rikka.app/) or root — for the [Privileged Features](#privileged-features)

## Installation

### Android 14 and above — install via Google Play

Android Auto only runs apps installed from the Play Store, and Android 14+ blocks the KingInstaller workaround — so install through Google Play's internal testing. It's the same full app as on GitHub, but it isn't searchable on the Play Store: [**sign up on the install page**](https://screenonauto.lzn.idv.tw/join/?lang=en). A new round opens every 30 minutes, and your install link appears when the round starts. Full steps: [**Join the Beta Test**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Join-the-Beta-Test).

### Android 13 and below — sideload with KingInstaller

> **Why KingInstaller?**  
> Android Auto requires apps to be installed via Google Play Store.
> Installing the APK directly sets the installer to your browser or file manager,
> which Android Auto will reject. KingInstaller installs APKs while reporting
> Google Play Store as the installer source.

#### Step 1 — Install KingInstaller

1. Go to [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) and download the latest `KingInstaller.apk`
2. Allow your browser or file manager to **install unknown apps** — Android asks the first time you open an APK
3. Open `KingInstaller.apk` and tap **Install**

#### Step 2 — Install ScreenOnAuto via KingInstaller

1. Download the latest `ScreenOnAuto-*.apk` from the [latest release](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Open **KingInstaller**, tap the **folder icon**, and select the downloaded APK
3. Tap **Install** — KingInstaller will install it as if it came from Google Play Store

#### Step 3 — Grant Permissions

Launch **ScreenOnAuto** and follow the in-app prompts to grant required permissions.

## Verify in Android Auto

This works **however you installed** — KingInstaller sideload *or* Google Play.

On your phone, go to **Settings → Connected devices → Android Auto → Customize Launcher**.
You should see these **two** ScreenOnAuto entries:

| Icon | Name | Function |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Mirrors the phone screen full-screen — replaces the map area for a full-screen view |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Mirrors the phone screen using the Legacy projection path — can be displayed side-by-side with the map |

Older Android Auto also lists a third entry, **ScreenOnAuto Media Controller**. If you don't see it, that's normal — media control works either way.
If either of the **two** entries above is missing, reinstall — through KingInstaller for a sideload, or let the Play install finish — then reopen Android Auto.

Ready to go? See **[How to Use](https://github.com/slzn/ScreenOnAuto-releases/wiki/How-to-Use)** for starting the mirror in the car.

## Permissions

| Permission | Required For |
|---|---|
| Screen Capture (MediaProjection) | Screen Mirroring |
| Notification Listener | Media Session Proxy |
| Display Over Other Apps | Auto Dim & Force Landscape |
| Accessibility Service | Touch Forwarding & the Back / Home / Recent apps buttons (not needed with the privileged features) |

> **Tip:** To avoid the Screen Capture permission dialog on every launch, you can pre-grant it via ADB — see [Grant Mirror Permission via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Grant-Mirror-Permission-via-ADB). This is also what unlocks **Mirror only this app**.

## Known Limitations

- **The phone screen must stay on while mirroring** — the mirror shows what's on the phone screen. Use **Prevent Sleep** to keep it awake and **Auto Dim** to save battery; with Shizuku or root, Turn the Phone Screen Off lifts this.
- **DRM-protected content cannot be mirrored** — apps such as Netflix or Disney+ show a black screen on the mirror. This is an Android platform restriction that the app cannot work around.
- The **Android Auto navigation bar** on the car screen is drawn by Android Auto itself and cannot be hidden.

## Disclaimer

Always keep your eyes on the road — do not operate this app while driving.

This project is not affiliated with, endorsed by, or sponsored by Google. Android Auto is a trademark of Google LLC.

## Special Thanks

- **Jurek Harla** — redesigned the ScreenOnAuto, ScreenOnAuto (Legacy) and Media Controller icons so they fit Android's round icon shape (v1.9.2).

## Sponsor

If you find this app useful, feel free to donate or buy me a bubble tea 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
