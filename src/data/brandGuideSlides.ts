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

  /* ═══════════════════════════════════════
     1. COVER
     ═══════════════════════════════════════ */
  {
    id: 'cover',
    chapter: 'Cover',
    layout: 'cover',
    kicker: '',
    title: 'Brand Identity Book',
    subtitle: 'The visual and verbal system behind Wejden Spire — where psychology meets technology to transform workplace wellbeing.',
    image: '/assets/wejden-spire-logo.svg',
  },

  /* ═══════════════════════════════════════
     2. BRAND PHILOSOPHY
     ═══════════════════════════════════════ */
  {
    id: 'philosophy-chapter',
    chapter: 'Brand Philosophy',
    chapterNum: '01',
    layout: 'chapter',
    kicker: 'Brand Philosophy',
    title: 'Brand Philosophy',
    subtitle: 'The foundational belief that drives everything we do.',
  },
  {
    id: 'philosophy-01',
    chapter: 'Brand Philosophy',
    layout: 'text',
    kicker: 'Brand Philosophy',
    title: 'What We Believe',
    body: 'We believe that every person carries an emotional landscape that shapes how they work, relate, and grow. When organizations listen to this landscape with the right tools, they unlock a new dimension of human performance — one rooted in empathy, not just efficiency.',
    callout: '"Wellbeing is not a perk. It is the foundation of sustainable performance."',
  },
  {
    id: 'philosophy-02',
    chapter: 'Brand Philosophy',
    layout: 'split',
    kicker: 'Brand Philosophy',
    title: 'Science-Led, Human-Centered',
    body: 'Wejden Spire is built on clinically validated psychometric instruments — PANAS for emotional affect and K6 for psychological distress. We don\'t guess. We measure. But behind every data point is a person, and our philosophy demands that the human experience always comes first.',
    bullets: [
      'Clinically validated tools (PANAS / K6)',
      'Continuous measurement, not one-time surveys',
      'Data serves people, not the other way around',
      'Privacy and anonymity are non-negotiable',
    ],
    image: '/assets/mockup-1.png',
    imageAlt: 'Wejden Spire platform showing psychometric assessment',
  },

  /* ═══════════════════════════════════════
     3. BRAND VISION
     ═══════════════════════════════════════ */
  {
    id: 'vision-chapter',
    chapter: 'Brand Vision',
    chapterNum: '02',
    layout: 'chapter',
    kicker: 'Brand Vision',
    title: 'Brand Vision',
    subtitle: 'The future we are working toward.',
  },
  {
    id: 'vision-01',
    chapter: 'Brand Vision',
    layout: 'text',
    kicker: 'Brand Vision',
    title: 'A World Where Work Doesn\'t Cost Wellbeing',
    body: 'We envision a world where every organization continuously understands and improves the emotional health of its people — where psychosocial risk is measured as rigorously as financial risk, and where wellbeing data drives real decisions at the leadership level.',
    callout: '44% of employees report psychological distress. We exist to change that number.',
  },

  /* ═══════════════════════════════════════
     4. BRAND MISSION
     ═══════════════════════════════════════ */
  {
    id: 'mission-chapter',
    chapter: 'Brand Mission',
    chapterNum: '03',
    layout: 'chapter',
    kicker: 'Brand Mission',
    title: 'Brand Mission',
    subtitle: 'What we do, for whom, and how.',
  },
  {
    id: 'mission-01',
    chapter: 'Brand Mission',
    layout: 'text',
    kicker: 'Brand Mission',
    title: 'Transforming Emotions Into Organizational Intelligence',
    body: 'Wejden Spire is the first B2B SaaS platform that continuously measures psychosocial risk using clinically validated tools, converts emotional data into actionable HR dashboards, and empowers organizations to make evidence-based wellbeing decisions — reducing turnover, absenteeism, and human cost.',
    bullets: [
      'Continuous psychosocial risk measurement via PANAS & K6',
      'Real-time HR dashboards correlated to business KPIs',
      'Predictive alerts and AI-powered action plans',
      'ISO 45001 / 45003 / 26000 / ESG compliance reporting',
    ],
  },

  /* ═══════════════════════════════════════
     5. BRAND STORY
     ═══════════════════════════════════════ */
  {
    id: 'story-chapter',
    chapter: 'Brand Story',
    chapterNum: '04',
    layout: 'chapter',
    kicker: 'Brand Story',
    title: 'Brand Story',
    subtitle: 'The journey from problem to platform.',
  },
  {
    id: 'story-01',
    chapter: 'Brand Story',
    layout: 'split',
    kicker: 'Brand Story',
    title: 'The Problem We Saw',
    body: 'In high-pressure sectors, 40% annual employee turnover is the norm. 87% of wellbeing programs are never measured continuously. Psychosocial risks cost enterprises 2 to 3 billion euros per year — yet most organizations still rely on annual surveys that arrive too late to change anything.',
    bullets: [
      '40% annual turnover in high-pressure sectors',
      '87% of programs never measured continuously',
      '2-3 billion euros/year in psychosocial risk costs',
      'Annual surveys arrive too late to drive action',
    ],
    image: '/assets/mockup-2.png',
    imageAlt: 'Dashboard showing wellbeing metrics',
  },
  {
    id: 'story-02',
    chapter: 'Brand Story',
    layout: 'split',
    kicker: 'Brand Story',
    title: 'The Solution We Built',
    body: 'Wejden Spire bridges the gap between clinical psychology and enterprise HR. Our platform gives employees a private, gamified space to complete 2-minute PANAS/K6 assessments, access micro-interventions, and connect with anonymous support — while HR leaders get real-time dashboards, predictive alerts, and ROI simulators.',
    bullets: [
      'Employee space: gamified assessments, chatbot, teleconsultation',
      'HR dashboard: real-time wellbeing score, predictive alerts',
      'ROI simulator: 6:1 return, -20% turnover, 312K savings/year',
      'Pilot program: free for 50-1000 employees, 8 weeks',
    ],
    image: '/assets/mockup-3.png',
    imageAlt: 'Wejden Spire employee experience',
  },
  {
    id: 'story-03',
    chapter: 'Brand Story',
    layout: 'text',
    kicker: 'Brand Story',
    title: 'Traction & Trust',
    body: 'Wejden Spire has already earned the trust of leading organizations across sectors. Our pilot program has demonstrated measurable results and high satisfaction scores.',
    bullets: [
      '22 pilot companies onboarded',
      '70 deployed employees in active measurement',
      'NPS score of 74 — world-class satisfaction',
      '4.2 / 5 average user satisfaction rating',
      'Clients: UBCI, Poulina Group, STEG',
    ],
    callout: 'NPS 74 — Our users don\'t just use the platform. They recommend it.',
  },

  /* ═══════════════════════════════════════
     6. LOGO MEANING
     ═══════════════════════════════════════ */
  {
    id: 'logo-meaning-chapter',
    chapter: 'Logo Meaning',
    chapterNum: '05',
    layout: 'chapter',
    kicker: 'Logo Meaning',
    title: 'Logo Meaning',
    subtitle: 'The symbolism embedded in our mark.',
  },
  {
    id: 'logo-meaning-01',
    chapter: 'Logo Meaning',
    layout: 'symbol',
    kicker: 'Logo Meaning',
    title: 'Decoding the Wejden Spire Mark',
    body: 'The Wejden Spire logo is a visual synthesis of growth, measurement, and human connection. Each element carries deliberate meaning.',
    meanings: [
      { label: 'The Spire', desc: 'An ascending form representing growth, aspiration, and upward trajectory — the direction every organization should move toward.', color: '#4baa83' },
      { label: 'The Arc', desc: 'A gentle curve evoking the emotional spectrum measured by PANAS — from negative to positive affect, captured in one flowing motion.', color: '#7faedb' },
      { label: 'The Dot', desc: 'A focal point symbolizing the individual — the single person at the center of every data point and every decision.', color: '#9a8bd6' },
      { label: 'The Wordmark', desc: 'Set in Manrope, our wordmark balances geometric precision with humanist warmth — technology with empathy.', color: '#1f2a2e' },
    ],
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Wejden Spire logo',
  },

  /* ═══════════════════════════════════════
     7. LOGO CONSTRUCTION
     ═══════════════════════════════════════ */
  {
    id: 'logo-construction-chapter',
    chapter: 'Logo Construction',
    chapterNum: '06',
    layout: 'chapter',
    kicker: 'Logo Construction',
    title: 'Logo Construction',
    subtitle: 'Grid, proportions, and structural logic.',
  },
  {
    id: 'logo-construction-01',
    chapter: 'Logo Construction',
    layout: 'split',
    kicker: 'Logo Construction',
    title: 'Construction Grid',
    body: 'The logo is built on a precise geometric grid that ensures visual harmony at every scale. The spire element follows a golden-ratio progression, while the wordmark aligns to a baseline grid with optically adjusted spacing.',
    bullets: [
      'Built on an 8-unit grid system',
      'Spire proportions follow golden ratio (1:1.618)',
      'Wordmark kerning optically adjusted per pair',
      'Minimum reproduction size: 24px height (digital), 10mm (print)',
    ],
    image: '/assets/wejden-spire-icon.svg',
    imageAlt: 'Wejden Spire icon construction',
  },

  /* ═══════════════════════════════════════
     8. LOGO VARIATIONS
     ═══════════════════════════════════════ */
  {
    id: 'logo-variations-chapter',
    chapter: 'Logo Variations',
    chapterNum: '07',
    layout: 'chapter',
    kicker: 'Logo Variations',
    title: 'Logo Variations',
    subtitle: 'Approved versions for every context.',
  },
  {
    id: 'logo-variations-01',
    chapter: 'Logo Variations',
    layout: 'gallery',
    kicker: 'Logo Variations',
    title: 'Approved Logo Versions',
    body: 'Four official logo variations exist to accommodate different layout requirements. Always choose the version that provides the best legibility and visual balance for the context.',
    images: [
      '/assets/wejden-spire-logo.svg',
      '/assets/wejden-spire-logo-english.svg',
      '/assets/wejden-spire-logo-vertical.svg',
      '/assets/wejden-spire-icon.svg',
    ],
    bullets: [
      'Primary horizontal — default for most applications',
      'English horizontal — for international communications',
      'Vertical stacked — for square or narrow formats',
      'Icon only — for favicons, app icons, and small spaces',
    ],
  },

  /* ═══════════════════════════════════════
     9. CLEAR SPACE
     ═══════════════════════════════════════ */
  {
    id: 'clear-space-chapter',
    chapter: 'Clear Space',
    chapterNum: '08',
    layout: 'chapter',
    kicker: 'Clear Space',
    title: 'Clear Space & Sizing',
    subtitle: 'Protecting the logo\'s visual integrity.',
  },
  {
    id: 'clear-space-01',
    chapter: 'Clear Space',
    layout: 'split',
    kicker: 'Clear Space',
    title: 'Minimum Clear Space',
    body: 'The clear space around the logo ensures it breathes and maintains authority. The minimum exclusion zone equals the height of the "W" in the wordmark on all four sides. No text, imagery, or graphic elements may enter this zone.',
    bullets: [
      'Exclusion zone = height of the "W" character',
      'Applies equally on all four sides',
      'Increase clear space in busy environments',
      'Never crowd the logo against edges or other elements',
    ],
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Logo clear space diagram',
  },
  {
    id: 'clear-space-02',
    chapter: 'Clear Space',
    layout: 'text',
    kicker: 'Clear Space',
    title: 'Minimum Size Rules',
    body: 'To preserve legibility and brand recognition, the logo must never be reproduced below its minimum size thresholds.',
    bullets: [
      'Digital: minimum 24px height for full logo, 16px for icon',
      'Print: minimum 10mm height for full logo, 6mm for icon',
      'If the logo cannot meet minimums, use the icon-only version',
      'Never alter, stretch, rotate, or add effects to the logo',
    ],
    callout: 'When in doubt, go larger. A confident logo is a visible logo.',
  },

  /* ═══════════════════════════════════════
     10. COLOR SYSTEM
     ═══════════════════════════════════════ */
  {
    id: 'color-chapter',
    chapter: 'Color System',
    chapterNum: '09',
    layout: 'chapter',
    kicker: 'Color System',
    title: 'Color System',
    subtitle: 'A palette that communicates trust, calm, and clarity.',
  },
  {
    id: 'color-01',
    chapter: 'Color System',
    layout: 'palette',
    kicker: 'Color System',
    title: 'Primary Palette',
    body: 'Our primary palette establishes the visual tone of the brand. Spire Green anchors the identity, supported by Insight Blue and Calm Purple for range and depth.',
    swatches: [
      { label: 'Spire Green', hex: '#4baa83', role: 'Primary — trust, growth, wellbeing' },
      { label: 'Insight Blue', hex: '#7faedb', role: 'Secondary — data, clarity, intelligence' },
      { label: 'Calm Purple', hex: '#9a8bd6', role: 'Accent — psychology, empathy, depth' },
    ],
  },
  {
    id: 'color-02',
    chapter: 'Color System',
    layout: 'palette',
    kicker: 'Color System',
    title: 'Neutral & Background Palette',
    body: 'Neutrals provide structure and breathing room. They ensure content remains legible and the interface feels open and calm.',
    swatches: [
      { label: 'Deep Ink', hex: '#1f2a2e', role: 'Text — headings, body copy, high contrast' },
      { label: 'Muted Sage', hex: '#6b7a7f', role: 'Secondary text — captions, labels, metadata' },
      { label: 'Soft Cloud', hex: '#f6f8f7', role: 'Background — canvas, card backgrounds' },
      { label: 'Light Border', hex: '#e2e6e4', role: 'Dividers — subtle separations, card edges' },
    ],
  },
  {
    id: 'color-03',
    chapter: 'Color System',
    layout: 'palette',
    kicker: 'Color System',
    title: 'Tinted Backgrounds',
    body: 'Soft tinted backgrounds add warmth and visual hierarchy without competing with content. Use sparingly to highlight sections or create depth.',
    swatches: [
      { label: 'Green Tint', hex: '#e8f5ef', role: 'Highlight panels, success states, wellbeing context' },
      { label: 'Blue Tint', hex: '#eaf1f8', role: 'Data sections, informational callouts' },
      { label: 'Purple Tint', hex: '#efecf7', role: 'Psychology content, empathy-related features' },
    ],
  },

  /* ═══════════════════════════════════════
     11. COLOR PSYCHOLOGY
     ═══════════════════════════════════════ */
  {
    id: 'color-psych-chapter',
    chapter: 'Color Psychology',
    chapterNum: '10',
    layout: 'chapter',
    kicker: 'Color Psychology',
    title: 'Color Psychology',
    subtitle: 'Why these colors — the emotional logic behind the palette.',
  },
  {
    id: 'color-psych-01',
    chapter: 'Color Psychology',
    layout: 'symbol',
    kicker: 'Color Psychology',
    title: 'The Emotional Logic of Color',
    body: 'Every color in our palette was chosen for its psychological resonance with our mission. Together, they create a visual language that feels trustworthy, calming, and intelligent.',
    meanings: [
      { label: 'Green — Growth & Trust', desc: 'Green signals safety, health, and forward motion. As a wellbeing platform, green positions us in the space of care and positive change.', color: '#4baa83' },
      { label: 'Blue — Clarity & Data', desc: 'Blue evokes reliability and analytical precision. It connects our brand to the rigor of psychometric science and data-driven decisions.', color: '#7faedb' },
      { label: 'Purple — Empathy & Depth', desc: 'Purple bridges the rational and emotional. It represents the psychological dimension — the human depth beneath the data surface.', color: '#9a8bd6' },
      { label: 'Neutral Tones — Calm & Space', desc: 'Our muted neutrals create visual silence, giving the eye and mind room to process. They reflect our belief that wellbeing needs breathing room.', color: '#6b7a7f' },
    ],
  },

  /* ═══════════════════════════════════════
     12. TYPOGRAPHY
     ═══════════════════════════════════════ */
  {
    id: 'typo-chapter',
    chapter: 'Typography',
    chapterNum: '11',
    layout: 'chapter',
    kicker: 'Typography',
    title: 'Typography',
    subtitle: 'Type that speaks with clarity and warmth.',
  },
  {
    id: 'typo-01',
    chapter: 'Typography',
    layout: 'typography',
    kicker: 'Typography',
    title: 'Manrope — Primary Typeface',
    body: 'Manrope is a modern geometric sans-serif with humanist proportions. Its rounded terminals soften technical content, while its clean geometry maintains professionalism. Used for all headings, body text, and UI elements.',
    specimen: {
      family: 'Manrope',
      weights: ['ExtraLight 200', 'Light 300', 'Regular 400', 'Medium 500', 'SemiBold 600', 'Bold 700', 'ExtraBold 800'],
      sample: 'Measuring wellbeing, empowering decisions.',
    },
  },
  {
    id: 'typo-02',
    chapter: 'Typography',
    layout: 'text',
    kicker: 'Typography',
    title: 'Type Scale & Hierarchy',
    body: 'Our typographic hierarchy creates clear visual rhythm across all touchpoints. Large display sizes command attention, while smaller body sizes ensure comfortable reading.',
    bullets: [
      'Display: 48-72px / ExtraBold 800 — hero sections, cover slides',
      'Heading 1: 36-48px / Bold 700 — section titles, page headers',
      'Heading 2: 24-32px / SemiBold 600 — subsections, card titles',
      'Body: 16-18px / Regular 400 — paragraphs, descriptions',
      'Caption: 12-14px / Medium 500 — labels, metadata, kickers',
      'Line height: 1.5 for body, 1.2 for headings',
    ],
  },

  /* ═══════════════════════════════════════
     13. ICONOGRAPHY
     ═══════════════════════════════════════ */
  {
    id: 'icon-chapter',
    chapter: 'Iconography',
    chapterNum: '12',
    layout: 'chapter',
    kicker: 'Iconography',
    title: 'Iconography',
    subtitle: 'Simple, consistent, and meaningful icons.',
  },
  {
    id: 'icon-01',
    chapter: 'Iconography',
    layout: 'text',
    kicker: 'Iconography',
    title: 'Icon Design Principles',
    body: 'Our icons follow a unified visual language: 24x24 grid, 1.5px stroke weight, rounded line caps and joins. They are minimal, legible at small sizes, and consistent in visual weight.',
    bullets: [
      '24x24px grid with 2px padding',
      '1.5px stroke, rounded caps and joins',
      'Single-color, inheriting text color',
      'No fills unless specifically required for clarity',
      'Pixel-aligned for sharp rendering on all screens',
      'Consistent visual weight across the full set',
    ],
    callout: 'Icons should clarify, never decorate. If an icon doesn\'t add meaning, remove it.',
  },
  {
    id: 'icon-02',
    chapter: 'Iconography',
    layout: 'symbol',
    kicker: 'Iconography',
    title: 'Core Icon Categories',
    body: 'Icons are organized into functional categories that map to the platform\'s core domains.',
    meanings: [
      { label: 'Wellbeing', desc: 'Heart, pulse, shield, smile — representing emotional health, safety, and positive states.', color: '#4baa83' },
      { label: 'Measurement', desc: 'Chart, gauge, target, scale — representing data collection, assessment, and scoring.', color: '#7faedb' },
      { label: 'Action', desc: 'Arrow, bell, lightning, gear — representing alerts, interventions, and system actions.', color: '#9a8bd6' },
      { label: 'People', desc: 'User, group, chat, hand — representing individuals, teams, communication, and support.', color: '#1f2a2e' },
    ],
  },

  /* ═══════════════════════════════════════
     14. GRAPHIC ELEMENTS
     ═══════════════════════════════════════ */
  {
    id: 'graphic-chapter',
    chapter: 'Graphic Elements',
    chapterNum: '13',
    layout: 'chapter',
    kicker: 'Graphic Elements',
    title: 'Graphic Elements',
    subtitle: 'Shapes, patterns, and decorative motifs.',
  },
  {
    id: 'graphic-01',
    chapter: 'Graphic Elements',
    layout: 'text',
    kicker: 'Graphic Elements',
    title: 'Visual Motifs',
    body: 'Our graphic language uses soft, organic shapes to reinforce the brand\'s human-centered positioning. These elements add visual interest without competing with content.',
    bullets: [
      'Rounded rectangles with generous corner radii (12-24px)',
      'Soft gradient overlays — green-to-blue, blue-to-purple',
      'Floating circles and arcs as decorative accents',
      'Subtle dot grids for texture in empty spaces',
      'Diagonal accent blocks for energy and movement',
      'Avoid sharp corners, hard angles, or aggressive patterns',
    ],
  },
  {
    id: 'graphic-02',
    chapter: 'Graphic Elements',
    layout: 'text',
    kicker: 'Graphic Elements',
    title: 'Gradient Usage',
    body: 'Gradients add depth and dimensionality. They should flow naturally between our brand colors, never creating harsh transitions.',
    bullets: [
      'Primary gradient: Spire Green to Insight Blue (#4baa83 to #7faedb)',
      'Secondary gradient: Insight Blue to Calm Purple (#7faedb to #9a8bd6)',
      'Warm gradient: Spire Green to Calm Purple (#4baa83 to #9a8bd6)',
      'Direction: typically top-left to bottom-right (135 degrees)',
      'Use at 10-20% opacity as background washes',
      'Never apply gradients directly to text',
    ],
  },

  /* ═══════════════════════════════════════
     15. ILLUSTRATION STYLE
     ═══════════════════════════════════════ */
  {
    id: 'illustration-chapter',
    chapter: 'Illustration Style',
    chapterNum: '14',
    layout: 'chapter',
    kicker: 'Illustration Style',
    title: 'Illustration Style',
    subtitle: 'Warm, minimal, and psychologically informed.',
  },
  {
    id: 'illustration-01',
    chapter: 'Illustration Style',
    layout: 'text',
    kicker: 'Illustration Style',
    title: 'Illustration Principles',
    body: 'Illustrations bridge the gap between data and emotion. They humanize our platform and make complex psychological concepts accessible and inviting.',
    bullets: [
      'Flat or semi-flat style with subtle shadows',
      'Limited palette drawn from brand colors only',
      'Rounded, organic forms — no sharp or aggressive shapes',
      'Diverse, inclusive human representation',
      'Abstract emotional concepts (growth, connection, calm)',
      'Consistent stroke weight matching icon system (1.5px)',
    ],
    callout: 'Illustrations should feel like Headspace meets Stripe — warm, modern, and trustworthy.',
  },

  /* ═══════════════════════════════════════
     16. PHOTOGRAPHY STYLE
     ═══════════════════════════════════════ */
  {
    id: 'photo-chapter',
    chapter: 'Photography Style',
    chapterNum: '15',
    layout: 'chapter',
    kicker: 'Photography Style',
    title: 'Photography Style',
    subtitle: 'Authentic, warm, and naturally lit.',
  },
  {
    id: 'photo-01',
    chapter: 'Photography Style',
    layout: 'text',
    kicker: 'Photography Style',
    title: 'Photography Direction',
    body: 'Photography reinforces our brand promise: real people, real workplaces, real wellbeing. Every image should feel authentic and approachable — never staged or corporate.',
    bullets: [
      'Natural lighting preferred — warm, soft, diffused',
      'Candid moments over posed portraits',
      'Modern, clean workplace environments',
      'Diverse teams in collaborative or reflective moments',
      'Desaturated color treatment with a slight warm tone',
      'Avoid: stock cliches, forced smiles, isolated individuals',
    ],
  },
  {
    id: 'photo-02',
    chapter: 'Photography Style',
    layout: 'text',
    kicker: 'Photography Style',
    title: 'Photo Treatment',
    body: 'When integrating photography into brand materials, apply consistent treatments to maintain visual cohesion.',
    bullets: [
      'Apply a slight green/teal color wash (5-10% opacity)',
      'Rounded corners (12px) when used in UI or cards',
      'Soft drop shadow for depth (0 4px 24px rgba(0,0,0,0.08))',
      'Duotone treatment using brand colors for hero sections',
      'Never crop faces awkwardly or use low-resolution images',
    ],
  },

  /* ═══════════════════════════════════════
     17. DIGITAL PRODUCT STYLE
     ═══════════════════════════════════════ */
  {
    id: 'digital-chapter',
    chapter: 'Digital Product Style',
    chapterNum: '16',
    layout: 'chapter',
    kicker: 'Digital Product Style',
    title: 'Digital Product Style',
    subtitle: 'How the brand lives inside the product.',
  },
  {
    id: 'digital-01',
    chapter: 'Digital Product Style',
    layout: 'split',
    kicker: 'Digital Product Style',
    title: 'Product Interface',
    body: 'The Wejden Spire product embodies our brand values at every pixel. Clean layouts, generous whitespace, and thoughtful micro-interactions create an experience that feels calming — not clinical.',
    bullets: [
      'Employee space: gamified 2-min PANAS/K6 assessments',
      'Micro-interventions and wellbeing resources',
      '24/7 AI chatbot for anonymous support',
      'Anonymous teleconsultation access',
      'Soft skills library and job crafting tools',
    ],
    image: '/assets/mockup-4.png',
    imageAlt: 'Wejden Spire employee interface',
  },
  {
    id: 'digital-02',
    chapter: 'Digital Product Style',
    layout: 'split',
    kicker: 'Digital Product Style',
    title: 'HR Dashboard',
    body: 'The HR dashboard transforms emotional data into visual intelligence. Every chart, metric, and alert is designed for clarity and actionability.',
    bullets: [
      'Real-time wellbeing score by team and department',
      'Correlation to business KPIs: absenteeism, turnover, CSAT, AHT',
      'Predictive alerts for at-risk teams',
      'AI-powered action plan generator',
      'ROI simulator and compliance reporting',
    ],
    image: '/assets/mockup-5.png',
    imageAlt: 'Wejden Spire HR dashboard',
  },

  /* ═══════════════════════════════════════
     18. UI DESIGN PRINCIPLES
     ═══════════════════════════════════════ */
  {
    id: 'ui-chapter',
    chapter: 'UI Design Principles',
    chapterNum: '17',
    layout: 'chapter',
    kicker: 'UI Design Principles',
    title: 'UI Design Principles',
    subtitle: 'The rules that govern our interface design.',
  },
  {
    id: 'ui-01',
    chapter: 'UI Design Principles',
    layout: 'text',
    kicker: 'UI Design Principles',
    title: 'Design System Foundations',
    body: 'Our UI design system ensures consistency, accessibility, and calm across every screen. These principles apply to the platform, marketing site, and all digital touchpoints.',
    bullets: [
      'Spacing: 8px base unit, all spacing in multiples of 8',
      'Border radius: 8px for small elements, 12px for cards, 24px for modals',
      'Shadows: layered, soft — (0 1px 3px, 0 4px 12px) for depth',
      'Transitions: 200-300ms ease-out for micro-interactions',
      'Focus states: 2px ring in Spire Green with 2px offset',
      'WCAG 2.1 AA compliance minimum for all text',
    ],
  },
  {
    id: 'ui-02',
    chapter: 'UI Design Principles',
    layout: 'text',
    kicker: 'UI Design Principles',
    title: 'Component Philosophy',
    body: 'Every component is designed to feel approachable and trustworthy. The interface should reduce cognitive load, not add to it.',
    bullets: [
      'Buttons: rounded (8px), clear hierarchy (primary / secondary / ghost)',
      'Cards: subtle border or shadow, generous internal padding (24px)',
      'Forms: large touch targets (44px min), clear labels, inline validation',
      'Data viz: brand colors only, clear legends, tooltips on hover',
      'Empty states: illustrations + clear next action',
      'Loading: skeleton screens, not spinners',
    ],
    callout: 'If a screen feels busy, remove elements until it feels calm. Then stop.',
  },

  /* ═══════════════════════════════════════
     19. BRAND VOICE
     ═══════════════════════════════════════ */
  {
    id: 'voice-chapter',
    chapter: 'Brand Voice',
    chapterNum: '18',
    layout: 'chapter',
    kicker: 'Brand Voice',
    title: 'Brand Voice',
    subtitle: 'How we speak — the verbal identity.',
  },
  {
    id: 'voice-01',
    chapter: 'Brand Voice',
    layout: 'symbol',
    kicker: 'Brand Voice',
    title: 'Voice Attributes',
    body: 'Our voice is the verbal expression of our brand values. It should feel like a conversation with a trusted advisor — knowledgeable but never condescending, warm but never vague.',
    meanings: [
      { label: 'Calm', desc: 'We speak with measured confidence. No urgency marketing, no fear tactics. We present facts and let them speak.', color: '#4baa83' },
      { label: 'Clear', desc: 'We simplify complexity without losing accuracy. Technical concepts are explained, never assumed. Jargon is translated.', color: '#7faedb' },
      { label: 'Human', desc: 'We remember that behind every metric is a person. Our language acknowledges emotions, struggles, and aspirations.', color: '#9a8bd6' },
      { label: 'Empowering', desc: 'We position our audience as capable decision-makers. We provide tools and insights — they drive the change.', color: '#1f2a2e' },
    ],
  },
  {
    id: 'voice-02',
    chapter: 'Brand Voice',
    layout: 'text',
    kicker: 'Brand Voice',
    title: 'Voice Do\'s and Don\'ts',
    body: 'Consistency in voice builds recognition and trust. Follow these guidelines across all written communications.',
    bullets: [
      'Do: "Your team\'s wellbeing score improved 12% this quarter."',
      'Don\'t: "AMAZING NEWS! Your wellbeing scores are THROUGH THE ROOF!"',
      'Do: "We measure psychosocial risk with validated clinical tools."',
      'Don\'t: "Our cutting-edge AI disrupts the wellness industry."',
      'Do: "Here\'s what the data suggests, and here are your options."',
      'Don\'t: "You MUST act now before burnout destroys your team."',
    ],
  },

  /* ═══════════════════════════════════════
     20. MESSAGING STYLE
     ═══════════════════════════════════════ */
  {
    id: 'messaging-chapter',
    chapter: 'Messaging Style',
    chapterNum: '19',
    layout: 'chapter',
    kicker: 'Messaging Style',
    title: 'Messaging Style',
    subtitle: 'Key messages and positioning statements.',
  },
  {
    id: 'messaging-01',
    chapter: 'Messaging Style',
    layout: 'text',
    kicker: 'Messaging Style',
    title: 'Brand Taglines',
    body: 'Our messaging hierarchy provides ready-to-use language for different contexts and audiences.',
    bullets: [
      'Primary: "Measure wellbeing. Empower decisions."',
      'Extended: "The first platform that turns psychosocial data into organizational intelligence."',
      'Employee-facing: "Your wellbeing matters. Your voice is heard. Your data is yours."',
      'HR-facing: "From emotional insight to strategic action — in real time."',
      'Executive-facing: "6:1 ROI. Reduce turnover 20%. 312K annual savings per 1,000 employees."',
    ],
    callout: '"Measure wellbeing. Empower decisions." — Our north star message.',
  },
  {
    id: 'messaging-02',
    chapter: 'Messaging Style',
    layout: 'text',
    kicker: 'Messaging Style',
    title: 'Elevator Pitch',
    body: 'Wejden Spire is the first B2B platform for continuous psychosocial risk measurement. We use clinically validated tools — PANAS for emotional affect and K6 for psychological distress — to give employees a private space for self-assessment, and HR leaders a real-time dashboard correlating wellbeing to business KPIs. The result: organizations that understand their people deeply and act on evidence, not intuition.',
    callout: 'Pilot program: free for 50-1000 employees. 4 steps. 8 weeks. Measurable results.',
  },

  /* ═══════════════════════════════════════
     21. APPLICATIONS
     ═══════════════════════════════════════ */
  {
    id: 'apps-chapter',
    chapter: 'Applications',
    chapterNum: '20',
    layout: 'chapter',
    kicker: 'Applications',
    title: 'Applications',
    subtitle: 'The brand in action across touchpoints.',
  },
  {
    id: 'apps-01',
    chapter: 'Applications',
    layout: 'gallery',
    kicker: 'Applications',
    title: 'Product Ecosystem',
    body: 'Wejden Spire operates through three interconnected platforms, each carrying the brand identity consistently while adapting to its audience.',
    images: [
      '/assets/wejden-spire-logo.svg',
      '/assets/alpro.svg',
      '/assets/heypro.svg',
      '/assets/savezone.svg',
    ],
    bullets: [
      'Wejden Spire — Core platform and parent brand',
      'Alpro — HR analytics and compliance dashboard',
      'HeyPro — Employee wellbeing and assessment space',
      'SaveZone — Anonymous support and community',
    ],
  },
  {
    id: 'apps-02',
    chapter: 'Applications',
    layout: 'gallery',
    kicker: 'Applications',
    title: 'Digital Touchpoints',
    body: 'From mobile screens to pitch decks, the brand maintains its visual consistency and emotional tone across every digital surface.',
    images: [
      '/assets/mockup-1.png',
      '/assets/mockup-2.png',
      '/assets/mockup-3.png',
      '/assets/mockup-4.png',
    ],
  },

  /* ═══════════════════════════════════════
     22. BRAND SUMMARY
     ═══════════════════════════════════════ */
  {
    id: 'summary-chapter',
    chapter: 'Brand Summary',
    chapterNum: '21',
    layout: 'chapter',
    kicker: 'Brand Summary',
    title: 'Brand Summary',
    subtitle: 'Everything Wejden Spire stands for, distilled.',
  },
  {
    id: 'summary-01',
    chapter: 'Brand Summary',
    layout: 'symbol',
    kicker: 'Brand Summary',
    title: 'Brand Essence',
    body: 'Wejden Spire exists at the intersection of psychology and technology. Every element of our brand — visual, verbal, and experiential — serves a single purpose: to make workplace wellbeing measurable, actionable, and human.',
    meanings: [
      { label: 'Trust', desc: 'Clinically validated tools, GDPR/HDS compliance, anonymous by design. We earn trust through rigor and transparency.', color: '#4baa83' },
      { label: 'Clarity', desc: 'Clean design, clear data, simple language. We eliminate noise so organizations can see what matters.', color: '#7faedb' },
      { label: 'Empathy', desc: 'Every feature, every pixel, every word acknowledges that behind the data are real people with real emotions.', color: '#9a8bd6' },
      { label: 'Impact', desc: '6:1 ROI. -20% turnover. -25% absenteeism. 312K annual savings. We don\'t just measure — we move the needle.', color: '#1f2a2e' },
    ],
  },
  {
    id: 'summary-closing',
    chapter: 'Brand Summary',
    layout: 'closing',
    kicker: 'Brand Summary',
    title: 'Measure Wellbeing.\nEmpower Decisions.',
    subtitle: 'wejdenspire.com',
    image: '/assets/wejden-spire-logo.svg',
  },
]
