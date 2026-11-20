---
title: "Microsoft Roadmap 571400 — UBB models coming to Copilot Chat"
description: "Roadmap 571400 brings UBB models to the Copilot Chat model selector, with Copilot Credits as an option beyond USL usage limits."
date: 2026-11-20
tags: [microsoft-copilot, copilot-chat, licensing, roadmap]
lang: en
slug: roadmap-571400-ubb-copilot-chat
category: AI & Tools
translations:
  pt: roadmap-571400-ubb-copilot-chat
  es: roadmap-571400-ubb-copilot-chat
---

While researching a question for a customer, I came across Roadmap Item 571400 and thought it was worth sharing:

**Microsoft Copilot (Microsoft 365): Chat: Access to UBB models via the model selector**

> Users will be able to access models that require usage-based billing (UBB) from the model selector in Chat. Tenant admins will need to allocate credits so that users can interact with these models. If users consume their allotted credits, they will be able to request credits from their tenant admins.

**Expected preview:** November 2026  
**Expected rollout start:** December 2026

Basically, this update will provide access to models with usage-based billing directly from the model selector in Copilot Chat.

This is useful for people who frequently use more advanced models and run into usage limits. Microsoft’s licensing documentation describes an option, still marked as *coming soon*, to continue using these capabilities through UBB (*Usage-based billing*) after reaching the limits included in their user subscription license (USL).

Taken together, these two sources describe a scenario where users can choose models available through UBB in the Chat model selector, consuming Copilot Credits. To enable this, an administrator will need to configure a billing policy and allocate credits. If users exhaust their allocated credits, the roadmap includes the ability to request more from their administrator.

UBB is the consumption-based billing approach also used for experiences such as Copilot Cowork, Code, and Autopilot. It complements the user subscription license rather than replacing it.

Another interesting point is that the UBB documentation mentions models such as Astra and Fable. Item 571400 does not yet specify which models will be available in the Chat model selector, so that is something to follow as the feature becomes available.

Roadmap dates are estimates and may change.

**References:**
- [Roadmap Item 571400](https://www.microsoft.com/en-us/microsoft-365/roadmap?filters=&searchterms=571400)
- [Understanding the user subscription license (USL) and usage-based billing (UBB)](https://learn.microsoft.com/en-us/copilot/plan/user-subscription-license-usage-based-billing)
