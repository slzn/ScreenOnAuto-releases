---
title: "Spiegelungsberechtigung per ADB erteilen"
description: "Bildschirmaufnahme-Berechtigung von ScreenOnAuto per ADB vorab erteilen, damit der Dialog nicht bei jedem Start erscheint."
lang: de
slug: grant-mirror-permission-via-adb
permalink: /docs/de/grant-mirror-permission-via-adb/
---

# Spiegelungsberechtigung per ADB erteilen


Standardmäßig zeigt Android bei jedem Start der Bildschirmspiegelung von ScreenOnAuto
einen Berechtigungsdialog. Du kannst die Berechtigung **Bildschirmaufnahme
(MediaProjection)** per ADB vorab erteilen, sodass der Dialog nie wieder erscheint.

## Voraussetzungen

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) auf dem Computer installiert
- USB-Debugging auf dem Telefon aktiviert (**Einstellungen → Entwickleroptionen → USB-Debugging**)
- Telefon per USB verbunden (oder ADB über WLAN)

## Schritte

1. Öffne ein Terminal (unter Windows: Eingabeaufforderung / PowerShell).

2. Prüfe, ob ADB dein Gerät sieht:

   ```
   adb devices
   ```

   Dein Gerät sollte als `device` erscheinen (nicht `unauthorized`).

3. Erteile die Berechtigung:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. Starte ScreenOnAuto und beginne die Spiegelung — der Berechtigungsdialog sollte nicht mehr erscheinen.

## Berechtigung widerrufen

Um das Standardverhalten wiederherzustellen (Dialog bei jedem Start):

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Fehlerbehebung

- **`error: device unauthorized`** — Suche auf dem Telefon den Dialog „USB-Debugging zulassen?" und tippe auf **Zulassen**.
- **Der Dialog erscheint weiterhin** — Beende ScreenOnAuto zwangsweise und starte es neu. Hilft das nicht, widerrufe die Berechtigung und erteile sie mit den obigen Befehlen erneut.
- **App neu installiert (oder zwischen Play- und Sideload-Kanal gewechselt)** — Deinstallieren löscht die erteilte Berechtigung; führe den Befehl nach der Neuinstallation erneut aus.
- **Berechtigung nach Neustart weg** — Auf manchen ROMs (z. B. MIUI/HyperOS) überleben `appops`-Erteilungen keinen Neustart. Führe den Befehl nach jedem Neustart erneut aus oder nutze ADB über WLAN.
