import React from 'react'

const Testimonials = () => {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline-lg text-3xl mb-20 text-center">Homebuyers Who Saw the Truth</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl">
            <div className="flex gap-1 text-primary-container mb-4">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="italic text-on-surface-variant mb-6">"PropSight exposed that the 'quiet' balcony faced a high-tension power line obscured in the photos. Saved me from a ₹2.5Cr mistake."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm">Anirudh V.</div>
                <div className="text-xs text-slate-500">Ahmedabad Investor</div>
              </div>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-2xl">
            <div className="flex gap-1 text-primary-container mb-4">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="italic text-on-surface-variant mb-6">"The commute audit was eye-opening. What the brochure said was 15 mins took 55 mins in real traffic. We found a better spot."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm">Megha S.</div>
                <div className="text-xs text-slate-500">First-time Buyer, Ahmedabad</div>
              </div>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-2xl">
            <div className="flex gap-1 text-primary-container mb-4">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="italic text-on-surface-variant mb-6">"Finally, a tool that treats real estate like a serious financial asset. The PDF reports are board-room quality."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-700"></div>
              <div>
                <div className="font-bold text-sm">Vikram K.</div>
                <div className="text-xs text-slate-500">Portfolio Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
