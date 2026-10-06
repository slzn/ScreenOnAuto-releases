# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md)

*🌐 [Offizielle Website](https://screenonauto.lzn.idv.tw/de/)*

> Spiegle den Bildschirm deines Android-Telefons auf das Android-Auto-Display, mit Unterstützung für Medientasten.
>
> **Kostenlos. Keine Funktion erfordert eine zusätzliche Zahlung.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Telefonbildschirm auf dem Android-Auto-Display gespiegelt, neben der Karte"></p>

> [!IMPORTANT]
> **Die Installation hängt von deiner Android-Version ab:**
> - **Android 14 und höher** – Installation **nur über Google Play**: Melde dich für eine halbstündliche Runde an und installiere dann innerhalb von 25 Minuten (die App ist im Play Store **nicht über die Suche zu finden**). [Anmelden →](https://screenonauto.lzn.idv.tw/join/?lang=de)
> - **Android 13 und niedriger** – APK per Sideload mit KingInstaller installieren ([Schritte unten](#installation)) oder über Google Play.

## Funktionen

- **Bildschirmspiegelung** – Überträgt den Telefonbildschirm in Echtzeit auf die Android-Auto-Head-Unit
- **Mediensitzungs-Proxy** – Steuere jede Medien-App des Telefons über die native Medienoberfläche von Android Auto
- **Automatisches Abdunkeln** – Dunkelt den Telefonbildschirm bei inaktiver Spiegelung automatisch ab (Verzögerung 15/30/60/120 s)
- **Autostart** – Startet die Spiegelung automatisch, sobald Android Auto verbunden ist
- **Externe Steuerung** – Spiegelung per Intent starten, stoppen oder umschalten, aus einer Automatisierungs-App, einer Verknüpfung oder per ADB – [Spiegelung aus einer anderen App steuern](https://github.com/slzn/ScreenOnAuto-releases/wiki/Spiegelung-aus-einer-anderen-App-steuern)
- **Ruhezustand verhindern** – Verhindert, dass sich der Telefonbildschirm während der Spiegelung abschaltet
- **Stopp bei Trennung** – Beendet die Spiegelung automatisch, wenn Android Auto getrennt wird
- **App automatisch starten** – Öffnet beim Start der Spiegelung automatisch eine gewählte App auf dem Telefon, wenn Android Auto verbunden ist
- **Nur diese App spiegeln** *(Android 15+)* – Sendet nur die automatisch gestartete App ans Auto statt des ganzen Bildschirms, der Rest des Telefons bleibt privat. Erfordert die Bildschirmaufnahme-Berechtigung, [vorab per ADB erteilt](https://github.com/slzn/ScreenOnAuto-releases/wiki/Spiegelungsberechtigung-per-ADB-erteilen); der Autobildschirm bleibt leer, solange du diese App verlässt
- **Querformat erzwingen** – Erzwingt während der Spiegelung das Querformat; startet automatisch beim Verbinden, mit Umschalter auf dem Bildschirm
- **App-Verknüpfungen** – Füge dem Android-Auto-Spiegelbildschirm bis zu 4 Schnellstart-Tasten hinzu
- **Bildschirmtasten** – Blende die Tasten des Spiegelbildschirms auf der Seite Bildschirm-Schaltflächen einzeln ein oder aus: Querformat erzwingen, Automatisches Abdunkeln sowie Zurück / Startbildschirm / Letzte Apps (bis zu 4 gleichzeitig)
- **Tastenposition** – Richte die Bildschirmtasten auf dem Legacy-Spiegel links aus oder weiche der Navigationsleiste des Telefons automatisch aus
- **Spiegelungsanpassung** – Passe Breite/Höhe der Spiegelung in den erweiterten Einstellungen an, falls die Head-Unit die Ränder abschneidet; die dortige **Selbstgezeichnete Spiegelung** (experimentell) verhindert außerdem die Verzerrung in der geteilten Ansicht
- **Touch-Weiterleitung** *(experimentell)* – Tippe, scrolle, wische und zoome mit zwei Fingern auf dem Android-Auto-Display, um das Telefon zu steuern

## Privilegierte Funktionen

Optional – erfordert [Shizuku](https://shizuku.rikka.app/) oder Root. Ohne beides funktioniert alles andere genau wie bisher.

| Funktion | Was sie tut |
|---|---|
| **Telefonbildschirm ausschalten** | Schaltet das Display des Telefons aus, sobald das Automatische Abdunkeln greift, während das Auto die Spiegelung weiter anzeigt – spart Akku und verhindert, dass das Telefon nachts den Innenraum erhellt |
| **Echte Toucheingabe** | Leitet deine tatsächlichen Fingerbewegungen weiter statt synthetisierter Gesten, sodass **langes Drücken, Ziehen und Multitouch** auf der Legacy-Spiegelung funktionieren |
| **Telefon-Navigationstasten** | Zurück / Startbildschirm / Letzte Apps funktionieren **ganz ohne aktivierten Bedienungshilfen-Dienst**. Aktiviere die Tasten unter **Bildschirm-Schaltflächen → Funktionsschaltflächen** |
| **Telefonbildschirm an das Auto anpassen** | Passt den Telefonbildschirm während der Spiegelung an das Seitenverhältnis des Autodisplays an, sodass schwarze Balken und die Verzerrung im geteilten Bildschirm an der Quelle verschwinden – der Autobildschirm wird automatisch vermessen |

Shizuku wurde beim Anstecken ans Auto beendet, oder der Bildschirm wacht nicht auf? Siehe [Fehlerbehebung](https://github.com/slzn/ScreenOnAuto-releases/wiki/Verwendung#fehlerbehebung).

## Voraussetzungen

- Android 7.0 (API 24) oder höher
- Android Auto auf dem Telefon installiert
- Ein Fahrzeug mit Android-Auto-Unterstützung
- *(Optional)* [Shizuku](https://shizuku.rikka.app/) oder Root – für die [Privilegierten Funktionen](#privilegierte-funktionen)

## Installation

### Android 14 und höher – Installation über Google Play

Android Auto führt nur Apps aus, die über den Play Store installiert wurden, und Android 14+ blockiert den KingInstaller-Umweg – installiere daher über den internen Test von Google Play. Es ist dieselbe vollständige App wie auf GitHub, nur im Play Store nicht über die Suche zu finden: [**Melde dich auf der Installationsseite an**](https://screenonauto.lzn.idv.tw/join/?lang=de). Alle 30 Minuten startet eine neue Runde, und dein Installationslink erscheint, sobald die Runde beginnt. Alle Schritte: [**Beta-Test beitreten**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Beta-Test-beitreten).

### Android 13 und niedriger – Sideload mit KingInstaller

> **Warum KingInstaller?**  
> Android Auto verlangt, dass Apps über den Google Play Store installiert werden.
> Bei direkter APK-Installation wird dein Browser oder Dateimanager als
> Installationsquelle registriert, was Android Auto ablehnt. KingInstaller
> installiert APKs und meldet dabei den Google Play Store als Installationsquelle.

#### Schritt 1 – KingInstaller installieren

1. Gehe zu [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) und lade die neueste `KingInstaller.apk` herunter
2. Erlaube deinem Browser oder Dateimanager, **unbekannte Apps zu installieren** – Android fragt beim ersten Öffnen einer APK danach
3. `KingInstaller.apk` öffnen und auf **Installieren** tippen

#### Schritt 2 – ScreenOnAuto über KingInstaller installieren

1. Lade die neueste `ScreenOnAuto-*.apk` von der [aktuellen Version](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) herunter
2. Öffne **KingInstaller**, tippe auf das **Ordner-Symbol** und wähle die heruntergeladene APK
3. Tippe auf **Installieren** – KingInstaller installiert sie, als käme sie aus dem Google Play Store

#### Schritt 3 – Berechtigungen erteilen

Starte **ScreenOnAuto** und folge den Hinweisen in der App, um die erforderlichen Berechtigungen zu erteilen.

## In Android Auto überprüfen

Das gilt **unabhängig von der Installationsart** – KingInstaller-Sideload *oder* Google Play.

Gehe auf dem Telefon zu **Einstellungen → Verbundene Geräte → Android Auto → Launcher anpassen**.
Dort sollten diese **zwei** ScreenOnAuto-Einträge erscheinen:

| Symbol | Name | Funktion |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Spiegelt den Telefonbildschirm im Vollbild – ersetzt den Kartenbereich |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Spiegelt den Telefonbildschirm über den Legacy-Projektionspfad – kann neben der Karte angezeigt werden |

Ältere Android-Auto-Versionen zeigen zusätzlich einen dritten Eintrag, **ScreenOnAuto Media Controller**. Fehlt er, ist das normal – die Mediensteuerung funktioniert trotzdem.
Fehlt einer der **beiden** Einträge oben, installiere neu – per KingInstaller beim Sideload, oder lass die Play-Installation fertig werden – und öffne Android Auto erneut.

Startklar? Siehe **[Verwendung](https://github.com/slzn/ScreenOnAuto-releases/wiki/Verwendung)** zum Starten der Spiegelung im Auto.

## Berechtigungen

| Berechtigung | Erforderlich für |
|---|---|
| Bildschirmaufnahme (MediaProjection) | Bildschirmspiegelung |
| Benachrichtigungszugriff | Mediensitzungs-Proxy |
| Über anderen Apps einblenden | Automatisches Abdunkeln & Querformat erzwingen |
| Bedienungshilfen-Dienst | Touch-Weiterleitung und die Tasten Zurück / Startseite / Letzte Apps (mit den privilegierten Funktionen nicht nötig) |

> **Tipp:** Um den Berechtigungsdialog für die Bildschirmaufnahme nicht bei jedem Start zu sehen, kannst du die Berechtigung einmalig per ADB erteilen – siehe [Spiegelungsberechtigung per ADB erteilen](https://github.com/slzn/ScreenOnAuto-releases/wiki/Spiegelungsberechtigung-per-ADB-erteilen). Damit wird auch **Nur diese App spiegeln** freigeschaltet.

## Bekannte Einschränkungen

- **Der Telefonbildschirm muss während der Spiegelung eingeschaltet bleiben** – die Spiegelung zeigt, was auf dem Telefonbildschirm zu sehen ist. Nutze **Ruhezustand verhindern**, um ihn wach zu halten, und **Automatisches Abdunkeln**, um Akku zu sparen; mit Shizuku oder Root hebt Telefonbildschirm ausschalten dies auf.
- **DRM-geschützte Inhalte können nicht gespiegelt werden** – Apps wie Netflix oder Disney+ zeigen im Spiegel ein schwarzes Bild. Das ist eine Einschränkung der Android-Plattform, die die App nicht umgehen kann.
- Die **Android-Auto-Navigationsleiste** auf dem Fahrzeugbildschirm wird von Android Auto selbst gezeichnet und lässt sich nicht ausblenden.

## Haftungsausschluss

Behalte die Straße immer im Blick – bediene diese App nicht während der Fahrt.

Dieses Projekt ist nicht mit Google verbunden und wird von Google weder unterstützt noch gesponsert. Android Auto ist eine Marke von Google LLC.

## Besonderer Dank

- **Jurek Harla** — hat die Symbole von ScreenOnAuto, ScreenOnAuto (Legacy) und Media Controller neu gestaltet, damit sie in die runde Symbolform von Android passen (v1.9.2).

## Unterstützen

Wenn dir die App gefällt, kannst du gerne spenden oder mir einen Bubble Tea ausgeben 🧋

[![Über PayPal spenden](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Spendier mir einen Bubble Tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
