import React from 'react'

const SentimentLabel = ({ color, text }) => (
  <div className="flex items-center gap-2">
    <div className={`w-1.5 h-1.5 rounded-full ${color}`}></div>
    <span className="text-[9px] font-mono uppercase text-slate-500 font-bold tracking-tight">{text}</span>
  </div>
)

const Quote = ({ text }) => (
  <div className="p-5 bg-[#0D131A] border border-white/5 rounded-xl text-[12px] leading-relaxed text-slate-400 relative group hover:border-primary/20 transition-all duration-300">
    <span className="material-symbols-outlined absolute top-2 left-2 text-primary/10 text-2xl select-none">format_quote</span>
    <p className="pl-4 italic">"{text}"</p>
  </div>
)

const ResidentSentiment = ({ data, loading }) => {
  if (loading || !data) return (
    <section className="glass-panel p-8 space-y-8 rounded-xl bg-[#0A0F14]/40 animate-pulse">
      <div className="h-8 w-64 bg-slate-800 rounded"></div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-24 bg-slate-800 rounded-xl"></div>
        <div className="h-24 bg-slate-800 rounded-xl"></div>
        <div className="h-24 bg-slate-800 rounded-xl"></div>
      </div>
    </section>
  );

  const { percentages, quotes } = data;

  return (
    <section className="glass-panel p-8 space-y-8 rounded-xl bg-[#0A0F14]/40">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="font-display-xl text-2xl uppercase font-bold tracking-tight text-on-surface">Resident Sentiment</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <SentimentLabel color="bg-[#00D4AA]" text={`Positive (${percentages.pos}%)`} />
          <SentimentLabel color="bg-[#64748b]" text={`Neutral (${percentages.neu}%)`} />
          <SentimentLabel color="bg-[#f87171]" text={`Negative (${percentages.neg}%)`} />
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-1.5 w-full flex rounded-full overflow-hidden bg-slate-900/50">
          <div className="h-full bg-[#00D4AA] opacity-80 transition-all duration-1000" style={{ width: `${percentages.pos}%` }}></div>
          <div className="h-full bg-[#64748b] opacity-80 transition-all duration-1000" style={{ width: `${percentages.neu}%` }}></div>
          <div className="h-full bg-[#f87171] opacity-80 transition-all duration-1000" style={{ width: `${percentages.neg}%` }}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {quotes.map((quote, idx) => (
          <Quote key={idx} text={quote} />
        ))}
      </div>
    </section>
  )
}

export default ResidentSentiment
