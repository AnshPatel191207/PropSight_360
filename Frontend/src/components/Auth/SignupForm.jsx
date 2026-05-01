import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../api/auth'

const SocialButton = ({ icon, text, isEmoji, onClick }) => (
  <button onClick={onClick} className="bg-white/5 border border-white/10 flex items-center justify-center gap-3 py-3 rounded-lg hover:bg-white/10 transition-all w-full">
    {isEmoji ? <span className="text-lg">{icon}</span> : <img alt={text} className="w-5 h-5" src={icon} />}
    <span className="text-[11px] font-bold uppercase tracking-wider text-white">{text}</span>
  </button>
)

const ProfileTypeButton = ({ text, active, onClick }) => (
  <button onClick={onClick} className={`flex-1 py-2 px-3 text-[10px] font-bold uppercase tracking-wider border rounded transition-all ${active ? 'border-[#00d4aa] bg-[#00d4aa]/10 text-[#00d4aa]' : 'border-white/10 bg-white/5 text-slate-500 hover:text-white'}`} type="button">
    {text}
  </button>
)

const InputField = ({ icon, placeholder, type = 'text', value, onChange, name }) => (
  <div className="relative bg-white/5 border border-white/10 rounded-lg group focus-within:border-[#46f1c5] transition-all">
    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">{icon}</span>
    <input 
      className="w-full bg-transparent border-none rounded-lg px-10 py-3 text-sm text-white focus:ring-0 outline-none placeholder:text-slate-500 font-bold" 
      placeholder={placeholder} 
      type={type} 
      value={value}
      onChange={onChange}
      name={name}
      required
    />
  </div>
)

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    profileType: 'Homebuyer'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { fullName, email, phone, password, profileType } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setProfileType = (type) => {
    setFormData({ ...formData, profileType: type });
  };

  const getPasswordStrength = (pass) => {
    if (pass.length === 0) return { score: 0, text: 'None', color: 'text-slate-500', bars: [0,0,0,0] };
    if (pass.length < 6) return { score: 1, text: 'Weak', color: 'text-[#ffb4ab]', bars: [1,0,0,0] };
    if (pass.length < 10 && !(/[A-Z]/.test(pass) && /[0-9]/.test(pass))) return { score: 2, text: 'Fair', color: 'text-[#ffb955]', bars: [1,1,0,0] };
    if (pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass)) return { score: 4, text: 'Strong', color: 'text-[#46f1c5]', bars: [1,1,1,1] };
    return { score: 3, text: 'Good', color: 'text-[#46f1c5]', bars: [1,1,1,0] };
  };

  const strength = getPasswordStrength(password);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="w-full max-w-[520px] glass-panel p-10 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="mb-8 text-center">
        <h2 className="font-headline-lg text-3xl font-bold text-white mb-2 uppercase tracking-tight">Create your account</h2>
        <p className="text-[#00d4aa]/80 text-sm font-bold uppercase tracking-wide">Free forever. No credit card required.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-xs font-bold uppercase text-center">
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 mb-6">
        <SocialButton 
          icon="https://lh3.googleusercontent.com/aida-public/AB6AXuBgSq6fyU25K83LE9FD2CpM2PGDeeZmlMZvY3zBliNNcv-k84BtLvFKgew5jWJvkCb9VMTJnuB2aScAJpqBKOFd-RvGyv6mpy-SdZ8zX3Vd_2Bo0A_cxNe-Iiu9oRB_hYmvfe874qRpHvYAlsKX769vbqHeTwRZrDW51wbVdqJ3oYq120SEsha0GcT3z_WF03yyA8bZpqjaIngz7HbWJsL2r_iNwZzU526i-lHu4bD-l0mWTHu1_Gdx16uxFFYhE4oTmhvh45qzwkA" 
          text="Google" 
          onClick={handleGoogleLogin}
        />
        <SocialButton icon="📱" text="Phone" isEmoji />
      </div>
      <div className="relative flex items-center gap-4 mb-6">
        <div className="h-px bg-white/10 flex-1"></div>
        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">or continue with email</span>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>
      <form className="space-y-4" onSubmit={handleSignup}>
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Select Profile Type</label>
          <div className="flex gap-2">
            <ProfileTypeButton text="Homebuyer" active={profileType === 'Homebuyer'} onClick={() => setProfileType('Homebuyer')} />
            <ProfileTypeButton text="Tenant" active={profileType === 'Tenant'} onClick={() => setProfileType('Tenant')} />
            <ProfileTypeButton text="Investor" active={profileType === 'Investor'} onClick={() => setProfileType('Investor')} />
          </div>
        </div>
        <InputField icon="person" placeholder="Full Name" name="fullName" value={fullName} onChange={onChange} />
        <InputField icon="mail" placeholder="Email address" type="email" name="email" value={email} onChange={onChange} />
        <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg group focus-within:border-[#46f1c5] transition-all">
          <div className="pl-3 pr-2 border-r border-white/10">
            <span className="text-xs font-bold text-slate-400 font-mono">+91</span>
          </div>
          <input 
            className="w-full bg-transparent border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-0 outline-none placeholder:text-slate-500 font-bold" 
            placeholder="Phone number" 
            type="tel" 
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </div>
        <div className="space-y-3">
          <div className="relative bg-white/5 border border-white/10 rounded-lg group focus-within:border-[#46f1c5] transition-all">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
            <input 
              name="password"
              value={password} 
              onChange={onChange} 
              className="w-full bg-transparent border-none rounded-lg px-10 py-3 text-sm text-white focus:ring-0 outline-none placeholder:text-slate-500 font-bold" 
              placeholder="Create password" 
              type="password" 
              required
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg cursor-pointer hover:text-white">visibility</span>
          </div>
          <div className="space-y-2">
            <div className="flex gap-1 h-[6px]">
              <div className={`flex-1 ${strength.bars[0] ? 'bg-[#ffb4ab]' : 'bg-white/10'} rounded-full`}></div>
              <div className={`flex-1 ${strength.bars[1] ? 'bg-[#ffb955]' : 'bg-white/10'} rounded-full`}></div>
              <div className={`flex-1 ${strength.bars[2] ? 'bg-[#46f1c5]' : 'bg-white/10'} rounded-full`}></div>
              <div className={`flex-1 ${strength.bars[3] ? 'bg-[#46f1c5]' : 'bg-white/10'} rounded-full`}></div>
            </div>
            <div className="text-[11px] text-slate-500 font-bold uppercase">
              Password strength: <span className={strength.color}>{strength.text}</span>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 py-2">
          <input className="mt-1 rounded bg-white/5 border-white/10 text-[#46f1c5] focus:ring-0" id="terms" type="checkbox" required />
          <label className="text-[11px] text-slate-400 leading-snug font-bold" htmlFor="terms">
            I agree to the <a className="text-white underline" href="#">Terms of Service</a> and <a className="text-white underline" href="#">Privacy Policy</a>. I consent to receiving RERA update notifications.
          </label>
        </div>
        <button 
          className="w-full bg-[#00d4aa] text-[#002118] font-bold py-4 rounded-lg hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group uppercase tracking-widest text-sm disabled:opacity-50" 
          type="submit"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : 'Create Free Account'}
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </form>
      <div className="mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-sm text-slate-400 font-bold uppercase">Already have an account? <Link to="/login" className="text-[#46f1c5] font-bold hover:underline">Sign in →</Link></p>
      </div>
    </div>
  )
}

export default SignupForm
