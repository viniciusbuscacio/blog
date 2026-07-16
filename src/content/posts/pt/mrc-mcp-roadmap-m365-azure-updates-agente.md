---
title: "Microsoft MRC MCP: Roadmap M365 e Azure Updates no seu agente de IA"
description: "O MRC MCP Server conecta seu agente de IA ao Microsoft 365 Roadmap e ao Azure Updates - gratuito, sem autenticação e atualizado diariamente."
date: 2026-07-16
tags: ["microsoft", "mcp", "ai", "azure", "microsoft-365", "roadmap", "ai-agents"]
image: /images/posts/mrc-mcp-video.jpg
lang: pt
slug: mrc-mcp-roadmap-m365-azure-updates-agente
category: "IA & Ferramentas"
translations:
  en: mrc-mcp-roadmap-m365-azure-updates-agente
  es: mrc-mcp-roadmap-m365-azure-updates-agente
---

> 🎥 Este post é baseado no vídeo do canal: [Microsoft MCR MCP - Roadmap M365 + Azure Updates](https://www.youtube.com/watch?v=eianFNW_HvY) - parte 1 da série sobre os MCP servers da Microsoft.

Este post é sobre o MCP Server do Azure Updates e do Microsoft 365 Roadmap: o MRC MCP.

## O problema: acompanhar os dois sites é manual

Acompanhar o [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap) e o [Azure Updates](https://azure.microsoft.com/updates) hoje é um trabalho manual. Você precisa entrar em cada um, filtrar pelo produto que você dá suporte - Intune, Exchange, Teams - e ir buscando as informações: o que vai ser descontinuado, o que está em public preview, o que você precisa ficar ciente.

O objetivo aqui é automatizar isso com um agente de IA: conectar o agente ao MCP server da Microsoft e ter um acesso muito mais fácil a essas informações.

## O que é MCP

Pra quem não conhece: MCP ([Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)) é um protocolo que conecta um agente de IA a uma ferramenta e torna o acesso a ela muito mais fácil. Um exemplo pra visualizar: imagine um servidor MCP na frente de um banco de dados SQL - você conversa em linguagem natural, e o MCP traduz isso em consultas SQL. No nosso caso, estamos conectando o agente a esses dois serviços da Microsoft.

## O que é o MRC MCP Server

O servidor é o **Microsoft Release Communications (MRC) MCP Server**. É um servidor gratuito, sem autenticação, sem licença, público - basta apontar o seu agente para ele.

Ele conecta na mesma fonte que alimenta o Roadmap M365 e o Azure Updates, atualizada diariamente. E é um servidor HTTP na nuvem: não precisa instalar nada.

## Como configurar

Basta apontar o seu cliente MCP (o seu agente) para a URL do servidor:

```text
https://www.microsoft.com/releasecommunications/mcp
```

A configuração padrão, que funciona na maioria dos clientes:

```json
{
  "servers": {
    "MRC-MCP-Server": {
      "type": "http",
      "url": "https://www.microsoft.com/releasecommunications/mcp"
    }
  }
}
```

Dependendo do agente, você precisa preencher um arquivo JSON como esse. No caso do GitHub Copilot CLI, que uso no vídeo, é mais fácil: eu pedi "instale este servidor MCP" com a URL, ele preencheu o arquivo necessário sozinho, e depois de um restart o servidor estava conectado.

## Exemplos de uso

Com o servidor conectado, dá pra perguntar direto. Alguns exemplos do vídeo:

- **"Informe os próximos updates do Intune"** - ele conectou no servidor e trouxe os updates, cada um com o seu roadmap ID. Isso é útil: você pode anotar o ID e pedir para acompanhar. (Eu não fui específico na pergunta - dava pra pedir "dos próximos três meses", por exemplo.)
- **"E do Azure Updates?"** - ele trouxe que, entre julho e dezembro de 2026, o Azure Updates informava 11 lançamentos/prévias. Dali dá pra escolher um anúncio e pedir mais detalhes.
- **"Me fale mais sobre o roadmap ID tal"** - ele detalhou o item: uma ampliação da interoperabilidade entre Teams e Google Meet, que já estava disponível no ambiente comercial e agora chega às nuvens governamentais.
- **"Quais recursos do Azure serão aposentados nos próximos três meses?"** - ele trouxe 40 avisos de aposentadoria entre julho e setembro. Sempre tem alguma coisa acontecendo - o filtro pelo que interessa a você é o que torna isso útil.

## As 4 ferramentas

O MCP expõe quatro ferramentas: uma de listagem e uma de detalhe para o Roadmap M365, e uma de listagem e uma de detalhe para o Azure Updates. Mas você não precisa decorar nada disso - você conversa em linguagem natural e o agente usa a ferramenta certa.

| Tool | O que faz |
|------|-----------|
| `get_recent_roadmaps` | Lista itens do Microsoft 365 Roadmap com filtros |
| `get_roadmap_by_id` | Detalha um item do Roadmap pelo ID |
| `get_recent_azure_updates` | Lista Azure Updates com filtros |
| `get_azure_update_by_id` | Detalha um Azure Update pelo ID |

## Cuidados

- O MCP é gratuito, mas está sujeito ao Microsoft API Terms of Use - se você rodar o agente muitas vezes, pode bater num teto de utilização.
- Os dados são todos públicos. Não são dados do seu tenant - são as mesmas informações disponíveis no Roadmap e no Azure Updates.
- As datas do roadmap podem mudar. Se você viu uma funcionalidade prevista para um determinado mês, vale acompanhar para ver se não foi adiada.

## Resumo

O MRC MCP conecta o agente às fontes oficiais do Roadmap M365 e do Azure Updates - não é scraping, é protocolo MCP direto. É gratuito, sem autenticação, atualizado diariamente, e um endpoint único cobre os dois serviços.

Este é o primeiro post de uma pequena série sobre MCP servers da Microsoft que eu acho úteis para quem administra ambientes Microsoft:

1. **MRC MCP (Roadmap M365 + Azure Updates)** - este post
2. **MCP Microsoft Learn** - [vídeo](https://www.youtube.com/watch?v=2DdmdgImrE8) e post próprios
3. **Azure MCP Server** - em breve
4. **Enterprise MCP (Microsoft Graph / Microsoft 365)** - em breve

**Links:**
- [Vídeo deste post no YouTube](https://www.youtube.com/watch?v=eianFNW_HvY)
- [Documentação do MRC MCP Server](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/mrc-mcp)
- [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap)
- [Azure Updates](https://azure.microsoft.com/updates)
