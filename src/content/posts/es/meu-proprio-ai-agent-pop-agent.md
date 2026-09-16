---
title: "Mi propio agente de IA: Pop Agent"
description: "Un pequeño proyecto personal que surgió de mis ganas de entender, de verdad, qué sucede dentro de un agente de IA."
date: 2026-09-16
tags: ["pop-agent", "ai-agents", "self-hosted", "open-source", "pi-agent", "llm"]
image: /images/posts/pop-agent-desktop.png
lang: es
slug: meu-proprio-ai-agent-pop-agent
category: "IA & Herramientas"
translations:
  pt: meu-proprio-ai-agent-pop-agent
  en: meu-proprio-ai-agent-pop-agent
---

Hola a todos. Estoy lanzando mi propio agente de IA: Pop Agent

Miren cómo se ve en Desktop/Web

Es un pequeño proyecto personal que surgió de mis ganas de entender, de verdad, qué sucede dentro de un agente de IA. Comenzó como un estudio, pero evolucionó bien y terminó convirtiéndose en mi agente principal.

Hace más o menos un año y medio, creé mi primer agente en Python: un loop sencillo. Funcionó parcialmente. Encontré errores, los corregí, aparecieron más errores, problemas con tool calls, los corregí, más errores, etc. etc. Me rendí y volví a empezar no sé cuántas veces.

Pop Agent fue la versión con la que logré llegar más lejos. Está basado en Pi Agent, uno de mis agentes favoritos. Usando el SDK de Pi, pude enfocarme más en la interfaz, la base de datos, la memoria, las skills, las integraciones y otras partes del sistema.

Durante este proceso, el término harness se popularizó, y me di cuenta de que eso era exactamente lo que estaba construyendo.

Pop Agent es sencillo y, obviamente, está pensado para resolver mis problemas. No tiene la sofisticación de los proyectos de grandes empresas y equipos de desarrollo, pero me enfoqué en lo que más me interesaba:

## 1. Memoria "infinita"

Quería que siempre recordara lo que ya habíamos hablado.

Al principio, pensé en usar algún tipo de RAG (me gusta bastante el módulo FAISS de Meta), pero me di cuenta de que, para mi cantidad de datos, FTS5, que ya viene con SQLite, funcionaría muy bien.

Así puedo retomar temas antiguos sin tener que volver a explicar todo el contexto.

## 2. Múltiples interfaces

Tengo acceso al mismo agente desde Web, Desktop y CLI, ya sea en Windows, macOS o Linux. En el celular, instalo la PWA como una app, y funciona de manera muy fluida.

Puedo comenzar una conversación en la CLI, continuarla en el celular y, más tarde, terminarla en Desktop. Siempre es el mismo historial y el mismo agente.

Funcionando en el celular

![Pop Agent funcionando en el celular](/images/posts/pop-agent-mobile.jpg)

## 3. Acceso por VPN

Lo integré completamente con mi VPN de Tailscale. Tengo VPN y HTTPS listos con muy poco esfuerzo, usando solamente la cuenta gratuita de Tailscale.

El agente no necesita estar expuesto directamente a internet y permanece accesible desde mis dispositivos conectados a la red.

## 4. Skills, MCP, A2A y APIs REST

Todo integrado. Solo hay que agregar estas conexiones y usarlas.

## 5. Su propio mini servidor de archivos

Le envío archivos, los lee, los guarda en una carpeta y podemos hablar sobre el contenido. Si vuelvo a necesitar ese archivo, puedo decir algo como:

> "¿Recuerdas aquel PDF o aquella foto que te envié sobre ese tema? Envíamelo de nuevo."

Así de sencillo.

## 6. Tareas programadas

Puedo pedirle que ejecute algo a una hora determinada, que investigue un tema periódicamente, que actualice archivos y que realice otras tareas en segundo plano.

## 7. Múltiples proveedores de LLM

Puedo usar una suscripción de ChatGPT, una suscripción de GitHub Copilot, la API de OpenAI, OpenRouter u otros proveedores compatibles con la API de OpenAI.

Eso ya funciona bien para mi uso actual, pero puedo ampliar el soporte a otros proveedores en el futuro.

## 8. Mensajes de audio

Con transcripción local en el servidor usando Whisper. Actualmente uso el modelo base, que funciona bien para mí, pero puedo cambiar a tiny, small o medium.

También tengo la opción de agregar un turno del LLM para revisar y mejorar la transcripción. Esto ayuda bastante cuando Whisper no entiende correctamente algunas palabras, porque el LLM muchas veces puede corregirlas por el contexto.

## 9. Auto-Skills y Skill Router

Dos conceptos en los que trabajé bastante fueron Auto-Skill y Skill Router.

No estoy diciendo que haya inventado estas ideas. Probablemente existen otros agentes con funcionalidades parecidas, pero todavía no conozco otro que trabaje de esta manera. Debe existir; simplemente no lo conozco.

El concepto de Auto-Skill funciona así: mientras converso con el agente, un proceso en segundo plano se ejecuta cada diez minutos y verifica si alguna conversación puede generar una nueva skill. Puede ser algo útil para el futuro, un procedimiento recurrente o algún aprendizaje que ayude al agente en tareas similares.

Cuando encuentra algo adecuado, el proceso crea una Auto-Skill. Esta queda separada de las skills Built-in, que vienen de forma predeterminada, y de las Personal, que creo o agrego manualmente.

El objetivo es hacer que el agente mejore con el tiempo y sea más eficiente en tareas repetitivas.

Obviamente, esta parte exigió bastante cuidado. Intenté agregar todas las verificaciones de seguridad posibles, y algunos tipos de conversaciones se excluyen automáticamente del análisis. Que una conversación sea evaluada tampoco significa que necesariamente se creará una nueva skill: existen etapas de validación antes de la publicación.

Para complementar esta funcionalidad, también creé Skill Router, que funciona como una especie de mini-RAG y selecciona qué skills deben entrar en el contexto de cada turno.

Como Auto-Skill puede crear innumerables skills (el mío ya tenía 35 Auto-Skills creadas esa semana), la gestión del tamaño de la ventana de contexto se volvió más crítica. Skill Router busca entre todas ellas y selecciona solamente las que parecen relevantes para ese mensaje.

Me gustó bastante el resultado de Auto-Skill y Skill Router. Todavía me faltan mejores métricas para entender cuántas veces la selección realmente ayudó, pero la sensación durante el uso es exactamente la que quería.

Parece que el agente siempre recuerda el tema, entiende rápidamente de qué estoy hablando y está un poco más preparado con el paso del tiempo. La sensación es que rara vez necesito explicar lo mismo dos veces.

Un ejemplo común ocurre cuando estoy en la calle resolviendo algo. Tomo una foto, se la envío, mando un audio rápido, etc. Después de algunos días, retomo el tema, y el agente recupera la conversación, la foto y la información relacionada.

Puede parecer algo pequeño, pero era exactamente ese tipo de fluidez lo que quería tener en un agente de IA.

## Estado actual

Por supuesto, todavía hay bastante espacio para mejorar. Por ejemplo, me gustaría encontrar una forma de "llamarlo", como sucede actualmente con ChatGPT, que tiene una experiencia de voz muy buena.

Aun así, el uso actual ya satisface muy bien lo que necesitaba.

En resumen, Pop Agent es mi pequeño asistente personal.

El código está disponible en GitHub bajo la licencia MIT. Actualmente, la instalación está orientada a servidores con Ubuntu Server 26.04. Si existe interés, puedo estudiar y mejorar el soporte de instalación para otros entornos.

GitHub: https://github.com/viniciusbuscacio/pop-agent

Comentarios, pruebas y contribuciones son bienvenidos.
