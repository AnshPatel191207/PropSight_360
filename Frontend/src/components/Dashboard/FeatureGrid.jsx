import React from 'react'

const FeatureGrid = () => {
  return (
    <>
      <div className="col-span-4 glass-panel glow-animate rounded h-[200px] p-5 flex flex-col justify-between inner-highlight group hover:border-primary/30 transition-all cursor-pointer">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[32px]">analytics</span>
          </div>
          <div className="relative w-20 h-20">
            <svg className="w-full h-full rotate-[-18deg]" viewBox="0 0 100 100">
              <polygon className="stroke-white/10 fill-none" points="50,10 88,38 73,82 27,82 12,38" strokeWidth="1"></polygon>
              <polygon className="stroke-white/5 fill-none" points="50,30 69,44 62,66 38,66 31,44" strokeWidth="1"></polygon>
              <polygon className="fill-primary/30 stroke-primary" points="50,15 80,45 65,75 35,80 25,35" strokeWidth="2"></polygon>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[8px] font-mono text-on-surface flex flex-col items-center leading-tight">
                <span className="text-primary font-bold">8.4</span>
                <span className="opacity-40 uppercase">SCORE</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-headline-lg text-sm mb-1 uppercase tracking-wider">Neighborhood Report</h3>
          <p className="text-[10px] text-slate-500 font-mono">School • Air • Water • Crime • Growth</p>
        </div>
      </div>

      <div className="col-span-3 glass-panel rounded h-[200px] p-5 flex flex-col justify-between inner-highlight hover:border-primary/30 transition-all cursor-pointer">
        <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[32px]">verified_user</span>
        </div>
        <div>
          <div className="font-data-mono text-2xl text-primary font-bold">1,243</div>
          <h3 className="font-headline-lg text-sm mb-1 uppercase tracking-wider">Listings Verified</h3>
          <p className="text-[10px] text-slate-500 font-mono">Real-time RERA validation</p>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-label-caps text-primary/60 hover:text-primary transition-colors">→ Explore</span>
        </div>
      </div>

      <div className="col-span-3 glass-panel rounded h-[200px] p-5 flex flex-col justify-between inner-highlight hover:border-primary/30 transition-all cursor-pointer">
        <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[32px]">directions_car</span>
        </div>
        <div>
          <div className="font-data-mono text-2xl text-secondary font-bold">3.4x</div>
          <h3 className="font-headline-lg text-sm mb-1 uppercase tracking-wider">Commute Bias</h3>
          <p className="text-[10px] text-slate-500 font-mono">Listed vs. Google Real-Time</p>
        </div>
        <div className="text-right">
          <span className="text-[9px] font-label-caps text-primary/60 hover:text-primary transition-colors">→ Explore</span>
        </div>
      </div>
    </>
  )
}

export default FeatureGrid
