import React from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import LiveFeedTicker from '../components/Dashboard/LiveFeedTicker'
import FeatureGrid from '../components/Dashboard/FeatureGrid'
import PropertyCard from '../components/Dashboard/PropertyCard'
import MarketPulse from '../components/Dashboard/MarketPulse'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 pt-4">
          {/* Hero Banner / Ticker */}
          <LiveFeedTicker />

          {/* Feature Bento Grid */}
          <section className="col-span-12 lg:col-span-8 grid grid-cols-10 gap-6">
            <FeatureGrid />

            <div className="col-span-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline-lg text-lg uppercase tracking-tight">Forensic Property Feed</h2>
                <button className="text-[10px] font-label-caps text-primary border border-primary/20 px-3 py-1.5 rounded hover:bg-primary/5 transition-colors uppercase font-bold">EXPORT AUDIT LOG</button>
              </div>
              <div className="space-y-3">
                <PropertyCard 
                  title="Savvy Swaraaj, Gota" 
                  location="Vaishnodevi Circle • 3BHK" 
                  status="VERIFIED" 
                  risk="LOW RISK" 
                  score="88" 
                  change="+4" 
                  trend="up"
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuBwIkkNIfJKKFv124De6YJWcLcHYc_eFHLogtOKLCaXX5YvWoeO--zp1yuP4EBs-h1kRb3wwkOBivKlkEsqSQUFjAqAS2Q3NINTwN9RKb472yO4RJ5SIb1fFqxBDODjRJkeXu0Rya-iYeiZkUOGfdseixmZF24bmKqroBHoy7CnWRikmBLIGOvbw4K1uN2mXaHhylYYuI7NA3QhVgn-Uxq2CilF51YGpNTIhuNFOOjvxasp0q9GtdxSykgbvBAjzUNYjP959TSj9v4"
                />
                <PropertyCard 
                  title="Godrej Garden City" 
                  location="Jagatpur, SG Highway • 1200sqft" 
                  status="FAKE/CRITICAL" 
                  risk="SUSPICIOUS" 
                  score="32" 
                  change="-12" 
                  trend="down"
                  img="https://lh3.googleusercontent.com/aida-public/AB6AXuA0dnl71wq7uJv6qb3YmW40XvSnUbhE3QISs9HcEkNYSkOVyWImhrhX3zCbZdO-cMhIGsoftdpbZw_nbULOU2cYKVx3yEF2wHicOQwY27JGU5D6djK4u2BDkP4hIwWp4_rbVL5dTYRfwpsic3z4Bzi6s-Y7Sa3UI9eE4yNv1gDdttrYHFV-TlIfrWU58bQVT1tHtfAApuOLxVY-MsFS3p4Hi2b8H_OqYBgjBwQN3MBP38rGj-lbSjS4Y1wuw4M2rjWpZAu5MnfobMQ"
                  critical
                />
              </div>
            </div>
          </section>

          {/* Right Panel */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <MarketPulse />

            <div className="bg-primary p-4 rounded flex items-center justify-between hover:brightness-110 transition-all cursor-pointer group">
              <div>
                <p className="text-on-primary font-label-caps text-[10px] opacity-80 uppercase font-bold">FORENSIC TOOLKIT</p>
                <h3 className="text-on-primary font-headline-lg text-sm uppercase tracking-tight">Deep Audit Single Property</h3>
              </div>
              <span className="material-symbols-outlined text-on-primary text-[24px] group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
