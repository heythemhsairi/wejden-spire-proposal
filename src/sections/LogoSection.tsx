import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const lockups = [
  {
    label: 'Primary Bilingual',
    desc: 'The default logo for all brand communications. Features both Arabic and English lockups side by side.',
    src: '/assets/wejden-spire-logo.svg',
    alt: 'Wejden Spire — primary bilingual logo',
    bg: 'bg-white',
  },
  {
    label: 'English Only',
    desc: 'Used when targeting English-speaking audiences or international markets.',
    src: '/assets/wejden-spire-logo-english.svg',
    alt: 'Wejden Spire — English logo',
    bg: 'bg-white',
  },
  {
    label: 'Vertical Lockup',
    desc: 'Stacked layout for compact spaces — social profiles, app icons, and square formats.',
    src: '/assets/wejden-spire-logo-vertical.svg',
    alt: 'Wejden Spire — vertical logo',
    bg: 'bg-white',
  },
  {
    label: 'Icon Mark',
    desc: 'The standalone symbol for favicons, avatars, watermarks, and small-format applications.',
    src: '/assets/wejden-spire-icon.svg',
    alt: 'Wejden Spire — icon mark',
    bg: 'bg-white',
  },
]

export default function LogoSection() {
  return (
    <section id="logo" className="slide bg-bg">
      <div className="mx-auto w-full max-w-5xl px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Logo System
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Brand Marks
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-text-muted">
            Four logo variations designed for every context — from bilingual print collateral to digital-first icon usage.
          </p>
        </Reveal>

        {/* Top row: 2 primary lockups */}
        <Stagger className="mb-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
          {lockups.slice(0, 2).map((l) => (
            <StaggerItem key={l.label}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border transition-shadow hover:shadow-md">
                <div className="flex h-40 items-center justify-center bg-[#F8FAFB] p-6 sm:h-48">
                  <img
                    src={l.src}
                    alt={l.alt}
                    className="max-h-full w-auto max-w-[85%] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-border px-5 py-4">
                  <p className="mb-1 text-sm font-semibold text-text">{l.label}</p>
                  <p className="text-xs leading-relaxed text-text-muted">{l.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom row: vertical + icon */}
        <Stagger className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {lockups.slice(2).map((l) => (
            <StaggerItem key={l.label}>
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border transition-shadow hover:shadow-md">
                <div className="flex h-40 items-center justify-center bg-[#F8FAFB] p-6 sm:h-48">
                  <img
                    src={l.src}
                    alt={l.alt}
                    className="max-h-full w-auto max-w-[60%] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-border px-5 py-4">
                  <p className="mb-1 text-sm font-semibold text-text">{l.label}</p>
                  <p className="text-xs leading-relaxed text-text-muted">{l.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
