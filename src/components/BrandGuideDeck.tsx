import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  brandGuideSlides,
  type BrandGuideSlide,
  type SymbolMeaning,
} from '../data/brandGuideSlides'

interface ChapterStart {
  chapter: string
  index: number
}

interface ChapterSummary extends ChapterStart {
  count: number
}

interface ChapterProgress {
  chapterOrder: number
  totalChapters: number
  chapterStart: number
  chapterEnd: number
  slideInChapter: number
  chapterSlideTotal: number
}

interface TouchPoint {
  x: number
  y: number
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function formatIndex(value: number) {
  return String(value + 1).padStart(2, '0')
}

function collectChapterStarts(slides: BrandGuideSlide[]): ChapterStart[] {
  const seen = new Set<string>()
  const starts: ChapterStart[] = []

  for (let index = 0; index < slides.length; index += 1) {
    const chapter = slides[index].chapter
    if (!seen.has(chapter)) {
      seen.add(chapter)
      starts.push({ chapter, index })
    }
  }

  return starts
}

function collectChapterSummaries(slides: BrandGuideSlide[]): ChapterSummary[] {
  const starts = collectChapterStarts(slides)

  return starts.map((start, chapterIndex) => {
    const next = starts[chapterIndex + 1]
    const end = next ? next.index : slides.length

    return {
      ...start,
      count: end - start.index,
    }
  })
}

function buildChapterProgressLookup(slides: BrandGuideSlide[]) {
  const chapterSummaries = collectChapterSummaries(slides)
  const lookup: ChapterProgress[] = new Array(slides.length)

  chapterSummaries.forEach((summary, chapterOrder) => {
    const chapterStart = summary.index
    const chapterEnd = chapterStart + summary.count - 1

    for (let index = chapterStart; index <= chapterEnd; index += 1) {
      lookup[index] = {
        chapterOrder: chapterOrder + 1,
        totalChapters: chapterSummaries.length,
        chapterStart,
        chapterEnd,
        slideInChapter: index - chapterStart + 1,
        chapterSlideTotal: summary.count,
      }
    }
  })

  return lookup
}

function chapterSlug(chapter: string) {
  return chapter.toLowerCase().replace(/\s+/g, '-')
}

interface SlideCardProps {
  slide: BrandGuideSlide
  index: number
  total: number
  active: boolean
  forceVisible?: boolean
  chapterSummaries: ChapterSummary[]
  chapterProgress: ChapterProgress
  onJump: (index: number) => void
}

function SlideCard({
  slide,
  index,
  total,
  active,
  forceVisible = false,
  chapterSummaries,
  chapterProgress,
  onJump,
}: SlideCardProps) {
  const showHeadingBlock = slide.layout !== 'cover'

  return (
    <article
      id={slide.id}
      className={`slide-frame ${active || forceVisible ? 'is-active' : ''}`}
      aria-hidden={!active && !forceVisible}
    >
      <div
        className={`slide-surface layout-${slide.layout}`}
        data-chapter={chapterSlug(slide.chapter)}
      >
        <div className="slide-grid-line slide-grid-top" />
        <div className="slide-grid-line slide-grid-left" />
        <div className="slide-glow slide-glow-a" />
        <div className="slide-glow slide-glow-b" />

        {showHeadingBlock && (
          <header className="slide-header">
            <div className="slide-header-left">
              <p className="slide-kicker">{slide.kicker}</p>
              <p className="slide-chapter-meta">
                Chapter {chapterProgress.chapterOrder}/{chapterProgress.totalChapters}{' '}
                <span>{slide.chapter}</span>
              </p>
            </div>

            <div className="slide-header-right">
              <p className="slide-counter">
                {formatIndex(index)} / {total}
              </p>
              <p className="slide-counter-meta">
                In chapter: {chapterProgress.slideInChapter}/
                {chapterProgress.chapterSlideTotal}
              </p>
            </div>
          </header>
        )}

        {slide.layout === 'cover' && (
          <div className="cover-layout">
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.imageAlt ?? slide.title}
                className="cover-logo"
              />
            )}

            <p className="cover-kicker">{slide.kicker}</p>
            <h1 className="cover-title">{slide.title}</h1>
            {slide.subtitle && <p className="cover-subtitle">{slide.subtitle}</p>}
            {slide.body && <p className="cover-body">{slide.body}</p>}

            <div className="cover-chip-row" aria-hidden="true">
              <span>{total}-page system</span>
              <span>1920 x 1080 canvas</span>
              <span>Interactive + PDF</span>
            </div>
          </div>
        )}

        {slide.layout === 'toc' && (
          <div className="slide-main">
            <div className="slide-copy">
              <h2 className="slide-title">{slide.title}</h2>
              {slide.body && <p className="slide-body">{slide.body}</p>}
            </div>

            <div className="toc-grid">
              {chapterSummaries.map((chapterSummary) => (
                <button
                  key={chapterSummary.chapter}
                  type="button"
                  className="toc-card"
                  onClick={() => onJump(chapterSummary.index)}
                >
                  <span>{chapterSummary.chapter}</span>
                  <strong>
                    {formatIndex(chapterSummary.index)} -{' '}
                    {formatIndex(chapterSummary.index + chapterSummary.count - 1)}
                  </strong>
                  <p>{chapterSummary.count} slides</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {(slide.layout === 'text' || slide.layout === 'palette') && (
          <div className="slide-main">
            <div className="slide-copy">
              <h2 className="slide-title">{slide.title}</h2>
              {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
              {slide.body && <p className="slide-body">{slide.body}</p>}

              {slide.bullets && (
                <ul className="slide-bullets">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {slide.callout && <p className="slide-callout">{slide.callout}</p>}
            </div>

            {slide.layout === 'palette' && slide.swatches && (
              <div className="swatch-grid">
                {slide.swatches.map((swatch) => (
                  <div key={`${swatch.label}-${swatch.hex}`} className="swatch-card">
                    <span
                      className="swatch-chip"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <p className="swatch-label">{swatch.label}</p>
                    <p className="swatch-hex">{swatch.hex}</p>
                    <p className="swatch-role">{swatch.role}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {slide.layout === 'split' && (
          <div className="slide-main split-layout">
            <div className="slide-copy">
              <h2 className="slide-title">{slide.title}</h2>
              {slide.body && <p className="slide-body">{slide.body}</p>}

              {slide.bullets && (
                <ul className="slide-bullets">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {slide.callout && <p className="slide-callout">{slide.callout}</p>}
            </div>

            {slide.image && (
              <figure className="slide-figure">
                <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
              </figure>
            )}
          </div>
        )}

        {slide.layout === 'image' && (
          <div className="slide-main image-layout">
            <div className="slide-copy">
              <h2 className="slide-title">{slide.title}</h2>
              {slide.body && <p className="slide-body">{slide.body}</p>}
            </div>

            {slide.image && (
              <figure className="slide-figure image-only-figure">
                <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
              </figure>
            )}
          </div>
        )}

        {slide.layout === 'symbol' && (
          <div className="slide-main symbol-layout">
            <figure className="symbol-icon-frame">
              {slide.image && (
                <img src={slide.image} alt={slide.imageAlt ?? slide.title} />
              )}
            </figure>
            <div className="symbol-copy">
              <h2 className="slide-title">{slide.title}</h2>
              {slide.body && <p className="slide-body">{slide.body}</p>}
              {slide.meanings && (
                <div className="symbol-meanings">
                  {slide.meanings.map((m: SymbolMeaning) => (
                    <div key={m.label} className="symbol-meaning-row">
                      <span
                        className="symbol-dot"
                        style={{ backgroundColor: m.color }}
                      />
                      <div>
                        <p className="symbol-meaning-label">{m.label}</p>
                        <p className="symbol-meaning-desc">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {slide.layout === 'closing' && (
          <div className="slide-main closing-layout">
            <div className="slide-copy">
              <h2 className="slide-title">{slide.title}</h2>
              {slide.body && <p className="slide-body">{slide.body}</p>}

              {slide.bullets && (
                <ul className="slide-bullets">
                  {slide.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {slide.callout && <p className="slide-callout">{slide.callout}</p>}
            </div>

            <div className="closing-brand-mark">
              <img src="/assets/wejden-spire-icon.svg" alt="Wejden Spire icon" />
              <p>Thank you</p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}

export default function BrandGuideDeck() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [indexOpen, setIndexOpen] = useState(true)
  const [autoPlay, setAutoPlay] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const total = brandGuideSlides.length

  const chapterSummaries = useMemo(
    () => collectChapterSummaries(brandGuideSlides),
    [],
  )

  const chapterProgressLookup = useMemo(
    () => buildChapterProgressLookup(brandGuideSlides),
    [],
  )

  const activeSlide = brandGuideSlides[currentIndex]
  const activeChapterProgress = chapterProgressLookup[currentIndex]

  const chapterCompletion =
    ((currentIndex - activeChapterProgress.chapterStart + 1) /
      activeChapterProgress.chapterSlideTotal) *
    100

  const touchStart = useRef<TouchPoint | null>(null)

  const goTo = useCallback(
    (nextIndex: number) => {
      setCurrentIndex(clamp(nextIndex, 0, total - 1))
    },
    [total],
  )

  const goPrev = useCallback(() => {
    setCurrentIndex((index) => clamp(index - 1, 0, total - 1))
  }, [total])

  const goNext = useCallback(() => {
    setCurrentIndex((index) => clamp(index + 1, 0, total - 1))
  }, [total])

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  useEffect(() => {
    const hashId = window.location.hash.replace('#', '')
    if (!hashId) {
      return
    }

    const hashIndex = brandGuideSlides.findIndex((slide) => slide.id === hashId)
    if (hashIndex >= 0) {
      setCurrentIndex(hashIndex)
    }
  }, [])

  useEffect(() => {
    const activeId = brandGuideSlides[currentIndex].id
    history.replaceState(null, '', `#${activeId}`)
  }, [currentIndex])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return
      }

      if (
        event.key === 'ArrowRight' ||
        event.key === 'ArrowDown' ||
        event.key === 'PageDown' ||
        event.key === ' '
      ) {
        event.preventDefault()
        goNext()
      }

      if (
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowUp' ||
        event.key === 'PageUp'
      ) {
        event.preventDefault()
        goPrev()
      }

      if (event.key.toLowerCase() === 'j') {
        event.preventDefault()
        goNext()
      }

      if (event.key.toLowerCase() === 'k') {
        event.preventDefault()
        goPrev()
      }

      if (event.key.toLowerCase() === 'i') {
        event.preventDefault()
        setIndexOpen((value) => !value)
      }

      if (event.key.toLowerCase() === 'p') {
        event.preventDefault()
        window.print()
      }

      if (event.key.toLowerCase() === 'a') {
        event.preventDefault()
        setAutoPlay((value) => !value)
      }

      if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
      }

      if (event.key === 'End') {
        event.preventDefault()
        goTo(total - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goNext, goPrev, goTo, total])

  useEffect(() => {
    if (!autoPlay) {
      return
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % total)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [autoPlay, total])

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        setAutoPlay(false)
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    return () =>
      document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  useEffect(() => {
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0]
      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
      }
    }

    const onTouchEnd = (event: TouchEvent) => {
      if (!touchStart.current) {
        return
      }

      const touch = event.changedTouches[0]
      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y
      touchStart.current = null

      if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) {
        return
      }

      if (deltaX < 0) {
        goNext()
      } else {
        goPrev()
      }
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [goNext, goPrev])

  return (
    <div className={`deck-shell ${indexOpen ? 'index-open' : 'index-collapsed'}`}>
      <header className="deck-toolbar">
        <button
          type="button"
          className="brand-home"
          onClick={() => goTo(0)}
          aria-label="Go to cover"
        >
          <img src="/assets/wejden-spire-icon.svg" alt="Wejden Spire icon" />
          <span>Wejden Spire Brand Guide</span>
        </button>

        <div className="deck-progress-group">
          <p>
            Slide {currentIndex + 1} of {total}
          </p>

          <div className="deck-progress-bar" aria-hidden="true">
            <div style={{ width: `${((currentIndex + 1) / total) * 100}%` }} />
          </div>

          <p className="chapter-progress-label">
            {activeSlide.chapter} chapter: {Math.round(chapterCompletion)}%
          </p>

          <div className="chapter-progress-bar" aria-hidden="true">
            <div style={{ width: `${chapterCompletion}%` }} />
          </div>
        </div>
      </header>

      <nav className="chapter-nav" aria-label="Chapter navigation">
        {chapterSummaries.map((chapterSummary) => (
          <button
            key={chapterSummary.chapter}
            type="button"
            className={`chapter-chip ${
              activeSlide.chapter === chapterSummary.chapter ? 'is-current' : ''
            }`}
            onClick={() => goTo(chapterSummary.index)}
          >
            <span>{chapterSummary.chapter}</span>
            <strong>{chapterSummary.count}</strong>
          </button>
        ))}
      </nav>

      <div className="deck-body">
        <aside className={`slide-index ${indexOpen ? 'is-open' : 'is-closed'}`}>
          <button
            type="button"
            className="slide-index-toggle"
            onClick={() => setIndexOpen((value) => !value)}
            aria-label={indexOpen ? 'Collapse slide index' : 'Expand slide index'}
          >
            {indexOpen ? 'Hide Index' : 'Show Index'}
          </button>

          <div className="slide-index-list">
            {brandGuideSlides.map((slide, index) => {
              const chapterBoundary =
                index === 0 || brandGuideSlides[index - 1].chapter !== slide.chapter

              return (
                <div key={slide.id} className="slide-index-entry-wrap">
                  {chapterBoundary && <p className="slide-index-chapter">{slide.chapter}</p>}

                  <button
                    type="button"
                    className={`slide-index-entry ${
                      index === currentIndex ? 'is-active' : ''
                    }`}
                    onClick={() => goTo(index)}
                  >
                    <span>{formatIndex(index)}</span>
                    <strong>{slide.title}</strong>
                    <small>{slide.layout}</small>
                  </button>
                </div>
              )
            })}
          </div>
        </aside>

        <main className="slides-track" aria-live="polite">
          <SlideCard
            slide={activeSlide}
            index={currentIndex}
            total={total}
            active
            chapterSummaries={chapterSummaries}
            chapterProgress={activeChapterProgress}
            onJump={goTo}
          />
        </main>
      </div>

      <section className="slides-print" aria-hidden="true">
        {brandGuideSlides.map((slide, index) => (
          <SlideCard
            key={`print-${slide.id}`}
            slide={slide}
            index={index}
            total={total}
            active
            forceVisible
            chapterSummaries={chapterSummaries}
            chapterProgress={chapterProgressLookup[index]}
            onJump={goTo}
          />
        ))}
      </section>

      <footer className="deck-controls">
        <button type="button" onClick={() => goTo(0)}>
          Home
        </button>

        <button type="button" onClick={goPrev} disabled={currentIndex === 0}>
          Previous
        </button>

        <button
          type="button"
          onClick={goNext}
          disabled={currentIndex === total - 1}
        >
          Next
        </button>

        <button type="button" onClick={() => setAutoPlay((value) => !value)}>
          {autoPlay ? 'Pause Auto' : 'Auto Play'}
        </button>

        <button type="button" onClick={() => setIndexOpen((value) => !value)}>
          {indexOpen ? 'Hide Index' : 'Show Index'}
        </button>

        <button type="button" onClick={() => window.print()}>
          Print / PDF
        </button>
      </footer>

      {!isTouchDevice && (
        <p className="deck-shortcuts" aria-hidden="true">
          Shortcuts: arrows / J-K navigate, I index, A autoplay, P print
        </p>
      )}
    </div>
  )
}
