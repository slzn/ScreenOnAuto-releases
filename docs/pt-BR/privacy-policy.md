---
title: "Política de Privacidade"
description: "O que o ScreenOnAuto faz e não faz com os seus dados: o app não tem permissão de acesso à internet, não coleta nada e não compartilha nada."
lang: pt-BR
slug: privacy-policy
permalink: /docs/pt-BR/privacy-policy/
date: 2026-11-18
last_modified_at: 2026-11-18
---

# Política de Privacidade

O ScreenOnAuto é um app Android, desenvolvido por Chih-En Liu, que espelha a tela do celular em uma central multimídia com Android Auto. Esta política abrange o app e o site screenonauto.lzn.idv.tw, incluindo a página de instalação em `/join/`.

**Resumindo: o app não coleta dados pessoais, não os guarda em nenhum servidor e não os compartilha com ninguém.**

## O app

### Sem acesso à internet

O ScreenOnAuto não solicita a permissão de internet do Android, então não consegue enviar dados para fora do seu celular. Ele não contém bibliotecas de anúncios, análises, relatórios de falhas ou rastreamento, e não precisa de conta.

### Para que servem as permissões

Tudo o que está abaixo acontece no seu celular. O que sai dele vai apenas para o seu carro, pela conexão do Android Auto.

| Permissão | Para que é usada |
|---|---|
| Captura de tela (MediaProjection) | Capturar a tela do celular, ou de um app, e exibi-la na tela do carro. Nada é gravado nem salvo. |
| Acesso às notificações | Ler as sessões de mídia ativas (o que está tocando, reproduzir/pausar, pular) para os controles de mídia. O conteúdo das notificações não é lido nem armazenado. |
| Serviço de acessibilidade | Transformar toques na tela do carro em toques no celular, e os botões Voltar / Início / Recentes. Ele não lê o conteúdo da tela e não usa os eventos de acessibilidade que recebe. |
| Sobrepor a outros apps | As sobreposições de Escurecimento automático, Travar orientação e Escurecimento noturno. |
| Modificar configurações do sistema | Travar a rotação da tela durante o espelhamento, no Android 16 e posteriores em modo tablet. |
| Shizuku ou root (opcional) | Os recursos privilegiados: desligar a tela do celular, injeção de toque, os botões de navegação do celular e alterar o tamanho da tela, a densidade, o tema, o tamanho da fonte, o modo de navegação e o launcher padrão (app de tela inicial) do celular durante o espelhamento. Os valores originais do celular são restaurados quando o espelhamento termina. |

### O que é armazenado

As suas configurações e os valores originais do celular que o app restaura após o espelhamento (como o tamanho da tela, o tema ou o launcher padrão) ficam salvos no armazenamento próprio do app no seu celular. Desinstalar o app os apaga. Se o backup do Android estiver ativado, o Android pode incluir essas configurações no backup da sua própria Conta do Google, ou copiá-las para um celular novo quando você transfere os seus dados, como faz com a maioria dos apps.

### Google Play

Se você instalar o ScreenOnAuto pelo Google Play, o Google pode coletar estatísticas de falhas e desempenho de acordo com as configurações do seu dispositivo e compartilhá-las de forma agregada com o desenvolvedor (Android vitals). Isso é tratado pelo Google de acordo com a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR).

## O site

### Página de instalação (`/join/`)

Para se tornar testador, você faz login com o Google na página de instalação. Apenas o endereço de e-mail da sua conta é usado, para incluir você na lista de testadores do Google Play daquela rodada. Você nunca recebe e-mails, e a lista é apagada quando a janela de instalação da rodada termina.

O login é feito pelo Google: a página carrega o script de login do Google, que pode definir cookies do Google e recebe o seu endereço IP, de acordo com a [Política de Privacidade do Google](https://policies.google.com/privacy?hl=pt-BR). Depois do login, o token de login devolvido pelo Google, que contém dados da sua Conta do Google como o endereço de e-mail, fica guardado no armazenamento de sessão do navegador até você fechar a aba. A página o envia ao servidor de instalação (api.screenonauto.lzn.idv.tw), que recebe o seu endereço IP a cada solicitação, mas não registra o seu endereço IP nem o seu e-mail.

### Todo o resto

Fora o login na página de instalação, o site não usa análises, rastreamento nem cookies. A sua escolha de tema claro/escuro fica guardada no armazenamento local do navegador. O site é hospedado no GitHub Pages e carrega as fontes do Google Fonts, então o GitHub e o Google recebem o seu endereço IP ao servir as páginas, de acordo com as respectivas políticas de privacidade.

## Relatórios de bugs que você envia

Se você decidir enviar um relatório de bug ou um log, por exemplo por um link do Google Drive em uma issue do GitHub, ele pode conter informações sobre o seu dispositivo e os apps instalados nele. Ele é usado apenas para investigar o seu problema e é apagado quando a investigação termina. As issues do GitHub são públicas, então não publique informações pessoais nelas.

## Crianças

O ScreenOnAuto não é direcionado a crianças menores de 13 anos e não coleta dados de ninguém intencionalmente.

## Alterações

Se esta política mudar, a nova versão será publicada nesta página e a data de “Última atualização” abaixo será alterada.

## Contato

Abra uma issue no [GitHub](https://github.com/slzn/ScreenOnAuto-releases/issues) ou envie um e-mail para screenonauto@gmail.com.
