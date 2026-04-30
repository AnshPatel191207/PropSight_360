import React from 'react'

const ForensicHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="font-display-xl text-4xl font-bold text-on-surface uppercase mb-1 tracking-tight">Listing Authenticity Engine</h1>
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 px-2 py-0.5 bg-[#00D4AA] text-black text-[10px] font-bold uppercase rounded border border-primary/20">
          <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Live Verification
        </span>
        <p className="font-body-md text-slate-400 text-sm">Powered by 14 cross-verification signals and government portal scraping.</p>
      </div>
    </div>
  )
}

export default ForensicHeader
