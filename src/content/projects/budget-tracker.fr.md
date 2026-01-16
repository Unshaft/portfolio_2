---
title: "Budget Tracker"
slug: "budget-tracker_fr"
locale: "fr"
description: "Un tableau de bord interactif et évolutif pour suivre nos finances communes, analyser les dépenses et maîtriser notre budget."
stack: ["Python", "Pandas", "Streamlit", "SQLite"]
image: "/img/screen_dashboard_1.png"
github: "https://github.com/unshaft/budget-tracker"
tag: ["À la une"]
translationOf: "budget-tracker"
category: "perso"
order: 5
startDate: "2025-01-07"
endDate: "2025-07-20"
updatedDate: "2025-07-20"
---

## 🧩 Contexte

Ce projet est né d’un besoin très concret : mieux comprendre où partait l’argent de notre compte commun avec ma compagne.  
Ne souhaitant pas utiliser une application bancaire externe (souvent payante ou peu flexible), j’ai décidé de créer **ma propre solution**, pensée pour durer et évoluer avec nos habitudes.

Je voulais un outil local, personnalisable, simple à prendre en main, mais assez puissant pour offrir une vraie **visibilité budgétaire**.

---

## ⚙️ Fonctionnalités

- **Import sécurisé** de fichiers CSV issus de notre banque
- **Ajout manuel** de transactions ponctuelles
- **Historique complet** de plus de 400 opérations
- **Détection des doublons** via un identifiant unique (titre + date + montant)
- **Analyse des soldes, revenus, dépenses, catégories**
- **Propositions budgétaires automatiques** pour les mois à venir
- **Système de validation** et de pointage des transactions
- **Archivage** des données pour éviter toute perte

---

## 🖥️ Structure de l’application

L’application s’organise autour de 5 modules principaux :

1. **Dashboard** : aperçu des indicateurs clés (solde, revenus, dépenses, alertes…)
2. **Import CSV** : traitement sécurisé des données bancaires
3. **Proposition de budget** : répartition intelligente des postes de dépense
4. **Analyse graphique** : évolution des finances, camemberts et histogrammes interactifs
5. **Éditeur de transactions** : recherche, modification, catégorisation

---

## 🧠 Stack technique

- **Python + Streamlit** : pour une interface légère, fluide et agréable à maintenir
- **SQLite + SQLAlchemy** : base de données locale, rapide et stable
- **Plotly** : visualisations dynamiques et interactives
- Composants Streamlit avancés pour la disposition et la navigation

---

## 🎯 Impact & usage

J’utilise Budget Tracker **chaque semaine** pour suivre l’évolution de notre budget.  
L’outil m’aide à :
- anticiper les dépenses et mieux répartir les charges
- repérer des schémas ou postes de dépenses inattendus
- prendre des décisions financières plus sereinement

Il a suscité l’intérêt de ma compagne et de ma famille. Je travaille actuellement à son déploiement sur un **mini serveur personnel** (Raspberry Pi) pour un accès partagé à la maison.

---

## 📸 Aperçu

![Dashboard Screenshot](/img/project_1/Page_1.png)

---

## 🔗 Ressources

- [Voir le code sur GitHub](https://github.com/unshaft/budget-tracker)
