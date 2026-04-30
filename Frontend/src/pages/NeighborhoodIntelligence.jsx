import React from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import NeighborhoodHeader from '../components/Neighborhood/NeighborhoodHeader'
import DataTile from '../components/Neighborhood/DataTile'
import ResidentSentiment from '../components/Neighborhood/ResidentSentiment'
import InteractiveMap from '../components/Neighborhood/InteractiveMap'

const NeighborhoodIntelligence = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Breadcrumbs & Header */}
        <NeighborhoodHeader />

        {/* Top Stats Row */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Score Card */}
          <div className="lg:col-span-4 glass-panel p-6 flex flex-col items-center justify-center text-center relative rounded-xl">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-2 py-1 bg-[#00D4AA] text-on-primary font-label-caps text-[10px] border border-[#00D4AA] font-bold uppercase">HIGH QUALITY LIVING</span>
            </div>
            <div className="relative w-44 h-44 flex items-center justify-center mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" fill="transparent" r="75" stroke="rgba(0, 212, 170, 0.15)" strokeWidth="10"></circle>
                <circle cx="80" cy="80" fill="transparent" r="75" stroke="#00D4AA" strokeWidth="10" strokeDasharray="471.2" strokeDashoffset={471.2 - (471.2 * 78) / 100}></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display-xl text-5xl font-bold leading-none">78</span>
                <span className="font-label-caps text-slate-500 mt-1 uppercase font-bold text-xs">/ 100</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-data-mono text-xl">Rank: #12 <span className="text-slate-500 font-normal text-sm">of 847</span></p>
              <p className="text-primary font-data-mono text-sm flex items-center justify-center gap-1 uppercase">
                <span className="material-symbols-outlined text-sm">trending_up</span> +9.8% vs last year
              </p>
            </div>
          </div>

          {/* Data Tiles Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <DataTile title="SCHOOL QUALITY" value="A+" sub="BLR avg: B+ | You: A+" trend="up" color="border-l-[#46f1c5]" />
            <DataTile title="AQI LEVEL" value="Moderate" sub="BLR avg: Poor | You: Mod" trend="down" color="border-l-[#ffb955]" />
            <DataTile title="WATER SUPPLY" value="85%" sub="BLR avg: 62% | You: 85%" trend="up" color="border-l-[#46f1c5]" />
            <DataTile title="POWER STABILITY" value="99.2%" sub="BLR avg: 94% | You: 99%" trend="up" color="border-l-[#46f1c5]" />
            <DataTile title="CRIME RATE" value="Low Risk" sub="BLR avg: Med | You: Low" trend="up" color="border-l-[#ffb4ab]" />
            <DataTile title="FUTURE INFRA" value="Tier 1" sub="BLR avg: Tier 3 | You: T1" trend="up" color="border-l-[#46f1c5]" />
            <DataTile title="VASTU & ORIENT" value="82%" sub="BLR avg: 65% | You: 82%" trend="up" color="border-l-[#46f1c5]" />
            <DataTile title="FLOOD RISK" value="Minimal" sub="BLR avg: High | You: Min" trend="up" color="border-l-[#ffb4ab]" />
          </div>
        </section>

        {/* Sentiment Section */}
        <ResidentSentiment />

        {/* Large Interactive Map */}
        <InteractiveMap />
      </div>
    </DashboardLayout>
  )
}

export default NeighborhoodIntelligence
