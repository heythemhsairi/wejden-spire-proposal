import Reveal from '../components/motion/Reveal'
import { Stagger, StaggerItem } from '../components/motion/Stagger'

const lockups = [
  {
    label: 'Primary Bilingual',
    src: '/assets/wejden-spire-logo.svg',
    alt: 'Wejden Spire \u2014 primary bilingual logo',
  },
  {
    label: 'English Only',
    src: '/assets/wejden-spire-logo-english.svg',
    alt: 'Wejden Spire \u2014 English logo',
  },
  {
    label: 'Vertical',
    src: '/assets/wejden-spire-logo-vertical.svg',
    alt: 'Wejden Spire \u2014 vertical logo',
  },
  {
    label: 'Icon',
    src: '/assets/wejden-spire-icon.svg',
    alt: 'Wejden Spire \u2014 icon mark',
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
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-text md:text-4xl lg:text-5xl">
            Brand Marks
          </h2>
        </Reveal>
        <Stagger className="mb-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {lockups.map((l) => (
            <StaggerItem key={l.label}>
              <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-border">
                <div className="flex h-28 items-center justify-center p-4">
                  <img
                    src={l.src}
                    alt={l.alt}
                    className="max-h-full w-auto max-w-[80%]"
                  />
                </div>
                <div className="border-t border-border px-4 py-2.5">
                  <p className="text-xs font-medium text-text">{l.label}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
