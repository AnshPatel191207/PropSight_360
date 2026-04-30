import React from 'react'

const BrokerCard = () => (
  <div className="glass-panel p-5 rounded-xl inner-highlight bg-[#16222D]/70">
    <div className="flex items-center gap-4 mb-6">
      <img alt="Broker" className="w-14 h-14 rounded-lg object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI0q8N98e_lwaW0lIPoTK9ZOe-1jxyGKIM0doh6G2xZGCBxispotYMQhNxCEENGHt5pL8x5LQK10Wz_0vh4Qp-NswEum8Zvi0wEyi1P20zEn_LdCZmf3c1KSkb7FoxC-lwNqlQjcKxXd4IRMh6Axz8xDaA7k0uF--93SxsZ0e6gapFLUJLKYftZ9XloXuVYMEdVuv_9o3ZR7L0_TAZv_en1xDhUq7GQaeh5hY2IkY3YsszpBx7LiiMRIugAuWmu-VyeJS4QWfpuYI" />
      <div>
        <h3 className="text-sm font-bold text-on-surface uppercase tracking-tight">Rakesh Malhotra</h3>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="material-symbols-outlined text-amber-500 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="font-data-mono text-xs text-amber-500 font-bold">3.2</span>
          <span className="text-[10px] text-slate-500 ml-1 uppercase font-bold">(12 Reviews)</span>
        </div>
      </div>
    </div>
    <div className="space-y-3 mb-6">
      <div className="flex justify-between items-center bg-white/5 p-2 rounded">
        <span className="text-[10px] font-label-caps text-slate-400 uppercase font-bold">Blacklist Check</span>
        <span className="flex items-center gap-1 text-error text-[10px] font-bold uppercase">
          <span className="material-symbols-outlined text-[14px]">report</span>
          FLAGGED
        </span>
      </div>
      <div className="flex justify-between items-center border-b border-white/5 pb-2">
        <span className="text-[10px] font-label-caps text-slate-400 uppercase font-bold">Active Listings</span>
        <span className="font-data-mono text-xs text-on-surface font-bold">142</span>
      </div>
      <div className="flex justify-between items-center border-b border-white/5 pb-2">
        <span className="text-[10px] font-label-caps text-slate-400 uppercase font-bold">Success Rate</span>
        <span className="font-data-mono text-xs text-primary font-bold">68%</span>
      </div>
    </div>
    <button className="w-full border border-primary/30 text-primary py-2 rounded text-[10px] font-bold uppercase hover:bg-primary/5 transition-colors">View Broker History</button>
  </div>
)

export default BrokerCard
