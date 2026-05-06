import React from 'react'
import { useNavigate } from 'react-router-dom'

const FeatureGrid = () => {
  const navigate = useNavigate();

  return (
    <>
      <div 
        onClick={() => navigate('/neighborhood')}
        className="col-span-10 md:col-span-5 glass-panel rounded-xl min-h-[280px] p-6 flex flex-col justify-between inner-highlight group hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden animate-fade-in-up"
      >
        {/* Background glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>

        <div className="flex justify-between items-start relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">analytics</span>
            </div>
            <div>
              <h3 className="font-headline-lg text-lg mb-1 uppercase tracking-wider text-white">Neighborhood Report</h3>
              <p className="text-xs text-slate-400 font-mono">School • Air • Water • Crime • Growth</p>
            </div>
          </div>
          
          <div className="relative w-16 h-16 shrink-0">
            <svg className="w-full h-full rotate-[-18deg]" viewBox="0 0 100 100">
              <polygon className="stroke-white/10 fill-none" points="50,10 88,38 73,82 27,82 12,38" strokeWidth="1"></polygon>
              <polygon className="stroke-white/5 fill-none" points="50,30 69,44 62,66 38,66 31,44" strokeWidth="1"></polygon>
              <polygon className="fill-primary/30 stroke-primary" points="50,15 80,45 65,75 35,80 25,35" strokeWidth="2"></polygon>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[8px] font-mono text-on-surface flex flex-col items-center leading-tight">
                <span className="text-primary font-bold">8.4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-6 relative z-10">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-xs font-mono text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-primary mt-0.5">check_circle</span>
              Uncover hidden environmental risks (Flood, AQI, Water)
            </li>
            <li className="flex items-start gap-2 text-xs font-mono text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-primary mt-0.5">check_circle</span>
              Access live 3D forensic maps & dynamic infrastructure routing
            </li>
            <li className="flex items-start gap-2 text-xs font-mono text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-primary mt-0.5">check_circle</span>
              Analyze historical crime rates and future growth projections
            </li>
          </ul>
        </div>

        <div className="text-right pt-4 border-t border-white/5 relative z-10">
          <span className="text-[11px] font-label-caps text-primary/80 group-hover:text-primary transition-colors font-bold uppercase tracking-widest flex items-center justify-end gap-1">
            Explore Intelligence <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </div>
      </div>

      <div 
        onClick={() => navigate('/commute-check')}
        className="col-span-10 md:col-span-5 glass-panel rounded-xl min-h-[280px] p-6 flex flex-col justify-between inner-highlight hover:border-primary/30 transition-all cursor-pointer group relative overflow-hidden animate-fade-in-up-delay"
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors"></div>

        <div className="flex justify-between items-start relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-[32px]">directions_car</span>
            </div>
            <div>
              <h3 className="font-headline-lg text-lg mb-1 uppercase tracking-wider text-white">Avg. Commute Bias</h3>
              <p className="text-xs text-slate-400 font-mono">Listed vs. Google Real-Time</p>
            </div>
          </div>
          
          <div className="text-right shrink-0">
            <div className="font-data-mono text-3xl text-secondary font-bold">3.4x</div>
            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500 mt-1">Avg Delay</p>
          </div>
        </div>

        <div className="flex-1 mt-6 relative z-10">
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-xs font-mono text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-secondary mt-0.5">visibility</span>
              Expose false developer commute claims instantly
            </li>
            <li className="flex items-start gap-2 text-xs font-mono text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-secondary mt-0.5">visibility</span>
              Analyze real-time traffic delay multipliers & bottlenecks
            </li>
            <li className="flex items-start gap-2 text-xs font-mono text-slate-300">
              <span className="material-symbols-outlined text-[14px] text-secondary mt-0.5">visibility</span>
              Predictive routing for morning, evening, and off-peak hours
            </li>
          </ul>
        </div>

        <div className="text-right pt-4 border-t border-white/5 relative z-10">
          <span className="text-[11px] font-label-caps text-secondary/80 group-hover:text-secondary transition-colors font-bold uppercase tracking-widest flex items-center justify-end gap-1">
            Run Commute Audit <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </span>
        </div>
      </div>
    </>
  )
}

export default FeatureGrid
