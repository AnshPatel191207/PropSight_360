import React from 'react'

const ReportBadge = ({ icon, text }) => (
  <span className="flex items-center gap-1.5 px-3 py-1 bg-[#e8e9e8] rounded text-[10px] font-bold uppercase font-label-caps border border-[#c2c9c4]">
    <span className="material-symbols-outlined text-sm">{icon}</span> {text}
  </span>
)

const PropertySummary = () => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div>
        <h1 className="font-display-xl text-3xl font-bold mb-2 uppercase tracking-tight text-[#191c1b]">Adani Shantigram, Water Lily</h1>
        <p className="text-[#444746] text-sm max-w-lg font-bold">Near Vaishnodevi Circle, SG Highway, Ahmedabad, Gujarat 382421</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <ReportBadge icon="home_work" text="AMC VERIFIED" />
        <ReportBadge icon="public" text="MAGICBRICKS SOURCE" />
        <ReportBadge icon="balance" text="VASTU COMPLIANT" />
      </div>
    </div>
  )
}

export default PropertySummary
