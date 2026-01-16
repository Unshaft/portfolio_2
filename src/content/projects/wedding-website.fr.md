---
title: "Site Web Mariage"
slug: "wedding-website_fr"
locale: "fr"
description: "Application web complète pour notre mariage : RSVP personnalisé par famille, galerie photos avec modération, dashboard admin, exports Excel et mode PWA offline."
stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "Sharp"]
image: "/img/wedding-website/preview.png"
tag: ["À la une"]
translationOf: "wedding-website"
category: "perso"
order: 3
startDate: "2025-10-01"
updatedDate: "2026-01-16"
---

## 🧩 Contexte

Organiser un mariage implique de gérer les RSVPs de dizaines de familles, chacune avec ses préférences alimentaires et contraintes. Plutôt qu'un simple formulaire Google, j'ai créé une **application web complète** avec authentification par token, dashboard admin et mode offline.

Ce projet démontre ma capacité à concevoir une **application production-ready** de A à Z.

---

## 🏗️ Architecture

```
Next.js 15 App Router
├── Pages publiques (accueil, programme, infos, galerie)
├── RSVP personnalisé (/rsvp/[token])
├── Admin Dashboard (/admin/*)
└── API RESTful (15+ endpoints)
```

**Base de données :** Prisma ORM + SQLite (6 modèles)
**Déploiement :** Raspberry Pi 4 (standalone output)

---

## ⚙️ Fonctionnalités principales

### Pages publiques
- **Hero** avec countdown dynamique (seconde par seconde)
- **Programme** : déroulement de la journée
- **Infos pratiques** : hébergement, accès, dress code
- **Galerie photos** : upload par invités avec modération

### Système RSVP personnalisé
- **Token JWT unique** par famille (6 mois d'expiration)
- **Photo et message** personnalisés par famille
- Saisie par invité : présence, restrictions, allergies, besoins spéciaux
- **Email de confirmation** automatique
- Rate limiting (5 soumissions/heure max)

### Interface Admin complète
- **Dashboard** : 4 graphiques recharts (statuts, présence, adultes/enfants)
- **Gestion familles** : CRUD complet + import batch photos
- **Suivi RSVP** : tableau détaillé + 3 exports Excel
- **Modération photos** : approve/reject workflow
- **Envoi invitations** : email individuel ou en masse avec QR code

---

## 🧠 Stack technique

| Composant | Technologie |
|-----------|-------------|
| Framework | **Next.js 15** (App Router) |
| UI | **React 19** + **Tailwind CSS** |
| Base de données | **Prisma** + **SQLite** |
| Auth | **JWT (jose)** + **bcryptjs** |
| Images | **Sharp** (compression 1920px, 85%) |
| Email | **Nodemailer** (SMTP) |
| Graphiques | **Recharts** |
| Export | **xlsx** (3 formats Excel) |
| Validation | **Zod** (schémas stricts) |

---

## 🔐 Sécurité en profondeur

- **Rate limiting** multi-couches (upload, RSVP, login admin)
- **Validation magic bytes** pour les images (anti-malware)
- **XSS prevention** + sanitization HTML
- **Headers sécurité** : CSP, HSTS, X-Frame-Options
- **JWT signés** avec expiration configurable
- **Mots de passe bcrypt** (cost 10)

---

## 📱 PWA & Mode Offline

- **Installation** sur écran d'accueil (iOS/Android)
- **Service Worker** : stratégie Network-First
- Pages visitées **disponibles offline**
- Actualisation automatique toutes les heures

---

## 📊 Exports & Statistiques

| Export | Usage |
|--------|-------|
| RSVP complet | Vue d'ensemble |
| Invités présents | Pour le traiteur |
| Statistiques | Analyse globale |

---

## 🎨 Design personnalisé

Thème centralisé aux couleurs du mariage :
- **Rose poudré** : #f4e1e0
- **Vert sauge** : #768064
- **Beige sable** : #e0d4c7

Optimisations mobile :
- Boutons tactiles ≥44x44px
- Navigation responsive
- Images lazy loading (8 eager, reste lazy)

---

## 🔗 Points techniques clés

- **15+ endpoints API** RESTful
- **6 modèles Prisma** (Family, Guest, RSVP, RSVPResponse, Photo, Admin)
- **3 templates email** HTML personnalisés
- **Compression Sharp** automatique (1920x1920, JPEG progressif)
- **QR codes** générés dynamiquement