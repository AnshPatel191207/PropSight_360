import React from 'react'

const DataTile = ({ title, value, sub, trend, color }) => (
  <div className={`glass-panel p-4 border-l-4 ${color} flex flex-col justify-between rounded-lg`}>
    <h3 className="font-label-caps text-[10px] text-slate-500 uppercase font-bold">{title}</h3>
    <div className="py-2">
      <p className="font-data-mono text-2xl text-on-surface">{value}</p>
      <p className="text-[10px] text-slate-400 mt-0.5 uppercase font-bold">{sub} <span className="text-primary">{trend === 'up' ? '↑' : '↓'}</span></p>
    </div>
    <svg className="w-[80px] h-[20px]" viewBox="0 0 80 20">
      <path d={trend === 'up' ? "M0 15 C 15 15, 25 5, 40 10 C 55 15, 65 5, 80 5" : "M0 5 C 10 5, 20 18, 40 10 C 60 2, 70 15, 80 15"} fill="none" stroke="#46f1c5" strokeWidth="2"></path>
    </svg>
  </div>
)

export default DataTile
