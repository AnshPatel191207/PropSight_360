import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[921px] flex flex-col items-center justify-center pt-16 radial-glow">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary-container/20 rounded-full mb-8">
          <span className="material-symbols-outlined text-[16px] text-primary-container">security</span>
          <span className="font-label-caps text-label-caps text-primary-container">FORENSIC GRADE REAL ESTATE DATA</span>
        </div>
        <h1 className="font-display-xl text-display-xl md:text-[64px] leading-tight mb-6 max-w-4xl mx-auto">
          Don't buy a home until you've seen the <span className="text-primary-container">real data.</span>
        </h1>
        <p className="font-body-md text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10">
          PropSight 360 analyses your daily commute and reveals hidden neighbourhood flaws before you commit.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
          <Link to="/signup" className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-lg hover:scale-[1.02] transition-transform">
            Analyse a Property Free <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto mt-12 rounded-t-2xl border-x border-t border-white/10 bg-[#16222D] p-2 inner-highlight overflow-hidden shadow-2xl">
          <img alt="App Dashboard Interface" className="rounded-t-xl opacity-90 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD0ain4CluokcY2IFUeoJx2p7mIGSUJm0dyT4nYnjWTptk4ufYEZHjHWVaHn9pL3eUl2vD1-Eh2b8KH1aBgMUwMJ6uspllzNtuizGMa4uHpXm96t3aqwyD80zHBytjNqnqodJa1Ye1uchUk7mCM-GMTZ0M1bu4k9ky4DmKEsQZ5H5NLPphUsj9z6sOY6NTO0igNhdq_Q36YkDz7ODxa60axV2MbnUOzZ5Nj0iYXyRaqgeT2DfHbrUzysj-RIOLwlxFLo1ihiWDI-s" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
