import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../api/auth'

const ForgotPasswordForm = ({ onEmailSent }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await forgotPassword(email);
      onEmailSent();
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="initial-state" className="animate-in fade-in duration-500">
      <Link to="/login" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#46f1c5] transition-colors duration-200 group mb-10">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        <span className="font-label-caps text-[11px] uppercase font-bold">Back to Login</span>
      </Link>
      <div className="flex flex-col items-center text-center mb-10">
        <div className="w-20 h-20 rounded-full bg-[#00d4aa]/10 border border-[#46f1c5]/20 flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-[48px] text-[#00d4aa]" style={{ fontVariationSettings: '"FILL" 0, "wght" 200' }}>shield_person</span>
        </div>
        <h1 className="font-display-xl text-3xl font-bold text-white mb-3 uppercase tracking-tight">Reset your password</h1>
        <p className="text-slate-400 max-w-[320px] font-bold uppercase text-[10px] tracking-wide">We'll send a secure reset link to your inbox within 2 minutes.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold uppercase text-center">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="font-label-caps text-[11px] text-slate-400 uppercase ml-1 font-bold" htmlFor="email">Email Address</label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#46f1c5] transition-colors text-xl">mail</span>
            <input 
              className="w-full bg-white/5 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00d4aa] focus:ring-2 focus:ring-[#00d4aa]/20 transition-all font-bold" 
              id="email" 
              name="email" 
              placeholder="investor@firm.in" 
              required 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button 
          className="w-full bg-[#00d4aa] text-[#00382b] font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all uppercase tracking-widest text-sm disabled:opacity-50" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </button>
      </form>
      <div className="mt-8 text-center pt-6 border-t border-white/5">
        <p className="text-slate-500 text-xs font-bold uppercase">
          Didn't receive it? <a className="text-[#46f1c5] font-bold hover:underline underline-offset-4 decoration-[#46f1c5]/30" href="#">Resend Link</a>
        </p>
      </div>
    </div>
  )
}

export default ForgotPasswordForm
