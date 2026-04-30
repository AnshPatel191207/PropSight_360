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

const LandingPage = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary">
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
