---
title: "DataSentinel AI"
slug: "datasentinel-ai_fr"
locale: "fr"
description: "Système multi-agents IA pour l'analyse, la détection et la correction autonome des problèmes de qualité de données avec explicabilité complète."
stack: ["Python", "FastAPI", "LangChain", "Claude API", "ChromaDB", "Scikit-learn", "Docker"]
image: "/img/datasentinel-ai/preview.png"
github: "https://github.com/Unshaft/datasentinel-ai"
tag: ["À la une"]
translationOf: "datasentinel-ai"
category: "perso"
order: 1
startDate: "2026-01-01"
updatedDate: "2026-01-16"
---

## 🧩 Contexte

Les équipes data passent un temps considérable à identifier et corriger manuellement les problèmes de qualité. J'ai créé **DataSentinel AI**, un système **multi-agents** qui automatise ce processus avec une explicabilité totale de chaque décision.

Ce projet démontre mon expertise en **architecture multi-agents LLM** et en **ML appliqué** à la qualité des données.

---

## 🏗️ Architecture Multi-Agents

```text
┌─────────────────────────────────────────────────────┐
│                  Orchestrator Agent                  │
│            (Coordination & Routage)                  │
└──────────┬──────────┬──────────┬──────────┬────────┘
           │          │          │          │
     ┌─────▼────┐ ┌───▼────┐ ┌───▼────┐ ┌───▼─────┐
     │ Profiler │ │Quality │ │Corrector│ │Validator│
     │  Agent   │ │ Agent  │ │  Agent  │ │  Agent  │
     └──────────┘ └────────┘ └─────────┘ └─────────┘
```

**5 agents spécialisés :**

- **Orchestrator** : Coordination du pipeline et routage intelligent
- **Profiler** : Analyse statistique et profilage des données
- **Quality** : Détection d'anomalies et de problèmes
- **Corrector** : Recommandations de correction justifiées
- **Validator** : Validation des règles métier

---

## ⚙️ Capacités de détection

### Anomalies statistiques

- **Isolation Forest** pour la détection d'outliers
- Scoring de confiance transparent

### Drift de distribution

- **Test de Kolmogorov-Smirnov** (KS-test)
- **Population Stability Index** (PSI)

### Violations métier

- Règles configurables stockées dans ChromaDB
- Validation contextuelle via RAG

### Valeurs manquantes

- Seuils configurables par colonne
- Stratégies de correction suggérées

---

## 🧠 Stack technique

| Composant | Technologie |
| --------- | ----------- |
| API | **FastAPI** |
| Orchestration agents | **LangChain** |
| Modèle IA | **Claude (Anthropic)** |
| Vector Store | **ChromaDB** |
| ML / Anomalies | **Scikit-learn** (Isolation Forest) |
| Validation | **Pydantic** |
| Conteneurisation | **Docker** + **Docker Compose** |
| Tests | **Pytest** |

---

## 🔍 Explicabilité (XAI)

Chaque décision est accompagnée de :

- **Justification détaillée** du raisonnement
- **Score de confiance** transparent
- **Historique des décisions** consultable
- **Boucle de feedback** pour amélioration continue

---

## 🌐 API RESTful

| Endpoint | Description |
| -------- | ----------- |
| `POST /analyze` | Analyse du dataset et détection |
| `POST /recommend` | Propositions de correction |
| `POST /explain` | Justification des décisions |
| `POST /feedback` | Enregistrement du feedback utilisateur |
| `GET /feedback/rules` | Gestion des règles métier |
| `GET /health` | Statut du système |

---

## 📁 Structure du projet

```text
src/
├── api/          # Endpoints FastAPI
├── agents/       # Implémentations LangChain
├── tools/        # Outils custom pour agents
├── memory/       # Intégrations ChromaDB
├── ml/           # Algorithmes de détection
└── core/         # Configuration
tests/            # Suite Pytest
data/rules/       # Règles métier par défaut
```

---

## 🎯 Cas d'usage

- **Data Engineering** : Gate de qualité dans les pipelines ETL
- **MLOps** : Validation des données d'entraînement
- **Audit** : Conformité et traçabilité des décisions
- **Gouvernance** : Règles métier centralisées et versionnées

---

## 🔗 Ressources

- [Code source sur GitHub](https://github.com/Unshaft/datasentinel-ai)