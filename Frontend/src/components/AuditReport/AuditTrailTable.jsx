import React from 'react'

const TableRow = ({ label, status, statusColor, icon, severity, severityBg, obs, fail }) => (
  <tr className={fail ? 'bg-[#ba1a1a]/5' : ''}>
    <td className="p-4 font-bold uppercase text-[12px]">{label}</td>
    <td className="p-4"><span className={`flex items-center gap-1 font-bold ${statusColor}`}><span className="material-symbols-outlined text-sm">{icon}</span> {status}</span></td>
    <td className="p-4">{severity !== '—' ? <span className={`px-2 py-0.5 ${severityBg} text-white rounded-sm text-[9px] font-bold uppercase`}>{severity}</span> : <span className="text-[#444746]">—</span>}</td>
    <td className="p-4 text-[#444746] font-bold">{obs}</td>
  </tr>
)

const AuditTrailTable = () => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6 border-l-4 border-[#006b55] pl-4">
        <h2 className="font-display-xl text-xl font-bold uppercase tracking-tight">Forensic Audit Trail</h2>
        <span className="text-[#444746] text-xs font-data-mono font-bold uppercase">(8 Points Analyzed)</span>
      </div>
      <div className="overflow-x-auto border border-[#c2c9c4] rounded-lg bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#f7f9f7] font-label-caps text-[10px] text-[#444746] font-bold uppercase">
            <tr>
              <th className="p-4 border-b border-[#c2c9c4]">Audit Parameter</th>
              <th className="p-4 border-b border-[#c2c9c4]">Status</th>
              <th className="p-4 border-b border-[#c2c9c4]">Severity</th>
              <th className="p-4 border-b border-[#c2c9c4]">Forensic Observation</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-[#c2c9c4]/30">
            <TableRow label="Ownership History" status="PASS" statusColor="text-[#006b55]" icon="check_circle" severity="—" obs="Chain of 3 previous owners verified via AMC records." />
            <TableRow label="Price Anomaly" status="FAIL" statusColor="text-[#ba1a1a]" icon="error" severity="CRITICAL" severityBg="bg-[#ba1a1a]" obs="Listing price is 42% below median for South Bopal. Common indicator of distress or litigation." fail />
            <TableRow label="Encumbrance Check" status="ALERT" statusColor="text-[#ba1a1a]" icon="warning" severity="MEDIUM" severityBg="bg-[#ffb955]" obs="Active mortgage detected with HDFC Bank (Last updated Dec 2022)." fail />
            <TableRow label="RERA Compliance" status="PASS" statusColor="text-[#006b55]" icon="check_circle" severity="—" obs="Project registered under PRM/GJ/AHMEDABAD/1250/303." />
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AuditTrailTable
