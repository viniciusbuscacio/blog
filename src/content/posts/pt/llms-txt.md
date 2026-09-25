---
title: LLMS.txt - Preparando seu site para AI Agents
description: Como usar o arquivo llms.txt para facilitar a consulta do seu site por AI Agents.
date: 2026-09-25
tags: [ai-agents, llms-txt, markdown]
lang: pt
slug: llms-txt
category: IA & Ferramentas
translations:
  en: llms-txt
  es: llms-txt
---

Quando pensamos em um site, normalmente pensamos em pessoas navegando por páginas, menus e links, com páginas HTML, Javascript sendo renderizado pelo navegador, etc. Mas agentes de IA também estão consultando esse conteúdo para responder perguntas e executar tarefas.

Para facilitar esse trabalho dos AI Agents, uma opção simples que tem sido adotada é o arquivo llms.txt.

Apesar da extensão .txt, ele usa Markdown para apresentar o site: descrição do conteúdo, informações importantes e links organizados para conteúdos relevantes. É como se fosse um “comece por aqui” para agentes.

Em vez de depender apenas da navegação pelas páginas, o agente pode consultar esse mapa, identificar as referências úteis e buscar os detalhes necessários. Quando bem organizado e efetivamente utilizado, isso pode reduzir navegação desnecessária e conteúdo irrelevante no contexto.

## Como criar?

Você pode publicar um arquivo em https://seusite.com/llms.txt — ou em uma seção, como /docs/llms.txt — com uma estrutura simples:

```markdown
# Minha Empresa
> Desenvolvemos soluções de gestão para pequenas empresas.

## Produto
- [Visão geral](https://seusite.com/produto.md): Recursos e público-alvo.
- [Planos](https://seusite.com/planos.md): Preços e limites de cada plano.

## Documentação
- [Primeiros passos](https://seusite.com/docs/inicio.md): Guia inicial.
- [API](https://seusite.com/docs/api.md): Referência para integrações.

## Suporte
- [Perguntas frequentes](https://seusite.com/faq.md): Dúvidas comuns.
```

Use links reais, descrições objetivas e mantenha o conteúdo atualizado. Quando possível, ofereça também versões em Markdown das páginas.

## Exemplos para explorar

Microsoft AI Foundry: https://raw.githubusercontent.com/microsoft/skills/e27a68881a3b8bb906cc5ef00877a9a80f521bf6/docs/llms.txt

Claude Code: https://code.claude.com/docs/llms.txt

OpenAI API Docs: https://developers.openai.com/api/docs/llms.txt

## O que ele não faz?

O llms.txt é uma convenção proposta, não uma garantia de adoção universal. Publicá-lo não garante que seu site será consultado, citado ou terá melhor posicionamento nas buscas.

Também não substitui o robots.txt, não controla permissões de acesso e não “treina a IA” automaticamente. Seu objetivo é somente oferecer um caminho mais curto e claro até a informação que interessa ao AI Agent.

Não é preciso reconstruir o site para começar. Um pequeno arquivo, bem atualizado, já pode ser um ponto de entrada útil pra AI Agents.

Mais sobre a proposta: https://llmstxt.org/
