import React from 'react'

const Bar = ({ h, error }) => (
  <div className="w-8 bg-white/5 h-20 rounded-t-sm relative group">
    <div className={`absolute bottom-0 w-full rounded-t-sm ${error ? 'bg-error' : 'bg-primary'}`} style={{ height: h }}></div>
    {error && <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-error font-bold">THIS</div>}
  </div>
)

const AnomalyChart = () => (
  <div className="glass-panel p-5 rounded-xl inner-highlight bg-[#16222D]/70 flex flex-col">
    <h4 className="text-[11px] font-label-caps text-slate-400 uppercase mb-4 font-bold">Market Anomaly Detection</h4>
    <div className="flex-1 flex items-end justify-between gap-2 px-2 mb-2">
      <Bar h="40%" />
      <Bar h="55%" />
      <Bar h="70%" />
      <Bar h="100%" error />
      <Bar h="60%" />
      <Bar h="45%" />
    </div>
    <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5">
      <span className="text-[10px] text-slate-500 uppercase font-bold">Median Area Price: <span className="text-on-surface">₹16,200/sqft</span></span>
      <span className="text-[10px] text-error font-bold uppercase">+24% Deviation</span>
    </div>
  </div>
)

export default AnomalyChart
