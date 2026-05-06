import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import WelcomeStep from '../components/Onboarding/WelcomeStep'
import ProfileStep from '../components/Onboarding/ProfileStep'
import LocalityStep from '../components/Onboarding/LocalityStep'
import SEO from '../components/common/SEO'

const Onboarding = () => {
  const [step, setStep] = useState(2); // Starting at 2 as per reference demo
  const navigate = useNavigate();

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-[#0F1923] text-on-surface min-h-screen flex flex-col font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <SEO 
        title="Onboarding" 
        description="Set up your PropSight 360 profile, choose your investment type, and select target localities for forensic real estate analysis in Ahmedabad."
        keywords="property profile setup, real estate onboarding, locality selection ahmedabad, property investment type"
        canonical="https://propsight360.netlify.app/onboarding"
      />
      {/* Top Bar for Identity Only */}
      <nav className="flex justify-center items-center py-10 px-6 shrink-0">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#00D4AA] font-display-xl uppercase">PropSight 360</Link>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-24">
        <div className="w-full max-w-[520px] space-y-10">
          {step === 1 && <WelcomeStep onStart={() => setStep(2)} />}
          {step === 2 && <ProfileStep onContinue={handleContinue} />}
          {step === 3 && <LocalityStep onContinue={handleContinue} />}
        </div>
      </main>

      {/* Progress Dots at Bottom */}
      <footer className="fixed bottom-12 left-0 w-full flex flex-col items-center gap-6 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className={`w-2 h-2 rounded-full transition-all ${step === 1 ? 'w-10 h-1.5 bg-primary shadow-[0_0_10px_rgba(0,212,170,0.4)]' : 'bg-slate-700'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-all ${step === 2 ? 'w-10 h-1.5 bg-primary shadow-[0_0_10px_rgba(0,212,170,0.4)]' : 'bg-slate-700'}`}></div>
          <div className={`w-2 h-2 rounded-full transition-all ${step === 3 ? 'w-10 h-1.5 bg-primary shadow-[0_0_10px_rgba(0,212,170,0.4)]' : 'bg-slate-700'}`}></div>
        </div>
        <div className="flex items-center gap-4 text-slate-500 font-bold text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">encrypted</span>
            Bank-Grade Security
          </div>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">verified</span>
            RERA Authorized
          </div>
        </div>
      </footer>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </div>
  )
}

export default Onboarding
