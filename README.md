# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[繁體中文](README.zh-TW.md)

> Mirror your Android phone screen to Android Auto display, with support for media button controls.
>
> **Free to use. No features require additional payment.**

> [!IMPORTANT]
> **How you install depends on your Android version:**
> - **Android 13 and below** — sideload the APK with KingInstaller ([steps below](#installation)), or join the Play beta.
> - **Android 14 and above** — available through the **Play Store beta only**. [Join the tester list →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Join-the-Beta-Test)

## Features

- **Screen Mirroring** — Capture and mirror your phone screen to the Android Auto head unit in real time
- **Media Session Proxy** — Control any phone media app from Android Auto's native media UI
- **Auto Dim** — Automatically dim phone screen brightness during idle mirroring (15/30/60/120 s delay)
- **Auto Start** — Begin mirroring automatically when Android Auto connects
- **Keep Screen On** — Prevent the phone screen from sleeping during mirroring
- **Stop on Disconnect** — Automatically stop mirroring when Android Auto disconnects
- **Auto Launch App** — Automatically launch a chosen app on the phone when mirroring starts and Android Auto is connected
- **Touch Forwarding** *(Experimental)* — Tap/scroll/fling the AA display to control your phone

## Requirements

- Android 7.0 (API 24) or higher
- Android Auto installed on phone
- A vehicle supporting Android Auto

## Installation

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

### Android 14 and above — Play Store beta

Sideloading is not supported on Android 14+. Install through the Play Store
internal-testing track instead.

See **[Join the Beta Test](https://github.com/slzn/ScreenOnAuto-releases/wiki/Join-the-Beta-Test)**
for the sign-up form and step-by-step instructions. After installing, launch the app and grant
the in-app permissions the same way.

## Verify in Android Auto

This works **however you installed** — KingInstaller sideload *or* the Play beta.

On your phone, go to **Settings → Connected devices → Android Auto → Customize Launcher**.
You should see **three** ScreenOnAuto entries:

| Icon | Name | Function |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Mirrors the phone screen full-screen — replaces the map area for a full-screen view |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Mirrors the phone screen using the Legacy projection path — can be displayed side-by-side with the map |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | Controls any media app on the phone from Android Auto's native media UI |

If all three entries appear, the installation was successful.
If any is missing: for a sideload install, reinstall via KingInstaller and ensure it reports Google Play Store as the installer source; for the Play beta, make sure the Play build finished installing, then re-open Android Auto.

## Permissions

| Permission | Required For |
|---|---|
| Screen Capture (MediaProjection) | Screen Mirroring |
| Notification Listener | Media Session Proxy |
| Write Settings | Auto Dim (brightness control) |
| Display Over Other Apps | Detect user interaction to restore brightness after Auto Dim |
| Accessibility Service | Touch Forwarding *(Experimental)* |

> **Tip:** To avoid the Screen Capture permission dialog on every launch, you can pre-grant it via ADB — see [Grant Mirror Permission via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Grant-Mirror-Permission-via-ADB).

## Disclaimer

Always keep your eyes on the road — do not operate this app while driving.

## Sponsor

If you find this app useful, feel free to donate or buy me a bubble tea 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
