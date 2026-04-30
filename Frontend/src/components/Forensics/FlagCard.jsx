import React from 'react'

const FlagCard = ({ status, color, borderColor, title, desc, icon }) => (
  <div className={`glass-panel p-4 rounded-lg border-l-[3px] ${borderColor} bg-[#16222D]/70`}>
    <div className="flex justify-between items-start mb-3">
      <span className={`material-symbols-outlined ${color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      <span className={`text-white text-[9px] px-2 py-0.5 rounded font-bold uppercase ${status === 'Critical' ? 'bg-error' : status === 'Moderate' ? 'bg-amber-500 text-black' : 'bg-primary text-black'}`}>{status}</span>
    </div>
    <p className="text-[12px] font-bold text-on-surface mb-1 uppercase tracking-tight">{title}</p>
    <p className="text-[10px] text-slate-500 mb-4 font-bold">{desc}</p>
    <button className="border border-primary text-primary px-3 py-1 rounded-full text-[9px] font-bold uppercase flex items-center gap-1 hover:bg-primary/10 transition-colors">EVIDENCE ↓</button>
  </div>
)

export default FlagCard
