import React from 'react'

const FeatureDeepDives = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-40">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-primary-container font-data-mono text-sm tracking-widest block mb-4 uppercase">Validation Engine</span>
            <h3 className="font-headline-lg text-4xl mb-6">Listing Authenticity Audit</h3>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              We use historical image matching to detect if the "Sample Flat" photo has been used by 15 different projects. We cross-verify the RERA number against current construction progress captured via weekly satellite imagery.
            </p>
            <div className="flex items-center gap-4 p-4 glass-panel rounded-xl border-l-4 border-primary-container">
              <span className="material-symbols-outlined text-primary-container">verified_user</span>
              <span className="font-bold text-sm">Eliminated 42,000+ scam listings in the last quarter.</span>
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative glass-panel p-4 rounded-3xl inner-highlight overflow-hidden max-w-sm mx-auto shadow-2xl">
              <img alt="Mobile App Interface" className="rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7ib8ACeo_TyDMhf65Ih6e1DdvGeTWZ5x207uIq9VG7wbH6RXtC90h3mq1GYkuMNXDbt2AFKKd8lx6EMTv4vISB4DDhLStXgmM1WNjDZI77uFZ-ylX6-k59VQS7o02hFwQoOxo1df3YoZP85CkJgeWsm2JysuGOAN1NTC-lj0g1ouGX7EcqQ1T6qUb7HYyNfYPekRhBrVck_dBx7A5VRzzMW1h4y9OV2-69kvScpK4dXoaGqCW5EdN6xNgGgwyNW1by6PnxYrtiKc" />
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative glass-panel p-4 rounded-3xl inner-highlight overflow-hidden shadow-2xl">
              <img alt="Desktop Dashboard Map View" className="rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR7qmVehk_mu2JHTUsRLBBd4Sfo-Lsk57S8nUyD7pw6OcV3cXHAPp2rmXnGWvnNU8hMeRc3tuiXvIoELgVUERylCQt0CrdXCRTIUgaVzMW-Xc_th0UpKtWH9XP5JtcpwvNvU81P9xcKIxUwAAbBsWOMLwgUV14JqKgTmTeto_AD107_KaGqexVcwOxXjToGhztKTzoNLqZfb-1a1ukKZC3qWUJFI54tVCVZrkb6pSZQpMctgDiYxMYhV2C67bJvxfvDcDZzenXuY0" />
            </div>
          </div>
          <div className="flex-1">
            <span className="text-secondary font-data-mono text-sm tracking-widest block mb-4 uppercase">Hyperlocal OS</span>
            <h3 className="font-headline-lg text-4xl mb-6">Neighbourhood Intelligence</h3>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Go beyond the "green view". Our database tracks over 450 hyperlocal variables including ground water levels, flood zones, planned commercial zoning, and local crime heatmaps.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="text-primary-container font-data-mono mb-1">94%</div>
                <div className="text-xs text-on-surface-variant">DATA ACCURACY</div>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <div className="text-primary-container font-data-mono mb-1">Real-time</div>
                <div className="text-xs text-on-surface-variant">GOVT SYNC</div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1">
            <span className="text-on-tertiary-container font-data-mono text-sm tracking-widest block mb-4 uppercase">Mobility Index</span>
            <h3 className="font-headline-lg text-4xl mb-6">Commute Audit</h3>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              Never trust a broker's distance estimate. We provide a minute-by-minute breakdown of your daily commute at 8 AM and 6 PM, including rain-day delays and metro proximity reality checks.
            </p>
            <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              Explore Heatmaps <span className="material-symbols-outlined text-[18px]">map</span>
            </button>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <div className="relative glass-panel p-4 rounded-3xl inner-highlight overflow-hidden max-w-sm mx-auto shadow-2xl">
              <img alt="Commute analysis map" className="rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo0UBdsnZzntb9Cx0pM3c6UTo2ndpUVvnHkDoH7-1Rz5VPM5vinaa41AkFCSJ7K4UgGGKI4y_aYh0oZ1d9fp4tV3CgktN53aISE2vxQgta2zMTSymlgGyzgKf2-FfA_4DPZvGDP2-cLP5AZJ_AI-qQqt_ClYTq5GFgBALKxBQ6V1y6e2fTpL7xnQtarJUOQ0wFHyBlb88sjaWek-RYXDvyyUiZ51P4lTYabffDMDGu1gzN1J9aHE-bUPidxKrs9YkEowi9yZLAG_0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureDeepDives
