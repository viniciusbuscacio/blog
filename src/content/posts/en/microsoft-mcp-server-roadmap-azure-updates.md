---
title: "Microsoft just opened the M365 Roadmap and Azure Updates to AI agents"
description: "Microsoft launched a public, free, no-auth MCP Server that gives access to the Microsoft 365 Roadmap and Azure Updates via natural language. Here's how to set it up in 30 seconds."
date: 2026-05-05
tags: ["microsoft", "mcp", "ai", "azure", "microsoft-365", "roadmap"]
image: /images/posts/mrc-mcp-server.png
lang: en
slug: microsoft-mcp-server-roadmap-azure-updates
category: "AI & Tools"
translations:
  pt: microsoft-mcp-server-roadmap-azure-updates
  es: microsoft-mcp-server-roadmap-azure-updates
---

If you follow the Microsoft 365 or Azure ecosystem, you know the drill: open the [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap), filter by product, try to figure out what's coming, cross-reference with [Azure Updates](https://azure.microsoft.com/en-us/updates/)... it works, but it's manual and tedious.

Microsoft just solved this in a way I didn't expect: **an official, public, and free MCP Server** that exposes all this information via MCP protocol — the same protocol that AI coding agents like VS Code, Claude, Cursor, and many others already support natively.

## What is it

The **Microsoft Release Communications (MRC) MCP Server** is a remote MCP server that allows any compatible AI client to search, filter, and query release information from the Microsoft 365 Roadmap and Azure Updates using natural language.

In plain terms: you ask your agent "what Teams features are launching in June?" and it queries directly from the source, without you opening the website.

**Details that matter:**

- ✅ Free
- ✅ No authentication (zero API key, zero license)
- ✅ Open protocol (MCP via Streamable HTTP)
- ✅ Works with any MCP client (not exclusive to any product)

## How to configure

There's a single endpoint:

```
https://www.microsoft.com/releasecommunications/mcp
```

### VS Code / Cursor / any client with mcp.json

Add this to your `mcp.json`:

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

Done. No token, no OAuth, nothing else needed.

### Claude Code

```bash
claude mcp add --transport http mrc-mcp https://www.microsoft.com/releasecommunications/mcp
```

### GitHub Copilot CLI

```bash
/mcp add
# Name: MRC-MCP-Server
# Type: HTTP
# URL: https://www.microsoft.com/releasecommunications/mcp
```

## What it exposes

The MCP Server provides 4 tools:

| Tool | What it does |
|------|--------------|
| `get_recent_roadmaps` | Search Microsoft 365 Roadmap items with filters (product, platform, ring, status, date) |
| `get_roadmap_by_id` | Get full details of a specific Roadmap item by ID |
| `get_recent_azure_updates` | Search Azure Updates with filters (product, category, tags, status) |
| `get_azure_update_by_id` | Get full details of a specific Azure Update |

Each search returns up to 50 results per request, with pagination and title text search support.

## Example queries

This is where it gets interesting. You don't need to craft OData queries by hand — just ask in natural language:

**Microsoft 365 Roadmap:**
- "What Teams features are launching in June?"
- "What changed in Outlook this week?"
- "What's the status of Feature ID 526798?"
- "List Excel features launching on Mac in March"

**Azure Updates:**
- "Which Azure services went GA this quarter?"
- "What Azure retirements are scheduled for this year?"
- "What's new in Azure AI Services?"

## Why this matters

This MCP Server is a clear signal that Microsoft is betting on MCP as an official channel for distributing information to AI agents. This isn't a labs experiment — it's a production endpoint serving real data from the Roadmap and Azure Updates.

For anyone who works with Microsoft 365 or Azure daily (me, for instance), this changes how you keep up with releases:

1. **No need to visit two separate websites** — your agent queries both
2. **Natural language filters** — no memorizing query parameters
3. **Integrated into your workflow** — ask directly from your terminal, IDE, or any AI client
4. **Updated daily** — same source that powers the official websites

And most importantly: **it's free and open**. Any tool that supports MCP can consume it, no vendor lock-in.

## Limitations

- Data refreshes daily (not real-time)
- The endpoint is HTTP-only, won't open in a browser (returns 405 if you try)
- Descriptions are truncated in list searches (to fit within LLM context windows) — use `get_*_by_id` for full details

## Conclusion

Microsoft turned the M365 Roadmap and Azure Updates into an API that any AI agent can consume. No cost, no authentication, no red tape. If you're an IT admin, dev, or cloud architect who needs to track releases, configure this MCP in 30 seconds and start asking instead of browsing.

This is the kind of move that shows MCP is here to stay as the standard protocol for integrating agents with data sources.

**Links:**
- [Official documentation](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/mrc-mcp?view=o365-worldwide)
- [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap)
- [Azure Updates](https://azure.microsoft.com/en-us/updates/)
- [MCP Specification](https://modelcontextprotocol.io/)
