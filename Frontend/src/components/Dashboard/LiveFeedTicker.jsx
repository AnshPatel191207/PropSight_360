import React from 'react'

const LiveFeedTicker = () => {
  return (
    <section className="col-span-12">
      <div className="relative h-14 bg-white/5 border border-white/10 rounded flex items-center overflow-hidden inner-highlight">
        <div className="bg-slate-700/50 text-slate-300 px-4 h-full flex items-center font-label-caps z-10 shrink-0 gap-3 border-r border-white/10">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            </span>
            LIVE FEED
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-content font-data-mono text-on-surface-variant uppercase text-xs flex items-center gap-8">
            <span>🔴 FRAUD: 47% of listings in Bopal flagged suspicious this week</span>
            <span className="w-1.5 h-1.5 rounded-full bg-error/40"></span>
            <span>🟡 MARKET WARNING: Forensic sweep in SG Highway reveals 12 ghost properties</span>
            <span className="w-1.5 h-1.5 rounded-full bg-error/40"></span>
            <span>🔴 FRAUD: AMC verification latency increased by 14%</span>
            <span className="w-1.5 h-1.5 rounded-full bg-error/40"></span>
            <span>🟡 MARKET WARNING: Satellite Rent yields dropping</span>
            <span className="w-1.5 h-1.5 rounded-full bg-error/40"></span>
            <span>🟢 POSITIVE SIGNAL: New infrastructure node approved in Gota</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveFeedTicker
