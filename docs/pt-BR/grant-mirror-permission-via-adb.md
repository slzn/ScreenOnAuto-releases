---
title: "Conceder Permissão de Espelhamento via ADB"
description: "Conceda a permissão de captura de tela do ScreenOnAuto via ADB para o diálogo não aparecer a cada início do espelhamento."
lang: pt-BR
slug: grant-mirror-permission-via-adb
permalink: /docs/pt-BR/grant-mirror-permission-via-adb/
---

# Conceder Permissão de Espelhamento via ADB


Por padrão, o Android mostra um diálogo de permissão toda vez que o ScreenOnAuto inicia
o espelhamento de tela. Você pode conceder previamente a permissão de **Captura de tela
(MediaProjection)** via ADB para que o diálogo nunca mais apareça.

## Pré-requisitos

- [ADB (Android Debug Bridge)](https://developer.android.com/tools/releases/platform-tools) instalado no computador
- Depuração USB ativada no celular (**Configurações → Opções do desenvolvedor → Depuração USB**)
- Celular conectado por USB (ou ADB por Wi-Fi)

## Passos

1. Abra um terminal (Prompt de Comando / PowerShell no Windows).

2. Confirme que o ADB enxerga o dispositivo:

   ```
   adb devices
   ```

   O dispositivo deve aparecer como `device` (não `unauthorized`).

3. Conceda a permissão:

   ```
   adb shell appops set idv.lzn.screenonauto android:project_media allow
   ```

4. Abra o ScreenOnAuto e inicie o espelhamento — o diálogo de permissão não deve mais aparecer.

## Revogar a permissão

Para restaurar o comportamento padrão (diálogo a cada início):

```
adb shell appops set idv.lzn.screenonauto android:project_media default
```

## Solução de problemas

- **`error: device unauthorized`** — Procure o diálogo "Permitir depuração USB?" no celular e toque em **Permitir**.
- **O diálogo continua aparecendo** — Force o encerramento do ScreenOnAuto e abra de novo. Se persistir, revogue e conceda novamente com os comandos acima.
- **Reinstalou o app (ou trocou entre os canais Play e sideload)** — desinstalar apaga a concessão; execute o comando de novo depois de reinstalar.
- **A permissão some após reiniciar** — Em algumas ROMs (ex.: MIUI/HyperOS), concessões via `appops` não sobrevivem à reinicialização. Execute o comando de novo após cada reinício, ou use ADB por Wi-Fi.
