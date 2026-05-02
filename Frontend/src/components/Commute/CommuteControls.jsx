import React, { useState } from 'react'

const TimeButton = ({ label, sub, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex-1 py-2 px-1 rounded-full flex flex-col items-center justify-center transition-all ${active ? 'bg-primary text-black' : 'text-slate-500 hover:bg-white/5'}`}
  >
    <span className="text-[10px] font-mono font-bold uppercase flex items-center gap-1">
      {label} {active && <span className="material-symbols-outlined text-[12px]">check_circle</span>}
    </span>
    <span className="text-[8px] font-mono opacity-80 font-bold">{sub}</span>
  </button>
)

const ModeButton = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex-1 aspect-square glass-panel flex flex-col items-center justify-center gap-1 group rounded-lg border transition-all ${active ? 'bg-primary/20 border-primary' : 'bg-white/5 border-white/5 opacity-50 hover:opacity-100'}`}
  >
    <span className={`material-symbols-outlined transition-transform group-hover:scale-110 ${active ? 'text-primary' : 'text-slate-400'}`}>{icon}</span>
    <span className={`text-[9px] font-mono font-bold uppercase ${active ? 'text-primary' : 'text-slate-400'}`}>{label}</span>
  </button>
)

const CommuteControls = ({ onRunAudit, loading }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [listedTime, setListedTime] = useState(5);
  const [timeContext, setTimeContext] = useState('MORNING');
  const [mode, setMode] = useState('DRIVE');

  const handleSubmit = () => {
    if (!origin.trim()) {
      alert('Please enter a Route Origin (starting point)');
      return;
    }
    if (!destination.trim()) {
      alert('Please enter a Property Destination');
      return;
    }
    onRunAudit({ origin, destination, listedTime, timeContext, mode });
  };

  return (
    <div className="glass-panel p-5 space-y-6 rounded-xl bg-white/5 border border-white/10">
      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Route Origin</label>
        <input 
          type="text" 
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="Enter Office/Home address"
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs font-mono text-white focus:border-primary outline-none"
        />
      </div>

      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Property Destination</label>
        <input 
          type="text" 
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter Property Name/Location"
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs font-mono text-white focus:border-primary outline-none"
        />
      </div>

      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Advertised Commute (Min)</label>
        <input 
          type="number" 
          value={listedTime}
          onChange={(e) => setListedTime(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs font-mono text-white focus:border-primary outline-none"
        />
      </div>

      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Time Context</label>
        <div className="flex border border-white/10 rounded-full overflow-hidden bg-white/5 p-1">
          <TimeButton label="MORNING" sub="8-10 AM" active={timeContext === 'MORNING'} onClick={() => setTimeContext('MORNING')} />
          <TimeButton label="EVENING" sub="6-8 PM" active={timeContext === 'EVENING'} onClick={() => setTimeContext('EVENING')} />
          <TimeButton label="OFF-PEAK" sub="1-3 PM" active={timeContext === 'OFF-PEAK'} onClick={() => setTimeContext('OFF-PEAK')} />
        </div>
      </div>

      <div>
        <label className="font-label-caps text-slate-500 block mb-3 uppercase font-bold text-[10px]">Transport Mode</label>
        <div className="flex gap-2">
          <ModeButton icon="directions_car" label="DRIVE" active={mode === 'DRIVE'} onClick={() => setMode('DRIVE')} />
          <ModeButton icon="train" label="METRO" active={mode === 'METRO'} onClick={() => setMode('METRO')} />
          <ModeButton icon="two_wheeler" label="BIKE" active={mode === 'BIKE'} onClick={() => setMode('BIKE')} />
        </div>
      </div>

      <button 
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-3 bg-primary text-black font-bold uppercase text-xs rounded transition-all hover:brightness-110 active:scale-[0.98] no-print ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Analyzing Commute...' : 'Run Forensic Audit'}
      </button>

      {/* Print-only footer for authenticity */}
      <div className="hidden print:block border-t border-white/10 pt-4 mt-4">
        <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">
          PropSight 360 Forensic Audit • {new Date().toLocaleString()} • Authentic Intelligence Report
        </p>
      </div>
    </div>
  )
}

export default CommuteControls
