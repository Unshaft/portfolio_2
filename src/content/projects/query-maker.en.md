---
title: "QueryBot API"
slug: "query-maker_en"
description: "A RESTful API to automate the creation of JIRA tickets from internal databases. Designed for clinical teams at Median Technologies."
stack: ["Python", "FastAPI", "JIRA API", "SQL", "OAuth"]
image: "/img/median.png"
github: "" # private
tag: ["Featured"]
locale: "en"
translationOf: "query-maker"
category: "pro"
startDate: "2025-03-20"
endDate: "2025-07-20"
updatedDate: "2025-07-24"
---

## 🧩 Context

During my work-study at **Median Technologies**, I developed an API called **QueryBot** to automate the creation of JIRA tickets for medical imaging projects.  
The goal: avoid manual omissions by relying on detection rules derived from internal databases.

This internal tool was designed to simplify workflows for **clinical project managers** and ensure better operational tracking.

---

## ⚙️ Features

- Automatic JIRA ticket creation based on customizable rules
- Detection of existing tickets to avoid duplicates (idempotence)
- Smart assignment based on the issue type
- Pre-validation and error handling
- Dry-run mode and multi-environment support (`dev`, `preprod`, `prod`)
- Complete logging for traceability and audits

---

## 🧠 Technical architecture

```txt
SQL + CSV 
   ↓
Python pre-processing (filtering, mapping, validation)
   ↓
JSON construction
   ↓
FastAPI call to JIRA
   ↓
Logger + response
```

- Runs in **background**
- Dynamic mapping system per environment
- Centralized error handling
- Secure authentication via **OAuth**

---

## 🧪 Quality & robustness

- Unit testing with **pytest**
- Technical and functional logs (INFO/ERROR levels)
- Clear environment separation (`config_dev.json`, etc.)


---

## 🚀 Deployment & usage

- Deployment planned for **August 2025**
- To be used in production by around **20 project managers**
- Integrated into the company’s JIRA ecosystem
- Lightweight stack, deployable on internal servers

---

## 💡 Impact

Although user feedback is still to come, QueryBot is expected to:
- **Save time** on ticket creation
- **Reduce the risk of omissions**
- **Improve quality tracking** for clinical project workflows

---
