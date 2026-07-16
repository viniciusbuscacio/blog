---
title: "Microsoft MRC MCP: Roadmap M365 and Azure Updates in your AI agent"
description: "The MRC MCP Server connects your AI agent to the Microsoft 365 Roadmap and Azure Updates - free, no authentication, updated daily."
date: 2026-07-16
tags: ["microsoft", "mcp", "ai", "azure", "microsoft-365", "roadmap", "ai-agents"]
image: /images/posts/mrc-mcp-video.jpg
lang: en
slug: mrc-mcp-roadmap-m365-azure-updates-agente
category: "AI & Tools"
translations:
  pt: mrc-mcp-roadmap-m365-azure-updates-agente
  es: mrc-mcp-roadmap-m365-azure-updates-agente
---

> 🎥 This post is based on a video from my channel (in Portuguese): [Microsoft MCR MCP - Roadmap M365 + Azure Updates](https://www.youtube.com/watch?v=eianFNW_HvY) - part 1 of the series about Microsoft's MCP servers.

This post is about the MCP Server for Azure Updates and the Microsoft 365 Roadmap: the MRC MCP.

## The problem: following the two sites is manual work

Following the [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap) and [Azure Updates](https://azure.microsoft.com/updates) today is manual work. You need to go to each one, filter by the product you support - Intune, Exchange, Teams - and go looking for the information: what will be discontinued, what is in public preview, what you need to be aware of.

The goal here is to automate that with an AI agent: connect the agent to Microsoft's MCP server and get much easier access to this information.

## What is MCP

For those who don't know it: MCP ([Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)) is a protocol that connects an AI agent to a tool and makes access to it much easier. An example to visualize it: imagine an MCP server in front of a SQL database - you talk in natural language, and the MCP translates that into SQL queries. In our case, we are connecting the agent to these two Microsoft services.

## What is the MRC MCP Server

The server is the **Microsoft Release Communications (MRC) MCP Server**. It is a free server, with no authentication, no license, public - you just point your agent at it.

It connects to the same source that feeds the M365 Roadmap and Azure Updates, updated daily. And it is an HTTP server in the cloud: nothing to install.

## How to configure it

Just point your MCP client (your agent) to the server URL:

```text
https://www.microsoft.com/releasecommunications/mcp
```

The standard configuration, which works in most clients:

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

Depending on the agent, you need to fill in a JSON file like that. In the case of the GitHub Copilot CLI, which I use in the video, it is easier: I asked "install this MCP server" with the URL, it filled in the necessary file by itself, and after a restart the server was connected.

## Usage examples

With the server connected, you can just ask. Some examples from the video:

- **"Tell me the upcoming Intune updates"** - it connected to the server and brought the updates, each one with its roadmap ID. That is useful: you can note the ID and ask it to follow up. (I wasn't specific in the question - I could have asked "for the next three months", for example.)
- **"And from Azure Updates?"** - it brought that, between July and December 2026, Azure Updates listed 11 launches/previews. From there you can pick an announcement and ask for more details.
- **"Tell me more about roadmap ID such-and-such"** - it detailed the item: an expansion of the interoperability between Teams and Google Meet, which was already available in the commercial environment and is now reaching government clouds.
- **"Which Azure resources will be retired in the next three months?"** - it brought 40 retirement notices between July and September. There is always something going on - filtering by what matters to you is what makes this useful.

## The 4 tools

The MCP exposes four tools: one for listing and one for detail on the M365 Roadmap, and one for listing and one for detail on Azure Updates. But you don't need to memorize any of this - you talk in natural language and the agent uses the right tool.

| Tool | What it does |
|------|-----------|
| `get_recent_roadmaps` | Lists Microsoft 365 Roadmap items with filters |
| `get_roadmap_by_id` | Details a Roadmap item by ID |
| `get_recent_azure_updates` | Lists Azure Updates with filters |
| `get_azure_update_by_id` | Details an Azure Update by ID |

## Things to keep in mind

- The MCP is free, but it is subject to the Microsoft API Terms of Use - if you run your agent many times, you may hit a usage ceiling.
- The data is all public. It is not data from your tenant - it is the same information available on the Roadmap and Azure Updates sites.
- Roadmap dates can change. If you saw a feature planned for a given month, it is worth following up to see if it was postponed.

## Summary

The MRC MCP connects the agent to the official sources of the M365 Roadmap and Azure Updates - it is not scraping, it is the MCP protocol directly. It is free, with no authentication, updated daily, and a single endpoint covers both services.

This is the first post of a small series about Microsoft MCP servers that I find useful for anyone who manages Microsoft environments:

1. **MRC MCP (Roadmap M365 + Azure Updates)** - this post
2. **Microsoft Learn MCP** - has its own [video](https://www.youtube.com/watch?v=2DdmdgImrE8) and post
3. **Azure MCP Server** - coming soon
4. **Enterprise MCP (Microsoft Graph / Microsoft 365)** - coming soon

**Links:**
- [Video for this post on YouTube (in Portuguese)](https://www.youtube.com/watch?v=eianFNW_HvY)
- [MRC MCP Server documentation](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/mrc-mcp)
- [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap)
- [Azure Updates](https://azure.microsoft.com/updates)
