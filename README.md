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

### 🏠 Landing Page
![Landing Page](Frontend/public/screenshots/Landing_Page.png)
> *"Don't buy a home until you've seen the real data."* — The public-facing page that introduces PropSight 360's forensic intelligence capabilities.

---

### 🔐 Authentication Flow

| Sign In | Sign Up | Forgot Password |
|---------|---------|-----------------|
| ![Sign In](Frontend/public/screenshots/Sign_In_Page.png) | ![Sign Up](Frontend/public/screenshots/Sign_Up_Page.png) | ![Forgot Password](Frontend/public/screenshots/Forgot_Password_Page.png) |
| Split-panel login with Google SSO and email login | Profile-type selection (Homebuyer / Tenant / Investor) with password strength indicator | Secure reset link delivery within 2 minutes |

---

### 📊 Dashboard — Intelligence Hub
![Dashboard](Frontend/public/screenshots/Dashboard_Page.png)
> Unified entry point showing the **Neighbourhood Report** and **Avg. Commute Bias (3.4×)** cards, letting users jump straight into intelligence or commute auditing.

---

### 🗺️ Neighbourhood Quality
![Neighbourhood Quality](Frontend/public/screenshots/Neighborhood_Quality_Checking_Page.png)
> 8-metric locality scorecard (School Quality, AQI, Water Supply, Power Stability, Crime Rate, Future Infra, Vastu & Orient, Flood Risk) with resident sentiment analysis and interactive map layers.

---

### 🚗 Forensic Commute Audit
![Commute Lies Detection](Frontend/public/screenshots/Commute_Lies_Detection_Page.png)
> Side-by-side **Listed vs Reality** commute comparison with real-time route mapping, bottleneck detection, best commute time windows, safety index, and monsoon impact scoring.

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

## 📁 Folder Structure
```
PropSight_360/
│
├── 📂 Backend/                          # Node.js + Express REST API
│   ├── 📂 config/
│   │   ├── db.js                        # MongoDB Atlas connection
│   │   └── passport.js                  # Google OAuth strategy
│   │
│   ├── 📂 controllers/
│   │   ├── aqiController.js             # Air Quality Index endpoints
│   │   ├── authController.js            # Login / signup / OAuth logic
│   │   ├── commuteController.js         # Forensic commute audit logic
│   │   └── neighborhoodController.js    # Neighbourhood intelligence logic
│   │
│   ├── 📂 middleware/
│   │   ├── authMiddleware.js            # JWT token verification
│   │   └── errorMiddleware.js           # Global error handler
│   │
│   ├── 📂 models/
│   │   └── User.js                      # Mongoose user schema
│   │
│   ├── 📂 routes/
│   │   ├── aqiRoutes.js                 # GET /api/aqi/*
│   │   ├── authRoutes.js                # POST /api/auth/*
│   │   ├── commuteRoutes.js             # POST /api/commute/*
│   │   └── neighborhoodRoutes.js        # GET /api/neighborhood/*
│   │
│   ├── 📂 services/
│   │   ├── aqiService.js                # AQI data aggregation & caching
│   │   ├── commuteService.js            # Google Maps + traffic analysis
│   │   └── neighborhoodService.js       # Multi-source data aggregation
│   │
│   ├── 📂 utils/
│   │   └── generateToken.js             # JWT signing helper
│   │
│   ├── .env.example                     # Environment variable template
│   ├── .gitignore
│   ├── package.json
│   └── server.js                        # Express app entry point
│
└── 📂 Frontend/                         # React + Vite SPA
│
├── 📂 public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── _redirects                   # Netlify SPA routing fix
│   └── 📂 screenshots/              # README product preview images
│       ├── Landing_Page.png
│       ├── Sign_In_Page.png
│       ├── Sign_Up_Page.png
│       ├── Forgot_Password_Page.png
│       ├── Dashboard_Page.png
│       ├── Neighborhood_Quality_Checking_Page.png
│       └── Commute_Lies_Detection_Page.png
│
├── 📂 src/
│   │
│   ├── 📂 api/                      # Axios API call wrappers
│   │   ├── aqi.js
│   │   ├── auth.js
│   │   ├── commute.js
│   │   └── neighborhood.js
│   │
│   ├── 📂 assets/                   # Static images & SVGs
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── 📂 components/               # Reusable UI components by feature
│   │   │
│   │   ├── 📂 AuditReport/          # PDF-style forensic report
│   │   │   ├── AuditTrailTable.jsx
│   │   │   ├── BrokerIntelligence.jsx
│   │   │   ├── MarketComparison.jsx
│   │   │   ├── PropertySummary.jsx
│   │   │   ├── ReportFooter.jsx
│   │   │   ├── ReportHeader.jsx
│   │   │   └── VerdictGauge.jsx
│   │   │
│   │   ├── 📂 Auth/                 # Authentication UI
│   │   │   ├── AuthFooter.jsx
│   │   │   ├── AuthLeftPanel.jsx
│   │   │   ├── ForgotPasswordForm.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   ├── ResetSuccessMessage.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   └── TrustPill.jsx
│   │   │
│   │   ├── 📂 Commute/              # Forensic commute audit UI
│   │   │   ├── AuditCardGrid.jsx
│   │   │   ├── CommuteControls.jsx
│   │   │   ├── CommuteHeader.jsx
│   │   │   ├── CommuteMap.jsx
│   │   │   └── LegBreakdown.jsx
│   │   │
│   │   ├── 📂 Dashboard/            # Intelligence hub widgets
│   │   │   ├── FeatureGrid.jsx
│   │   │   ├── LiveFeedTicker.jsx
│   │   │   ├── MarketPulse.jsx
│   │   │   └── PropertyCard.jsx
│   │   │
│   │   ├── 📂 Landing/              # Public marketing page sections
│   │   │   ├── FeatureDeepDives.jsx
│   │   │   ├── FinalCTA.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── ProblemSection.jsx
│   │   │   ├── StatsTicker.jsx
│   │   │   └── Testimonials.jsx
│   │   │
│   │   ├── 📂 Neighborhood/         # Neighbourhood quality UI
│   │   │   ├── DataTile.jsx
│   │   │   ├── InteractiveMap.jsx
│   │   │   ├── NeighborhoodHeader.jsx
│   │   │   └── ResidentSentiment.jsx
│   │   │
│   │   ├── 📂 Onboarding/           # New user onboarding steps
│   │   │   ├── LocalityStep.jsx
│   │   │   ├── ProfileStep.jsx
│   │   │   └── WelcomeStep.jsx
│   │   │
│   │   └── 📂 common/               # Shared layout components
│   │       ├── DashboardLayout.jsx
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   │
│   ├── 📂 pages/                    # Route-level page components
│   │   ├── AuditReport.jsx
│   │   ├── CommuteCheck.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── NeighborhoodIntelligence.jsx
│   │   ├── Onboarding.jsx
│   │   ├── ResetPassword.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.jsx                      # Root component + React Router config
│   ├── index.css                    # Global styles & CSS variables
│   └── main.jsx                     # Vite entry point
│
├── .env.production                  # Production environment variables
├── .gitignore
├── eslint.config.js
├── index.html                       # HTML shell (Vite)
├── package.json
├── README.md                        # Frontend-specific notes
└── vite.config.js                   # Vite + proxy config
```
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
