import React from 'react'

const StatsTicker = () => {
  return (
    <section className="bg-primary-container py-6">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4 font-data-mono text-data-mono text-on-primary">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold">2.4M+</span>
            <span className="text-xs uppercase tracking-widest opacity-80">SCANNED LISTINGS</span>
          </div>
          <div className="h-8 w-px bg-on-primary/20 hidden md:block"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold">847</span>
            <span className="text-xs uppercase tracking-widest opacity-80">LOCALITIES COVERED</span>
          </div>
          <div className="h-8 w-px bg-on-primary/20 hidden md:block"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold">14</span>
            <span className="text-xs uppercase tracking-widest opacity-80">INTELLIGENCE SIGNALS</span>
          </div>
          <div className="h-8 w-px bg-on-primary/20 hidden md:block"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold">₹12,000Cr+</span>
            <span className="text-xs uppercase tracking-widest opacity-80">EQUITY PROTECTED</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsTicker
