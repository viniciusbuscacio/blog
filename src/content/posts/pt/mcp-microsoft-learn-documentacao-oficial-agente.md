---
title: "MCP Microsoft Learn: documentação oficial no seu agente de IA"
description: "O Microsoft Learn MCP Server conecta seu agente à documentação oficial da Microsoft - busca, artigo completo e exemplos de código. Gratuito e sem autenticação."
date: 2026-07-16
tags: ["microsoft", "mcp", "microsoft-learn", "ai", "ai-agents", "documentacao"]
image: /images/posts/mcp-microsoft-learn.jpg
lang: pt
slug: mcp-microsoft-learn-documentacao-oficial-agente
category: "IA & Ferramentas"
translations:
  en: mcp-microsoft-learn-documentacao-oficial-agente
  es: mcp-microsoft-learn-documentacao-oficial-agente
---

> 🎥 Este post é baseado no vídeo do canal: [MCP Microsoft Learn](https://www.youtube.com/watch?v=2DdmdgImrE8) - parte 2 da série sobre os MCP servers da Microsoft.

Este post é sobre o MCP do Microsoft Learn: a documentação oficial da Microsoft acessível pelo seu agente de IA via MCP.

## Pra que serve

O MCP do Microsoft Learn ajuda a fazer buscas na documentação oficial da Microsoft sobre qualquer tema disponível no Microsoft Learn. Em vez de você entrar no site do Learn (ou pesquisar no Google) e procurar o documento certo, você pede ao seu agente. Ele faz a busca, lê o conteúdo e responde.

E você pode pedir a ele a URL do documento onde ele leu a informação - assim você abre a fonte e confere direto no site do Microsoft Learn.

## O que é MCP

Pra quem não conhece: MCP (Model Context Protocol - https://modelcontextprotocol.io/docs/getting-started/intro) é um protocolo que conecta um agente de IA a uma base de dados, um site ou um sistema. Em vez de o agente tentar responder a partir da sua base de treinamento - que tem data de corte e pode estar desatualizada -, ele consulta a fonte oficial e obtém a resposta correta.

## O que é o Microsoft Learn MCP Server

O Microsoft Learn MCP Server ([Microsoft Learn MCP Server overview | Microsoft Learn](https://learn.microsoft.com/en-us/training/support/mcp)) é um MCP gratuito, público e sem autenticação, que qualquer cliente MCP pode usar. Ele é oficial: é o mesmo serviço de conhecimento que alimenta o Ask Learn e o Copilot for Azure. Está disponível publicamente desde 07/novembro/2025.

É um servidor HTTP na nuvem - não precisa instalar nada. Basta apontar o seu agente para a URL que ele já se conecta.

## Como configurar

O endpoint é um só:

```text
https://learn.microsoft.com/api/mcp
```

A configuração padrão, que funciona na maioria dos clientes MCP:

```json
{
  "servers": {
    "microsoft-docs": {
      "type": "http",
      "url": "https://learn.microsoft.com/api/mcp"
    }
  }
}
```

No meu caso, que estou usando o GitHub Copilot CLI, eu pedi ao próprio agente: "instale este servidor MCP" com a URL. Ele preencheu a configuração sozinho, e depois de um `/restart` o servidor já estava conectado.

Alguns clientes têm plugin pronto:

- Claude Code: `/plugin install microsoft-docs@claude-plugins-official`
- Copilot CLI: `/plugin install microsoftdocs/mcp`

Um detalhe importante: esse endereço é um endpoint MCP. Se você tentar abrir no navegador, vai receber um erro - é esperado, ele só responde via protocolo MCP.

## Exemplo: o fim do Live Events no Teams

Com o servidor conectado, eu perguntei: "me informe o que diz a documentação da Microsoft sobre o fim do Live Events no Microsoft Teams".

O agente consultou o MCP do Learn e trouxe a documentação oficial: o Teams Live Events foi descontinuado em 30 de junho de 2026, e eventos agendados antes dessa data continuam suportados até 28 de fevereiro - com mais detalhes e, o mais interessante, as fontes. Ele busca no site da Microsoft, interpreta e traz a URL do documento. Você abre e confirma.

## As 3 ferramentas

O MCP do Microsoft Learn expõe três ferramentas:

| Tool | O que faz |
|------|-----------|
| `microsoft_docs_search` | Busca na documentação - retorna trechos relevantes com título e URL |
| `microsoft_docs_fetch` | Baixa um artigo completo em markdown a partir da URL |
| `microsoft_code_sample_search` | Busca exemplos de código oficiais, com filtro por linguagem |

Na prática você não precisa decorar nada disso: você conversa com o agente em linguagem natural e ele escolhe a ferramenta certa.

## Mais exemplos

Outras perguntas que testei no vídeo:

- "Busca no Microsoft Learn como criar uma instância do Microsoft Foundry com a CLI" - ele trouxe o passo a passo (criar o recurso Foundry e depois o projeto), os comandos prontos e o link do documento que explica exatamente isso.
- "Procura na documentação oficial como configurar acesso condicional no Entra ID" - ele respondeu que a configuração é feita no centro de administração do Microsoft Entra, com os passos e os documentos de referência (planejar a implementação, exigir MFA para todos).

## Cuidados

- Ele é gratuito, mas possui limites: se você rodar milhares de perguntas, provavelmente em algum momento vai bater em algum teto de utilização.
- É só documentação pública - nada do seu tenant ou do seu perfil passa por ele.
- Eu recomendo sempre pedir a fonte e abrir a documentação oficial pra confirmar que a informação está correta.

## A série "MCPs da Microsoft"

Este é o segundo post de uma pequena série sobre MCP servers da Microsoft. Planejei quatro partes:

1. **MRC MCP (Roadmap M365 + Azure Updates)** - [post](/posts/microsoft-mcp-server-roadmap-azure-updates) / [vídeo](https://www.youtube.com/watch?v=eianFNW_HvY)
2. **MCP Microsoft Learn** - este post
3. **Azure MCP Server** - em breve
4. **Enterprise MCP (Microsoft Graph / Microsoft 365)** - em breve

## Resumo

O MCP do Microsoft Learn conecta o seu agente à documentação oficial da Microsoft. É gratuito, sem autenticação, e tem três ferramentas - mas o ponto principal é que você pergunta em linguagem natural e o agente usa a ferramenta certa. Em vez de buscar no Google ou no Bing, você pergunta direto ao agente e pede a fonte pra conferir.

**Links:**
- [Vídeo deste post no YouTube](https://www.youtube.com/watch?v=2DdmdgImrE8)
- [Documentação oficial do Learn MCP Server](https://learn.microsoft.com/training/support/mcp)
- [Release notes](https://learn.microsoft.com/training/support/mcp-release-notes)
- [Best practices](https://learn.microsoft.com/training/support/mcp-best-practices)
- [Repositório (configuração por cliente)](https://aka.ms/learnmcpdocs/repo)
