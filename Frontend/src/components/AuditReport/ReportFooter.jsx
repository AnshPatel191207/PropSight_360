import React from 'react'

const ReportFooter = () => {
  return (
    <footer className="mt-20 border-t border-[#c2c9c4] pt-8">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        <div className="max-w-md">
          <p className="font-display-xl text-lg font-extrabold text-[#006b55] mb-4 uppercase tracking-tighter">PropSight 360</p>
          <p className="text-[10px] leading-relaxed text-[#444746] font-bold uppercase opacity-80">
            DISCLAIMER: THIS AUDIT REPORT IS GENERATED BASED ON PROPRIETARY DATA MODELS AND THIRD-PARTY PUBLIC RECORDS. IT IS INTENDED FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE LEGAL ADVICE OR A GUARANTEE OF ASSET VALUE. ALWAYS CONSULT WITH A CERTIFIED PROPERTY ATTORNEY BEFORE FINALIZING TRANSACTIONS.
          </p>
        </div>
        <div className="space-y-2 text-right">
          <p className="text-[10px] font-bold font-label-caps text-[#444746] uppercase">VERIFICATION STAMP</p>
          <div className="p-4 border border-[#c2c9c4] rounded bg-[#f7f9f7] inline-block text-left">
            <div className="flex items-center gap-3 text-[#006b55] mb-1">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-[10px] font-bold font-data-mono uppercase">BLOCKCHAIN SECURED ID</span>
            </div>
            <p className="text-[10px] font-data-mono text-[#444746] font-bold uppercase">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
          </div>
        </div>
      </div>
      <p className="text-[10px] font-label-caps text-[#444746] font-bold uppercase opacity-60">© 2024 PROPSIGHT INTELLIGENCE PVT LTD. ALL RIGHTS RESERVED.</p>
    </footer>
  )
}

export default ReportFooter
