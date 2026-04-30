import React from 'react'

const SentimentLabel = ({ color, text }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full ${color}`}></div>
    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">{text}</span>
  </div>
)

const Quote = ({ text }) => (
  <div className="p-4 bg-white/5 border border-white/5 rounded-lg italic text-sm text-slate-300 relative">
    <span className="material-symbols-outlined absolute -top-3 -left-1 text-primary/30 text-3xl">format_quote</span>
    "{text}"
  </div>
)

const ResidentSentiment = () => {
  return (
    <section className="glass-panel p-6 space-y-6 rounded-xl">
      <div className="flex items-center justify-between">
        <h2 className="font-headline-lg text-xl uppercase font-bold tracking-tight">Resident Sentiment</h2>
        <div className="flex gap-4">
          <SentimentLabel color="bg-primary" text="Positive (64%)" />
          <SentimentLabel color="bg-slate-500" text="Neutral (22%)" />
          <SentimentLabel color="bg-error" text="Negative (14%)" />
        </div>
      </div>
      <div className="h-2 w-full flex bg-surface-container-highest rounded-full overflow-hidden">
        <div className="h-full bg-primary" style={{ width: '64%' }}></div>
        <div className="h-full bg-slate-500" style={{ width: '22%' }}></div>
        <div className="h-full bg-error" style={{ width: '14%' }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Quote text="The walkability to 80ft road is unparalleled, but weekend traffic noise is increasing." />
        <Quote text="Solid Cauvery water connection and zero power cuts make this a prime rental spot." />
        <Quote text="School access is great, but property taxes are 20% higher than adjacent blocks." />
      </div>
    </section>
  )
}

export default ResidentSentiment
