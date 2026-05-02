import React from 'react'

const CommuteHeader = ({ auditData }) => {
  const listedTime = auditData ? auditData.listedTime : '--';
  const actualTime = auditData ? auditData.actualTime : '--';
  const multiplierStr = auditData ? auditData.delayMultiplier : null;
  const multiplier = multiplierStr ? parseFloat(multiplierStr) : 0;

  const isFaster = auditData && actualTime < listedTime;
  const isPerfect = auditData && actualTime === listedTime;
  const diffMultiplier = isFaster ? (listedTime / actualTime).toFixed(1) : (isPerfect ? '1.0' : multiplier.toFixed(1));

  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-caps text-amber-500 mb-2 block uppercase font-bold text-xs tracking-widest">Forensic Commute Audit</span>
          <h2 className="font-display-xl text-on-surface flex items-baseline gap-4 flex-wrap">
            <span className="text-slate-500 text-3xl opacity-60 font-bold uppercase">LISTED: {listedTime} min</span>
            <span className="material-symbols-outlined text-primary">arrow_forward</span>
            <span className="text-white text-4xl font-bold uppercase">REALITY: <span className="text-primary">{actualTime} min</span></span>
          </h2>
          {auditData && (
            <div className="mt-3 flex flex-col gap-2">
              <p className={`font-data-mono flex items-center gap-2 font-bold uppercase text-xs ${isFaster || isPerfect ? 'text-primary' : 'text-error'}`}>
                <span className="material-symbols-outlined text-sm">{isFaster || isPerfect ? 'check_circle' : 'warning'}</span>
                {isPerfect 
                  ? 'Accurate advertised commute time'
                  : isFaster 
                    ? `${diffMultiplier}x faster than advertised by developers`
                    : `${diffMultiplier}x longer than advertised by developers`
                }
              </p>
              
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-mono font-bold uppercase text-slate-300 border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">schedule</span>
                  {auditData.timeContext || 'MORNING'}
                </span>
                <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-mono font-bold uppercase text-slate-300 border border-white/10 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">
                    {auditData.mode === 'DRIVE' ? 'directions_car' : auditData.mode === 'METRO' ? 'train' : auditData.mode === 'BIKE' ? 'two_wheeler' : 'directions_car'}
                  </span>
                  {auditData.mode || 'DRIVE'}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => window.print()}
            className="bg-primary px-6 py-2 text-xs font-bold text-black border border-primary hover:brightness-110 transition-colors uppercase rounded flex items-center gap-2 no-print active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Export Audit PDF
          </button>
        </div>
      </div>
    </section>
  )
}

export default CommuteHeader
