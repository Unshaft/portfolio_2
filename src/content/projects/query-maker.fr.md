---
title: "QueryBot API"
slug: "query-maker_fr"
description: "Une API RESTful pour automatiser la création de tickets JIRA à partir de données d’imagerie médicale. Utilisée en interne chez Median Technologies."
stack: ["Python", "FastAPI", "JIRA API", "SQL"]
image: "/img/median.png"
github: "" # (ou laisse vide si privé)
tag: ["À la une"]
locale: "fr"
translationOf: "query-maker"
category : "pro"
startDate : "2025-03-20"
endDate : "2025-07-20"
updatedDate : "2025-07-20"
---

Ce projet a été développé durant mon alternance chez **Median Technologies** pour automatiser la création de tickets dans le cadre des projets d’imagerie médicale.

L’API reçoit des données issues de fichiers DICOM et génère automatiquement des tickets JIRA structurés, selon des règles prédéfinies et des mappings de champs personnalisés. Un mode dry-run, un système de logs et une séparation des environnements assurent robustesse et traçabilité.

Fonctionnalités principales :

- Création dynamique de tickets avec mapping de champs
- Détection automatique des tickets existants (idempotence)
- Configuration JSON et extensibilité
- Endpoints FastAPI avec Swagger UI
- Dockerisé pour déploiement sur serveurs internes

> Conçu pour un usage en production par les équipes d’opérations cliniques.
