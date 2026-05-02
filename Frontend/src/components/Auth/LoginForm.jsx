import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../api/auth'

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    window.location.href = `${apiBase}/auth/google`;
  };

  return (
    <div className="w-full max-w-md glass-panel p-8 md:p-10 rounded-xl">
      <header className="mb-8">
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome back</h3>
        <p className="text-on-surface-variant font-body-md">Access institutional-grade property insights.</p>
      </header>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold uppercase text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 mb-8">
        <button 
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-surface-container-highest hover:bg-surface-variant transition-colors border border-white/5 py-3 rounded-lg text-on-surface"
        >
          <span className="font-label-caps">Google</span>
        </button>
      </div>

      <div className="relative flex items-center justify-center mb-8">
        <div className="border-t border-white/10 w-full"></div>
        <span className="absolute bg-[#111c25] px-4 font-label-caps text-on-surface-variant">or email login</span>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label className="font-label-caps text-on-surface-variant ml-1">Email address</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">mail</span>
            <input 
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 py-3 text-on-surface focus:outline-none focus:border-primary/50" 
              placeholder="you@example.com" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between items-center px-1">
            <label className="font-label-caps text-on-surface-variant">Password</label>
            <Link className="font-label-caps text-primary hover:underline transition-all" to="/forgot-password">Forgot password?</Link>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">lock</span>
            <input 
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-10 py-3 text-on-surface focus:outline-none focus:border-primary/50" 
              placeholder="••••••••" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg cursor-pointer hover:text-on-surface">visibility</span>
          </div>
        </div>
        <button 
          className="w-full bg-primary-container hover:opacity-90 active:scale-[0.99] transition-all py-4 rounded-lg font-bold text-black font-headline-lg text-sm uppercase tracking-wider mt-4 disabled:opacity-50" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In to PropSight 360'}
        </button>
      </form>

      <div className="mt-10 text-center">
        <p className="text-on-surface-variant font-body-md">
          New to PropSight 360? 
          <Link to="/signup" className="text-primary-container font-bold ml-1 hover:underline">Create one free</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
