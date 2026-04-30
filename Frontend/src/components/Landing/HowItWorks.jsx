import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-headline-lg text-3xl mb-20 text-center">4 Steps to Forensic Certainty</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px dashed-line -z-10"></div>
          {/* Step 1 */}
          <div className="flex-1 text-center group">
            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary-container flex items-center justify-center mx-auto mb-6 text-primary-container font-bold text-xl relative z-10 group-hover:bg-primary-container group-hover:text-background transition-all">1</div>
            <h4 className="font-headline-lg text-lg mb-2">Paste URL</h4>
            <p className="text-on-surface-variant text-sm px-4">Copy the listing link from any major property portal.</p>
          </div>
          {/* Step 2 */}
          <div className="flex-1 text-center group">
            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary-container flex items-center justify-center mx-auto mb-6 text-primary-container font-bold text-xl relative z-10 group-hover:bg-primary-container group-hover:text-background transition-all">2</div>
            <h4 className="font-headline-lg text-lg mb-2">Cross-verify</h4>
            <p className="text-on-surface-variant text-sm px-4">Our AI scans RERA, satellite logs, and local govt records.</p>
          </div>
          {/* Step 3 */}
          <div className="flex-1 text-center group">
            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary-container flex items-center justify-center mx-auto mb-6 text-primary-container font-bold text-xl relative z-10 group-hover:bg-primary-container group-hover:text-background transition-all">3</div>
            <h4 className="font-headline-lg text-lg mb-2">Forensic Report</h4>
            <p className="text-on-surface-variant text-sm px-4">Get a PDF exposing "Red Flags" and actual market value.</p>
          </div>
          {/* Step 4 */}
          <div className="flex-1 text-center group">
            <div className="w-16 h-16 rounded-full bg-background border-2 border-primary-container flex items-center justify-center mx-auto mb-6 text-primary-container font-bold text-xl relative z-10 group-hover:bg-primary-container group-hover:text-background transition-all">4</div>
            <h4 className="font-headline-lg text-lg mb-2">Protected Decision</h4>
            <p className="text-on-surface-variant text-sm px-4">Buy with data-backed confidence or walk away early.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
