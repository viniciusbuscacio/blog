---
title: "pi agent: instalación y primeros pasos"
description: "pi es un agente de IA minimalista y extensible para la terminal. Cómo instalarlo en Windows, conectar un provider y dar los primeros pasos."
date: 2026-07-16
tags: ["pi-agent", "ai-agents", "cli", "terminal", "open-source", "ia"]
image: /images/posts/pi-agent.jpg
lang: es
slug: pi-agent-instalacao-primeiros-passos
category: "IA & Herramientas"
translations:
  pt: pi-agent-instalacao-primeiros-passos
  en: pi-agent-instalacao-primeiros-passos
---

> 🎥 Este post está basado en un video de mi canal (en portugués): [Pi Agent - Instalação e primeiros passos](https://www.youtube.com/watch?v=VwV2zCn5C60)

Este post es sobre el pi agent: instalación y primeros pasos.

## Qué es el pi agent

pi es un agente de IA en tu terminal. Escribí un [post anterior sobre el GitHub Copilot CLI](https://www.youtube.com/watch?v=hZhsirwfWY8), y es parecido - la diferencia es que pi tiene una filosofía un poco diferente, y por eso yo lo uso más para fines personales.

Es un agente **minimalista**. ¿Qué quiere decir eso? No viene con casi ninguna herramienta - solo lo mínimo posible para iniciar. Eso puede parecer una desventaja, pero al mismo tiempo permite una flexibilidad muy grande: todo en pi es editable. Lo que no te guste, puedes pedirle que cambie su propio comportamiento. Es una flexibilidad que no vi en ningún otro agente de IA.

También es **extensible**. Existen sitios donde descargas bibliotecas y extensiones, pero lo más interesante es pedirle la extensión directamente. Un ejemplo claro: pi viene sin soporte para MCP. Si usas agentes de IA, MCP es prácticamente esencial - y la solución es simplemente decirle: "crea una extensión para MCP". Y la crea.

Un contexto sobre su fama: pi se hizo conocido un poco en la estela de OpenClaw. Después de que OpenClaw tuvo el éxito que tuvo, se descubrió que detrás de él corre el pi agent. No se hizo tan famoso como OpenClaw, pero por debajo es pi el que está ahí.

## Qué necesitas

- **Node.js y npm** - pi es un agente en TypeScript, distribuido vía npm.
- **Un provider de IA** - puede ser OpenAI, GitHub Copilot, OpenRouter, Gemini, entre otros. Funciona con suscripciones y también con API keys.
- **Un bash, en el caso de Windows** - pi corre en la terminal (Bash o PowerShell), pero en Windows necesita un bash: Git Bash o WSL. Si tienes [Git para Windows](https://git-scm.com/download/win) instalado, Git Bash ya lo resuelve.

## Instalación

En Linux o Mac, la instalación es directa vía npm:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

En Windows, el camino que muestro en el video es: primero instalar Git (que trae Git Bash):

```powershell
winget install Git.Git
```

Y después ejecutar el script de instalación de pi en PowerShell. Durante la instalación, avisó que necesitaba Node y ofreció instalarlo - acepté, y a continuación pidió la confirmación de la instalación de pi.

Igual que con el Copilot CLI, el comando `pi` no queda disponible en la terminal donde acabas de instalarlo - abre una nueva terminal (o ejecuta el comando que el instalador indica) y escribe:

```bash
pi
```

En la primera ejecución tarda un poco, porque descarga algunos paquetes adicionales.

## Conectando un provider

Al iniciar, pi avisa que no tienes ningún modelo. El comando es `/login`: pregunta si quieres conectar vía suscripción o API key.

En el video usé mi suscripción de GitHub Copilot (también tengo una de ChatGPT, pero los créditos del mes ya se habían acabado). El flujo es parecido al de Copilot: abre la página web, activas el dispositivo, autorizas, y listo. Después, en `/model`, aparecen los modelos que reconoció en la suscripción - elegí el Opus 4.8, mandé un mensaje de prueba y estaba funcionando.

## Comandos principales

pi tiene comandos parecidos a los del GitHub Copilot CLI:

| Comando | Qué hace |
|---------|-----------|
| `/` | Lista todos los comandos |
| `/login` | Conecta un provider de IA |
| `/model` | Elige el modelo |
| `/new` | Inicia una nueva conversación |
| `/compact` | Resume la conversación para liberar contexto |
| `/settings` | Configuraciones |

Un detalle interesante: pi es un poco más inteligente con el contexto - puede detectar que el contexto se llenó y generalmente lo compacta solo. Si no puede, usas el `/compact`. En `/settings` hay opciones como el Auto Compact (que viene habilitado), resize de imágenes, bloqueo de imágenes, entre otras.

## Resumen

Este post es corto a propósito, igual que el del Copilot CLI: la idea es servir de referencia de instalación para contenidos más avanzados que vienen en camino. El sitio de pi resume bien la propuesta - existen muchos agent harnesses, pero este es *tuyo*, de tan personalizable. De todos los agentes que probé, es uno de los más interesantes: muy productivo, rápido, ligero y flexible.

**Links:**
- [Video de este post en YouTube (en portugués)](https://www.youtube.com/watch?v=VwV2zCn5C60)
- [pi.dev](https://pi.dev)
- [Paquete en npm](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
- [Repositorio en GitHub](https://github.com/earendil-works/pi)
- [Git para Windows (Git Bash)](https://git-scm.com/download/win)
