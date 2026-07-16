---
title: "GitHub Copilot CLI: instalación y primeros pasos"
description: "El GitHub Copilot CLI es un agente de IA que corre en la terminal. Cómo instalarlo, hacer el primer login, los slash commands principales y los tres modos de ejecución."
date: 2026-07-16
tags: ["github-copilot", "ai-agents", "cli", "terminal", "ia"]
image: /images/posts/github-copilot-cli.jpg
lang: es
slug: github-copilot-cli-instalacao-primeiros-passos
category: "IA & Herramientas"
translations:
  pt: github-copilot-cli-instalacao-primeiros-passos
  en: github-copilot-cli-instalacao-primeiros-passos
---

> 🎥 Este post está basado en un video de mi canal (en portugués): [GitHub Copilot CLI - Instalação e primeiros passos](https://www.youtube.com/watch?v=hZhsirwfWY8)

Este post es sobre el GitHub Copilot CLI: instalación y primeros pasos.

## Qué es el GitHub Copilot CLI

El GitHub Copilot CLI es un agente de IA que corre en la terminal. Microsoft tiene varias versiones de Copilot - personalmente, esta es mi favorita. Abres la terminal (PowerShell, Bash), inicias Copilot y hablas con él ahí mismo.

No es la extensión de VS Code. Puedes correrlo dentro de VS Code, pero aquí lo corro directo en la terminal. Y es un agente completo: hablas con él en lenguaje natural, lee archivos, ejecuta código, crea scripts, se conecta a servidores MCP, entre otras tareas.

La idea de este post (y del video) es servir como base para otros contenidos: en posts futuros sobre MCP y automatización, voy a referenciar este para quien todavía no tenga el Copilot CLI instalado.

Un detalle: yo uso el Copilot CLI más en el trabajo. Para uso personal, uso otro agente, el pi agent - que tiene su propio [video](https://www.youtube.com/watch?v=VwV2zCn5C60) y post.

## Antes de empezar

Necesitas una cuenta de GitHub. GitHub Copilot tiene planes gratuitos y de pago: por ejemplo, existía un plan de 10 dólares por mes. En el momento en que grabé el video, la creación de nuevas suscripciones de pago estaba suspendida (pausada desde el 20/abril/2026), así que no se puede crear una cuenta de pago nueva, pero quizás eso ya esté liberado cuando estés leyendo. Otro cambio reciente: desde el 01/junio/2026 el billing es basado en uso (AI Credits), y el fallback gratuito de modelo fue removido. Vale la pena revisar la [página de planes](https://github.com/features/copilot/plans) antes de decidir - esta parte cambia rápido.

Un punto interesante de la cuenta: con ella puedes usar varios modelos diferentes - los modelos GPT, el Opus de Anthropic, entre otros.

## Dónde correrlo

En la terminal, ya sea en Mac, Linux o Windows. Cualquier terminal funciona bien.

## Instalación

La instalación se hace vía línea de comandos:

```bash
# Windows
winget install GitHub.Copilot

# macOS
brew install copilot-cli

# Cualquier plataforma con Node.js
npm install -g @github/copilot
```

Un detalle: si lo instalas e intentas correrlo en la misma terminal, todavía no va a reconocer el comando. Cierra la terminal, abre una nueva y escribe:

```bash
copilot
```

## Primer login

Como es el primer uso, el primer comando a ejecutar es `/login`, para autenticarte en tu cuenta de GitHub. Abre el navegador, escribes el código que aparece en la terminal, autorizas, y listo - autenticado.

## Comandos principales

Copilot tiene varios comandos con `/`. Estos son los que más uso al principio:

| Comando | Qué hace |
|---------|-----------|
| `/` | Lista todos los comandos disponibles |
| `/new` | Inicia una nueva conversación - útil cuando llevas mucho tiempo en la misma sesión y el contexto ya se llenó |
| `/model` | Cambia el modelo de IA |
| `/allow-all` | Habilita todos los permisos, sin pedir confirmación en cada comando (el llamado "YOLO mode") |
| `/compact` | Resume la conversación actual para liberar contexto, cuando quieres continuar la misma sesión pero ya está muy grande |

En la demo del video, uso el `/model` para cambiar de modelo - a la hora de la grabación, cambié del GPT-5.5 al GPT-5.6, que acababa de aparecer en la lista.

## Los tres modos de ejecución

Copilot tiene tres modos de ejecución, y alternas entre ellos con **Shift+Tab**:

- **Normal** - el modo por defecto: ejecuta las tareas pidiendo confirmación cuando es necesario.
- **Plan Mode** - no hace ningún cambio de archivo, código o script; solo discute contigo la planificación. Es útil cuando sabes que, si lo mandas directo en el primer prompt, la probabilidad de que salga mal es alta - discutes el plan con calma y solo después sales del Plan Mode.
- **Autopilot** - una mezcla de los dos: planificas los cambios con él y, cuando digas "puedes implementar", implementa.

Presionando Shift+Tab nuevamente, vuelves al modo normal.

## Resumen

El Copilot CLI es un agente completo en la terminal: instalación de un comando, `/login` con la cuenta de GitHub que ya tienes, y listo. Este post es corto a propósito - la idea es ser la referencia de instalación para los próximos contenidos, como la conexión con servidores MCP.

**Links:**
- [Video de este post en YouTube (en portugués)](https://www.youtube.com/watch?v=hZhsirwfWY8)
- [GitHub Copilot CLI](https://github.com/features/copilot/cli)
- [Instalación (docs oficiales)](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)
- [Guía de uso](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
- [Repositorio en GitHub](https://github.com/github/copilot-cli)
- [Planes y precios](https://github.com/features/copilot/plans)
