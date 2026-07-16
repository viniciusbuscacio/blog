---
title: "pi agent: instalação e primeiros passos"
description: "O pi é um agente de IA minimalista e extensível para o terminal. Como instalar no Windows, conectar um provider e dar os primeiros passos."
date: 2026-07-16
tags: ["pi-agent", "ai-agents", "cli", "terminal", "open-source", "ia"]
image: /images/posts/pi-agent.jpg
lang: pt
slug: pi-agent-instalacao-primeiros-passos
category: "IA & Ferramentas"
translations:
  en: pi-agent-instalacao-primeiros-passos
  es: pi-agent-instalacao-primeiros-passos
---

> 🎥 Este post é baseado no vídeo do canal: [Pi Agent - Instalação e primeiros passos](https://www.youtube.com/watch?v=VwV2zCn5C60)

Este post é sobre o pi agent: instalação e primeiros passos.

## O que é o pi agent

O pi é um agente de IA no seu terminal. Eu fiz um [post anterior sobre o GitHub Copilot CLI](https://www.youtube.com/watch?v=hZhsirwfWY8), e ele é parecido - a diferença é que o pi tem uma filosofia um pouco diferente, e por isso eu até uso ele mais para fins pessoais.

Ele é um agente **minimalista**. O que quer dizer isso? Ele não vem com quase ferramenta nenhuma - só o mínimo possível para iniciar. Isso pode parecer uma desvantagem, mas ao mesmo tempo permite uma flexibilidade muito grande: tudo no pi é editável. O que você não gostar, você pode pedir para ele alterar o próprio comportamento. É uma flexibilidade que eu não vi em nenhum outro agente de IA.

Ele também é **extensível**. Existem sites onde você baixa bibliotecas e extensões, mas o mais interessante é pedir a extensão diretamente a ele. Um exemplo claro: o pi vem sem suporte a MCP. Se você usa agentes de IA, MCP é praticamente essencial - e a solução é simplesmente falar com ele: "cria uma extensão para MCP". E ele cria.

Um contexto sobre a fama dele: o pi ficou conhecido meio que na esteira do OpenClaw. Depois que o OpenClaw fez o sucesso que fez, foi descoberto que por trás dele roda o pi agent. Ele não ficou tão famoso quanto o OpenClaw, mas por baixo dos panos é o pi que está lá.

## O que você precisa

- **Node.js e npm** - o pi é um agente em TypeScript, distribuído via npm.
- **Um provider de IA** - pode ser OpenAI, GitHub Copilot, OpenRouter, Gemini, entre outros. Funciona com subscription e também com API keys.
- **Um bash, no caso do Windows** - o pi roda no terminal (Bash ou PowerShell), mas no Windows ele precisa de um bash: Git Bash ou WSL. Se você tem o [Git para Windows](https://git-scm.com/download/win) instalado, o Git Bash já resolve.

## Instalação

No Linux ou Mac, a instalação é direto via npm:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

No Windows, o caminho que mostro no vídeo é: primeiro instalar o Git (que traz o Git Bash):

```powershell
winget install Git.Git
```

E depois rodar o script de instalação do pi no PowerShell. Durante a instalação, ele avisou que precisava do Node e ofereceu instalar - aceitei, e na sequência ele pediu a confirmação da instalação do pi.

Assim como no Copilot CLI, o comando `pi` não fica disponível no terminal onde você acabou de instalar - abra um novo terminal (ou rode o comando que o instalador indica) e digite:

```bash
pi
```

Na primeira execução ele demora um pouco, porque baixa alguns pacotes adicionais.

## Conectando um provider

Ao iniciar, o pi avisa que você está sem nenhum modelo. O comando é o `/login`: ele pergunta se você quer conectar via subscription ou API key.

No vídeo eu usei a minha assinatura do GitHub Copilot (eu também tenho uma do ChatGPT, mas os créditos do mês já tinham acabado). O fluxo é parecido com o do Copilot: ele abre a página web, você ativa o dispositivo, autoriza, e pronto. Depois, no `/model`, aparecem os modelos que ele reconheceu na assinatura - escolhi o Opus 4.8, mandei uma mensagem de teste e estava funcionando.

## Comandos principais

O pi tem comandos parecidos com os do GitHub Copilot CLI:

| Comando | O que faz |
|---------|-----------|
| `/` | Lista todos os comandos |
| `/login` | Conecta um provider de IA |
| `/model` | Escolhe o modelo |
| `/new` | Inicia uma nova conversa |
| `/compact` | Resume a conversa para liberar contexto |
| `/settings` | Configurações |

Um detalhe interessante: o pi é um pouco mais esperto com contexto - ele consegue detectar que o contexto encheu e geralmente compacta sozinho. Se não conseguir, você usa o `/compact`. No `/settings` tem opções como o Auto Compact (que vem habilitado), resize de imagens, bloqueio de imagens, entre outras.

## Resumo

Este post é curto de propósito, assim como o do Copilot CLI: a ideia é servir de referência de instalação para conteúdos mais avançados que vêm por aí. O site do pi resume bem a proposta - existem muitos agent harnesses, mas esse é *seu*, de tão personalizável. De todos os agentes que experimentei, é um dos mais interessantes: muito produtivo, rápido, leve e flexível.

**Links:**
- [Vídeo deste post no YouTube](https://www.youtube.com/watch?v=VwV2zCn5C60)
- [pi.dev](https://pi.dev)
- [Pacote no npm](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
- [Repositório no GitHub](https://github.com/earendil-works/pi)
- [Git para Windows (Git Bash)](https://git-scm.com/download/win)
