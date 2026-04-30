import React from 'react'

const BrokerIntelligence = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6 border-l-4 border-[#006b55] pl-4">
        <h2 className="font-display-xl text-xl font-bold uppercase tracking-tight">Broker Intelligence</h2>
      </div>
      <div className="bg-[#f0f1f0] border border-[#c2c9c4] p-6 rounded-xl">
        <div className="flex items-center gap-4 mb-6">
          <img className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl-JxoSUkHwuRcbfBoQ6g_YfMxWhe-FbHJcWpdHauAtWmkBYlkDP72yjLTY-GRuQ-BE5yyu22_RxOzbV0G_v9k-TYxGre8lrj9TNrm_fxq4L-33mDLzNopsjht7QQt7ZlUaYhuguMiNH1MO8vUhrRRw1hhQ2k9vRoiYg8EPONtSJLLs74LKKF-nU88mPsn1vaYRYOvSICKpUZFIOZ80IIvcU7nc-eNpAhl9mRDJgvXp24jEsKbmOTZOIvO1V7bKLZjDdypkr-lxrs" alt="Broker" />
          <div>
            <p className="font-bold text-sm uppercase">Rahul S. Kothari</p>
            <p className="text-[10px] text-[#444746] uppercase font-bold">Legacy Realty Group (LRG)</p>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center text-[10px] font-bold uppercase">
            <span>LISTING DURATION</span>
            <span className="font-data-mono">182 DAYS</span>
          </div>
          <div className="w-full bg-[#c2c9c4]/30 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#ffb955] h-full w-[80%]"></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold uppercase">
            <span>SUCCESS RATE</span>
            <span className="font-data-mono">12%</span>
          </div>
          <div className="w-full bg-[#c2c9c4]/30 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#ba1a1a] h-full w-[12%]"></div>
          </div>
        </div>
        <div className="bg-[#ba1a1a] text-white p-3 rounded flex items-center gap-3">
          <span className="material-symbols-outlined">gpp_maybe</span>
          <p className="text-[10px] font-bold font-label-caps tracking-wider uppercase">BROKER IS ON INTERNAL WATCHLIST</p>
        </div>
      </div>
    </section>
  )
}

export default BrokerIntelligence
