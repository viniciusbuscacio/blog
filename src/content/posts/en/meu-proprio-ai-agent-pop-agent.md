---
title: "My own AI Agent: Pop Agent"
description: "A small personal project that came from my desire to truly understand what happens inside an AI Agent."
date: 2026-09-16
tags: ["pop-agent", "ai-agents", "self-hosted", "open-source", "pi-agent", "llm"]
image: /images/posts/pop-agent-desktop.png
lang: en
slug: meu-proprio-ai-agent-pop-agent
category: "AI & Tools"
translations:
  pt: meu-proprio-ai-agent-pop-agent
  es: meu-proprio-ai-agent-pop-agent
---

Hi, everyone. I'm launching my own AI Agent: Pop Agent

Here's what it looks like on Desktop/Web

It's a small personal project that came from my desire to truly understand what happens inside an AI Agent. It started as a study project, but evolved well and eventually became my main agent.

About a year and a half ago, I created my first agent in Python: a simple loop. It partially worked. I found errors, fixed them, more errors appeared, problems with tool calls, I fixed those, more errors, etc. etc. I gave up and started over more times than I can remember.

Pop Agent was the version I managed to take the furthest. It is based on Pi Agent, one of my favorite agents. By using the Pi SDK, I was able to focus more on the interface, database, memory, skills, integrations, and other parts of the system.

During this process, the term harness became popular, and I realized that was exactly what I was building.

Pop Agent is simple and, obviously, designed to solve my own problems. It doesn't have the sophistication of projects built by large companies and development teams, but I focused on what interested me most:

## 1. "Infinite" memory

I wanted it to always remember what we had already talked about.

At first, I thought about using some kind of RAG (I really like Meta's FAISS module), but I realized that, for the amount of data I have, FTS5, which already comes with SQLite, would work very well.

This lets me return to old topics without having to explain the entire context again.

## 2. Multiple interfaces

I can access the same agent through Web, Desktop, and CLI on Windows, macOS, and Linux. On my phone, I install the PWA as an app, and it works very smoothly.

I can start a conversation in the CLI, continue on my phone, and later finish it on Desktop. It's always the same history and the same agent.

Running on mobile

![Pop Agent running on mobile](/images/posts/pop-agent-mobile.jpg)

## 3. VPN access

I integrated it completely with my Tailscale VPN. I get VPN and HTTPS ready to use with very little effort, using only Tailscale's free account.

The agent doesn't need to be exposed directly to the internet and remains accessible from my devices connected to the network.

## 4. Skills, MCP, A2A, and REST APIs

Everything is integrated. Just add these connections and use them.

## 5. Its own mini file server

I send files to it, it reads them, saves them in a folder, and we can talk about the content. If I need that file again, I can say something like:

> "Remember that PDF/photo I sent you about that topic? Send it to me again."

As simple as that.

## 6. Scheduled tasks

I can ask it to run something at a specific time, periodically research a topic, update files, and perform other tasks in the background.

## 7. Multiple LLM providers

I can use a ChatGPT subscription, a GitHub Copilot subscription, the OpenAI API, OpenRouter, or other providers compatible with the OpenAI API.

That already works well for my current use, but I can expand support to other providers in the future.

## 8. Voice messages

With local transcription on the server using Whisper. I currently use the base model, which works well for me, but I can switch to tiny, small, or medium.

I also have the option to add an LLM turn to review and improve the transcription. This helps a lot when Whisper doesn't understand some words correctly, because the LLM can often correct them based on the context.

## 9. Auto-Skills and Skill Router

Two concepts I worked on extensively were Auto-Skill and Skill Router.

I'm not saying I invented these ideas. There are probably other agents with similar features, but I still don't know of another one that works this way. It probably exists; I just don't know it.

The Auto-Skill concept works like this: as I talk to the agent, a background process runs every ten minutes and checks whether a conversation can generate a new skill. It may be something useful for the future, a recurring procedure, or something learned that can help the agent with similar tasks.

When it finds something suitable, the process creates an Auto-Skill. It stays separate from the Built-in skills, which come by default, and the Personal skills, which I create or add manually.

The goal is to make the agent improve over time and become more efficient at repetitive tasks.

Obviously, this part required a lot of care. I tried to add as many security checks as possible, and some types of conversations are automatically excluded from the analysis. A conversation being evaluated also doesn't mean a new skill will necessarily be created: there are validation steps before publication.

To complement this feature, I also created Skill Router, which works as a kind of mini-RAG and selects which skills should enter the context of each turn.

Because Auto-Skill can create countless skills (mine already had 35 Auto-Skills created that week), managing the size of the context window became more critical. Skill Router searches through all of them and selects only those that seem relevant to that message.

I really liked the results of Auto-Skill and Skill Router. I still miss having better metrics to understand how often the selection actually helped, but the feeling during use is exactly what I wanted.

It feels like the agent always remembers the topic, quickly understands what I'm talking about, and becomes a little more prepared over time. It feels like I rarely need to explain the same thing twice.

A common example happens when I'm out taking care of something. I take a picture, send it to the agent, send a quick voice message, etc. A few days later, I return to the topic, and it retrieves the conversation, the photo, and the related information.

It may seem like a small thing, but that was exactly the kind of fluidity I wanted from an AI Agent.

## Current status

Of course, there is still plenty of room for improvement. For example, I would like to find a way to "call" it, as you can currently do with ChatGPT, which has a very good voice experience.

Even so, its current capabilities already meet my needs very well.

In short, Pop Agent is my small personal assistant.

The code is available on GitHub under the MIT license. Installation is currently intended for servers running Ubuntu Server 26.04. If there is interest, I can look into improving installation support for other environments.

GitHub: https://github.com/viniciusbuscacio/pop-agent

Feedback, testing, and contributions are welcome.
