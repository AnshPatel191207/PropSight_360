import React from 'react'

const VerdictGauge = () => {
  return (
    <div className="bg-[#ba1a1a]/5 border-2 border-[#ba1a1a] p-6 rounded-xl relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <span className="font-label-caps text-[#ba1a1a] font-extrabold text-[12px] uppercase">FORENSIC VERDICT</span>
          <span className="material-symbols-outlined text-[#ba1a1a]" style={{ fontVariationSettings: "'FILL' 1" }}>report</span>
        </div>
        <div className="flex items-end gap-3 mb-2">
          <span className="text-5xl font-display-xl font-bold text-[#ba1a1a]">34</span>
          <span className="text-xl font-display-xl text-[#ba1a1a]/60 mb-1 font-bold">/100</span>
        </div>
        <div className="text-2xl font-extrabold tracking-tighter text-[#ba1a1a] uppercase mb-4">SUSPICIOUS</div>
        <div className="w-full bg-[#ba1a1a]/20 h-2 rounded-full overflow-hidden">
          <div className="bg-[#ba1a1a] h-full w-[34%]"></div>
        </div>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[120px]">gavel</span>
      </div>
    </div>
  )
}

export default VerdictGauge
