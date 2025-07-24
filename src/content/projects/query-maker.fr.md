---
title: "QueryBot API"
slug: "query-maker_fr"
description: "Une API RESTful pour automatiser la création de tickets JIRA à partir de bases de données internes. Conçue pour les équipes cliniques de Median Technologies."
stack: ["Python", "FastAPI", "JIRA API", "SQL", "OAuth"]
image: "/img/median.png"
github: "" # privé
tag: ["À la une"]
locale: "fr"
translationOf: "query-maker"
category : "pro"
startDate : "2025-03-20"
endDate : "2025-07-20"
updatedDate : "2025-07-24"
---

## 🧩 Contexte

Durant mon alternance chez **Median Technologies**, j’ai conçu une API nommée **QueryBot** pour automatiser la création de tickets JIRA dans le cadre de projets d’imagerie médicale.  
L’objectif : éviter les oublis manuels en s’appuyant sur des règles de détection issues de bases de données internes.

Ce projet a été lancé en interne, pour simplifier les workflows des **chefs de projet cliniques**, et fiabiliser le suivi opérationnel.

---

## ⚙️ Fonctionnalités

- Génération automatique de tickets JIRA selon des règles personnalisées
- Lecture des tickets existants pour éviter les doublons (idempotence)
- Assignation intelligente selon le type d’anomalie
- Validation des données en amont et gestion des erreurs
- Mode dry-run, multi-environnements (`dev`, `préprod`, `prod`)
- Logs complets pour traçabilité et audit

---

## 🧠 Architecture technique


SQL + CSV 
   ↓
Pré-traitement Python (filtrage, mapping, validation)
   ↓
Construction JSON
   ↓
Appel à l’API JIRA via FastAPI
   ↓
Logger + réponse


- Traitement en arrière-plan
- Système de mapping dynamique pour chaque environnement
- Gestion d'erreurs centralisée
- Authentification sécurisée via OAuth

## 🧪 Qualité & robustesse

- Tests unitaires avec pytest
- Logs techniques et fonctionnels (niveau INFO/ERROR)
- Séparation claire des environnements (config_dev.json, etc.)


## 🚀 Déploiement & usage

- Déploiement prévu en août 2025
- Utilisée en production par une vingtaine de chefs de projet
- Connectée à l’écosystème JIRA de l’entreprise
- Stack légère, déployable sur les serveurs internes

## 💡 Impact
Même si les retours utilisateurs sont à venir, QueryMaker permettra :
- un gain de temps sur les créations de tickets
- une réduction du risque d’oubli
- un meilleur suivi qualité sur les projets cliniques complexes