---
title: "Classificateur de coups au badminton"
slug: "badminton-ml_fr"
locale: "fr"
description: "Un modèle de machine learning pour reconnaître les coups au badminton à partir de vidéos annotées."
stack: ["Python", "scikit-learn", "OpenCV", "MediaPipe", "Pandas"]
image: "/img/cbn.png"
github: "" # Tu peux compléter plus tard
tag: ["Bientôt disponible"]
translationOf: "badminton-ml"
category : "perso"
startDate : "2024-10-01"
endDate : ""
updatedDate : "2025-06-25"
---

Ce projet fait partie de **DataBad**, mon initiative personnelle pour analyser en détail les matchs de badminton.

L’objectif est de classifier automatiquement chaque coup (dégagement, smash, amorti...) à partir des données vidéo et d’annotations structurées. Il combine :

- L’estimation de pose avec **MediaPipe**
- L’étiquetage et la segmentation des coups
- L’analyse image par image avec **OpenCV**
- Des jeux de données issus de mes propres matchs
- Des premiers tests avec SVM et Random Forest

> Le projet est encore en développement et sera intégré progressivement à l’écosystème DataBad.
