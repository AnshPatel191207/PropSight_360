# PropSight 360 — Transparency First

> **Beyond Listings. Into Insights.**  
> A forensic real estate intelligence platform that exposes fake listings, misleading commute claims, and missing neighbourhood data — built for the Indian homebuyer.

<br/>

![PropSight 360 Banner](https://placehold.co/1200x400/0F1923/00D4AA?text=PropSight+360+%E2%80%94+Transparency+First)

<br/>

[![Figma Design](https://img.shields.io/badge/Figma-View_Design-00D4AA?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/9shHlHtL2HR5PykqfvkThu/Untitled?node-id=0-1&t=phEgmRXcp0cM3YYp-1)
[![Status](https://img.shields.io/badge/Status-Frontend_Complete-success?style=for-the-badge)]()
[![Made for India](https://img.shields.io/badge/Made_for-India_🇮🇳-FF9933?style=for-the-badge)]()

---

## 🚨 The Problem

India's real estate market — worth **$650 billion** — operates with a dangerous lack of transparency. Every day, homebuyers making **multi-crore decisions** face three compounding problems:

### Problem 1 — Fake Rental Listings `[Pain Score: 88.5/100]`
> *"Prospective tenants searching for rental homes discover that half of attractive listings on property portals are fraudulent advertisements posted by brokers using fake photos, unavailable properties, or significantly different actual offerings designed purely to capture contact information."*

- 47% of listings on major portals are broker clickbait
- Stock photos reused across 40+ listings simultaneously
- Properties listed as "available" for 60+ days after being rented
- No accountability mechanism for fraudulent brokers

### Problem 2 — Misleading Commute Times `[Pain Score: 85.5/100]`
> *"Real estate marketing claims like '5 minutes from metro' are wildly inaccurate because they measure straight-line distances on maps rather than actual peak-hour walking time accounting for traffic signals, crowded sidewalks, and infrastructure obstacles."*

- Developers advertise straight-line map distances, not actual travel time
- Peak-hour reality is 3–4x longer than advertised
- No standardised commute disclosure requirement in India
- Buyers discover the truth only after possession

### Problem 3 — No Standardised Neighbourhood Data `[Pain Score: 94.5/100]`
> *"Home buyers making multi-crore investment decisions lack comprehensive, data-driven information about neighbourhood characteristics like school quality, crime statistics, air quality indices, water availability, power outage frequency, and future infrastructure plans."*

- No single source for locality intelligence in India
- Government data is siloed across BBMP, BWSSB, BDA, police portals
- Buyers rely on broker-provided information (conflict of interest)
- NRIs have zero ability to remotely assess property context

---

## 💡 The Solution

**PropSight 360** is a forensic real estate intelligence platform that aggregates, cross-verifies, and presents property data in a transparent, data-driven interface — empowering buyers to make decisions with the same information advantage that developers and brokers have always had.

```
When a user opens PropSight 360, they should feel:
"I have POWER. I cannot be fooled.
 I know more than the brokers. I am protected."
```

---

## ✨ Key Features

### 🔍 Listing Authenticity Engine
- **14-signal cross-verification** against government portals (RERA, BBMP, BDA)
- Reverse image search across MagicBricks, 99Acres, Housing.com, NoBroker
- Broker trust score with blacklist database check
- Price anomaly detection vs area median
- Real-time RERA compliance verification

### 🗺️ Neighbourhood Intelligence
- **847 localities** with live data across Bengaluru
- 8-dimensional quality scoring: School Quality, AQI, Water Supply, Power Stability, Crime Rate, Future Infrastructure, Vastu & Orientation, Flood Risk
- Resident sentiment analysis with verified quotes
- Interactive heatmaps: Price zones, Risk zones, Infrastructure pipelines, School catchment
- Compare any two localities side-by-side

### 🚗 Forensic Commute Audit
- Listed commute vs **real peak-hour commute** with 3.6x bias detection
- Multi-modal breakdown: Drive, Metro, Bike, Auto/Cab
- Bottleneck identification with street-level imagery
- Hourly traffic heatmap showing best commute windows
- Monsoon waterlogging risk and safety index for route

### 📄 Verified Audit Report
- Shareable PDF report combining all 3 intelligence layers
- **Blockchain-secured verification ID** for authenticity
- Forensic audit trail with PASS/FAIL/ALERT per parameter
- Designed for sharing with family, CA, or legal advisor

### 📱 Full Mobile Experience
- Native mobile design with bottom tab navigation
- Complete Verify Listing flow optimised for 375px screens
- Touch-friendly 44px minimum tap targets

---

## 📱 Product Screens

### Onboarding Flow

| Step 1 — City Selection | Step 2 — User Persona | Step 3 — Protection Armed |
|---|---|---|
| Choose your target city with live data availability | Personalise for Homebuyer / Renter / NRI / Pro | Activation confirmation with live system status |

### Core Product

| Screen | Description |
|---|---|
| **Dashboard / Intelligence Hub** | Unified view with live feed, market pulse, and forensic property feed |
| **Listing Authenticity Engine** | Paste any URL → get a full forensic verdict in seconds |
| **Neighbourhood Quality** | 8-metric locality report with interactive map layers |
| **Forensic Commute Audit** | Listed vs reality commute with bottleneck analysis |
| **Mobile Verify** | Full verification flow optimised for mobile users |
| **Verified Audit Report** | Printable/shareable PDF-style forensic report |

---

## 🎨 Design System

### Color Palette

| Role | Color | Hex | Usage |
|---|---|---|---|
| Background | Deep Slate | `#0F1923` | All screen backgrounds |
| Primary Accent | Electric Teal | `#00D4AA` | CTAs, active states, verified badges |
| Warning | Amber | `#F5A623` | Suspicious listings, moderate alerts |
| Danger | Coral Red | `#FF4D4D` | Fake listings, critical alerts, blacklisted brokers |
| Secondary Text | Muted Gray | `#8892A4` | Labels, subtitles, metadata |

### Typography
- **Display / Headings:** Sora — Bold, confident
- **UI Labels:** DM Sans — Clean, readable
- **Data / Scores:** Monospaced — Precise, terminal-feel

### Component Language
- **Glassmorphism cards:** `rgba(255,255,255,0.05)` bg + `1px rgba(255,255,255,0.1)` border + `backdrop-blur: 12px`
- **Badge system:** VERIFIED (teal fill) / SUSPICIOUS (amber fill) / FAKE (red fill) / LOW RISK (teal outline)
- **Data formatting:** Indian standard — ₹1.2 Cr, ₹45L, 4.2% YoY

### Design Principles
1. **Data-forward** — Every pixel earns its place by conveying information
2. **Trust by design** — Shield icons, verification stamps, blockchain IDs
3. **Indian context** — ₹ formatting, RERA, A-Khata, BBMP, Khata references
4. **Dark, precise, confident** — Bloomberg terminal meets Zerodha Kite

---

## 🛠️ Tech Stack

> This repository currently contains the **UI/UX design** layer. The planned technical implementation stack is:

### Frontend
```
React.js / Next.js        — Core framework
Tailwind CSS              — Utility-first styling
Framer Motion             — Animations and transitions
Mapbox GL JS              — Interactive neighbourhood maps
Recharts / D3.js          — Data visualisations
```

### Backend (Planned)
```
Node.js + Express         — API server
MongoDB Atlas             — Property and broker database
MongoDB Atlas             — Real-time caching for live data
Puppeteer                 — Portal scraping engine
```

### Data Sources (Planned)
```
RERA Gujarat API        — Legal compliance verification
BBMP Open Data            — Property records
Google Maps Platform      — Real-time commute data
HERE Maps                 — Traffic and routing
CPCB API                  — Air Quality Index
```

### Infrastructure (Planned)
```
Netlify              — Hosting and deployment
Blockchain (Polygon)      — Audit report verification stamps
```

---

## 🗺️ Problem Statement Mapping

| Problem Statement | Primary Screen | Supporting Screens |
|---|---|---|
| Fake rental listings | Listing Authenticity Engine | Dashboard, Mobile Verify, Audit Report |
| Misleading commute times | Forensic Commute Audit | Dashboard, Audit Report |
| No neighbourhood data | Neighbourhood Quality | Dashboard, Audit Report |

### User Journey
```
Onboarding (Step 1→2→3)
        ↓
Dashboard (Intelligence Hub)
    ↙        ↓        ↘
Verify    Neighbourhood  Commute
Listing    Quality       Audit
    ↘        ↓        ↙
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
| Legal compliance | RERA registration, OC/CC certificates, A-Khata vs B-Khata |
| Government data | BBMP, BDA, BWSSB, local police data integration |
| Local transport | Auto-rickshaw, BMTC, Namma Metro modes |
| Infrastructure risk | Monsoon waterlogging, power cuts per month, Cauvery water dependency |
| Cultural signals | Vastu & orientation scoring, neighbourhood community type |
| Verification | Blockchain ID + RERA number for audit report authenticity |

---

## 👤 About the Creator

This project was independently designed and developed by Ansh.

**Responsibilities:**
- Product Ideation & UI/UX Design
- Frontend Development
- Backend Development & Database Management

---

## 🙏 Acknowledgements

- **Google Stitch AI** — UI generation and rapid prototyping
- **RERA Gujarat** — Public property data
- **Open Data Portal Of Government** — Municipal records
- Indian homebuyers everywhere who deserve better transparency

---

<div align="center">

**PropSight 360** — Built with ❤️ for India's homebuyers

*"The best investment you can make is in the truth about your investment."*

</div>
