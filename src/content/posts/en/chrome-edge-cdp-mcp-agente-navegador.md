---
title: "Chrome / Edge CDP MCP: your AI agent controlling the browser"
description: "How to let an AI agent control a real browser - Chrome or Edge - via CDP and MCP: navigate, read pages, click and extract information."
date: 2026-07-16
tags: ["cdp", "mcp", "chrome", "edge", "browser-automation", "ai-agents"]
image: /images/posts/chrome-edge-cdp-mcp.jpg
lang: en
slug: chrome-edge-cdp-mcp-agente-navegador
category: "AI & Tools"
translations:
  pt: chrome-edge-cdp-mcp-agente-navegador
  es: chrome-edge-cdp-mcp-agente-navegador
---

> 🎥 This post is based on a video from my channel (in Portuguese): [Google Chrome / Microsoft Edge CDP MCP](https://www.youtube.com/watch?v=F17G9ZfOIxM)

This post is about the Chrome / Edge CDP MCP: a way to let your AI agent control your real browser.

## What it is

It is a relatively new protocol - it was launched in September 2025 by Google, in Chrome. Basically, you open the browser with a control port enabled, the agent connects to that port and gains control of the browser: it takes direct actions in there.

It was launched for Google Chrome, but since Microsoft Edge uses the same base under the hood (Chromium), it also works on Edge.

CDP - Chrome DevTools Protocol ([documentation](https://chromedevtools.github.io/devtools-protocol/)) - exposes to the agent a set of tools that cover everything you would do on a site: navigate, click, capture the screen, fill in forms.

## The video demo

In the video, I ask Copilot: "can you connect to my Edge browser via CDP?" (it could be Google Chrome as well). It answered that yes, and that it could restart Edge with the CDP port enabled - since I had opened Edge normally, the protocol is not enabled by default.

It restarted Edge twice until it worked, but it worked. From there:

- I asked it to open Wikipedia - the agent controlling the browser.
- I asked it to search for the Flamengo article and summarize it - it navigated, read and summarized.

Once it connects, the access is complete: "go to this site, read this news article, translate it for me, fill in this form, search for such a thing on such a site". Whatever you can imagine inside a browser.

## Important detail: the default profile block (Chrome/Edge 136+)

Since Chrome 136 (April 2025), the remote debugging flags are ignored if the browser is using the user's default profile - and since Edge is Chromium, it applies to Edge too. In other words: the agent can no longer connect to your normal profile, with your logins and cookies.

The reason is security: malware used remote debugging to steal cookies and passwords from the real profile. With a separate data directory, the encryption uses another key and your profile's data stays isolated.

In practice, it is easy to solve: the agent creates its own profile, launching the browser with `--user-data-dir` pointing to a separate folder:

```text
chrome --remote-debugging-port=9222 --user-data-dir="C:\ChromeDebugProfile"
msedge --remote-debugging-port=9222 --user-data-dir="C:\EdgeDebugProfile"
```

And in that agent profile you can log in to the sites you want to give it access to - if there is a system you want it to read for you, you log in to it there, and the agent gets the access you defined (read, write - it depends on what you need to do on the site).

## What I use it for

This tool is one of the ones I use the most day to day. The way to think about it is: your agent will connect and browse the internet with you. Reading and translating news, filling in forms, searching specific sites, extracting information from portals that have no API.

## Summary

The goal of the post is this: to show that it is possible to connect the AI agent directly to the browser, spinning up a separate profile for it. At first it may take one or two browser restart attempts, but once it connects, the agent has full control - and the uses are many.

**Links:**
- [Video for this post on YouTube (in Portuguese)](https://www.youtube.com/watch?v=F17G9ZfOIxM)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)
- [Chrome 136+ change (official announcement)](https://developer.chrome.com/blog/remote-debugging-port)
- [Chrome Remote Debugging](https://developer.chrome.com/docs/devtools/remote-debugging)
- [Microsoft Edge DevTools Protocol](https://learn.microsoft.com/en-us/microsoft-edge/devtools/protocol/)
