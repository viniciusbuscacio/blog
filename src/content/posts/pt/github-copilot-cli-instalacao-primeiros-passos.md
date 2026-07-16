---
title: "GitHub Copilot CLI: instalação e primeiros passos"
description: "O GitHub Copilot CLI é um agente de IA que roda no terminal. Como instalar, fazer o primeiro login, os slash commands principais e os três modos de execução."
date: 2026-07-16
tags: ["github-copilot", "ai-agents", "cli", "terminal", "ia"]
image: /images/posts/github-copilot-cli.jpg
lang: pt
slug: github-copilot-cli-instalacao-primeiros-passos
category: "IA & Ferramentas"
translations:
  en: github-copilot-cli-instalacao-primeiros-passos
  es: github-copilot-cli-instalacao-primeiros-passos
---

> 🎥 Este post é baseado no vídeo do canal: [GitHub Copilot CLI - Instalação e primeiros passos](https://www.youtube.com/watch?v=hZhsirwfWY8)

Este post é sobre o GitHub Copilot CLI: instalação e primeiros passos.

## O que é o GitHub Copilot CLI

O GitHub Copilot CLI é um agente de IA que você roda no terminal. A Microsoft possui várias versões do Copilot - pessoalmente, essa é a minha preferida. Você abre o terminal (PowerShell, Bash), inicia o Copilot e conversa com ele por ali.

Ele não é a extensão do VS Code. Você até pode rodar dentro do VS Code, mas aqui eu rodo direto no terminal. E ele é um agente completo: você conversa em linguagem natural, ele lê arquivos, executa código, cria scripts, conecta em servidores MCP, entre outras tarefas.

A ideia deste post (e do vídeo) é servir como base para outros conteúdos: em posts futuros sobre MCP e automação, vou referenciar este aqui para quem ainda não tem o Copilot CLI instalado.

Um detalhe: eu uso o Copilot CLI mais no trabalho. Para uso pessoal, uso outro agente, o pi agent - que tem [vídeo](https://www.youtube.com/watch?v=VwV2zCn5C60) e post próprios.

## Antes de começar

Você precisa de uma conta no GitHub. O GitHub Copilot tem planos gratuitos e pagos: por exemplo, existia um plano de 10 dólares por mês. No momento em que gravei o vídeo, a criação de novas assinaturas pagas estava suspensa (pausada desde 20/abril/2026), então não dá para criar uma conta paga nova, mas talvez isso já esteja liberado quando você estiver lendo. Outra mudança recente: desde 01/junho/2026 o billing é baseado em uso (AI Credits), e o fallback gratuito de modelo foi removido. Vale conferir a [página de planos](https://github.com/features/copilot/plans) antes de decidir - essa parte muda rápido.

Um ponto interessante da conta: com ela você pode usar vários modelos diferentes - os modelos GPT, o Opus da Anthropic, entre outros.

## Onde rodar

No terminal, seja no Mac, Linux ou Windows. Qualquer terminal funciona bem.

## Instalação

A instalação é feita via linha de comando:

```bash
# Windows
winget install GitHub.Copilot

# macOS
brew install copilot-cli

# Qualquer plataforma com Node.js
npm install -g @github/copilot
```

Um detalhe: se você instalar e tentar rodar no mesmo terminal, ele ainda não vai reconhecer o comando. Feche o terminal, abra um novo e digite:

```bash
copilot
```

## Primeiro login

Como é o primeiro uso, o primeiro comando a rodar é o `/login`, para autenticar na sua conta do GitHub. Ele abre o navegador, você digita o código que aparece no terminal, autoriza, e pronto - autenticado.

## Comandos principais

O Copilot tem vários comandos com `/`. Estes são os que eu mais uso no início:

| Comando | O que faz |
|---------|-----------|
| `/` | Lista todos os comandos disponíveis |
| `/new` | Inicia uma nova conversa - útil quando você está há muito tempo na mesma sessão e o contexto já encheu |
| `/model` | Troca o modelo de IA |
| `/allow-all` | Habilita todas as permissões, sem pedir confirmação a cada comando (o chamado "YOLO mode") |
| `/compact` | Resume a conversa atual para liberar contexto, quando você quer continuar a mesma sessão mas ela já está grande |

Na demo do vídeo, uso o `/model` para trocar de modelo - na hora da gravação, troquei do GPT-5.5 para o GPT-5.6, que tinha acabado de aparecer na lista.

## Os três modos de execução

O Copilot tem três modos de execução, e você alterna entre eles com **Shift+Tab**:

- **Normal** - o modo padrão: ele executa as tarefas pedindo confirmação quando necessário.
- **Plan Mode** - ele não faz nenhuma alteração de arquivo, código ou script; só discute com você o planejamento. É útil quando você sabe que, se mandar direto no primeiro prompt, a chance de sair errado é grande - você discute o plano com calma e só depois tira do Plan Mode.
- **Autopilot** - uma mistura dos dois: você planeja as alterações com ele e, quando disser "pode implementar", ele implementa.

Apertando Shift+Tab novamente, você volta ao modo normal.

## Resumo

O Copilot CLI é um agente completo no terminal: instalação de um comando, `/login` na conta GitHub que você já tem, e pronto. Este post é curto de propósito - a ideia é ser a referência de instalação para os próximos conteúdos, como a conexão com servidores MCP.

**Links:**
- [Vídeo deste post no YouTube](https://www.youtube.com/watch?v=hZhsirwfWY8)
- [GitHub Copilot CLI](https://github.com/features/copilot/cli)
- [Instalação (docs oficiais)](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)
- [Guia de uso](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
- [Repositório no GitHub](https://github.com/github/copilot-cli)
- [Planos e preços](https://github.com/features/copilot/plans)
