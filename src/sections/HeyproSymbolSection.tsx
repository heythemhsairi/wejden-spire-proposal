import Reveal from '../components/motion/Reveal'

const meanings = [
  { label: 'The Pulse', desc: 'The heartbeat line captures vitality and real-time awareness — technology that keeps a finger on the pulse of progress.', color: 'bg-primary' },
  { label: 'The Circle', desc: 'A continuous ring represents completeness and protection — an all-encompassing ecosystem built around the user.', color: 'bg-blue' },
  { label: 'The Rhythm', desc: 'Dynamic peaks and valleys reflect adaptability and responsiveness — a platform that moves with the pace of business.', color: 'bg-purple' },
]

export default function HeyproSymbolSection() {
  return (
    <section id="symbol-heypro" className="slide bg-bg">
      <div className="mx-auto w-full max-w-4xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Icon & Symbol
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            HeyPro — Symbol Meaning
          </h2>
        </Reveal>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="flex items-center justify-center rounded-2xl bg-white p-12 ring-1 ring-border sm:p-16">
              <img
                src="/assets/heypro.svg"
                alt="HeyPro icon"
                className="w-full max-w-[140px]"
              />
            </div>
          </Reveal>
          <div className="space-y-6">
            {meanings.map((m, i) => (
              <Reveal key={m.label} delay={0.2 + i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${m.color}`} />
                  <div>
                    <p className="mb-1 text-sm font-semibold text-text">{m.label}</p>
                    <p className="text-sm leading-relaxed text-text-muted">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
