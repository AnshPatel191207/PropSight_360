import React from 'react'
import { Link } from 'react-router-dom'

const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-[#00D4AA]/5 border-y border-[#00D4AA]/10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-headline-lg text-4xl md:text-5xl mb-6">Your ₹1 Crore decision deserves real data.</h2>
        <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto">Stop guessing. Start knowing. Join 12,000+ smart homebuyers using PropSight 360 today.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input className="bg-background border border-white/10 rounded-xl px-6 py-4 md:w-96 focus:ring-2 focus:ring-primary-container focus:border-transparent" placeholder="Paste listing URL here..." type="text" />
          <Link to="/signup" className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-xl text-center">Analyse Now</Link>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
