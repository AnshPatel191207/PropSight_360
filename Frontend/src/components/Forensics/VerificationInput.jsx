import React from 'react'

const DetectionBadge = ({ color, text, active, disabled }) => (
  <div className={`flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border ${active ? 'border-primary/40' : 'border-white/5'} ${disabled ? 'opacity-50 grayscale' : ''}`}>
    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
    <span className={`text-[10px] font-bold uppercase tracking-wider ${active ? 'text-primary' : 'text-slate-400'}`}>{text}</span>
  </div>
)

const VerificationInput = () => {
  return (
    <div className="glass-panel p-6 rounded-xl mb-10 inner-highlight bg-[#16222D]/70 backdrop-blur-xl border border-white/10">
      <div className="flex flex-col gap-4">
        <div className="relative flex items-center">
          <div className="absolute left-4 flex items-center gap-2">
            <img className="w-6 h-6 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC84sF7Klf2-31a-jgSEzaMRH4ycw1M_5tHe7ju_jM94WwY1QM9psa2LOIRlItf9Ko5tiRfUm60MF3mA-QPx-fC07Jr97tz9DnnmCQWDSq6wzch7TQYExtDJIibpR5zBeMdT2rl65i0gPnd3sG7-jmEeTEN3fg-4ps-D8uMPWMsS98oOjEkftGW6avuzcLSlw4DYZrzfJWW9Bg8XoPLZcqybxpxWR6EseqyWI2jAKRCPGq_TMRdgjuJJi-kz90J0xd0ofJZWmvZAVQ" alt="Platform" />
          </div>
          <input className="w-full bg-surface-container-low border border-white/5 rounded-lg py-4 pl-14 pr-32 font-data-mono text-sm focus:ring-1 ring-primary/50 outline-none text-on-surface" type="text" defaultValue="https://www.magicbricks.com/propertyDetails/3-BHK-2150-Sq-ft-Multistorey-Apartment-for-Sale-in-Prahlad-Nagar-Ahmedabad-r1" />
          <button className="absolute right-2 bg-primary text-on-primary font-bold px-6 py-2 rounded text-xs uppercase tracking-tight hover:opacity-90">Verify Now</button>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-orange-400 bg-orange-400/5 px-3 py-1 rounded border border-orange-400/20 text-[10px] font-mono uppercase font-bold">
            <span className="material-symbols-outlined text-[14px]">warning</span>
            Invalid URL Pattern Detected
          </div>
          <div className="flex items-center gap-2 text-slate-500 bg-white/5 px-3 py-1 rounded border border-white/5 text-[10px] font-mono uppercase font-bold">
            <span className="material-symbols-outlined text-[14px]">cloud_off</span>
            No Historical Data Found
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-label-caps text-slate-500 uppercase font-bold">Detection Support:</span>
          <div className="flex gap-2">
            <DetectionBadge color="#E51C24" text="MagicBricks" disabled />
            <DetectionBadge color="#00D4AA" text="99acres" active />
            <DetectionBadge color="#EB0029" text="Housing.com" disabled />
            <DetectionBadge color="#1F2C3D" text="NoBroker" disabled />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerificationInput
