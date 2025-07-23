---
title: "QueryBot API"
slug: "query-maker_en"
description: "A RESTful API that automates the creation of JIRA tickets from medical imaging data. Used internally at Median Technologies."
stack: ["Python", "FastAPI", "JIRA API", "SQL"]
image: "/img/median.png"
github: "" # (or leave empty if private)
tag: ["Featured"]
locale: "en"
translationOf: "query-maker"
category : "pro"
startDate : ""
endDate : ""
updatedDate : ""
---

This project was developed during my time at **Median Technologies** to streamline the reporting workflow in medical imaging projects.

The API receives query data from DICOM files and generates well-structured tickets directly in **JIRA**, following predefined rules and custom field mappings. A dry-run mode, logging system and environment separation ensure safety and traceability.

Main features include:

- Dynamic ticket creation with field mapping
- Automatic detection of existing tickets (idempotent)
- JSON-based configuration and extensibility
- FastAPI endpoints with Swagger UI
- Dockerized for deployment on internal servers

> Designed for production use by clinical operations teams.
