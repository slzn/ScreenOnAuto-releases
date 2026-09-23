---
title: "Contrôler la duplication depuis une autre application"
description: "Démarrez, arrêtez ou basculez la duplication avec un intent, depuis une application d'automatisation, un raccourci ou ADB."
lang: fr
slug: control-mirroring-from-another-app
permalink: /docs/fr/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Contrôler la duplication depuis une autre application


Depuis la **v1.8.4**, ScreenOnAuto accepte trois intents qui démarrent, arrêtent ou basculent
la duplication. Tout ce qui peut envoyer un intent — une application d'automatisation, un
raccourci sur l'écran d'accueil, un script via ADB, votre propre application — peut piloter la
duplication avec eux, afin qu'elle se lance avec le reste de votre configuration de conduite
plutôt qu'à la main.

## Les trois actions

| Action | Effet |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Démarre la duplication. Ne fait rien si elle est déjà en cours. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Arrête la duplication. Ne fait rien si elle n'est pas en cours. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | L'arrête si elle tourne, la démarre sinon. |

Répéter une action est toujours sans risque. Un démarrage envoyé à une duplication déjà en
cours est ignoré au lieu de démonter la session et de la reconstruire : quelque chose qui se
déclenche à chaque connexion Bluetooth n'interrompra donc pas une duplication déjà établie.

## Dans une application d'automatisation

La plupart des applications d'automatisation présentent les mêmes éléments sous leurs propres
libellés, généralement une action « envoyer un intent » avec des champs de ce genre :

| Champ | Valeur |
|---|---|
| Action | l'une des trois actions ci-dessus |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (ou `…MirrorControlReceiver` pour un broadcast) |
| Target | Activity (ou Broadcast) |

Utilisez Activity sauf raison contraire : les deux sections suivantes expliquent la différence
et pourquoi on ne peut pas compter sur un broadcast pour *démarrer* la duplication. Dans les
deux cas, le champ **Class** n'est pas facultatif : laissé vide, le broadcast n'arrive tout
simplement pas.

Si quelque chose ne fonctionne pas, essayez d'abord la commande ADB correspondante ci-dessous.
Elle vous dit si le problème vient de l'intent ou de l'application qui l'envoie.

## Démarrer une activity (recommandé)

Envoyez l'action à `idv.lzn.screenonauto/.MirrorControlActivity` en tant qu'**activity** :

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Rien de ScreenOnAuto n'apparaît à l'écran, et rien ne subsiste dans les applications récentes.
Vous pouvez aussi envoyer le démarrage *avant* d'arriver à la voiture : la duplication attend
et se raccroche d'elle-même dès que l'écran du véhicule est là.

> **ℹ️ Remarque**
> Android demande toujours l'autorisation de capture d'écran au démarrage de la duplication.
> Pour que ce soit vraiment sans intervention, accordez-la une fois à l'avance via ADB — voir
> [Accorder la permission de duplication via ADB](/docs/fr/grant-mirror-permission-via-adb/).

## Envoyer un broadcast

Les mêmes trois actions fonctionnent aussi en **broadcast**, envoyé à
`idv.lzn.screenonauto/.MirrorControlReceiver` :

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Un **arrêt** envoyé ainsi est totalement silencieux : aucune fenêtre, aucun clignotement.

Nommer le composant n'est pas facultatif. Android ne remet plus un broadcast à une
application si l'expéditeur ne précise pas à quel composant il est destiné ; un broadcast
qui ne porte que l'action est donc rejeté et il ne se passe rien du tout, sans la moindre
erreur nulle part.

> **⚠️ Avertissement**
> Un **démarrage** envoyé en broadcast n'est pas fiable, et lorsqu'il échoue, il échoue en
> silence. Deux choses doivent être autorisées au préalable, et toutes deux sont désactivées
> par défaut sur de nombreux téléphones :
>
> - **Démarrage automatique.** Beaucoup de téléphones embarquent une gestion de l'énergie qui
>   empêche purement et simplement une application d'être réveillé par un broadcast.
>   Cherchez un gestionnaire de démarrage automatique dans les réglages de batterie ou du
>   gestionnaire du téléphone et autorisez-y ScreenOnAuto. Le téléphone peut chercher à vous
>   en dissuader.
> - **Affichage par-dessus les autres applications.** Accordez-le à ScreenOnAuto dans les
>   réglages Android.
>
> Si vous n'avez besoin que du démarrage, utilisez l'activity ci-dessus : elle n'exige ni
> l'un ni l'autre.

## Dépannage

- **Il ne se passe absolument rien** — vérifiez que le composant est bien indiqué. Un
  broadcast sans lui est rejeté avant même que ScreenOnAuto n'entre en jeu.
- **L'arrêt fonctionne mais le démarrage ne fait rien** — vous envoyez un broadcast et l'une
  des deux autorisations de l'avertissement ci-dessus manque. Envoyez plutôt à l'activity.
- **La boîte de dialogue d'autorisation apparaît à chaque fois** — c'est normal, sauf si vous
  l'accordez à l'avance avec [ADB](/docs/fr/grant-mirror-permission-via-adb/).
- **Le démarrage ne fait rien alors que la duplication tourne déjà** — normal également, voir
  ci-dessus.
