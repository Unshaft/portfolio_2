---
title: "🏸 Badminton Shot Classifier"
slug: "badminton-ml_en"
locale: "en"
description: "A machine learning module to identify shots in a badminton match and help players better understand their game."
stack: ["Python", "scikit-learn", "OpenCV", "MediaPipe", "Pandas"]
image: "/img/process.png"
github: "" # to be completed
tag: ["Coming soon"]
translationOf: "badminton-ml"
category: "perso"
startDate: "2024-10-01"
endDate: ""
updatedDate: "2025-07-24"
---

## 🧩 Context

This project is part of **DataBad**, my personal initiative to help badminton players analyze their matches through data.  
The broader goal is to better understand one's own playing style, identify areas for improvement, and support personalized training.

This shot classifier is one of the core modules in the suite: it aims to automatically identify shot types (clear, smash, drop, etc.) from match video footage.

Originally designed for my own use, this tool could eventually benefit **players, coaches, clubs, and federations** interested in leveraging data for performance analysis.

---

## 🎯 Objectives

- Detect the **start and end** of each rally
- Automatically identify **serves** and score the match
- Classify **shot types** played (coming later)
- Enable post-match analysis and automatic highlights
- Provide a solid base for individualized coaching

---

## 🎥 Data & annotations

The project uses footage filmed from my own matches, representing several hours of play.  
I plan to manually annotate the initial dataset with:

- Timecodes for serves
- Rally start/end points
- Shot types (in later phases)

Annotations will be stored in standard formats (CSV or JSON).

---

## 🧠 Technical pipeline

The pipeline follows this structure:

1. **Pose estimation** using MediaPipe
2. **Feature extraction** per frame (position, movement, static/dynamic)
3. ML model prediction
4. Shot classification

- 30 FPS video processing
- Features extracted with OpenCV and Pandas

---

## 🤖 Machine Learning

- Initial model: **Random Forest**
- Model saved using **joblib**
- Evaluation metrics: **accuracy**, **confusion matrix**, **ROC curve**, **AUC**
- May evolve toward **deep learning** depending on results

Development will start in notebooks and later be modularized into reusable Python components.

---

## 🧩 Integration with DataBad

This classifier will be integrated into the **match review** section of DataBad, to provide users with **automatic summaries** of their rallies and shot patterns.

Eventually, this should enable:
- **Targeted stats** (e.g. smash success rate)
- **Automatic match highlights**
- **Visual overlays** of predictions on the video timeline

The module will run locally, designed for individual players first.

---

## 🚧 Status

The project is still in the **prototype phase**.  
Next steps include:
- Manual annotation of initial matches
- Testing basic models
- Evaluating performance on a small dataset

---
