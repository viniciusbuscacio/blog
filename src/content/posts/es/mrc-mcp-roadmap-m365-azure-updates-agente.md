---
title: "Microsoft MRC MCP: Roadmap M365 y Azure Updates en tu agente de IA"
description: "El MRC MCP Server conecta tu agente de IA al Microsoft 365 Roadmap y al Azure Updates - gratuito, sin autenticación y actualizado diariamente."
date: 2026-07-16
tags: ["microsoft", "mcp", "ai", "azure", "microsoft-365", "roadmap", "ai-agents"]
image: /images/posts/mrc-mcp-video.jpg
lang: es
slug: mrc-mcp-roadmap-m365-azure-updates-agente
category: "IA & Herramientas"
translations:
  pt: mrc-mcp-roadmap-m365-azure-updates-agente
  en: mrc-mcp-roadmap-m365-azure-updates-agente
---

> 🎥 Este post está basado en un video de mi canal (en portugués): [Microsoft MCR MCP - Roadmap M365 + Azure Updates](https://www.youtube.com/watch?v=eianFNW_HvY) - parte 1 de la serie sobre los MCP servers de Microsoft.

Este post es sobre el MCP Server del Azure Updates y del Microsoft 365 Roadmap: el MRC MCP.

## El problema: seguir los dos sitios es trabajo manual

Seguir el [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap) y el [Azure Updates](https://azure.microsoft.com/updates) hoy es un trabajo manual. Necesitas entrar en cada uno, filtrar por el producto al que das soporte - Intune, Exchange, Teams - e ir buscando la información: qué va a ser descontinuado, qué está en public preview, de qué necesitas estar al tanto.

El objetivo aquí es automatizar eso con un agente de IA: conectar el agente al MCP server de Microsoft y tener un acceso mucho más fácil a esa información.

## Qué es MCP

Para quien no lo conoce: MCP ([Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)) es un protocolo que conecta un agente de IA a una herramienta y hace el acceso a ella mucho más fácil. Un ejemplo para visualizarlo: imagina un servidor MCP delante de una base de datos SQL - hablas en lenguaje natural, y el MCP traduce eso en consultas SQL. En nuestro caso, estamos conectando el agente a estos dos servicios de Microsoft.

## Qué es el MRC MCP Server

El servidor es el **Microsoft Release Communications (MRC) MCP Server**. Es un servidor gratuito, sin autenticación, sin licencia, público - basta apuntar tu agente hacia él.

Se conecta a la misma fuente que alimenta el Roadmap M365 y el Azure Updates, actualizada diariamente. Y es un servidor HTTP en la nube: no hay que instalar nada.

## Cómo configurarlo

Basta apuntar tu cliente MCP (tu agente) a la URL del servidor:

```text
https://www.microsoft.com/releasecommunications/mcp
```

La configuración estándar, que funciona en la mayoría de los clientes:

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

Dependiendo del agente, necesitas llenar un archivo JSON como ese. En el caso del GitHub Copilot CLI, que uso en el video, es más fácil: le pedí "instala este servidor MCP" con la URL, llenó el archivo necesario solo, y después de un restart el servidor estaba conectado.

## Ejemplos de uso

Con el servidor conectado, puedes preguntar directamente. Algunos ejemplos del video:

- **"Informa los próximos updates de Intune"** - se conectó al servidor y trajo los updates, cada uno con su roadmap ID. Eso es útil: puedes anotar el ID y pedirle seguimiento. (No fui específico en la pregunta - podía pedir "de los próximos tres meses", por ejemplo.)
- **"¿Y del Azure Updates?"** - trajo que, entre julio y diciembre de 2026, el Azure Updates informaba 11 lanzamientos/previews. De ahí puedes elegir un anuncio y pedir más detalles.
- **"Cuéntame más sobre el roadmap ID tal"** - detalló el ítem: una ampliación de la interoperabilidad entre Teams y Google Meet, que ya estaba disponible en el ambiente comercial y ahora llega a las nubes gubernamentales.
- **"¿Qué recursos de Azure serán retirados en los próximos tres meses?"** - trajo 40 avisos de retiro entre julio y septiembre. Siempre hay algo pasando - el filtro por lo que te interesa es lo que hace esto útil.

## Las 4 herramientas

El MCP expone cuatro herramientas: una de listado y una de detalle para el Roadmap M365, y una de listado y una de detalle para el Azure Updates. Pero no necesitas memorizar nada de esto - hablas en lenguaje natural y el agente usa la herramienta correcta.

| Tool | Qué hace |
|------|-----------|
| `get_recent_roadmaps` | Lista ítems del Microsoft 365 Roadmap con filtros |
| `get_roadmap_by_id` | Detalla un ítem del Roadmap por ID |
| `get_recent_azure_updates` | Lista Azure Updates con filtros |
| `get_azure_update_by_id` | Detalla un Azure Update por ID |

## Cuidados

- El MCP es gratuito, pero está sujeto al Microsoft API Terms of Use - si ejecutas tu agente muchas veces, puedes llegar a un techo de utilización.
- Los datos son todos públicos. No son datos de tu tenant - son las mismas informaciones disponibles en el Roadmap y en el Azure Updates.
- Las fechas del roadmap pueden cambiar. Si viste una funcionalidad prevista para un determinado mes, vale la pena hacer seguimiento para ver si no fue pospuesta.

## Resumen

El MRC MCP conecta el agente a las fuentes oficiales del Roadmap M365 y del Azure Updates - no es scraping, es protocolo MCP directo. Es gratuito, sin autenticación, actualizado diariamente, y un endpoint único cubre los dos servicios.

Este es el primer post de una pequeña serie sobre MCP servers de Microsoft que considero útiles para quien administra ambientes Microsoft:

1. **MRC MCP (Roadmap M365 + Azure Updates)** - este post
2. **Microsoft Learn MCP** - tiene su propio [video](https://www.youtube.com/watch?v=2DdmdgImrE8) y post
3. **Azure MCP Server** - próximamente
4. **Enterprise MCP (Microsoft Graph / Microsoft 365)** - próximamente

**Links:**
- [Video de este post en YouTube (en portugués)](https://www.youtube.com/watch?v=eianFNW_HvY)
- [Documentación del MRC MCP Server](https://learn.microsoft.com/en-us/microsoft-365/admin/manage/mrc-mcp)
- [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap)
- [Azure Updates](https://azure.microsoft.com/updates)
