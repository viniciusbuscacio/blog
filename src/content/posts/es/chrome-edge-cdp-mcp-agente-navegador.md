---
title: "Chrome / Edge CDP MCP: tu agente de IA controlando el navegador"
description: "Cómo permitir que un agente de IA controle un navegador real - Chrome o Edge - vía CDP y MCP: navegar, leer páginas, hacer clic y extraer información."
date: 2026-07-16
tags: ["cdp", "mcp", "chrome", "edge", "browser-automation", "ai-agents"]
image: /images/posts/chrome-edge-cdp-mcp.jpg
lang: es
slug: chrome-edge-cdp-mcp-agente-navegador
category: "IA & Herramientas"
translations:
  pt: chrome-edge-cdp-mcp-agente-navegador
  en: chrome-edge-cdp-mcp-agente-navegador
---

> 🎥 Este post está basado en un video de mi canal (en portugués): [Google Chrome / Microsoft Edge CDP MCP](https://www.youtube.com/watch?v=F17G9ZfOIxM)

Este post es sobre el Chrome / Edge CDP MCP: una forma de permitir que tu agente de IA controle tu navegador real.

## Qué es

Es un protocolo relativamente nuevo - fue lanzado en septiembre/2025 por Google, en Chrome. Básicamente, abres el navegador con un puerto de control habilitado, el agente se conecta a ese puerto y pasa a tener control del navegador: toma acciones directas ahí dentro.

Fue lanzado para Google Chrome, pero como Microsoft Edge usa la misma base por debajo (Chromium), también funciona en Edge.

El CDP - Chrome DevTools Protocol ([documentación](https://chromedevtools.github.io/devtools-protocol/)) - expone al agente una serie de herramientas que cubren todo lo que harías en un sitio: navegar, hacer clic, capturar la pantalla, llenar formularios.

## La demo del video

En el video, le pregunto a Copilot: "¿puedes conectar mi navegador Edge vía CDP?" (podría ser Google Chrome también). Respondió que sí, y que podía reiniciar Edge con el puerto del CDP habilitado - como yo había abierto Edge normalmente, el protocolo no viene habilitado por defecto.

Reinició Edge dos veces hasta lograrlo, pero lo logró. A partir de ahí:

- Le pedí abrir el sitio de Wikipedia - el agente controlando el navegador.
- Le pedí buscar el artículo del Flamengo y resumirlo - navegó, leyó y resumió.

Después de que se conecta, el acceso es completo: "entra a este sitio, lee esta noticia, tradúcela para mí, llena este formulario, busca tal cosa en tal sitio". Lo que puedas imaginar dentro de un navegador.

## Detalle importante: el bloqueo del perfil por defecto (Chrome/Edge 136+)

Desde Chrome 136 (abril/2025), las flags de remote debugging son ignoradas si el navegador está usando el perfil por defecto del usuario - y como Edge es Chromium, aplica para Edge también. Es decir: el agente ya no puede conectarse a tu perfil normal, con tus logins y cookies.

El motivo es seguridad: malwares usaban el remote debugging para robar cookies y contraseñas del perfil real. Con un directorio de datos separado, el cifrado usa otra clave y los datos de tu perfil quedan aislados.

En la práctica, es fácil de resolver: el agente crea un perfil propio, lanzando el navegador con `--user-data-dir` apuntando a una carpeta separada:

```text
chrome --remote-debugging-port=9222 --user-data-dir="C:\ChromeDebugProfile"
msedge --remote-debugging-port=9222 --user-data-dir="C:\EdgeDebugProfile"
```

Y en ese perfil del agente puedes iniciar sesión en los sitios a los que quieras darle acceso - si hay algún sistema que quieres que lea por ti, inicias sesión ahí, y el agente pasa a tener el acceso que definiste (lectura, escritura - depende de lo que necesites hacer en el sitio).

## Para qué lo uso

Esta herramienta es una de las que más uso en el día a día. La forma de pensarlo es: tu agente va a conectarse y navegar por internet contigo. Leer y traducir noticias, llenar formularios, buscar en sitios específicos, extraer información de portales que no tienen API.

## Resumen

El objetivo del post es ese: mostrar que es posible conectar el agente de IA directamente al navegador, levantando un perfil separado para él. En el primer momento puede necesitar uno o dos intentos de reinicio del navegador, pero después de que se conecta, el agente tiene control completo - y los usos son muchos.

**Links:**
- [Video de este post en YouTube (en portugués)](https://www.youtube.com/watch?v=F17G9ZfOIxM)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Cambio en Chrome 136+ (anuncio oficial)](https://developer.chrome.com/blog/remote-debugging-port)
- [Chrome Remote Debugging](https://developer.chrome.com/docs/devtools/remote-debugging)
- [Microsoft Edge DevTools Protocol](https://learn.microsoft.com/en-us/microsoft-edge/devtools/protocol/)
