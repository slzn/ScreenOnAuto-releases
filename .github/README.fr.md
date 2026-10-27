# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Português (Brasil)](README.pt-BR.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md) | [Tiếng Việt](README.vi.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md)

*🌐 [Site officiel](https://screenonauto.lzn.idv.tw/fr/)*

> Dupliquez l'écran de votre téléphone Android sur l'affichage Android Auto, avec prise en charge des commandes multimédias.
>
> **Gratuit. Aucune fonctionnalité ne nécessite de paiement supplémentaire.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Écran du téléphone dupliqué sur l'affichage Android Auto, côte à côte avec la carte"></p>

> [!IMPORTANT]
> **Comment installer :**
> - **Recommandé — Google Play**, sur toutes les versions d'Android : inscrivez-vous à un tour toutes les demi-heures, puis installez dans les 25 minutes (l'app **n'apparaît pas dans les recherches** du Play Store). Android Auto l'accepte sans aucun réglage supplémentaire. [S'inscrire →](https://screenonauto.lzn.idv.tw/join/?lang=fr)
> - **Android 13 et moins** — vous pouvez aussi installer l'APK avec KingInstaller ([étapes ci-dessous](#alternative--android-13-et-moins--installation-avec-kinginstaller)).
> - **Vous avez un dongle AAWireless ?** — vous pouvez aussi installer l'APK directement, sur toutes les versions d'Android ([étapes ci-dessous](#alternative--avec-un-dongle-aawireless)).

## Fonctionnalités

- **Duplication d'écran** — Capture et duplique l'écran du téléphone sur l'unité principale Android Auto en temps réel
- **Proxy de session multimédia** — Contrôlez n'importe quelle app multimédia du téléphone depuis l'interface multimédia native d'Android Auto
- **Atténuation automatique** — Réduit automatiquement la luminosité du téléphone pendant la duplication inactive (délai de 15/30/60/120 s)
- **Atténuation de nuit** — Assombrit la duplication sur l'écran de la voiture la nuit, selon le mode jour/nuit de la voiture (ou en permanence), avec une intensité réglable et un bouton à l'écran facultatif. À activer dans les réglages avancés ; avec la duplication « ScreenOnAuto », l'écran du téléphone s'assombrit aussi, sauf si la duplication dessinée par l'application est activée
- **Démarrage automatique** — Démarre la duplication automatiquement quand vous ouvrez ScreenOnAuto ou ScreenOnAuto (Legacy) sur l'écran de la voiture
- **Contrôle externe** — Démarrez, arrêtez ou basculez la duplication avec un intent, depuis une application d'automatisation, un raccourci ou ADB — [Contrôler la duplication depuis une autre application](https://github.com/slzn/ScreenOnAuto-releases/wiki/Contrôler-la-duplication-depuis-une-autre-application)
- **Empêcher la mise en veille** — Empêche l'écran du téléphone de se mettre en veille pendant la duplication
- **Arrêter à la déconnexion** — Arrête automatiquement la duplication à la déconnexion d'Android Auto
- **Lancer une app automatiquement** — Ouvre automatiquement une app choisie sur le téléphone quand la duplication démarre et qu'Android Auto est connecté
- **Dupliquer seulement cette application** *(Android 15+)* — Envoie à la voiture uniquement l'application lancée automatiquement au lieu de tout l'écran, le reste du téléphone reste privé. Nécessite la permission de capture d'écran [accordée au préalable via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Accorder-la-permission-de-duplication-via-ADB) ; l'écran de la voiture reste vide tant que vous quittez cette application
- **Verrouiller l'orientation** — Verrouille le téléphone en paysage (dans les deux sens) ou en portrait pendant la duplication, ou suit la forme de l'écran de la voiture ; s'active à la connexion, avec un bouton à l'écran
- **Raccourcis de lancement** — Ajoutez jusqu'à 4 boutons de lancement rapide d'apps sur l'écran de duplication Android Auto ; appui long sur l'un d'eux pour changer le texte affiché dans la voiture
- **Boutons à l'écran** — Affichez ou masquez individuellement les boutons de l'écran de duplication sur la page Boutons à l'écran : Verrouiller l'orientation, Atténuer, Atténuation de nuit, et Retour / Accueil / Apps récentes du téléphone (4 au maximum)
- **Position des boutons** — Sur la duplication Legacy, alignez les boutons à gauche, écartez-les de la barre de navigation du téléphone ou réglez leur distance aux bords (barre de raccourcis comprise) pour dégager les commandes propres à l'écran de la voiture
- **Réglage de la duplication** — Rognez la largeur/hauteur de l'image dans les réglages avancés pour les unités qui coupent les bords ; la **Duplication dessinée par l'application** (expérimental), au même endroit, évite aussi la déformation en vue partagée
- **Transfert tactile** *(Expérimental)* — Touchez, faites défiler, balayez et pincez pour zoomer sur l'affichage Android Auto afin de contrôler votre téléphone

## Fonctions privilégiées

Facultatif — nécessite [Shizuku](https://shizuku.rikka.app/) ou root. Sans eux, tout le reste fonctionne exactement pareil.

| Fonction | Ce qu'elle fait |
|---|---|
| **Éteindre l'écran du téléphone** | Éteint la dalle du téléphone lorsque l'Atténuation automatique se déclenche, pendant que la voiture continue d'afficher la duplication — économise la batterie et évite que le téléphone n'éclaire l'habitacle la nuit |
| **Injection tactile réelle** | Transmet les mouvements réels de votre doigt au lieu de gestes synthétisés : **appui long, glisser et multi-touch** fonctionnent sur la duplication Legacy |
| **Adapter l'écran du téléphone à celui de la voiture** | Redimensionne l'écran du téléphone au format de l'écran de la voiture pendant la duplication, supprimant à la source les bandes noires et la déformation en écran partagé — l'écran de la voiture est mesuré automatiquement |

Également avec Shizuku ou root :

- **Boutons de navigation du téléphone** — Retour / Accueil / Apps récentes sans aucun service d'accessibilité activé ; activez-les dans **Boutons à l'écran → Boutons de fonction**
- **Suivre le mode jour/nuit de la voiture** *(Android 10+)* — Fait passer le téléphone du thème clair au thème sombre en même temps qu'Android Auto pendant la duplication
- **Taille de police pendant la duplication** — Donne au téléphone une autre taille de police pendant la duplication

Le thème et la taille de police du téléphone sont rétablis à la fin de la duplication.

Shizuku s'est arrêté au branchement dans la voiture, ou l'écran ne se réveille plus ? Consultez [Dépannage](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser#fonctions-privilégiées-shizuku--root).

## Prérequis

- Android 7.0 (API 24) ou plus récent
- Android Auto installé sur le téléphone
- Un véhicule compatible Android Auto
- *(Facultatif)* [Shizuku](https://shizuku.rikka.app/) ou root — pour les [Fonctions privilégiées](#fonctions-privilégiées)

## Installation

### Google Play (recommandé)

Fonctionne sur toutes les versions d'Android, et Android Auto l'accepte sans aucun réglage supplémentaire (Android Auto n'exécute que les apps installées depuis le Play Store, et Android 14+ bloque la méthode KingInstaller). Ce sont les tests internes de Google Play : la même app complète que sur GitHub, mais elle n'apparaît pas dans les recherches du Play Store : [**inscrivez-vous sur la page d'installation**](https://screenonauto.lzn.idv.tw/join/?lang=fr). Un nouveau tour s'ouvre toutes les 30 minutes, et votre lien d'installation apparaît quelques minutes après la clôture des inscriptions de votre tour. Toutes les étapes : [**Installer via le programme de test Google Play**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Installer-via-le-programme-de-test-Google-Play).

### Alternative — Android 13 et moins : installation avec KingInstaller

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

### Alternative — avec un dongle AAWireless

> **Quand l'utiliser :** vous avez un dongle AAWireless et préférez installer l'APK directement plutôt que de passer par Google Play — cela fonctionne aussi là où Play ne peut pas installer, par exemple sur GrapheneOS avec Google Play en bac à sable. Dans une vraie voiture, Android Auto ignore son propre réglage **Sources inconnues** ; c'est le Developer Mode du dongle qui le rend effectif, donc **cette méthode ne fonctionne pas sans le dongle**.

1. Téléchargez le dernier `ScreenOnAuto-*.apk` depuis la [dernière version](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) et installez-le — si Android le demande, autorisez votre navigateur ou gestionnaire de fichiers à **installer des applis inconnues**
2. Connectez le téléphone à la voiture via le dongle. Dans l'app **AAWireless**, désactivez **Passthrough mode** et activez **Developer Mode**
3. Dans les paramètres Android Auto du téléphone, ouvrez **Paramètres pour les développeurs**, réglez **Mode d'application** sur **Développeur** et activez **Sources inconnues**
   - Vous ne voyez pas les paramètres pour les développeurs ? Touchez 10 fois **Informations sur la version et les autorisations**, puis ouvrez le menu ⋮
4. Redémarrez le téléphone

## Vérifier dans Android Auto

Cela fonctionne **quelle que soit la méthode d'installation** — KingInstaller, Google Play *ou* la méthode AAWireless.

Sur votre téléphone, allez dans **Paramètres → Appareils connectés → Android Auto → Personnaliser le lanceur**.
Vous devriez voir ces **deux** entrées ScreenOnAuto :

| Icône | Nom | Fonction |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Duplique l'écran du téléphone en plein écran — remplace la zone de carte |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Duplique l'écran via le chemin de projection Legacy — peut s'afficher côte à côte avec la carte |

Les anciennes versions d'Android Auto affichent aussi une troisième entrée, **ScreenOnAuto Media Controller**. Si vous ne la voyez pas, c'est normal — le contrôle multimédia fonctionne quand même.
S'il manque l'une des **deux** entrées ci-dessus, réinstallez — via KingInstaller pour un sideload, ou laissez l'installation Play se terminer — puis rouvrez Android Auto. Avec la méthode AAWireless, vérifiez que Developer Mode et Sources inconnues sont toujours activés.

Prêt ? Consultez **[Comment utiliser](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser)** pour démarrer la duplication dans la voiture.

## Permissions

| Permission | Nécessaire pour |
|---|---|
| Capture d'écran (MediaProjection) | Duplication d'écran |
| Accès aux notifications | Proxy de session multimédia |
| Afficher par-dessus les autres apps | Atténuation automatique, Verrouiller l'orientation et Atténuation de nuit |
| Service d'accessibilité | Transfert tactile et boutons Retour / Accueil / Récents (inutile avec les fonctions privilégiées) |

> **Astuce :** pour éviter la boîte de dialogue de capture d'écran à chaque lancement, vous pouvez pré-accorder la permission via ADB — voir [Accorder la permission de duplication via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Accorder-la-permission-de-duplication-via-ADB). C'est aussi ce qui débloque **Dupliquer seulement cette application**.

## Limitations connues

- **L'écran du téléphone doit rester allumé pendant la duplication** — la duplication montre ce qui s'affiche sur le téléphone. Utilisez **Empêcher la mise en veille** pour le garder actif et **Atténuation automatique** pour économiser la batterie ; avec Shizuku ou root, Éteindre l'écran du téléphone lève cette limite.
- **Les contenus protégés par DRM ne peuvent pas être dupliqués** — les apps comme Netflix ou Disney+ affichent un écran noir. C'est une restriction de la plateforme Android que l'app ne peut pas contourner.
- **Google Maps dans Android Auto peut devenir noir pendant la duplication (Android 15+)** — tant qu'une app capture l'écran, Android masque les apps qu'il juge sensibles, et Google Maps peut figurer dans cette liste. Pour corriger cela, activez **Options pour les développeurs → Désactiver les protections lors du partage d'écran** ; Android cesse alors aussi de masquer les notifications contenant des codes à usage unique pendant le partage d'écran. Le réglage s'applique au prochain démarrage de la duplication ; consultez [Comment utiliser](https://github.com/slzn/ScreenOnAuto-releases/wiki/Comment-utiliser#google-maps-dans-android-auto-devient-noir-pendant-la-duplication) pour la marche à suivre complète.
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
