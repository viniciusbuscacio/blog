---
title: LLMS.txt - Preparando tu sitio web para agentes de IA
description: Cómo usar el archivo llms.txt para facilitar la consulta de tu sitio web por parte de agentes de IA.
date: 2026-09-25
tags: [ai-agents, llms-txt, markdown]
lang: es
slug: llms-txt
category: IA & Herramientas
translations:
  pt: llms-txt
  en: llms-txt
---

Cuando pensamos en un sitio web, normalmente pensamos en personas navegando por páginas, menús y enlaces, con páginas HTML, JavaScript ejecutándose en el navegador, etc. Pero los agentes de IA también están consultando este contenido para responder preguntas y realizar tareas.

Para facilitar este trabajo de los agentes de IA, una opción sencilla que se está adoptando es el archivo llms.txt.

A pesar de la extensión .txt, utiliza Markdown para presentar el sitio: una descripción del contenido, información importante y enlaces organizados a contenidos relevantes. Es como un “empieza por aquí” para los agentes.

En lugar de depender únicamente de la navegación por las páginas, el agente puede consultar este mapa, identificar las referencias útiles y buscar los detalles necesarios. Cuando está bien organizado y se utiliza de forma efectiva, esto puede reducir la navegación innecesaria y el contenido irrelevante en el contexto.

## ¿Cómo crearlo?

Puedes publicar un archivo en https://tusitio.com/llms.txt — o en una sección, como /docs/llms.txt — con una estructura sencilla:

```markdown
# Mi Empresa
> Desarrollamos soluciones de gestión para pequeñas empresas.

## Producto
- [Descripción general](https://tusitio.com/producto.md): Funcionalidades y público objetivo.
- [Planes](https://tusitio.com/planes.md): Precios y límites de cada plan.

## Documentación
- [Primeros pasos](https://tusitio.com/docs/inicio.md): Guía inicial.
- [API](https://tusitio.com/docs/api.md): Referencia para integraciones.

## Soporte
- [Preguntas frecuentes](https://tusitio.com/faq.md): Dudas comunes.
```

Usa enlaces reales, descripciones claras y mantén el contenido actualizado. Siempre que sea posible, ofrece también versiones en Markdown de las páginas.

## Ejemplos para explorar

Microsoft AI Foundry: https://raw.githubusercontent.com/microsoft/skills/e27a68881a3b8bb906cc5ef00877a9a80f521bf6/docs/llms.txt

Claude Code: https://code.claude.com/docs/llms.txt

OpenAI API Docs: https://developers.openai.com/api/docs/llms.txt


## ¿Qué no hace?

llms.txt es una convención propuesta, no una garantía de adopción universal. Publicarlo no garantiza que tu sitio sea consultado, citado o tenga un mejor posicionamiento en los resultados de búsqueda.

Tampoco sustituye a robots.txt, controla los permisos de acceso ni “entrena a la IA” automáticamente. Su único objetivo es ofrecer un camino más corto y claro hacia la información que le interesa al agente de IA.

No necesitas reconstruir el sitio para empezar. Un pequeño archivo, bien actualizado, ya puede ser un punto de entrada útil para los agentes de IA.

Más sobre la propuesta: https://llmstxt.org/
