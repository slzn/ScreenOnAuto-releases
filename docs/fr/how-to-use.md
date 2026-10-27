---
title: "Comment utiliser"
description: "Démarrer la duplication ScreenOnAuto une fois le téléphone connecté : les deux entrées de duplication et leurs différences, et le démarrage pas à pas."
lang: fr
slug: how-to-use
permalink: /docs/fr/how-to-use/
date: 2026-07-17
last_modified_at: 2026-10-27
---

# Comment utiliser


> **ℹ️ Remarque**
> **Avant de commencer**, vérifiez que :
> - ScreenOnAuto est installé et que ses entrées apparaissent dans le lanceur d'Android Auto.
> - Vous avez ouvert l'app une fois sur le téléphone et accordé les permissions demandées.

## Les deux entrées de duplication

Le lanceur d'apps d'Android Auto affiche **deux** entrées de duplication. Les deux
dupliquent le même écran de téléphone — elles diffèrent par la *manière* dont la
duplication s'affiche sur l'écran de la voiture :

![Lanceur Android Auto affichant les entrées ScreenOnAuto](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="Duplication ScreenOnAuto en plein écran"></p>
Plein écran — occupe la zone de carte
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) côte à côte avec la carte"></p>
Sur un <b>écran de voiture assez grand</b>, peut s'afficher <b>côte à côte avec la carte</b> en vue partagée ; sur un écran plus petit, la carte passe simplement à l'arrière-plan et seule la duplication est affichée (elle ne <b>remplace pas</b> la carte)
</td>
</tr>
</table>

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
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="Icône ScreenOnAuto"> ou
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="Icône ScreenOnAuto (Legacy)">) dans le lanceur
   Android Auto.
3. Le téléphone affiche automatiquement la boîte de dialogue de capture d'écran —
   prenez le téléphone et touchez **Commencer** :

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Boîte de dialogue de capture d'écran sur le téléphone">

   Si le téléphone était en veille, l'écran s'allume tout seul. S'il est verrouillé par un code, un schéma ou une empreinte, déverrouillez-le d'abord ; la boîte de dialogue apparaît ensuite. Si vous avez accordé l'autorisation à l'avance via ADB, il n'y a pas de boîte de dialogue : la duplication démarre directement, et la voiture affiche l'écran de verrouillage jusqu'à ce que vous déverrouilliez le téléphone.

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

### Duplication et affichage

#### L'entrée s'ouvre mais reste vide

La duplication n'a pas encore démarré ; vérifiez la boîte de dialogue de permission sur
le téléphone, ou lancez-la via l'interrupteur de **duplication**.

#### Bandes noires autour de l'image

Le téléphone et l'écran de la voiture ont des formats différents. Utilisez le bouton
**Verrouiller l'orientation** sur l'écran de duplication (ou **Verrouiller automatiquement
l'orientation** dans les réglages). Pour remplir exactement la zone utile de la voiture,
activez **Adapter l'écran du téléphone à celui de la voiture** dans les Fonctions
privilégiées (Shizuku ou root).

#### Image étirée ou déformée après un changement de disposition

Cela se produit quand la zone visible grandit ou rétrécit en vue partagée. Faire pivoter
le téléphone pour que l'écran passe du portrait au paysage rétablit l'image (si **Verrouiller l'orientation** est actif, désactivez-le d'abord avec son bouton à l'écran). Deux réglages
peuvent aussi corriger cela :

- Activez **Réglages → Avancé → Taille fixe de la duplication**. La duplication garde
  alors sa taille au lieu de se déformer (une partie peut être masquée). S'applique à
  l'entrée plein écran **ScreenOnAuto**.
- Activez **Réglages → Avancé → Duplication dessinée par l'application (expérimental)**.
  L'application dessine alors elle-même l'image de la duplication au lieu de laisser le
  système la redimensionner : elle ne se déforme plus en vue partagée. Cela consomme un peu plus de batterie et prend effet au prochain démarrage
  de la duplication. **Adapter l'écran du téléphone à celui de la voiture** (Fonctions privilégiées) résout le même problème autrement, et les deux peuvent être activées en même temps.

#### Google Maps dans Android Auto devient noir pendant la duplication

Sur Android 15 et versions ultérieures, tant qu'une app capture l'écran (ce que toute app de duplication doit faire), Android masque les apps qu'il juge sensibles, et Google Maps peut figurer dans cette liste. La carte d'Android Auto reste alors noire jusqu'à l'arrêt de la duplication, et il en va de même avec d'autres apps de duplication ou de cartographie. Pour corriger cela, activez **Paramètres → Options pour les développeurs → Désactiver les protections lors du partage d'écran**. Si les Options pour les développeurs n'apparaissent pas, recherchez **Numéro de build** dans les Paramètres et touchez-le 7 fois. Android cesse alors aussi de masquer les notifications contenant des codes à usage unique pendant le partage d'écran ; si cela compte pour vous, laissez l'option désactivée. Une fois l'option activée, arrêtez la duplication et relancez-la : le réglage ne s'applique qu'au démarrage de la duplication.

#### La barre de navigation Android Auto reste affichée

La **barre de navigation Android Auto** sur l'écran de la voiture est dessinée par
Android Auto lui-même et ne peut pas être masquée par l'app.

### Fonctions privilégiées (Shizuku / root)

#### Un serveur Shizuku démarré via ADB s'arrête lorsque vous branchez le téléphone à la voiture

La connexion USB fait passer le téléphone en mode accessoire, ce qui redémarre ADB et
emporte Shizuku avec lui — le débogage sans fil passe par le même ADB et n'y change
rien. Relancez Shizuku et ScreenOnAuto se reconnecte tout seul ; mieux encore, utilisez
le [fork Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next), dont le service
watchdog le relance pour vous. Les utilisateurs root et les connexions Android Auto sans
fil ne sont pas concernés.

#### Réveiller l'écran après son extinction

La dalle tactile s'éteint avec l'écran, toucher le téléphone ne fait donc rien. Touchez
le bouton **Atténuation automatique** sur l'écran de la voiture — basculer l'atténuation
automatique réveille l'écran (activez d'abord le bouton dans **Boutons à l'écran →
Boutons de fonction** ; il est désactivé par défaut). Ou appuyez **deux fois** sur le
bouton d'alimentation du téléphone, car la première pression est celle qui met le
système en veille. Arrêter la duplication ou déconnecter Android Auto rallume aussi
l'écran.
