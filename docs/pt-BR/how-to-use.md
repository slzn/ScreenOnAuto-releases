---
title: "Como Usar"
description: "Como iniciar o espelhamento do ScreenOnAuto com o celular conectado: as duas entradas e suas diferenças, e o fluxo de início passo a passo."
lang: pt-BR
slug: how-to-use
permalink: /docs/pt-BR/how-to-use/
---

# Como Usar


Este guia explica **como iniciar o espelhamento depois que o celular está conectado ao
carro** — as duas entradas de espelhamento e suas diferenças, e o fluxo de início passo
a passo.

> **ℹ️ Nota**
> **Antes de começar**, confirme que:
> - O ScreenOnAuto está instalado e as três entradas aparecem no launcher do Android Auto.
> - Você já abriu o app uma vez no celular e concedeu as permissões solicitadas.

## As duas entradas de espelhamento

O launcher de apps do Android Auto mostra **duas** entradas de espelhamento. Ambas
espelham a mesma tela do celular — a diferença é *como* o espelhamento aparece na tela
do carro:

![Launcher do Android Auto com as entradas do ScreenOnAuto](/images/how-to-use/aa-launcher.png)

|  | <img src="/images/icon_launcher.png" width="48"><br>**ScreenOnAuto** | <img src="/images/icon_legacy.png" width="48"><br>**ScreenOnAuto (Legacy)** |
|---|---|---|
| Exibição | Tela cheia — ocupa a área do mapa | Em uma **tela de carro grande o suficiente** pode ficar **lado a lado com o mapa** em vista dividida; em telas menores o mapa vai para o fundo e só o espelhamento é mostrado (ele **não** substitui o mapa) |

**ScreenOnAuto** — tela cheia, ocupando a área do mapa:

![Espelhamento ScreenOnAuto em tela cheia](/images/how-to-use/nav-fullscreen.png)

**ScreenOnAuto (Legacy)** — lado a lado com o mapa:

![ScreenOnAuto (Legacy) lado a lado com o mapa](/images/how-to-use/legacy-split.png)

Experimente os dois e use o que funcionar melhor na sua central. Ambos mostram o mesmo
espelhamento e você pode alternar a qualquer momento — com o espelhamento já em
execução, abrir a outra entrada o exibe na hora, sem pedir permissão de novo.

> **💡 Dica**
> Se você já abriu o **ScreenOnAuto** (entrada de tela cheia) e agora quer usar o
> **ScreenOnAuto (Legacy)**, abra primeiro o app de mapas (ex.: Google Maps) na tela do
> carro e só então inicie o espelhamento Legacy. Isso devolve ao app de mapas o papel
> de mapa padrão da tela do carro, e as funções de mapa não ficam presas ao
> espelhamento de tela cheia.

## Iniciar o espelhamento

### Com o Início automático ATIVADO (recomendado)

1. No app do celular, ative **Início automático** (configuração única).
2. Conecte o celular ao carro e toque em uma entrada do ScreenOnAuto
   (<img src="/images/icon_launcher.png" width="24" align="center"> ou
   <img src="/images/icon_legacy.png" width="24" align="center">) no launcher do
   Android Auto.
3. O celular mostra automaticamente o diálogo de permissão de captura de tela — pegue o
   celular e toque em **Começar agora** (Start now):

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Diálogo de permissão de captura de tela no celular">

4. A tela do seu celular aparece na central:

   ![Tela do celular espelhada na central](/images/how-to-use/mirror-active.png)

> **ℹ️ Nota**
> O diálogo de permissão é uma exigência do Android — aparece uma vez a cada início de
> espelhamento, não a cada mudança de tela. Com o *Início automático* desativado, tocar
> na entrada apenas abre a tela de espelhamento; nada é capturado até você mesmo
> iniciar.

### Iniciar manualmente

Se preferir manter o **Início automático** desativado:

1. Abra o ScreenOnAuto no celular, ative a chave **Espelhar tela** e toque em
   **Começar agora** (Start now) no diálogo de permissão.
2. Na tela do carro, abra uma das entradas do ScreenOnAuto — o espelhamento já está em
   execução e aparece imediatamente.

(A ordem não importa — você também pode abrir a entrada primeiro e ligar a chave
**Espelhar tela** depois.)

### Pular o diálogo de permissão

Cansado do diálogo aparecer toda vez? Você pode conceder a permissão uma única vez via
ADB — veja [Conceder Permissão de Espelhamento via ADB](/docs/pt-BR/grant-mirror-permission-via-adb/).

## Parar o espelhamento

Qualquer uma destas opções funciona:

- **Desconectar do carro** — o espelhamento para automaticamente (configuração padrão
  *Parar ao desconectar*).
- Tocar em **Parar espelhamento** na notificação persistente do celular.
- Desligar a chave **Espelhar tela** no app.

## Solução de problemas

- **A entrada abre mas fica em branco** — o espelhamento ainda não começou; verifique
  se há um diálogo de permissão no celular, ou inicie pela chave **Espelhar tela**.
- **Barras pretas ao redor da imagem** — as telas do celular e do carro têm proporções
  diferentes; o botão **Forçar paisagem** na tela de espelhamento (ou **Forçar paisagem
  automaticamente** nas configurações do app) costuma preencher a tela muito melhor. Se
  restarem frestas finas ou bordas cortadas, ajuste fino em **Configurações → Avançado →
  Ajustar largura do espelhamento / Ajustar altura do espelhamento** (pixels positivos
  recolhem uma borda cortada, negativos empurram para preencher uma barra preta).
- **A imagem fica esticada ou distorcida depois que o layout muda** (ex.: a área
  visível cresce ou encolhe na vista dividida) — ative **Configurações → Avançado →
  Tamanho fixo do espelhamento**. O espelhamento mantém o tamanho em vez de distorcer
  (parte dele pode ficar oculta). Vale para a entrada de tela cheia **ScreenOnAuto**.
- A **barra de navegação do Android Auto** na tela do carro é desenhada pelo próprio
  Android Auto e o app não pode ocultá-la.
