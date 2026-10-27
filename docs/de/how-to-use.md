---
title: "Verwendung"
description: "ScreenOnAuto-Spiegelung starten, sobald das Telefon verbunden ist: die beiden Einträge und ihre Unterschiede sowie der Startablauf."
lang: de
slug: how-to-use
permalink: /docs/de/how-to-use/
date: 2026-07-16
last_modified_at: 2026-10-27
---

# Verwendung


> **ℹ️ Hinweis**
> **Bevor du beginnst**, stelle sicher:
> - ScreenOnAuto ist installiert und seine Einträge erscheinen im Android-Auto-Launcher.
> - Du hast die App einmal auf dem Telefon geöffnet und die angeforderten Berechtigungen erteilt.

## Die beiden Spiegelungs-Einträge

Der App-Launcher von Android Auto zeigt **zwei** Spiegelungs-Einträge. Beide spiegeln
denselben Telefonbildschirm – sie unterscheiden sich darin, *wie* die Spiegelung auf
dem Fahrzeugbildschirm dargestellt wird:

![Android-Auto-Launcher mit den ScreenOnAuto-Einträgen](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="ScreenOnAuto-Spiegelung im Vollbild"></p>
Vollbild – belegt den Kartenbereich
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) neben der Karte"></p>
Auf einem <b>ausreichend großen Fahrzeugbildschirm</b> kann er in geteilter Ansicht <b>neben der Karte</b> stehen; auf kleineren Bildschirmen wandert die Karte in den Hintergrund und nur die Spiegelung wird angezeigt (die Karte wird <b>nicht</b> ersetzt)
</td>
</tr>
</table>

Probiere beide aus und nutze den, der auf deiner Head-Unit besser funktioniert. Beide
zeigen dieselbe Spiegelung, und du kannst jederzeit wechseln – läuft die Spiegelung
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
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="ScreenOnAuto-Symbol"> oder
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="ScreenOnAuto-(Legacy)-Symbol">).
3. Das Telefon zeigt automatisch den Berechtigungsdialog für die Bildschirmaufnahme –
   nimm das Telefon und tippe auf **Jetzt starten** (Start now):

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Berechtigungsdialog für die Bildschirmaufnahme auf dem Telefon">

   War das Telefon im Ruhezustand, schaltet sich der Bildschirm von selbst ein. Ist es mit PIN, Muster oder Fingerabdruck gesperrt, entsperre es zuerst – danach erscheint der Dialog. Hast du die Berechtigung vorab per ADB erteilt, gibt es keinen Dialog: Die Spiegelung startet sofort, und das Auto zeigt den Sperrbildschirm, bis du das Telefon entsperrst.

4. Dein Telefonbildschirm erscheint auf der Head-Unit:

   ![Telefonbildschirm auf der Head-Unit gespiegelt](/images/how-to-use/mirror-active.png)

> **ℹ️ Hinweis**
> Der Berechtigungsdialog ist eine Android-Vorgabe – er erscheint einmal bei jedem
> Spiegelungsstart, nicht bei jedem Bildschirmwechsel. Ist *Automatisch starten*
> deaktiviert, öffnet das Antippen des Eintrags nur den Spiegelbildschirm; bis du
> selbst startest, wird nichts aufgenommen.

### Manuell starten

Wenn du **Automatisch starten** lieber deaktiviert lässt:

1. Öffne ScreenOnAuto auf dem Telefon, aktiviere den Schalter **Bildschirmspiegelung**
   und tippe im Berechtigungsdialog auf **Jetzt starten** (Start now).
2. Öffne auf dem Fahrzeugbildschirm einen der ScreenOnAuto-Einträge – die Spiegelung
   läuft bereits und wird sofort angezeigt.

(Die Reihenfolge ist egal – du kannst auch zuerst den Eintrag öffnen und danach den
Schalter **Bildschirmspiegelung** umlegen.)

### Berechtigungsdialog überspringen

Genug vom Dialog bei jedem Start? Du kannst die Berechtigung einmalig per ADB erteilen
– siehe [Spiegelungsberechtigung per ADB erteilen](/docs/de/grant-mirror-permission-via-adb/).

## Spiegelung beenden

Jede dieser Möglichkeiten funktioniert:

- **Verbindung zum Auto trennen** – die Spiegelung stoppt automatisch (Standard-
  Einstellung *Bei Trennung stoppen*).
- Auf **Spiegelung beenden** in der dauerhaften Telefon-Benachrichtigung tippen.
- Den Schalter **Bildschirmspiegelung** in der App ausschalten.

## Fehlerbehebung

### Spiegelung und Bild

#### Eintrag öffnet sich, bleibt aber leer

Die Spiegelung hat noch nicht begonnen; prüfe das Telefon auf den Berechtigungsdialog
oder starte sie über den Schalter **Bildschirmspiegelung**.

#### Schwarze Balken um das Bild

Telefon- und Fahrzeugbildschirm haben unterschiedliche Seitenverhältnisse. Nutze die Taste
**Ausrichtung sperren** auf dem Spiegelbildschirm (oder **Ausrichtung automatisch
sperren** in den Einstellungen). Um die nutzbare Fläche des Autos exakt auszufüllen,
aktiviere **Telefonbildschirm an das Auto anpassen** in den Privilegierten Funktionen
(Shizuku oder Root).

#### Das Bild wirkt gestreckt oder verzerrt, nachdem sich das Layout geändert hat

Das passiert, wenn der sichtbare Bereich in der geteilten Ansicht wächst oder schrumpft.
Dreh das Telefon, sodass der Bildschirm zwischen Hoch- und Querformat wechselt – dann
stimmt das Bild wieder (ist **Ausrichtung sperren** aktiv, hebe die Sperre vorher mit der Taste auf dem Bildschirm auf). Zwei Einstellungen können außerdem helfen:

- aktiviere **Einstellungen → Erweitert → Feste Spiegelungsgröße**. Die Spiegelung
  behält dann ihre Größe statt zu verzerren (ein Teil kann verdeckt sein). Gilt für den
  Vollbild-Eintrag **ScreenOnAuto**.
- Aktiviere **Einstellungen → Erweitert → Selbstgezeichnete Spiegelung
  (experimentell)**. Die App zeichnet das Bild der Spiegelung dann selbst, statt es vom
  System skalieren zu lassen, sodass es in der geteilten Ansicht nicht mehr verzerrt. Das kostet etwas mehr Akku und greift beim nächsten Start der Spiegelung.
  **Telefonbildschirm an das Auto anpassen** (Privilegierte Funktionen) löst dasselbe Problem auf andere Weise; beide können gleichzeitig aktiv sein.

#### Google Maps in Android Auto wird während der Spiegelung schwarz

Ab Android 15 blendet Android, solange eine App den Bildschirm aufnimmt (was jede Spiegelungs-App tun muss), Apps aus, die es für sensibel hält – und Google Maps kann auf dieser Liste landen. Die Karte in Android Auto bleibt dann schwarz, bis die Spiegelung endet, und mit anderen Spiegelungs- oder Karten-Apps passiert dasselbe. Abhilfe: Schalte **Einstellungen → Entwickleroptionen → Schutzmaßnahmen für Bildschirmfreigabe deaktivieren** ein. Fehlen die Entwickleroptionen, suche in den Einstellungen nach **Build-Nummer** und tippe 7-mal darauf. Damit blendet Android während einer Bildschirmfreigabe auch Benachrichtigungen mit Einmalcodes nicht mehr aus; ist dir das wichtig, lass die Option aus. Beende danach die Spiegelung und starte sie neu – die Einstellung greift erst beim Start der Spiegelung.

#### Die Android-Auto-Navigationsleiste bleibt sichtbar

Die **Android-Auto-Navigationsleiste** auf dem Fahrzeugbildschirm wird von Android Auto
selbst gezeichnet und kann von der App nicht ausgeblendet werden.

### Privilegierte Funktionen (Shizuku / Root)

#### Ein per ADB gestarteter Shizuku-Server wird beendet, sobald du das Telefon ans Auto anschließt

Die USB-Verbindung versetzt das Telefon in den Zubehörmodus, wodurch ADB neu startet und
Shizuku mitnimmt – Wireless Debugging läuft über dasselbe ADB und hilft daher nicht.
Starte Shizuku einfach neu, ScreenOnAuto verbindet sich von selbst wieder; besser noch:
Verwende den [Shizuku-Next-Fork](https://github.com/rushiranpise/Shizuku-Next), dessen
Watchdog-Dienst ihn für dich neu startet. Root-Nutzer und drahtlose
Android-Auto-Verbindungen sind nicht betroffen.

#### Den Bildschirm nach dem Ausschalten wieder aufwecken

Der Touchscreen wird zusammen mit dem Display abgeschaltet, Tippen auf das Telefon
bewirkt also nichts. Tippe auf dem Autobildschirm auf die Schaltfläche **Automatisches
Abdunkeln** – das Umschalten des automatischen Abdunkelns weckt den Bildschirm auf
(aktiviere die Schaltfläche zuerst unter **Bildschirm-Schaltflächen →
Funktionsschaltflächen**; sie ist standardmäßig aus). Oder drücke die Ein-/Aus-Taste des
Telefons **zweimal**, denn der erste Druck versetzt das System erst in den Ruhezustand.
Auch das Beenden der Spiegelung oder das Trennen von Android Auto schaltet den
Bildschirm wieder ein.
