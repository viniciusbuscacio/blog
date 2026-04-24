---
title: "Convertendo documentos para MD pra facilitar a vida do seu agente de IA"
description: "Testei o MarkItDown — biblioteca open-source da Microsoft que converte PDF, Word, Excel, PowerPoint, HTML e até URLs em Markdown limpo. Ideal para pipelines de IA."
date: 2026-04-24
tags: ["microsoft", "ai", "python", "open-source", "llm", "markdown"]
image: /images/posts/markitdown-github.png
lang: pt
slug: markitdown-microsoft-markdown-converter
category: "IA & Ferramentas"
translations:
  en: markitdown-microsoft-markdown-converter
  es: markitdown-microsoft-markdown-converter
---

Convertendo documentos para MD pra facilitar a vida do seu agente de IA

Se você estiver trabalhando com seu agente de IA, já deve ter descoberto que as LLMs preferem o formado .MD para consumo e edição de informações. Porém, no mundo real, nós humamos trabalhamos com arquivos tipo PDF, DOCX, XLSX, etc. 

Obviamente, já existem várias bibliotecas que realizam a conversão desses tipos documentos para o formato MD. Mas te convido a experimentar o **MarkItDown**.

## O que é

[MarkItDown](https://github.com/microsoft/markitdown) é uma biblioteca Python open-source da Microsoft que converte diversos formatos de arquivo em **Markdown estruturado** — preservando headings, tabelas, listas, negrito, código e links.

Não é apenas extração de texto. É conversão semântica: um heading no Word vira `#`, uma tabela no Excel vira tabela Markdown, código em HTML vira code block.

O mais impressionante é a quantidade de formatos suportados:


| Formato | Observação |
|---------|------------|
| **DOCX** | Preserva headings, bold, listas, links — excelente |
| **HTML** | Converte perfeitamente: tabelas, code blocks, formatação |
| **CSV** | Vira tabela Markdown direto |
| **XLSX** | Tabelas por aba, células vazias viram NaN |
| **PPTX** | Texto por slide, sem imagens |
| **PDF** | Extrai texto ok, layout complexo se perde |
| **Imagens** | OCR + descrição via LLM (precisa API key OpenAI) |
| **Áudio** | Transcrição via speech-to-text |
| **YouTube** | Puxa transcrição automática do vídeo |
| **Wikipedia** | Converte artigos direto da URL |
| **RSS** | Parseia feeds |
| **EPUB** | Livros digitais |
| **Outlook MSG** | E-mails .msg |
| **Jupyter** | Notebooks .ipynb |

## Instalação

```bash
pip install markitdown          # core (texto, CSV, HTML)
pip install markitdown[pdf]     # + suporte PDF
pip install markitdown[docx]    # + suporte Word
pip install markitdown[all]     # todos os formatos
```

## Uso básico

**Python:**

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("relatorio.docx")
print(result.text_content)
```

**CLI:**

```bash
markitdown relatorio.docx
markitdown relatorio.docx -o relatorio.md
cat arquivo.html | markitdown
```

**URLs diretas:**

```python
result = md.convert("https://www.site.com/")
```

## Exemplo real: URL → Markdown

Testei convertendo a página do exame MS-102 direto do Microsoft Learn:

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("https://learn.microsoft.com/pt-br/credentials/certifications/exams/ms-102/")
print(result.text_content)
```

Resultado (trecho):

```markdown
# Exame MS-102: Administrador do Microsoft 365

Como administrador do Microsoft 365, você:

- Funciona como o hub de integração para todas as cargas
  de trabalho do Microsoft 365.
- Coordena várias cargas de trabalho do Microsoft 365.
- Trabalha com arquitetos e outros administradores...

Pontuação de aprovação: 700.
```

12.372 caracteres de conteúdo estruturado — metadata, listas, links, tudo preservado. Direto de uma URL pública, sem precisar baixar nada.

Pra salvar o resultado direto num arquivo `.md` via CLI:

```bash
markitdown relatorio.docx -o relatorio.md
```

### Onde pode não ser tão bom

**PDFs com layout complexo** (tabelas, múltiplas colunas, indentação) perdem a estrutura - o texto pode sair correto mas desorganizado. Pra OCR pesado em PDFs escaneados, ferramentas como Tesseract ou Azure Document Intelligence ainda são mais indicadas.

## Por que isso importa

Em 2026, praticamente todo pipeline de IA precisa converter documentos em texto estruturado em algum momento:

- **RAG (Retrieval Augmented Generation):** ingerir documentos corporativos
- **Agentes de IA:** ler e-mails, relatórios, planilhas
- **Fine-tuning:** preparar datasets a partir de docs existentes
- **Análise automatizada:** processar contratos, propostas, manuais

O MarkItDown resolve isso com **4 linhas de Python**, sem serviço externo, sem API key (exceto pra imagens/áudio), e com output que LLMs entendem nativamente.

## Conclusão

O MarkItDown preenche um espaço que faltava: **conversão leve, local e gratuita de documentos pra Markdown**. Não substitui OCR industrial nem análise de layout complexo de PDF — mas pra 90% dos casos de uso com LLMs (ingerir docs, alimentar RAG, processar planilhas), é a ferramenta certa.

É open-source, tem 552 KB, roda em qualquer lugar e um time interno da Microsoft mantém ativamente. Vale experimentar.

**Links:**
- [GitHub: microsoft/markitdown](https://github.com/microsoft/markitdown)
- [PyPI: markitdown](https://pypi.org/project/markitdown/)
```

---
