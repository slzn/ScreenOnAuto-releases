# <img src="images/icon_launcher.png" width="36" align="center"> ScreenOnAuto

[English](README.md) | [繁體中文](README.zh-TW.md) | [Español](README.es.md) | [Deutsch](README.de.md)

> Espelhe a tela do seu celular Android na tela do Android Auto, com suporte a controles de mídia.
>
> **Gratuito. Nenhum recurso exige pagamento adicional.**

<p align="center"><img src="images/screenshot-legacy-split.png" alt="Tela do celular espelhada na tela do Android Auto, lado a lado com o mapa"></p>

> [!IMPORTANT]
> **A forma de instalar depende da sua versão do Android:**
> - **Android 14 ou superior** — instale **somente pelo Google Play** (por convite — o app **não aparece na busca** da Play Store). [Entrar na lista de testadores →](https://github.com/slzn/ScreenOnAuto-releases/wiki/Participar-do-Teste-Beta)
> - **Android 13 ou inferior** — faça sideload do APK com o KingInstaller ([passos abaixo](#instalação)) ou instale pelo Google Play.

## Recursos

- **Espelhamento de tela** — Captura e espelha a tela do celular na central multimídia do Android Auto em tempo real
- **Proxy de sessão de mídia** — Controle qualquer app de mídia do celular pela interface de mídia nativa do Android Auto
- **Escurecimento automático** — Reduz automaticamente o brilho da tela do celular durante o espelhamento ocioso (atraso de 15/30/60/120 s)
- **Início automático** — Começa a espelhar automaticamente quando o Android Auto conecta
- **Impedir suspensão** — Impede que a tela do celular apague durante o espelhamento
- **Parar ao desconectar** — Para o espelhamento automaticamente quando o Android Auto desconecta
- **Lançar app automaticamente** — Abre automaticamente um app escolhido no celular quando o espelhamento inicia com o Android Auto conectado
- **Forçar paisagem** — Força o celular para o modo paisagem durante o espelhamento; ativa automaticamente ao conectar, com botão de alternância na tela
- **Atalhos de apps** — Adicione até 4 botões de acesso rápido a apps na tela de espelhamento do Android Auto
- **Botões na tela** — Mostre ou oculte individualmente os botões da tela de espelhamento nas configurações avançadas: Forçar paisagem, Escurecimento automático e Voltar / Início / Apps recentes do celular (até 4 ao mesmo tempo)
- **Posição dos botões** — No espelhamento Legacy, alinhe os botões à esquerda ou desvie automaticamente da barra de navegação do celular
- **Ajuste do espelhamento** — Ajuste a largura/altura do espelhamento nas configurações avançadas para centrais que cortam as bordas
- **Encaminhamento de toque** *(experimental)* — Toque/role/deslize na tela do Android Auto para controlar o celular

## Requisitos

- Android 7.0 (API 24) ou superior
- Android Auto instalado no celular
- Um veículo compatível com Android Auto

## Instalação

### Android 14 ou superior — instale pelo Google Play

> **Por que o Google Play?**  
> O Android Auto só executa apps instalados pela Play Store, e o Android 14+ bloqueia
> o método alternativo com o KingInstaller descrito abaixo — então o Play é a única
> forma de obter uma versão que o Android Auto aceite. O que você instala continua
> sendo o **app completo** — a mesma versão do APK do GitHub, apenas distribuída pela
> trilha de teste interno do Play.

O app **não aparece na busca da Play Store** — a instalação é **por convite**.
Veja **[Participar do Teste Beta](https://github.com/slzn/ScreenOnAuto-releases/wiki/Participar-do-Teste-Beta)**
para o formulário de inscrição e o passo a passo. Depois de instalar, abra o app e conceda
as permissões solicitadas normalmente.

### Android 13 ou inferior — sideload com KingInstaller

> **Por que o KingInstaller?**  
> O Android Auto exige que os apps sejam instalados pela Google Play Store.
> Instalar o APK diretamente registra o navegador ou o gerenciador de arquivos como
> origem da instalação, o que o Android Auto rejeita. O KingInstaller instala APKs
> informando a Google Play Store como origem da instalação.

#### Passo 1 — Instale o KingInstaller

1. Acesse [KingInstaller Releases](https://github.com/fcaronte/KingInstaller/releases) e baixe o `KingInstaller.apk` mais recente
2. No celular: **Configurações → Segurança → Ative "Instalar apps desconhecidos"** para o seu navegador ou gerenciador de arquivos
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
Você deve ver **três** entradas do ScreenOnAuto:

| Ícone | Nome | Função |
|---|---|---|
| <img src="images/icon_launcher.png" width="48"> | **ScreenOnAuto** | Espelha a tela do celular em tela cheia — substitui a área do mapa |
| <img src="images/icon_legacy.png" width="48"> | **ScreenOnAuto (Legacy)** | Espelha a tela do celular pelo caminho de projeção Legacy — pode ser exibido lado a lado com o mapa |
| <img src="images/icon_media.png" width="48"> | **ScreenOnAuto Media Controller** | Controla qualquer app de mídia do celular pela interface de mídia nativa do Android Auto |

Se as três entradas aparecerem, a instalação foi bem-sucedida.
Se alguma estiver faltando: em instalação por sideload, reinstale pelo KingInstaller e confirme que ele registra a Google Play Store como origem; em instalação pelo Google Play, aguarde a instalação do Play concluir e reabra o Android Auto.

Tudo pronto? Veja **[Como Usar](https://github.com/slzn/ScreenOnAuto-releases/wiki/Como-Usar)** para iniciar o espelhamento no carro.

## Permissões

| Permissão | Necessária para |
|---|---|
| Captura de tela (MediaProjection) | Espelhamento de tela |
| Acesso às notificações | Proxy de sessão de mídia |
| Sobrepor a outros apps | Escurecimento automático e Forçar paisagem |
| Serviço de acessibilidade | Encaminhamento de toque *(experimental)* e os botões Voltar / Início / Apps recentes |

> **Dica:** para evitar o diálogo de permissão de captura de tela a cada início, você pode conceder a permissão uma única vez via ADB — veja [Conceder Permissão de Espelhamento via ADB](https://github.com/slzn/ScreenOnAuto-releases/wiki/Conceder-Permissão-de-Espelhamento-via-ADB).

## Limitações conhecidas

- **Conteúdo protegido por DRM não pode ser espelhado** — apps como Netflix ou Disney+ mostram uma tela preta no espelhamento. É uma restrição da plataforma Android que o app não tem como contornar.
- A **barra de navegação do Android Auto** na tela do carro é desenhada pelo próprio Android Auto e não pode ser ocultada.

## Aviso legal

Mantenha sempre os olhos na estrada — não use este app enquanto dirige.

Este projeto não é afiliado, endossado ou patrocinado pelo Google. Android Auto é uma marca registrada da Google LLC.

## Apoie o projeto

Se este app for útil para você, considere fazer uma doação ou me pagar um bubble tea 🧋

[![Doar via PayPal](https://img.shields.io/badge/Donate-PayPal-blue?logo=paypal)](https://paypal.me/slzn0124)
[![Me pague um bubble tea](https://img.shields.io/badge/Buy%20me%20a%20bubble%20tea-🧋-orange)](https://www.paypal.com/ncp/payment/NSZL98LMSGYWE)
