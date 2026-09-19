---
title: DevSquad Copilot
description: O que é o DevSquad Copilot, como seus agentes trabalham e minhas primeiras experiências usando o framework.
date: 2026-09-19
tags: [github-copilot, ai-agents, devsquad, open-source]
image: /images/posts/devsquad-copilot-capa.png
lang: pt
slug: devsquad-copilot
category: IA & Ferramentas
translations:
  en: devsquad-copilot
  es: devsquad-copilot
---

O DevSquad Copilot é um framework de agentes de IA para desenvolvimento de software, integrado ao GitHub Copilot. O projeto está disponível no GitHub em https://github.com/microsoft/devsquad-copilot. O projeto usa licença MIT (https://github.com/microsoft/devsquad-copilot/blob/main/LICENSE).

Resumidamente, é um grupo de AI Agents especializados em desenvolvimento de software, que roda no VS Code (com a extensão GitHub Copilot Chat) ou no GitHub Copilot CLI, no terminal.

No total, são 12 agents + o orquestrador, chamado de Conductor ou simplesmente devsquad no ambiente. Inicialmente, você conversa com este Conductor, que é o agente de “entrada” no ambiente, mas pode falar com os outros agents diretamente caso queira.

## Os 12 especialistas

![Diagrama dos agentes do DevSquad Copilot](/images/posts/devsquad-copilot-agentes.png)

Os 12 agents são:

**init:** Prepara o projeto com arquivos de configuração, instruções e templates do framework.

**envision:** Ajuda a esclarecer o problema, os objetivos de negócio e o que significa sucesso.

**kickoff:** Organiza a estrutura do projeto e do board de trabalho.

**specify:** Escreve a especificação do próximo incremento, com escopo e critérios de aceitação.

**plan:** Define o plano técnico e registra decisões de arquitetura em ADRs.

**decompose:** Divide o trabalho em tarefas executáveis, podendo gerar itens no GitHub Issues ou Azure DevOps.

**implement:** Implementa as tarefas, com testes, verificações e preparação do PR.

**sprint:** Ajuda a planejar a sprint e a escolher seu escopo.

**review:** Revisa a implementação contra a especificação, as decisões de arquitetura e o plano.

**refine:** Revisa o backlog e ajusta especificações e decisões quando surgem novas descobertas.

**security:** Avalia segurança, tanto no desenho da solução quanto no código.

**extend:** Ajuda a criar extensões do framework: agentes, skills, instruções e hooks.

## O que acontece quando você fala com o Conductor?

Ele é a porta de entrada e o coordenador, não apenas um encaminhador de prompts.

Por exemplo, você diz: “Quero adicionar notificações por e-mail ao meu sistema.”

Ele identifica o contexto do projeto e a etapa atual e vai encaminhar a solicitação ao agent correto, receber a resposta e verificar o próximo passo (encaminhar para outro agent? devolver ao usuário alguma pergunta?).

Não é obrigatório que cada tarefa passe pelos 12 agentes. O Conductor escolhe o caminho conforme o estado do projeto e o impacto da mudança, envolvendo o usuário (você) nas decisões e aprovações necessárias.

As especificações, decisões de arquitetura e tarefas ficam registradas em arquivos e itens de trabalho, não apenas na conversa com os agents.

O objetivo do DevSquad é organizar a colaboração entre desenvolvedores e agentes de IA para entregar software com mais velocidade, mantendo qualidade, rastreabilidade e supervisão humana. De certa forma, ele faz mais sentido em projetos que precisam desse acompanhamento. Para um protótipo descartável ou uma tarefa muito simples, esse processo pode trazer mais trabalho do que benefício.

## Instalação

O passo a passo da instalação está em https://microsoft.github.io/devsquad-copilot/getting-started/

## Meus testes

O projeto é novo, e iniciei meus testes há pouco tempo. Mas me impressionou bastante a capacidade de análise profunda em ambientes complexos. Não me parece valer a pena em projetos pequenos, alterações leves, etc., pois a coordenação entre agentes e as etapas adicionais deixaram o processo mais pesado e demorado nos meus testes.

Mas, para ambientes de fato muito complexos, me pareceu muito mais estável do que o Copilot CLI “normal”. O “normal” aqui é porque, de certa forma, ele continua sendo o Copilot CLI, mas com toda essa arquitetura por trás.
