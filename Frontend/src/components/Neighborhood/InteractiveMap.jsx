import React from 'react'

const MapLayerToggle = ({ label, active }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <span className={`font-mono text-[10px] uppercase font-bold ${active ? 'text-on-surface' : 'text-slate-400 group-hover:text-on-surface'}`}>{label}</span>
    <div className={`w-8 h-4 rounded-full relative ${active ? 'bg-primary' : 'bg-slate-700'}`}>
      <div className={`absolute top-1 w-2 h-2 rounded-full ${active ? 'right-1 bg-on-primary' : 'left-1 bg-slate-400'}`}></div>
    </div>
  </div>
)

const MapButton = ({ icon, mt }) => (
  <button className={`w-10 h-10 glass-panel flex items-center justify-center text-on-surface hover:text-primary transition-colors rounded-lg bg-[#0A0F14]/80 ${mt ? 'mt-4' : ''}`}>
    <span className="material-symbols-outlined">{icon}</span>
  </button>
)

const InteractiveMap = () => {
  return (
    <section className="glass-panel overflow-hidden flex flex-col h-[600px] relative rounded-xl">
      <div className="absolute top-4 left-4 z-10 w-64 glass-panel p-4 flex flex-col gap-4 rounded-lg bg-[#0A0F14]/90 backdrop-blur-xl">
        <h4 className="font-label-caps text-[10px] text-primary border-b border-white/10 pb-2 uppercase font-bold">MAP LAYERS</h4>
        <div className="space-y-3">
          <MapLayerToggle label="Price Heatmap" active />
          <MapLayerToggle label="Risk Zones" />
          <MapLayerToggle label="Infra Pipelines" />
          <MapLayerToggle label="School Catchment" />
        </div>
        <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
          <p className="text-[10px] font-mono text-slate-500 uppercase font-bold">Avg Sq.Ft Rate</p>
          <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-primary to-error"></div>
          <div className="flex justify-between text-[8px] font-mono text-slate-500 font-bold uppercase">
            <span>₹12k</span>
            <span>₹18k</span>
            <span>₹25k+</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-surface-container-lowest relative overflow-hidden group">
        <img alt="Detailed Satellite Map" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFYmDvoKm0BYKOZw7vzWTRmIGXxOCi99ezh5CNcAxzBRUX43SG8IxF1uRJemtvlCqP49BGKTDus42crnkySRa0RfqdJ5555jdz6RTDZr0lcpZZ_i1xDlEe83eWku36WDIREj0wCeJfCiPG7ofXjgoveVvGiKC6ytguIo4vqpGwpsDe90oIeUUDGPpe_u2mGE_lgCQ9iYPry_dEQ1mOlvO44ZsrpFmfxvscBAij5bJW5CXe9km5-8Ei3TaQVPVbRn4QCziduVuOOL8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 bg-primary/20 rounded-full animate-pulse absolute -top-8 -left-8"></div>
            <div className="w-8 h-8 bg-primary border-4 border-on-primary-container rounded-full shadow-[0_0_20px_#00D4AA] relative z-10"></div>
          </div>
          <div className="mt-2 glass-panel px-3 py-1 text-[10px] font-bold text-primary uppercase tracking-tighter whitespace-nowrap bg-[#0A0F14]/80">Koramangala 5th Block</div>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <MapButton icon="add" />
        <MapButton icon="remove" />
        <MapButton icon="my_location" mt />
      </div>
    </section>
  )
}

export default InteractiveMap
