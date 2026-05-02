# PropSight 360 — Transparency First

> **Beyond Listings. Into Insights.**  
> A forensic real estate intelligence platform that exposes misleading commute claims and missing neighbourhood data — built for the Indian homebuyer.

<br/>

![PropSight 360 Banner](https://placehold.co/1200x400/0F1923/00D4AA?text=PropSight+360+%E2%80%94+Transparency+First)

<br/>

[![Figma Design](https://img.shields.io/badge/Figma-View_Design-00D4AA?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/9shHlHtL2HR5PykqfvkThu/Untitled?node-id=0-1&t=phEgmRXcp0cM3YYp-1)
[![Live Demo](https://img.shields.io/badge/Deployed_Link-Live-free?style=for-the-badge)](https://propsight360.netlify.app/)
[![Live Demo](https://img.shields.io/badge/Backend_Link-Live-free?style=for-the-badge)](https://propsight-360.onrender.com/)
[![Made for India](https://img.shields.io/badge/Made_for-India_🇮🇳-FF9933?style=for-the-badge)]()

---

## 🚨 The Problem

India's real estate market — worth **$650 billion** — operates with a dangerous lack of transparency. Homebuyers making **multi-crore decisions** face two compounding problems:

### Problem 1 — Misleading Commute Times `[Pain Score: 85.5/100]`
> *"Real estate marketing claims like '5 minutes from metro' are wildly inaccurate because they measure straight-line distances on maps rather than actual peak-hour walking time accounting for traffic signals, crowded sidewalks, and infrastructure obstacles."*

- Developers advertise straight-line map distances, not actual travel time
- Peak-hour reality is 3–4x longer than advertised
- No standardised commute disclosure requirement in India
- Buyers discover the truth only after possession

### Problem 2 — No Standardised Neighbourhood Data `[Pain Score: 94.5/100]`
> *"Home buyers making multi-crore investment decisions lack comprehensive, data-driven information about neighbourhood characteristics like school quality, crime statistics, air quality indices, water availability, power outage frequency, and future infrastructure plans."*

- No single source for locality intelligence in India
- Government data is siloed across multiple portals
- Buyers rely on broker-provided information (conflict of interest)
- NRIs have zero ability to remotely assess property context

---

## 💡 The Solution

**PropSight 360** is a forensic real estate intelligence platform that aggregates, cross-verifies, and presents property data in a transparent, data-driven interface — empowering buyers to make decisions with complete neighbourhood and commute intelligence.

```
When a user opens PropSight 360, they should feel:
"I have POWER. I cannot be fooled.
 I know more than the brokers. I am protected."
```

---

## ✨ Key Features

### 🚗 Forensic Commute Audit
- Listed commute vs **real peak-hour commute** with 3.6x bias detection
- Multi-modal breakdown: Drive, Metro, Bike, Auto/Cab
- Bottleneck identification with street-level imagery
- Hourly traffic heatmap showing best commute windows
- Monsoon waterlogging risk and safety index for route

### 🗺️ Neighbourhood Intelligence
- **847 localities** with live data across Ahmedabad
- 8-dimensional quality scoring: School Quality, AQI, Water Supply, Power Stability, Crime Rate, Future Infrastructure, Vastu & Orientation, Flood Risk
- Resident sentiment analysis with verified quotes
- Interactive heatmaps: Price zones, Risk zones, Infrastructure pipelines, School catchment
- Compare any two localities side-by-side

### 📄 Verified Audit Report
- Shareable PDF report combining both intelligence layers
- **Blockchain-secured verification ID** for authenticity
- Forensic audit trail with PASS/FAIL/ALERT per parameter
- Designed for sharing with family, CA, or legal advisor

---

## 📱 Product Screens

### Onboarding Flow

| Step 1 — Welcome | Step 2 — User Persona | Step 3 — Locality Selection |
|---|---|---|
| Introduction with live system status | Personalise for Homebuyer / Investor / Tenant / Resident | Choose target localities for intelligence tracking |

### Core Product

| Screen | Description |
|---|---|
| **Dashboard / Intelligence Hub** | Unified view with live feed, market pulse, and property intelligence |
| **Neighbourhood Quality** | 8-metric locality report with interactive map layers |
| **Forensic Commute Audit** | Listed vs reality commute with bottleneck analysis |
| **Verified Audit Report** | Printable/shareable PDF-style forensic report |

---

## 🎨 Design System

### Color Palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| Background | Deep Slate | `#0F1923` | All screen backgrounds |
| Primary Accent | Electric Teal | `#00D4AA` | CTAs, active states, verified badges |
| Warning | Amber | `#F5A623` | Moderate alerts |
| Danger | Coral Red | `#FF4D4D` | Critical alerts |
| Secondary Text | Muted Gray | `#8892A4` | Labels, subtitles, metadata |

### Typography
- **Display / Headings:** Sora — Bold, confident
- **UI Labels:** Manrope — Clean, readable
- **Data / Scores:** Space Grotesk — Precise, terminal-feel

### Component Language
- **Glassmorphism cards:** `rgba(255,255,255,0.05)` bg + `1px rgba(255,255,255,0.1)` border + `backdrop-blur: 12px`
- **Badge system:** VERIFIED (teal fill) / SUSPICIOUS (amber fill) / ALERT (red fill) / LOW RISK (teal outline)
- **Data formatting:** Indian standard — ₹1.2 Cr, ₹45L, 4.2% YoY

### Design Principles
1. **Data-forward** — Every pixel earns its place by conveying information
2. **Trust by design** — Shield icons, verification stamps, blockchain IDs
3. **Indian context** — ₹ formatting, RERA, local authority references
4. **Dark, precise, confident** — Bloomberg terminal meets Zerodha Kite

---

## 🛠️ Tech Stack

### Frontend
```
React.js + Vite            — Core framework & dev tooling
Tailwind CSS               — Utility-first styling
React Router               — Client-side routing
Google Material Symbols    — Iconography
Google Fonts (Sora,
  Manrope, Space Grotesk)  — Typography
```

### Backend
```
Node.js + Express          — API server
MongoDB Atlas              — User & property database
JWT + HTTP-Only Cookies    — Secure session management
Google OAuth 2.0           — Social authentication
bcryptjs                   — Password hashing
```

### Data Sources
```
RERA Gujarat API           — Legal compliance verification
Google Maps Platform       — Real-time commute data
AQICN API                  — Air Quality Index
CPCB                       — Environmental data
```

### Infrastructure
```
Vite Dev Server            — Local development
Netlify (Planned)          — Production deployment
```

---

## 🗺️ Problem Statement Mapping

| Problem Statement | Primary Screen | Supporting Screens |
|---|---|---|
| Misleading commute times | Forensic Commute Audit | Dashboard, Audit Report |
| No neighbourhood data | Neighbourhood Quality | Dashboard, Audit Report |

### User Journey
```
Landing Page
      ↓
Sign Up / Login (Google OAuth or Email)
      ↓
Onboarding (Profile → Locality)
      ↓
Dashboard (Intelligence Hub)
      ↙              ↘
Neighbourhood      Commute
  Quality           Audit
      ↘              ↙
    Audit Report PDF
          ↓
  Share with family/CA
```

---

## 🇮🇳 Indian Market Context

PropSight 360 is built specifically for the Indian real estate ecosystem with:

| Feature | Indian Context |
|---|---|
| Price formatting | ₹ Crore / Lakh system (not millions) |
| Legal compliance | RERA registration, OC/CC certificates |
| Government data | Local municipality and authority data integration |
| Local transport | Auto-rickshaw, AMTS, Metro modes |
| Infrastructure risk | Monsoon waterlogging, power cuts per month |
| Cultural signals | Vastu & orientation scoring, neighbourhood community type |
| Verification | Blockchain ID + RERA number for audit report authenticity |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (or local MongoDB)

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

### Backend
```bash
cd Backend
npm install
npm run dev
```

### Environment Variables

**Backend `.env`:**
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

---

## 👤 About the Creator

This project was independently designed and developed by **Ansh Patel**.

**Responsibilities:**
- Product Ideation & UI/UX Design
- Frontend Development (React + Vite)
- Backend Development (Node.js + Express + MongoDB)
- API Integration & Data Pipeline

---

## 🙏 Acknowledgements

- **Google OAuth** — Secure social authentication
- **RERA Gujarat** — Public property data
- **AQICN** — Air quality data
- **Google Maps Platform** — Commute and location intelligence
- Indian homebuyers everywhere who deserve better transparency

---

<div align="center">

**PropSight 360** — Built with ❤️ for India's homebuyers

*"The best investment you can make is in the truth about your investment."*

</div>
