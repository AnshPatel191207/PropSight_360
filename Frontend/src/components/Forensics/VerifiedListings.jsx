import React from 'react'

const ListingCard = ({ title, desc, price, yieldText, project, img }) => (
  <div className="glass-panel rounded-xl overflow-hidden group cursor-pointer inner-highlight listing-card transition-all duration-300 h-[380px] flex flex-col bg-[#16222D]/70">
    <div className="relative h-40 shrink-0">
      <img alt="Apartment" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" src={img} />
      <div className="absolute top-3 left-3 bg-[#00D4AA] text-black px-2 py-1 rounded text-[9px] font-bold uppercase flex items-center gap-1 backdrop-blur-md">
        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
        Verified
      </div>
      <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 rounded text-[10px] font-mono text-white backdrop-blur-md font-bold uppercase">{project}</div>
    </div>
    <div className="p-4 flex flex-col flex-1">
      <div className="mb-4">
        <h4 className="text-sm font-bold text-on-surface uppercase tracking-tight">{title}</h4>
        <p className="text-[10px] text-slate-500 uppercase font-bold">{desc}</p>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-auto">
        <div className="bg-white/5 p-2 rounded">
          <p className="text-[8px] text-slate-500 uppercase font-bold">Possession</p>
          <p className="text-[11px] font-data-mono text-on-surface font-bold">Ready</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[20px] font-data-mono font-bold text-[#46f1c5]">{price}</span>
            <span className="bg-green-500/10 text-green-400 text-[8px] px-1.5 py-0.5 rounded font-bold uppercase">Yield Est.</span>
          </div>
          <span className="text-[10px] text-green-400 font-bold uppercase tracking-tight">{yieldText}</span>
        </div>
        <span className="material-symbols-outlined text-slate-600 hover:text-primary transition-colors cursor-pointer">favorite</span>
      </div>
    </div>
  </div>
)

const VerifiedListings = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline-lg text-2xl font-bold text-on-surface uppercase">Verified Listings Near You</h3>
        <a className="text-primary text-xs font-bold uppercase tracking-tight flex items-center gap-2" href="#">
          See All
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ListingCard title="Prahlad Nagar Residency" desc="3 BHK • 2,450 SQFT" price="₹4.25 Cr" yieldText="4.2% YLD" project="ADANI SHANTIGRAM" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBUeJam9WYoj1VZ6NJAzJCzVb5GCxNo2QX8i-7ok-kzd13i5t6AgL_kd0jGEpGeTGsd25NemT8W4FQtAycIZnFgp233gXWb4umXl9FHgr3oVNMKKzDfLUB6BckIWxqPoeafxGmGRqSIw22PgnxGVaRrE0G9czpdqBrR7aMbTV-A8OE2Anyqbh26PeNlVqjPiABFew6vnC3AVhZTTiYd83_b0UY28lsuh3q0awadZNFkZdXgjwJF2folgO51W-7cxUj02gfRjNqzHBA" />
        <ListingCard title="Bopal Signature" desc="4 BHK • 3,100 SQFT" price="₹5.80 Cr" yieldText="3.9% YLD" project="GODREJ GARDEN CITY" img="https://lh3.googleusercontent.com/aida-public/AB6AXuABA2zHzuS5geisbC95jdYoK-Fq4SNINKUWcEWTCxEUyk5fna0KOyG-T5OUeAYv410VX2h_gae9Py6IoAKRtMC2nHEKqgrJyC_flqurXehGAWOYp3PqYlSHqo9odyVHqzYqy_Xtfi9SqEfEs3cjH2yQrMFObeQcIKSm5P9GhQfFZYC6O-yRB_7kKyfhiYdt3FfMrlbxxWHtizDjzo3pmjCSNe3S-Sjk1vvLa7aCm4lLQ74kRjn0fyXyVHJHEmhW2-i4vhT8h6FXmnU" />
        <ListingCard title="Sky City" desc="4 BHK • 4,200 SQFT" price="₹9.40 Cr" yieldText="4.8% YLD" project="SHIVALIK PARKVIEW" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDb11HcvjGnHhMK4uIDR3XpoR-nJponfZOOT4U2dbizFcZs-lcGoj0wPBcNXf5OoLKhrF1ACPsehbIustaPLHEaPnLHidjpKVnPwadL2WsYaZa_clmgQwC5obVtaInzdezIqBd-jolr4HPDR-8fdghicVvtUW8SQQiHeDnF03nZqyUK2ul5weP3l5qPTsKlNgs30STrF9S9sps0Zm30OaMrWERynT2eh5NNyH9qhI4y4Sa5HrK7-XEdEa700p0mtpIPEkffGBlmRcw" />
        <ListingCard title="Gala Haven" desc="2 BHK • 1,250 SQFT" price="₹1.45 Cr" yieldText="5.1% YLD" project="PACIFICA REFLECTIONS" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDOgaRtR3e8GzEscohCqZsEUAcbxELkxcToGn7TsFXwtCB6nJy2lafUiF122_-ddf3s0Ub0aVZyOlwe8Fi7CSe9gwzCKG_qUIa9HFpI-d_g3fxoVm7udcWAK1S2OZF_cVBLU6rP4PcS9bP3mfTzYp5c2b9q4DVNJPEdh8yNM8nMc13s6Af2as-hlDRzS1rtvBibFGS4kleHLC0dTNpBXDqDJU35rZoV746lLa5P63geW8uFxRHFvsRhO9PhwkdxYozrrql4lJIjv5Y" />
      </div>
    </div>
  )
}

export default VerifiedListings
