---
title: "Microsoft Learn MCP: official documentation in your AI agent"
description: "The Microsoft Learn MCP Server connects your agent to Microsoft's official documentation - search, full articles and code samples. Free and with no authentication."
date: 2026-07-16
tags: ["microsoft", "mcp", "microsoft-learn", "ai", "ai-agents", "documentacao"]
image: /images/posts/mcp-microsoft-learn.jpg
lang: en
slug: mcp-microsoft-learn-documentacao-oficial-agente
category: "AI & Tools"
translations:
  pt: mcp-microsoft-learn-documentacao-oficial-agente
  es: mcp-microsoft-learn-documentacao-oficial-agente
---

> 🎥 This post is based on a video from my channel (in Portuguese): [Microsoft Learn MCP](https://www.youtube.com/watch?v=2DdmdgImrE8) - part 2 of the series about Microsoft's MCP servers.

This post is about the Microsoft Learn MCP: Microsoft's official documentation accessible to your AI agent via MCP.

## What it is for

The Microsoft Learn MCP helps you search Microsoft's official documentation on any topic available on Microsoft Learn. Instead of going to the Learn site (or searching on Google) and hunting for the right document, you ask your agent. It does the search, reads the content and answers.

And you can ask it for the URL of the document where it read the information - so you open the source and check it directly on the Microsoft Learn site.

## What is MCP

For those who don't know it: MCP ([Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)) is a protocol that connects an AI agent to a database, a site or a system. Instead of the agent trying to answer from its training data - which has a cutoff date and may be outdated -, it queries the official source and gets the correct answer.

## What is the Microsoft Learn MCP Server

The Microsoft Learn MCP Server ([Microsoft Learn MCP Server overview | Microsoft Learn](https://learn.microsoft.com/en-us/training/support/mcp)) is a free, public MCP with no authentication, which any MCP client can use. It is official: it is the same knowledge service that feeds Ask Learn and Copilot for Azure. It has been publicly available since November 7, 2025.

It is an HTTP server in the cloud - nothing to install. Just point your agent to the URL and it connects.

## How to configure it

The endpoint is a single one:

```text
https://learn.microsoft.com/api/mcp
```

The standard configuration, which works in most MCP clients:

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

In my case, using the GitHub Copilot CLI, I asked the agent itself: "install this MCP server" with the URL. It filled in the configuration by itself, and after a `/restart` the server was already connected.

Some clients have a ready-made plugin:

- Claude Code: `/plugin install microsoft-docs@claude-plugins-official`
- Copilot CLI: `/plugin install microsoftdocs/mcp`

One important detail: this address is an MCP endpoint. If you try to open it in the browser, you will get an error - that is expected, it only responds via the MCP protocol.

## Example: the end of Live Events in Teams

With the server connected, I asked: "tell me what Microsoft's documentation says about the end of Live Events in Microsoft Teams".

The agent queried the Learn MCP and brought the official documentation: Teams Live Events was discontinued on June 30, 2026, and events scheduled before that date remain supported until February 28 - with more details and, most interestingly, the sources. It searches the Microsoft site, interprets it and brings the document URL. You open it and confirm.

## The 3 tools

The Microsoft Learn MCP exposes three tools:

| Tool | What it does |
|------|-----------|
| `microsoft_docs_search` | Searches the documentation - returns relevant excerpts with title and URL |
| `microsoft_docs_fetch` | Downloads a full article in markdown from the URL |
| `microsoft_code_sample_search` | Searches official code samples, with language filter |

In practice you don't need to memorize any of this: you talk to the agent in natural language and it picks the right tool.

## More examples

Other questions I tested in the video:

- "Search Microsoft Learn for how to create a Microsoft Foundry instance with the CLI" - it brought the step by step (create the Foundry resource and then the project), the ready-to-use commands and the link to the document that explains exactly that.
- "Find in the official documentation how to configure conditional access in Entra ID" - it answered that the configuration is done in the Microsoft Entra admin center, with the steps and the reference documents (plan the deployment, require MFA for all).

## Things to keep in mind

- It is free, but it has limits: if you run thousands of questions, at some point you will probably hit some usage ceiling.
- It is public documentation only - nothing from your tenant or your profile goes through it.
- I recommend always asking for the source and opening the official documentation to confirm the information is correct.

## The "Microsoft MCP servers" series

This is the second post of a small series about Microsoft MCP servers. I planned four parts:

1. **MRC MCP (Roadmap M365 + Azure Updates)** - [post](/en/mrc-mcp-roadmap-m365-azure-updates-agente) / [video](https://www.youtube.com/watch?v=eianFNW_HvY)
2. **Microsoft Learn MCP** - this post
3. **Azure MCP Server** - coming soon
4. **Enterprise MCP (Microsoft Graph / Microsoft 365)** - coming soon

## Summary

The Microsoft Learn MCP connects your agent to Microsoft's official documentation. It is free, with no authentication, and has three tools - but the main point is that you ask in natural language and the agent uses the right tool. Instead of searching on Google or Bing, you ask the agent directly and request the source to double-check.

**Links:**
- [Video for this post on YouTube (in Portuguese)](https://www.youtube.com/watch?v=2DdmdgImrE8)
- [Official Learn MCP Server documentation](https://learn.microsoft.com/training/support/mcp)
- [Release notes](https://learn.microsoft.com/training/support/mcp-release-notes)
- [Best practices](https://learn.microsoft.com/training/support/mcp-best-practices)
- [Repository (per-client configuration)](https://aka.ms/learnmcpdocs/repo)
