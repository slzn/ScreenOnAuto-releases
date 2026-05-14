# ScreenOnAuto

[繁體中文](README.zh-TW.md)

> Mirror your Android phone screen to Android Auto display, with support for media button controls.
>
> **Free to use. No features require additional payment.**

## Features

- **Screen Mirroring** — Capture and mirror your phone screen to the Android Auto head unit in real time
- **Media Session Proxy** — Control any phone media app from Android Auto's native media UI
- **Auto Dim** — Automatically dim phone screen brightness during idle mirroring (15/30/60/120 s delay)
- **Auto Start** — Begin mirroring automatically when Android Auto connects
- **Keep Screen On** — Prevent the phone screen from sleeping during mirroring
- **Stop on Disconnect** — Automatically stop mirroring when Android Auto disconnects
- **Touch Forwarding** *(Experimental)* — Tap/scroll/fling the AA display to control your phone

## Requirements

- Android 7.0 (API 24) or higher
- Android Auto installed on phone
- A vehicle supporting Android Auto

## Download

Go to the [Releases](../../releases) page and download the latest `ScreenOnAuto-V1.0.0.apk`.

## Installation

> **Why KingInstaller?**  
> Android Auto requires apps to be installed via Google Play Store.
> Installing the APK directly sets the installer to your browser or file manager,
> which Android Auto will reject. KingInstaller installs APKs while reporting
> Google Play Store as the installer source.

### Step 1 — Install KingInstaller

1. Go to [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) and download the latest `KingInstaller.apk`
2. On your phone: **Settings → Security → Enable "Install unknown apps"** for your browser or file manager
3. Open `KingInstaller.apk` and tap **Install**

### Step 2 — Install ScreenOnAuto via KingInstaller

1. Download `ScreenOnAuto-V1.0.0.apk` from the [Releases](../../releases) page
2. Open **KingInstaller**, tap the **folder icon**, and select the downloaded APK
3. Tap **Install** — KingInstaller will install it as if it came from Google Play Store

### Step 3 — Verify in Android Auto

On your phone, go to **Settings → Connected devices → Android Auto → Customize Launcher**.
You should see **two** ScreenOnAuto entries:

| Name | Function |
|---|---|
| **ScreenOnAuto** | Screen mirroring |
| **ScreenOnAuto Media Controller** | Media session proxy |

If both entries appear, the installation was successful.
If either is missing, reinstall using KingInstaller and ensure it reports Google Play Store as the installer source.

### Step 4 — Grant Permissions

Launch **ScreenOnAuto** and follow the in-app prompts to grant required permissions.

## Permissions

| Permission | Required For |
|---|---|
| Screen Capture (MediaProjection) | Screen Mirroring |
| Notification Listener | Media Session Proxy |
| Write Settings | Auto Dim (brightness control) |
| Display Over Other Apps | Detect user interaction to restore brightness after Auto Dim |
| Accessibility Service | Touch Forwarding *(Experimental)* |

## Disclaimer

Always keep your eyes on the road — do not operate this app while driving.

## Sponsor

If you find this app useful, feel free to donate or buy me a bubble tea 🧋

[![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Buy me a bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
