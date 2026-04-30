import React from 'react'

const NeighborhoodHeader = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="space-y-2">
        <nav className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-slate-500">
          <span>India</span> <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span>Intelligence</span> <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span>Neighborhoods</span> <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary">Satellite, Ahmedabad</span>
        </nav>
        <h1 className="font-display-xl text-4xl font-bold text-on-surface uppercase tracking-tight">Neighborhood Quality</h1>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-low p-1 rounded-sm border border-white/5">
        <span className="font-label-caps text-[10px] text-slate-400 pl-3 uppercase font-bold">COMPARED TO AHMEDABAD AVG</span>
        <div className="flex bg-surface-container-lowest p-0.5">
          <button className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-on-primary">ON</button>
          <button className="px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">OFF</button>
        </div>
      </div>
    </section>
  )
}

export default NeighborhoodHeader
