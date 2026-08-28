# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md)

*🌐 [Site officiel](https://screenonauto.lzn.idv.tw/fr/)*

> Dupliquez l'écran de votre téléphone Android sur l'affichage Android Auto, avec prise en charge des commandes multimédias.
>
> **Gratuit. Aucune fonctionnalité ne nécessite de paiement supplémentaire.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Écran du téléphone dupliqué sur l'affichage Android Auto, côte à côte avec la carte"></p>

> [!IMPORTANT]
> **La méthode d'installation dépend de votre version d'Android :**
> - **Android 14 et plus** — installation via **Google Play uniquement** (sur invitation — l'app **n'apparaît pas** dans les recherches du Play Store). [Rejoindre la liste des testeurs →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Rejoindre-le-test-bêta)
> - **Android 13 et moins** — installez l'APK avec KingInstaller ([étapes ci-dessous](#installation)), ou via Google Play.

## Fonctionnalités

- **Duplication d'écran** — Capture et duplique l'écran du téléphone sur l'unité principale Android Auto en temps réel
- **Proxy de session multimédia** — Contrôlez n'importe quelle app multimédia du téléphone depuis l'interface multimédia native d'Android Auto
- **Atténuation automatique** — Réduit automatiquement la luminosité du téléphone pendant la duplication inactive (délai de 15/30/60/120 s)
- **Démarrage automatique** — Démarre la duplication automatiquement à la connexion d'Android Auto
- **Empêcher la mise en veille** — Empêche l'écran du téléphone de se mettre en veille pendant la duplication
- **Arrêter à la déconnexion** — Arrête automatiquement la duplication à la déconnexion d'Android Auto
- **Lancer une app automatiquement** — Ouvre automatiquement une app choisie sur le téléphone quand la duplication démarre et qu'Android Auto est connecté
- **Forcer le paysage** — Force le téléphone en mode paysage pendant la duplication ; s'active à la connexion, avec un bouton à l'écran
- **Raccourcis de lancement** — Ajoutez jusqu'à 4 boutons de lancement rapide d'apps sur l'écran de duplication Android Auto
- **Boutons à l'écran** — Affichez ou masquez individuellement les boutons de l'écran de duplication dans les réglages avancés : Forcer paysage, Atténuer, et Retour / Accueil / Apps récentes du téléphone (4 au maximum)
- **Position des boutons** — Sur la duplication Legacy, alignez les boutons à gauche ou évitez automatiquement la barre de navigation du téléphone
- **Réglage de la duplication** — Rognez la largeur/hauteur de l'image dans les réglages avancés pour les unités qui coupent les bords
- **Transfert tactile** *(Expérimental)* — Touchez, faites défiler, balayez et pincez pour zoomer sur l'affichage Android Auto afin de contrôler votre téléphone

## Fonctions privilégiées

Elles débloquent ce que les API Android normales ne peuvent pas faire. Elles nécessitent **[Shizuku](https://shizuku.rikka.app/) ou root** et sont entièrement facultatives : si votre téléphone n'a ni l'un ni l'autre, **rien ne change** — la section reste masquée et toutes les autres fonctionnalités se comportent exactement comme avant.

| Fonction | Ce qu'elle fait |
|---|---|
| **Éteindre l'écran du téléphone** | Éteint la dalle du téléphone lorsque l'Atténuation automatique se déclenche, pendant que la voiture continue d'afficher la duplication — économise la batterie et évite que le téléphone n'éclaire l'habitacle la nuit |
| **Injection tactile réelle** | Transmet les mouvements réels de votre doigt au lieu de gestes synthétisés : **appui long, glisser et multi-touch** fonctionnent sur la duplication Legacy |
| **Boutons de navigation du téléphone** | Retour / Accueil / Apps récentes fonctionnent **sans aucun service d'accessibilité activé**. Activez les boutons dans **Avancé → Boutons de l'écran Android Auto** |

> [!IMPORTANT]
> **Un serveur Shizuku démarré via ADB s'arrête lors d'une connexion USB.** Une connexion USB à Android Auto place le téléphone en mode accessoire, ce qui redémarre ADB et emporte le serveur Shizuku avec lui. Le débogage sans fil n'y échappe pas : les deux passent par le même ADB. Si les fonctions privilégiées cessent de fonctionner juste après le branchement, relancez Shizuku — ScreenOnAuto se reconnecte ensuite tout seul. Connecter Android Auto **d'abord** et démarrer Shizuku **ensuite** vous évite cet aller-retour. Les utilisateurs root ne sont pas concernés, ni les connexions Android Auto sans fil (rien n'est branché, ADB n'est donc pas touché).

> **Réveiller l'écran après son extinction :** la dalle tactile s'éteint avec l'écran, toucher le téléphone ne fait donc rien. Arrêtez la duplication ou déconnectez Android Auto, ou appuyez **deux fois** sur le bouton d'alimentation du téléphone (la première pression est celle qui met réellement l'appareil en veille, Android n'ayant jamais su que l'écran était éteint). Le bouton **Atténuation automatique** sur l'écran de la voiture fonctionne aussi, mais seulement si vous l'avez activé dans **Avancé → Boutons de l'écran Android Auto** : il est désactivé par défaut.

## Prérequis

- Android 7.0 (API 24) ou plus récent
- Android Auto installé sur le téléphone
- Un véhicule compatible Android Auto
- *(Facultatif)* [Shizuku](https://shizuku.rikka.app/) ou root — pour les [Fonctions privilégiées](#fonctions-privilégiées)

## Installation

### Android 14 et plus — installation via Google Play

> **Pourquoi Google Play ?**  
> Android Auto n'exécute que les apps installées depuis le Play Store, et Android 14+
> bloque le contournement KingInstaller ci-dessous — Play est donc le seul moyen
> d'obtenir une version acceptée par Android Auto. Vous installez bien l'**app
> complète** — la même version que l'APK GitHub, simplement livrée via le canal de
> test interne de Play.

L'app **n'apparaît pas dans les recherches du Play Store** — l'installation se fait **sur invitation**.
Consultez **[Rejoindre le test bêta](https://github.com/slzn/ScreenOnAuto-releases/wiki/Rejoindre-le-test-bêta)**
pour le formulaire d'inscription et les instructions pas à pas. Après l'installation, lancez l'app et
accordez les permissions demandées de la même manière.

### Android 13 et moins — installation avec KingInstaller

> **Pourquoi KingInstaller ?**  
> Android Auto exige que les apps soient installées via le Google Play Store.
> Installer l'APK directement enregistre votre navigateur ou gestionnaire de fichiers
> comme source d'installation, ce qu'Android Auto refuse. KingInstaller installe les
> APK en déclarant Google Play Store comme source d'installation.

#### Étape 1 — Installer KingInstaller

1. Allez sur [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) et téléchargez le dernier `KingInstaller.apk`
2. Sur votre téléphone : **Paramètres → Sécurité → activez « Installer des apps inconnues »** pour votre navigateur ou gestionnaire de fichiers
3. Ouvrez `KingInstaller.apk` et touchez **Installer**

#### Étape 2 — Installer ScreenOnAuto via KingInstaller

1. Téléchargez le dernier `ScreenOnAuto-*.apk` depuis la [dernière version](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Ouvrez **KingInstaller**, touchez l'**icône de dossier** et sélectionnez l'APK téléchargé
3. Touchez **Installer** — KingInstaller l'installera comme s'il provenait du Google Play Store

#### Étape 3 — Accorder les permissions

Lancez **ScreenOnAuto** et suivez les invites de l'app pour accorder les permissions requises.

## Vérifier dans Android Auto

Cela fonctionne **quelle que soit la méthode d'installation** — KingInstaller *ou* Google Play.

Sur votre téléphone, allez dans **Paramètres → Appareils connectés → Android Auto → Personnaliser le lanceur**.
Vous devriez voir ces **deux** entrées ScreenOnAuto :

| Icône | Nom | Fonction |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Duplique l'écran du téléphone en plein écran — remplace la zone de carte |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Duplique l'écran via le chemin de projection Legacy — peut s'afficher côte à côte avec la carte |

Selon votre **version d'Android Auto**, vous verrez peut-être aussi une troisième entrée,
<img src="../images/icon_media.png" width="20"> **ScreenOnAuto Media Controller** — ou peut-être pas. **Les deux cas sont normaux :**

- **Ancienne version d'Android Auto** — l'entrée est listée, avec sa propre icône.
- **Version récente d'Android Auto** — aucune entrée. Le Media Controller n'a jamais eu d'interface propre : il pilote le panneau multimédia intégré d'Android Auto, et les versions récentes l'intègrent directement, donc aucune icône distincte n'est nécessaire. **Le contrôle multimédia fonctionne toujours.**

S'il manque l'une des **deux** entrées ci-dessus, il y a bien un problème : pour une installation KingInstaller, réinstallez en vérifiant que Google Play Store est déclaré comme source ; pour une installation Google Play, attendez la fin de l'installation puis rouvrez Android Auto.
**Ne réinstallez pas simplement parce que l'entrée Media Controller est absente** — c'est normal sur les versions récentes d'Android Auto.

Prêt ? Consultez **[Comment utiliser](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser)** pour démarrer la duplication dans la voiture.

## Permissions

| Permission | Nécessaire pour |
|---|---|
| Capture d'écran (MediaProjection) | Duplication d'écran |
| Accès aux notifications | Proxy de session multimédia |
| Afficher par-dessus les autres apps | Atténuation automatique et Forcer le paysage |
| Service d'accessibilité | Transfert tactile *(Expérimental)* et boutons Retour / Accueil / Apps récentes — avec les [Fonctions privilégiées](#fonctions-privilégiées), aucun des deux n'en a besoin : les boutons fonctionnent dès qu'un backend est connecté, le transfert tactile dès que **Injection tactile réelle** est activée |

> **Astuce :** pour éviter la boîte de dialogue de capture d'écran à chaque lancement, vous pouvez pré-accorder la permission via ADB — voir [Accorder la permission de duplication via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Accorder-la-permission-de-duplication-via-ADB).

## Limitations connues

- **L'écran du téléphone doit rester allumé pendant la duplication** — la duplication montre exactement ce qui est affiché sur le téléphone ; elle ne peut pas continuer écran éteint ou verrouillé. Utilisez **Empêcher la mise en veille** pour garder l'écran actif, et **Atténuation automatique** pour l'assombrir et économiser la batterie au lieu de l'éteindre. *(Avec Shizuku ou root et l'Atténuation automatique activée, [Éteindre l'écran du téléphone](#fonctions-privilégiées) lève cette limitation : la dalle s'éteint pendant que la duplication continue.)*
- **Les contenus protégés par DRM ne peuvent pas être dupliqués** — les apps comme Netflix ou Disney+ affichent un écran noir. C'est une restriction de la plateforme Android que l'app ne peut pas contourner.
- La **barre de navigation Android Auto** sur l'écran de la voiture est dessinée par Android Auto lui-même et ne peut pas être masquée.

## Avertissement

Gardez toujours les yeux sur la route — n'utilisez pas cette app en conduisant.

Ce projet n'est ni affilié à, ni approuvé, ni sponsorisé par Google. Android Auto est une marque de Google LLC.

## Soutenir

Si cette app vous est utile, vous pouvez faire un don ou m'offrir un bubble tea 🧋

[![Faire un don via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![M'offrir un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
