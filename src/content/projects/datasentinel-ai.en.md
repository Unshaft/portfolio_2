---
title: "DataSentinel AI"
slug: "datasentinel-ai_en"
locale: "en"
description: "Multi-agent AI system for autonomous data quality analysis, detection and correction with full explainability."
stack: ["Python", "FastAPI", "LangChain", "Claude API", "ChromaDB", "Scikit-learn", "Docker"]
image: "/img/datasentinel-ai/preview.png"
github: "https://github.com/Unshaft/datasentinel-ai"
tag: ["Featured"]
translationOf: "datasentinel-ai"
category: "perso"
startDate: "2026-01-01"
updatedDate: "2026-01-16"
---

## 🧩 Context

Data teams spend considerable time manually identifying and fixing quality issues. I created **DataSentinel AI**, a **multi-agent system** that automates this process with full explainability for every decision.

This project demonstrates my expertise in **multi-agent LLM architecture** and **applied ML** for data quality.

---

## 🏗️ Multi-Agent Architecture

```text
┌─────────────────────────────────────────────────────┐
│                  Orchestrator Agent                  │
│              (Coordination & Routing)                │
└──────────┬──────────┬──────────┬──────────┬────────┘
           │          │          │          │
     ┌─────▼────┐ ┌───▼────┐ ┌───▼────┐ ┌───▼─────┐
     │ Profiler │ │Quality │ │Corrector│ │Validator│
     │  Agent   │ │ Agent  │ │  Agent  │ │  Agent  │
     └──────────┘ └────────┘ └─────────┘ └─────────┘
```

**5 specialized agents:**

- **Orchestrator**: Pipeline coordination and intelligent routing
- **Profiler**: Statistical analysis and data profiling
- **Quality**: Anomaly and issue detection
- **Corrector**: Justified correction recommendations
- **Validator**: Business rule validation

---

## ⚙️ Detection Capabilities

### Statistical Anomalies

- **Isolation Forest** for outlier detection
- Transparent confidence scoring

### Distribution Drift

- **Kolmogorov-Smirnov test** (KS-test)
- **Population Stability Index** (PSI)

### Business Violations

- Configurable rules stored in ChromaDB
- Contextual validation via RAG

### Missing Values

- Configurable thresholds per column
- Suggested correction strategies

---

## 🧠 Tech Stack

| Component | Technology |
| --------- | ---------- |
| API | **FastAPI** |
| Agent orchestration | **LangChain** |
| AI Model | **Claude (Anthropic)** |
| Vector Store | **ChromaDB** |
| ML / Anomalies | **Scikit-learn** (Isolation Forest) |
| Validation | **Pydantic** |
| Containerization | **Docker** + **Docker Compose** |
| Tests | **Pytest** |

---

## 🔍 Explainability (XAI)

Every decision comes with:

- **Detailed justification** of the reasoning
- **Transparent confidence score**
- **Queryable decision history**
- **Feedback loop** for continuous improvement

---

## 🌐 RESTful API

| Endpoint | Description |
| -------- | ----------- |
| `POST /analyze` | Dataset analysis and detection |
| `POST /recommend` | Correction proposals |
| `POST /explain` | Decision justification |
| `POST /feedback` | Record user feedback |
| `GET /feedback/rules` | Business rule management |
| `GET /health` | System status |

---

## 📁 Project Structure

```text
src/
├── api/          # FastAPI endpoints
├── agents/       # LangChain implementations
├── tools/        # Custom agent tools
├── memory/       # ChromaDB integrations
├── ml/           # Detection algorithms
└── core/         # Configuration
tests/            # Pytest suite
data/rules/       # Default business rules
```

---

## 🎯 Use Cases

- **Data Engineering**: Quality gate in ETL pipelines
- **MLOps**: Training data validation
- **Audit**: Compliance and decision traceability
- **Governance**: Centralized and versioned business rules

---

## 🔗 Resources

- [Source code on GitHub](https://github.com/Unshaft/datasentinel-ai)