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
    chapter: 'Intro',
    layout: 'cover',
    kicker: 'Brand Identity Guidelines',
    title: 'Wejden Spire',
    subtitle: 'Where growth meets clarity.',
    body: '2026 — Brand Identity Book',
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Wejden Spire primary logo',
  },
  {
    id: 'contents',
    chapter: 'Intro',
    layout: 'toc',
    kicker: 'Guide Structure',
    title: 'Contents',
    body: 'A complete brand system for modern wellbeing technology.',
  },

  /* ═══════════════════════════════════════
     2. BRAND INTRODUCTION
     ═══════════════════════════════════════ */
  {
    id: 'ch-intro',
    chapter: 'Brand Story',
    chapterNum: '01',
    layout: 'chapter',
    kicker: 'Chapter One',
    title: 'Brand Introduction',
    subtitle: 'Who we are and why we exist.',
  },
  {
    id: 'who-we-are',
    chapter: 'Brand Story',
    layout: 'split',
    kicker: 'Brand Story',
    title: 'What Wejden Spire Stands For',
    body: 'Wejden Spire is a tech-psychology platform built for organizations that believe mental wellbeing drives real performance. We bridge the gap between emotional intelligence and operational clarity.',
    bullets: [
      'A platform where technology serves the human mind, not the other way around.',
      'Tools that make emotional intelligence measurable and actionable.',
      'Built for companies that invest in people before processes.',
    ],
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Calm professional environment',
  },
  {
    id: 'mission-vision',
    chapter: 'Brand Story',
    layout: 'text',
    kicker: 'Brand Story',
    title: 'Mission & Vision',
    body: 'Mission: Equip organizations with intelligent wellbeing systems that strengthen teams from the inside out. Vision: A world where mental clarity is the foundation of every business decision.',
    bullets: [
      'Make psychological safety a measurable business outcome.',
      'Turn emotional data into strategic advantage.',
      'Help leaders build cultures where people and performance grow together.',
    ],
    callout: 'Wellbeing is not a perk. It is infrastructure.',
  },
  {
    id: 'brand-values',
    chapter: 'Brand Story',
    layout: 'split',
    kicker: 'Brand Story',
    title: 'Core Values',
    body: 'Five principles guide every decision, product feature, and conversation.',
    bullets: [
      'Clarity: reduce noise, surface what matters.',
      'Empathy: design for real human experience.',
      'Growth: progress over perfection, always.',
      'Trust: earned through transparency and consistency.',
      'Innovation: technology that adapts to people.',
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Team collaboration',
  },
  {
    id: 'brand-positioning',
    chapter: 'Brand Story',
    layout: 'text',
    kicker: 'Brand Story',
    title: 'Brand Positioning',
    body: 'For companies and professionals invested in human potential, Wejden Spire is the platform that turns emotional intelligence into organizational strength.',
    bullets: [
      'Unlike traditional HR tools, we start with psychology, not paperwork.',
      'Unlike wellness apps, we are built for enterprise scale and accountability.',
      'Unlike coaching platforms, we deliver data-driven insight alongside human warmth.',
    ],
  },
  {
    id: 'target-audience',
    chapter: 'Brand Story',
    layout: 'split',
    kicker: 'Brand Story',
    title: 'Target Audience',
    body: 'Organizations and professionals who see mental wellbeing as a strategic investment, not an afterthought.',
    bullets: [
      'HR leaders and people operations teams seeking measurable wellbeing outcomes.',
      'Executive teams building resilient, high-performance cultures.',
      'Psychology professionals delivering scalable digital interventions.',
      'Forward-thinking companies in MENA and global markets.',
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Professionals in discussion',
  },

  /* ═══════════════════════════════════════
     3. BRAND CONCEPT
     ═══════════════════════════════════════ */
  {
    id: 'ch-concept',
    chapter: 'Concept',
    chapterNum: '02',
    layout: 'chapter',
    kicker: 'Chapter Two',
    title: 'Brand Concept',
    subtitle: 'The meaning behind the mark.',
  },
  {
    id: 'logo-meaning',
    chapter: 'Concept',
    layout: 'symbol',
    kicker: 'Brand Concept',
    title: 'Symbol Meaning',
    body: 'The Wejden Spire mark is a circular form containing a flowing "W" that also reads as the Arabic letter "و" (waw). The shape rises upward, forming a spire.',
    image: '/assets/wejden-spire-icon.svg',
    imageAlt: 'Wejden Spire icon',
    meanings: [
      { label: 'Growth', desc: 'The upward movement represents continuous personal and organizational development — always ascending.', color: '#4BAA83' },
      { label: 'Flow', desc: 'Organic curves convey emotional fluidity and adaptability — the natural rhythm of psychological wellbeing.', color: '#7FAEDB' },
      { label: 'The Spire', desc: 'The rising peak symbolizes aspiration and clarity — a beacon that guides teams toward higher awareness.', color: '#9A8BD6' },
    ],
  },
  {
    id: 'concept-growth',
    chapter: 'Concept',
    layout: 'split',
    kicker: 'Brand Concept',
    title: 'Growth & Elevation',
    body: 'The rising form is not decorative. It represents the core promise of the brand: that every interaction with Wejden Spire should leave the user elevated. Growth is gradual, measurable, and deeply personal.',
    bullets: [
      'Upward trajectory reflects progress in mental clarity and emotional strength.',
      'The spire shape communicates ambition without aggression.',
      'Growth is treated as infrastructure, not aspiration.',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Mountain peak at sunrise',
  },
  {
    id: 'concept-connection',
    chapter: 'Concept',
    layout: 'split',
    kicker: 'Brand Concept',
    title: 'Human Connection',
    body: 'The circular enclosure is not a boundary — it is an embrace. The "W" and "و" merge Latin and Arabic scripts into one gesture, reflecting the brand\'s bilingual identity and its commitment to cultural inclusivity.',
    bullets: [
      'The dual-script reading symbolizes connection across cultures and languages.',
      'Circular containment represents wholeness, safety, and psychological grounding.',
      'The organic letterform feels human — never mechanical or cold.',
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80',
    imageAlt: 'People connecting in warm light',
  },

  /* ═══════════════════════════════════════
     4. LOGO SYSTEM
     ═══════════════════════════════════════ */
  {
    id: 'ch-logo',
    chapter: 'Logo',
    chapterNum: '03',
    layout: 'chapter',
    kicker: 'Chapter Three',
    title: 'Logo System',
    subtitle: 'Architecture, lockups, and construction.',
  },
  {
    id: 'logo-overview',
    chapter: 'Logo',
    layout: 'split',
    kicker: 'Logo System',
    title: 'Logo Architecture',
    body: 'The system includes four core variants optimized for different contexts. The bilingual lockup is the default. Switch to simpler variants as canvas size or language context requires.',
    bullets: [
      'Primary bilingual lockup for master brand communication.',
      'English lockup for global-facing and Latin-only contexts.',
      'Vertical lockup for square and constrained placements.',
      'Icon mark for favicons, app icons, and compact spaces.',
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
    body: 'Default mark. Arabic and English scripts are balanced for visual harmony. Use on websites, presentations, and all bilingual collateral.',
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Primary bilingual logo',
  },
  {
    id: 'logo-english',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'English Lockup',
    body: 'For global audiences and English-only materials. Maintains identical proportions and spacing as the bilingual version.',
    image: '/assets/wejden-spire-logo-english.svg',
    imageAlt: 'English logo lockup',
  },
  {
    id: 'logo-vertical',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'Vertical Lockup',
    body: 'For square placements, social avatars, and vertical formats. Icon stacks above wordmark in a compact composition.',
    image: '/assets/wejden-spire-logo-vertical.svg',
    imageAlt: 'Vertical logo lockup',
  },
  {
    id: 'logo-icon',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'Icon Mark',
    body: 'Standalone symbol for smallest scales — favicons, app icons, watermarks. Carries the full weight of the brand at any size.',
    image: '/assets/wejden-spire-icon.svg',
    imageAlt: 'Wejden Spire icon mark',
  },
  {
    id: 'clear-space',
    chapter: 'Logo',
    layout: 'image',
    kicker: 'Logo System',
    title: 'Clear Space',
    body: 'Minimum exclusion zone equals the height of the icon (X) on all sides. Protects visual presence and ensures the mark breathes in any layout.',
    image: '/assets/savezone.svg',
    imageAlt: 'Logo safe zone diagram',
  },
  {
    id: 'minimum-size',
    chapter: 'Logo',
    layout: 'split',
    kicker: 'Logo System',
    title: 'Minimum Size',
    body: 'Below these thresholds the mark loses legibility. Always preview at target size before production.',
    bullets: [
      'Primary lockup: 220 px digital / 50 mm print.',
      'English lockup: 180 px digital / 40 mm print.',
      'Vertical lockup: 120 px digital / 28 mm print.',
      'Icon mark: 24 px digital / 8 mm print.',
    ],
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Logo size reference',
  },

  /* ═══════════════════════════════════════
     5. LOGO USAGE
     ═══════════════════════════════════════ */
  {
    id: 'ch-usage',
    chapter: 'Logo',
    chapterNum: '04',
    layout: 'chapter',
    kicker: 'Chapter Four',
    title: 'Logo Usage',
    subtitle: 'Correct use, misuse, and backgrounds.',
  },
  {
    id: 'logo-correct',
    chapter: 'Logo',
    layout: 'split',
    kicker: 'Logo Usage',
    title: 'Correct Usage',
    body: 'Always use original source files. Maintain clear space, correct color pairings, and approved lockup variants.',
    bullets: [
      'Full-color green on white or light neutral backgrounds.',
      'White reversed on dark or brand green backgrounds.',
      'Consistent proportions — never manually scale individual parts.',
      'Center-align or left-align — never right-align the logo.',
    ],
    image: '/assets/wejden-spire-icon.svg',
    imageAlt: 'Correct logo usage',
  },
  {
    id: 'logo-donts',
    chapter: 'Logo',
    layout: 'split',
    kicker: 'Logo Usage',
    title: 'Incorrect Usage',
    body: 'Protect the mark at all times. These rules prevent degradation and maintain consistency across every touchpoint.',
    bullets: [
      'Do not stretch, skew, rotate, or distort.',
      'Do not change colors outside the approved palette.',
      'Do not add shadows, glows, bevels, or outlines.',
      'Do not place on noisy or low-contrast backgrounds.',
      'Do not crop, mask, or partially obscure the mark.',
      'Do not recreate or redraw — always use source SVGs.',
    ],
    callout: 'When in doubt, revert to original SVG on white.',
    image: '/assets/wejden-spire-logo.svg',
    imageAlt: 'Logo misuse reference',
  },
  {
    id: 'logo-backgrounds',
    chapter: 'Logo',
    layout: 'text',
    kicker: 'Logo Usage',
    title: 'Background Variations',
    body: 'The logo must maintain contrast and legibility on every surface.',
    bullets: [
      'White / light: full-color green (#4BAA83) logo.',
      'Dark (#1F2A2E or darker): white reversed logo.',
      'Brand Green: white reversed logo exclusively.',
      'Photography: only on areas with sufficient contrast and minimal detail.',
      'Never place green logo on similarly saturated color fields.',
    ],
  },

  /* ═══════════════════════════════════════
     6. COLOR SYSTEM
     ═══════════════════════════════════════ */
  {
    id: 'ch-color',
    chapter: 'Color',
    chapterNum: '05',
    layout: 'chapter',
    kicker: 'Chapter Five',
    title: 'Color System',
    subtitle: 'Palette, ratios, and accessibility.',
  },
  {
    id: 'color-primary',
    chapter: 'Color',
    layout: 'palette',
    kicker: 'Color System',
    title: 'Primary Palette',
    body: 'Three core colors designed to feel soft, psychological, trustworthy, and modern. Each carries defined emotional weight and usage ratio.',
    swatches: [
      { label: 'Primary Green', hex: '#4BAA83', role: 'Trust, growth, primary CTAs — 25%' },
      { label: 'Soft Blue', hex: '#7FAEDB', role: 'Calm, intelligence, data layers — 15%' },
      { label: 'Soft Purple', hex: '#9A8BD6', role: 'Innovation, premium moments — 5%' },
    ],
  },
  {
    id: 'color-neutrals',
    chapter: 'Color',
    layout: 'palette',
    kicker: 'Color System',
    title: 'Neutral System',
    body: 'Neutrals occupy 55% of all surfaces. They form the quiet backbone that lets the brand palette speak clearly without visual fatigue.',
    swatches: [
      { label: 'Neutral Light', hex: '#F6F8F7', role: 'Page backgrounds, canvas' },
      { label: 'Border', hex: '#E2E6E4', role: 'Dividers, strokes, separators' },
      { label: 'Dark Text', hex: '#1F2A2E', role: 'Headlines, body copy' },
      { label: 'Muted Text', hex: '#6B7A7F', role: 'Labels, metadata, secondary text' },
    ],
  },
  {
    id: 'color-ratios',
    chapter: 'Color',
    layout: 'split',
    kicker: 'Color System',
    title: 'Color Ratios',
    body: 'The palette follows a strict ratio to maintain visual calm. Dominance of neutrals ensures the brand colors carry meaning when they appear.',
    bullets: [
      '55% Neutrals: backgrounds, text, borders — quiet and breathable.',
      '25% Primary Green: CTAs, active states, success, progress indicators.',
      '15% Soft Blue: data visualization, informational panels, secondary actions.',
      '5% Soft Purple: premium features, innovation cues, special moments.',
    ],
    callout: 'The palette should always feel calm. If a layout feels loud, reduce color density.',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Soft gradient palette',
  },
  {
    id: 'color-ui',
    chapter: 'Color',
    layout: 'text',
    kicker: 'Color System',
    title: 'UI Color Usage',
    body: 'Functional color mapping for digital product interfaces. Every color carries a semantic role beyond decoration.',
    bullets: [
      'Primary Green: buttons, links, active nav items, success states, progress bars.',
      'Soft Blue: informational alerts, data panels, chart accents, tooltips.',
      'Soft Purple: premium badges, AI features, onboarding highlights.',
      'Success: #4BAA83 (primary green) — confirmation, positive trends.',
      'Warning: #E8B44F — alerts that need attention without urgency.',
      'Error: #D96B6B — critical actions, validation failures, destructive states.',
    ],
  },
  {
    id: 'color-tints',
    chapter: 'Color',
    layout: 'palette',
    kicker: 'Color System',
    title: 'Tint System',
    body: 'Light tints provide supportive surfaces for cards, status indicators, and hover states without competing with primary color moments.',
    swatches: [
      { label: 'Green Tint', hex: '#E8F5EF', role: 'Success states, card highlights' },
      { label: 'Blue Tint', hex: '#EAF1F8', role: 'Info panels, quiet backgrounds' },
      { label: 'Purple Tint', hex: '#EFECF7', role: 'Tags, premium markers, badges' },
      { label: 'Warm Neutral', hex: '#F0EDEA', role: 'Soft separators, hover states' },
    ],
  },
  {
    id: 'color-accessibility',
    chapter: 'Color',
    layout: 'text',
    kicker: 'Color System',
    title: 'Accessibility',
    body: 'WCAG 2.1 AA is the minimum standard. Readability always wins over aesthetics.',
    bullets: [
      'Body text (16 px+): minimum 4.5:1 contrast ratio.',
      'Large headings (24 px+): minimum 3:1 contrast.',
      'Interactive elements: 3:1 contrast against adjacent colors.',
      'Never rely on color alone to communicate status — pair with icons or labels.',
      'Test with WebAIM or Stark before production.',
    ],
  },

  /* ═══════════════════════════════════════
     7. TYPOGRAPHY
     ═══════════════════════════════════════ */
  {
    id: 'ch-type',
    chapter: 'Typography',
    chapterNum: '06',
    layout: 'chapter',
    kicker: 'Chapter Six',
    title: 'Typography',
    subtitle: 'Typefaces, hierarchy, and rhythm.',
  },
  {
    id: 'type-philosophy',
    chapter: 'Typography',
    layout: 'split',
    kicker: 'Typography',
    title: 'Type Philosophy',
    body: 'Typography carries the brand voice visually. Two geometric sans-serifs — Manrope for Latin, Meral Sans for Arabic — create one cohesive system across languages and platforms.',
    bullets: [
      'Modern geometry signals technology and precision.',
      'High x-height ensures readability across sizes and contexts.',
      'Bilingual harmony — both faces share rhythm and proportion.',
      'Hierarchy through weight and size, not decoration.',
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Typography workspace',
  },
  {
    id: 'latin-family',
    chapter: 'Typography',
    layout: 'typography',
    kicker: 'Typography',
    title: 'Manrope',
    body: 'Primary Latin typeface. Modern geometric sans-serif with open apertures, ideal for digital interfaces and long-form content.',
    specimen: {
      family: 'Manrope',
      weights: ['400 Regular', '500 Medium', '600 SemiBold', '700 Bold', '800 ExtraBold'],
      sample: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ\nabcdefghijklmnopqrstuvwxyz\n0123456789 !@#$%&',
    },
  },
  {
    id: 'arabic-family',
    chapter: 'Typography',
    layout: 'typography',
    kicker: 'Typography',
    title: 'Meral Sans',
    body: 'Primary Arabic typeface. Custom geometric sans that mirrors Manrope\'s clarity. Preserves rhythm across headlines, paragraphs, and UI labels.',
    specimen: {
      family: 'Meral Sans',
      weights: ['300 Light', '400 Regular', '500 Medium', '600 SemiBold', '700 Bold'],
      sample: 'أبجد هوز حطي كلمن سعفص\nقرشت ثخذ ضظغ\n١٢٣٤٥٦٧٨٩٠',
    },
  },
  {
    id: 'type-hierarchy',
    chapter: 'Typography',
    layout: 'text',
    kicker: 'Typography',
    title: 'Type Hierarchy',
    body: 'A 1.25 ratio scale ensures visual consistency from caption to display sizes. Use weight to create emphasis, not color.',
    bullets: [
      'Display: 60–72 px / 800 ExtraBold — covers and chapter moments.',
      'H1: 48 px / 800 — primary headings.',
      'H2: 36 px / 700 Bold — section headings.',
      'H3: 24 px / 700 — sub-section headings.',
      'Body: 16–18 px / 400 Regular — paragraphs.',
      'Caption: 12–14 px / 500 Medium — labels and fine print.',
    ],
  },
  {
    id: 'type-rules',
    chapter: 'Typography',
    layout: 'text',
    kicker: 'Typography',
    title: 'Typography Rules',
    body: 'Consistent application builds recognition. These rules apply across all media.',
    bullets: [
      'Never more than 2 typefaces in a single composition.',
      'Body text: minimum 14 px on screens, 9 pt in print.',
      'All-caps only for kickers and short labels — never paragraphs.',
      'Line height: 1.5 for body, 1.1 for display headings.',
      'Letter spacing: -0.03em for headings, 0 for body, +0.15em for kickers.',
      'Always test Arabic and Latin together for visual balance.',
    ],
  },

  /* ═══════════════════════════════════════
     8. ICONOGRAPHY + 9. IMAGERY + 10. GRAPHIC ELEMENTS
     ═══════════════════════════════════════ */
  {
    id: 'ch-visual',
    chapter: 'Visual Language',
    chapterNum: '07',
    layout: 'chapter',
    kicker: 'Chapter Seven',
    title: 'Visual Language',
    subtitle: 'Icons, imagery, and graphic elements.',
  },
  {
    id: 'icon-system',
    chapter: 'Visual Language',
    layout: 'split',
    kicker: 'Iconography',
    title: 'Iconography Style',
    body: 'Icons follow a unified system: 24 px grid, 1.5 px stroke, rounded caps and joins. The style is minimal, soft, and human — never sharp or aggressive.',
    bullets: [
      'Rounded terminals and joins — warm, approachable feel.',
      'Simple metaphors — function over decoration.',
      'Recognizable at 16 px — passes the squint test.',
      'Primary icons in #4BAA83, secondary in #6B7A7F.',
      '2 px internal padding within the 24 px bounding box.',
    ],
    image: '/assets/wejden-spire-icon.svg',
    imageAlt: 'Icon style reference',
  },
  {
    id: 'icon-guidelines',
    chapter: 'Visual Language',
    layout: 'text',
    kicker: 'Iconography',
    title: 'Icon Guidelines',
    body: 'Icons serve as visual shorthand. They should clarify, never clutter.',
    bullets: [
      'Always pair icons with text labels in navigation and actions.',
      'Use standalone only when meaning is universally understood.',
      'Minimum 44 px touch target around interactive icons.',
      'Never recolor outside approved palette.',
      'Never add shadows, gradients, or 3D effects.',
      'Export at 1x, 2x, 3x for all digital platforms.',
    ],
  },
  {
    id: 'imagery-direction',
    chapter: 'Visual Language',
    layout: 'split',
    kicker: 'Imagery',
    title: 'Imagery Style',
    body: 'Photography should feel human-centered, calm, and professional but warm. Avoid anything clinical, cold, or overly corporate. The visual world of Wejden Spire is a balance between nature and technology.',
    bullets: [
      'Natural light with warm, balanced tones.',
      'Real people in calm, professional environments.',
      'Shallow depth-of-field for focus and hierarchy.',
      'Color harmony with the brand palette — greens, blues, warm neutrals.',
      'Moments of thought, connection, and quiet focus.',
    ],
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Calm professional workspace',
  },
  {
    id: 'imagery-moodboard',
    chapter: 'Visual Language',
    layout: 'gallery',
    kicker: 'Moodboard',
    title: 'Visual Moodboard',
    body: 'Nature, technology, human warmth, and psychological safety. These references anchor the brand aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=300&fit=crop&q=80',
    ],
  },
  {
    id: 'imagery-donts',
    chapter: 'Visual Language',
    layout: 'text',
    kicker: 'Imagery',
    title: "Imagery Don'ts",
    bullets: [
      'No staged stock photos with forced smiles.',
      'No cold clinical or sterile environments.',
      'No saturated color casts that fight the palette.',
      'No cluttered scenes with unclear focal point.',
      'No dark, moody, or anxiety-inducing imagery.',
    ],
  },
  {
    id: 'graphic-elements',
    chapter: 'Visual Language',
    layout: 'split',
    kicker: 'Graphic Elements',
    title: 'Curves & Flow',
    body: 'Organic shapes inspired by the logo appear as supporting graphic elements. Soft curves, flowing lines, and gentle gradients reinforce the brand feeling of growth and emotional fluidity.',
    bullets: [
      'Curved separators instead of hard lines.',
      'Flowing gradient washes as background accents.',
      'Organic blob shapes for decorative elements.',
      'Subtle radial gradients using brand tints.',
      'Always soft — never angular or sharp.',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Organic color flow',
  },

  /* ═══════════════════════════════════════
     11. UI / PRODUCT STYLE + 12. APPLICATIONS
     ═══════════════════════════════════════ */
  {
    id: 'ch-apps',
    chapter: 'Applications',
    chapterNum: '08',
    layout: 'chapter',
    kicker: 'Chapter Eight',
    title: 'Applications',
    subtitle: 'UI patterns and real-world usage.',
  },
  {
    id: 'ui-principles',
    chapter: 'Applications',
    layout: 'split',
    kicker: 'UI Style',
    title: 'Product Interface',
    body: 'The product interface should feel like a calm, intelligent workspace. Think Notion meets Headspace — structured enough for enterprise use, soft enough for daily psychological engagement.',
    bullets: [
      'Clean white canvas with generous whitespace.',
      'Cards with 12 px radius and subtle shadows.',
      'Green for primary actions, blue for data states, purple for premium features.',
      'Rounded inputs and buttons — never sharp rectangles.',
      'Motion: gentle, 250 ms ease-out transitions. Never jarring.',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Digital interface on laptop',
  },
  {
    id: 'ui-component-rules',
    chapter: 'Applications',
    layout: 'text',
    kicker: 'UI Style',
    title: 'Component Rules',
    body: 'Consistency across UI components builds trust and reduces cognitive load for users navigating sensitive wellbeing content.',
    bullets: [
      'Buttons: 44 px height, 12 px radius, 600 weight labels.',
      'Cards: 16 px padding, 1 px border #E2E6E4, 12 px radius.',
      'Inputs: 44 px height, 8 px radius, 1 px border, focus ring in primary green.',
      'Modals: centered, 480 px max width, subtle overlay at 40% opacity.',
      'Tables: alternating row tint, 14 px text, 48 px row height.',
      'Toast notifications: 320 px width, slide-in from top-right, auto-dismiss 4 s.',
    ],
  },
  {
    id: 'mockup-mobile',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Mobile App Icon',
    body: 'Icon mark optimized for mobile app grids. Tested across iOS and Android icon shapes with proper padding and visual weight.',
    image: '/assets/mockup-4.png',
    imageAlt: 'Mobile app icon mockup',
  },
  {
    id: 'mockup-corporate',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Corporate Identity',
    body: 'Business cards, letterheads, and corporate presentation templates maintaining consistent logo placement and color balance.',
    image: '/assets/mockup-2.png',
    imageAlt: 'Corporate identity mockup',
  },
  {
    id: 'mockup-signage',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Environmental Signage',
    body: 'Large-format brand presence in physical spaces — office signage, event backdrops, and trade show materials.',
    image: '/assets/mockup-1.png',
    imageAlt: 'Environmental signage mockup',
  },
  {
    id: 'mockup-stationery',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Stationery',
    body: 'Notebooks, folders, and packaging. Consistent green accent with generous white space across all collateral.',
    image: '/assets/mockup-3.png',
    imageAlt: 'Stationery mockup',
  },
  {
    id: 'mockup-pin',
    chapter: 'Applications',
    layout: 'image',
    kicker: 'Applications',
    title: 'Pin Badge',
    body: 'Promotional items at miniature scale. The icon mark maintains clarity and brand recognition at smallest sizes.',
    image: '/assets/mockup-5.png',
    imageAlt: 'Pin badge mockup',
  },
  {
    id: 'digital-applications',
    chapter: 'Applications',
    layout: 'split',
    kicker: 'Applications',
    title: 'Digital Touchpoints',
    body: 'The brand system extends across all digital channels with consistent visual treatment and interaction patterns.',
    bullets: [
      'Website: bilingual lockup in header, icon in favicon, green CTAs.',
      'Social media: vertical lockup as avatar, brand tints in templates.',
      'Email: horizontal lockup with brand typography in signature.',
      'Product: icon mark in nav, green for actions, blue for data.',
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Digital touchpoints meeting',
  },

  /* ═══════════════════════════════════════
     13. BRAND VOICE
     ═══════════════════════════════════════ */
  {
    id: 'ch-voice',
    chapter: 'Voice',
    chapterNum: '09',
    layout: 'chapter',
    kicker: 'Chapter Nine',
    title: 'Brand Voice',
    subtitle: 'How we speak. How we listen.',
  },
  {
    id: 'voice-personality',
    chapter: 'Voice',
    layout: 'split',
    kicker: 'Brand Voice',
    title: 'How We Communicate',
    body: 'The voice of Wejden Spire is a calm, knowledgeable guide — never a lecturer. It speaks with the quiet confidence of a therapist who also understands business. Warm but precise. Human but strategic.',
    bullets: [
      'Calm, not passive — we guide with gentle authority.',
      'Professional, not corporate — warm without being casual.',
      'Innovative, not jargon-heavy — clarity over buzzwords.',
      'Human, not sentimental — empathetic without condescension.',
    ],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop&q=80',
    imageAlt: 'Professional conversation',
  },
  {
    id: 'voice-tone',
    chapter: 'Voice',
    layout: 'text',
    kicker: 'Brand Voice',
    title: 'Tone Principles',
    body: 'Tone shifts with context, but the underlying character stays constant. Whether writing a landing page or an error message, the reader should feel held.',
    bullets: [
      'Marketing: aspirational, warm, forward-looking. Lead with outcomes.',
      'Product: clear, supportive, actionable. Remove friction, not humanity.',
      'Crisis: calm, transparent, solution-oriented. Acknowledge first, solve second.',
      'Internal: collaborative, honest, growth-minded. Model what we sell.',
    ],
    callout: 'Voice test: would this sentence feel right coming from a trusted mentor?',
  },
  {
    id: 'voice-donts',
    chapter: 'Voice',
    layout: 'text',
    kicker: 'Brand Voice',
    title: 'Voice Guidelines',
    bullets: [
      'Lead with outcome, then explain how we get there.',
      'Use concrete verbs — "build", "measure", "strengthen" — not abstract nouns.',
      'Write at a skim-friendly pace — short sentences, clear paragraphs.',
      'Avoid clinical jargon unless speaking to psychology professionals.',
      'Never use fear, urgency, or guilt as motivators.',
      'Always leave the reader with a next step or sense of direction.',
    ],
  },

  /* ═══════════════════════════════════════
     14. SUMMARY + CLOSE
     ═══════════════════════════════════════ */
  {
    id: 'ch-summary',
    chapter: 'Summary',
    chapterNum: '10',
    layout: 'chapter',
    kicker: 'Chapter Ten',
    title: 'Brand Essence',
    subtitle: 'Everything distilled.',
  },
  {
    id: 'brand-essence',
    chapter: 'Summary',
    layout: 'text',
    kicker: 'Brand Essence',
    title: 'Wejden Spire in One Page',
    body: 'A tech-psychology platform that helps organizations turn mental wellbeing into measurable strength. Calm, professional, modern, human, innovative.',
    bullets: [
      'Symbol: a rising spire of growth, flow, and human connection.',
      'Colors: green for trust, blue for calm, purple for innovation.',
      'Typography: Manrope + Meral Sans — modern, geometric, bilingual.',
      'Voice: a calm, knowledgeable guide. Warm but precise.',
      'Promise: where growth meets clarity.',
    ],
    callout: 'Every touchpoint should leave the person feeling calmer, clearer, and more capable.',
  },
  {
    id: 'symbol-alpro',
    chapter: 'Summary',
    layout: 'symbol',
    kicker: 'Additional Proposition 1',
    title: 'Proposition 1 — Alpro',
    body: 'The Alpro mark captures momentum, adaptability, and strategic elevation.',
    image: '/assets/alpro.svg',
    imageAlt: 'Alpro icon',
    meanings: [
      { label: 'The Ascent', desc: 'Rising form represents ambition and forward motion — climbing toward excellence.', color: '#4BAA83' },
      { label: 'The Flow', desc: 'Organic curves convey creativity and adaptability — fluid, tailored thinking.', color: '#7FAEDB' },
      { label: 'The Spire', desc: 'Upward peak symbolizes growth, elevation, and pursuit of higher impact.', color: '#9A8BD6' },
    ],
  },
  {
    id: 'symbol-heypro',
    chapter: 'Summary',
    layout: 'symbol',
    kicker: 'Additional Proposition 2',
    title: 'Proposition 2 — HeyPro',
    body: 'The HeyPro mark represents growth, wellbeing, and continuous progress.',
    image: '/assets/heypro.svg',
    imageAlt: 'HeyPro icon',
    meanings: [
      { label: 'Growth & Elevation', desc: 'The rising "W" line symbolizes progress — a continuous journey toward achievement.', color: '#4BAA83' },
      { label: 'The Spire', desc: 'Upward movement reaching higher levels of wellbeing and mental clarity.', color: '#7FAEDB' },
      { label: 'The Circle', desc: 'Continuous ring represents completeness — an ecosystem centered on the user.', color: '#9A8BD6' },
    ],
  },
  {
    id: 'closing',
    chapter: 'Summary',
    layout: 'closing',
    kicker: 'Thank You',
    title: 'Thank You',
    body: 'Where growth meets clarity.',
    image: '/assets/wejden-spire-icon.svg',
  },
]
