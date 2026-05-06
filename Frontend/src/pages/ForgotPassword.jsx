import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm'
import ResetSuccessMessage from '../components/Auth/ResetSuccessMessage'
import SEO from '../components/common/SEO'

const ForgotPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="bg-[#0d1512] text-on-surface font-body-md min-h-screen selection:bg-primary-container selection:text-on-primary-container overflow-hidden flex flex-col">
      {/* Centered Logo Header */}
      <SEO 
        title="Forgot Password" 
        description="Reset your PropSight 360 account password securely. Enter your email to receive a password reset link."
        canonical="https://propsight360.netlify.app/forgot-password"
      />
      <header className="w-full flex flex-col items-center pt-12 pb-8 z-50">
        <Link to="/" className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00d4aa]/20 border border-[#46f1c5]/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#46f1c5] text-2xl" style={{ fontVariationSettings: '"FILL" 1' }}>shield</span>
            </div>
            <div className="text-2xl font-black tracking-tighter text-[#46f1c5] uppercase">PropSight 360</div>
          </div>
          <p className="font-label-caps text-[10px] tracking-[0.2em] text-slate-500 uppercase font-bold">Real Estate Intelligence</p>
        </Link>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center relative px-6 py-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.1)_0%,rgba(13,21,18,0)_70%)] pointer-events-none"></div>
        <div className="w-full max-w-[480px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[16px] p-12 relative z-10">
          {!isSuccess ? (
            <ForgotPasswordForm onEmailSent={() => setIsSuccess(true)} />
          ) : (
            <ResetSuccessMessage onBack={() => setIsSuccess(false)} />
          )}
        </div>
      </main>

      <footer className="bg-transparent text-slate-500 font-mono uppercase tracking-widest text-[10px] border-t border-white/10 flex flex-col md:flex-row justify-between items-center w-full px-8 py-6 gap-4 font-bold">
        <div className="text-center md:text-left">
          © 2024 PropSight Intelligence Pvt Ltd. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Metro Proximity</a>
        </div>
      </footer>
    </div>
  )
}

export default ForgotPassword
