import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import NeighborhoodIntelligence from './pages/NeighborhoodIntelligence'
import AuditReport from './pages/AuditReport'
import CommuteCheck from './pages/CommuteCheck'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/neighborhood" element={<NeighborhoodIntelligence />} />
      <Route path="/audit-report" element={<AuditReport />} />
      <Route path="/sample-report" element={<AuditReport isStandalone={true} />} />
      <Route path="/commute-check" element={<CommuteCheck />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  )
}

export default App
