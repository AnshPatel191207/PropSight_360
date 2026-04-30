import React from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import ForensicHeader from '../components/Forensics/ForensicHeader'
import VerificationInput from '../components/Forensics/VerificationInput'
import AuthenticityVerdict from '../components/Forensics/AuthenticityVerdict'
import FlagCard from '../components/Forensics/FlagCard'
import BrokerCard from '../components/Forensics/BrokerCard'
import AnomalyChart from '../components/Forensics/AnomalyChart'
import VerifiedListings from '../components/Forensics/VerifiedListings'

const ForensicAudit = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-4">
          <span>Intelligence</span>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span>Forensics</span>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-primary">Listing #PS-99821</span>
        </div>

        {/* Header Section */}
        <ForensicHeader />

        {/* Search Input with Platforms */}
        <VerificationInput />

        {/* Main Analysis Grid */}
        <div className="grid grid-cols-12 gap-6 mb-10">
          {/* Verdict Card */}
          <AuthenticityVerdict />

          {/* Analysis Dashboard */}
          <div className="col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              <FlagCard status="Critical" color="text-error" borderColor="border-error" title="Stock Photos Detected" desc="Original images matched with 42 other listings globally." icon="error" />
              <FlagCard status="Moderate" color="text-amber-500" borderColor="border-amber-500" title="Pricing Anomaly" desc="24% lower than median market rate for Prahlad Nagar." icon="warning" />
              <FlagCard status="Low Risk" color="text-primary" borderColor="border-primary" title="RERA Status Delay" desc="RERA portal shows project status as 'Expired'." icon="info" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <BrokerCard />
              <AnomalyChart />
            </div>
          </div>
        </div>

        {/* Verified Listings Section */}
        <VerifiedListings />
      </div>
    </DashboardLayout>
  )
}

export default ForensicAudit
