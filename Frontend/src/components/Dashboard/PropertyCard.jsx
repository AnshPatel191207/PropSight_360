import React from 'react'

const PropertyCard = ({ title, location, status, risk, score, change, trend, img, critical }) => (
  <div className={`glass-panel rounded p-3 flex items-center gap-6 inner-highlight hover:bg-white/[0.03] transition-colors ${critical ? 'border-error/20' : ''}`}>
    <div className={`w-20 h-20 rounded bg-surface-variant overflow-hidden shrink-0 ${critical ? 'filter grayscale' : ''}`}>
      <img className="w-full h-full object-cover" src={img} alt={title} />
    </div>
    <div className="flex-1">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className={`font-headline-lg text-sm ${critical ? 'text-error' : ''}`}>{title}</h4>
          <p className="text-[10px] font-mono text-slate-500 uppercase">{location}</p>
        </div>
        <div className="flex gap-1">
          <span className={`text-[8px] font-bold px-2 py-0.5 rounded ${critical ? 'bg-error text-white' : 'bg-primary text-on-primary'}`}>{status}</span>
          <span className={`text-[8px] font-bold px-2 py-0.5 rounded border ${critical ? 'bg-amber-500 text-black border-none' : 'border-primary/40 text-primary'} uppercase`}>{risk}</span>
        </div>
      </div>
      <svg className="h-6 w-32" viewBox="0 0 100 30">
        <path d={trend === 'up' ? "M0,25 C15,22 25,28 40,15 C55,2 70,18 85,12 C95,8 100,5 100,5" : "M0,5 C15,10 25,5 40,20 C55,30 70,15 85,25 C95,28 100,30 100,30"} fill="none" stroke={trend === 'up' ? "#46f1c5" : "#ffb4ab"} strokeWidth="2.5"></path>
      </svg>
    </div>
    <div className="text-right">
      <div className={`flex items-center justify-end gap-1 font-bold ${trend === 'up' ? 'text-primary' : 'text-error'}`}>
        <span className="text-2xl font-data-mono">{score}</span>
        <span className="text-[10px] font-mono uppercase">{trend === 'up' ? '▲' : '▼'} {change}</span>
      </div>
      <div className="text-[9px] font-label-caps text-slate-500 uppercase font-bold">TRUST SCORE</div>
    </div>
  </div>
)

export default PropertyCard
