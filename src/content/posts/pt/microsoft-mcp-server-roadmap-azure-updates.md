---
title: "A Microsoft abriu o roadmap do M365 e Azure Updates pra agentes de IA"
description: "A Microsoft lançou um MCP Server público, gratuito e sem autenticação que dá acesso ao Microsoft 365 Roadmap e Azure Updates via linguagem natural. Veja como configurar em 30 segundos."
date: 2026-05-05
tags: ["microsoft", "mcp", "ai", "azure", "microsoft-365", "roadmap"]
image: /images/posts/mrc-mcp-server.png
lang: pt
slug: microsoft-mcp-server-roadmap-azure-updates
category: "IA & Ferramentas"
translations:
  en: microsoft-mcp-server-roadmap-azure-updates
  es: microsoft-mcp-server-roadmap-azure-updates
---

Se você acompanha o ecossistema Microsoft 365 ou Azure, já conhece a rotina: abrir o [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap), filtrar por produto, tentar entender o que está rolando pra dentro, cruzar com o [Azure Updates](https://azure.microsoft.com/en-us/updates/)... funciona, mas é manual e chato.

A Microsoft acabou de resolver isso de um jeito que eu não esperava: **um MCP Server oficial, público e gratuito** que expõe toda essa informação via protocolo MCP — o mesmo protocolo que AI coding agents como VS Code, Claude, Cursor e tantos outros já suportam nativamente.

## O que é

O **Microsoft Release Communications (MRC) MCP Server** é um servidor MCP remoto que permite qualquer AI client compatível buscar, filtrar e consultar informações de releases do Microsoft 365 Roadmap e Azure Updates usando linguagem natural.

Traduzindo: você pergunta pro seu agente "quais features do Teams estão lançando em junho?" e ele consulta direto na fonte, sem você abrir o site.

**Detalhes que importam:**

- ✅ Gratuito
- ✅ Sem autenticação (zero API key, zero licença)
- ✅ Protocolo aberto (MCP via Streamable HTTP)
- ✅ Funciona com qualquer MCP client (não é exclusivo de nenhum produto)

## Como configurar

O endpoint é um só:

```
https://www.microsoft.com/releasecommunications/mcp
```

### VS Code / Cursor / qualquer client com mcp.json

Adicione isso no seu `mcp.json`:

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

Pronto. Não precisa de token, não precisa de OAuth, não precisa de nada.

### Claude Code

```bash
claude mcp add --transport http mrc-mcp https://www.microsoft.com/releasecommunications/mcp
```

### GitHub Copilot CLI

```bash
/mcp add
# Nome: MRC-MCP-Server
# Tipo: HTTP
# URL: https://www.microsoft.com/releasecommunications/mcp
```

## O que ele expõe

O MCP Server oferece 4 tools:

| Tool | O que faz |
|------|-----------|
| `get_recent_roadmaps` | Busca items do Microsoft 365 Roadmap com filtros (produto, plataforma, ring, status, data) |
| `get_roadmap_by_id` | Detalha um item específico do Roadmap pelo ID |
| `get_recent_azure_updates` | Busca Azure Updates com filtros (produto, categoria, tags, status) |
| `get_azure_update_by_id` | Detalha um Azure Update específico |

Cada busca retorna até 50 resultados por request, com suporte a paginação e busca por texto no título.

## Exemplos de perguntas

Aqui é onde fica interessante. Você não precisa montar queries OData na mão — basta perguntar em linguagem natural:

**Microsoft 365 Roadmap:**
- "Quais features do Teams estão lançando em junho?"
- "O que mudou no Outlook essa semana?"
- "Qual o status da Feature ID 526798?"
- "Lista features do Excel pra Mac lançando em março"

**Azure Updates:**
- "Quais serviços Azure ficaram GA nesse trimestre?"
- "Quais Azure retirements estão agendados pra esse ano?"
- "O que há de novo em Azure AI Services?"

## Por que isso importa

Esse MCP Server é um sinal claro de que a Microsoft está apostando no protocolo MCP como canal oficial de distribuição de informação pra agentes de IA. Não é um experimento de labs — é um endpoint de produção que serve dados reais do Roadmap e Azure Updates.

Pra quem trabalha com Microsoft 365 ou Azure no dia a dia (eu, por exemplo), isso muda a dinâmica de como se acompanha releases:

1. **Não precisa mais visitar dois sites separados** — seu agente consulta ambos
2. **Filtros via linguagem natural** — sem decorar parâmetros de query
3. **Integrado ao fluxo de trabalho** — pergunta direto no terminal, IDE, ou qualquer AI client
4. **Atualizado diariamente** — mesma fonte que alimenta os sites oficiais

E o mais importante: **é gratuito e aberto**. Qualquer ferramenta que suporte MCP pode consumir, sem vendor lock-in.

## Limitações

- Os dados são refresh diário (não real-time)
- O endpoint é só HTTP, não abre no browser (retorna 405 se você tentar acessar direto)
- Descrições vêm truncadas nas buscas por lista (pra caber na context window do LLM) — use o `get_*_by_id` pra detalhes completos

## Conclusão

A Microsoft transformou o Roadmap do M365 e o Azure Updates numa API que qualquer agente de IA pode consumir. Sem custo, sem autenticação, sem burocracia. Se você é IT admin, dev, ou arquiteto cloud que precisa acompanhar releases, configure esse MCP em 30 segundos e passe a perguntar em vez de navegar.

É esse tipo de movimentação que mostra que MCP veio pra ficar como protocolo padrão de integração entre agentes e fontes de dados.

**Links:**
- [Documentação oficial](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/mrc-mcp?view=o365-worldwide)
- [Microsoft 365 Roadmap](https://www.microsoft.com/en-us/microsoft-365/roadmap)
- [Azure Updates](https://azure.microsoft.com/en-us/updates/)
- [Especificação MCP](https://modelcontextprotocol.io/)
