---
title: "Concedere il permesso di mirroring via ADB"
description: "Pre-concedi l'autorizzazione di cattura schermo di ScreenOnAuto via ADB così la finestra di dialogo non compare a ogni avvio del mirroring."
lang: it
slug: grant-mirror-permission-via-adb
permalink: /docs/it/grant-mirror-permission-via-adb/
---

# Concedere il permesso di mirroring via ADB


Per impostazione predefinita, Android mostra una finestra di autorizzazione a ogni avvio del mirroring.
Puoi pre-concedere l'autorizzazione di **cattura schermo (MediaProjection)** con ADB, così la finestra non comparirà più.

## Prerequisiti

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) installato sul computer
- Debug USB attivo sul telefono (**Impostazioni → Opzioni sviluppatore → Debug USB**)
- Telefono collegato via USB (o ADB via Wi-Fi)

## Passaggi

1. Apri un terminale (Prompt dei comandi / PowerShell su Windows).

2. Verifica che ADB veda il dispositivo:

   ```
   adb devices
   ```

   Il dispositivo deve comparire come `device` (non `unauthorized`).

3. Concedi l'autorizzazione:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. Avvia ScreenOnAuto e il mirroring — la finestra di autorizzazione non dovrebbe più comparire.

## Revocare l'autorizzazione

Per ripristinare il comportamento predefinito (finestra a ogni avvio):

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Risoluzione dei problemi

- **`error: device unauthorized`** — Cerca sul telefono la finestra «Consentire il debug USB?» e tocca **Consenti**.
- **La finestra compare ancora** — Forza l'arresto di ScreenOnAuto e riaprilo. Se persiste, revoca e ri-concedi con i comandi sopra.
- **App reinstallata (o passaggio tra canale Play e sideload)** — la disinstallazione cancella la concessione; riesegui il comando dopo la reinstallazione.
- **L'autorizzazione si azzera al riavvio** — Su alcune ROM (per es. MIUI/HyperOS) le concessioni `appops` non sopravvivono al riavvio. Riesegui il comando dopo ogni riavvio, oppure usa ADB via Wi-Fi.
