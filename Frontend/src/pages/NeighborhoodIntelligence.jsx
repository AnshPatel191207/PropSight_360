import React, { useState, useEffect } from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import NeighborhoodHeader from '../components/Neighborhood/NeighborhoodHeader'
import DataTile from '../components/Neighborhood/DataTile'
import ResidentSentiment from '../components/Neighborhood/ResidentSentiment'
import InteractiveMap from '../components/Neighborhood/InteractiveMap'
import { fetchNeighborhoodIntelligence } from '../api/neighborhood'

const NeighborhoodIntelligence = () => {
  const [intelData, setIntelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState('Ahmedabad');
  const [searchQuery, setSearchQuery] = useState('Ahmedabad');

  const getIntelligence = async (query) => {
    try {
      setLoading(true);
      const response = await fetchNeighborhoodIntelligence({ area: query || 'Ahmedabad' });
      if (response.success) {
        setIntelData(response.data);
      }
    } catch (error) {
      console.error('Error fetching Neighborhood Intelligence:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIntelligence(searchQuery);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query.trim());
  };

  const getAQILevel = (aqi) => {
    switch (aqi) {
      case 1: return { label: 'Good', color: 'border-l-[#46f1c5]' };
      case 2: return { label: 'Fair', color: 'border-l-[#a3f146]' };
      case 3: return { label: 'Moderate', color: 'border-l-[#ffb955]' };
      case 4: return { label: 'Poor', color: 'border-l-[#ff8a65]' };
      case 5: return { label: 'Very Poor', color: 'border-l-[#ff5252]' };
      default: return { label: 'Unknown', color: 'border-l-slate-700' };
    }
  };

  const aqiInfo = intelData ? getAQILevel(intelData.aqi.aqi) : { label: 'Loading...', color: 'border-l-slate-700' };

  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <NeighborhoodHeader 
          location={location} 
          setLocation={setLocation} 
          onSearch={handleSearch} 
        />

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Score Card */}
          <div className="lg:col-span-4 glass-panel p-6 flex flex-col items-center justify-center text-center relative rounded-xl bg-[#0A0F14]/40">
            <div className="absolute top-0 right-0 p-4">
              <span className={`px-2 py-1 ${intelData?.overallScore > 70 ? 'bg-[#00D4AA]' : 'bg-orange-500'} text-on-primary font-mono text-[9px] font-bold uppercase tracking-widest`}>
                {intelData?.overallScore > 70 ? 'HIGH QUALITY LIVING' : 'STANDARD LIVING'}
              </span>
            </div>
            <div className="relative w-44 h-44 flex items-center justify-center mb-4">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                <circle cx="80" cy="80" fill="transparent" r="75" stroke="rgba(0, 212, 170, 0.1)" strokeWidth="8"></circle>
                <circle 
                  cx="80" cy="80" fill="transparent" r="75" stroke="#00D4AA" strokeWidth="8" 
                  strokeDasharray="471.2" 
                  strokeDashoffset={471.2 - (471.2 * (intelData?.overallScore || 0)) / 100}
                  className="transition-all duration-1000 ease-out"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-display-xl text-5xl font-bold leading-none">{loading ? '...' : intelData?.overallScore}</span>
                <span className="font-mono text-slate-500 mt-1 uppercase font-bold text-[10px] tracking-widest">/ 100</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-data-mono text-lg font-bold">Rank: #{loading ? '...' : Math.floor(intelData?.overallScore * 0.15)} <span className="text-slate-500 font-normal text-xs uppercase">of 847</span></p>
              <p className="text-primary font-data-mono text-xs flex items-center justify-center gap-1 uppercase font-bold tracking-tight">
                <span className="material-symbols-outlined text-sm">trending_up</span> +{(intelData?.overallScore * 0.1).toFixed(1)}% vs last year
              </p>
            </div>
          </div>

          {/* Data Tiles Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <DataTile 
              title="SCHOOL QUALITY" 
              value={loading ? '...' : intelData?.schoolQuality.grade} 
              sub={`POIs: ${intelData?.schoolQuality.count} | Rank: #${Math.floor(100 - (intelData?.schoolQuality.score || 0))}`} 
              trend="up" 
              color="border-l-[#46f1c5]" 
              score={intelData?.schoolQuality.score}
            />
            <DataTile 
              title="AQI LEVEL" 
              value={loading ? '...' : aqiInfo.label} 
              sub={loading ? '...' : intelData?.aqi.city.name.split(',')[0]} 
              trend={intelData?.aqi.aqi > 3 ? 'down' : 'up'} 
              color={aqiInfo.color} 
              score={intelData ? (6 - intelData.aqi.aqi) * 20 : 50}
            />
            <DataTile 
              title="WATER SUPPLY" 
              value={loading ? '...' : intelData?.waterSupply.value} 
              sub={`Status: ${intelData?.waterSupply.status}`} 
              trend="up" 
              color="border-l-[#46f1c5]" 
              score={parseInt(intelData?.waterSupply.value) || 50}
            />
            <DataTile 
              title="POWER STABILITY" 
              value={loading ? '...' : intelData?.powerStability.value} 
              sub={`Rel: ${intelData?.powerStability.status}`} 
              trend="up" 
              color="border-l-[#46f1c5]" 
              score={parseFloat(intelData?.powerStability.value) || 50}
            />
            <DataTile 
              title="CRIME RATE" 
              value={loading ? '...' : intelData?.crimeRate.level} 
              sub={`City Avg: ${intelData?.crimeRate.avg}`} 
              trend={intelData?.crimeRate.level === 'Low Risk' ? 'up' : 'down'} 
              color={intelData?.crimeRate.level === 'Low Risk' ? 'border-l-[#46f1c5]' : 'border-l-[#ff5252]'} 
              score={intelData?.crimeRate.level === 'Low Risk' ? 85 : 40}
            />
            <DataTile 
              title="FUTURE INFRA" 
              value={loading ? '...' : intelData?.futureInfra.tier} 
              sub={`Outlook: ${intelData?.futureInfra.status}`} 
              trend="up" 
              color="border-l-[#46f1c5]" 
              score={intelData?.futureInfra.tier === 'Tier 1' ? 90 : 60}
            />
            <DataTile 
              title="VASTU & ORIENT" 
              value={loading ? '...' : `${intelData?.vastu.score}%`} 
              sub={`Layout: ${intelData?.vastu.score > 75 ? 'Optimal' : 'Standard'}`} 
              trend="up" 
              color="border-l-[#46f1c5]" 
              score={intelData?.vastu.score}
            />
            <DataTile 
              title="FLOOD RISK" 
              value={loading ? '...' : intelData?.floodRisk.level} 
              sub={`Rel. to Sea: ${intelData?.floodRisk.avg}`} 
              trend={intelData?.floodRisk.level === 'Minimal' ? 'up' : 'down'} 
              color={intelData?.floodRisk.level === 'Minimal' ? 'border-l-[#46f1c5]' : 'border-l-[#ffb955]'} 
              score={100 - (intelData?.floodRisk.value || 0)}
            />
          </div>
        </section>

        <ResidentSentiment 
          data={intelData?.sentiment} 
          loading={loading} 
        />

        <InteractiveMap 
          center={intelData?.aqi?.city?.geo} 
          locationName={intelData?.aqi?.city?.name} 
          points={intelData?.mapPoints}
        />
      </div>
    </DashboardLayout>
  )
}

export default NeighborhoodIntelligence
