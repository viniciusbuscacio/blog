---
title: DevSquad Copilot
description: Qué es DevSquad Copilot, cómo trabajan sus agentes y mis primeras experiencias usando el framework.
date: 2026-09-19
tags: [github-copilot, ai-agents, devsquad, open-source]
image: /images/posts/devsquad-copilot-capa.png
lang: es
slug: devsquad-copilot
category: IA & Herramientas
translations:
  pt: devsquad-copilot
  en: devsquad-copilot
---

DevSquad Copilot es un framework de agentes de IA para el desarrollo de software, integrado con GitHub Copilot. El proyecto está disponible en GitHub en https://github.com/microsoft/devsquad-copilot. El proyecto utiliza la licencia MIT (https://github.com/microsoft/devsquad-copilot/blob/main/LICENSE).

En resumen, es un grupo de agentes de IA especializados en desarrollo de software que funciona en VS Code (con la extensión GitHub Copilot Chat) o en GitHub Copilot CLI, en la terminal.

En total, son 12 agentes más el orquestador, llamado Conductor o simplemente devsquad en el entorno. Al principio, hablas con este Conductor, que es el agente de entrada al entorno, pero también puedes hablar directamente con los otros agentes si lo prefieres.

## Los 12 especialistas

![Diagrama de los agentes de DevSquad Copilot](/images/posts/devsquad-copilot-agentes.png)

Los 12 agentes son:

**init:** Prepara el proyecto con archivos de configuración, instrucciones y plantillas del framework.

**envision:** Ayuda a aclarar el problema, los objetivos de negocio y qué significa tener éxito.

**kickoff:** Organiza la estructura del proyecto y del tablero de trabajo.

**specify:** Escribe la especificación del siguiente incremento, con su alcance y criterios de aceptación.

**plan:** Define el plan técnico y registra las decisiones de arquitectura en ADRs.

**decompose:** Divide el trabajo en tareas ejecutables y puede crear elementos de trabajo en GitHub Issues o Azure DevOps.

**implement:** Implementa las tareas, con pruebas, verificaciones y preparación del PR.

**sprint:** Ayuda a planificar el sprint y a elegir su alcance.

**review:** Revisa la implementación contrastándola con la especificación, las decisiones de arquitectura y el plan.

**refine:** Revisa el backlog y ajusta las especificaciones y decisiones cuando surgen nuevos hallazgos.

**security:** Evalúa la seguridad, tanto en el diseño de la solución como en el código.

**extend:** Ayuda a crear extensiones del framework: agentes, skills, instrucciones y hooks.

## ¿Qué pasa cuando hablas con el Conductor?

Es el punto de entrada y el coordinador, no solo un intermediario que reenvía prompts.

Por ejemplo, dices: “Quiero añadir notificaciones por correo electrónico a mi sistema.”

Identifica el contexto del proyecto y la etapa actual, envía la solicitud al agente adecuado, recibe la respuesta y determina el siguiente paso (¿enviarla a otro agente? ¿hacerle alguna pregunta al usuario?).

No es obligatorio que cada tarea pase por los 12 agentes. El Conductor elige el camino según el estado del proyecto y el impacto del cambio, involucrando al usuario (tú) en las decisiones y aprobaciones necesarias.

Las especificaciones, decisiones de arquitectura y tareas quedan registradas en archivos y elementos de trabajo, no solo en la conversación con los agentes.

El objetivo de DevSquad es organizar la colaboración entre desarrolladores y agentes de IA para entregar software con mayor rapidez, manteniendo la calidad, la trazabilidad y la supervisión humana. En cierto modo, tiene más sentido en proyectos que necesitan ese seguimiento. Para un prototipo desechable o una tarea muy sencilla, este proceso puede generar más trabajo que beneficio.

## Instalación

La guía de instalación paso a paso está en https://microsoft.github.io/devsquad-copilot/getting-started/

## Mis pruebas

El proyecto es nuevo y empecé a probarlo hace poco. Pero me impresionó bastante su capacidad de análisis profundo en entornos complejos. No me parece que valga la pena para proyectos pequeños, cambios menores, etc., ya que la coordinación entre agentes y los pasos adicionales hicieron que el proceso fuera más pesado y lento en mis pruebas.

Pero, en entornos realmente muy complejos, me pareció mucho más estable que el Copilot CLI “normal”. Digo “normal” porque, en cierto modo, sigue siendo Copilot CLI, pero con toda esta arquitectura detrás.
