---
title: "Converting documents to MD to make your AI agent's life easier"
description: "I tested MarkItDown — Microsoft's open-source library that converts PDF, Word, Excel, PowerPoint, HTML, and even URLs to clean Markdown. Ideal for AI pipelines."
date: 2026-04-24
tags: ["microsoft", "ai", "python", "open-source", "llm", "markdown"]
lang: en
slug: markitdown-microsoft-markdown-converter
category: "AI & Tools"
translations:
  pt: markitdown-microsoft-markdown-converter
  es: markitdown-microsoft-markdown-converter
---

If you work with LLMs, you already know: **input format matters**. Language models understand Markdown far better than raw HTML, unstructured text extracted from PDFs, or binary spreadsheet formats.

The problem is that in the real world, information lives in `.docx`, `.pdf`, `.xlsx`, `.pptx`, `.html` — and converting all of that into something an AI can process well has always been tedious.

That's where **MarkItDown** comes in.

## What it is

[MarkItDown](https://github.com/microsoft/markitdown) is an open-source Python library from Microsoft that converts various file formats into **structured Markdown** — preserving headings, tables, lists, bold text, code, and links.

It's not just text extraction. It's semantic conversion: a Word heading becomes `#`, an Excel table becomes a Markdown table, HTML code becomes a code block.

## Supported formats

MarkItDown includes **18 built-in converters**:

| Format | Notes |
|--------|-------|
| **DOCX** | Preserves headings, bold, lists, links — excellent |
| **HTML** | Perfect conversion: tables, code blocks, formatting |
| **CSV** | Becomes a Markdown table directly |
| **XLSX** | Tables per sheet, empty cells become NaN |
| **PPTX** | Text per slide, no images |
| **PDF** | Text extraction ok, complex layouts break |
| **Images** | OCR + LLM description (requires OpenAI API key) |
| **Audio** | Transcription via speech-to-text |
| **YouTube** | Pulls automatic video transcription |
| **Wikipedia** | Converts articles directly from URL |
| **RSS** | Parses feeds |
| **EPUB** | Digital books |
| **Outlook MSG** | .msg emails |
| **Jupyter** | .ipynb notebooks |

## Installation

```bash
pip install markitdown          # core (text, CSV, HTML)
pip install markitdown[pdf]     # + PDF support
pip install markitdown[docx]    # + Word support
pip install markitdown[all]     # all formats

> ⚠️ In version 0.1.5, `[all]` may have dependency conflicts on Python 3.14. Installing per format works better: `pip install markitdown[pdf,docx,pptx,xlsx]`

## Basic usage

**Python:**

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("report.docx")
print(result.text_content)

**CLI:**

```bash
markitdown report.docx
markitdown report.docx -o report.md
cat file.html | markitdown

**Direct URLs:**

```python
result = md.convert("https://www.site.com/")

## Real example: URL → Markdown

I tested converting the MS-102 exam page directly from Microsoft Learn:

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("https://learn.microsoft.com/pt-br/credentials/certifications/exams/ms-102/")
print(result.text_content)

Result (excerpt):

```markdown
# Exame MS-102: Administrador do Microsoft 365

Como administrador do Microsoft 365, você:

- Funciona como o hub de integração para todas as cargas
  de trabalho do Microsoft 365.
- Coordena várias cargas de trabalho do Microsoft 365.
- Trabalha com arquitetos e outros administradores...

Pontuação de aprovação: 700.

12,372 characters of structured content — metadata, lists, links, all preserved. Straight from a public URL, no download needed.

To save the result directly to a `.md` file via CLI:

```bash
markitdown report.docx -o report.md

### Where it might not be as strong

**PDFs with complex layouts** (tables, multiple columns, indentation) can lose their structure — the text may come out correct but disorganized. For heavy OCR on scanned PDFs, tools like Tesseract or Azure Document Intelligence may still be more appropriate.

## Why this matters

In 2026, virtually every AI pipeline needs to convert documents to structured text at some point:

- **RAG (Retrieval Augmented Generation):** ingesting corporate documents
- **AI Agents:** reading emails, reports, spreadsheets
- **Fine-tuning:** preparing datasets from existing docs
- **Automated analysis:** processing contracts, proposals, manuals

MarkItDown solves this with **4 lines of Python**, no external service, no API key (except for images/audio), and output that LLMs natively understand.

## Conclusion

MarkItDown fills a gap that was missing: **lightweight, local, and free document-to-Markdown conversion**. It doesn't replace industrial OCR or complex PDF layout analysis — but for 90% of LLM use cases (ingesting docs, feeding RAG, processing spreadsheets), it's the right tool.

It's open-source, weighs 552 KB, runs anywhere, and an internal Microsoft team actively maintains it. Worth trying.

**Links:**
- [GitHub: microsoft/markitdown](https://github.com/microsoft/markitdown)
- [PyPI: markitdown](https://pypi.org/project/markitdown/)

---
