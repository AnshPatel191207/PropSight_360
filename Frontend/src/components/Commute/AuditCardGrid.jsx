import React from 'react'

const AuditCard = ({ icon, title, children }) => (
  <div className="glass-panel p-4 rounded-xl bg-white/5 border border-white/10">
    <div className="flex items-center gap-2 mb-4">
      <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
      <span className="font-label-caps text-on-surface uppercase font-bold text-[10px] tracking-widest">{title}</span>
    </div>
    {children}
  </div>
)

const AuditCardGrid = ({ auditData }) => {
  const safetyScore = auditData ? auditData.safetyScore : "--";
  const bestTime = auditData ? auditData.bestTimeWindow : "N/A";
  const envRisk = auditData ? auditData.environmentalRisk : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AuditCard icon="calendar_clock" title="Best Time To Commute">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 mb-1 font-bold uppercase">
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>10 PM</span>
          </div>
          <div className="h-3 flex gap-0.5 opacity-30">
            <div className="flex-1 bg-primary/20"></div>
            <div className="flex-1 bg-primary/40"></div>
            <div className="flex-1 bg-error/40"></div>
            <div className="flex-1 bg-error/80"></div>
            <div className="flex-1 bg-error/100"></div>
            <div className="flex-1 bg-error/60"></div>
            <div className="flex-1 bg-primary/40"></div>
            <div className="flex-1 bg-primary/20"></div>
          </div>
          <p className="text-[10px] font-mono text-primary mt-3 uppercase font-bold">
            {auditData ? `Optimal Window: ${bestTime}` : `Optimal Window: ${bestTime}`}
          </p>
        </div>
      </AuditCard>
      <AuditCard icon="visibility" title="Safety Index (9PM)">
        <div className="flex items-end justify-between">
          <div>
            <span className="block font-display-xl text-3xl font-bold text-white leading-none">{safetyScore}</span>
            <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase font-bold">LIT STREET COVERAGE</p>
          </div>
          <div className="text-right">
            {auditData ? (
              <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${parseInt(safetyScore) > 70 ? 'bg-primary text-black' : 'bg-amber-500 text-black'}`}>
                {parseInt(safetyScore) > 70 ? 'SECURE' : 'SUSPICIOUS'}
              </span>
            ) : (
              <span className="bg-white/5 text-slate-500 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase border border-white/10">N/A</span>
            )}
          </div>
        </div>
      </AuditCard>
      <AuditCard icon="rainy" title="Monsoon Impact">
        <div className="flex items-end justify-between">
          <div>
            <span className="block font-display-xl text-3xl font-bold text-white leading-none">
              {envRisk ? (envRisk.waterloggingRisk === 'High' ? '28' : '14') : '--'}
            </span>
            <p className="text-[10px] font-mono text-slate-500 mt-2 uppercase font-bold">WATERLOGGING DAYS / YEAR</p>
          </div>
          <div className="text-right flex flex-col gap-1">
            {auditData ? (
              <>
                <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${envRisk?.waterloggingRisk === 'High' ? 'bg-error text-white' : 'bg-primary text-black'}`}>
                  {envRisk ? envRisk.waterloggingRisk : 'MODERATE'}
                </span>
                <span className="border border-white/20 text-slate-400 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase">
                  {envRisk ? envRisk.condition : 'UNKNOWN'}
                </span>
              </>
            ) : (
              <span className="bg-white/5 text-slate-500 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase border border-white/10">N/A</span>
            )}
          </div>
        </div>
      </AuditCard>
    </div>
  )
}

export default AuditCardGrid
