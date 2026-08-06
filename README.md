# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[繁體中文](.github/README.zh-TW.md) | [Português (Brasil)](.github/README.pt-BR.md) | [Español](.github/README.es.md) | [Deutsch](.github/README.de.md) | [Français](.github/README.fr.md) | [Italiano](.github/README.it.md) | [Türkçe](.github/README.tr.md) | [العربية](.github/README.ar.md)

*🌐 [Official website](https://screenonauto.lzn.idv.tw/)*

> Mirror your Android phone screen to Android Auto display, with support for media button controls.
>
> **Free to use. No features require additional payment.**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="Phone screen mirrored on the Android Auto display, side-by-side with the map"></p>

> [!IMPORTANT]
> **How you install depends on your Android version:**
> - **Android 14 and above** — install via **Google Play only** (invite-based — the app is **not searchable** on the Play Store). [Join the tester list →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Join-the-Beta-Test)
> - **Android 13 and below** — sideload the APK with KingInstaller ([steps below](#installation)), or install via Google Play.

## Features

- **Screen Mirroring** — Capture and mirror your phone screen to the Android Auto head unit in real time
- **Media Session Proxy** — Control any phone media app from Android Auto's native media UI
- **Auto Dim** — Automatically dim phone screen brightness during idle mirroring (15/30/60/120 s delay)
- **Auto Start** — Begin mirroring automatically when Android Auto connects
- **Prevent Sleep** — Prevent the phone screen from sleeping during mirroring
- **Stop on Disconnect** — Automatically stop mirroring when Android Auto disconnects
- **Auto Launch App** — Automatically launch a chosen app on the phone when mirroring starts and Android Auto is connected
- **Force Landscape** — Force the phone into landscape while mirroring; auto-starts on connect, with an on-screen toggle
- **Launch Shortcuts** — Add up to 4 app quick-launch buttons to the Android Auto mirror screen
- **On-screen Buttons** — Show or hide the mirror-screen buttons individually in Advanced settings: Force Landscape, Auto Dim, and phone Back / Home / Recent apps (up to 4 at once)
- **Button Placement** — On the Legacy mirror, left-align the on-screen buttons or automatically avoid the phone's navigation bar
- **Mirror Adjustment** — Trim the mirror width/height in Advanced settings for head units that crop the edges
- **Touch Forwarding** *(Experimental)* — Tap, scroll, fling and pinch-to-zoom on the Android Auto display to control your phone

## Privileged Features

These unlock things the normal Android APIs cannot do. They need **[Shizuku](https://shizuku.rikka.app/) or root**, and they are entirely opt-in: if your phone has neither, **nothing changes** — the section stays hidden and every other feature works exactly as before.

| Feature | What it does |
|---|---|
| **Turn the Phone Screen Off** | Switches the phone's panel off when Auto Dim kicks in, while the car keeps showing the mirror — saves battery and stops the phone lighting up the cabin at night |
| **Real Touch Injection** | Forwards your actual finger movements instead of synthesised gestures, so **long-press, drag and multi-finger** work on the Legacy mirror |
| **Phone Navigation Buttons** | Back / Home / Recent apps work with **no Accessibility Service enabled at all**. Turn the buttons on in **Advanced → Android Auto screen buttons** |

> [!IMPORTANT]
> **A Shizuku server started via ADB shuts down when you connect over USB.** A USB
> connection to Android Auto puts the phone into accessory mode, which restarts ADB and
> takes the Shizuku server down with it. Wireless debugging does not avoid this — both
> go through the same ADB. If the privileged features stop working right after you plug in,
> start Shizuku again — ScreenOnAuto reconnects on its own from there. Connecting Android
> Auto **first** and starting Shizuku **after** saves you the round trip. Root users are
> unaffected, as are wireless Android Auto connections (nothing is plugged in, so ADB is
> left alone).

> **Waking the screen again:** the touchscreen powers down with the panel, so tapping the
> phone does nothing. Stop the mirror or disconnect Android Auto, or press the phone's power
> button **twice** (the first press is what actually puts the device to sleep, since Android
> never knew the panel was off). The **Auto Dim** button on the car screen works too, but only
> if you turned it on in **Advanced → Android Auto screen buttons** — it is off by default.

## Requirements

- Android 7.0 (API 24) or higher
- Android Auto installed on phone
- A vehicle supporting Android Auto
- *(Optional)* [Shizuku](https://shizuku.rikka.app/) or root — for the [Privileged Features](#privileged-features)

## Installation

### Android 14 and above — install via Google Play

> **Why Google Play?**  
> Android Auto only runs apps installed from the Play Store, and Android 14+ blocks
> the KingInstaller workaround below — so Play is the only way to get a build that
> Android Auto accepts. What you install is still the **full app** — the same release
> as the GitHub APK, just delivered through Play's internal-testing track.

The app is **not searchable on the Play Store** — installation is **invite-based**.
See **[Join the Beta Test](https://github.com/slzn/ScreenOnAuto-releases/wiki/Join-the-Beta-Test)**
for the sign-up form and step-by-step instructions. After installing, launch the app and grant
the in-app permissions the same way.

### Android 13 and below — sideload with KingInstaller

> **Why KingInstaller?**  
> Android Auto requires apps to be installed via Google Play Store.
> Installing the APK directly sets the installer to your browser or file manager,
> which Android Auto will reject. KingInstaller installs APKs while reporting
> Google Play Store as the installer source.

#### Step 1 — Install KingInstaller

1. Go to [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) and download the latest `KingInstaller.apk`
2. On your phone: **Settings → Security → Enable "Install unknown apps"** for your browser or file manager
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
You should see **three** ScreenOnAuto entries:

| Icon | Name | Function |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Mirrors the phone screen full-screen — replaces the map area for a full-screen view |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Mirrors the phone screen using the Legacy projection path — can be displayed side-by-side with the map |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | Controls any media app on the phone from Android Auto's native media UI |

If all three entries appear, the installation was successful.
If any is missing: for a sideload install, reinstall via KingInstaller and ensure it reports Google Play Store as the installer source; for a Google Play install, make sure the Play build finished installing, then re-open Android Auto.

Ready to go? See **[How to Use](https://github.com/slzn/ScreenOnAuto-releases/wiki/How-to-Use)** for starting the mirror in the car.

## Permissions

| Permission | Required For |
|---|---|
| Screen Capture (MediaProjection) | Screen Mirroring |
| Notification Listener | Media Session Proxy |
| Display Over Other Apps | Auto Dim & Force Landscape |
| Accessibility Service | Touch Forwarding *(Experimental)* & the Back / Home / Recent apps buttons — with the [Privileged Features](#privileged-features) neither needs it: the buttons work as soon as a backend is connected, Touch Forwarding once **Real touch injection** is on |

> **Tip:** To avoid the Screen Capture permission dialog on every launch, you can pre-grant it via ADB — see [Grant Mirror Permission via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Grant-Mirror-Permission-via-ADB).

## Known Limitations

- **The phone screen must stay on while mirroring** — the mirror simply shows what's on the phone screen, so it cannot keep running with the screen off or locked. Use **Prevent Sleep** to keep the screen awake, and **Auto Dim** to darken it and save battery instead of turning it off. *(With Shizuku or root **and Auto Dim on**, [Turn the Phone Screen Off](#privileged-features) lifts this — it powers the panel down while the mirror keeps running.)*
- **DRM-protected content cannot be mirrored** — apps such as Netflix or Disney+ show a black screen on the mirror. This is an Android platform restriction that the app cannot work around.
- The **Android Auto navigation bar** on the car screen is drawn by Android Auto itself and cannot be hidden.

## Disclaimer

Always keep your eyes on the road — do not operate this app while driving.

This project is not affiliated with, endorsed by, or sponsored by Google. Android Auto is a trademark of Google LLC.

## Sponsor

If you find this app useful, feel free to donate or buy me a bubble tea 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
