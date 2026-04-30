import React from 'react'

const StatRow = ({ label, value, color = '' }) => (
  <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 hover:border-primary/30 transition-colors">
    <span className="text-[10px] font-label-caps text-slate-400 uppercase font-bold">{label}</span>
    <span className={`font-data-mono text-xs ${color}`}>{value}</span>
  </div>
)

const MarketPulse = () => {
  return (
    <div className="glass-panel rounded p-5 inner-highlight">
      <h2 className="font-headline-lg text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
        Live Market Pulse
      </h2>
      <div className="mb-8 text-center">
        <div className="relative inline-block w-48 h-24 overflow-hidden">
          <div className="w-48 h-48 rounded-full border-[12px] border-slate-800 absolute top-0 left-0"></div>
          <div className="w-48 h-48 rounded-full border-[12px] border-t-primary border-r-primary border-l-transparent border-b-transparent absolute top-0 left-0 rotate-[45deg]"></div>
          <div className="absolute bottom-0 w-full text-center">
            <span className="font-data-mono text-3xl font-bold uppercase">MODERATE</span>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Bubble Risk Index</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <StatRow label="Median Price" value="₹1.42 Cr" />
        <StatRow label="YoY Change" value="+18.2%" color="text-primary" />
        <StatRow label="Avg Fake Rate" value="22.4%" color="text-error" />
      </div>
    </div>
  )
}

export default MarketPulse
