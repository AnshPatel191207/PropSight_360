import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0F1923] w-full pt-16 pb-8 border-t border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        <div>
          <div className="text-lg font-black text-white mb-6">PropSight 360</div>
          <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">Forensic intelligence for the high-stakes Indian real estate market.</p>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-widest font-mono text-[#00D4AA] mb-6">Product</h5>
          <ul className="space-y-4 text-xs font-mono">
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Features</a></li>
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Data Sources</a></li>
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">API</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-widest font-mono text-[#00D4AA] mb-6">Resources</h5>
          <ul className="space-y-4 text-xs font-mono">
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Case Studies</a></li>
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Whitepapers</a></li>
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-xs uppercase tracking-widest font-mono text-[#00D4AA] mb-6">Legal</h5>
          <ul className="space-y-4 text-xs font-mono">
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Security</a></li>
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-[#00D4AA] transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs uppercase tracking-widest font-mono text-slate-500">© 2024 PropSight 360. Forensic Real Estate Intelligence.</p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-slate-500 hover:text-[#00D4AA] cursor-pointer" role="link" aria-label="Visit our website" tabIndex="0">public</span>
          <span className="material-symbols-outlined text-slate-500 hover:text-[#00D4AA] cursor-pointer" role="link" aria-label="Share PropSight 360" tabIndex="0">share</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
