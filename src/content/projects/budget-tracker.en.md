---
title: "Budget Tracker"
slug: "budget-tracker_en"
locale: "en"
description: "An interactive dashboard to track income, expenses, and monthly balances."
stack: ["Python", "Pandas", "Streamlit", "SQLite"]
image: "/img/screen_dashboard_1.png"
github: "https://github.com/your-user/dashboard-project"
tag: ["Featured"]
translationOf: "budget-tracker"
category : "perso"
startDate : "2025-01-07"
endDate : "2025-20-07"
updatedDate : "2025-20-07"
---

## 🧩 Context

This project was born from a very real need: to better understand where our shared household money was going.  
I didn’t want to rely on third-party banking apps (often paid or too rigid), so I decided to create **my own solution**, built to last and evolve with our habits.

I wanted something local, personalized, easy to use — yet powerful enough to provide true **financial visibility**.

---

## ⚙️ Features

- **Secure import** of CSV files from our bank
- **Manual entry** of one-off transactions
- **Full history** of 400+ transactions
- **Duplicate detection** using a unique identifier (title + date + amount)
- **Spending and balance analysis** by category and period
- **Automatic budget suggestions** for upcoming months
- **Validation and reconciliation system** for transactions
- **Data archiving** to prevent accidental loss

---

## 🖥️ App structure

The app is built around five core modules:

1. **Dashboard**: overview of key indicators (balance, income, expenses, alerts…)
2. **CSV Import**: secure parsing of bank exports
3. **Budget Proposal**: smart allocation of future expenses
4. **Graphical Analysis**: interactive charts and spending breakdowns
5. **Transaction Editor**: browse, update, categorize entries

---

## 🧠 Tech stack

- **Python + Streamlit**: for a lightweight and intuitive user interface
- **SQLite + SQLAlchemy**: fast, reliable local database
- **Plotly**: dynamic, interactive data visualizations
- Custom Streamlit components for advanced layout and navigation

---

## 🎯 Real-world impact

I use Budget Tracker **every week** to stay on top of our finances.  
It helps me:
- anticipate expenses and balance our monthly charges
- spot patterns or unexpected spending categories
- make more informed, confident financial decisions

It has caught the interest of my partner and my family.  
I’m currently working on deploying it to a **local Raspberry Pi server**, so we can use it together at home.

---

## 📸 Preview

![Dashboard Screenshot](/img/project_1/Page_1.png)

---

## 🔗 Resources

- [View the code on GitHub](https://github.com/unshaft/budget-tracker)