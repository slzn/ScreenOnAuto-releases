---
title: "Informativa sulla privacy"
description: "Cosa fa e cosa non fa ScreenOnAuto con i tuoi dati: l'app non ha il permesso di accesso a Internet, non raccoglie nulla e non condivide nulla."
lang: it
slug: privacy-policy
permalink: /docs/it/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-18
---

# Informativa sulla privacy

ScreenOnAuto è un'app Android, sviluppata da Chih-En Liu, che fa il mirroring dello schermo del telefono su un'unità principale con Android Auto. Questa informativa riguarda l'app e il suo sito, screenonauto.lzn.idv.tw, compresa la pagina di installazione `/join/`.

**In breve: l'app non raccoglie dati personali, non li conserva su alcun server e non li condivide con nessuno.**

## L'app

### Nessun accesso a Internet

ScreenOnAuto non richiede il permesso Internet di Android, quindi non può inviare dati fuori dal telefono. Non contiene librerie di pubblicità, statistiche, segnalazione di arresti anomali o tracciamento, e non richiede un account.

### A cosa servono le autorizzazioni

Tutto quanto segue avviene sul telefono. Ciò che ne esce va solo all'auto, tramite la connessione di Android Auto.

| Autorizzazione | A cosa serve |
|---|---|
| Cattura schermo (MediaProjection) | Catturare lo schermo del telefono, o una singola app, e mostrarlo sullo schermo dell'auto. Nulla viene registrato o salvato. |
| Accesso alle notifiche | Leggere le sessioni multimediali attive (cosa è in riproduzione, riproduci/pausa, salta) per i controlli multimediali. Il contenuto delle notifiche non viene letto né salvato. |
| Servizio di accessibilità | Trasformare i tocchi sullo schermo dell'auto in tocchi sul telefono, oltre ai pulsanti Indietro / Home / Recenti. Non legge il contenuto dello schermo e non usa gli eventi di accessibilità che riceve. |
| Mostra sopra le altre app | Le sovrapposizioni di Oscuramento automatico, Blocca orientamento e Oscuramento notturno. |
| Modifica impostazioni di sistema | Bloccare la rotazione dello schermo durante il mirroring, su Android 16 e versioni successive in modalità tablet. |
| Shizuku o root (facoltativo) | Le funzioni privilegiate: spegnere lo schermo del telefono, l'iniezione tocco, i pulsanti di navigazione del telefono e modificare dimensioni dello schermo, densità, tema, dimensione del carattere, modalità di navigazione e launcher predefinito (app per la schermata Home) del telefono durante il mirroring. I valori originali del telefono vengono ripristinati al termine del mirroring. |

### Cosa viene salvato

Le tue impostazioni, e i valori originali del telefono che l'app ripristina dopo il mirroring (come dimensioni dello schermo, tema o launcher predefinito), sono salvati nella memoria propria dell'app sul telefono. Disinstallando l'app vengono eliminati. Se il backup di Android è attivo, Android può includere queste impostazioni nel backup del tuo account Google, o copiarle su un nuovo telefono quando trasferisci i dati, come fa per la maggior parte delle app.

### Google Play

Se installi ScreenOnAuto da Google Play, Google può raccogliere statistiche su arresti anomali e prestazioni in base alle impostazioni del dispositivo e condividerle in forma aggregata con lo sviluppatore (Android vitals). Google le tratta secondo le [Norme sulla privacy di Google](https://policies.google.com/privacy?hl=it).

## Il sito

### Pagina di installazione (`/join/`)

Per diventare tester accedi con Google nella pagina di installazione. Viene usato solo l'indirizzo email del tuo account, per aggiungerti alla lista dei tester di Google Play di quel turno. Non ricevi mai email, e la lista viene cancellata al termine della finestra di installazione del turno.

L'accesso è gestito da Google: la pagina carica lo script di accesso di Google, che può impostare cookie di Google e riceve il tuo indirizzo IP, secondo le [Norme sulla privacy di Google](https://policies.google.com/privacy?hl=it). Dopo l'accesso, il token restituito da Google, che contiene dati del tuo account Google come l'indirizzo email, resta nella memoria di sessione del browser finché non chiudi la scheda. La pagina lo invia al server di installazione (api.screenonauto.lzn.idv.tw), che riceve il tuo indirizzo IP a ogni richiesta, ma non registra né il tuo indirizzo IP né il tuo indirizzo email.

### Tutto il resto

A parte l'accesso nella pagina di installazione, il sito non usa statistiche, tracciamento né cookie. La scelta del tema chiaro/scuro viene salvata nella memoria locale del browser. Il sito è ospitato su GitHub Pages e carica i caratteri da Google Fonts, quindi GitHub e Google ricevono il tuo indirizzo IP quando servono le pagine, secondo le rispettive norme sulla privacy.

## Segnalazioni di bug che invii

Se scegli di inviare una segnalazione di bug o un log, per esempio tramite un link di Google Drive in una issue su GitHub, potrebbe contenere informazioni sul tuo dispositivo e sulle app installate. Viene usata solo per esaminare il tuo problema e viene eliminata al termine dell'analisi. Le issue di GitHub sono pubbliche: non pubblicarvi informazioni personali.

## Minori

ScreenOnAuto non è rivolta ai minori di 13 anni e non raccoglie consapevolmente dati di nessuno.

## Modifiche

Se questa informativa cambia, la nuova versione sarà pubblicata in questa pagina e la data di “Ultimo aggiornamento” qui sotto cambierà.

## Contatti

Apri una issue su [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) oppure scrivi a screenonauto@gmail.com.
