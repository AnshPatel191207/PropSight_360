import React from 'react'

const NeighborhoodHeader = ({ location, setLocation, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(location);
    }
  };

  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
      <div className="space-y-2">
        <h1 className="font-display-xl text-4xl font-bold text-on-surface uppercase tracking-tight">Neighborhood Quality</h1>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded border border-white/5 w-full md:w-80">
          <span className="material-symbols-outlined text-slate-400 text-[20px] pl-1">location_on</span>
          <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ENTER AREA (E.G. SATELLITE...)" 
            className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest text-on-surface w-full placeholder:text-slate-600"
          />
        </div>
        <button 
          onClick={() => window.print()}
          className="bg-primary hover:brightness-110 text-black px-4 py-2 rounded flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-all active:scale-[0.98] no-print"
        >
          <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
          EXPORT PDF
        </button>
      </div>
    </section>
  )
}

export default NeighborhoodHeader
