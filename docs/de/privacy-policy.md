---
title: "Datenschutzerklärung"
description: "Was ScreenOnAuto mit deinen Daten tut und was nicht: Die App hat keine Internetberechtigung, erhebt nichts und gibt nichts weiter."
lang: de
slug: privacy-policy
permalink: /docs/de/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-18
---

# Datenschutzerklärung

ScreenOnAuto ist eine von Chih-En Liu entwickelte Android-App, die den Telefonbildschirm auf ein Android-Auto-Display im Auto spiegelt. Diese Erklärung gilt für die App und ihre Website screenonauto.lzn.idv.tw, einschließlich der Installationsseite unter `/join/`.

**Kurz gesagt: Die App erhebt keine personenbezogenen Daten, speichert sie auf keinem Server und gibt sie an niemanden weiter.**

## Die App

### Kein Internetzugriff

ScreenOnAuto fordert die Internetberechtigung von Android nicht an und kann daher keine Daten von deinem Telefon senden. Die App enthält keine Bibliotheken für Werbung, Analyse, Absturzberichte oder Tracking und braucht kein Konto.

### Wofür die Berechtigungen genutzt werden

Alles Folgende geschieht auf deinem Telefon. Was es verlässt, geht nur an dein Auto, über die Android-Auto-Verbindung.

| Berechtigung | Wofür sie genutzt wird |
|---|---|
| Bildschirmaufnahme (MediaProjection) | Den Telefonbildschirm oder eine einzelne App aufnehmen und auf dem Autobildschirm zeigen. Nichts wird aufgezeichnet oder gespeichert. |
| Benachrichtigungszugriff | Die aktiven Mediensitzungen auslesen (was gerade läuft, Wiedergabe/Pause, Überspringen) für die Mediensteuerung. Benachrichtigungsinhalte werden weder gelesen noch gespeichert. |
| Bedienungshilfen-Dienst | Berührungen auf dem Autobildschirm in Berührungen auf dem Telefon umsetzen, dazu die Schaltflächen Zurück / Startseite / Letzte Apps. Er liest keine Bildschirminhalte und nutzt die Bedienungshilfen-Ereignisse nicht, die er erhält. |
| Über anderen Apps anzeigen | Die Overlays für Auto-Dimmen, Ausrichtung sperren und Nachtdimmen. |
| Systemeinstellungen ändern | Die Bildschirmdrehung während der Spiegelung sperren, ab Android 16 im Tablet-Modus. |
| Shizuku oder Root (optional) | Die privilegierten Funktionen: Telefonbildschirm ausschalten, echte Toucheingabe, die Navigationstasten des Telefons sowie Bildschirmgröße, Dichte, Design, Schriftgröße und Navigationsmodus des Telefons während der Spiegelung ändern. Die eigenen Werte des Telefons werden nach der Spiegelung wiederhergestellt. |

### Was gespeichert wird

Deine Einstellungen und die ursprünglichen Anzeigewerte des Telefons, die die App nach der Spiegelung wiederherstellt, liegen im eigenen Speicher der App auf deinem Telefon. Beim Deinstallieren der App werden sie gelöscht. Ist die Android-Sicherung aktiviert, kann Android diese Einstellungen – wie bei den meisten Apps – in die Sicherung deines eigenen Google-Kontos aufnehmen oder sie bei einer Datenübertragung auf ein neues Telefon kopieren.

### Google Play

Wenn du ScreenOnAuto über Google Play installierst, kann Google je nach den Einstellungen deines Geräts Absturz- und Leistungsstatistiken erheben und dem Entwickler in zusammengefasster Form bereitstellen (Android Vitals). Dies verarbeitet Google gemäß der [Datenschutzerklärung von Google](https://policies.google.com/privacy?hl=de).

## Die Website

### Installationsseite (`/join/`)

Um Tester zu werden, meldest du dich auf der Installationsseite mit Google an. Verwendet wird nur die E-Mail-Adresse deines Kontos, um dich auf die Google-Play-Testerliste der jeweiligen Runde zu setzen. Du bekommst nie E-Mails, und die Liste wird gelöscht, sobald das Installationsfenster der Runde endet.

Die Anmeldung übernimmt Google: Die Seite lädt das Anmeldeskript von Google, das Google-Cookies setzen kann und deine IP-Adresse erhält, gemäß der [Datenschutzerklärung von Google](https://policies.google.com/privacy?hl=de). Nach der Anmeldung liegt das von Google zurückgegebene Anmelde-Token, das Daten deines Google-Kontos wie die E-Mail-Adresse enthält, im Sitzungsspeicher deines Browsers, bis du den Tab schließt. Die Seite sendet es an den Installationsserver (api.screenonauto.lzn.idv.tw). Dieser erhält bei jeder Anfrage deine IP-Adresse, protokolliert aber weder deine IP-Adresse noch deine E-Mail-Adresse.

### Alles andere

Abgesehen von der Anmeldung auf der Installationsseite verwendet die Website keine Analyse, kein Tracking und keine Cookies. Deine Wahl zwischen hellem und dunklem Design wird im lokalen Speicher deines Browsers abgelegt. Die Website wird über GitHub Pages bereitgestellt und lädt ihre Schriften von Google Fonts. Dadurch erhalten GitHub und Google beim Ausliefern der Seiten deine IP-Adresse, gemäß ihren eigenen Datenschutzerklärungen.

## Fehlerberichte, die du sendest

Wenn du einen Fehlerbericht oder ein Log sendest, etwa über einen Google-Drive-Link in einem GitHub-Issue, kann er Informationen über dein Gerät und die darauf installierten Apps enthalten. Er wird nur zur Untersuchung deines Problems genutzt und nach Abschluss der Untersuchung gelöscht. GitHub-Issues sind öffentlich – poste dort also keine persönlichen Daten.

## Kinder

ScreenOnAuto richtet sich nicht an Kinder unter 13 Jahren und erhebt wissentlich von niemandem Daten.

## Änderungen

Ändert sich diese Erklärung, wird die neue Fassung auf dieser Seite veröffentlicht, und das Datum „Zuletzt aktualisiert“ unten ändert sich.

## Kontakt

Eröffne ein Issue auf [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) oder schreibe an screenonauto@gmail.com.
