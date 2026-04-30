import React from 'react'

const Bar = ({ value, label, color, height, sub, glow }) => (
  <div className="flex-1 flex flex-col items-center gap-2 z-10">
    <div className={`w-full ${color} ${height} rounded-t flex items-center justify-center ${glow ? 'shadow-[0_0_15px_rgba(186,26,26,0.3)]' : ''}`}>
      <span className="text-[9px] font-bold text-white uppercase">{value}</span>
    </div>
    <p className={`text-[9px] font-bold uppercase ${color.replace('bg-', 'text-')}`}>{label}</p>
    <p className={`text-[8px] font-bold px-1 rounded uppercase ${color.replace('bg-', 'text-')} ${color.replace('bg-', 'bg-')}/10`}>{sub}</p>
  </div>
)

const MarketComparison = () => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6 border-l-4 border-[#006b55] pl-4">
        <h2 className="font-display-xl text-xl font-bold uppercase tracking-tight">Market Comparison</h2>
      </div>
      <div className="bg-[#f0f1f0] border border-[#c2c9c4] p-6 rounded-xl flex flex-col justify-center">
        <div className="flex items-center justify-between mb-8">
          <div className="text-center px-4">
            <p className="text-[10px] font-label-caps text-[#ba1a1a] mb-1 uppercase font-bold">THIS LISTING</p>
            <p className="text-xl font-display-xl font-bold text-[#ba1a1a]">₹4.2 Cr</p>
          </div>
          <div className="h-10 w-px bg-[#c2c9c4]"></div>
          <div className="text-center px-4">
            <p className="text-[10px] font-label-caps text-[#006b55] mb-1 uppercase font-bold">MEDIAN</p>
            <p className="text-xl font-display-xl font-bold text-[#006b55]">₹7.1 Cr</p>
          </div>
        </div>
        <div className="relative h-48 mb-6 flex items-end justify-between gap-6 px-4">
          <div className="absolute top-0 left-0 right-0 border-t border-dashed border-[#006b55]/40 z-0">
            <span className="absolute -top-4 right-0 text-[8px] font-label-caps font-bold text-[#006b55]/60 uppercase">Area median</span>
          </div>
          <Bar value="₹7.1 Cr" label="MEDIAN" color="bg-[#006b55]" height="h-32" sub="Area benchmark" />
          <Bar value="₹4.2 Cr" label="THIS LISTING" color="bg-[#ba1a1a]" height="h-20" sub="⚠ -41% vs median" glow />
          <Bar value="₹5.8 Cr" label="LOWEST" color="bg-[#ffb955]" height="h-24" sub="Floor price" />
        </div>
      </div>
    </section>
  )
}

export default MarketComparison
