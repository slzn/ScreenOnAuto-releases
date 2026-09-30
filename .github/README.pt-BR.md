# <img src="../images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](../README.md) | [繁體中文](README.zh-TW.md) | [Español](README.es.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [Italiano](README.it.md) | [Türkçe](README.tr.md) | [العربية](README.ar.md) | [한국어](README.ko.md)

*🌐 [Site oficial](https://screenonauto.lzn.idv.tw/pt-BR/)*

> Espelhe a tela do seu celular Android na tela do Android Auto, com suporte a controles de mídia.
>
> **Gratuito. Nenhum recurso exige pagamento adicional.**

<p align="center"><img src="../images/screenshot-legacy-split.png" alt="Tela do celular espelhada na tela do Android Auto, lado a lado com o mapa"></p>

> [!IMPORTANT]
> **A forma de instalar depende da sua versão do Android:**
> - **Android 14 ou superior** — instale **somente pelo Google Play**: inscreva-se em uma rodada a cada meia hora e instale em até 25 minutos (o app **não aparece na busca** da Play Store). [Inscrever-se →](https://screenonauto.lzn.idv.tw/join/?lang=pt-BR)
> - **Android 13 ou inferior** — faça sideload do APK com o KingInstaller ([passos abaixo](#instalação)) ou instale pelo Google Play.

## Recursos

- **Espelhamento de tela** — Captura e espelha a tela do celular na central multimídia do Android Auto em tempo real
- **Proxy de sessão de mídia** — Controle qualquer app de mídia do celular pela interface de mídia nativa do Android Auto
- **Escurecimento automático** — Reduz automaticamente o brilho da tela do celular durante o espelhamento ocioso (atraso de 15/30/60/120 s)
- **Início automático** — Começa a espelhar automaticamente quando o Android Auto conecta
- **Controle Externo** — Inicie, pare ou alterne o espelhamento com um intent, de um app de automação, um atalho ou ADB — [Controlar o Espelhamento a partir de Outro App](https://github.com/slzn/ScreenOnAuto-releases/wiki/Controlar-o-Espelhamento-a-partir-de-Outro-App)
- **Impedir suspensão** — Impede que a tela do celular apague durante o espelhamento
- **Parar ao desconectar** — Para o espelhamento automaticamente quando o Android Auto desconecta
- **Lançar app automaticamente** — Abre automaticamente um app escolhido no celular quando o espelhamento inicia com o Android Auto conectado
- **Espelhar apenas este app** *(Android 15+)* — Envia ao carro somente o app de abertura automática, em vez da tela inteira, mantendo o resto do celular privado. Requer a permissão de Captura de tela [concedida previamente via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permissão-de-Espelhamento-via-ADB); a tela do carro fica em branco enquanto você está fora desse app
- **Forçar paisagem** — Força o celular para o modo paisagem durante o espelhamento; ativa automaticamente ao conectar, com botão de alternância na tela
- **Atalhos de apps** — Adicione até 4 botões de acesso rápido a apps na tela de espelhamento do Android Auto
- **Botões na tela** — Mostre ou oculte individualmente os botões da tela de espelhamento na página Botões na tela: Forçar paisagem, Escurecimento automático e Voltar / Início / Apps recentes do celular (até 4 ao mesmo tempo)
- **Posição dos botões** — No espelhamento Legacy, alinhe os botões à esquerda ou desvie automaticamente da barra de navegação do celular
- **Ajuste do espelhamento** — Ajuste a largura/altura do espelhamento nas configurações avançadas para centrais que cortam as bordas; lá, o **Espelhamento desenhado pelo app** (experimental) também evita a distorção na vista dividida
- **Encaminhamento de toque** *(experimental)* — Toque, role, deslize e use o gesto de pinça para ampliar na tela do Android Auto para controlar o celular

## Recursos privilegiados

Opcional — requer [Shizuku](https://shizuku.rikka.app/) ou root. Sem eles, todo o resto funciona exatamente igual.

| Recurso | O que faz |
|---|---|
| **Desligar a tela do telefone** | Desliga o painel do celular quando o Escurecimento automático entra em ação, enquanto o carro continua exibindo o espelhamento — economiza bateria e evita que o celular ilumine o interior à noite |
| **Injeção de toque real** | Encaminha os movimentos reais do seu dedo em vez de gestos sintetizados, então **pressionar e segurar, arrastar e multitoque** funcionam no espelhamento Legacy |
| **Botões de navegação do celular** | Voltar / Início / Apps recentes funcionam **sem nenhum Serviço de acessibilidade ativado**. Ative os botões em **Botões na tela → Botões de função** |
| **Ajustar a tela do telefone à do carro** | Remodela a tela do celular para a proporção da unidade do carro durante o espelhamento, eliminando na origem as barras pretas e a distorção na tela dividida — a tela do carro é medida automaticamente |

O Shizuku parou ao conectar no carro, ou a tela não acorda? Veja [Solução de problemas](https://github.com/slzn/ScreenOnAuto-releases/wiki/Como-Usar#solução-de-problemas).

## Requisitos

- Android 7.0 (API 24) ou superior
- Android Auto instalado no celular
- Um veículo compatível com Android Auto
- *(Opcional)* [Shizuku](https://shizuku.rikka.app/) ou root — para os [Recursos privilegiados](#recursos-privilegiados)

## Instalação

### Android 14 ou superior — instale pelo Google Play

O Android Auto só executa apps instalados pela Play Store, e o Android 14+ bloqueia o método do KingInstaller — por isso, instale pelo teste interno do Google Play. É o mesmo app completo do GitHub, mas ele não aparece na busca da Play Store: [**inscreva-se na página de instalação**](https://screenonauto.lzn.idv.tw/join/?lang=pt-BR). Uma nova rodada abre a cada 30 minutos, e o link de instalação aparece quando a rodada começa. Passo a passo completo: [**Participar do Teste Beta**](https://github.com/slzn/ScreenOnAuto-releases/wiki/Participar-do-Teste-Beta).

### Android 13 ou inferior — sideload com KingInstaller

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

#### Passo 3 — Conceda as permissões

Abra o **ScreenOnAuto** e siga as instruções no app para conceder as permissões necessárias.

## Verificar no Android Auto

Isso vale **para qualquer forma de instalação** — sideload com KingInstaller *ou* Google Play.

No celular, vá em **Configurações → Dispositivos conectados → Android Auto → Personalizar tela de início**.
Você deve ver estas **duas** entradas do ScreenOnAuto:

| Ícone | Nome | Função |
|---|---|---|
| <img src="../images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Espelha a tela do celular em tela cheia — substitui a área do mapa |
| <img src="../images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Espelha a tela do celular pelo caminho de projeção Legacy — pode ser exibido lado a lado com o mapa |

Versões mais antigas do Android Auto também mostram uma terceira entrada, **ScreenOnAuto Media Controller**. Se ela não aparecer, é normal — o controle de mídia funciona do mesmo jeito.
Se faltar qualquer uma das **duas** entradas acima, reinstale — pelo KingInstaller no sideload, ou aguarde a instalação do Play terminar — e abra o Android Auto de novo.

Tudo pronto? Veja **[Como Usar](https://github.com/slzn/ScreenOnAuto-releases/wiki/Como-Usar)** para iniciar o espelhamento no carro.

## Permissões

| Permissão | Necessária para |
|---|---|
| Captura de tela (MediaProjection) | Espelhamento de tela |
| Acesso às notificações | Proxy de sessão de mídia |
| Sobrepor a outros apps | Escurecimento automático e Forçar paisagem |
| Serviço de acessibilidade | Encaminhamento de toque e botões Voltar / Início / Recentes (desnecessário com os recursos privilegiados) |

> **Dica:** para evitar o diálogo de permissão de captura de tela a cada início, você pode conceder a permissão uma única vez via ADB — veja [Conceder Permissão de Espelhamento via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permissão-de-Espelhamento-via-ADB). Isso também é o que libera **Espelhar apenas este app**.

## Limitações conhecidas

- **A tela do celular precisa ficar ligada durante o espelhamento** — o espelhamento mostra o que está na tela do celular. Use **Impedir suspensão** para mantê-la acesa e **Escurecimento automático** para economizar bateria; com Shizuku ou root, Desligar a tela do telefone remove essa limitação.
- **Conteúdo protegido por DRM não pode ser espelhado** — apps como Netflix ou Disney+ mostram uma tela preta no espelhamento. É uma restrição da plataforma Android que o app não tem como contornar.
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
