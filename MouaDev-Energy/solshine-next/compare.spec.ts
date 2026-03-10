import { test } from '@playwright/test'
import fs from 'fs'

const ORIGINAL = 'https://solshine.framer.website'
const NEXTJS = 'http://localhost:3002'
const OUT = 'C:/Users/EliteBook/Desktop/work/prof-of-concept/solshine/solshine-next/comparison-report'

// Sections to compare — CSS selectors that exist in both pages
const SECTIONS = [
  { name: 'hero', scrollTo: 0 },
  { name: 'clients', scrollTo: 800 },
  { name: 'services-lime', scrollTo: 1600 },
  { name: 'our-services-carousel', scrollTo: 2600 },
  { name: 'about', scrollTo: 4000 },
  { name: 'experience', scrollTo: 5200 },
  { name: 'team', scrollTo: 6200 },
  { name: 'pricing', scrollTo: 7000 },
  { name: 'marquee', scrollTo: 8200 },
  { name: 'funfact', scrollTo: 8600 },
  { name: 'faq', scrollTo: 9800 },
  { name: 'partners', scrollTo: 10600 },
  { name: 'news', scrollTo: 11600 },
  { name: 'footer', scrollTo: 12800 },
]

// CSS properties to audit on key elements
const CSS_CHECKS = [
  // Typography
  { selector: '.h1, .hero-h1, h1', props: ['font-size', 'font-weight', 'line-height', 'letter-spacing', 'color', 'font-family'] },
  { selector: '.h2, h2', props: ['font-size', 'font-weight', 'line-height', 'letter-spacing', 'color'] },
  { selector: '.h3, h3', props: ['font-size', 'font-weight', 'line-height', 'letter-spacing', 'color'] },
  // Buttons
  { selector: '.btn, a[style*="border-radius: 100px"], a[style*="borderRadius"]', props: ['font-size', 'font-weight', 'border-radius', 'background-color', 'color', 'padding'] },
  // Section label
  { selector: '.section-label, [style*="uppercase"]', props: ['font-size', 'font-weight', 'letter-spacing', 'text-transform'] },
  // Body text
  { selector: '.body-t, .hero-desc, p', props: ['font-size', 'line-height', 'color'] },
  // Cards
  { selector: '.exp-card, [style*="border: 1px solid"]', props: ['background-color', 'border-radius', 'padding', 'border'] },
  // Nav
  { selector: '.nav-link, .nav-links, .nav-links-pill', props: ['font-size', 'font-weight', 'background-color', 'border-radius', 'padding'] },
]

test('Compare original vs Next.js — full page screenshots', async ({ browser }) => {
  test.setTimeout(180000)
  fs.mkdirSync(OUT, { recursive: true })

  const differences: string[] = []

  // Launch both pages
  const ctxOrig = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const ctxNext = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const pageOrig = await ctxOrig.newPage()
  const pageNext = await ctxNext.newPage()

  await pageOrig.goto(ORIGINAL, { waitUntil: 'networkidle' })
  await pageNext.goto(NEXTJS, { waitUntil: 'networkidle' })

  // Wait for content to load
  await pageOrig.waitForTimeout(3000)
  await pageNext.waitForTimeout(3000)

  // Trigger scroll reveals on original by scrolling through
  await pageOrig.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 500) {
      window.scrollTo(0, i)
      await new Promise(r => setTimeout(r, 100))
    }
    window.scrollTo(0, 0)
    await new Promise(r => setTimeout(r, 500))
  })

  // Same for next.js
  await pageNext.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 500) {
      window.scrollTo(0, i)
      await new Promise(r => setTimeout(r, 100))
    }
    window.scrollTo(0, 0)
    await new Promise(r => setTimeout(r, 500))
  })

  // Full page screenshots
  await pageOrig.screenshot({ path: `${OUT}/original-full.png`, fullPage: true })
  await pageNext.screenshot({ path: `${OUT}/nextjs-full.png`, fullPage: true })
  differences.push('📸 Full page screenshots saved: original-full.png, nextjs-full.png')

  // Section-by-section screenshots
  for (const section of SECTIONS) {
    await pageOrig.evaluate((y) => window.scrollTo(0, y), section.scrollTo)
    await pageNext.evaluate((y) => window.scrollTo(0, y), section.scrollTo)
    await pageOrig.waitForTimeout(300)
    await pageNext.waitForTimeout(300)

    await pageOrig.screenshot({ path: `${OUT}/orig-${section.name}.png` })
    await pageNext.screenshot({ path: `${OUT}/next-${section.name}.png` })
  }
  differences.push(`📸 ${SECTIONS.length} section screenshot pairs saved`)

  // ============================================================
  // CSS VALUE COMPARISON
  // ============================================================
  differences.push('')
  differences.push('='.repeat(80))
  differences.push('CSS VALUE COMPARISON')
  differences.push('='.repeat(80))

  // Get computed styles from original
  const origStyles = await pageOrig.evaluate((checks) => {
    const results: Record<string, Record<string, string>> = {}
    for (const check of checks) {
      const els = document.querySelectorAll(check.selector)
      if (els.length === 0) continue
      const el = els[0] as HTMLElement
      const computed = window.getComputedStyle(el)
      const key = `${check.selector} (first match: <${el.tagName.toLowerCase()} class="${el.className}">)`
      results[key] = {}
      for (const prop of check.props) {
        results[key][prop] = computed.getPropertyValue(prop)
      }
    }
    return results
  }, CSS_CHECKS)

  // Get computed styles from Next.js
  const nextStyles = await pageNext.evaluate((checks) => {
    const results: Record<string, Record<string, string>> = {}
    for (const check of checks) {
      const els = document.querySelectorAll(check.selector)
      if (els.length === 0) continue
      const el = els[0] as HTMLElement
      const computed = window.getComputedStyle(el)
      const key = `${check.selector} (first match: <${el.tagName.toLowerCase()} class="${el.className}">)`
      results[key] = {}
      for (const prop of check.props) {
        results[key][prop] = computed.getPropertyValue(prop)
      }
    }
    return results
  }, CSS_CHECKS)

  // Compare
  const origKeys = Object.keys(origStyles)
  const nextKeys = Object.keys(nextStyles)

  // Note selectors that only exist in one
  for (const k of origKeys) {
    if (!nextKeys.some(nk => nk.split(' (first')[0] === k.split(' (first')[0])) {
      differences.push(`⚠️  Selector found only in ORIGINAL: ${k}`)
    }
  }
  for (const k of nextKeys) {
    if (!origKeys.some(ok => ok.split(' (first')[0] === k.split(' (first')[0])) {
      differences.push(`⚠️  Selector found only in NEXT.JS: ${k}`)
    }
  }

  // ============================================================
  // DEEP ELEMENT-BY-ELEMENT COMPARISON
  // ============================================================
  differences.push('')
  differences.push('='.repeat(80))
  differences.push('ELEMENT-BY-ELEMENT DEEP COMPARISON')
  differences.push('='.repeat(80))

  // Specific elements to compare precisely
  const PRECISE_CHECKS = [
    // Hero
    { name: 'Hero H1', origSel: '.h1', nextSel: '.hero-h1', props: ['font-size', 'font-weight', 'line-height', 'letter-spacing', 'color'] },
    { name: 'Hero desc', origSel: '.hero-desc', nextSel: '.hero-bottom p', props: ['font-size', 'line-height', 'color', 'max-width'] },
    { name: 'Hero section', origSel: '.hero', nextSel: '.hero-section', props: ['height', 'min-height', 'padding-bottom'] },
    // Header
    { name: 'Header', origSel: '.header', nextSel: 'header', props: ['position', 'z-index', 'padding'] },
    { name: 'Nav logo', origSel: '.nav-logo img', nextSel: 'nav a img', props: ['height'] },
    { name: 'Nav links pill', origSel: '.nav-links', nextSel: '.nav-links-pill', props: ['background-color', 'border-radius', 'padding', 'backdrop-filter'] },
    // Clients
    { name: 'Clients section', origSel: '.clients', nextSel: 'section[style*="background: rgb(248, 248, 248)"]', props: ['padding'] },
    { name: 'Clients label', origSel: '.clients-label', nextSel: '.clients-inner h4', props: ['font-size', 'font-weight', 'line-height', 'color'] },
    { name: 'Client logo', origSel: '.clients-logos img', nextSel: '.clients-inner div img', props: ['height', 'opacity', 'filter'] },
    // Services Lime
    { name: 'Services Lime bg', origSel: '.services-lime', nextSel: '.services-lime-section', props: ['padding', 'background-color'] },
    { name: 'Svc item h3', origSel: '.svc-item h3', nextSel: '.services-lime-right div h3', props: ['font-size', 'font-weight', 'line-height', 'color', 'margin-bottom'] },
    { name: 'Svc item p', origSel: '.svc-item p', nextSel: '.services-lime-right div p', props: ['font-size', 'line-height', 'color', 'opacity'] },
    { name: 'Svc icon', origSel: '.svc-item .icon', nextSel: '.services-lime-right div div:first-child', props: ['width', 'height'] },
    // Carousel
    { name: 'Carousel slide', origSel: '.slide', nextSel: '.slide-item', props: ['flex', 'border-radius', 'overflow'] },
    { name: 'Slide image', origSel: '.slide-img', nextSel: '.slide-item img:first-child', props: ['aspect-ratio', 'object-fit'] },
    { name: 'Slide name', origSel: '.slide-name', nextSel: '.slide-item .slide-name, .slide-item div div', props: ['font-size', 'font-weight', 'color'] },
    { name: 'Carousel arrow', origSel: '.c-arrow', nextSel: 'button[style*="border-radius: 50%"][style*="background"]', props: ['width', 'height', 'border-radius', 'background-color'] },
    // About
    { name: 'About section', origSel: '.about', nextSel: '.about-section', props: ['padding', 'background-color'] },
    { name: 'About stat', origSel: '.about-stat', nextSel: '.about-stat', props: ['font-size', 'font-weight', 'line-height', 'letter-spacing', 'color'] },
    { name: 'About image', origSel: '.about-col-2 img', nextSel: '.about-col-2 img', props: ['border-radius', 'aspect-ratio', 'object-fit'] },
    { name: 'About circle', origSel: '.about-circle', nextSel: '.about-col-2 div', props: ['width', 'height', 'border-radius', 'background-color', 'bottom', 'left'] },
    { name: 'Check icon', origSel: '.check-icon', nextSel: '.about-col-3 span[style*="border-radius: 50%"]', props: ['width', 'height', 'background-color', 'border-radius'] },
    // Experience
    { name: 'Exp grid', origSel: '.exp-grid', nextSel: '.exp-grid', props: ['display', 'grid-template-columns', 'gap'] },
    { name: 'Exp card', origSel: '.exp-card', nextSel: '.exp-grid > div', props: ['background-color', 'border-radius', 'padding', 'border'] },
    { name: 'Exp card icon', origSel: '.exp-card .card-icon', nextSel: '.exp-grid > div div:first-child', props: ['width', 'height', 'margin-bottom'] },
    { name: 'Exp card h3', origSel: '.exp-card h3', nextSel: '.exp-grid > div h3', props: ['font-size', 'font-weight', 'line-height', 'color', 'margin-bottom'] },
    { name: 'Card arrow circle', origSel: '.card-arr', nextSel: '.card-arr-el', props: ['width', 'height', 'border-radius', 'border'] },
    // Team
    { name: 'Team grid', origSel: '.team-grid', nextSel: '.team-grid', props: ['display', 'gap', 'align-items'] },
    { name: 'Team intro', origSel: '.team-intro', nextSel: '.team-intro', props: ['flex', 'background-color', 'border-radius', 'padding', 'color'] },
    { name: 'Team member', origSel: '.team-member', nextSel: '.team-member', props: ['flex', 'border-radius', 'overflow'] },
    { name: 'Team member img', origSel: '.team-member img', nextSel: '.team-member img', props: ['aspect-ratio', 'object-fit'] },
    // Pricing
    { name: 'Pricing inner', origSel: '.pricing-inner', nextSel: '.pricing-inner', props: ['display', 'gap'] },
    { name: 'Price card light', origSel: '.price-card.light', nextSel: '.price-card:first-child, .pricing-right > div:first-child', props: ['background-color', 'border-radius', 'padding', 'border'] },
    { name: 'Price value', origSel: '.price-val', nextSel: '.price-val', props: ['font-size', 'font-weight', 'line-height', 'letter-spacing'] },
    { name: 'Price button', origSel: '.price-btn', nextSel: 'a[style*="text-align: center"][style*="border-radius"]', props: ['padding', 'border-radius', 'font-size', 'font-weight'] },
    { name: 'PF yes icon', origSel: '.pf-yes', nextSel: 'span[style*="background: rgb(202, 243, 29)"][style*="width: 22px"]', props: ['width', 'height', 'border-radius', 'background-color', 'font-size'] },
    // Marquee
    { name: 'Marquee light row', origSel: '.marquee-row.light', nextSel: 'section[style*="overflow: hidden"] > div:first-child', props: ['padding', 'background-color', 'border-top', 'border-bottom'] },
    { name: 'Marquee text', origSel: '.marquee-track span', nextSel: 'section[style*="overflow: hidden"] span', props: ['font-size', 'font-weight', 'letter-spacing'] },
    // Fun Fact
    { name: 'FF grid', origSel: '.ff-grid', nextSel: '.ff-grid', props: ['display', 'grid-template-columns', 'grid-template-rows', 'gap'] },
    { name: 'FF card', origSel: '.ff-card', nextSel: '.ff-grid > div:not(.ff-img)', props: ['background-color', 'border-radius', 'padding'] },
    // FAQ
    { name: 'FAQ inner', origSel: '.faq-inner', nextSel: '.faq-inner', props: ['display', 'gap'] },
    { name: 'FAQ question', origSel: '.faq-q', nextSel: '.faq-inner > div:last-child > div > div:first-child', props: ['font-size', 'font-weight', 'color', 'cursor'] },
    { name: 'FAQ toggle', origSel: '.faq-tog', nextSel: '.faq-inner span[style*="border-radius: 50%"]', props: ['width', 'height', 'border-radius', 'font-size'] },
    // Partners
    { name: 'Partners grid', origSel: '.partners-grid', nextSel: '.partners-grid', props: ['display', 'grid-template-columns', 'gap'] },
    { name: 'Partner logo card', origSel: '.p-logo', nextSel: '.partners-grid > div', props: ['background-color', 'border-radius', 'padding', 'aspect-ratio'] },
    // News
    { name: 'News grid', origSel: '.news-grid', nextSel: '.news-grid', props: ['display', 'grid-template-columns', 'gap'] },
    { name: 'News card meta', origSel: '.news-card .meta', nextSel: '.news-grid > div div[style*="linear-gradient"]', props: ['padding', 'font-size', 'color', 'border-radius'] },
    { name: 'News card h3', origSel: '.news-card .card-body h3', nextSel: '.news-grid > div h3', props: ['font-size', 'font-weight', 'line-height', 'color', 'margin-bottom'] },
    // Footer
    { name: 'Footer', origSel: '.footer', nextSel: 'footer', props: ['background-color', 'color', 'padding'] },
    { name: 'Footer top', origSel: '.footer-top', nextSel: '.footer-top', props: ['display', 'justify-content', 'gap', 'padding-bottom', 'border-bottom'] },
    { name: 'Footer brand', origSel: '.footer-brand', nextSel: '.footer-brand', props: ['flex'] },
    { name: 'Footer cols', origSel: '.footer-cols', nextSel: '.footer-cols', props: ['display', 'gap'] },
    { name: 'Footer col h4', origSel: '.footer-col h4', nextSel: '.footer-cols div h4', props: ['font-size', 'font-weight', 'margin-bottom'] },
    { name: 'Footer col link', origSel: '.footer-col a', nextSel: '.footer-cols a', props: ['font-size', 'color'] },
    { name: 'Footer copyright', origSel: '.footer-copy', nextSel: 'footer p[style*="rgba(255"]', props: ['font-size', 'color'] },
    { name: 'Footer social icon', origSel: '.footer-social a', nextSel: 'footer div[style*="gap: 12px"] a', props: ['width', 'height', 'border-radius', 'border'] },
    // Scroll top
    { name: 'Scroll top btn', origSel: '.scroll-top', nextSel: 'button[style*="position: fixed"][style*="bottom"]', props: ['width', 'height', 'border-radius', 'background-color', 'z-index'] },
    // Section label
    { name: 'Section label', origSel: '.section-label', nextSel: 'div[style*="uppercase"]', props: ['font-size', 'font-weight', 'letter-spacing', 'text-transform'] },
    // Button dark
    { name: 'Button dark', origSel: '.btn.btn-dark', nextSel: 'a[style*="background: rgb(2, 2, 2)"][style*="border-radius"]', props: ['background-color', 'color', 'border-radius', 'font-size', 'font-weight'] },
    // Button lime
    { name: 'Button lime', origSel: '.btn.btn-lime', nextSel: 'a[style*="background: rgb(202, 243, 29)"][style*="border-radius"]', props: ['background-color', 'color', 'border-radius', 'font-size', 'font-weight'] },
  ]

  for (const check of PRECISE_CHECKS) {
    const origVal = await pageOrig.evaluate(({ sel, props }) => {
      const el = document.querySelector(sel)
      if (!el) return null
      const cs = window.getComputedStyle(el)
      const result: Record<string, string> = {}
      for (const p of props) result[p] = cs.getPropertyValue(p)
      return result
    }, { sel: check.origSel, props: check.props })

    const nextVal = await pageNext.evaluate(({ sel, props }) => {
      const el = document.querySelector(sel)
      if (!el) return null
      const cs = window.getComputedStyle(el)
      const result: Record<string, string> = {}
      for (const p of props) result[p] = cs.getPropertyValue(p)
      return result
    }, { sel: check.nextSel, props: check.props })

    if (!origVal && !nextVal) {
      differences.push(`⏭️  [${check.name}] — selector not found in either page`)
      continue
    }
    if (!origVal) {
      differences.push(`❌ [${check.name}] — NOT FOUND in original (sel: ${check.origSel})`)
      continue
    }
    if (!nextVal) {
      differences.push(`❌ [${check.name}] — NOT FOUND in Next.js (sel: ${check.nextSel})`)
      continue
    }

    let hasDiff = false
    for (const prop of check.props) {
      const o = origVal[prop] || ''
      const n = nextVal[prop] || ''
      if (o !== n) {
        if (!hasDiff) {
          differences.push(`\n🔍 [${check.name}]`)
          hasDiff = true
        }
        differences.push(`   ❌ ${prop}: ORIGINAL="${o}" vs NEXT="${n}"`)
      }
    }
    if (!hasDiff) {
      differences.push(`   ✅ [${check.name}] — all ${check.props.length} properties match`)
    }
  }

  // ============================================================
  // CONTENT TEXT COMPARISON
  // ============================================================
  differences.push('')
  differences.push('='.repeat(80))
  differences.push('TEXT CONTENT COMPARISON')
  differences.push('='.repeat(80))

  const textChecks = [
    { name: 'Hero title', origSel: '.h1', nextSel: '.hero-h1' },
    { name: 'Hero desc', origSel: '.hero-desc', nextSel: '.hero-bottom p' },
    { name: 'Clients label', origSel: '.clients-label', nextSel: '.clients-inner h4' },
    { name: 'Services H2', origSel: '.services-lime-left .h2', nextSel: '.svc-h2' },
    { name: 'Our Services H2', origSel: '.our-svc-inner .h2', nextSel: '.our-svc-h2' },
    { name: 'About H2', origSel: '.about-header .h2', nextSel: '.about-h2' },
    { name: 'Experience H2', origSel: '.exp-inner .h2', nextSel: '.exp-h2' },
    { name: 'Pricing H2', origSel: '.pricing-left .h2', nextSel: '.pricing-h2' },
    { name: 'Fun Fact H2', origSel: '.funfact-inner .h2', nextSel: '.ff-h2' },
    { name: 'FAQ H2', origSel: '.faq-left .h2', nextSel: '.faq-h2' },
    { name: 'Partners H2', origSel: '.partners-head .h2', nextSel: '.partners-h2' },
    { name: 'News H2', origSel: '.news-inner .h2', nextSel: '.news-h2' },
    { name: 'FAQ Q1', origSel: '.faq-item:nth-child(1) .faq-q', nextSel: '.faq-inner > div:last-child > div:nth-child(1) > div:first-child' },
    { name: 'FAQ A1', origSel: '.faq-item:nth-child(1) .faq-a p', nextSel: '.faq-inner > div:last-child > div:nth-child(1) > div:last-child p' },
    { name: 'Price card 1 name', origSel: '.price-card:nth-child(1) .price-name', nextSel: '.pricing-right > div:first-child div[style*="font-size: 22px"]' },
    { name: 'Price card 1 value', origSel: '.price-card:nth-child(1) .price-val', nextSel: '.pricing-right > div:first-child .price-val' },
    { name: 'Footer copyright', origSel: '.footer-copy', nextSel: 'footer p' },
  ]

  for (const check of textChecks) {
    const origText = await pageOrig.evaluate((sel) => {
      const el = document.querySelector(sel)
      return el ? el.textContent?.trim().replace(/\s+/g, ' ') : null
    }, check.origSel)

    const nextText = await pageNext.evaluate((sel) => {
      const el = document.querySelector(sel)
      return el ? el.textContent?.trim().replace(/\s+/g, ' ') : null
    }, check.nextSel)

    if (origText === null && nextText === null) {
      differences.push(`⏭️  [${check.name}] — not found in either`)
    } else if (origText === null) {
      differences.push(`❌ [${check.name}] — not found in original`)
    } else if (nextText === null) {
      differences.push(`❌ [${check.name}] — not found in Next.js`)
    } else if (origText !== nextText) {
      differences.push(`❌ [${check.name}] text differs:`)
      differences.push(`   ORIGINAL: "${origText.substring(0, 120)}"`)
      differences.push(`   NEXT.JS:  "${nextText.substring(0, 120)}"`)
    } else {
      differences.push(`✅ [${check.name}] — text matches`)
    }
  }

  // ============================================================
  // STRUCTURAL CHECKS (element counts)
  // ============================================================
  differences.push('')
  differences.push('='.repeat(80))
  differences.push('STRUCTURAL CHECKS (element counts)')
  differences.push('='.repeat(80))

  const countChecks = [
    { name: 'Nav links', origSel: '.nav-link', nextSel: '.nav-links-pill a' },
    { name: 'Client logos', origSel: '.clients-logos img', nextSel: '.clients-inner div img' },
    { name: 'Service items', origSel: '.svc-item', nextSel: '.services-lime-right > div' },
    { name: 'Carousel slides', origSel: '.slide', nextSel: '.slide-item' },
    { name: 'Exp cards', origSel: '.exp-card', nextSel: '.exp-grid > div' },
    { name: 'Team members', origSel: '.team-member', nextSel: '.team-member' },
    { name: 'Price cards', origSel: '.price-card', nextSel: '.price-card' },
    { name: 'FAQ items', origSel: '.faq-item', nextSel: '.faq-inner > div:last-child > div' },
    { name: 'Partner logos', origSel: '.p-logo', nextSel: '.partners-grid > div' },
    { name: 'News cards', origSel: '.news-card', nextSel: '.news-grid > div' },
    { name: 'Footer columns', origSel: '.footer-col', nextSel: '.footer-cols > div' },
    { name: 'Footer social icons', origSel: '.footer-social a', nextSel: 'footer div[style*="gap: 12px"] a' },
    { name: 'Hero avatars', origSel: '.hero-reviews .avatars img', nextSel: '.hero-bottom div[style*="backdrop-filter"] img' },
    { name: 'Checklist items', origSel: '.check-row', nextSel: '.about-col-3 div[style*="flex-direction: column"] > div' },
    { name: 'Marquee light spans', origSel: '.marquee-row.light .marquee-track span', nextSel: 'section[style*="overflow: hidden"] > div:first-child span' },
    { name: 'Ticker spans', origSel: '.hero-ticker-track span', nextSel: '.hero-section div[style*="animation: ticker"] span, .hero-section div[style*="animation:ticker"] span' },
  ]

  for (const check of countChecks) {
    const origCount = await pageOrig.evaluate((sel) => document.querySelectorAll(sel).length, check.origSel)
    const nextCount = await pageNext.evaluate((sel) => document.querySelectorAll(sel).length, check.nextSel)

    if (origCount !== nextCount) {
      differences.push(`❌ [${check.name}] count: ORIGINAL=${origCount} vs NEXT=${nextCount}`)
    } else {
      differences.push(`✅ [${check.name}] count: ${origCount}`)
    }
  }

  // ============================================================
  // IMAGE SRC COMPARISON
  // ============================================================
  differences.push('')
  differences.push('='.repeat(80))
  differences.push('IMAGE URL COMPARISON')
  differences.push('='.repeat(80))

  const origImages = await pageOrig.evaluate(() => {
    return Array.from(document.querySelectorAll('img[src*="framerusercontent"]')).map(img => (img as HTMLImageElement).src).sort()
  })
  const nextImages = await pageNext.evaluate(() => {
    return Array.from(document.querySelectorAll('img[src*="framerusercontent"]')).map(img => (img as HTMLImageElement).src).sort()
  })

  const origSet = new Set(origImages)
  const nextSet = new Set(nextImages)

  for (const url of origSet) {
    if (!nextSet.has(url)) {
      differences.push(`❌ Image in ORIGINAL but missing in NEXT: ${url.split('/').pop()}`)
    }
  }
  for (const url of nextSet) {
    if (!origSet.has(url)) {
      differences.push(`❌ Image in NEXT but missing in ORIGINAL: ${url.split('/').pop()}`)
    }
  }
  differences.push(`📊 Original: ${origImages.length} images, Next.js: ${nextImages.length} images`)

  // ============================================================
  // RESPONSIVE CHECK at 768px
  // ============================================================
  differences.push('')
  differences.push('='.repeat(80))
  differences.push('RESPONSIVE CHECK (768px viewport)')
  differences.push('='.repeat(80))

  await ctxOrig.close()
  await ctxNext.close()

  const ctxOrigMobile = await browser.newContext({ viewport: { width: 768, height: 1024 } })
  const ctxNextMobile = await browser.newContext({ viewport: { width: 768, height: 1024 } })
  const pageOrigM = await ctxOrigMobile.newPage()
  const pageNextM = await ctxNextMobile.newPage()

  await pageOrigM.goto(ORIGINAL, { waitUntil: 'networkidle' })
  await pageNextM.goto(NEXTJS, { waitUntil: 'networkidle' })
  await pageOrigM.waitForTimeout(2000)
  await pageNextM.waitForTimeout(2000)

  // Trigger scroll reveals
  await pageOrigM.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 500) { window.scrollTo(0, i); await new Promise(r => setTimeout(r, 80)) }
    window.scrollTo(0, 0)
  })
  await pageNextM.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 500) { window.scrollTo(0, i); await new Promise(r => setTimeout(r, 80)) }
    window.scrollTo(0, 0)
  })
  await pageOrigM.waitForTimeout(500)
  await pageNextM.waitForTimeout(500)

  await pageOrigM.screenshot({ path: `${OUT}/orig-768.png`, fullPage: true })
  await pageNextM.screenshot({ path: `${OUT}/next-768.png`, fullPage: true })

  // Check key responsive properties
  const responsiveChecks = [
    { name: 'H1 at 768px', origSel: '.h1', nextSel: '.hero-h1', props: ['font-size', 'line-height', 'letter-spacing'] },
    { name: 'H2 at 768px', origSel: '.services-lime-left .h2', nextSel: '.svc-h2', props: ['font-size', 'line-height'] },
    { name: 'Nav links hidden at 768px', origSel: '.nav-links', nextSel: '.nav-links-pill', props: ['display'] },
    { name: 'Exp grid at 768px', origSel: '.exp-grid', nextSel: '.exp-grid', props: ['grid-template-columns'] },
    { name: 'News grid at 768px', origSel: '.news-grid', nextSel: '.news-grid', props: ['grid-template-columns'] },
    { name: 'Partners grid at 768px', origSel: '.partners-grid', nextSel: '.partners-grid', props: ['grid-template-columns'] },
    { name: 'FF grid at 768px', origSel: '.ff-grid', nextSel: '.ff-grid', props: ['grid-template-columns'] },
    { name: 'Footer cols at 768px', origSel: '.footer-cols', nextSel: '.footer-cols', props: ['flex-direction', 'gap'] },
    { name: 'Clients inner at 768px', origSel: '.clients-inner', nextSel: '.clients-inner', props: ['flex-direction', 'gap'] },
  ]

  for (const check of responsiveChecks) {
    const origVal = await pageOrigM.evaluate(({ sel, props }) => {
      const el = document.querySelector(sel)
      if (!el) return null
      const cs = window.getComputedStyle(el)
      const r: Record<string, string> = {}
      for (const p of props) r[p] = cs.getPropertyValue(p)
      return r
    }, { sel: check.origSel, props: check.props })

    const nextVal = await pageNextM.evaluate(({ sel, props }) => {
      const el = document.querySelector(sel)
      if (!el) return null
      const cs = window.getComputedStyle(el)
      const r: Record<string, string> = {}
      for (const p of props) r[p] = cs.getPropertyValue(p)
      return r
    }, { sel: check.nextSel, props: check.props })

    if (!origVal) { differences.push(`⏭️  [${check.name}] — not found in original`); continue }
    if (!nextVal) { differences.push(`❌ [${check.name}] — not found in Next.js`); continue }

    let match = true
    for (const prop of check.props) {
      if (origVal[prop] !== nextVal[prop]) {
        differences.push(`❌ [${check.name}] ${prop}: ORIG="${origVal[prop]}" vs NEXT="${nextVal[prop]}"`)
        match = false
      }
    }
    if (match) differences.push(`✅ [${check.name}] — matches`)
  }

  await ctxOrigMobile.close()
  await ctxNextMobile.close()

  // Write report
  const report = differences.join('\n')
  fs.writeFileSync(`${OUT}/DIFFERENCES.md`, report)
  console.log('\n' + report)
  console.log(`\n\n📁 Full report saved to: ${OUT}/DIFFERENCES.md`)
  console.log(`📸 Screenshots saved to: ${OUT}/`)
})
