---
title: "Verwendung"
description: "ScreenOnAuto-Spiegelung starten, sobald das Telefon verbunden ist: die beiden Einträge und ihre Unterschiede sowie der Startablauf."
lang: de
slug: how-to-use
permalink: /docs/de/how-to-use/
---

# Verwendung


Diese Anleitung erklärt, **wie du die Spiegelung startest, sobald das Telefon mit dem
Auto verbunden ist** — die beiden Spiegelungs-Einträge und ihre Unterschiede sowie der
Startablauf Schritt für Schritt.

> **ℹ️ Hinweis**
> **Bevor du beginnst**, stelle sicher:
> - ScreenOnAuto ist installiert und die drei Einträge erscheinen im Android-Auto-Launcher.
> - Du hast die App einmal auf dem Telefon geöffnet und die angeforderten Berechtigungen erteilt.

## Die beiden Spiegelungs-Einträge

Der App-Launcher von Android Auto zeigt **zwei** Spiegelungs-Einträge. Beide spiegeln
denselben Telefonbildschirm — sie unterscheiden sich darin, *wie* die Spiegelung auf
dem Fahrzeugbildschirm dargestellt wird:

![Android-Auto-Launcher mit den ScreenOnAuto-Einträgen](/ScreenOnAuto-releases/images/how-to-use/aa-launcher.png)

|  | <img src="/ScreenOnAuto-releases/images/icon_launcher.png" width="48"><br>**ScreenOnAuto** | <img src="/ScreenOnAuto-releases/images/icon_legacy.png" width="48"><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| Darstellung | Vollbild — belegt den Kartenbereich | Auf einem **ausreichend großen Fahrzeugbildschirm** kann er in geteilter Ansicht **neben der Karte** stehen; auf kleineren Bildschirmen wandert die Karte in den Hintergrund und nur die Spiegelung wird angezeigt (die Karte wird **nicht** ersetzt) |

**ScreenOnAuto** — Vollbild, belegt den Kartenbereich:

![ScreenOnAuto-Spiegelung im Vollbild](/ScreenOnAuto-releases/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)** — neben der Karte:

![ScreenOnAuto (Legacy) neben der Karte](/ScreenOnAuto-releases/images/how-to-use/legacy-split.png)

Probiere beide aus und nutze den, der auf deiner Head-Unit besser funktioniert. Beide
zeigen dieselbe Spiegelung, und du kannst jederzeit wechseln — läuft die Spiegelung
bereits, zeigt der andere Eintrag sie sofort an, ohne erneut nach der Berechtigung zu
fragen.

> **💡 Tipp**
> Wenn du zuvor **ScreenOnAuto** (den Vollbild-Eintrag) geöffnet hast und jetzt
> **ScreenOnAuto (Legacy)** nutzen möchtest, öffne zuerst deine Karten-App (z. B.
> Google Maps) auf dem Fahrzeugbildschirm und starte dann die Legacy-Spiegelung. So
> wird die Karten-App wieder als Standardkarte des Fahrzeugbildschirms gesetzt und die
> Kartenfunktionen bleiben nicht bei der Vollbild-Spiegelung hängen.

## Spiegelung starten

### Mit aktiviertem Automatisch starten (empfohlen)

1. Aktiviere in der App auf dem Telefon **Automatisch starten** (einmalige Einrichtung).
2. Verbinde das Telefon mit dem Auto und tippe im Android-Auto-Launcher auf einen
   ScreenOnAuto-Eintrag
   (<img src="/ScreenOnAuto-releases/images/icon_launcher.png" width="24" align="center"> oder
   <img src="/ScreenOnAuto-releases/images/icon_legacy.png" width="24" align="center">).
3. Das Telefon zeigt automatisch den Berechtigungsdialog für die Bildschirmaufnahme —
   nimm das Telefon und tippe auf **Jetzt starten** (Start now):

   <img src="/ScreenOnAuto-releases/images/how-to-use/capture-dialog.jpg" width="360" alt="Berechtigungsdialog für die Bildschirmaufnahme auf dem Telefon">

4. Dein Telefonbildschirm erscheint auf der Head-Unit:

   ![Telefonbildschirm auf der Head-Unit gespiegelt](/ScreenOnAuto-releases/images/how-to-use/mirror-active.png)

> **ℹ️ Hinweis**
> Der Berechtigungsdialog ist eine Android-Vorgabe — er erscheint einmal bei jedem
> Spiegelungsstart, nicht bei jedem Bildschirmwechsel. Ist *Automatisch starten*
> deaktiviert, öffnet das Antippen des Eintrags nur den Spiegelbildschirm; bis du
> selbst startest, wird nichts aufgenommen.

### Manuell starten

Wenn du **Automatisch starten** lieber deaktiviert lässt:

1. Öffne ScreenOnAuto auf dem Telefon, aktiviere den Schalter **Bildschirmspiegelung**
   und tippe im Berechtigungsdialog auf **Jetzt starten** (Start now).
2. Öffne auf dem Fahrzeugbildschirm einen der ScreenOnAuto-Einträge — die Spiegelung
   läuft bereits und wird sofort angezeigt.

(Die Reihenfolge ist egal — du kannst auch zuerst den Eintrag öffnen und danach den
Schalter **Bildschirmspiegelung** umlegen.)

### Berechtigungsdialog überspringen

Genug vom Dialog bei jedem Start? Du kannst die Berechtigung einmalig per ADB erteilen
— siehe [Spiegelungsberechtigung per ADB erteilen](/ScreenOnAuto-releases/docs/de/grant-mirror-permission-via-adb/).

## Spiegelung beenden

Jede dieser Möglichkeiten funktioniert:

- **Verbindung zum Auto trennen** — die Spiegelung stoppt automatisch (Standard-
  Einstellung *Bei Trennung stoppen*).
- Auf **Spiegelung beenden** in der dauerhaften Telefon-Benachrichtigung tippen.
- Den Schalter **Bildschirmspiegelung** in der App ausschalten.

## Fehlerbehebung

- **Eintrag öffnet sich, bleibt aber leer** — die Spiegelung hat noch nicht begonnen;
  prüfe das Telefon auf den Berechtigungsdialog oder starte sie über den Schalter
  **Bildschirmspiegelung**.
- **Schwarze Balken um das Bild** — Telefon- und Fahrzeugbildschirm haben
  unterschiedliche Seitenverhältnisse; die Taste **Querformat erzwingen** auf dem
  Spiegelbildschirm (oder **Querformat automatisch erzwingen** in den
  App-Einstellungen) füllt den Bildschirm meist deutlich besser. Bleiben schmale
  Lücken oder abgeschnittene Ränder, justiere unter **Einstellungen → Erweitert →
  Spiegelungsbreite anpassen / Spiegelungshöhe anpassen** nach (positive Pixel holen
  einen abgeschnittenen Rand herein, negative füllen einen schwarzen Balken auf).
- **Das Bild wirkt gestreckt oder verzerrt, nachdem sich das Layout geändert hat**
  (z. B. wächst oder schrumpft der sichtbare Bereich in der geteilten Ansicht) —
  aktiviere **Einstellungen → Erweitert → Feste Spiegelungsgröße**. Die Spiegelung
  behält dann ihre Größe statt zu verzerren (ein Teil kann verdeckt sein). Gilt für
  den Vollbild-Eintrag **ScreenOnAuto**.
- Die **Android-Auto-Navigationsleiste** auf dem Fahrzeugbildschirm wird von Android
  Auto selbst gezeichnet und kann von der App nicht ausgeblendet werden.
