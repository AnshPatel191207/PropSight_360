import React from 'react'

const ProblemSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-headline-lg text-headline-lg md:text-4xl mb-4">The 3 Problems Killing Your Property Decision</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">Surface-level listings hide structural, financial, and legal traps that cost years of savings.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-data-mono text-xs text-error font-bold">PAIN SCORE: 9.8/10</div>
            <div className="w-12 h-12 bg-error/10 border border-error/20 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-error">dangerous</span>
            </div>
            <h3 className="font-headline-lg text-xl mb-4 text-error">Fake Listings</h3>
            <p className="text-on-surface-variant mb-6">Brokers use photos from 2018 or other projects to get your phone number. 64% of popular portal listings are bait.</p>
            <ul className="space-y-3 font-label-caps text-[12px]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[14px]">close</span> RECYCLED STOCK PHOTOS</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-error text-[14px]">close</span> PHANTOM AVAILABILITY</li>
            </ul>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-error transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-data-mono text-xs text-secondary font-bold">PAIN SCORE: 8.2/10</div>
            <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">distance</span>
            </div>
            <h3 className="font-headline-lg text-xl mb-4 text-secondary">Commute Lies</h3>
            <p className="text-on-surface-variant mb-6">"10 mins from Gift City" means at 3 AM. We analyze actual historical traffic data for peak Ahmedabad hours.</p>
            <ul className="space-y-3 font-label-caps text-[12px]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[14px]">warning</span> PEAK HOUR BOTTLENECKS</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-[14px]">warning</span> LAST-MILE FRAUD</li>
            </ul>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group border-primary-container/20">
            <div className="absolute top-0 right-0 p-4 font-data-mono text-xs text-primary-container font-bold">PAIN SCORE: 7.5/10</div>
            <div className="w-12 h-12 bg-primary-container/10 border border-primary-container/20 rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary-container">analytics</span>
            </div>
            <h3 className="font-headline-lg text-xl mb-4 text-primary-container">Missing Neighbourhood Data</h3>
            <p className="text-on-surface-variant mb-6">Brochures don't mention the upcoming open drain or the disputed land parcel next door. We do.</p>
            <ul className="space-y-3 font-label-caps text-[12px]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[14px]">check_circle</span> VASTU & LEGAL AUDITS</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary-container text-[14px]">check_circle</span> ENCUMBRANCE TRACKING</li>
            </ul>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-primary-container transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
