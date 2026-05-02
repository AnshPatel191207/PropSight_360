import React, { useMemo } from 'react'

const DataTile = ({ title, value, sub, trend, color, score = 50 }) => {
  const sparklinePath = useMemo(() => {
    // Height normalization (Score 0-100 maps to Y 25-5)
    // Higher score = lower Y (higher line in SVG)
    const midY = 25 - (score / 100) * 15;
    const points = [];
    
    // Generate 6 control points
    for (let i = 0; i <= 5; i++) {
      const x = i * 20;
      // Much more aggressive jitter and trend
      const jitter = (Math.sin(i * 1.5 + (score % 10)) * 8); 
      const trendBias = trend === 'up' ? -(i * 3) : (i * 3);
      
      let y = midY + jitter + trendBias;
      y = Math.max(4, Math.min(26, y)); // Stay within 30px viewBox
      points.push({ x, y });
    }

    // Build SVG Path with Quadratic Curves for smoothness
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const midX = (points[i].x + points[i + 1].x) / 2;
      const midY = (points[i].y + points[i + 1].y) / 2;
      path += ` Q ${points[i].x} ${points[i].y}, ${midX} ${midY}`;
    }
    path += ` T ${points[5].x} ${points[5].y}`;
    
    return path;
  }, [score, trend]);

  return (
    <div className={`glass-panel p-4 border-l-2 ${color} flex flex-col justify-between rounded-lg min-h-[110px] bg-[#0A0F14]/40 group hover:bg-[#0A0F14]/60 transition-all`}>
      <div>
        <h3 className="font-mono text-[9px] text-slate-500 uppercase font-bold tracking-wider">{title}</h3>
        <p className="font-data-mono text-2xl text-on-surface mt-1 font-bold">{value}</p>
      </div>
      
      <div className="mt-auto">
        <p className="text-[9px] text-slate-500 mt-2 uppercase font-bold tracking-tight">
          {sub} <span className={trend === 'up' ? 'text-primary' : 'text-error'}>{trend === 'up' ? '↑' : '↓'}</span>
        </p>
        <div className="mt-2 h-6 w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path 
              d={sparklinePath} 
              fill="none" 
              stroke={trend === 'up' ? '#00D4AA' : '#f87171'} 
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80 transition-all duration-1000"
            ></path>
            {/* Glow effect */}
            <path 
              d={sparklinePath} 
              fill="none" 
              stroke={trend === 'up' ? '#00D4AA' : '#f87171'} 
              strokeWidth="4"
              strokeLinecap="round"
              className="opacity-10 blur-[4px]"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default DataTile
