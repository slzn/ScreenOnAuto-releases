# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Français](README.fr.md) | [Italiano](README.it.md)

> Spiegle den Bildschirm deines Android-Telefons auf das Android-Auto-Display, mit Unterstützung für Medientasten.
>
> **Kostenlos. Keine Funktion erfordert eine zusätzliche Zahlung.**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="Telefonbildschirm auf dem Android-Auto-Display gespiegelt, neben der Karte"></p>

> [!IMPORTANT]
> **Die Installation hängt von deiner Android-Version ab:**
> - **Android 14 und höher** — Installation **nur über Google Play** (auf Einladung — die App ist im Play Store **nicht über die Suche zu finden**). [Der Tester-Liste beitreten →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Beta-Test-beitreten)
> - **Android 13 und niedriger** — APK per Sideload mit KingInstaller installieren ([Schritte unten](#installation)) oder über Google Play.

## Funktionen

- **Bildschirmspiegelung** — Überträgt den Telefonbildschirm in Echtzeit auf die Android-Auto-Head-Unit
- **Mediensitzungs-Proxy** — Steuere jede Medien-App des Telefons über die native Medienoberfläche von Android Auto
- **Automatisches Abdunkeln** — Dunkelt den Telefonbildschirm bei inaktiver Spiegelung automatisch ab (Verzögerung 15/30/60/120 s)
- **Autostart** — Startet die Spiegelung automatisch, sobald Android Auto verbunden ist
- **Ruhezustand verhindern** — Verhindert, dass sich der Telefonbildschirm während der Spiegelung abschaltet
- **Stopp bei Trennung** — Beendet die Spiegelung automatisch, wenn Android Auto getrennt wird
- **App automatisch starten** — Öffnet beim Start der Spiegelung automatisch eine gewählte App auf dem Telefon, wenn Android Auto verbunden ist
- **Querformat erzwingen** — Erzwingt während der Spiegelung das Querformat; startet automatisch beim Verbinden, mit Umschalter auf dem Bildschirm
- **App-Verknüpfungen** — Füge dem Android-Auto-Spiegelbildschirm bis zu 4 Schnellstart-Tasten hinzu
- **Bildschirmtasten** — Blende die Tasten des Spiegelbildschirms in den erweiterten Einstellungen einzeln ein oder aus: Querformat erzwingen, Automatisches Abdunkeln sowie Zurück / Startbildschirm / Letzte Apps (bis zu 4 gleichzeitig)
- **Tastenposition** — Richte die Bildschirmtasten auf dem Legacy-Spiegel links aus oder weiche der Navigationsleiste des Telefons automatisch aus
- **Spiegelungsanpassung** — Passe Breite/Höhe der Spiegelung in den erweiterten Einstellungen an, falls die Head-Unit die Ränder abschneidet
- **Touch-Weiterleitung** *(experimentell)* — Tippe/scrolle/wische auf dem Android-Auto-Display, um das Telefon zu steuern

## Voraussetzungen

- Android 7.0 (API 24) oder höher
- Android Auto auf dem Telefon installiert
- Ein Fahrzeug mit Android-Auto-Unterstützung

## Installation

### Android 14 und höher — Installation über Google Play

> **Warum Google Play?**  
> Android Auto führt nur Apps aus, die über den Play Store installiert wurden, und
> Android 14+ blockiert den unten beschriebenen KingInstaller-Workaround — Play ist
> daher der einzige Weg zu einer Version, die Android Auto akzeptiert. Installiert
> wird trotzdem die **vollständige App** — dieselbe Version wie das GitHub-APK, nur
> über den internen Test-Track von Play verteilt.

Die App ist im Play Store **nicht über die Suche zu finden** — die Installation erfolgt **auf Einladung**.
Siehe **[Beta-Test beitreten](https://github.com/slzn/ScreenOnAuto-releases/wiki/Beta-Test-beitreten)**
für das Anmeldeformular und die Schritt-für-Schritt-Anleitung. Nach der Installation die App
öffnen und die angeforderten Berechtigungen wie üblich erteilen.

### Android 13 und niedriger — Sideload mit KingInstaller

> **Warum KingInstaller?**  
> Android Auto verlangt, dass Apps über den Google Play Store installiert werden.
> Bei direkter APK-Installation wird dein Browser oder Dateimanager als
> Installationsquelle registriert, was Android Auto ablehnt. KingInstaller
> installiert APKs und meldet dabei den Google Play Store als Installationsquelle.

#### Schritt 1 — KingInstaller installieren

1. Gehe zu [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) und lade die neueste `KingInstaller.apk` herunter
2. Auf dem Telefon: **Einstellungen → Sicherheit → "Unbekannte Apps installieren"** für deinen Browser oder Dateimanager aktivieren
3. `KingInstaller.apk` öffnen und auf **Installieren** tippen

#### Schritt 2 — ScreenOnAuto über KingInstaller installieren

1. Lade die neueste `ScreenOnAuto-*.apk` von der [aktuellen Version](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) herunter
2. Öffne **KingInstaller**, tippe auf das **Ordner-Symbol** und wähle die heruntergeladene APK
3. Tippe auf **Installieren** — KingInstaller installiert sie, als käme sie aus dem Google Play Store

#### Schritt 3 — Berechtigungen erteilen

Starte **ScreenOnAuto** und folge den Hinweisen in der App, um die erforderlichen Berechtigungen zu erteilen.

## In Android Auto überprüfen

Das gilt **unabhängig von der Installationsart** — KingInstaller-Sideload *oder* Google Play.

Gehe auf dem Telefon zu **Einstellungen → Verbundene Geräte → Android Auto → Launcher anpassen**.
Dort sollten **drei** ScreenOnAuto-Einträge erscheinen:

| Symbol | Name | Funktion |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Spiegelt den Telefonbildschirm im Vollbild — ersetzt den Kartenbereich |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Spiegelt den Telefonbildschirm über den Legacy-Projektionspfad — kann neben der Karte angezeigt werden |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | Steuert jede Medien-App des Telefons über die native Medienoberfläche von Android Auto |

Wenn alle drei Einträge erscheinen, war die Installation erfolgreich.
Falls einer fehlt: Bei einer Sideload-Installation über KingInstaller neu installieren und sicherstellen, dass der Google Play Store als Installationsquelle gemeldet wird; bei einer Google-Play-Installation warten, bis die Installation abgeschlossen ist, und Android Auto erneut öffnen.

Startklar? Siehe **[Verwendung](https://github.com/slzn/ScreenOnAuto-releases/wiki/Verwendung)** zum Starten der Spiegelung im Auto.

## Berechtigungen

| Berechtigung | Erforderlich für |
|---|---|
| Bildschirmaufnahme (MediaProjection) | Bildschirmspiegelung |
| Benachrichtigungszugriff | Mediensitzungs-Proxy |
| Über anderen Apps einblenden | Automatisches Abdunkeln & Querformat erzwingen |
| Bedienungshilfen-Dienst | Touch-Weiterleitung *(experimentell)* & die Tasten Zurück / Startbildschirm / Letzte Apps |

> **Tipp:** Um den Berechtigungsdialog für die Bildschirmaufnahme nicht bei jedem Start zu sehen, kannst du die Berechtigung einmalig per ADB erteilen — siehe [Spiegelungsberechtigung per ADB erteilen](https://github.com/slzn/ScreenOnAuto-releases/wiki/Spiegelungsberechtigung-per-ADB-erteilen).

## Bekannte Einschränkungen

- **Der Telefonbildschirm muss während der Spiegelung eingeschaltet bleiben** — die Spiegelung zeigt genau das, was auf dem Telefonbildschirm zu sehen ist; mit ausgeschaltetem oder gesperrtem Bildschirm läuft sie nicht weiter. Nutze **Ruhezustand verhindern**, um den Bildschirm wach zu halten, und **Automatisches Abdunkeln**, um ihn abzudunkeln und Akku zu sparen, statt ihn auszuschalten.
- **DRM-geschützte Inhalte können nicht gespiegelt werden** — Apps wie Netflix oder Disney+ zeigen im Spiegel ein schwarzes Bild. Das ist eine Einschränkung der Android-Plattform, die die App nicht umgehen kann.
- Die **Android-Auto-Navigationsleiste** auf dem Fahrzeugbildschirm wird von Android Auto selbst gezeichnet und lässt sich nicht ausblenden.

## Haftungsausschluss

Behalte die Straße immer im Blick — bediene diese App nicht während der Fahrt.

Dieses Projekt ist nicht mit Google verbunden und wird von Google weder unterstützt noch gesponsert. Android Auto ist eine Marke von Google LLC.

## Unterstützen

Wenn dir die App gefällt, kannst du gerne spenden oder mir einen Bubble Tea ausgeben 🧋

[![Über PayPal spenden](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Spendier mir einen Bubble Tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
