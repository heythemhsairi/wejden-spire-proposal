import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  brandGuideSlides,
  type BrandGuideSlide,
  type SymbolMeaning,
} from '../data/brandGuideSlides'

/* ─── helpers ─── */

function clamp(v: number, lo: number, hi: number) {
  return Math.min(Math.max(v, lo), hi)
}

function pad(n: number) {
  return String(n + 1).padStart(2, '0')
}

interface ChapterInfo {
  chapter: string
  index: number
  count: number
}

function chapters(slides: BrandGuideSlide[]): ChapterInfo[] {
  const seen = new Map<string, ChapterInfo>()
  for (let i = 0; i < slides.length; i++) {
    const ch = slides[i].chapter
    if (!seen.has(ch)) seen.set(ch, { chapter: ch, index: i, count: 0 })
    seen.get(ch)!.count++
  }
  return [...seen.values()]
}

/* ─── Slide renderer ─── */

function Slide({
  slide,
  index,
  total,
  chapterList,
  onJump,
}: {
  slide: BrandGuideSlide
  index: number
  total: number
  chapterList: ChapterInfo[]
  onJump: (i: number) => void
}) {
  const L = slide.layout

  return (
    <article className="slide-card" data-layout={L}>
      {/* ── header bar (not on cover/chapter/closing) ── */}
      {L !== 'cover' && L !== 'chapter' && L !== 'closing' && (
        <header className="s-header">
          <span className="s-kicker">{slide.kicker}</span>
          <span className="s-page">{pad(index)} / {total}</span>
        </header>
      )}

      {/* ── COVER ── */}
      {L === 'cover' && (
        <div className="layout-cover">
          {slide.image && (
            <img src={slide.image} alt={slide.imageAlt ?? ''} className="cover-logo" />
          )}
          <p className="cover-kicker">{slide.kicker}</p>
          <h1 className="cover-title">{slide.title}</h1>
          {slide.subtitle && <p className="cover-sub">{slide.subtitle}</p>}
          {slide.body && <p className="cover-meta">{slide.body}</p>}
        </div>
      )}

      {/* ── TOC ── */}
      {L === 'toc' && (
        <div className="layout-toc">
          <div className="toc-left">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </div>
          <div className="toc-grid">
            {chapterList.map((ch) => (
              <button
                key={ch.chapter}
                type="button"
                className="toc-item"
                onClick={() => onJump(ch.index)}
              >
                <span className="toc-num">{pad(ch.index)}</span>
                <strong>{ch.chapter}</strong>
                <small>{ch.count} slides</small>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── CHAPTER DIVIDER ── */}
      {L === 'chapter' && (
        <div className="layout-chapter">
          <span className="ch-num">{slide.chapterNum}</span>
          <div className="ch-text">
            <p className="ch-kicker">{slide.kicker}</p>
            <h2 className="ch-title">{slide.title}</h2>
            {slide.subtitle && <p className="ch-sub">{slide.subtitle}</p>}
          </div>
        </div>
      )}

      {/* ── TEXT ── */}
      {L === 'text' && (
        <div className="layout-text">
          <h2 className="s-title">{slide.title}</h2>
          {slide.body && <p className="s-body">{slide.body}</p>}
          {slide.bullets && (
            <ul className="s-bullets">
              {slide.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
          {slide.callout && <blockquote className="s-callout">{slide.callout}</blockquote>}
        </div>
      )}

      {/* ── SPLIT ── */}
      {L === 'split' && (
        <div className="layout-split">
          <div className="split-copy">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
            {slide.bullets && (
              <ul className="s-bullets">
                {slide.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
          </div>
          {slide.image && (
            <figure className="split-fig">
              <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
            </figure>
          )}
        </div>
      )}

      {/* ── IMAGE ── */}
      {L === 'image' && (
        <div className="layout-image">
          <div className="img-top">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </div>
          {slide.image && (
            <figure className="img-fig">
              <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
            </figure>
          )}
        </div>
      )}

      {/* ── PALETTE ── */}
      {L === 'palette' && (
        <div className="layout-palette">
          <div className="pal-copy">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </div>
          {slide.swatches && (
            <div className="swatch-row">
              {slide.swatches.map((sw) => (
                <div key={sw.hex} className="swatch">
                  <div className="swatch-fill" style={{ backgroundColor: sw.hex }} />
                  <p className="swatch-name">{sw.label}</p>
                  <p className="swatch-hex">{sw.hex}</p>
                  <p className="swatch-role">{sw.role}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── TYPOGRAPHY ── */}
      {L === 'typography' && slide.specimen && (
        <div className="layout-type">
          <div className="type-left">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
            <div className="type-weights">
              {slide.specimen.weights.map((w) => (
                <span key={w} className="type-weight-tag">{w}</span>
              ))}
            </div>
          </div>
          <div className="type-right">
            <p
              className="type-big"
              style={{ fontFamily: slide.specimen.family }}
            >
              Aa
            </p>
            <pre
              className="type-sample"
              style={{ fontFamily: slide.specimen.family }}
            >
              {slide.specimen.sample}
            </pre>
          </div>
        </div>
      )}

      {/* ── GALLERY ── */}
      {L === 'gallery' && (
        <div className="layout-gallery">
          <div className="gal-top">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
          </div>
          {slide.images && (
            <div className="gal-grid">
              {slide.images.map((src, i) => (
                <figure key={i} className="gal-item">
                  <img src={src} alt={`Moodboard ${i + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── SYMBOL ── */}
      {L === 'symbol' && (
        <div className="layout-symbol">
          <figure className="sym-frame">
            {slide.image && <img src={slide.image} alt={slide.imageAlt ?? ''} />}
          </figure>
          <div className="sym-copy">
            <h2 className="s-title">{slide.title}</h2>
            {slide.body && <p className="s-body">{slide.body}</p>}
            {slide.meanings && (
              <div className="sym-meanings">
                {slide.meanings.map((m: SymbolMeaning) => (
                  <div key={m.label} className="sym-row">
                    <span className="sym-dot" style={{ background: m.color }} />
                    <div>
                      <p className="sym-label">{m.label}</p>
                      <p className="sym-desc">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── CLOSING ── */}
      {L === 'closing' && (
        <div className="layout-closing">
          {slide.image && (
            <img src={slide.image} alt="Wejden Spire" className="closing-icon" />
          )}
          <h2 className="closing-title">{slide.title}</h2>
          {slide.body && <p className="closing-body">{slide.body}</p>}
          <p className="closing-brand">Wejden Spire — 2026</p>
        </div>
      )}
    </article>
  )
}

/* ─── Deck shell ─── */

export default function BrandGuideDeck() {
  const [cur, setCur] = useState(0)
  const [touch, setTouch] = useState<{ x: number; y: number } | null>(null)
  const total = brandGuideSlides.length
  const chapterList = useMemo(() => chapters(brandGuideSlides), [])

  const go = useCallback((i: number) => setCur(clamp(i, 0, total - 1)), [total])
  const prev = useCallback(() => setCur((c) => clamp(c - 1, 0, total - 1)), [total])
  const next = useCallback(() => setCur((c) => clamp(c + 1, 0, total - 1)), [total])

  // Hash sync
  useEffect(() => {
    const h = location.hash.replace('#', '')
    if (h) {
      const idx = brandGuideSlides.findIndex((s) => s.id === h)
      if (idx >= 0) setCur(idx)
    }
  }, [])

  useEffect(() => {
    history.replaceState(null, '', `#${brandGuideSlides[cur].id}`)
  }, [cur])

  // Keyboard
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next() }
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev() }
      if (e.key === 'Home') { e.preventDefault(); go(0) }
      if (e.key === 'End') { e.preventDefault(); go(total - 1) }
      if (e.key.toLowerCase() === 'p') { e.preventDefault(); window.print() }
    }
    addEventListener('keydown', fn)
    return () => removeEventListener('keydown', fn)
  }, [next, prev, go, total])

  // Touch swipe
  useEffect(() => {
    const start = (e: TouchEvent) => setTouch({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    const end = (e: TouchEvent) => {
      if (!touch) return
      const dx = e.changedTouches[0].clientX - touch.x
      const dy = e.changedTouches[0].clientY - touch.y
      setTouch(null)
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
      dx < 0 ? next() : prev()
    }
    addEventListener('touchstart', start, { passive: true })
    addEventListener('touchend', end, { passive: true })
    return () => { removeEventListener('touchstart', start); removeEventListener('touchend', end) }
  }, [touch, next, prev])

  const slide = brandGuideSlides[cur]
  const curChapter = chapterList.find(
    (ch) => cur >= ch.index && cur < ch.index + ch.count
  )

  return (
    <div className="deck">
      {/* Top bar */}
      <header className="deck-bar">
        <button type="button" className="deck-brand" onClick={() => go(0)}>
          <img src="/assets/wejden-spire-icon.svg" alt="" />
          <span>Wejden Spire</span>
        </button>

        <nav className="deck-chapters">
          {chapterList.map((ch) => (
            <button
              key={ch.chapter}
              type="button"
              className={`deck-ch ${curChapter?.chapter === ch.chapter ? 'active' : ''}`}
              onClick={() => go(ch.index)}
            >
              {ch.chapter}
            </button>
          ))}
        </nav>

        <div className="deck-counter">
          <span>{pad(cur)}</span>
          <div className="deck-progress">
            <div style={{ width: `${((cur + 1) / total) * 100}%` }} />
          </div>
          <span>{total}</span>
        </div>
      </header>

      {/* Slide area */}
      <main className="deck-stage">
        <Slide
          slide={slide}
          index={cur}
          total={total}
          chapterList={chapterList}
          onJump={go}
        />
      </main>

      {/* Controls */}
      <footer className="deck-nav">
        <button type="button" onClick={prev} disabled={cur === 0} className="nav-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button type="button" onClick={next} disabled={cur === total - 1} className="nav-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <button type="button" onClick={() => window.print()} className="nav-btn nav-print">
          PDF
        </button>
      </footer>

      {/* Print version */}
      <section className="print-slides">
        {brandGuideSlides.map((s, i) => (
          <Slide
            key={`p-${s.id}`}
            slide={s}
            index={i}
            total={total}
            chapterList={chapterList}
            onJump={go}
          />
        ))}
      </section>
    </div>
  )
}
