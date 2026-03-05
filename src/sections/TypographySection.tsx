import Reveal from '../components/motion/Reveal'

const weights = [
  { label: 'Light', weight: 'font-light', value: '300' },
  { label: 'Regular', weight: 'font-normal', value: '400' },
  { label: 'Medium', weight: 'font-medium', value: '500' },
  { label: 'Semibold', weight: 'font-semibold', value: '600' },
  { label: 'Bold', weight: 'font-bold', value: '700' },
]

const hierarchy = [
  { tag: 'H1', size: 'text-4xl md:text-5xl', weight: 'font-bold', spec: '48–72 px · Bold' },
  { tag: 'H2', size: 'text-3xl md:text-4xl', weight: 'font-bold', spec: '36–48 px · Bold' },
  { tag: 'H3', size: 'text-xl md:text-2xl', weight: 'font-semibold', spec: '24–30 px · Semibold' },
  { tag: 'Body', size: 'text-base', weight: 'font-normal', spec: '16 px · Regular' },
  { tag: 'Small', size: 'text-xs', weight: 'font-medium', spec: '12 px · Medium' },
]

const arabicHierarchy = [
  { tag: 'H1', text: '\u0648\u062C\u062F\u0627\u0646 \u0633\u0628\u064E\u0627\u064A\u0631', size: 'text-3xl md:text-4xl', weight: 'font-bold' },
  { tag: 'Body', text: '\u0646\u0638\u0627\u0645 \u0631\u0641\u0627\u0647\u064A\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u0645\u0648\u062B\u0648\u0642', size: 'text-base', weight: 'font-normal' },
]

const arabicFont = "'Meral Sans', sans-serif"

export default function TypographySection() {
  return (
    <section id="typography" className="slide bg-white">
      <div className="mx-auto w-full max-w-5xl px-8">
        {/* ── Header ── */}
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Typography
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl">
            Type System
          </h2>
        </Reveal>

        {/* ── Primary Typeface + Weights ── */}
        <Reveal delay={0.1}>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            Primary Typeface
          </p>
          <p className="mb-5 text-3xl font-bold text-text">Manrope</p>
          <div className="mb-12 grid grid-cols-5 gap-3">
            {weights.map((w) => (
              <div
                key={w.value}
                className="rounded-xl border border-border bg-bg px-3 py-3 text-center"
              >
                <p className={`mb-1 text-2xl text-text ${w.weight}`}>Aa</p>
                <p className="text-[10px] font-medium text-text-muted">{w.label}</p>
                <p className="font-mono text-[9px] text-text/40">{w.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Hierarchy ── */}
        <Reveal delay={0.15}>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            Hierarchy
          </p>
          <div className="mb-12 space-y-3">
            {hierarchy.map((h) => (
              <div key={h.tag} className="flex items-baseline gap-3">
                <span className="w-12 shrink-0 font-mono text-[10px] font-medium text-text/40">
                  {h.tag}
                </span>
                <span className={`${h.size} ${h.weight} text-text leading-none`}>
                  Wejden
                </span>
                <span className="ml-auto text-[10px] text-text/30">
                  {h.spec}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Arabic Typeface ── */}
        <Reveal delay={0.2}>
          <div className="rounded-xl border border-border bg-bg p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                Arabic Typeface
              </p>
              <p className="text-xs text-text/40">Meral Sans</p>
            </div>
            <div className="space-y-2" dir="rtl" lang="ar">
              {arabicHierarchy.map((h) => (
                <div key={h.tag} className="flex items-baseline gap-3">
                  <span className="w-10 shrink-0 text-left font-mono text-[10px] font-medium text-text/40" dir="ltr">
                    {h.tag}
                  </span>
                  <span
                    className={`${h.size} ${h.weight} text-text leading-snug`}
                    style={{ fontFamily: arabicFont }}
                  >
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
