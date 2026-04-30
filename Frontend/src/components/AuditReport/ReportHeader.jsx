import React from 'react'

const ReportHeader = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#c2c9c4] pb-8 mb-8 gap-6">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-display-xl font-extrabold tracking-tighter text-[#006b55]">PropSight 360</span>
          <span className="h-6 w-px bg-[#c2c9c4]"></span>
          <span className="font-label-caps text-[#444746] uppercase tracking-widest text-[11px] font-bold">Verified Audit Report</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-data-mono text-xs text-[#444746] font-bold uppercase">ID: PS-2024-99821-X</span>
          <span className="w-1 h-1 rounded-full bg-[#c2c9c4]"></span>
          <span className="font-data-mono text-xs text-[#444746] font-bold uppercase">Generated: Oct 24, 2023 • 14:32 IST</span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 border border-[#747975] rounded-lg font-label-caps text-[11px] font-bold hover:bg-[#f0f1f0] transition-colors uppercase">
          <span className="material-symbols-outlined text-[18px]">share</span>
          SHARE
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#00d4aa] text-[#002118] rounded-lg font-label-caps text-[11px] font-bold hover:brightness-95 transition-all shadow-sm uppercase">
          <span className="material-symbols-outlined text-[18px]">download</span>
          DOWNLOAD PDF
        </button>
      </div>
    </header>
  )
}

export default ReportHeader
