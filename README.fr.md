# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md)

> Dupliquez l'écran de votre téléphone Android sur l'affichage Android Auto, avec prise en charge des commandes multimédias.
>
> **Gratuit. Aucune fonctionnalité ne nécessite de paiement supplémentaire.**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="Écran du téléphone dupliqué sur l'affichage Android Auto, côte à côte avec la carte"></p>

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
- **Transfert tactile** *(Expérimental)* — Touchez/faites défiler l'affichage Android Auto pour contrôler votre téléphone

## Prérequis

- Android 7.0 (API 24) ou plus récent
- Android Auto installé sur le téléphone
- Un véhicule compatible Android Auto

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
Vous devriez voir **trois** entrées ScreenOnAuto :

| Icône | Nom | Fonction |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Duplique l'écran du téléphone en plein écran — remplace la zone de carte |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Duplique l'écran via le chemin de projection Legacy — peut s'afficher côte à côte avec la carte |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | Contrôle n'importe quelle app multimédia du téléphone depuis l'interface multimédia native d'Android Auto |

Si les trois entrées apparaissent, l'installation a réussi.
S'il en manque une : pour une installation KingInstaller, réinstallez en vérifiant que Google Play Store est déclaré comme source ; pour une installation Google Play, attendez la fin de l'installation puis rouvrez Android Auto.

Prêt ? Consultez **[Comment utiliser](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser)** pour démarrer la duplication dans la voiture.

## Permissions

| Permission | Nécessaire pour |
|---|---|
| Capture d'écran (MediaProjection) | Duplication d'écran |
| Accès aux notifications | Proxy de session multimédia |
| Afficher par-dessus les autres apps | Atténuation automatique et Forcer le paysage |
| Service d'accessibilité | Transfert tactile *(Expérimental)* et boutons Retour / Accueil / Apps récentes |

> **Astuce :** pour éviter la boîte de dialogue de capture d'écran à chaque lancement, vous pouvez pré-accorder la permission via ADB — voir [Accorder la permission de duplication via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Accorder-la-permission-de-duplication-via-ADB).

## Limitations connues

- **L'écran du téléphone doit rester allumé pendant la duplication** — la duplication montre exactement ce qui est affiché sur le téléphone ; elle ne peut pas continuer écran éteint ou verrouillé. Utilisez **Empêcher la mise en veille** pour garder l'écran actif, et **Atténuation automatique** pour l'assombrir et économiser la batterie au lieu de l'éteindre.
- **Les contenus protégés par DRM ne peuvent pas être dupliqués** — les apps comme Netflix ou Disney+ affichent un écran noir. C'est une restriction de la plateforme Android que l'app ne peut pas contourner.
- La **barre de navigation Android Auto** sur l'écran de la voiture est dessinée par Android Auto lui-même et ne peut pas être masquée.

## Avertissement

Gardez toujours les yeux sur la route — n'utilisez pas cette app en conduisant.

Ce projet n'est ni affilié à, ni approuvé, ni sponsorisé par Google. Android Auto est une marque de Google LLC.

## Soutenir

Si cette app vous est utile, vous pouvez faire un don ou m'offrir un bubble tea 🧋

[![Faire un don via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![M'offrir un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
