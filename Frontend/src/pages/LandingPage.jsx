import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import HeroSection from '../components/Landing/HeroSection'
import StatsTicker from '../components/Landing/StatsTicker'
import ProblemSection from '../components/Landing/ProblemSection'
import HowItWorks from '../components/Landing/HowItWorks'
import FeatureDeepDives from '../components/Landing/FeatureDeepDives'
import Testimonials from '../components/Landing/Testimonials'
import FinalCTA from '../components/Landing/FinalCTA'
import SEO from '../components/common/SEO'

const landingStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PropSight 360?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PropSight 360 is India's first forensic real estate intelligence platform that exposes misleading commute claims and uncovers hidden neighbourhood risks before you buy a property."
      }
    },
    {
      "@type": "Question",
      "name": "How does PropSight 360 verify commute claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PropSight 360 analyzes actual historical traffic data for peak hours, exposing the real commute time vs what developers advertise. It provides minute-by-minute breakdowns for 8 AM and 6 PM commutes."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does PropSight 360 cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PropSight 360 currently covers 847+ localities across Ahmedabad, Gujarat with plans to expand to other major Indian cities."
      }
    }
  ]
};

const LandingPage = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary">
      <SEO 
        title={null}
        description="India's first forensic real estate intelligence platform. Expose misleading commute claims, uncover hidden neighbourhood risks, and make data-backed property decisions."
        keywords="real estate india, property audit ahmedabad, commute bias, neighborhood intelligence, property verification, RERA, forensic real estate, PropSight 360"
        canonical="https://propsight360.netlify.app/"
        structuredData={landingStructuredData}
      />
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <StatsTicker />
        <ProblemSection />
        <HowItWorks />
        <FeatureDeepDives />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
