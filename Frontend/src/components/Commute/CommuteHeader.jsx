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
            <p className={`font-data-mono mt-2 flex items-center gap-2 font-bold uppercase text-xs ${isFaster || isPerfect ? 'text-primary' : 'text-error'}`}>
              <span className="material-symbols-outlined text-sm">{isFaster || isPerfect ? 'check_circle' : 'warning'}</span>
              {isPerfect 
                ? 'Accurate advertised commute time'
                : isFaster 
                  ? `${diffMultiplier}x faster than advertised in developer brochures`
                  : `${diffMultiplier}x longer than advertised in developer brochures`
              }
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => window.print()}
            className="bg-white/5 px-4 py-2 text-xs font-bold border border-white/10 hover:bg-white/10 transition-colors uppercase rounded flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Export Audit PDF
          </button>
          <button 
            onClick={() => {
              if (!auditData) return alert('Run an audit first before saving.');
              alert('Audit successfully saved to your Intelligence Comparison report.');
            }}
            className="bg-primary px-4 py-2 text-xs font-bold text-black border border-primary hover:brightness-110 transition-colors uppercase rounded flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">save</span>
            Save to Comparison
          </button>
        </div>
      </div>
    </section>
  )
}

export default CommuteHeader
