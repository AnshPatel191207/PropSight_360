import React from 'react'

const SignalIcon = ({ icon, success, error }) => (
  <div className={`flex items-center gap-1 px-2 py-1 rounded ${success ? 'bg-primary/10' : 'bg-error/10'}`}>
    <span className={`material-symbols-outlined text-[16px] ${success ? 'text-primary' : 'text-error'}`}>{icon}</span>
    <span className={`material-symbols-outlined text-[14px] ${success ? 'text-primary' : 'text-error'}`}>{success ? 'check' : 'close'}</span>
  </div>
)

const AuthenticityVerdict = () => {
  return (
    <div className="col-span-4 glass-panel rounded-xl flex flex-col overflow-hidden relative border-error/30 bg-error/5 p-8 text-center items-center">
      <span className="text-[11px] font-label-caps text-error mb-2 uppercase tracking-[0.2em] font-bold">Authenticity Verdict</span>
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-error/20 blur-2xl rounded-full opacity-60"></div>
        <h2 className="text-4xl font-display-xl text-black bg-amber-500 px-4 py-1 rounded relative z-10 uppercase font-bold leading-none">Suspicious</h2>
      </div>
      <div className="relative w-48 h-24 mb-2 overflow-hidden">
        <svg className="w-full h-full transform" viewBox="0 0 100 50">
          <path d="M 10,50 A 40,40 0 0,1 90,50" fill="none" stroke="#2F3633" strokeLinecap="round" strokeWidth="12"></path>
          <path d="M 10,50 A 40,40 0 0,1 40,15" fill="none" stroke="#FF4D4D" strokeDasharray="100" strokeDashoffset="0" strokeLinecap="round" strokeWidth="12"></path>
        </svg>
        <div className="absolute bottom-0 inset-x-0 text-center">
          <span className="font-data-mono text-3xl text-error font-bold">34</span>
          <span className="text-xs text-slate-500 font-bold">/100</span>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-[10px] font-data-mono uppercase tracking-widest text-slate-400 font-bold">Confidence: 91%</span>
      </div>
      <div className="flex gap-4 mb-6">
        <SignalIcon icon="photo_library" success />
        <SignalIcon icon="payments" success />
        <SignalIcon icon="gavel" error />
      </div>
      <p className="text-sm text-slate-400 mb-8 max-w-[200px]">High risk of data duplication and bait-and-switch pricing detected.</p>
      <div className="w-full mt-auto space-y-3">
        <div className="flex justify-between text-[11px] font-label-caps uppercase text-slate-500 font-bold">
          <span>Signal Quality</span>
          <span className="text-on-surface">Tier 1</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-primary"></div>
        </div>
      </div>
    </div>
  )
}

export default AuthenticityVerdict
