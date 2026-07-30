---
title: "Accorder la permission de duplication via ADB"
description: "Pré-accordez la permission de capture d'écran de ScreenOnAuto via ADB pour que la boîte de dialogue n'apparaisse plus à chaque démarrage."
lang: fr
slug: grant-mirror-permission-via-adb
permalink: /docs/fr/grant-mirror-permission-via-adb/
date: 2026-07-17
last_modified_at: 2026-07-17
---

# Accorder la permission de duplication via ADB


Par défaut, Android affiche une boîte de dialogue de permission à chaque démarrage de la duplication.
Vous pouvez pré-accorder la permission de **capture d'écran (MediaProjection)** avec ADB pour que la boîte de dialogue ne s'affiche plus jamais.

## Prérequis

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) installé sur votre ordinateur
- Débogage USB activé sur le téléphone (**Paramètres → Options pour les développeurs → Débogage USB**)
- Téléphone connecté en USB (ou ADB en Wi-Fi)

## Étapes

1. Ouvrez un terminal (Invite de commandes / PowerShell sous Windows).

2. Vérifiez qu'ADB voit votre appareil :

   ```
   adb devices
   ```

   Votre appareil doit apparaître comme `device` (pas `unauthorized`).

3. Accordez la permission :

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. Lancez ScreenOnAuto et démarrez la duplication — la boîte de dialogue ne devrait plus apparaître.

## Révoquer la permission

Pour rétablir le comportement par défaut (boîte de dialogue à chaque fois) :

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Dépannage

- **`error: device unauthorized`** — Cherchez la boîte de dialogue « Autoriser le débogage USB ? » sur le téléphone et touchez **Autoriser**.
- **La boîte de dialogue apparaît encore** — Forcez l'arrêt de ScreenOnAuto et relancez. Si le problème persiste, révoquez puis ré-accordez avec les commandes ci-dessus.
- **App réinstallée (ou passage entre les canaux Play et sideload)** — la désinstallation efface la permission ; relancez la commande après la réinstallation.
- **La permission se réinitialise au redémarrage** — Sur certaines ROM (par ex. MIUI/HyperOS), les permissions `appops` ne survivent pas au redémarrage. Relancez la commande après chaque redémarrage, ou utilisez ADB en Wi-Fi.
