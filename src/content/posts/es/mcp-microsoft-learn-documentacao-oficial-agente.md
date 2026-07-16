---
title: "Microsoft Learn MCP: documentación oficial en tu agente de IA"
description: "El Microsoft Learn MCP Server conecta tu agente a la documentación oficial de Microsoft - búsqueda, artículos completos y ejemplos de código. Gratuito y sin autenticación."
date: 2026-07-16
tags: ["microsoft", "mcp", "microsoft-learn", "ai", "ai-agents", "documentacao"]
image: /images/posts/mcp-microsoft-learn.jpg
lang: es
slug: mcp-microsoft-learn-documentacao-oficial-agente
category: "IA & Herramientas"
translations:
  pt: mcp-microsoft-learn-documentacao-oficial-agente
  en: mcp-microsoft-learn-documentacao-oficial-agente
---

> 🎥 Este post está basado en un video de mi canal (en portugués): [Microsoft Learn MCP](https://www.youtube.com/watch?v=2DdmdgImrE8) - parte 2 de la serie sobre los MCP servers de Microsoft.

Este post es sobre el MCP del Microsoft Learn: la documentación oficial de Microsoft accesible para tu agente de IA vía MCP.

## Para qué sirve

El MCP del Microsoft Learn ayuda a hacer búsquedas en la documentación oficial de Microsoft sobre cualquier tema disponible en Microsoft Learn. En vez de entrar al sitio de Learn (o buscar en Google) y buscar el documento correcto, le pides a tu agente. Él hace la búsqueda, lee el contenido y responde.

Y puedes pedirle la URL del documento donde leyó la información - así abres la fuente y verificas directo en el sitio de Microsoft Learn.

## Qué es MCP

Para quien no lo conoce: MCP ([Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)) es un protocolo que conecta un agente de IA a una base de datos, un sitio o un sistema. En vez de que el agente intente responder desde su base de entrenamiento - que tiene fecha de corte y puede estar desactualizada -, consulta la fuente oficial y obtiene la respuesta correcta.

## Qué es el Microsoft Learn MCP Server

El Microsoft Learn MCP Server ([Microsoft Learn MCP Server overview | Microsoft Learn](https://learn.microsoft.com/en-us/training/support/mcp)) es un MCP gratuito, público y sin autenticación, que cualquier cliente MCP puede usar. Es oficial: es el mismo servicio de conocimiento que alimenta el Ask Learn y el Copilot for Azure. Está disponible públicamente desde el 07/noviembre/2025.

Es un servidor HTTP en la nube - no hay que instalar nada. Basta apuntar tu agente a la URL y ya se conecta.

## Cómo configurarlo

El endpoint es uno solo:

```text
https://learn.microsoft.com/api/mcp
```

La configuración estándar, que funciona en la mayoría de los clientes MCP:

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

En mi caso, que estoy usando el GitHub Copilot CLI, le pedí al propio agente: "instala este servidor MCP" con la URL. Llenó la configuración solo, y después de un `/restart` el servidor ya estaba conectado.

Algunos clientes tienen plugin listo:

- Claude Code: `/plugin install microsoft-docs@claude-plugins-official`
- Copilot CLI: `/plugin install microsoftdocs/mcp`

Un detalle importante: esta dirección es un endpoint MCP. Si intentas abrirla en el navegador, vas a recibir un error - es esperado, solo responde vía protocolo MCP.

## Ejemplo: el fin de Live Events en Teams

Con el servidor conectado, pregunté: "infórmame qué dice la documentación de Microsoft sobre el fin de Live Events en Microsoft Teams".

El agente consultó el MCP del Learn y trajo la documentación oficial: el Teams Live Events fue descontinuado el 30 de junio de 2026, y los eventos agendados antes de esa fecha siguen soportados hasta el 28 de febrero - con más detalles y, lo más interesante, las fuentes. Busca en el sitio de Microsoft, interpreta y trae la URL del documento. Lo abres y confirmas.

## Las 3 herramientas

El MCP del Microsoft Learn expone tres herramientas:

| Tool | Qué hace |
|------|-----------|
| `microsoft_docs_search` | Busca en la documentación - retorna fragmentos relevantes con título y URL |
| `microsoft_docs_fetch` | Descarga un artículo completo en markdown a partir de la URL |
| `microsoft_code_sample_search` | Busca ejemplos de código oficiales, con filtro por lenguaje |

En la práctica no necesitas memorizar nada de esto: hablas con el agente en lenguaje natural y él elige la herramienta correcta.

## Más ejemplos

Otras preguntas que probé en el video:

- "Busca en Microsoft Learn cómo crear una instancia del Microsoft Foundry con la CLI" - trajo el paso a paso (crear el recurso Foundry y después el proyecto), los comandos listos y el link del documento que explica exactamente eso.
- "Busca en la documentación oficial cómo configurar acceso condicional en Entra ID" - respondió que la configuración se hace en el centro de administración de Microsoft Entra, con los pasos y los documentos de referencia (planificar la implementación, exigir MFA para todos).

## Cuidados

- Es gratuito, pero tiene límites: si ejecutas miles de preguntas, probablemente en algún momento vas a llegar a algún techo de utilización.
- Es solo documentación pública - nada de tu tenant o de tu perfil pasa por él.
- Recomiendo siempre pedir la fuente y abrir la documentación oficial para confirmar que la información está correcta.

## La serie "MCP servers de Microsoft"

Este es el segundo post de una pequeña serie sobre MCP servers de Microsoft. Planifiqué cuatro partes:

1. **MRC MCP (Roadmap M365 + Azure Updates)** - [post](/es/mrc-mcp-roadmap-m365-azure-updates-agente) / [video](https://www.youtube.com/watch?v=eianFNW_HvY)
2. **Microsoft Learn MCP** - este post
3. **Azure MCP Server** - próximamente
4. **Enterprise MCP (Microsoft Graph / Microsoft 365)** - próximamente

## Resumen

El MCP del Microsoft Learn conecta tu agente a la documentación oficial de Microsoft. Es gratuito, sin autenticación, y tiene tres herramientas - pero el punto principal es que preguntas en lenguaje natural y el agente usa la herramienta correcta. En vez de buscar en Google o Bing, le preguntas directo al agente y pides la fuente para verificar.

**Links:**
- [Video de este post en YouTube (en portugués)](https://www.youtube.com/watch?v=2DdmdgImrE8)
- [Documentación oficial del Learn MCP Server](https://learn.microsoft.com/training/support/mcp)
- [Release notes](https://learn.microsoft.com/training/support/mcp-release-notes)
- [Best practices](https://learn.microsoft.com/training/support/mcp-best-practices)
- [Repositorio (configuración por cliente)](https://aka.ms/learnmcpdocs/repo)
