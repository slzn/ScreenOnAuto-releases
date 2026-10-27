---
title: "Como Usar"
description: "Como iniciar o espelhamento do ScreenOnAuto com o celular conectado: as duas entradas e suas diferenças, e o fluxo de início passo a passo."
lang: pt-BR
slug: how-to-use
permalink: /docs/pt-BR/how-to-use/
date: 2026-07-16
last_modified_at: 2026-10-27
---

# Como Usar


> **ℹ️ Nota**
> **Antes de começar**, confirme que:
> - O ScreenOnAuto está instalado e suas entradas aparecem no launcher do Android Auto.
> - Você já abriu o app uma vez no celular e concedeu as permissões solicitadas.

## As duas entradas de espelhamento

O launcher de apps do Android Auto mostra **duas** entradas de espelhamento. Ambas
espelham a mesma tela do celular — a diferença é *como* o espelhamento aparece na tela
do carro:

![Launcher do Android Auto com as entradas do ScreenOnAuto](/images/how-to-use/aa-launcher.png)

<table class="entry-pair" role="presentation">
<tr>
<td width="50%" valign="top">
<img src="/images/icon_launcher.png" width="32" align="middle" alt=""> <b>ScreenOnAuto</b><br>
<p><img src="/images/how-to-use/nav-fullscreen.png" width="100%" alt="Espelhamento ScreenOnAuto em tela cheia"></p>
Tela cheia — ocupa a área do mapa
</td>
<td width="50%" valign="top">
<img src="/images/icon_legacy.png" width="32" align="middle" alt=""> <b>ScreenOnAuto (Legacy)</b><br>
<p><img src="/images/how-to-use/legacy-split.png" width="100%" alt="ScreenOnAuto (Legacy) lado a lado com o mapa"></p>
Em uma <b>tela de carro grande o suficiente</b> pode ficar <b>lado a lado com o mapa</b> em vista dividida; em telas menores o mapa vai para o fundo e só o espelhamento é mostrado (ele <b>não</b> substitui o mapa)
</td>
</tr>
</table>

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
   (<img src="/images/icon_launcher.png" width="24" align="middle" alt="Ícone do ScreenOnAuto"> ou
   <img src="/images/icon_legacy.png" width="24" align="middle" alt="Ícone do ScreenOnAuto (Legacy)">) no launcher do
   Android Auto.
3. O celular mostra automaticamente o diálogo de permissão de captura de tela — pegue o
   celular e toque em **Começar agora** (Start now):

   <img src="/images/how-to-use/capture-dialog.jpg" width="360" alt="Diálogo de permissão de captura de tela no celular">

   Se o celular estava em repouso, a tela acende sozinha. Se ele estiver bloqueado com PIN, padrão ou impressão digital, desbloqueie primeiro; o diálogo aparece em seguida. Se você concedeu a permissão antes pelo ADB, não há diálogo: o espelhamento começa direto, e o carro mostra a tela de bloqueio até você desbloquear o celular.

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

### Espelhamento e imagem

#### A entrada abre mas fica em branco

O espelhamento ainda não começou; verifique se há um diálogo de permissão no celular, ou
inicie pela chave **Espelhar tela**.

#### Barras pretas ao redor da imagem

As telas do celular e do carro têm proporções diferentes. Use o botão **Travar orientação**
na tela de espelhamento (ou **Travar orientação automaticamente** nas configurações). Para
preencher exatamente a área útil do carro, ative **Ajustar a tela do telefone à do carro**
nos Recursos privilegiados (Shizuku ou root).

#### A imagem fica esticada ou distorcida depois que o layout muda

Isso acontece quando a área visível cresce ou encolhe na vista dividida. Girar o celular
para a tela alternar entre retrato e paisagem faz a imagem voltar ao normal (se **Travar orientação** estiver ativo, libere-o antes pelo botão na tela). Duas
configurações também podem resolver:

- Ative **Configurações → Avançado → Tamanho fixo do espelhamento**. O espelhamento
  mantém o tamanho em vez de distorcer (parte dele pode ficar oculta). Vale para a
  entrada de tela cheia **ScreenOnAuto**.
- Ative **Configurações → Avançado → Espelhamento desenhado pelo app (experimental)**. O
  app passa a desenhar a imagem do espelhamento em vez de deixar o sistema
  redimensioná-la, então ela não distorce mais na vista dividida. Consome um pouco
  mais de bateria e passa a valer no próximo início do espelhamento. **Ajustar a tela do telefone à do carro** (Recursos privilegiados) resolve o mesmo problema de outro jeito, e os dois podem ficar ativos juntos.

#### O Google Maps do Android Auto fica preto durante o espelhamento

No Android 15 e mais recentes, enquanto algum app captura a tela (como todo app de espelhamento precisa fazer), o Android oculta apps que considera sensíveis, e o Google Maps pode entrar nessa lista. O mapa do Android Auto então fica preto até o espelhamento parar, e outros apps de espelhamento e de mapas são afetados da mesma forma. Para resolver, ative **Configurações → Opções do desenvolvedor → Desativar as proteções do compartilhamento de tela**. Se as Opções do desenvolvedor não aparecerem, pesquise **Número da versão** nas Configurações e toque nele 7 vezes. Isso também faz o Android deixar de ocultar notificações com códigos de uso único enquanto você compartilha a tela; se isso importa para você, deixe desativado. Depois de ativar, pare o espelhamento e inicie de novo: a configuração só vale quando o espelhamento começa.

#### A barra de navegação do Android Auto continua na tela

A **barra de navegação do Android Auto** na tela do carro é desenhada pelo próprio
Android Auto e o app não pode ocultá-la.

### Recursos privilegiados (Shizuku / root)

#### Um servidor Shizuku iniciado via ADB é encerrado quando você conecta ao carro

A conexão USB coloca o celular em modo acessório, o que reinicia o ADB e derruba o
Shizuku junto — a depuração sem fio passa pelo mesmo ADB, então não ajuda. Basta iniciar
o Shizuku de novo e o ScreenOnAuto reconecta sozinho; melhor ainda, use o [fork
Shizuku-Next](https://github.com/rushiranpise/Shizuku-Next), cujo serviço de watchdog o
reinicia para você. Usuários com root e conexões sem fio do Android Auto não são
afetados.

#### Como acordar a tela depois do desligamento

A tela sensível ao toque desliga junto com o painel, então tocar no celular não faz
nada. Toque no botão **Escurecimento automático** na tela do carro — alternar o
escurecimento automático acorda a tela (ative o botão antes em **Botões na tela → Botões
de função**; ele vem desligado). Ou pressione o botão liga/desliga do celular **duas
vezes**, já que o primeiro toque é o que coloca o sistema para dormir. Parar o
espelhamento ou desconectar o Android Auto também traz a tela de volta.
