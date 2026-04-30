import React from 'react'

const WelcomeStep = ({ onStart }) => {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <h1 className="font-display-xl text-4xl font-bold text-white uppercase tracking-tight">Welcome to the future of real estate</h1>
        <p className="font-body-md text-slate-400 max-w-[380px] mx-auto uppercase font-bold text-xs">Let's get your forensic dashboard set up in 30 seconds.</p>
      </div>
      <div className="glass-panel p-8 rounded-xl bg-white/5 border border-white/10 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
        </div>
        <h3 className="text-white font-bold mb-2 uppercase">Ready to audit?</h3>
        <p className="text-slate-500 text-sm mb-8 uppercase font-bold">We cross-verify listings across 14+ signals.</p>
        <button onClick={onStart} className="w-full h-14 bg-primary text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest">
          Start Onboarding
        </button>
      </div>
    </section>
  )
}

export default WelcomeStep
