# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md)

*🌐 [Site officiel](https://screenonauto.lzn.idv.tw/fr/)*

> Dupliquez l'écran de votre téléphone Android sur l'affichage Android Auto, avec prise en charge des commandes multimédias.
>
> **Gratuit. Aucune fonctionnalité ne nécessite de paiement supplémentaire.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Écran du téléphone dupliqué sur l'affichage Android Auto, côte à côte avec la carte"></p>

> [!IMPORTANT]
> **La méthode d'installation dépend de votre version d'Android :**
> - **Android 14 et plus** — installation **uniquement via Google Play** : inscrivez-vous à un tour toutes les demi-heures, puis installez dans les 25 minutes (l'app **n'apparaît pas dans les recherches** du Play Store). [S'inscrire →](https://screenonauto.lzn.idv.tw/join/?lang=fr)
> - **Android 13 et moins** — installez l'APK avec KingInstaller ([étapes ci-dessous](#installation)), ou via Google Play.

## Fonctionnalités

- **Duplication d'écran** — Capture et duplique l'écran du téléphone sur l'unité principale Android Auto en temps réel
- **Proxy de session multimédia** — Contrôlez n'importe quelle app multimédia du téléphone depuis l'interface multimédia native d'Android Auto
- **Atténuation automatique** — Réduit automatiquement la luminosité du téléphone pendant la duplication inactive (délai de 15/30/60/120 s)
- **Démarrage automatique** — Démarre la duplication automatiquement à la connexion d'Android Auto
- **Contrôle externe** — Démarrez, arrêtez ou basculez la duplication avec un intent, depuis une application d'automatisation, un raccourci ou ADB — [Contrôler la duplication depuis une autre application](https://github.com/slzn/ScreenOnAuto-releases/wiki/Contrôler-la-duplication-depuis-une-autre-application)
- **Empêcher la mise en veille** — Empêche l'écran du téléphone de se mettre en veille pendant la duplication
- **Arrêter à la déconnexion** — Arrête automatiquement la duplication à la déconnexion d'Android Auto
- **Lancer une app automatiquement** — Ouvre automatiquement une app choisie sur le téléphone quand la duplication démarre et qu'Android Auto est connecté
- **Dupliquer seulement cette application** *(Android 15+)* — Envoie à la voiture uniquement l'application lancée automatiquement au lieu de tout l'écran, le reste du téléphone reste privé. Nécessite la permission de capture d'écran [accordée au préalable via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Accorder-la-permission-de-duplication-via-ADB) ; l'écran de la voiture reste vide tant que vous quittez cette application
- **Forcer le paysage** — Force le téléphone en mode paysage pendant la duplication ; s'active à la connexion, avec un bouton à l'écran
- **Raccourcis de lancement** — Ajoutez jusqu'à 4 boutons de lancement rapide d'apps sur l'écran de duplication Android Auto
- **Boutons à l'écran** — Affichez ou masquez individuellement les boutons de l'écran de duplication sur la page Boutons à l'écran : Forcer paysage, Atténuer, et Retour / Accueil / Apps récentes du téléphone (4 au maximum)
- **Position des boutons** — Sur la duplication Legacy, alignez les boutons à gauche ou évitez automatiquement la barre de navigation du téléphone
- **Réglage de la duplication** — Rognez la largeur/hauteur de l'image dans les réglages avancés pour les unités qui coupent les bords ; la **Duplication dessinée par l'application** (expérimental), au même endroit, évite aussi la déformation en vue partagée
- **Transfert tactile** *(Expérimental)* — Touchez, faites défiler, balayez et pincez pour zoomer sur l'affichage Android Auto afin de contrôler votre téléphone

## Fonctions privilégiées

Facultatif — nécessite [Shizuku](https://shizuku.rikka.app/) ou root. Sans eux, tout le reste fonctionne exactement pareil.

| Fonction | Ce qu'elle fait |
|---|---|
| **Éteindre l'écran du téléphone** | Éteint la dalle du téléphone lorsque l'Atténuation automatique se déclenche, pendant que la voiture continue d'afficher la duplication — économise la batterie et évite que le téléphone n'éclaire l'habitacle la nuit |
| **Injection tactile réelle** | Transmet les mouvements réels de votre doigt au lieu de gestes synthétisés : **appui long, glisser et multi-touch** fonctionnent sur la duplication Legacy |
| **Boutons de navigation du téléphone** | Retour / Accueil / Apps récentes fonctionnent **sans aucun service d'accessibilité activé**. Activez les boutons dans **Boutons à l'écran → Boutons de fonction** |
| **Adapter l'écran du téléphone à celui de la voiture** | Redimensionne l'écran du téléphone au format de l'écran de la voiture pendant la duplication, supprimant à la source les bandes noires et la déformation en écran partagé — l'écran de la voiture est mesuré automatiquement |

Shizuku s'est arrêté au branchement dans la voiture, ou l'écran ne se réveille plus ? Consultez [Dépannage](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser#dépannage).

## Prérequis

- Android 7.0 (API 24) ou plus récent
- Android Auto installé sur le téléphone
- Un véhicule compatible Android Auto
- *(Facultatif)* [Shizuku](https://shizuku.rikka.app/) ou root — pour les [Fonctions privilégiées](#fonctions-privilégiées)

## Installation

### Android 14 et plus — installation via Google Play

Android Auto n'exécute que les apps installées depuis le Play Store, et Android 14+ bloque la méthode KingInstaller — installez donc via les tests internes de Google Play. C'est la même app complète que sur GitHub, mais elle n'apparaît pas dans les recherches du Play Store : [**inscrivez-vous sur la page d'installation**](https://screenonauto.lzn.idv.tw/join/?lang=fr). Un nouveau tour s'ouvre toutes les 30 minutes, et votre lien d'installation apparaît au début du tour. Toutes les étapes : [**Rejoindre le test bêta**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Rejoindre-le-test-bêta).

### Android 13 et moins — installation avec KingInstaller

> **Pourquoi KingInstaller ?**  
> Android Auto exige que les apps soient installées via le Google Play Store.
> Installer l'APK directement enregistre votre navigateur ou gestionnaire de fichiers
> comme source d'installation, ce qu'Android Auto refuse. KingInstaller installe les
> APK en déclarant Google Play Store comme source d'installation.

#### Étape 1 — Installer KingInstaller

1. Allez sur [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) et téléchargez le dernier `KingInstaller.apk`
2. Autorisez votre navigateur ou gestionnaire de fichiers à **installer des applis inconnues** — Android le demande la première fois que vous ouvrez un APK
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

Les anciennes versions d'Android Auto affichent aussi une troisième entrée, **ScreenOnAuto Media Controller**. Si vous ne la voyez pas, c'est normal — le contrôle multimédia fonctionne quand même.
S'il manque l'une des **deux** entrées ci-dessus, réinstallez — via KingInstaller pour un sideload, ou laissez l'installation Play se terminer — puis rouvrez Android Auto.

Prêt ? Consultez **[Comment utiliser](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser)** pour démarrer la duplication dans la voiture.

## Permissions

| Permission | Nécessaire pour |
|---|---|
| Capture d'écran (MediaProjection) | Duplication d'écran |
| Accès aux notifications | Proxy de session multimédia |
| Afficher par-dessus les autres apps | Atténuation automatique et Forcer le paysage |
| Service d'accessibilité | Transfert tactile et boutons Retour / Accueil / Récents (inutile avec les fonctions privilégiées) |

> **Astuce :** pour éviter la boîte de dialogue de capture d'écran à chaque lancement, vous pouvez pré-accorder la permission via ADB — voir [Accorder la permission de duplication via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Accorder-la-permission-de-duplication-via-ADB). C'est aussi ce qui débloque **Dupliquer seulement cette application**.

## Limitations connues

- **L'écran du téléphone doit rester allumé pendant la duplication** — la duplication montre ce qui s'affiche sur le téléphone. Utilisez **Empêcher la mise en veille** pour le garder actif et **Atténuation automatique** pour économiser la batterie ; avec Shizuku ou root, Éteindre l'écran du téléphone lève cette limite.
- **Les contenus protégés par DRM ne peuvent pas être dupliqués** — les apps comme Netflix ou Disney+ affichent un écran noir. C'est une restriction de la plateforme Android que l'app ne peut pas contourner.
- La **barre de navigation Android Auto** sur l'écran de la voiture est dessinée par Android Auto lui-même et ne peut pas être masquée.

## Avertissement

Gardez toujours les yeux sur la route — n'utilisez pas cette app en conduisant.

Ce projet n'est ni affilié à, ni approuvé, ni sponsorisé par Google. Android Auto est une marque de Google LLC.

## Remerciements

- **Jurek Harla** — a repensé les icônes de ScreenOnAuto, ScreenOnAuto (Legacy) et Media Controller pour qu’elles tiennent dans la forme ronde des icônes Android (v1.9.2).

## Soutenir

Si cette app vous est utile, vous pouvez faire un don ou m'offrir un bubble tea 🧋

[![Faire un don via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![M'offrir un bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
