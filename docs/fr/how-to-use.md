---
title: "Comment utiliser"
description: "Démarrer la duplication ScreenOnAuto une fois le téléphone connecté : les deux entrées de duplication et leurs différences, et le démarrage pas à pas."
lang: fr
slug: how-to-use
permalink: /docs/fr/how-to-use/
date: 2026-07-17
last_modified_at: 2026-07-17
---

# Comment utiliser


Ce guide explique **comment démarrer la duplication une fois le téléphone connecté à la
voiture** — les deux entrées de duplication et leurs différences, puis le démarrage pas
à pas.

> **ℹ️ Remarque**
> **Avant de commencer**, vérifiez que :
> - ScreenOnAuto est installé et que les trois entrées apparaissent dans le lanceur d'Android Auto.
> - Vous avez ouvert l'app une fois sur le téléphone et accordé les permissions demandées.

## Les deux entrées de duplication

Le lanceur d'apps d'Android Auto affiche **deux** entrées de duplication. Les deux
dupliquent le même écran de téléphone — elles diffèrent par la *manière* dont la
duplication s'affiche sur l'écran de la voiture :

![Lanceur Android Auto affichant les entrées ScreenOnAuto](/images/how-to-use/aa-launcher.png)

|  | <img src="/images/icon_launcher.png" width="48"><br>**ScreenOnAuto** | <img src="/images/icon_legacy.png" width="48"><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| Affichage | Plein écran — occupe la zone de carte | Sur un **écran de voiture assez grand**, peut s'afficher **côte à côte avec la carte** en vue partagée ; sur un écran plus petit, la carte passe simplement à l'arrière-plan et seule la duplication est affichée (elle ne **remplace pas** la carte) |

**ScreenOnAuto** — plein écran, occupe la zone de carte :

![Duplication ScreenOnAuto en plein écran](/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)** — côte à côte avec la carte :

![ScreenOnAuto (Legacy) côte à côte avec la carte](/images/how-to-use/legacy-split.png)

Essayez les deux et gardez celle qui fonctionne le mieux sur votre unité. Les deux
montrent la même duplication, et vous pouvez passer de l'une à l'autre à tout moment —
une fois la duplication lancée, ouvrir l'autre entrée l'affiche immédiatement sans
redemander de permission.

> **💡 Astuce**
> Si vous avez déjà ouvert **ScreenOnAuto** (l'entrée plein écran) et souhaitez
> maintenant utiliser **ScreenOnAuto (Legacy)**, ouvrez d'abord votre app de carte
> (par ex. Google Maps) sur l'écran de la voiture, puis lancez la duplication Legacy.
> Cela rétablit l'app de carte comme carte par défaut de l'écran de la voiture, pour
> que les fonctions liées à la carte ne restent pas prises par la duplication plein écran.

## Démarrer la duplication

### Avec le démarrage automatique activé (recommandé)

1. Dans l'app sur le téléphone, activez **Démarrage automatique** (réglage à faire une fois).
2. Connectez le téléphone à la voiture et touchez une entrée ScreenOnAuto
   (<img src="/images/icon_launcher.png" width="24" align="center"> ou
   <img src="/images/icon_legacy.png" width="24" align="center">) dans le lanceur
   Android Auto.
3. Le téléphone affiche automatiquement la boîte de dialogue de capture d'écran —
   prenez le téléphone et touchez **Commencer** :

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Boîte de dialogue de capture d'écran sur le téléphone">

4. L'écran de votre téléphone apparaît sur l'unité :

   ![Écran du téléphone dupliqué sur l'unité](/images/how-to-use/mirror-active.png)

> **ℹ️ Remarque**
> La boîte de dialogue est une exigence d'Android — elle apparaît une fois à chaque
> démarrage de la duplication, pas à chaque changement d'écran. Avec le *démarrage
> automatique* désactivé, toucher l'entrée ouvre seulement l'écran de duplication ;
> rien n'est capturé tant que vous ne lancez pas vous-même.

### Démarrage manuel

Si vous préférez laisser le **démarrage automatique** désactivé :

1. Ouvrez ScreenOnAuto sur le téléphone, activez l'interrupteur de **duplication**, puis
   touchez **Commencer** dans la boîte de dialogue.
2. Sur l'écran de la voiture, ouvrez une des entrées ScreenOnAuto — la duplication est
   déjà en cours et s'affiche immédiatement.

(L'ordre n'a pas d'importance — vous pouvez aussi ouvrir l'entrée d'abord et activer
l'interrupteur ensuite.)

### Éviter la boîte de dialogue de permission

Fatigué de voir la boîte de dialogue à chaque fois ? Vous pouvez pré-accorder la
permission une fois via ADB — voir [Accorder la permission de duplication via ADB](/docs/fr/grant-mirror-permission-via-adb/).

## Arrêter la duplication

Au choix :

- **Déconnectez le téléphone de la voiture** — la duplication s'arrête automatiquement
  (réglage par défaut *Arrêter à la déconnexion*).
- Touchez **Arrêter la duplication** sur la notification persistante du téléphone.
- Désactivez l'interrupteur de **duplication** dans l'app.

## Dépannage

- **L'entrée s'ouvre mais reste vide** — la duplication n'a pas encore démarré ;
  vérifiez la boîte de dialogue de permission sur le téléphone, ou lancez-la via
  l'interrupteur de **duplication**.
- **Bandes noires autour de l'image** — le téléphone et l'écran de la voiture ont des
  formats différents ; le bouton **Forcer paysage** sur l'écran de duplication (ou
  **Forcer le paysage automatiquement** dans les réglages de l'app) remplit
  généralement bien mieux l'écran. S'il reste de fins espaces ou des bords coupés,
  affinez avec **Réglages → Avancé → Régler la largeur / la hauteur de la duplication**
  (pixels positifs pour ramener un bord coupé, négatifs pour combler une bande noire).
- **Image étirée ou déformée après un changement de disposition** (par ex. la zone
  visible grandit ou rétrécit en vue partagée) — activez **Réglages → Avancé → Taille
  fixe de la duplication**. La duplication garde alors sa taille au lieu de se déformer
  (une partie peut être masquée). S'applique à l'entrée plein écran **ScreenOnAuto**.
- La **barre de navigation Android Auto** sur l'écran de la voiture est dessinée par
  Android Auto lui-même et ne peut pas être masquée par l'app.
