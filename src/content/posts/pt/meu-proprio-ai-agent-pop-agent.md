---
title: "Meu próprio AI Agent: Pop Agent"
description: "Um pequeno projeto pessoal que surgiu da vontade de entender, de fato, o que acontece dentro de um AI Agent."
date: 2026-09-16
tags: ["pop-agent", "ai-agents", "self-hosted", "open-source", "pi-agent", "llm"]
image: /images/posts/pop-agent-desktop.png
lang: pt
slug: meu-proprio-ai-agent-pop-agent
category: "IA & Ferramentas"
translations:
  en: meu-proprio-ai-agent-pop-agent
  es: meu-proprio-ai-agent-pop-agent
---

Oi, pessoal. Estou lançando meu próprio AI Agent: Pop Agent

Olha a carinha dele no Desktop/Web

![Pop Agent no Desktop e na Web](/images/posts/pop-agent-desktop.png)

É um pequeno projeto pessoal que surgiu da vontade de entender, de fato, o que acontece dentro de um AI Agent. Começou como um estudo, mas evoluiu bem e acabou se tornando o meu agente principal.

Há mais ou menos um ano e meio, criei meu primeiro agente em Python: um loop simples. Funcionou parcialmente. Encontrei erros, corrigi, apareceram mais erros, problemas com tool calls, corrigi, mais, erros, etc etc. Desisti e recomecei sei lá quantas vezes.

O Pop Agent foi a versão com a qual consegui chegar mais longe. Ele é baseado no Pi Agent, um dos meus agentes favoritos. Usando o SDK do Pi, pude focar mais na interface, banco de dados, memória, skills, integrações e outras partes do sistema.

Durante esse processo, o termo harness se popularizou, e percebi que era exatamente isso que eu estava construindo.

O Pop Agent é simples e, obviamente, pensado para resolver os meus problemas. Não tem a sofisticação dos projetos de grandes empresas e desenvolvedores, mas foquei no que mais me interessava:

## 1. Memória "infinita"

Queria que ele sempre se lembrasse do que já conversamos.

No início, pensei em usar algum tipo de RAG (gosto bastante do módulo FAISS, da Meta), mas percebi que, para a minha quantidade de dados, o FTS5, que já vem com o SQLite, me atenderia muito bem.

Com isso, consigo voltar a assuntos antigos sem precisar reexplicar todo o contexto.

## 2. Múltiplas interfaces

Tenho acesso ao mesmo agente pela Web, Desktop e CLI, seja no Windows, macOS e Linux. No celular, instalo um PWA como App, e fica super fluído.

Posso começar uma conversa na CLI, continuar no celular e, mais tarde, concluir no Desktop. É sempre o mesmo histórico e o mesmo agente.

Rodando no celular

![Pop Agent rodando no celular](/images/posts/pop-agent-mobile.jpg)

## 3. Acesso pela VPN

Coloquei ele 100% integrado à VPN do Tailscale. Ganho VPN e HTTPS prontos sem muito esforço, só usando a conta gratuita do Tailscale.

O agente não precisa ficar exposto diretamente à internet e permanece acessível nos meus dispositivos conectados à rede.

## 4. Skills, MCP, A2A e APIs REST

Tudo integrado. Só adicionar essas conexões usar.

## 5. Um mini-file server próprio

Eu envio arquivos pra ele, ele lê, salva em uma pasta, e podemos falar sobre o conteúdo. Se eu precisar desse arquivo, posso falar algo tipo:

> "Lembra aquele PDF/foto que te mandei sobre o assunto tal? Me manda ele aqui de novo".

Simples assim.

## 6. Tarefas agendadas

Posso pedir para ele executar alguma coisa em determinado horário, pesquisar um assunto periodicamente, atualizar arquivos e realizar outras tarefas em segundo plano.

## 7. Múltiplos provedores de LLM

Posso usar assinatura do ChatGPT, assinatura do GitHub Copilot, API da OpenAI, OpenRouter ou outros provedores compatíveis com a API da OpenAI.

Isso já atende bem ao meu uso atual, mas posso expandir o suporte a outros provedores no futuro.

## 8. Mensagens de áudio

Com transcrição local no servidor usando o Whisper. Atualmente uso o modelo base, que me atende bem, mas posso mudar para o tiny, small ou medium.

Também tenho a opção de adicionar um turn no LLM para revisar e melhorar a transcrição. Isso ajuda bastante quando o Whisper não entende corretamente algumas palavras, pois o LLM muitas vezes consegue corrigi-las pelo contexto.

## 9. Auto-Skills e Skill Router

Dois conceitos nos quais trabalhei bastante foram o Auto-Skill e o Skill Router.

Não estou dizendo que inventei essas ideias. Provavelmente existem outros agentes com funcionalidades parecidas, mas eu ainda não conheço outro que trabalhe dessa forma. Deve existir, só não conheço.

O conceito do Auto-Skill é: conforme converso com o agente, um processo em segundo plano roda a cada dez minutos e verifica se alguma conversa pode gerar uma nova skill. Pode ser algo útil para o futuro, um procedimento recorrente ou algum aprendizado que ajude o agente em tarefas semelhantes.

Quando encontra algo adequado, o processo cria uma Auto-Skill. Ela fica separada das skills Built-in, que vêm por padrão, e das Personal, que eu crio/adiciono manualmente.

O objetivo é fazer com que o agente melhore com o tempo e seja mais eficiente em tarefas repetitivas.

Obviamente, essa parte exigiu bastante cuidado. Tentei adicionar o máximo possível de verificações de segurança, e alguns tipos de conversa são automaticamente excluídos da análise. Uma conversa ser avaliada também não significa que uma nova skill será necessariamente criada: existem etapas de validação antes da publicação.

Pra complementar essa funcionalidade, criei também o Skill Router, que funciona como uma espécie de mini-RAG e seleciona quais skills devem entrar no contexto de cada turn.

Como o Auto-Skill pode criar inúmeras skills (o meu já estava com 35 Auto-Skills criadas nessa semana), o gerenciamento do tamanho da janela de contexto se tornou mais crítico. O Skill Router faz uma busca entre todas elas e seleciona somente as que parecem relevantes para aquela mensagem.

Gostei bastante do resultado do Auto-Skill e do Skill Router. Ainda sinto falta de métricas melhores para entender quantas vezes a seleção realmente ajudou, mas o feeling durante o uso é exatamente o que eu queria.

Parece que o agente sempre se lembra do assunto, entende rapidamente do que estou falando e fica um pouco mais preparado com o passar do tempo. A sensação é de que raramente preciso explicar a mesma coisa duas vezes.

Um exemplo comum acontece quando estou na rua resolvendo alguma coisa. Tiro uma foto, mando para ele, envio um áudio rápido, etc. Depois de alguns dias, volto ao assunto, e ele recupera a conversa, a foto e as informações relacionadas.

Pode parecer uma coisa pequena, mas era exatamente esse tipo de fluidez que eu queria ter em um AI Agent.

## Status atual

Claro que ainda existe bastante espaço para melhorias. Por exemplo, gostaria de encontrar uma forma de "ligar" para ele, como acontece hoje no ChatGPT, que tem uma experiência de voz muito boa.

Mesmo assim, o uso atual já atende muito bem ao que eu precisava.

Em resumo, o Pop Agent é o meu pequeno assistente pessoal.

O código está disponível no GitHub sob licença MIT. A instalação atualmente é voltada para servidores com Ubuntu Server 26.04. Caso exista interesse, posso verificar e melhorar o suporte à instalação em outros ambientes.

GitHub: https://github.com/viniciusbuscacio/pop-agent

Feedbacks, testes e contribuições são bem-vindos.
