---
title: DevSquad Copilot
description: What DevSquad Copilot is, how its agents work, and my initial experience using the framework.
date: 2026-09-19
tags: [github-copilot, ai-agents, devsquad, open-source]
image: /images/posts/devsquad-copilot-capa.png
lang: en
slug: devsquad-copilot
category: AI & Tools
translations:
  pt: devsquad-copilot
  es: devsquad-copilot
---

DevSquad Copilot is an AI agent framework for software development, integrated with GitHub Copilot. The project is available on GitHub at https://github.com/microsoft/devsquad-copilot. It uses the MIT license (https://github.com/microsoft/devsquad-copilot/blob/main/LICENSE).

In short, it is a group of AI agents specialized in software development that runs in VS Code (with the GitHub Copilot Chat extension) or in GitHub Copilot CLI, in the terminal.

There are 12 agents plus the orchestrator, called the Conductor, or simply devsquad in the environment. You start by talking to the Conductor, which is the entry-point agent, but you can also talk to the other agents directly if you prefer.

## The 12 specialists

![DevSquad Copilot agents diagram](/images/posts/devsquad-copilot-agentes.png)

The 12 agents are:

**init:** Sets up the project with configuration files, instructions, and framework templates.

**envision:** Helps clarify the problem, business objectives, and what success looks like.

**kickoff:** Organizes the project structure and work board.

**specify:** Writes the specification for the next increment, including scope and acceptance criteria.

**plan:** Defines the technical plan and records architecture decisions in ADRs.

**decompose:** Breaks the work down into actionable tasks and can create work items in GitHub Issues or Azure DevOps.

**implement:** Implements tasks, including tests, checks, and PR preparation.

**sprint:** Helps plan the sprint and select its scope.

**review:** Reviews the implementation against the specification, architecture decisions, and plan.

**refine:** Reviews the backlog and updates specifications and decisions as new findings emerge.

**security:** Assesses security in both the solution design and the code.

**extend:** Helps create framework extensions: agents, skills, instructions, and hooks.

## What happens when you talk to the Conductor?

It is the entry point and coordinator, not just a prompt router.

For example, you say: “I want to add email notifications to my system.”

It identifies the project context and current stage, routes the request to the right agent, receives the response, and determines the next step (send it to another agent? ask the user a question?).

Not every task has to go through all 12 agents. The Conductor chooses the path based on the project's state and the impact of the change, involving the user (you) in the necessary decisions and approvals.

Specifications, architecture decisions, and tasks are recorded in files and work items, not just in conversations with the agents.

DevSquad's goal is to organize collaboration between developers and AI agents to deliver software faster while maintaining quality, traceability, and human oversight. In a way, it makes more sense for projects that need this level of coordination. For a throwaway prototype or a very simple task, the process may add more overhead than value.

## Installation

The step-by-step installation guide is available at https://microsoft.github.io/devsquad-copilot/getting-started/

## My testing

The project is new, and I only started testing it recently. But I was quite impressed by its ability to perform in-depth analysis in complex environments. It doesn't seem worthwhile to me for small projects, minor changes, etc., since the coordination between agents and the additional steps made the process heavier and slower in my tests.

For truly complex environments, though, it seemed much more stable than “regular” Copilot CLI. I say “regular” because, in a way, it is still Copilot CLI, but with all this architecture behind it.
