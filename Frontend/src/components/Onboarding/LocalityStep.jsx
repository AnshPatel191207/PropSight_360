import React from 'react'

const LocalityStep = ({ onContinue }) => {
  return (
    <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-3">
        <h1 className="font-display-xl text-4xl font-bold text-white uppercase tracking-tight">One last thing...</h1>
        <p className="font-body-md text-slate-400 max-w-[380px] mx-auto uppercase font-bold text-xs">Which localities are you currently interested in?</p>
      </div>
      <div className="glass-panel p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
          <input className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-1 ring-primary/50 outline-none uppercase font-bold text-xs" placeholder="Search Locality (e.g. Prahlad Nagar)" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-[10px] font-bold uppercase">Prahlad Nagar</span>
          <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-[10px] font-bold uppercase">Satellite</span>
          <span className="px-3 py-1 bg-white/5 text-slate-500 border border-white/10 rounded-full text-[10px] font-bold uppercase">+ Add More</span>
        </div>
      </div>
      <button onClick={onContinue} className="w-full h-14 bg-primary text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all uppercase tracking-widest">
        Go to Dashboard
        <span className="material-symbols-outlined text-xl">dashboard</span>
      </button>
    </section>
  )
}

export default LocalityStep
