---
title: "🏸 Classificateur de coups au badminton"
slug: "badminton-ml_fr"
locale: "fr"
description: "Un module de machine learning pour identifier les coups dans un match de badminton, et aider les joueurs à mieux se connaître."
stack: ["Python", "scikit-learn", "OpenCV", "MediaPipe", "Pandas"]
image: "/img/process.png"
github: "" # à compléter
tag: ["Bientôt disponible"]
translationOf: "badminton-ml"
category: "perso"
order: 6
startDate: "2024-10-01"
endDate: ""
updatedDate: "2025-07-24"
---

## 🧩 Contexte

Ce projet s’inscrit dans **DataBad**, mon initiative personnelle pour permettre aux joueurs de badminton d’analyser leurs matchs à l’aide des données.  
L’objectif global est de mieux comprendre son propre style de jeu, d’identifier des axes de progression et de faciliter l'entraînement personnalisé.

Ce classificateur de coups constitue l’un des modules de cette suite : il vise à identifier automatiquement, à partir de la vidéo d’un match, les types de coups joués (smash, dégagement, amorti, etc.).

Pensé d’abord pour moi, il a vocation à être utile à terme pour des **joueurs, coachs, clubs ou fédérations** souhaitant exploiter la data dans leur stratégie.

---

## 🎯 Objectifs

- Identifier le **début et la fin de chaque point**
- Détecter les **services** et scorer automatiquement
- Classifier les **types de coups** joués (à venir)
- Permettre une analyse post-match des séquences et des highlights
- Offrir une base solide pour le coaching individualisé

---

## 🎥 Données et annotations

Le projet repose sur des vidéos filmées lors de mes propres matchs (plusieurs heures de rush).  
Je prévois d’annoter manuellement les premières séquences pour constituer un jeu d’apprentissage, en intégrant :

- Le timecode des services
- Le début/fin de point
- Le type de coup (par la suite)

---

## 🧠 Pipeline technique

Le pipeline s’articule ainsi :

1. **Détection de pose** via MediaPipe
2. Extraction des **features** par image (position, mouvement, statique/dynamique…)
3. Passage dans un modèle ML
4. Prédiction du type de coup

- Traitement à **30 FPS**
- Extraction de features avec OpenCV et Pandas
- Annotation prévue dans un format standard (CSV ou JSON)

---

## 🤖 Machine Learning

- Modèle initial : **Random Forest**
- Enregistrement avec **joblib**
- Évaluation prévue : **accuracy**, **matrice de confusion**, **courbe ROC**, **AUC**
- Possibilité d’évolution vers du **deep learning** si besoin

Le tout sera développé en notebook dans un premier temps, puis structuré en modules Python réutilisables.

---

## 🧩 Intégration DataBad

Ce module sera intégré à la partie **review de match** de DataBad, pour fournir à l’utilisateur un **résumé automatique** des coups et points joués.

L’idée est de permettre, à terme :
- des **analyses statistiques ciblées** (ex. taux de smash gagnants)
- des **highlights vidéo automatiques**
- une **restitution visuelle des prédictions dans la vidéo**

Le fonctionnement restera local, avec une interface pensée pour le joueur individuel.

---

## 🚧 Statut

Le projet est encore en **phase de prototype**.  
L’étape suivante sera :
- l’annotation manuelle des premiers matchs
- le test de modèles simples
- l’évaluation sur un petit jeu de données

---
