---
title: "Chrome / Edge CDP MCP: seu agente de IA controlando o navegador"
description: "Como permitir que um agente de IA controle um navegador real - Chrome ou Edge - via CDP e MCP: navegar, ler páginas, clicar e extrair informações."
date: 2026-07-16
tags: ["cdp", "mcp", "chrome", "edge", "browser-automation", "ai-agents"]
image: /images/posts/chrome-edge-cdp-mcp.jpg
lang: pt
slug: chrome-edge-cdp-mcp-agente-navegador
category: "IA & Ferramentas"
translations:
  en: chrome-edge-cdp-mcp-agente-navegador
  es: chrome-edge-cdp-mcp-agente-navegador
---

> 🎥 Este post é baseado no vídeo do canal: [Google Chrome / Microsoft Edge CDP MCP](https://www.youtube.com/watch?v=F17G9ZfOIxM)

Este post é sobre o Chrome / Edge CDP MCP: uma forma de permitir que o seu agente de IA controle o seu navegador real.

## O que é

É um protocolo relativamente novo - foi lançado em setembro/2025 pelo Google, no Chrome. Basicamente, você abre o navegador com uma porta de controle habilitada, o agente conecta nessa porta e passa a ter controle do navegador: ele toma ações diretas ali dentro.

Foi lançado para o Google Chrome, mas como o Microsoft Edge usa a mesma base por baixo dos panos (Chromium), também funciona no Edge.

O CDP - Chrome DevTools Protocol ([documentação](https://chromedevtools.github.io/devtools-protocol/)) - expõe para o agente uma série de ferramentas que cobrem tudo que você faria no site: navegar, clicar, capturar a tela, preencher formulário.

## A demo do vídeo

No vídeo, eu pergunto ao Copilot: "você consegue conectar o meu navegador Edge via CDP?" (poderia ser o Google Chrome também). Ele respondeu que sim e que podia reiniciar o Edge com a porta do CDP habilitada - como eu tinha aberto o Edge normalmente, o protocolo não vem habilitado por padrão.

Ele reiniciou o Edge duas vezes até conseguir, mas conseguiu. A partir daí:

- Pedi para abrir o site da Wikipedia - o agente controlando o navegador.
- Pedi para buscar o artigo do Flamengo e resumir - ele navegou, leu e resumiu.

Depois que conecta, o acesso é completo: "entre no site, leia essa notícia, traduza pra mim, preencha esse formulário, pesquise tal coisa em tal site". O que você puder imaginar dentro de um navegador.

## Detalhe importante: o bloqueio do perfil padrão (Chrome/Edge 136+)

Desde o Chrome 136 (abril/2025), as flags de remote debugging são ignoradas se o navegador estiver usando o perfil padrão do usuário - e como o Edge é Chromium, vale para o Edge também. Ou seja: o agente não consegue mais conectar no seu perfil normal, com seus logins e cookies.

O motivo é segurança: malwares usavam o remote debugging para roubar cookies e senhas do perfil real. Com um diretório de dados separado, a criptografia usa outra chave e os dados do seu perfil ficam isolados.

Na prática, é fácil resolver: o agente cria um perfil próprio, lançando o navegador com `--user-data-dir` apontando para uma pasta separada:

```text
chrome --remote-debugging-port=9222 --user-data-dir="C:\ChromeDebugProfile"
msedge --remote-debugging-port=9222 --user-data-dir="C:\EdgeDebugProfile"
```

E nesse perfil do agente você pode logar nos sites que quiser dar acesso a ele - se tem algum sistema que você quer que ele leia para você, você loga nele ali, e o agente passa a ter o acesso que você definiu (leitura, escrita - depende do que você precisa fazer no site).

## Pra que eu uso

Essa ferramenta é uma das que eu mais uso no dia a dia. A forma de pensar é: o seu agente vai conectar e navegar na internet com você. Ler e traduzir notícias, preencher formulários, pesquisar em sites específicos, extrair informações de portais que não têm API.

## Resumo

O objetivo do post é esse: mostrar que é possível conectar o agente de IA diretamente no navegador, subindo um perfil separado para ele. No primeiro momento pode precisar de uma ou duas tentativas de reinício do navegador, mas depois que conecta, o agente tem controle completo - e os usos são muitos.

**Links:**
- [Vídeo deste post no YouTube](https://www.youtube.com/watch?v=F17G9ZfOIxM)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Mudança no Chrome 136+ (anúncio oficial)](https://developer.chrome.com/blog/remote-debugging-port)
- [Chrome Remote Debugging](https://developer.chrome.com/docs/devtools/remote-debugging)
- [Microsoft Edge DevTools Protocol](https://learn.microsoft.com/en-us/microsoft-edge/devtools/protocol/)
