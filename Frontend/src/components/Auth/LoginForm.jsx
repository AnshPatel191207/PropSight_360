import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { loginUser } from '../../features/authSlice'
import SEO from '../common/SEO'

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      const resultAction = await dispatch(loginUser(values));
      if (loginUser.fulfilled.match(resultAction)) {
        toast.success('Welcome back to PropSight 360!');
        navigate('/dashboard');
      } else {
        toast.error(resultAction.payload || 'Login failed');
      }
    },
  });

  const handleGoogleLogin = () => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    window.location.href = `${apiBase}/auth/google`;
  };

  return (
    <div className="w-full max-w-md glass-panel p-8 md:p-10 rounded-xl">
      <SEO title="Login" description="Sign in to access forensic real estate intelligence." />
      
      <header className="mb-8">
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Welcome back</h3>
        <p className="text-on-surface-variant font-body-md">Access institutional-grade property insights.</p>
      </header>

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

      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        <div className="space-y-1.5">
          <label className="font-label-caps text-on-surface-variant ml-1">Email address</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">mail</span>
            <input 
              className={`w-full bg-white/5 border ${formik.touched.email && formik.errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-lg pl-10 py-3 text-on-surface focus:outline-none focus:border-primary/50`}
              placeholder="you@example.com" 
              type="email" 
              {...formik.getFieldProps('email')}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-[10px] uppercase font-bold ml-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center px-1">
            <label className="font-label-caps text-on-surface-variant">Password</label>
            <Link className="font-label-caps text-primary hover:underline transition-all" to="/forgot-password">Forgot password?</Link>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">lock</span>
            <input 
              className={`w-full bg-white/5 border ${formik.touched.password && formik.errors.password ? 'border-red-500/50' : 'border-white/10'} rounded-lg pl-10 pr-10 py-3 text-on-surface focus:outline-none focus:border-primary/50`}
              placeholder="••••••••" 
              type="password" 
              {...formik.getFieldProps('password')}
            />
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-[10px] uppercase font-bold ml-1">{formik.errors.password}</div>
          ) : null}
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
