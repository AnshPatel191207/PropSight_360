import React, { useState } from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import CommuteHeader from '../components/Commute/CommuteHeader'
import CommuteControls from '../components/Commute/CommuteControls'
import LegBreakdown from '../components/Commute/LegBreakdown'
import CommuteMap from '../components/Commute/CommuteMap'
import AuditCardGrid from '../components/Commute/AuditCardGrid'
import { generateCommuteAudit } from '../api/commute'
import SEO from '../components/common/SEO'

const CommuteCheck = () => {
  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRunAudit = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateCommuteAudit(params);
      setAuditData(result.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to generate audit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <SEO 
        title="Commute Audit" 
        description="Forensic commute analysis exposing real vs advertised travel times with traffic delay multipliers, route visualization, and monsoon impact analysis."
        keywords="commute audit, real commute time, traffic delay analysis, property commute check, route analysis india, peak hour traffic, commute bias"
        canonical="https://propsight360.netlify.app/commute-check"
      />
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pb-12 pt-6">
        {/* Header */}
        <CommuteHeader auditData={auditData} />

        {error && (
          <div className="mb-6 p-4 bg-error/20 border border-error text-error rounded font-mono text-xs uppercase font-bold flex items-center gap-2">
            <span className="material-symbols-outlined">error</span>
            {error}
          </div>
        )}

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel: Input & Controls */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <CommuteControls onRunAudit={handleRunAudit} loading={loading} />
            <LegBreakdown segments={auditData?.segmentBreakdown} />
          </div>

          {/* Center Panel: Map & Visualization */}
          <div className="col-span-12 lg:col-span-9 flex flex-col gap-6">
            <CommuteMap polyline={auditData?.routePolyline} />
            <AuditCardGrid auditData={auditData} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CommuteCheck
