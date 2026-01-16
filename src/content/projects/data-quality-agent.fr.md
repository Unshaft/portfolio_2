---
title: "Data Quality Agent"
slug: "data-quality-agent_fr"
locale: "fr"
description: "Pipeline intelligent de validation de données combinant règles métier et LLM (Claude) avec architecture RAG pour des décisions automatisées ACCEPT/WARNING/REJECT."
stack: ["Python", "LangGraph", "LangChain", "Claude API", "ChromaDB", "Pandas"]
image: "/img/data-quality-agent/preview.png"
github: "https://github.com/unshaft/data-quality-agent"
tag: ["À la une"]
translationOf: "data-quality-agent"
category: "perso"
order: 2
startDate: "2025-09-01"
updatedDate: "2026-01-16"
---

## 🧩 Contexte

La qualité des données est un enjeu critique dans tout projet data. Plutôt que d'écrire des règles de validation statiques, j'ai créé un **agent intelligent** capable de combiner des règles métier documentées avec la puissance des **LLMs** pour prendre des décisions contextuelles.

Ce projet illustre ma maîtrise des **agents IA modernes** avec LangGraph et de l'architecture **RAG** (Retrieval-Augmented Generation).

---

## 🏗️ Architecture en 3 couches

Le pipeline fonctionne selon une architecture modulaire :

```
📊 Profiling → 🔍 RAG → 🤖 Agent → ✅ Décision
```

1. **Profiling** : Analyse statistique complète du dataset (types, nulls, distributions, outliers)
2. **RAG Layer** : Récupération contextuelle des règles métier pertinentes via ChromaDB
3. **Agent Layer** : Décision finale avec LangGraph orchestrant le raisonnement

---

## 🔀 Deux modes de validation

### V1 - Mode Règles (rapide & gratuit)
- Validation basée sur **10 règles métier documentées** (DQ-01 à DQ-10)
- Aucun appel API, exécution instantanée
- Parfait pour le CI/CD et les gros volumes

### V2 - Mode LLM (intelligent & adaptatif)
- **Claude (Anthropic)** pour l'analyse contextuelle
- **ChromaDB** + sentence-transformers pour le RAG
- Détection d'anomalies complexes et suggestions intelligentes
- Décisions nuancées basées sur le contexte métier

---

## ⚙️ Fonctionnalités clés

- **Décisions automatisées** : ACCEPT ✅ / WARNING ⚠️ / REJECT ❌
- **Traitement batch** : Validation de multiples fichiers en parallèle
- **30+ tests unitaires** : Couverture complète avec pytest
- **Rapports visuels** : Export JSON et HTML avec métriques détaillées
- **10 règles de qualité** : De DQ-01 (valeurs nulles) à DQ-10 (format dates)
- **Architecture extensible** : Ajout facile de nouvelles règles

---

## 🧠 Stack technique

| Composant | Technologie |
|-----------|-------------|
| Orchestration | **LangGraph** |
| Chaînes LLM | **LangChain** |
| Modèle IA | **Claude (Anthropic)** |
| Vector Store | **ChromaDB** |
| Embeddings | **sentence-transformers** |
| Data | **Pandas**, **NumPy** |
| Tests | **pytest** (30+ tests) |

---

## 📋 Règles de qualité (extrait)

| Code | Règle | Seuil |
|------|-------|-------|
| DQ-01 | Valeurs nulles | < 5% par colonne |
| DQ-02 | Doublons | 0 ligne dupliquée |
| DQ-03 | Types cohérents | 100% conformité |
| DQ-05 | Outliers | < 1% par colonne numérique |
| DQ-10 | Format dates | ISO 8601 requis |

---

## 🎯 Cas d'usage

- **Data Engineering** : Validation automatique dans les pipelines ETL
- **CI/CD** : Gate de qualité avant déploiement de données
- **Audit** : Rapport de conformité pour datasets partenaires
- **ML Ops** : Contrôle qualité des données d'entraînement

---

## 🔗 Ressources

- [Code source sur GitHub](https://github.com/unshaft/data-quality-agent)
- Documentation des règles : `rules/dq_rules.md`
