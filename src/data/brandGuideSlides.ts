export type SlideLayout =
  | 'cover'
  | 'toc'
  | 'chapter'
  | 'text'
  | 'split'
  | 'image'
  | 'palette'
  | 'typography'
  | 'symbol'
  | 'gallery'
  | 'closing'

export interface BrandSwatch {
  label: string
  hex: string
  role: string
}

export interface SymbolMeaning {
  label: string
  desc: string
  color: string
}

export interface BrandGuideSlide {
  id: string
  chapter: string
  chapterNum?: string
  layout: SlideLayout
  kicker: string
  title: string
  subtitle?: string
  body?: string
  bullets?: string[]
  callout?: string
  image?: string
  imageAlt?: string
  images?: string[]
  swatches?: BrandSwatch[]
  meanings?: SymbolMeaning[]
  specimen?: { family: string; weights: string[]; sample: string }
}

export const brandGuideSlides: BrandGuideSlide[] = [
  // ─── COVER ───
  {
    id: 'cover',
    chapter: 'Intro',
    layout: 'cover',
    kicker: 'Brand Identity Guidelines',
    title: 'Wejden Spire',
    subtitle: 'Scale smarter. Grow stronger.',
    body: '2026 — Interactive Brand Guide',
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Wejden Spire primary logo',
  },
  {
    id: 'contents',
    chapter: 'Intro',
    layout: 'toc',
    kicker: 'Guide Structure',
    title: 'Table of Contents',
    body: 'Structured for fast stakeholder review and production handoff.',
  },

  // ─── 01 BRAND CORE ───
  {
    id: 'ch-brand',
    chapter: 'Brand Core',
    chapterNum: '01',
    layout: 'chapter',
    kicker: 'Chapter One',
    title: 'Brand Core',
    subtitle: 'Essence, positioning, and personality.',
  },
  {
    id: 'essence',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Brand Essence',
    body: 'Wejden Spire transforms complex performance data into confident enterprise decisions.',
    bullets: [
      'Growth-first in every interaction and product surface.',
      'Reliable enough for enterprise operations at scale.',
      'Clear enough for non-technical stakeholders to act fast.',
    ],
    callout: 'Essence statement: Data to direction to measurable impact.',
  },
  {
    id: 'vision',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Vision',
    body: 'Become the most trusted growth intelligence partner for modern organizations in MENA and beyond.',
    bullets: [
      'Make strategic intelligence accessible across every team.',
      'Turn fragmented metrics into one shared source of truth.',
      'Help leaders move from reactive reporting to proactive growth.',
    ],
  },
  {
    id: 'mission',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Mission',
    body: 'Build decision systems that help enterprises analyze, optimize, and scale with confidence.',
    bullets: [
      'Deliver useful insight, not dashboard noise.',
      'Connect strategy and execution in one platform.',
      'Support measurable business outcomes in every quarter.',
    ],
  },
  {
    id: 'promise',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Brand Promise',
    body: 'Every product touchpoint should feel calm, intelligent, and action-oriented.',
    bullets: [
      'Clarity before complexity.',
      'Precision before opinion.',
      'Momentum before maintenance.',
    ],
    callout: 'One platform that helps teams move in the same direction.',
  },
  {
    id: 'pillars',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Strategic Pillars',
    bullets: [
      'Analyze: uncover what is really happening.',
      'Optimize: prioritize what changes outcomes fastest.',
      'Scale: operationalize winning patterns across teams.',
      'Govern: keep standards and accountability in place.',
    ],
    body: 'These pillars define the language for brand messaging, product UX, and sales narrative.',
  },
  {
    id: 'positioning',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Positioning Statement',
    body: 'For enterprise leaders who need aligned execution, Wejden Spire is the strategic growth engine that turns data into action.',
    bullets: [
      'Unlike generic BI tools, it is built around business motion.',
      'Unlike static reports, it is designed for daily decisions.',
      'Unlike fragmented stacks, it supports one shared operating rhythm.',
    ],
  },
  {
    id: 'audience-map',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Audience Overview',
    body: 'Primary buyers and users span leadership, strategy, and operations teams.',
    bullets: [
      'Executive buyers: CEO, COO, VP Strategy.',
      'Operational users: PMO, department leads, analysts.',
      'Influencers: finance, transformation offices, IT.',
    ],
  },
  {
    id: 'personality',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Brand Personality',
    body: 'The brand voice sits at the intersection of confidence and empathy.',
    bullets: [
      'Authoritative, not aggressive.',
      'Analytical, not robotic.',
      'Warm, not casual.',
      'Forward-looking, not speculative.',
    ],
  },
  {
    id: 'voice-principles',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Voice Principles',
    bullets: [
      'Lead with outcome, then explain mechanism.',
      'Use direct verbs and concrete proof points.',
      'Avoid jargon unless needed for technical precision.',
      'Write for executive skim speed and operational clarity.',
    ],
    callout: 'Voice test: can this sentence trigger a clear action?',
  },
  {
    id: 'message-architecture',
    chapter: 'Brand Core',
    layout: 'text',
    kicker: 'Brand Core',
    title: 'Messaging Architecture',
    bullets: [
      'Top line: Scale smarter, grow stronger.',
      'Support 1: One place for strategic visibility.',
      'Support 2: Faster prioritization, lower decision friction.',
      'Support 3: Clear accountability across teams.',
    ],
    body: 'Use this hierarchy in sales decks, landing pages, and product onboarding.',
  },

  // ─── 02 LOGO ───
  {
    id: 'ch-logo',
    chapter: 'Logo',
    chapterNum: '02',
    layout: 'chapter',
    kicker: 'Chapter Two',
    title: 'Logo System',
    subtitle: 'Architecture, lockups, and usage rules.',
  },
  {
    id: 'logo-overview',
    chapter: 'Logo',
    layout: 'split',
    kicker: 'Logo System',
    title: 'Logo Architecture',
    body: 'The system includes bilingual, English-only, vertical lockup, and icon mark variations.',
    bullets: [
      'Choose by context, language, and available canvas ratio.',
      'Maintain consistent sizing and clear space between variants.',
      'Use SVG sources for all digital and print-ready outputs.',
    ],
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Wejden Spire primary logo',
  },
  {
    id: 'logo-primary',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'Primary Bilingual Lockup',
    body: 'Default mark for master brand communication.',
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Primary bilingual logo',
  },
  {
    id: 'logo-english',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'English Lockup',
    body: 'Use for global-facing touchpoints and English-only collateral.',
    image: '/assets/wejden-spire-logo-english.svg',
    imageAlt: 'English logo lockup',
  },
  {
    id: 'logo-vertical',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'Vertical Lockup',
    body: 'Recommended for constrained spaces and square-first placements.',
    image: '/assets/wejden-spire-logo-vertical.svg',
    imageAlt: 'Vertical logo lockup',
  },
  {
    id: 'logo-icon',
    chapter: 'Logo',
    layout: 'symbol',
    kicker: 'Logo System',
    title: 'Icon Mark',
    body: 'The icon symbolizes upward movement, strategic direction, and stable foundations.',
    image: '/assets/wejden-spire-icon.svg',
    imageAlt: 'Wejden Spire icon mark',
    meanings: [
      { label: 'The Spire', desc: 'Three ascending chevrons represent upward momentum — ambition, growth, and reaching new market heights.', color: '#4BAA83' },
      { label: 'The Foundation', desc: 'The wide base anchors the mark with stability and trust — a solid platform for enterprise-scale operations.', color: '#6F8FB8' },
      { label: 'The Path', desc: 'Converging lines form a clear direction — guiding businesses from strategy to measurable outcomes.', color: '#8A7CC8' },
    ],
  },
  {
    id: 'clear-space',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'Clear Space Rule',
    body: 'Preserve a minimum exclusion zone equal to X around all logo variants.',
    image: '/assets/savezone.svg',
    imageAlt: 'Logo safe zone diagram',
  },
  {
    id: 'minimum-size',
    chapter: 'Logo',
    layout: 'text',
    kicker: 'Logo System',
    title: 'Minimum Size Rules',
    bullets: [
      'Primary lockup: minimum width 220 px digital.',
      'Vertical lockup: minimum width 120 px digital.',
      'Icon mark: minimum width 24 px digital.',
      'For print, never go below 8 mm icon width.',
    ],
    body: 'If readability drops, switch to a simpler lockup.',
  },
  {
    id: 'logo-donts',
    chapter: 'Logo',
    layout: 'text',
    kicker: 'Logo System',
    title: 'Incorrect Logo Usage',
    bullets: [
      'Do not stretch, skew, or rotate the logo.',
      'Do not change colors outside approved palette.',
      'Do not apply shadows, glows, or outlines.',
      'Do not place logo on low-contrast noisy backgrounds.',
    ],
    callout: 'If in doubt, revert to original SVG and approved background.',
  },

  // ─── 03 COLOR ───
  {
    id: 'ch-color',
    chapter: 'Color',
    chapterNum: '03',
    layout: 'chapter',
    kicker: 'Chapter Three',
    title: 'Color System',
    subtitle: 'Palette, ratios, and accessibility.',
  },
  {
    id: 'color-philosophy',
    chapter: 'Color',
    layout: 'palette',
    kicker: 'Visual Identity',
    title: 'Brand Colors',
    body: 'Colors that represent trust, intelligence, and growth.',
    swatches: [
      { label: 'Brand Green', hex: '#4BAA83', role: 'Primary action · 20% ratio' },
      { label: 'Calm Blue', hex: '#6F8FB8', role: 'Secondary accent · 10% ratio' },
      { label: 'Soft Purple', hex: '#8A7CC8', role: 'Premium highlight · 5% ratio' },
    ],
  },
  {
    id: 'neutral-system',
    chapter: 'Color',
    layout: 'palette',
    kicker: 'Visual Identity',
    title: 'Neutral Foundation',
    body: 'Neutrals hold 65% of all visual surfaces — readability and density across dashboards and documents.',
    swatches: [
      { label: 'Background', hex: '#F6F5F3', role: 'Base canvas' },
      { label: 'Border', hex: '#E7E3DD', role: 'Dividers and strokes' },
      { label: 'Text', hex: '#24322C', role: 'Headlines and body' },
      { label: 'Muted', hex: '#6B7280', role: 'Labels and metadata' },
    ],
  },
  {
    id: 'accessibility',
    chapter: 'Color',
    layout: 'text',
    kicker: 'Visual Identity',
    title: 'Accessibility & Contrast',
    body: 'Color decisions must pass readability rules before aesthetics.',
    bullets: [
      'Body text requires at least 4.5:1 contrast ratio.',
      'Large headings should remain above 3:1 contrast.',
      'Never rely on color alone to communicate status.',
      'Pair color states with icons or text labels.',
    ],
  },
  {
    id: 'gradient-usage',
    chapter: 'Color',
    layout: 'text',
    kicker: 'Visual Identity',
    title: 'Gradient Usage',
    body: 'Gradients are a supporting device for depth, not a primary background system.',
    bullets: [
      'Green → Blue for directional progress moments.',
      'Blue → Purple for premium feature highlights.',
      'Use subtle opacity overlays on imagery and hero banners.',
    ],
    callout: 'Avoid gradients behind dense text blocks or data tables.',
  },

  // ─── 04 TYPOGRAPHY ───
  {
    id: 'ch-type',
    chapter: 'Typography',
    chapterNum: '04',
    layout: 'chapter',
    kicker: 'Chapter Four',
    title: 'Typography',
    subtitle: 'Typefaces, scale, and rhythm.',
  },
  {
    id: 'latin-family',
    chapter: 'Typography',
    layout: 'typography',
    kicker: 'Typography',
    title: 'Latin Typeface',
    body: 'Manrope provides modern geometry with high legibility in dense UI and long-form docs.',
    specimen: {
      family: 'Manrope',
      weights: ['400 Regular', '500 Medium', '600 SemiBold', '700 Bold'],
      sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789',
    },
  },
  {
    id: 'arabic-family',
    chapter: 'Typography',
    layout: 'typography',
    kicker: 'Typography',
    title: 'Arabic Typeface',
    body: 'Meral Sans preserves clarity and rhythm across Arabic headings and paragraphs.',
    specimen: {
      family: 'Meral Sans',
      weights: ['400 Regular', '500 Medium', '600 SemiBold', '700 Bold'],
      sample: 'أبجد هوز حطي كلمن سعفص\nقرشت ثخذ ضظغ',
    },
  },
  {
    id: 'type-scale',
    chapter: 'Typography',
    layout: 'text',
    kicker: 'Typography',
    title: 'Type Scale',
    bullets: [
      'Display: 72–60 px for cover and chapter moments.',
      'H1: 48 px · H2: 36 px · H3: 24 px.',
      'Body: 16–18 px depending on viewing distance.',
      'Caption: 12–14 px with medium weight.',
    ],
    body: 'Keep vertical rhythm consistent across all 16:9 compositions.',
  },
  {
    id: 'spacing-rhythm',
    chapter: 'Typography',
    layout: 'text',
    kicker: 'Typography',
    title: 'Spacing Rhythm',
    body: 'Use an 8-point spacing cadence to reduce visual noise.',
    bullets: [
      'Section spacing: 64–96 px.',
      'Card spacing: 24–32 px.',
      'Inline spacing: 8–16 px.',
      'Use deliberate whitespace before strategic callouts.',
    ],
  },

  // ─── 05 SYMBOLS ───
  {
    id: 'ch-symbols',
    chapter: 'Symbols',
    chapterNum: '05',
    layout: 'chapter',
    kicker: 'Chapter Five',
    title: 'Icons & Symbols',
    subtitle: 'Meaning behind each mark.',
  },
  {
    id: 'symbol-alpro',
    chapter: 'Symbols',
    layout: 'symbol',
    kicker: 'Additional Proposition 1',
    title: 'Proposition 1 — Symbol Meaning',
    body: 'The Alpro mark captures momentum, adaptability, and strategic elevation.',
    image: '/assets/alpro.svg',
    imageAlt: 'Alpro icon',
    meanings: [
      { label: 'The Ascent', desc: 'The rising form represents ambition and forward motion — a brand that climbs toward excellence in every project.', color: '#4BAA83' },
      { label: 'The Flow', desc: 'Organic curves convey creativity and adaptability — fluid thinking that shapes tailored solutions for each client.', color: '#6F8FB8' },
      { label: 'The Spire', desc: 'The upward peak evokes the idea of a spire — symbolizing growth, elevation, and the pursuit of higher impact.', color: '#8A7CC8' },
    ],
  },
  {
    id: 'symbol-heypro',
    chapter: 'Symbols',
    layout: 'symbol',
    kicker: 'Additional Proposition 2',
    title: 'Proposition 2 — Symbol Meaning',
    body: 'The HeyPro mark represents growth, wellbeing, and continuous progress.',
    image: '/assets/heypro.svg',
    imageAlt: 'HeyPro icon',
    meanings: [
      { label: 'Growth & Elevation', desc: 'The rising "W" line symbolizes progress and personal development — a continuous journey toward higher achievement.', color: '#4BAA83' },
      { label: 'The Spire', desc: 'The upward movement reflects the idea of a spire — reaching higher levels of wellbeing and mental clarity.', color: '#6F8FB8' },
      { label: 'The Circle', desc: 'A continuous ring represents completeness and protection — an all-encompassing ecosystem centered on the user.', color: '#8A7CC8' },
    ],
  },
  {
    id: 'iconography',
    chapter: 'Symbols',
    layout: 'text',
    kicker: 'System Language',
    title: 'Iconography System',
    body: 'Icons are built on a 24 px grid with 1.5 px stroke and rounded terminals.',
    bullets: [
      'Consistent stroke style across platform and enterprise sets.',
      'Use simple metaphors with no decorative detail.',
      'Prioritize recognizability at small sizes.',
      'Primary actions in green, secondary in neutral outlines.',
    ],
  },

  // ─── 06 APPLICATIONS ───
  {
    id: 'ch-apps',
    chapter: 'Applications',
    chapterNum: '06',
    layout: 'chapter',
    kicker: 'Chapter Six',
    title: 'Applications',
    subtitle: 'Real-world brand in action.',
  },
  {
    id: 'mockup-mobile',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Mobile App Icon',
    body: 'Icon mark behavior in mobile-first contexts.',
    image: '/assets/mockup-4.png',
    imageAlt: 'Mobile app icon mockup',
  },
  {
    id: 'mockup-corporate',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Corporate Identity',
    body: 'Logo and typography behavior in formal brand materials.',
    image: '/assets/mockup-2.png',
    imageAlt: 'Corporate identity mockup',
  },
  {
    id: 'mockup-signage',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Environmental Signage',
    body: 'Large-format visibility and legibility in public brand surfaces.',
    image: '/assets/mockup-1.png',
    imageAlt: 'Environmental signage mockup',
  },
  {
    id: 'mockup-stationery',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Stationery & Collateral',
    body: 'Consistent logo balance and color ratio in stationery applications.',
    image: '/assets/mockup-3.png',
    imageAlt: 'Stationery mockup',
  },
  {
    id: 'mockup-pin',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Pin Badge',
    body: 'Brand presence in small-format promotional items.',
    image: '/assets/mockup-5.png',
    imageAlt: 'Pin badge mockup',
  },

  // ─── 07 DELIVERY ───
  {
    id: 'ch-delivery',
    chapter: 'Delivery',
    chapterNum: '07',
    layout: 'chapter',
    kicker: 'Chapter Seven',
    title: 'Delivery',
    subtitle: 'Implementation and handoff.',
  },
  {
    id: 'delivery-roadmap',
    chapter: 'Delivery',
    layout: 'text',
    kicker: 'Delivery',
    title: 'Implementation Roadmap',
    body: 'Finalize, hand off, and launch with one controlled rollout sequence.',
    bullets: [
      'Week 1: Stakeholder review and final approvals.',
      'Week 2: Production asset packaging and QA pass.',
      'Week 3: Product and marketing rollout with tracking.',
      'Week 4: Post-launch calibration and optimization.',
    ],
    callout: 'Deliverables include logo packs, token specs, icon set, and this master guide.',
  },
  {
    id: 'closing',
    chapter: 'Delivery',
    layout: 'closing',
    kicker: 'Thank You',
    title: 'Thank You',
    body: 'We look forward to building this brand together.',
    image: '/assets/wejden-spire-icon.svg',
  },
]
