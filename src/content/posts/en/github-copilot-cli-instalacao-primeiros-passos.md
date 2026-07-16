---
title: "GitHub Copilot CLI: installation and first steps"
description: "GitHub Copilot CLI is an AI agent that runs in your terminal. How to install it, do the first login, the main slash commands and the three execution modes."
date: 2026-07-16
tags: ["github-copilot", "ai-agents", "cli", "terminal", "ia"]
image: /images/posts/github-copilot-cli.jpg
lang: en
slug: github-copilot-cli-instalacao-primeiros-passos
category: "AI & Tools"
translations:
  pt: github-copilot-cli-instalacao-primeiros-passos
  es: github-copilot-cli-instalacao-primeiros-passos
---

> 🎥 This post is based on a video from my channel (in Portuguese): [GitHub Copilot CLI - Instalação e primeiros passos](https://www.youtube.com/watch?v=hZhsirwfWY8)

This post is about the GitHub Copilot CLI: installation and first steps.

## What is the GitHub Copilot CLI

The GitHub Copilot CLI is an AI agent that you run in the terminal. Microsoft has several versions of Copilot - personally, this one is my favorite. You open the terminal (PowerShell, Bash), start Copilot and talk to it right there.

It is not the VS Code extension. You can run it inside VS Code, but here I run it directly in the terminal. And it is a full agent: you talk to it in natural language, it reads files, runs code, creates scripts, connects to MCP servers, among other tasks.

The idea of this post (and the video) is to serve as a base for other content: in future posts about MCP and automation, I will reference this one for anyone who doesn't have the Copilot CLI installed yet.

One detail: I use the Copilot CLI mostly at work. For personal use, I use another agent, the pi agent - which has its own [video](https://www.youtube.com/watch?v=VwV2zCn5C60) and post.

## Before you start

You need a GitHub account. GitHub Copilot has free and paid plans: for example, there used to be a 10 dollars per month plan. At the time I recorded the video, the creation of new paid subscriptions was suspended (paused since April 20, 2026), so you cannot create a new paid account, but maybe that is already available again by the time you read this. Another recent change: since June 1, 2026 the billing is usage-based (AI Credits), and the free model fallback was removed. It is worth checking the [plans page](https://github.com/features/copilot/plans) before deciding - this part changes fast.

One interesting point about the account: with it you can use several different models - the GPT models, Anthropic's Opus, among others.

## Where to run it

In the terminal, whether on Mac, Linux or Windows. Any terminal works well.

## Installation

The installation is done via command line:

```bash
# Windows
winget install GitHub.Copilot

# macOS
brew install copilot-cli

# Any platform with Node.js
npm install -g @github/copilot
```

One detail: if you install it and try to run it in the same terminal, it will not recognize the command yet. Close the terminal, open a new one and type:

```bash
copilot
```

## First login

Since it is the first use, the first command to run is `/login`, to authenticate with your GitHub account. It opens the browser, you type the code shown in the terminal, authorize it, and done - authenticated.

## Main commands

Copilot has several commands with `/`. These are the ones I use the most at the beginning:

| Command | What it does |
|---------|-----------|
| `/` | Lists all available commands |
| `/new` | Starts a new conversation - useful when you have been in the same session for a long time and the context is full |
| `/model` | Switches the AI model |
| `/allow-all` | Enables all permissions, without asking for confirmation on each command (the so-called "YOLO mode") |
| `/compact` | Summarizes the current conversation to free up context, when you want to continue the same session but it is already too big |

In the video demo, I use `/model` to switch models - at recording time, I switched from GPT-5.5 to GPT-5.6, which had just appeared in the list.

## The three execution modes

Copilot has three execution modes, and you switch between them with **Shift+Tab**:

- **Normal** - the default mode: it executes tasks asking for confirmation when needed.
- **Plan Mode** - it makes no changes to files, code or scripts; it only discusses the planning with you. Useful when you know that, if you send it straight in the first prompt, the chance of it going wrong is high - you discuss the plan calmly and only then leave Plan Mode.
- **Autopilot** - a mix of the two: you plan the changes with it and, when you say "you can implement it", it implements.

Pressing Shift+Tab again, you go back to normal mode.

## Summary

The Copilot CLI is a full agent in the terminal: one-command installation, `/login` with the GitHub account you already have, and you are set. This post is short on purpose - the idea is to be the installation reference for the next content, such as connecting to MCP servers.

**Links:**
- [Video for this post on YouTube (in Portuguese)](https://www.youtube.com/watch?v=hZhsirwfWY8)
- [GitHub Copilot CLI](https://github.com/features/copilot/cli)
- [Installation (official docs)](https://docs.github.com/en/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli)
- [Usage guide](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli/overview)
- [GitHub repository](https://github.com/github/copilot-cli)
- [Plans and pricing](https://github.com/features/copilot/plans)
