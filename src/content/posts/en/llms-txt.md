---
title: LLMS.txt - Preparing Your Website for AI Agents
description: How to use an llms.txt file to make your website easier for AI agents to consult.
date: 2026-09-25
tags: [ai-agents, llms-txt, markdown]
lang: en
slug: llms-txt
category: AI & Tools
translations:
  pt: llms-txt
  es: llms-txt
---

When we think of a website, we usually think of people browsing pages, menus, and links, with HTML pages, JavaScript running in the browser, and so on. But AI agents are also accessing this content to answer questions and perform tasks.

To make this work easier for AI agents, one simple option that has been gaining adoption is the llms.txt file.

Despite its .txt extension, it uses Markdown to introduce the website: a description of its content, important information, and organized links to relevant resources. Think of it as a “start here” for agents.

Instead of relying solely on browsing pages, an agent can consult this map, identify useful references, and retrieve the details it needs. When well organized and actually used, this can reduce unnecessary navigation and irrelevant content in the context.

## How do you create one?

You can publish a file at https://yoursite.com/llms.txt — or within a section, such as /docs/llms.txt — with a simple structure:

```markdown
# My Company
> We develop business management solutions for small businesses.

## Product
- [Overview](https://yoursite.com/product.md): Features and target audience.
- [Plans](https://yoursite.com/plans.md): Pricing and limits for each plan.

## Documentation
- [Getting started](https://yoursite.com/docs/getting-started.md): Introductory guide.
- [API](https://yoursite.com/docs/api.md): Integration reference.

## Support
- [Frequently asked questions](https://yoursite.com/faq.md): Common questions.
```

Use real links, clear descriptions, and keep the content up to date. Whenever possible, also offer Markdown versions of your pages.

## Examples to explore

Microsoft AI Foundry: https://raw.githubusercontent.com/microsoft/skills/e27a68881a3b8bb906cc5ef00877a9a80f521bf6/docs/llms.txt

Claude Code: https://code.claude.com/docs/llms.txt

OpenAI API Docs: https://developers.openai.com/api/docs/llms.txt


## What doesn’t it do?

llms.txt is a proposed convention, not a guarantee of universal adoption. Publishing it does not guarantee that your website will be accessed, cited, or ranked higher in search results.

It also does not replace robots.txt, control access permissions, or automatically “train AI.” Its only purpose is to offer a shorter, clearer path to the information that matters to the AI agent.

You don’t need to rebuild your website to get started. A small, up-to-date file can already be a useful entry point for AI agents.

More about the proposal: https://llmstxt.org/
