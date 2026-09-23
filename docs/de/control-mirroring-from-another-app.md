---
title: "Spiegelung aus einer anderen App steuern"
description: "Spiegelung per Intent starten, stoppen oder umschalten — aus einer Automatisierungs-App, einer Verknüpfung oder per ADB."
lang: de
slug: control-mirroring-from-another-app
permalink: /docs/de/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Spiegelung aus einer anderen App steuern


Seit **v1.8.4** nimmt ScreenOnAuto drei Intents entgegen, die die Spiegelung starten,
stoppen oder umschalten. Alles, was einen Intent senden kann – eine Automatisierungs-App,
eine Verknüpfung auf dem Startbildschirm, ein Skript über ADB, eine eigene App – kann die
Spiegelung damit steuern, sodass sie zusammen mit dem Rest deiner Fahrroutine anläuft statt
von Hand.

## Die drei Aktionen

| Aktion | Wirkung |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Startet die Spiegelung. Tut nichts, wenn sie bereits läuft. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Stoppt die Spiegelung. Tut nichts, wenn sie nicht läuft. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Stoppt sie, wenn sie läuft, startet sie andernfalls. |

Eine Aktion zu wiederholen ist immer unbedenklich. Ein Start an eine bereits laufende
Spiegelung wird ignoriert, statt die Sitzung abzubauen und neu aufzusetzen – etwas, das bei
jeder Bluetooth-Verbindung auslöst, unterbricht also keine Spiegelung, die schon steht.

## In einer Automatisierungs-App

Die meisten Automatisierungs-Apps bieten dieselben Bausteine unter eigenen Bezeichnungen an,
üblicherweise eine Aktion „Intent senden“ mit Feldern in etwa so:

| Feld | Wert |
|---|---|
| Action | eine der drei Aktionen oben |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (oder `…MirrorControlReceiver` für einen Broadcast) |
| Target | Activity (oder Broadcast) |

Nimm Activity, sofern nichts dagegenspricht – die beiden folgenden Abschnitte erklären
den Unterschied und warum man sich auf einen Broadcast zum *Starten* nicht verlassen kann. So
oder so ist das Feld **Class** nicht optional: Bleibt es leer, kommt der Broadcast gar nicht
erst an.

Wenn etwas nicht funktioniert, probier zuerst den passenden ADB-Befehl weiter unten. Er
zeigt, ob das Problem am Intent liegt oder an der App, die ihn sendet.

## Eine Activity starten (empfohlen)

Sende die Aktion als **Activity** an `idv.lzn.screenonauto/.MirrorControlActivity`:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Von ScreenOnAuto ist dabei nichts zu sehen, und in „Zuletzt verwendet“ bleibt nichts zurück.
Du kannst den Start auch senden, *bevor* du am Auto bist – die Spiegelung wartet und greift
von selbst, sobald der Fahrzeugbildschirm da ist.

> **ℹ️ Hinweis**
> Android fragt beim Start der Spiegelung weiterhin nach der Bildschirmaufnahme-Berechtigung.
> Damit es wirklich ohne Handgriff läuft, erteile sie einmal vorab per ADB – siehe
> [Spiegelungsberechtigung per ADB erteilen](/docs/de/grant-mirror-permission-via-adb/).

## Einen Broadcast senden

Dieselben drei Aktionen funktionieren auch als **Broadcast**, gesendet an
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Ein so gesendeter **Stopp** ist völlig unsichtbar – kein Fenster, kein Flackern.

Die Komponente zu benennen ist nicht optional. Das heutige Android stellt einer App keinen
Broadcast zu, wenn der Absender nicht sagt, für welche Komponente er gedacht ist. Ein
Broadcast, der nur die Aktion trägt, wird verworfen, und es passiert schlicht nichts – ohne
Fehlermeldung irgendwo.

> **⚠️ Warnung**
> Ein als Broadcast gesendeter **Start** ist unzuverlässig, und wenn er scheitert, scheitert
> er lautlos. Zwei Dinge müssen vorher erlaubt sein, und beide sind auf vielen Telefonen
> standardmäßig aus:
>
> - **Autostart.** Viele Telefone bringen eine Energieverwaltung mit, die verhindert, dass
>   eine App überhaupt von einem Broadcast geweckt wird. Such in den Akku- oder
>   Telefonmanager-Einstellungen nach einer Autostart-Verwaltung und erlaube
>   ScreenOnAuto dort. Das Telefon rät dir möglicherweise davon ab.
> - **Über anderen Apps anzeigen.** Erteile das ScreenOnAuto in den App-Einstellungen
>   von Android.
>
> Wenn du nur den Start brauchst, nimm die Activity oben – sie braucht nichts davon.

## Fehlerbehebung

- **Es passiert überhaupt nichts** – prüf, ob die Komponente benannt ist. Ein Broadcast
  ohne sie wird verworfen, bevor ScreenOnAuto überhaupt ins Spiel kommt.
- **Stoppen geht, Starten tut nichts** – du sendest einen Broadcast, und eine der beiden
  Berechtigungen aus der Warnung oben fehlt. Sende stattdessen an die Activity.
- **Der Berechtigungsdialog erscheint jedes Mal** – so vorgesehen, sofern du ihn nicht vorab
  per [ADB](/docs/de/grant-mirror-permission-via-adb/) erteilst.
- **Starten tut nichts, während die Spiegelung schon läuft** – ebenfalls so vorgesehen, siehe oben.
