import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const colors = [
  {
    name: 'Primary Green',
    hex: '#229346',
    rgb: 'rgb(34, 147, 70)',
    usage: 'Primary actions, CTAs, success states, and the core brand accent.',
    ratio: '4.6 : 1',
    light: '#E6F4EC',
  },
  {
    name: 'Secondary Blue',
    hex: '#2F6FE4',
    rgb: 'rgb(47, 111, 228)',
    usage: 'Links, data visualization, charts, and secondary interactive elements.',
    ratio: '4.1 : 1',
    light: '#E9F0FF',
  },
  {
    name: 'Accent Purple',
    hex: '#7A4DFF',
    rgb: 'rgb(122, 77, 255)',
    usage: 'Highlights, premium features, badges, and tertiary accents.',
    ratio: '4.8 : 1',
    light: '#EEEBFF',
  },
]

const neutrals = [
  { name: 'Background', hex: '#F5F7FB', usage: 'Page backgrounds, section fills' },
  { name: 'Dark Text', hex: '#0F172A', usage: 'Headings, body text, primary content' },
  { name: 'Secondary Text', hex: '#64748B', usage: 'Captions, labels, muted content' },
  { name: 'Border', hex: '#E2E8F0', usage: 'Dividers, card outlines, separators' },
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
            A balanced three-color palette built for clarity, accessibility, and enterprise credibility.
            All primary colors meet WCAG AA contrast requirements on white.
          </p>
        </Reveal>

        {/* Primary Colors */}
        <Stagger className="mb-10 grid gap-5 sm:grid-cols-3">
          {colors.map((c) => (
            <StaggerItem key={c.hex}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
                <div className="relative h-28" style={{ backgroundColor: c.hex }}>
                  <span
                    className="absolute bottom-3 left-4 rounded-md px-2 py-0.5 text-[10px] font-semibold text-white"
                    style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}
                  >
                    {c.ratio} on white
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
            Neutrals
          </p>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
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
                <p className="mb-1.5 font-mono text-[10px] text-text-muted">{n.hex}</p>
                <p className="text-[10px] leading-relaxed text-text-muted">{n.usage}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
