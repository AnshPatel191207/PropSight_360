import React from 'react'
import DashboardLayout from '../components/common/DashboardLayout'
import FeatureGrid from '../components/Dashboard/FeatureGrid'
import SEO from '../components/common/SEO'

const Dashboard = () => {
  return (
    <DashboardLayout>
      <SEO title="Dashboard" description="Overview of your property audits and neighborhood intelligence." />
      <div className="p-6">
        <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 pt-4">
          {/* Main Action Cards */}
          <section className="col-span-12 grid grid-cols-10 gap-6">
            <FeatureGrid />
          </section>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
