import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const colors = [
  {
    name: 'Brand Green',
    hex: '#229346',
    rgb: 'rgb(34, 147, 70)',
    role: 'Primary',
    usage: 'Primary actions, CTAs, success states, and the core brand accent.',
    light: '#E6F4EC',
  },
  {
    name: 'Calm Teal',
    hex: '#3C8F7A',
    rgb: 'rgb(60, 143, 122)',
    role: 'UI Green',
    usage: 'Interactive UI elements, hover states, and secondary green accents.',
    light: '#E8F3F0',
  },
  {
    name: 'Teal Blue',
    hex: '#5F8F8E',
    rgb: 'rgb(95, 143, 142)',
    role: 'Secondary',
    usage: 'Supporting elements, data visualizations, and tertiary accents.',
    light: '#EEF3F3',
  },
]

const neutrals = [
  { name: 'Blue Grey', hex: '#A8B6C2', role: 'Soft Tech', usage: 'Subtle backgrounds, disabled states, soft UI elements' },
  { name: 'Sand', hex: '#E5DED5', role: 'Neutral', usage: 'Borders, dividers, card outlines, separators' },
  { name: 'Light', hex: '#F4F6F7', role: 'Background', usage: 'Page backgrounds, section fills, canvas' },
  { name: 'Dark', hex: '#1F2933', role: 'Text', usage: 'Headings, body text, primary content' },
  { name: 'Gray', hex: '#6B7280', role: 'Secondary Text', usage: 'Captions, labels, muted content' },
]

export default function IdentitySection() {
  return (
    <section id="identity" className="slide bg-bg">
      <div className="mx-auto w-full max-w-5xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Visual Identity
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Color System
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-text-muted">
            A nature-inspired palette anchored by Brand Green and softened with calm teals and warm neutrals — designed for trust, clarity, and enterprise credibility.
          </p>
        </Reveal>

        {/* Primary Colors */}
        <Stagger className="mb-10 grid gap-5 sm:grid-cols-3">
          {colors.map((c) => (
            <StaggerItem key={c.hex}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
                <div className="relative h-28" style={{ backgroundColor: c.hex }}>
                  <span
                    className="absolute top-3 right-4 rounded-md px-2 py-0.5 text-[10px] font-semibold text-white"
                    style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
                  >
                    {c.role}
                  </span>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-sm font-semibold text-text">{c.name}</p>
                  <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
                    <p className="font-mono text-xs text-text-muted">{c.hex}</p>
                    <p className="font-mono text-xs text-text-muted">{c.rgb}</p>
                  </div>
                  <p className="text-xs leading-relaxed text-text-muted">{c.usage}</p>
                  {/* Light tint preview */}
                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className="h-5 w-5 rounded ring-1 ring-border"
                      style={{ backgroundColor: c.light }}
                    />
                    <span className="font-mono text-[10px] text-text-muted">
                      Light tint {c.light}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Neutrals */}
        <Reveal delay={0.3}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-text-muted">
            Neutrals &amp; System Colors
          </p>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-5">
            {neutrals.map((n) => (
              <div
                key={n.hex}
                className="rounded-xl bg-white p-4 ring-1 ring-border"
              >
                <span
                  className="mb-3 block h-10 w-full rounded-lg ring-1 ring-border"
                  style={{ backgroundColor: n.hex }}
                />
                <p className="mb-0.5 text-xs font-semibold text-text">{n.name}</p>
                <p className="mb-0.5 font-mono text-[10px] text-text-muted">{n.hex}</p>
                <p className="text-[10px] font-medium text-primary/60">{n.role}</p>
                <p className="mt-1 text-[10px] leading-relaxed text-text-muted">{n.usage}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
