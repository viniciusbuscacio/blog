---
title: "pi agent: installation and first steps"
description: "pi is a minimalist and extensible AI agent for the terminal. How to install it on Windows, connect a provider and take the first steps."
date: 2026-07-16
tags: ["pi-agent", "ai-agents", "cli", "terminal", "open-source", "ia"]
image: /images/posts/pi-agent.jpg
lang: en
slug: pi-agent-instalacao-primeiros-passos
category: "AI & Tools"
translations:
  pt: pi-agent-instalacao-primeiros-passos
  es: pi-agent-instalacao-primeiros-passos
---

> 🎥 This post is based on a video from my channel (in Portuguese): [Pi Agent - Instalação e primeiros passos](https://www.youtube.com/watch?v=VwV2zCn5C60)

This post is about the pi agent: installation and first steps.

## What is the pi agent

pi is an AI agent in your terminal. I wrote a [previous post about the GitHub Copilot CLI](https://www.youtube.com/watch?v=hZhsirwfWY8), and it is similar - the difference is that pi has a slightly different philosophy, and that is why I actually use it more for personal purposes.

It is a **minimalist** agent. What does that mean? It comes with almost no tools - only the bare minimum to start. That may look like a disadvantage, but at the same time it allows a lot of flexibility: everything in pi is editable. Whatever you don't like, you can ask it to change its own behavior. It is a flexibility I have not seen in any other AI agent.

It is also **extensible**. There are sites where you download libraries and extensions, but the most interesting thing is asking it for the extension directly. A clear example: pi comes without MCP support. If you use AI agents, MCP is practically essential - and the solution is simply telling it: "create an extension for MCP". And it creates one.

Some context about its fame: pi became known somewhat in the wake of OpenClaw. After OpenClaw made the success it made, it was discovered that pi agent runs behind it. It didn't become as famous as OpenClaw, but under the hood it is pi that is there.

## What you need

- **Node.js and npm** - pi is a TypeScript agent, distributed via npm.
- **An AI provider** - it can be OpenAI, GitHub Copilot, OpenRouter, Gemini, among others. It works with subscriptions and also with API keys.
- **A bash, in the case of Windows** - pi runs in the terminal (Bash or PowerShell), but on Windows it needs a bash: Git Bash or WSL. If you have [Git for Windows](https://git-scm.com/download/win) installed, Git Bash already solves it.

## Installation

On Linux or Mac, the installation is straight via npm:

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

On Windows, the path I show in the video is: first install Git (which brings Git Bash):

```powershell
winget install Git.Git
```

And then run pi's installation script in PowerShell. During the installation, it warned that it needed Node and offered to install it - I accepted, and next it asked for confirmation of the pi installation.

Just like with the Copilot CLI, the `pi` command is not available in the terminal where you just installed it - open a new terminal (or run the command the installer suggests) and type:

```bash
pi
```

On the first run it takes a little while, because it downloads some additional packages.

## Connecting a provider

On startup, pi warns that you have no model. The command is `/login`: it asks whether you want to connect via subscription or API key.

In the video I used my GitHub Copilot subscription (I also have a ChatGPT one, but that month's credits were already gone). The flow is similar to Copilot's: it opens the web page, you activate the device, authorize it, and done. Then, in `/model`, the models it recognized in the subscription show up - I picked Opus 4.8, sent a test message and it was working.

## Main commands

pi has commands similar to the GitHub Copilot CLI's:

| Command | What it does |
|---------|-----------|
| `/` | Lists all commands |
| `/login` | Connects an AI provider |
| `/model` | Picks the model |
| `/new` | Starts a new conversation |
| `/compact` | Summarizes the conversation to free up context |
| `/settings` | Settings |

An interesting detail: pi is a bit smarter with context - it can detect that the context is full and usually compacts it on its own. If it can't, you use `/compact`. In `/settings` there are options like Auto Compact (enabled by default), image resizing, image blocking, among others.

## Summary

This post is short on purpose, just like the Copilot CLI one: the idea is to serve as the installation reference for more advanced content coming next. pi's website sums up the proposal well - there are many agent harnesses, but this one is *yours*, given how customizable it is. Of all the agents I have tried, it is one of the most interesting: very productive, fast, light and flexible.

**Links:**
- [Video for this post on YouTube (in Portuguese)](https://www.youtube.com/watch?v=VwV2zCn5C60)
- [pi.dev](https://pi.dev)
- [npm package](https://www.npmjs.com/package/@earendil-works/pi-coding-agent)
- [GitHub repository](https://github.com/earendil-works/pi)
- [Git for Windows (Git Bash)](https://git-scm.com/download/win)
