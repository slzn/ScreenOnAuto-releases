---
title: "Politique de confidentialité"
description: "Ce que ScreenOnAuto fait et ne fait pas de vos données : l'application n'a pas l'autorisation d'accès à Internet, ne collecte rien et ne partage rien."
lang: fr
slug: privacy-policy
permalink: /docs/fr/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-25
---

# Politique de confidentialité

ScreenOnAuto est une application Android, développée par Chih-En Liu, qui duplique l'écran du téléphone sur l'écran d'une voiture compatible Android Auto. Cette politique couvre l'application et son site, screenonauto.lzn.idv.tw, y compris la page d'installation `/join/`.

**En bref : l'application ne collecte aucune donnée personnelle, ne les stocke sur aucun serveur et ne les partage avec personne.**

## L'application

### Aucun accès à Internet

ScreenOnAuto ne demande pas l'autorisation Internet d'Android : il ne peut donc pas envoyer de données hors de votre téléphone. Il ne contient aucune bibliothèque de publicité, de statistiques, de rapports de plantage ou de suivi, et ne nécessite aucun compte.

### À quoi servent les autorisations

Tout ce qui suit se passe sur votre téléphone. Ce qui en sort va uniquement vers votre voiture, via la connexion Android Auto.

| Autorisation | Utilisation |
|---|---|
| Capture d'écran (MediaProjection) | Capturer l'écran du téléphone, ou une seule application, et l'afficher sur l'écran de la voiture. Rien n'est enregistré ni sauvegardé. |
| Accès aux notifications | Lire les sessions multimédias actives (ce qui est en cours de lecture, lecture/pause, piste suivante) pour les commandes multimédias. Le contenu des notifications n'est ni lu ni stocké. |
| Service d'accessibilité | Transformer les appuis sur l'écran de la voiture en appuis sur le téléphone, ainsi que les boutons Retour / Accueil / Récents. Il ne lit pas le contenu de l'écran et n'utilise pas les événements d'accessibilité qu'il reçoit. |
| Afficher par-dessus les autres apps | Les calques d'Atténuation automatique, Verrouiller l'orientation et Atténuation de nuit. |
| Modifier les paramètres système | Verrouiller la rotation de l'écran pendant la duplication, sur Android 16 et versions ultérieures en mode tablette. |
| Shizuku ou root (facultatif) | Les fonctions privilégiées : éteindre l'écran du téléphone, l'injection tactile, les boutons de navigation du téléphone, et modifier la taille d'écran, la densité, le thème, la taille de police, le mode de navigation et le lanceur par défaut (application d'écran d'accueil) du téléphone pendant la duplication. Les valeurs d'origine du téléphone sont rétablies à la fin de la duplication. |

### Ce qui est stocké

Vos réglages, ainsi que les valeurs d'origine du téléphone que l'application rétablit après la duplication (comme la taille d'écran, le thème ou le lanceur par défaut), sont enregistrés dans le stockage propre de l'application sur votre téléphone. Désinstaller l'application les supprime. Si la sauvegarde Android est activée, Android peut inclure ces réglages dans la sauvegarde de votre propre compte Google, ou les copier sur un nouveau téléphone lors d'un transfert de données, comme pour la plupart des applications.

### Google Play

Si vous installez ScreenOnAuto depuis Google Play, Google peut collecter des statistiques de plantages et de performances selon les paramètres de votre appareil, et les communiquer au développeur sous forme agrégée (Android Vitals). Google les traite conformément aux [Règles de confidentialité de Google](https://policies.google.com/privacy?hl=fr).

## Le site

### Page d'installation (`/join/`)

Pour devenir testeur, vous vous connectez avec Google sur la page d'installation. Seule l'adresse e-mail de votre compte est utilisée, pour vous ajouter à la liste de testeurs Google Play de la session. Vous ne recevez jamais d'e-mail, et la liste est supprimée à la fin de la fenêtre d'installation de la session.

La connexion est gérée par Google : la page charge le script de connexion de Google, qui peut déposer des cookies Google et reçoit votre adresse IP, conformément aux [Règles de confidentialité de Google](https://policies.google.com/privacy?hl=fr). Après la connexion, le jeton renvoyé par Google, qui contient des informations de votre compte Google comme votre adresse e-mail, est conservé dans le stockage de session du navigateur jusqu'à la fermeture de l'onglet. La page l'envoie au serveur d'installation (api.screenonauto.lzn.idv.tw), qui reçoit votre adresse IP à chaque requête, mais n'enregistre ni votre adresse IP ni votre adresse e-mail.

### Tout le reste

En dehors de la connexion sur la page d'installation, le site n'utilise ni statistiques, ni suivi, ni cookies. Votre choix de thème clair/sombre est conservé dans le stockage local de votre navigateur. Le site est hébergé sur GitHub Pages et charge ses polices depuis Google Fonts : GitHub et Google reçoivent donc votre adresse IP lorsqu'ils servent les pages, conformément à leurs propres règles de confidentialité.

## Rapports de bug que vous envoyez

Si vous choisissez d'envoyer un rapport de bug ou un journal, par exemple via un lien Google Drive dans une issue GitHub, il peut contenir des informations sur votre appareil et les applications qui s'y trouvent. Il sert uniquement à étudier votre problème et est supprimé une fois l'analyse terminée. Les issues GitHub sont publiques : n'y publiez pas d'informations personnelles.

## Enfants

ScreenOnAuto ne s'adresse pas aux enfants de moins de 13 ans et ne collecte sciemment de données sur personne.

## Modifications

Si cette politique change, la nouvelle version sera publiée sur cette page et la date « Dernière mise à jour » ci-dessous changera.

## Contact

Ouvrez une issue sur [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) ou écrivez à screenonauto@gmail.com.
