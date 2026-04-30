import React from 'react'

const OnboardingCard = ({ icon, title, desc, active }) => (
  <div className={`group relative p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${active ? 'bg-[#16222D] border-primary shadow-[0_0_20px_rgba(0,212,170,0.15)]' : 'bg-[#16222D]/80 border-white/5 hover:border-primary/50'}`}>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${active ? 'bg-primary' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
      <span className={`material-symbols-outlined ${active ? 'text-black' : 'text-primary'}`}>{icon}</span>
    </div>
    <h3 className={`font-bold text-sm mb-1 uppercase tracking-tight ${active ? 'text-primary' : 'text-white'}`}>{title}</h3>
    <p className={`text-xs leading-relaxed uppercase font-bold ${active ? 'text-primary/70' : 'text-slate-500'}`}>{desc}</p>
    {active && (
      <div className="absolute top-4 right-4">
        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      </div>
    )}
  </div>
)

const ProfileStep = ({ onContinue }) => {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <h1 className="font-display-xl text-4xl font-bold text-white uppercase tracking-tight">What describes you best?</h1>
        <p className="font-body-md text-slate-400 max-w-[380px] mx-auto uppercase font-bold text-xs">We'll tailor your forensic intelligence dashboard based on your investment profile.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <OnboardingCard icon="home" title="First-time Homebuyer" desc="Protecting your biggest life investment." />
        <OnboardingCard icon="real_estate_agent" title="Commercial Investor" desc="Deep-tier data for high-stakes deal flow." active />
        <OnboardingCard icon="apartment" title="Tenant/Renter" desc="Verifying owners and contract transparency." />
        <OnboardingCard icon="public" title="Ahmedabad Resident" desc="Local verification and ground intelligence." />
      </div>
      <button onClick={onContinue} className="w-full h-14 bg-primary text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest">
        Continue to Final Step
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </button>
    </section>
  )
}

export default ProfileStep
