import { useEffect, useRef, useState } from 'react'

function MockupCard({ a1, a2, label }: { a1: string; a2?: string; label: string }) {
  return (
    <div className={`mockup-card${a2 ? ' mockup-card--interactive' : ''}`}>
      <div className="mockup-img-wrap" onClick={() => window.dispatchEvent(new CustomEvent('lightbox', { detail: a1 }))}>
        <img className="mockup-img mockup-img--default" src={a1} alt={label} loading="lazy" />
        {a2 && (
          <img className="mockup-img mockup-img--hover" src={a2} alt={`${label} alternate`} loading="lazy" />
        )}
      </div>
      <div className="mockup-label">{label}</div>
    </div>
  )
}

function Lightbox() {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    const open = (e: Event) => setSrc((e as CustomEvent).detail)
    window.addEventListener('lightbox', open)
    return () => window.removeEventListener('lightbox', open)
  }, [])

  if (!src) return null

  return (
    <div className="lightbox-overlay" onClick={() => setSrc(null)}>
      <button className="lightbox-close" onClick={() => setSrc(null)}>&times;</button>
      <img src={src} alt="" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

export default function BrandIdentity() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.01, rootMargin: '50px 0px -10px 0px' }
    )
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger')
    els.forEach((el) => obs.observe(el))

    // Safety fallback: reveal all elements after 3s in case observer missed them
    const fallback = setTimeout(() => {
      els.forEach((el) => el.classList.add('visible'))
    }, 3000)

    const handleScroll = () => {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      obs.disconnect()
      clearTimeout(fallback)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Lightbox />
      {/* Nav */}
      <nav className="bi-nav" ref={navRef}>
        <a href="#" className="bi-nav-logo">
          <img src="/assets/icon.svg" alt="Wejden Spire" style={{ height: 32 }} />
        </a>
        <ul className="bi-nav-links">
          <li><a href="#philosophy">Philosophy</a></li>
          <li><a href="#story">Story</a></li>
          <li><a href="#logo">Logo</a></li>
          <li><a href="#colors">Colors</a></li>
          <li><a href="#typography">Typography</a></li>
          <li><a href="#voice">Voice</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="bi-hero">
        <div className="hero-inner">
          <h1 className="hero-title">
            <span>Wejden Spire</span>
            <br />
            Brand Identity
          </h1>
          <p className="hero-subtitle">
            The visual and verbal system behind the platform where psychology meets technology to transform workplace wellbeing.
          </p>
          <span className="hero-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
            Brand Identity Book 2026
          </span>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bi-section text-section" id="philosophy">
        <div className="bi-container">
          <div className="text-block reveal">
            <div className="section-label">Brand Philosophy</div>
            <h2 className="section-title">We believe wellbeing is not a perk.</h2>
            <p>Every person carries an emotional landscape that shapes how they work, relate, and grow. When organizations listen with the right tools, they unlock a new dimension of human performance — rooted in empathy, not just efficiency.</p>
            <p>Wejden Spire is built on clinically validated psychometric instruments — PANAS for emotional affect and K6 for psychological distress. We don't guess. We measure. But behind every data point is a person.</p>
          </div>
          <div className="quote-block reveal">"Wellbeing is the foundation of sustainable performance."</div>
        </div>
      </section>

      <div className="bi-container"><div className="bi-divider"></div></div>

      {/* Vision & Mission */}
      <section className="bi-section text-section--alt">
        <div className="bi-container">
          <div className="bi-split">
            <div className="reveal-left">
              <div className="section-label">Brand Vision</div>
              <h2 className="section-title">A world where work doesn't cost wellbeing.</h2>
              <p style={{ fontSize: 'clamp(16px, 1.6vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 24 }}>
                We envision a world where every organization continuously understands and improves the emotional health of its people.
              </p>
            </div>
            <div className="reveal-right">
              <div className="section-label">Brand Mission</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.02em' }}>
                Transforming emotions into organizational intelligence.
              </h2>
              <p style={{ fontSize: 'clamp(16px, 1.6vw, 18px)', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 24 }}>
                The first B2B platform that continuously measures psychosocial risk, converts emotional data into actionable HR dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bi-section text-section" id="story">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Brand Story</div>
            <h2 className="section-title">The problem we saw. The platform we built.</h2>
            <p className="section-subtitle">In high-pressure sectors, the human cost of ignoring emotional health is staggering.</p>
          </div>
          <div className="stats-row stagger">
            <div className="stat-card"><div className="stat-value">44%</div><div className="stat-label">of employees report psychological distress</div></div>
            <div className="stat-card"><div className="stat-value">40%</div><div className="stat-label">annual turnover in high-pressure sectors</div></div>
            <div className="stat-card"><div className="stat-value">87%</div><div className="stat-label">of programs never measured continuously</div></div>
            <div className="stat-card"><div className="stat-value">6:1</div><div className="stat-label">return on investment with Wejden Spire</div></div>
          </div>

          <div className="bi-split" style={{ marginTop: 96 }}>
            <div className="reveal-left">
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.02em' }}>From emotional insight to strategic action.</h3>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 20 }}>
                Our platform gives employees a private, gamified space to complete 2-minute PANAS/K6 assessments. HR leaders get real-time dashboards, predictive alerts, and ROI simulators.
              </p>
              <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ background: 'var(--green-light)', color: 'var(--green-dark)', padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>PANAS / K6</span>
                <span style={{ background: 'var(--blue-light)', color: '#5a8cb8', padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>Predictive Alerts</span>
                <span style={{ background: 'var(--purple-light)', color: '#7b6cc0', padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>ROI Simulator</span>
                <span style={{ background: 'var(--green-light)', color: 'var(--green-dark)', padding: '8px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600 }}>ISO 45001</span>
              </div>
            </div>
            <div className="split-visual reveal-right">
              <img src="/assets/mockups/phone-app-a1.png" alt="App Interface" />
            </div>
          </div>

          <div className="bi-split bi-split--reverse" style={{ marginTop: 96 }}>
            <div className="reveal-right">
              <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-.02em' }}>Trusted by leading organizations.</h3>
              <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.8, marginTop: 20 }}>Our pilot program has demonstrated measurable impact across industries.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 32 }}>
                <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green)' }}>22</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Pilot Companies</div>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green)' }}>74</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>NPS Score</div>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green)' }}>4.2/5</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Satisfaction</div>
                </div>
                <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--green)' }}>312K</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>Annual Savings</div>
                </div>
              </div>
            </div>
            <div className="split-visual reveal-left">
              <img src="/assets/mockups/conference-room-a1.png" alt="Conference Room" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          LOGO SYSTEM — New Final Logo
          ══════════════════════════════════════════════ */}
      <section className="bi-section text-section--alt" id="logo">
        <div className="bi-container">

          {/* Primary Logo */}
          <div className="reveal">
            <div className="section-label">Logo System</div>
            <h2 className="section-title">The final mark.</h2>
            <p className="section-subtitle">A symbol where growth, emotion, and cultural connection converge into one unified identity.</p>
          </div>

          <div className="logo-primary reveal" style={{ marginTop: 64 }}>
            <div className="logo-card" style={{ aspectRatio: '21/9', padding: 64 }}>
              <img src="/assets/full-logo-horizontal.svg" alt="Wejden Spire — Primary Logo" style={{ maxHeight: 80, width: 'auto' }} />
            </div>
            <div className="logo-card-label" style={{ marginTop: 16 }}>Primary Horizontal Logo</div>
          </div>

          {/* Logo Meaning */}
          <div className="bi-split" style={{ marginTop: 96 }}>
            <div className="split-visual split-visual--logo reveal-left">
              <img src="/assets/icon.svg" alt="Wejden Spire Icon" />
            </div>
            <div className="reveal-right">
              <div className="symbol-meanings stagger">
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#4BAA83' }}></span>The Ascent</div>
                  <div className="meaning-desc">The flowing "W" rises upward, forming a subtle spire that symbolizes growth, ambition, and progress.</div>
                </div>
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#7FAEDB' }}></span>The Flow</div>
                  <div className="meaning-desc">The continuous organic line represents emotional flow, adaptability, and the human side of intelligence.</div>
                </div>
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#9A8BD6' }}></span>Connection Between Cultures</div>
                  <div className="meaning-desc">The symbol integrates the Latin "W" and the Arabic letter "{'\u0648'}", reflecting the brand's bridge between cultures and perspectives.</div>
                </div>
                <div className="meaning-item">
                  <div className="meaning-label"><span className="meaning-dot" style={{ background: '#1F2A2E' }}></span>The Circle</div>
                  <div className="meaning-desc">The circular frame represents unity, support, and a safe ecosystem where wellbeing and performance grow together.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Variations */}
          <h3 className="reveal" style={{ fontSize: 24, fontWeight: 700, marginTop: 96 }}>Logo Variations</h3>
          <div className="logo-variations-grid stagger" style={{ marginTop: 32 }}>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/full-logo-horizontal.svg" alt="Horizontal" style={{ maxHeight: 60, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Horizontal</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/full-logo-vertical.svg" alt="Vertical Stacked" style={{ maxHeight: 100, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Vertical Stacked</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/english-only.svg" alt="English Wordmark" style={{ maxHeight: 48, width: 'auto' }} />
              </div>
              <div className="logo-card-label">English Wordmark</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/arabic-only.svg" alt="Arabic Wordmark" style={{ maxHeight: 48, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Arabic Wordmark</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/vertical-english-only.svg" alt="Vertical English" style={{ maxHeight: 100, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Vertical English</div>
            </div>
            <div>
              <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/icon.svg" alt="Icon" style={{ maxHeight: 56, width: 'auto' }} />
              </div>
              <div className="logo-card-label">Icon Only</div>
            </div>
          </div>

          {/* Clear Space */}
          <h3 className="reveal" style={{ fontSize: 24, fontWeight: 700, marginTop: 96 }}>Clear Space</h3>
          <p className="reveal" style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 12, maxWidth: 560, lineHeight: 1.7 }}>
            The safe zone defines the minimum clear space around the logo. Never place text, images, or other elements inside this boundary.
          </p>
          <div className="reveal" style={{ marginTop: 32 }}>
            <div className="logo-card" style={{ aspectRatio: '16/9', padding: 48, background: 'var(--bg-white)' }}>
              <img src="/assets/safe-zone.svg" alt="Safe Zone Guidelines" style={{ maxHeight: 200, width: 'auto' }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32, marginTop: 32, flexWrap: 'wrap' }} className="reveal">
            <div className="check check--ok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              Respect safe zone
            </div>
            <div className="check check--ok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              Min digital: 24px
            </div>
            <div className="check check--ok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
              Min print: 10mm
            </div>
            <div className="check check--no">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              Never stretch or rotate
            </div>
          </div>

          {/* Logo on Backgrounds */}
          <h3 className="reveal" style={{ fontSize: 24, fontWeight: 700, marginTop: 96 }}>Logo on Backgrounds</h3>
          <div className="logo-bg-grid stagger" style={{ marginTop: 32 }}>
            {/* White */}
            <div>
              <div className="logo-card" style={{ background: '#FFFFFF', aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/full-logo-horizontal.svg" alt="On White" style={{ maxHeight: 48, width: 'auto' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>White #FFFFFF</div>
            </div>
            {/* Light Neutral */}
            <div>
              <div className="logo-card" style={{ background: '#F6F8F7', aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/full-logo-horizontal.svg" alt="On Neutral" style={{ maxHeight: 48, width: 'auto' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Light Neutral #F6F8F7</div>
            </div>
            {/* Brand Green */}
            <div>
              <div className="logo-card" style={{ background: '#4BAA83', border: 'none', aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/full-logo-horizontal.svg" alt="On Green" style={{ maxHeight: 48, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Brand Green #4BAA83</div>
            </div>
            {/* Dark */}
            <div>
              <div className="logo-card logo-card--dark" style={{ aspectRatio: '16/9', padding: 48 }}>
                <img src="/assets/full-logo-horizontal.svg" alt="On Dark" style={{ maxHeight: 48, width: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <div className="logo-card-label" style={{ marginTop: 10 }}>Dark #1F2A2E</div>
            </div>
          </div>

        </div>
      </section>

      {/* Colors */}
      <section className="bi-section text-section" id="colors">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Color System</div>
            <h2 className="section-title">A palette rooted in psychology.</h2>
            <p className="section-subtitle">Every color chosen for psychological resonance. Together they feel trustworthy, calming, intelligent.</p>
          </div>
          <div className="color-grid stagger">
            <div className="color-card"><div className="color-swatch" style={{ background: '#4BAA83' }}></div><div className="color-info"><div className="color-name">Spire Green</div><div className="color-hex">#4BAA83</div><div className="color-role">Primary — trust, growth, wellbeing</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: '#7FAEDB' }}></div><div className="color-info"><div className="color-name">Insight Blue</div><div className="color-hex">#7FAEDB</div><div className="color-role">Secondary — data, clarity, intelligence</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: '#9A8BD6' }}></div><div className="color-info"><div className="color-name">Calm Purple</div><div className="color-hex">#9A8BD6</div><div className="color-role">Accent — psychology, empathy, depth</div></div></div>
          </div>

          <div className="color-grid-sm stagger" style={{ marginTop: 40 }}>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#1F2A2E' }}></div><div className="color-chip-info"><div className="color-chip-name">Deep Ink</div><div className="color-chip-hex">#1F2A2E</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#6b7a7f' }}></div><div className="color-chip-info"><div className="color-chip-name">Muted Sage</div><div className="color-chip-hex">#6B7A7F</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#F6F8F7', borderBottom: '1px solid var(--border)' }}></div><div className="color-chip-info"><div className="color-chip-name">Soft Cloud</div><div className="color-chip-hex">#F6F8F7</div></div></div>
            <div className="color-chip"><div className="color-chip-sw" style={{ background: '#e2e6e4' }}></div><div className="color-chip-info"><div className="color-chip-name">Light Border</div><div className="color-chip-hex">#E2E6E4</div></div></div>
          </div>

          <div className="reveal" style={{ marginTop: 96 }}>
            <h3 style={{ fontSize: 24, fontWeight: 700 }}>The Emotional Logic of Color</h3>
          </div>
          <div className="feature-grid stagger" style={{ marginTop: 32 }}>
            <div className="feature-card">
              <div className="feature-icon feature-icon--green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
              </div>
              <div className="feature-title">Green — Growth & Trust</div>
              <div className="feature-desc">Safety, health, forward motion. Care and positive change.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              </div>
              <div className="feature-title">Blue — Clarity & Data</div>
              <div className="feature-desc">Reliability and analytical precision. Psychometric rigor.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
              </div>
              <div className="feature-title">Purple — Empathy & Depth</div>
              <div className="feature-desc">Bridges rational and emotional. Psychology beneath data.</div>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            <div style={{ height: 120, borderRadius: 16, background: 'linear-gradient(135deg, #4BAA83, #7FAEDB)' }}></div>
            <div style={{ height: 120, borderRadius: 16, background: 'linear-gradient(135deg, #7FAEDB, #9A8BD6)' }}></div>
            <div style={{ height: 120, borderRadius: 16, background: 'linear-gradient(135deg, #4BAA83, #9A8BD6)' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 8 }}>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Primary</div>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Secondary</div>
            <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Warm</div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="bi-section text-section--alt" id="typography">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Typography</div>
            <h2 className="section-title">Type that speaks with clarity and warmth.</h2>
            <p className="section-subtitle">Manrope: modern geometric sans-serif with humanist proportions.</p>
          </div>
          <div className="type-specimen reveal">
            <div className="type-name">Manrope — Primary Typeface</div>
            <div className="type-alphabet">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</div>
            <div style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7 }}>Measuring wellbeing, empowering decisions. 0123456789</div>
            <div className="bi-type-weights">
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 200 }}>Wellbeing</div><div className="type-weight-label">ExtraLight 200</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 300 }}>Wellbeing</div><div className="type-weight-label">Light 300</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 400 }}>Wellbeing</div><div className="type-weight-label">Regular 400</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 600 }}>Wellbeing</div><div className="type-weight-label">SemiBold 600</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 700 }}>Wellbeing</div><div className="type-weight-label">Bold 700</div></div>
              <div className="type-weight"><div className="type-weight-sample" style={{ fontWeight: 800 }}>Wellbeing</div><div className="type-weight-label">ExtraBold 800</div></div>
            </div>
          </div>

          <div className="type-specimen reveal" style={{ marginTop: 32 }}>
            <div className="type-name">Meral Sans — Arabic Typeface</div>
            <div className="type-alphabet" style={{ fontFamily: "'Meral Sans', sans-serif", direction: 'rtl' as const }}>
              أ ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
            </div>
            <div style={{ fontSize: 18, color: 'var(--text-muted)', lineHeight: 1.7, fontFamily: "'Meral Sans', sans-serif", direction: 'rtl' as const }}>
              قياس الرفاهية، تمكين القرارات. ٠١٢٣٤٥٦٧٨٩
            </div>
          </div>

          <div className="type-scale reveal" style={{ marginTop: 64 }}>
            <div className="type-scale-row">
              <div className="type-scale-label">Display</div>
              <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1 }}>Measure wellbeing</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Heading 1</div>
              <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-.02em', lineHeight: 1.2 }}>Empower decisions</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Heading 2</div>
              <div style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.3 }}>Emotional intelligence at scale</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Body</div>
              <div style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6 }}>Psychology meets technology to transform workplace wellbeing.</div>
            </div>
            <div className="type-scale-row">
              <div className="type-scale-label">Caption</div>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-light)', letterSpacing: '.02em' }}>BRAND IDENTITY BOOK 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Language */}
      <section className="bi-section text-section">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Visual Language</div>
            <h2 className="section-title">Soft, organic, human-centered.</h2>
          </div>
          <div className="feature-grid stagger">
            <div className="feature-card">
              <div className="feature-icon feature-icon--green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="4" /></svg>
              </div>
              <div className="feature-title">Rounded Shapes</div>
              <div className="feature-desc">Generous radii (12-24px). No sharp corners.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg>
              </div>
              <div className="feature-title">Floating Elements</div>
              <div className="feature-desc">Circles, arcs, dots as decorative accents.</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon feature-icon--purple">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <div className="feature-title">Soft Gradients</div>
              <div className="feature-desc">10-20% opacity between brand colors. Never on text.</div>
            </div>
          </div>

          {/* Iconography */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Iconography</div>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-.02em' }}>Brand icons for every context.</h3>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.7, marginTop: 16, maxWidth: 560 }}>
              Consistent 1.5px stroke weight, round caps, brand colors. Use these across product, marketing, and communications.
            </p>
          </div>
          <div className="icon-grid stagger" style={{ marginTop: 40 }}>
            <div className="icon-card">
              <div className="icon-box"><img src="/assets/icon.svg" alt="Brand" style={{ width: 30, height: 30 }} /></div>
              <div className="icon-card-label">Brand Mark</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg></div>
              <div className="icon-card-label">Wellbeing</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
              <div className="icon-card-label">Pulse</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <div className="icon-card-label">Safety</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg></div>
              <div className="icon-card-label">Team</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg></div>
              <div className="icon-card-label">Dashboard</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg></div>
              <div className="icon-card-label">Analytics</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg></div>
              <div className="icon-card-label">Mood</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg></div>
              <div className="icon-card-label">Alerts</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg></div>
              <div className="icon-card-label">Feedback</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
              <div className="icon-card-label">Assessment</div>
            </div>
            <div className="icon-card">
              <div className="icon-box"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg></div>
              <div className="icon-card-label">Reports</div>
            </div>
          </div>

        </div>
      </section>

      {/* UI Principles */}
      <section className="bi-section text-section--alt">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">UI Design Principles</div>
            <h2 className="section-title">Calm interfaces, clear decisions.</h2>
          </div>
          <div className="bi-principles stagger">
            <div className="bi-principle"><div className="principle-num">01</div><div><div className="principle-title">8px Grid System</div><div className="principle-desc">All spacing in multiples of 8. Consistent rhythm across screens.</div></div></div>
            <div className="bi-principle"><div className="principle-num">02</div><div><div className="principle-title">Layered Shadows</div><div className="principle-desc">Soft, multi-layer shadows. Transitions at 200-300ms ease-out.</div></div></div>
            <div className="bi-principle"><div className="principle-num">03</div><div><div className="principle-title">Accessible First</div><div className="principle-desc">WCAG 2.1 AA. 2px focus ring. 44px min touch targets.</div></div></div>
            <div className="bi-principle"><div className="principle-num">04</div><div><div className="principle-title">Data Visualization</div><div className="principle-desc">Brand colors only. Clear legends. Skeleton loading.</div></div></div>
            <div className="bi-principle"><div className="principle-num">05</div><div><div className="principle-title">Component Hierarchy</div><div className="principle-desc">Rounded buttons. Subtle card borders. Generous padding.</div></div></div>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="bi-section text-section" id="voice">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Brand Voice</div>
            <h2 className="section-title">How we speak matters as much as what we build.</h2>
          </div>
          <div className="voice-grid stagger">
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--green)' }}>Calm</div>
              <div className="voice-example">Measured confidence. No urgency marketing.</div>
              <div className="voice-do">{'\u2713'} "Your team's wellbeing improved 12% this quarter."</div>
              <div className="voice-dont">{'\u2717'} "AMAZING! Scores THROUGH THE ROOF!"</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--blue)' }}>Clear</div>
              <div className="voice-example">Simplify complexity. Translate jargon.</div>
              <div className="voice-do">{'\u2713'} "We measure risk with validated clinical tools."</div>
              <div className="voice-dont">{'\u2717'} "Cutting-edge AI disrupts wellness."</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--purple)' }}>Human</div>
              <div className="voice-example">Behind every metric is a person.</div>
              <div className="voice-do">{'\u2713'} "Here's what the data suggests."</div>
              <div className="voice-dont">{'\u2717'} "Act NOW before burnout destroys your team."</div>
            </div>
            <div className="voice-card">
              <div className="voice-attr" style={{ color: 'var(--text)' }}>Empowering</div>
              <div className="voice-example">You are the decision-maker. We provide tools.</div>
              <div className="voice-do">{'\u2713'} "Your wellbeing matters. Your voice is heard."</div>
              <div className="voice-dont">{'\u2717'} "Without us, your company will fail."</div>
            </div>
          </div>

          {/* Messaging */}
          <div className="reveal" style={{ marginTop: 96 }}>
            <div className="section-label">Messaging Style</div>
            <h3 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800 }}>Key messages by audience.</h3>
          </div>
          <div style={{ marginTop: 40, display: 'grid', gap: 16 }} className="stagger">
            <div className="msg-bar" style={{ background: 'var(--green-light)' }}>
              <span className="msg-label" style={{ color: 'var(--green-dark)' }}>Primary</span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>"Measure wellbeing. Empower decisions."</span>
            </div>
            <div className="msg-bar" style={{ background: 'var(--blue-light)' }}>
              <span className="msg-label" style={{ color: '#5a8cb8' }}>Employee</span>
              <span style={{ fontSize: 16, fontWeight: 500 }}>"Your wellbeing matters. Your voice is heard. Your data is yours."</span>
            </div>
            <div className="msg-bar" style={{ background: 'var(--purple-light)' }}>
              <span className="msg-label" style={{ color: '#7b6cc0' }}>HR</span>
              <span style={{ fontSize: 16, fontWeight: 500 }}>"From emotional insight to strategic action — in real time."</span>
            </div>
            <div className="msg-bar" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
              <span className="msg-label" style={{ color: 'var(--text-muted)' }}>Executive</span>
              <span style={{ fontSize: 16, fontWeight: 500 }}>"6:1 ROI. Reduce turnover 20%. 312K annual savings."</span>
            </div>
          </div>
        </div>
      </section>

      {/* Applications — Mockup Gallery */}
      <section className="bi-section text-section--alt">
        <div className="bi-container">
          <div className="reveal">
            <div className="section-label">Applications</div>
            <h2 className="section-title">The brand in action.</h2>
            <p className="section-subtitle">Hover each mockup to reveal the alternate version.</p>
          </div>
          <div className="mockup-gallery stagger">
            <MockupCard a1="/assets/mockups/phone-app-a1.png" a2="/assets/mockups/phone-app-a2.png" label="App Icon" />
            <MockupCard a1="/assets/mockups/business-cards-a1.png" a2="/assets/mockups/business-cards-a2.png" label="Business Cards" />
            <MockupCard a1="/assets/mockups/a-stand-a1.png" a2="/assets/mockups/a-stand-a2.png" label="A-Stand" />
            <MockupCard a1="/assets/mockups/conference-room-a1.png" a2="/assets/mockups/conference-room-a2.png" label="Conference Room" />
            <MockupCard a1="/assets/mockups/billboard-a1.png" a2="/assets/mockups/billboard-a2.png" label="Billboard" />
            <MockupCard a1="/assets/mockups/building-a1.png" a2="/assets/mockups/building-a2.png" label="Building Signage" />
            <MockupCard a1="/assets/mockups/pin-badge-a1.png" label="Pin Badge" />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bi-closing">
        <div className="bi-container">
          <div className="closing-logo reveal">
            <img src="/assets/icon.svg" alt="Wejden Spire" style={{ height: 56, margin: '0 auto 48px', filter: 'brightness(0) invert(1)' }} />
          </div>
          <h2 className="bi-closing-title reveal">
            <span>Measure wellbeing.</span>
            <br />
            Empower decisions.
          </h2>
          <p className="closing-sub reveal">wejdenspire.com</p>
        </div>
      </section>

      <footer className="bi-footer">
        <div className="bi-container">
          <div className="footer-credit">
            <div className="footer-brand">
              <span className="footer-made-by">Made by</span>
              <img src="/assets/areen-creative.svg" alt="Areen Creative" className="footer-areen-logo" />
            </div>
            <div className="footer-contact-title">Contact us</div>
            <div className="footer-contact">
              <span>+216 52148184</span>
              <span>areencubs.com</span>
              <span>areencubs@gmail.com</span>
            </div>
          </div>
          <div className="footer-bottom">Wejden Spire Brand Identity Book — 2026. Confidential.</div>
        </div>
      </footer>
    </>
  )
}
