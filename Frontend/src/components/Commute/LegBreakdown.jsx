import React from 'react'

const LegRow = ({ icon, label, time, exp, progress, expProgress }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-end">
      <div className="flex items-center gap-2 max-w-[70%]">
        <span className="material-symbols-outlined text-slate-500 text-lg flex-shrink-0">{icon}</span>
        <span className="font-mono text-[9px] text-on-surface font-bold uppercase truncate">{label}</span>
      </div>
      <div className="text-right">
        <span className="block font-data-mono text-primary text-[10px] font-bold uppercase">{time} <span className="text-slate-500 text-[9px] font-normal">/ {exp} exp</span></span>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="h-1 bg-slate-700/30 rounded-full w-full relative overflow-hidden">
        <div className="absolute h-full bg-slate-400" style={{ width: `${Math.min(100, expProgress)}%` }}></div>
      </div>
      <div className="h-1 bg-amber-500/20 rounded-full w-full relative overflow-hidden">
        <div className="absolute h-full bg-amber-500" style={{ width: `${Math.min(100, progress)}%` }}></div>
      </div>
    </div>
  </div>
)

const LegBreakdown = ({ segments }) => {
  if (!segments || segments.length === 0) {
    return (
      <div className="glass-panel p-5 rounded-xl bg-white/5 border border-white/10 opacity-50">
        <h3 className="font-label-caps text-on-surface mb-6 uppercase font-bold text-xs tracking-widest">Breakdown by Leg</h3>
        <p className="text-[10px] font-mono text-slate-500 text-center py-10 uppercase font-bold">Run audit to view segment breakdown</p>
      </div>
    );
  }

  return (
    <div className="glass-panel p-5 rounded-xl bg-white/5 border border-white/10 flex flex-col max-h-[500px]">
      <h3 className="font-label-caps text-on-surface mb-6 uppercase font-bold text-xs tracking-widest">Breakdown by Leg</h3>
      <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
        {segments.map((seg, idx) => {
          const total = Math.max(seg.actualTime, seg.expectedTime, 1);
          return (
            <LegRow 
              key={idx}
              icon={seg.type === 'Turn' ? 'turn_right' : (seg.type === 'Internal' ? 'garage' : 'traffic')}
              label={seg.instruction}
              time={`${seg.actualTime}m`}
              exp={`${seg.expectedTime}m`}
              progress={(seg.actualTime / total) * 100}
              expProgress={(seg.expectedTime / total) * 100}
            />
          );
        })}
      </div>
      {segments && (
        <div className="pt-4 mt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] font-label-caps text-slate-500 uppercase font-bold">Audit Result</span>
          <span className="font-data-mono text-xs text-primary font-bold uppercase tracking-wider">SECURE LINK VERIFIED</span>
        </div>
      )}
    </div>
  )
}

export default LegBreakdown
