---
title: "Grant Mirror Permission via ADB"
description: "Pre-grant ScreenOnAuto's screen-capture permission via ADB so the dialog does not appear each time you start mirroring."
lang: en
slug: grant-mirror-permission-via-adb
permalink: /docs/en/grant-mirror-permission-via-adb/
---

# Grant Mirror Permission via ADB


By default, Android displays a permission dialog every time ScreenOnAuto starts screen mirroring.
You can pre-grant the **Screen Capture (MediaProjection)** permission with ADB so the dialog never appears again.

## Prerequisites

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) installed on your computer
- USB debugging enabled on your phone (**Settings → Developer options → USB debugging**)
- Phone connected via USB (or ADB over Wi-Fi)

## Steps

1. Open a terminal (Command Prompt / PowerShell on Windows).

2. Verify ADB can see your device:

   ```
   adb devices
   ```

   Your device should appear as `device` (not `unauthorized`).

3. Grant the permission:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. Launch ScreenOnAuto and start mirroring — the permission dialog should no longer appear.

## Revoking the Permission

To restore the default behavior (dialog shown each time):

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Troubleshooting

- **`error: device unauthorized`** — Look for the "Allow USB debugging?" dialog on your phone and tap **Allow**.
- **Dialog still appears** — Force-stop ScreenOnAuto and relaunch. If it persists, revoke and re-grant using the commands above.
- **Reinstalled the app (or switched between the Play and sideload channels)** — uninstalling clears the grant; re-run the grant command after reinstalling.
- **Permission resets after reboot** — On some ROMs (e.g. MIUI/HyperOS), `appops` grants don't survive reboots. Re-run the command after each restart, or use ADB over Wi-Fi.
