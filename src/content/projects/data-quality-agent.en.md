---
title: "Data Quality Agent"
slug: "data-quality-agent_en"
locale: "en"
description: "Intelligent data validation pipeline combining business rules and LLM (Claude) with RAG architecture for automated ACCEPT/WARNING/REJECT decisions."
stack: ["Python", "LangGraph", "LangChain", "Claude API", "ChromaDB", "Pandas"]
image: "/img/data-quality-agent/preview.png"
github: "https://github.com/unshaft/data-quality-agent"
tag: ["Featured"]
translationOf: "data-quality-agent"
category: "perso"
startDate: "2025-09-01"
updatedDate: "2026-01-16"
---

## 🧩 Context

Data quality is a critical challenge in any data project. Rather than writing static validation rules, I created an **intelligent agent** that combines documented business rules with the power of **LLMs** to make contextual decisions.

This project demonstrates my expertise in **modern AI agents** with LangGraph and **RAG** (Retrieval-Augmented Generation) architecture.

---

## 🏗️ 3-Layer Architecture

The pipeline follows a modular architecture:

```text
📊 Profiling → 🔍 RAG → 🤖 Agent → ✅ Decision
```

1. **Profiling**: Complete statistical analysis of the dataset (types, nulls, distributions, outliers)
2. **RAG Layer**: Contextual retrieval of relevant business rules via ChromaDB
3. **Agent Layer**: Final decision with LangGraph orchestrating the reasoning

---

## 🔀 Two Validation Modes

### V1 - Rules Mode (fast & free)

- Validation based on **10 documented business rules** (DQ-01 to DQ-10)
- No API calls, instant execution
- Perfect for CI/CD and large volumes

### V2 - LLM Mode (intelligent & adaptive)

- **Claude (Anthropic)** for contextual analysis
- **ChromaDB** + sentence-transformers for RAG
- Complex anomaly detection and smart suggestions
- Nuanced decisions based on business context

---

## ⚙️ Key Features

- **Automated decisions**: ACCEPT ✅ / WARNING ⚠️ / REJECT ❌
- **Batch processing**: Validate multiple files in parallel
- **30+ unit tests**: Complete coverage with pytest
- **Visual reports**: JSON and HTML export with detailed metrics
- **10 quality rules**: From DQ-01 (null values) to DQ-10 (date format)
- **Extensible architecture**: Easy addition of new rules

---

## 🧠 Tech Stack

| Component | Technology |
| --------- | ---------- |
| Orchestration | **LangGraph** |
| LLM Chains | **LangChain** |
| AI Model | **Claude (Anthropic)** |
| Vector Store | **ChromaDB** |
| Embeddings | **sentence-transformers** |
| Data | **Pandas**, **NumPy** |
| Tests | **pytest** (30+ tests) |

---

## 📋 Quality Rules (excerpt)

| Code | Rule | Threshold |
| ---- | ---- | --------- |
| DQ-01 | Null values | < 5% per column |
| DQ-02 | Duplicates | 0 duplicate rows |
| DQ-03 | Consistent types | 100% compliance |
| DQ-05 | Outliers | < 1% per numeric column |
| DQ-10 | Date format | ISO 8601 required |

---

## 🎯 Use Cases

- **Data Engineering**: Automatic validation in ETL pipelines
- **CI/CD**: Quality gate before data deployment
- **Audit**: Compliance reports for partner datasets
- **ML Ops**: Training data quality control

---

## 🔗 Resources

- [Source code on GitHub](https://github.com/unshaft/data-quality-agent)
- Rules documentation: `rules/dq_rules.md`
