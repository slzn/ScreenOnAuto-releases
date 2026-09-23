---
title: "Controlar o Espelhamento a partir de Outro App"
description: "Inicie, pare ou alterne o espelhamento com um intent, de um app de automação, um atalho ou ADB."
lang: pt-BR
slug: control-mirroring-from-another-app
permalink: /docs/pt-BR/control-mirroring-from-another-app/
date: 2026-09-23
last_modified_at: 2026-09-23
---

# Controlar o Espelhamento a partir de Outro App


Desde a **v1.8.4**, o ScreenOnAuto aceita três intents que iniciam, param ou alternam o
espelhamento. Qualquer coisa capaz de enviar um intent — um app de automação, um atalho
na tela inicial, um script via ADB, um app seu — pode controlar o espelhamento com eles,
de modo que ele entre junto com o resto da sua rotina ao dirigir, em vez de na mão.

## As três ações

| Ação | O que faz |
|---|---|
| `idv.lzn.screenonauto.action.START_MIRROR` | Inicia o espelhamento. Não faz nada se já estiver em execução. |
| `idv.lzn.screenonauto.action.STOP_MIRROR` | Para o espelhamento. Não faz nada se não estiver em execução. |
| `idv.lzn.screenonauto.action.TOGGLE_MIRROR` | Para se estiver em execução, inicia se não estiver. |

Repetir uma ação é sempre seguro. Um início enviado a um espelhamento que já está rodando
é ignorado, em vez de derrubar a sessão e montá-la de novo — então algo que dispara a cada
conexão Bluetooth não vai interromper um espelhamento que já está no ar.

## Em um app de automação

A maioria dos apps de automação expõe as mesmas peças sob nomes próprios — normalmente uma
ação de "enviar intent" com campos mais ou menos assim:

| Campo | Valor |
|---|---|
| Action | uma das três ações acima |
| Package | `idv.lzn.screenonauto` |
| Class | `idv.lzn.screenonauto.MirrorControlActivity` (ou `…MirrorControlReceiver` para broadcast) |
| Target | Activity (ou Broadcast) |

Use Activity, a menos que tenha um motivo para não usar — as duas seções seguintes explicam
a diferença e por que não dá para confiar no broadcast para *iniciar* o espelhamento. De
qualquer forma, o campo **Class** não é opcional: em branco, o broadcast simplesmente não
chega.

Se algo não estiver funcionando, teste antes o comando ADB correspondente logo abaixo. Ele
mostra se o problema está no intent ou no app que o envia.

## Iniciando uma activity (recomendado)

Envie a ação para `idv.lzn.screenonauto/.MirrorControlActivity` como **activity**:

```
adb shell am start -a idv.lzn.screenonauto.action.START_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlActivity
```

Nada do ScreenOnAuto aparece na tela, e nada fica para trás em Recentes. Você também pode
enviar o início *antes* de chegar ao carro — o espelhamento espera e entra sozinho assim que
a tela do carro estiver disponível.

> **ℹ️ Nota**
> O Android continua pedindo a permissão de captura de tela quando o espelhamento começa.
> Para deixar isso realmente sem as mãos, conceda a permissão previamente uma vez via ADB —
> veja [Conceder Permissão de Espelhamento via ADB](/docs/pt-BR/grant-mirror-permission-via-adb/).

## Enviando um broadcast

As mesmas três ações também funcionam como **broadcast**, enviadas para
`idv.lzn.screenonauto/.MirrorControlReceiver`:

```
adb shell am broadcast -a idv.lzn.screenonauto.action.STOP_MIRROR \
  -n idv.lzn.screenonauto/.MirrorControlReceiver
```

Uma **parada** enviada assim é completamente silenciosa — sem janela, sem piscada.

Nomear o componente não é opcional. O Android atual não entrega um broadcast a um app sem
que o remetente diga para qual componente ele é, então um broadcast que leva só a ação é
descartado e nada acontece, sem erro nenhum em lugar algum.

> **⚠️ Atenção**
> Um **início** enviado como broadcast não é confiável, e quando falha, falha em silêncio.
> Duas coisas precisam ser liberadas antes, e ambas vêm desligadas em muitos aparelhos:
>
> - **Inicialização automática.** Muitos aparelhos têm um gerenciamento de energia que
>   impede o app de ser acordado por um broadcast. Procure por um gerenciador de
>   inicialização automática nas configurações de bateria ou do gerenciador do telefone e
>   libere o ScreenOnAuto ali. O aparelho pode tentar desencorajar você.
> - **Sobreposição a outros apps.** Conceda isso ao ScreenOnAuto nas configurações do Android.
>
> Se você só precisa do início, use a activity acima — ela não precisa de nenhuma das duas.

## Solução de problemas

- **Não acontece absolutamente nada** — confira se o componente foi informado. Um broadcast
  sem ele é descartado antes de o ScreenOnAuto sequer entrar na história.
- **Parar funciona, mas iniciar não faz nada** — você está enviando um broadcast, e falta uma
  das duas permissões do aviso acima. Envie para a activity.
- **A caixa de permissão aparece toda vez** — esperado, a menos que você a conceda
  previamente com o [ADB](/docs/pt-BR/grant-mirror-permission-via-adb/).
- **Iniciar não faz nada com o espelhamento já rodando** — também esperado; veja acima.
