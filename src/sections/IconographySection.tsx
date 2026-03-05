import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const icons = [
  {
    label: 'Analytics',
    category: 'Platform',
    path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    label: 'Growth',
    category: 'Platform',
    path: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    label: 'Dashboard',
    category: 'Platform',
    path: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z',
  },
  {
    label: 'Strategy',
    category: 'Platform',
    path: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
  },
  {
    label: 'Performance',
    category: 'Platform',
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    label: 'Reports',
    category: 'Platform',
    path: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    label: 'Team',
    category: 'Enterprise',
    path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    label: 'Security',
    category: 'Enterprise',
    path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    label: 'Integration',
    category: 'Enterprise',
    path: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
  },
  {
    label: 'Workflow',
    category: 'Enterprise',
    path: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    label: 'Target',
    category: 'Platform',
    path: 'M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16zm0 4a4 4 0 100 8 4 4 0 000-8z',
  },
  {
    label: 'Globe',
    category: 'Enterprise',
    path: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
]

export default function IconographySection() {
  return (
    <section id="iconography" className="slide bg-bg">
      <div className="mx-auto w-full max-w-5xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Brand Iconography
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Icon System
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-text-muted">
            A purpose-built icon set for the Wejden Spire platform, dashboards, and enterprise communications.
            All icons use a 24&times;24 grid, 1.5px stroke, round caps and joins.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-4 gap-4 sm:grid-cols-6">
          {icons.map((icon) => (
            <StaggerItem key={icon.label}>
              <div className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4 shadow-sm transition-colors hover:border-primary/30 hover:bg-primary-light">
                <svg
                  className="h-7 w-7 text-text transition-colors group-hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={icon.path} />
                </svg>
                <p className="text-[10px] font-medium text-text-muted">{icon.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary" />
              <span className="text-[10px] font-medium text-text-muted">Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue" />
              <span className="text-[10px] font-medium text-text-muted">Enterprise</span>
            </div>
            <p className="text-[10px] text-text/40">
              24&times;24 &middot; 1.5px stroke &middot; Round cap &amp; join
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
