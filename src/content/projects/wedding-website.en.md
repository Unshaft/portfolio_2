---
title: "Wedding Website"
slug: "wedding-website_en"
locale: "en"
description: "Full-stack wedding web app: personalized family RSVP, photo gallery with moderation, admin dashboard, Excel exports and offline PWA mode."
stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "Sharp"]
image: "/img/wedding-website/preview.png"
tag: ["Featured"]
translationOf: "wedding-website"
category: "perso"
order: 3
startDate: "2025-10-01"
updatedDate: "2026-01-16"
---

## 🧩 Context

Organizing a wedding means managing RSVPs from dozens of families, each with their own dietary preferences and constraints. Rather than a simple Google Form, I built a **complete web application** with token-based authentication, admin dashboard and offline mode.

This project demonstrates my ability to design a **production-ready application** from scratch.

---

## 🏗️ Architecture

```text
Next.js 15 App Router
├── Public pages (home, schedule, info, gallery)
├── Personalized RSVP (/rsvp/[token])
├── Admin Dashboard (/admin/*)
└── RESTful API (15+ endpoints)
```

**Database:** Prisma ORM + SQLite (6 models)
**Deployment:** Raspberry Pi 4 (standalone output)

---

## ⚙️ Key Features

### Public Pages

- **Hero** with live countdown (updates every second)
- **Schedule**: wedding day timeline
- **Practical info**: accommodation, access, dress code
- **Photo gallery**: guest uploads with moderation

### Personalized RSVP System

- **Unique JWT token** per family (6-month expiration)
- **Custom photo and message** per family
- Per-guest input: attendance, restrictions, allergies, special needs
- **Automatic confirmation email**
- Rate limiting (5 submissions/hour max)

### Complete Admin Interface

- **Dashboard**: 4 recharts graphs (status, attendance, adults/children)
- **Family management**: full CRUD + batch photo import
- **RSVP tracking**: detailed table + 3 Excel exports
- **Photo moderation**: approve/reject workflow
- **Send invitations**: individual or bulk email with QR code

---

## 🧠 Tech Stack

| Component | Technology |
| --------- | ---------- |
| Framework | **Next.js 15** (App Router) |
| UI | **React 19** + **Tailwind CSS** |
| Database | **Prisma** + **SQLite** |
| Auth | **JWT (jose)** + **bcryptjs** |
| Images | **Sharp** (1920px compression, 85%) |
| Email | **Nodemailer** (SMTP) |
| Charts | **Recharts** |
| Export | **xlsx** (3 Excel formats) |
| Validation | **Zod** (strict schemas) |

---

## 🔐 Security in Depth

- **Multi-layer rate limiting** (upload, RSVP, admin login)
- **Magic bytes validation** for images (anti-malware)
- **XSS prevention** + HTML sanitization
- **Security headers**: CSP, HSTS, X-Frame-Options
- **Signed JWTs** with configurable expiration
- **bcrypt passwords** (cost 10)

---

## 📱 PWA & Offline Mode

- **Install** on home screen (iOS/Android)
- **Service Worker**: Network-First strategy
- Visited pages **available offline**
- Auto-refresh every hour

---

## 📊 Exports & Statistics

| Export | Purpose |
| ------ | ------- |
| Full RSVP | Overview |
| Attending guests | For caterer |
| Statistics | Global analysis |

---

## 🎨 Custom Design

Centralized theme with wedding colors:

- **Powder pink**: #f4e1e0
- **Sage green**: #768064
- **Sand beige**: #e0d4c7

Mobile optimizations:

- Touch targets ≥44x44px
- Responsive navigation
- Lazy loading images (8 eager, rest lazy)

---

## 🔗 Technical Highlights

- **15+ RESTful API endpoints**
- **6 Prisma models** (Family, Guest, RSVP, RSVPResponse, Photo, Admin)
- **3 custom HTML email templates**
- **Automatic Sharp compression** (1920x1920, progressive JPEG)
- **Dynamically generated QR codes**