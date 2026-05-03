import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/common/ProtectedRoute'

// Lazy loaded pages
const LandingPage = lazy(() => import('./pages/LandingPage'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Onboarding = lazy(() => import('./pages/Onboarding'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NeighborhoodIntelligence = lazy(() => import('./pages/NeighborhoodIntelligence'))
const AuditReport = lazy(() => import('./pages/AuditReport'))
const CommuteCheck = lazy(() => import('./pages/CommuteCheck'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))

const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-surface">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/neighborhood" element={<ProtectedRoute><NeighborhoodIntelligence /></ProtectedRoute>} />
        <Route path="/audit-report" element={<ProtectedRoute><AuditReport /></ProtectedRoute>} />
        <Route path="/commute-check" element={<ProtectedRoute><CommuteCheck /></ProtectedRoute>} />
      </Routes>
    </Suspense>
  )
}

export default App
