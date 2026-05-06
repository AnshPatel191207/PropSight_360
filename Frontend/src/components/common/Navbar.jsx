import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F1923]/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-white/5 font-sans antialiased text-sm tracking-tight">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#00D4AA]">PropSight 360</Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-slate-400 hover:text-[#00D4AA] transition-colors duration-200 font-bold">Login</Link>
              <Link to="/signup" className="bg-primary-container text-on-primary px-4 py-2 font-bold rounded-lg hover:opacity-90 transition-all">
                Get Free Access
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-slate-400 hover:text-[#00D4AA] transition-colors duration-200 font-bold">Dashboard</Link>
              <button 
                onClick={logout}
                className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-2 font-bold rounded-lg hover:bg-red-500/20 transition-all uppercase text-[10px] tracking-widest"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-slate-400 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F14] border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-fade-in-up">
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="text-lg font-bold text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="bg-primary-container text-on-primary px-6 py-4 font-bold rounded-xl text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Get Free Access
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="text-lg font-bold text-slate-300" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
              <button 
                onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                className="bg-red-500/10 text-red-500 border border-red-500/20 px-6 py-4 font-bold rounded-xl uppercase text-xs tracking-widest"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
