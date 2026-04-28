---
title: "Convirtiendo documentos a MD para facilitarle la vida a tu agente de IA"
description: "Probé MarkItDown — biblioteca open-source de Microsoft que convierte PDF, Word, Excel, PowerPoint, HTML y hasta URLs en Markdown limpio. Ideal para pipelines de IA."
date: 2026-04-24
tags: ["microsoft", "ai", "python", "open-source", "llm", "markdown"]
image: /images/posts/markitdown-github.png
lang: es
slug: markitdown-microsoft-markdown-converter
category: "IA & Herramientas"
translations:
  en: markitdown-microsoft-markdown-converter
  pt: markitdown-microsoft-markdown-converter
---

Si estás trabajando con tu agente de IA, probablemente ya descubriste que las LLMs prefieren el formato .MD para consumir y editar información. Sin embargo, en el mundo real, los humanos trabajamos con archivos tipo PDF, DOCX, XLSX, etc.

Obviamente, ya existen varias bibliotecas que realizan la conversión de este tipo de documentos al formato MD. Pero te invito a probar **MarkItDown**.

## Qué es

[MarkItDown](https://github.com/microsoft/markitdown) es una biblioteca Python open-source de Microsoft que convierte diversos formatos de archivo en **Markdown estructurado** — preservando headings, tablas, listas, negritas, código y links.

No es solo extracción de texto. Es conversión semántica: un heading en Word se convierte en `#`, una tabla en Excel se convierte en tabla Markdown, código en HTML se convierte en code block.

Lo más impresionante es la cantidad de formatos soportados:


| Formato | Observación |
|---------|------------|
| **DOCX** | Preserva headings, bold, listas, links — excelente |
| **HTML** | Convierte perfectamente: tablas, code blocks, formato |
| **CSV** | Se convierte en tabla Markdown directamente |
| **XLSX** | Tablas por hoja, celdas vacías se convierten en NaN |
| **PPTX** | Texto por diapositiva, sin imágenes |
| **PDF** | Extrae texto ok, layouts complejos se pierden |
| **Imágenes** | OCR + descripción vía LLM (requiere API key de OpenAI) |
| **Audio** | Transcripción vía speech-to-text |
| **YouTube** | Obtiene la transcripción automática del video |
| **Wikipedia** | Convierte artículos directo desde la URL |
| **RSS** | Parsea feeds |
| **EPUB** | Libros digitales |
| **Outlook MSG** | Correos .msg |
| **Jupyter** | Notebooks .ipynb |

## Instalación

```bash
pip install markitdown          # core (texto, CSV, HTML)
pip install markitdown[pdf]     # + soporte PDF
pip install markitdown[docx]    # + soporte Word
pip install markitdown[all]     # todos los formatos
```

## Uso básico

**Python:**

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("reporte.docx")
print(result.text_content)
```

**CLI:**

```bash
markitdown reporte.docx
markitdown reporte.docx -o reporte.md
cat archivo.html | markitdown
```

**URLs directas:**

```python
result = md.convert("https://www.site.com/")
```

## Ejemplo real: URL → Markdown

Probé convirtiendo la página del examen MS-102 directo desde Microsoft Learn:

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("https://learn.microsoft.com/pt-br/credentials/certifications/exams/ms-102/")
print(result.text_content)
```

Resultado (fragmento):

```markdown
# Examen MS-102: Administrador de Microsoft 365

Como administrador de Microsoft 365, usted:

- Funciona como el hub de integración para todas las cargas
  de trabajo de Microsoft 365.
- Coordina múltiples cargas de trabajo de Microsoft 365.
- Trabaja con arquitectos y otros administradores...

Puntuación de aprobación: 700.
```

12.372 caracteres de contenido estructurado — metadata, listas, links, todo preservado. Directo desde una URL pública, sin necesidad de descargar nada.

Para guardar el resultado directamente en un archivo `.md` vía CLI:

```bash
markitdown reporte.docx -o reporte.md
```

### Donde puede no ser tan bueno

**PDFs con layout complejo** (tablas, múltiples columnas, indentación) pierden la estructura — el texto puede salir correcto pero desorganizado. Para OCR pesado en PDFs escaneados, herramientas como Tesseract o Azure Document Intelligence siguen siendo más indicadas.

## Por qué esto importa

En 2026, prácticamente todo pipeline de IA necesita convertir documentos en texto estructurado en algún momento:

- **RAG (Retrieval Augmented Generation):** ingerir documentos corporativos
- **Agentes de IA:** leer correos, reportes, hojas de cálculo
- **Fine-tuning:** preparar datasets a partir de documentos existentes
- **Análisis automatizado:** procesar contratos, propuestas, manuales

MarkItDown resuelve esto con **4 líneas de Python**, sin servicio externo, sin API key (excepto para imágenes/audio), y con output que las LLMs entienden nativamente.

## Conclusión

MarkItDown llena un espacio que faltaba: **conversión ligera, local y gratuita de documentos a Markdown**. No sustituye OCR industrial ni análisis de layout complejo de PDF — pero para el 90% de los casos de uso con LLMs (ingerir documentos, alimentar RAG, procesar hojas de cálculo), es la herramienta correcta.

Es open-source, tiene 552 KB, corre en cualquier lugar y un equipo interno de Microsoft lo mantiene activamente. Vale la pena probarlo.

**Links:**
- [GitHub: microsoft/markitdown](https://github.com/microsoft/markitdown)
- [PyPI: markitdown](https://pypi.org/project/markitdown/)
```

---
