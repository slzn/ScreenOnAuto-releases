# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md) | [Русский](README.ru.md) | [Tiếng Việt](README.vi.md) | [Bahasa Indonesia](README.id.md) | [日本語](README.ja.md)

*🌐 [Site oficial](https://screenonauto.lzn.idv.tw/pt-BR/)*

> Espelhe a tela do seu celular Android na tela do Android Auto, com suporte a controles de mídia.
>
> **Gratuito. Nenhum recurso exige pagamento adicional.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Tela do celular espelhada na tela do Android Auto, lado a lado com o mapa"></p>

> [!IMPORTANT]
> **Como instalar:**
> - **Recomendado — Google Play**, em qualquer versão do Android: inscreva-se em uma rodada a cada meia hora e instale em até 25 minutos (o app **não aparece na busca** da Play Store). O Android Auto aceita o app sem nenhuma configuração extra. [Inscrever-se →](https://screenonauto.lzn.idv.tw/join/?lang=pt-BR)
> - **Android 13 ou inferior** — você também pode fazer sideload do APK com o KingInstaller ([passos abaixo](#alternativa--android-13-ou-inferior-sideload-com-kinginstaller)).
> - **Tem um adaptador AAWireless?** — você também pode instalar o APK diretamente, em qualquer versão do Android ([passos abaixo](#alternativa--com-um-adaptador-aawireless)).

## Recursos

- **Espelhamento de tela** — Captura e espelha a tela do celular na central multimídia do Android Auto em tempo real
- **Proxy de sessão de mídia** — Controle qualquer app de mídia do celular pela interface de mídia nativa do Android Auto
- **Escurecimento automático** — Reduz automaticamente o brilho da tela do celular durante o espelhamento ocioso (atraso de 15/30/60/120 s)
- **Escurecimento noturno** — Escurece o espelhamento na tela do carro à noite, seguindo o modo dia/noite do carro (ou sempre), com intensidade ajustável e um botão opcional na tela. Ative nas configurações avançadas; no espelhamento “ScreenOnAuto”, a tela do celular também escurece, a menos que o espelhamento desenhado pelo app esteja ativado
- **Início automático** — Começa a espelhar automaticamente quando você abre o ScreenOnAuto ou o ScreenOnAuto (Legacy) na tela do carro
- **Controle Externo** — Inicie, pare ou alterne o espelhamento com um intent, de um app de automação, um atalho ou ADB — [Controlar o Espelhamento a partir de Outro App](https://github.com/slzn/ScreenOnAuto-releases/wiki/Controlar-o-Espelhamento-a-partir-de-Outro-App)
- **Impedir suspensão** — Impede que a tela do celular apague durante o espelhamento
- **Parar ao desconectar** — Para o espelhamento automaticamente quando o Android Auto desconecta
- **Lançar app automaticamente** — Abre automaticamente um app escolhido no celular quando o espelhamento inicia com o Android Auto conectado
- **Espelhar apenas este app** *(Android 15+)* — Envia ao carro somente o app de abertura automática, em vez da tela inteira, mantendo o resto do celular privado. Requer a permissão de Captura de tela [concedida previamente via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permissão-de-Espelhamento-via-ADB); a tela do carro fica em branco enquanto você está fora desse app
- **Travar orientação** — Trava o celular em paisagem (em qualquer sentido) ou retrato durante o espelhamento, ou acompanha o formato da tela do carro; ativa automaticamente ao conectar, com botão de alternância na tela
- **Atalhos de apps** — Adicione até 4 botões de acesso rápido a apps na tela de espelhamento do Android Auto; toque e segure um deles para mudar o nome exibido no carro
- **Botões na tela** — Mostre ou oculte individualmente os botões da tela de espelhamento na página Botões na tela: Travar orientação, Escurecimento automático, Escurecimento noturno e Voltar / Início / Apps recentes do celular (até 4 ao mesmo tempo)
- **Posição dos botões** — No espelhamento Legacy, alinhe os botões à esquerda, afaste-os da barra de navegação do celular ou defina a distância deles até as bordas (barra de atalhos também) para não cobrir os controles da própria central
- **Ajuste do espelhamento** — Ajuste a largura/altura do espelhamento nas configurações avançadas para centrais que cortam as bordas; lá, o **Espelhamento desenhado pelo app** (experimental) também evita a distorção na vista dividida
- **Encaminhamento de toque** *(experimental)* — Toque, role, deslize e use o gesto de pinça para ampliar na tela do Android Auto para controlar o celular

## Recursos privilegiados

Opcional — requer [Shizuku](https://shizuku.rikka.app/) ou root. Sem eles, todo o resto funciona exatamente igual.

| Recurso | O que faz |
|---|---|
| **Desligar a tela do telefone** | Desliga o painel do celular quando o Escurecimento automático entra em ação, enquanto o carro continua exibindo o espelhamento — economiza bateria e evita que o celular ilumine o interior à noite |
| **Injeção de toque real** | Encaminha os movimentos reais do seu dedo em vez de gestos sintetizados, então **pressionar e segurar, arrastar e multitoque** funcionam no espelhamento Legacy |
| **Ajustar a tela do telefone à do carro** | Remodela a tela do celular para a proporção da unidade do carro durante o espelhamento, eliminando na origem as barras pretas e a distorção na tela dividida — a tela do carro é medida automaticamente |

Também com Shizuku ou root:

- **Botões de navegação do celular** — Voltar / Início / Apps recentes sem nenhum Serviço de acessibilidade ativado; ative-os em **Botões na tela → Botões de função**
- **Seguir o modo dia/noite do carro** *(Android 10+)* — Alterna o celular entre o tema claro e o escuro junto com o Android Auto durante o espelhamento
- **Tamanho da fonte durante o espelhamento** — Usa outro tamanho de fonte no celular durante o espelhamento
- **Modo de navegação durante o espelhamento** *(Android 10+)* — Muda o celular para navegação por gestos, com 2 botões ou com 3 botões durante o espelhamento

O tema, o tamanho de fonte e o modo de navegação do próprio celular voltam quando o espelhamento termina.

O Shizuku parou ao conectar no carro, ou a tela não acorda? Veja [Solução de problemas](https://github.com/slzn/ScreenOnAuto-releases/wiki/Como-Usar#recursos-privilegiados-shizuku--root).

## Requisitos

- Android 7.0 (API 24) ou superior
- Android Auto instalado no celular
- Um veículo compatível com Android Auto
- *(Opcional)* [Shizuku](https://shizuku.rikka.app/) ou root — para os [Recursos privilegiados](#recursos-privilegiados)

## Instalação

### Google Play (recomendado)

Funciona em qualquer versão do Android, e o Android Auto aceita o app sem nenhuma configuração extra (o Android Auto só executa apps instalados pela Play Store, e o Android 14+ bloqueia o método do KingInstaller). É o teste interno do Google Play — o mesmo app completo do GitHub, mas ele não aparece na busca da Play Store: [**inscreva-se na página de instalação**](https://screenonauto.lzn.idv.tw/join/?lang=pt-BR). Uma nova rodada abre a cada 30 minutos, e o link de instalação aparece alguns minutos depois que as inscrições da sua rodada fecham. Passo a passo completo: [**Instalar pelo programa de testes do Google Play**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Instalar-pelo-programa-de-testes-do-Google-Play).

### Alternativa — Android 13 ou inferior: sideload com KingInstaller

> **Por que o KingInstaller?**  
> O Android Auto exige que os apps sejam instalados pela Google Play Store.
> Instalar o APK diretamente registra o navegador ou o gerenciador de arquivos como
> origem da instalação, o que o Android Auto rejeita. O KingInstaller instala APKs
> informando a Google Play Store como origem da instalação.

#### Passo 1 — Instale o KingInstaller

1. Acesse [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) e baixe o `KingInstaller.apk` mais recente
2. Permita que o navegador ou gerenciador de arquivos **instale apps desconhecidos** — o Android pergunta na primeira vez que você abre um APK
3. Abra o `KingInstaller.apk` e toque em **Instalar**

#### Passo 2 — Instale o ScreenOnAuto pelo KingInstaller

1. Baixe o `ScreenOnAuto-*.apk` mais recente na [última versão](https://github.com/slzn/ScreenOnAuto-releases/releases/latest)
2. Abra o **KingInstaller**, toque no **ícone de pasta** e selecione o APK baixado
3. Toque em **Instalar** — o KingInstaller instalará como se viesse da Google Play Store

### Alternativa — com um adaptador AAWireless

> **Quando usar:** você tem um adaptador AAWireless e prefere instalar o APK diretamente em vez de passar pelo Google Play — também funciona onde o Play não consegue instalar, como no GrapheneOS com o Google Play em sandbox. Em um carro de verdade, o Android Auto ignora a própria opção **Fontes desconhecidas**; é o Developer Mode do adaptador que faz ela funcionar, então **esse caminho não funciona sem o adaptador**.

1. Baixe o `ScreenOnAuto-*.apk` mais recente na [última versão](https://github.com/slzn/ScreenOnAuto-releases/releases/latest) e instale — se o Android perguntar, permita que o navegador ou gerenciador de arquivos **instale apps desconhecidos**
2. Conecte o celular ao carro pelo adaptador. No app **AAWireless**, desative o **Passthrough mode** e ative o **Developer Mode**
3. Nas configurações do Android Auto no celular, abra **Configurações do desenvolvedor**, defina **Modo de aplicativo** como **Desenvolvedor** e ative **Fontes desconhecidas**
   - Não aparece Configurações do desenvolvedor? Toque 10 vezes em **Informações de versão e permissão** e depois abra o menu ⋮
4. Reinicie o celular

## Verificar no Android Auto

Isso vale **para qualquer forma de instalação** — sideload com KingInstaller, Google Play *ou* o caminho AAWireless.

No celular, vá em **Configurações → Dispositivos conectados → Android Auto → Personalizar tela de início**.
Você deve ver estas **duas** entradas do ScreenOnAuto:

| Ícone | Nome | Função |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Espelha a tela do celular em tela cheia — substitui a área do mapa |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Espelha a tela do celular pelo caminho de projeção Legacy — pode ser exibido lado a lado com o mapa |

Versões mais antigas do Android Auto também mostram uma terceira entrada, **ScreenOnAuto Media Controller**. Se ela não aparecer, é normal — o controle de mídia funciona do mesmo jeito.
Se faltar qualquer uma das **duas** entradas acima, reinstale — pelo KingInstaller no sideload, ou aguarde a instalação do Play terminar — e abra o Android Auto de novo. No caminho AAWireless, confira se o Developer Mode e Fontes desconhecidas continuam ativados.

Tudo pronto? Veja **[Como Usar](https://github.com/slzn/ScreenOnAuto-releases/wiki/Como-Usar)** para iniciar o espelhamento no carro.

## Permissões

| Permissão | Necessária para |
|---|---|
| Captura de tela (MediaProjection) | Espelhamento de tela |
| Acesso às notificações | Proxy de sessão de mídia |
| Sobrepor a outros apps | Escurecimento automático, Travar orientação e Escurecimento noturno |
| Serviço de acessibilidade | Encaminhamento de toque e botões Voltar / Início / Recentes (desnecessário com os recursos privilegiados) |

> **Dica:** para evitar o diálogo de permissão de captura de tela a cada início, você pode conceder a permissão uma única vez via ADB — veja [Conceder Permissão de Espelhamento via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permissão-de-Espelhamento-via-ADB). Isso também é o que libera **Espelhar apenas este app**.

## Limitações conhecidas

- **A tela do celular precisa ficar ligada durante o espelhamento** — o espelhamento mostra o que está na tela do celular. Use **Impedir suspensão** para mantê-la acesa e **Escurecimento automático** para economizar bateria; com Shizuku ou root, Desligar a tela do telefone remove essa limitação.
- **Conteúdo protegido por DRM não pode ser espelhado** — apps como Netflix ou Disney+ mostram uma tela preta no espelhamento. É uma restrição da plataforma Android que o app não tem como contornar.
- **O Google Maps do Android Auto pode ficar preto durante o espelhamento (Android 15+)** — enquanto algum app captura a tela, o Android oculta apps que considera sensíveis, e o Google Maps pode entrar nessa lista. Para resolver, ative **Opções do desenvolvedor → Desativar as proteções do compartilhamento de tela**; isso também faz o Android deixar de ocultar notificações com códigos de uso único enquanto você compartilha a tela. A configuração só vale a partir do próximo início do espelhamento; veja [Como Usar](https://github.com/slzn/ScreenOnAuto-releases/wiki/Como-Usar#o-google-maps-do-android-auto-fica-preto-durante-o-espelhamento) para o passo a passo.
- A **barra de navegação do Android Auto** na tela do carro é desenhada pelo próprio Android Auto e não pode ser ocultada.

## Aviso legal

Mantenha sempre os olhos na estrada — não use este app enquanto dirige.

Este projeto não é afiliado, endossado ou patrocinado pelo Google. Android Auto é uma marca registrada da Google LLC.

## Agradecimentos especiais

- **Jurek Harla** — redesenhou os ícones do ScreenOnAuto, do ScreenOnAuto (Legacy) e do Media Controller para que caibam no formato redondo de ícone do Android (v1.9.2).

## Apoie o projeto

Se este app for útil para você, considere fazer uma doação ou me pagar um bubble tea 🧋

[![Doar via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Me pague um bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
