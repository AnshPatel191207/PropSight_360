import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-[#0F1923]/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5 font-sans antialiased text-sm tracking-tight">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#00D4AA]">PropSight 360</Link>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[#00D4AA] font-semibold hover:text-[#00D4AA] transition-colors duration-200" href="#">Product</a>
          <a className="text-slate-400 hover:text-[#00D4AA] transition-colors duration-200" href="#">Resources</a>
          <a className="text-slate-400 hover:text-[#00D4AA] transition-colors duration-200" href="#">Company</a>
          <a className="text-slate-400 hover:text-[#00D4AA] transition-colors duration-200" href="#">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-slate-400 hover:text-[#00D4AA] transition-colors duration-200 font-bold">Login</Link>
          <Link to="/signup" className="bg-primary-container text-on-primary px-4 py-2 font-bold rounded-lg hover:opacity-90 transition-all">
            Get Free Access
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
