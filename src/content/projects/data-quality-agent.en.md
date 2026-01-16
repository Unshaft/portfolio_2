---
title: "Data Quality Agent"
slug: "data-quality-agent_en"
locale: "en"
description: "An intelligent LLM-based agent to automatically validate, analyze and clean your datasets using LangChain."
stack: ["Python", "LangChain", "OpenAI", "Pandas", "Pydantic"]
image: "/img/data-quality-agent/preview.png"
github: "https://github.com/unshaft/data-quality-agent"
tag: ["Featured"]
translationOf: "data-quality-agent"
category: "perso"
startDate: "2025-09-01"
updatedDate: "2026-01-16"
---

## 🧩 Context

Data quality is a critical challenge in any data project. Rather than spending hours writing manual validation rules, I wanted to leverage the power of **Large Language Models** to create an agent capable of automatically analyzing, validating, and cleaning datasets.

This project combines my passion for **data engineering** with my growing interest in **AI agents** and the LangChain framework.

---

## ⚙️ Features

- **Automatic analysis** of dataset structure and content
- **Smart detection** of anomalies, missing values, and inconsistencies
- **Cleaning suggestions** based on business context
- **Schema validation** with Pydantic to ensure data integrity
- **Quality reports** generated automatically
- **Conversational interface** to query the agent about your data

---

## 🧠 Tech Stack

- **Python**: main language
- **LangChain**: agent orchestration and prompt chains
- **OpenAI API**: language model for intelligent analysis
- **Pandas**: data manipulation and transformation
- **Pydantic**: schema validation and strict typing

---

## 🔄 Architecture

The agent works in several stages:

1. **Ingestion**: loading the dataset (CSV, JSON, Parquet)
2. **Profiling**: statistical analysis and type detection
3. **Validation**: business rule verification via the LLM
4. **Cleaning**: automatic suggestions and corrections
5. **Report**: quality summary generation

---

## 🎯 Use Cases

- Data preparation before ML modeling
- Quality control of CSV files received from partners
- Audit of existing databases
- Automatic dataset documentation

---

## 🚧 Planned Improvements

- Support for additional data sources (SQL, APIs)
- Web interface with Streamlit or Gradio
- Integration with data pipelines (Airflow, Prefect)
- Batch mode for processing large volumes

---

## 🔗 Resources

- [View the code on GitHub](https://github.com/unshaft/data-quality-agent)