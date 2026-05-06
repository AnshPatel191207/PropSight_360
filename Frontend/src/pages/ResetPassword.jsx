import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { resetPassword } from '../api/auth';
import SEO from '../components/common/SEO';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    setLoading(true);
    setError('');
    try {
      await resetPassword(token, password);
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0d1512] text-on-surface font-body-md min-h-screen flex flex-col items-center justify-center px-6">
      <SEO 
        title="Reset Password" 
        description="Set a new secure password for your PropSight 360 account. Secure bank-grade encryption for your real estate intelligence data."
        keywords="reset password, propsight account recovery, secure password reset"
        canonical="https://propsight360.netlify.app/reset-password"
      />
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#00d4aa]/10 border border-[#46f1c5]/20 flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl text-[#00d4aa]">lock_reset</span>
          </div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Set New Password</h2>
          <p className="text-slate-400 text-xs font-bold uppercase mt-2">Enter your new secure password below.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold uppercase text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500 text-xs font-bold uppercase text-center">
            Password reset successful! Redirecting to login...
          </div>
        )}

        {!success && (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="reset-password" className="text-[10px] uppercase font-bold text-slate-500 tracking-wider ml-1">New Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                <input 
                  id="reset-password"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 py-3 text-sm text-white focus:outline-none focus:border-[#00d4aa]" 
                  type="password" 
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-[10px] uppercase font-bold text-slate-500 tracking-wider ml-1">Confirm New Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                <input 
                  id="confirm-password"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 py-3 text-sm text-white focus:outline-none focus:border-[#00d4aa]" 
                  type="password" 
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
              </div>
            </div>
            <button 
              className="w-full bg-[#00d4aa] text-[#00382b] font-bold py-4 rounded-lg hover:opacity-90 transition-all uppercase tracking-widest text-sm disabled:opacity-50" 
              type="submit"
              disabled={loading}
            >
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        )}

        <div className="mt-8 text-center pt-6 border-t border-white/5">
          <Link to="/login" className="text-slate-500 text-xs font-bold uppercase hover:text-white transition-colors">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
