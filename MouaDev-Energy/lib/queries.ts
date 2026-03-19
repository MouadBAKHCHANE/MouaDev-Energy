import { client } from './sanity'

// ── Site Settings ─────────────────────────────────────────────────────────────

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      siteName,
      siteDescription,
      typeformUrl,
      logoLight,
      logoDark,
      logoIcon,
      phone,
      email,
      address,
      googleMapUrl,
      socialLinks[]{ platform, url },
      footerAbout,
      footerNewsletter,
      copyright
    }`
  )
}

// ── Home Page ─────────────────────────────────────────────────────────────────

export async function getHomePage() {
  return client.fetch(
    `*[_type == "homePage"][0] {
      sectionOrder[]{ sectionId, enabled },
      seoTitle, seoDescription,
      heroBadge, heroTitle, heroAccentWord, heroSubtitle,
      heroBgImage, heroCta, heroCtaLink,
      heroReviewCount, heroRating, heroTickerText,

      ourServicesLabel, ourServicesTitle, ourServicesDesc, ourServicesCta, ourServicesCtaLink,
      ourServicesCards[]{ title, image, icon, link },

      slimeTitle, slimeAccent, slimeDesc, slimeCta, slimeCtaLink,
      slimeStats[]{ value, label },
      slimeCards[]{ title, desc, icon },

      aboutLabel, aboutTitle, aboutBody, aboutCta, aboutCtaLink, aboutImage,
      aboutFeatures[]{ title, desc },

      pricingLabel, pricingTitle, pricingDesc,
      pricingCards[]{ title, price, image, ctaText, ctaLink },

      processLabel, processTitle, processSubtitle, processDesc,
      processSteps[]{ title, desc, image, icon },

      marqueeLight, marqueeDark,

      newsLabel, newsTitle, newsCta, newsCtaLink,
      newsArticles[]{ title, image, author, readTime, link }
    }`
  )
}

// ── About Page ───────────────────────────────────────────────────────────────

export async function getAboutPage() {
  return client.fetch(
    `*[_type == "aboutPage"][0] {
      sectionOrder[]{ sectionId, enabled },
      seoTitle, seoDescription,
      heroTitle, heroBgImage,
      introLabel, introTitle, introParagraphs, introImage, introCta,
      whyLabel, whyTitle, whyBgImage,
      whyFeatures[]{ title, desc },
      whyTickerText
    }`
  )
}

// ── Contact Page ─────────────────────────────────────────────────────────────

export async function getContactPage() {
  return client.fetch(
    `*[_type == "contactPage"][0] {
      sectionOrder[]{ sectionId, enabled },
      seoTitle, seoDescription,
      heroTitle, heroBgImage,
      sectionLabel, sectionTitle,
      formTitle, submitText
    }`
  )
}

// ── Services Page ─────────────────────────────────────────────────────────────

export async function getServicesPage() {
  return client.fetch(
    `*[_type == "servicesPage"][0] {
      sectionOrder[]{ sectionId, enabled },
      seoTitle, seoDescription,
      heroTitle, heroBgImage,
      cardsLabel, cardsTitle, cardsDesc,
      serviceCards[]{ title, desc, img, icon, href },
      statsLabel, statsTitle, statsDesc,
      stats[]{ tag, prefix, num, suffix, desc },
      quoteTitle, quoteBody,
      expLabel, expTitle, expImage,
      expItems[]{ title, text, icon },
      serviceDetails[]{ label, title, desc, img, features, href, imgLeft },
      ctaTitle, ctaAccent, ctaButtonText, ctaButtonLink,
      ctaQuestionLabel, ctaQuestionDesc
    }`
  )
}

// ── Service Pages (singletons) ───────────────────────────────────────────────

const servicePageFields = `
  sectionOrder[]{ sectionId, enabled },
  seoTitle, seoDescription,
  heroTitle, heroBgImage, breadcrumbLabel,
  mainImage, overlayHeadline,
  contractsTitle,
  contractFeatures[]{ label, acces, equilibre, plus },
  discountHeadline, discountText, discountBadge, disclaimer,
  whyTitle, whyIntro, whyBullets, detailImages,
  faqTitle, faqs[]{ question, answer }
`

export async function getPanneauxSolairesPage() {
  return client.fetch(
    `*[_type == "panneauxSolairesPage"][0] {
      ${servicePageFields},
      pvCleanTitle, pvCleanIntro, pvCleanImage,
      pvCleanFeatures, pvCleanDisclaimer
    }`
  )
}

export async function getPompeChaleurPage() {
  return client.fetch(
    `*[_type == "pompeChaleurPage"][0] {
      ${servicePageFields},
      discountBoxes[]{ pct, desc, iconCount }
    }`
  )
}

export async function getBoilerPage() {
  return client.fetch(
    `*[_type == "boilerPage"][0] { ${servicePageFields} }`
  )
}

export async function getPvCleanPage() {
  return client.fetch(
    `*[_type == "pvCleanPage"][0] {
      sectionOrder[]{ sectionId, enabled },
      seoTitle, seoDescription,
      heroTitle, heroBgImage, breadcrumbLabel,
      mainImage, overlayHeadline,
      offerImage, offerTitle, offerSubtitle, offerLabel,
      offerFeatures, offerDisclaimer,
      whyTitle, whyIntro, whyBullets, detailImages,
      faqTitle, faqs[]{ question, answer }
    }`
  )
}

// ── Blogs ─────────────────────────────────────────────────────────────────────

const blogFields = `
  seoTitle, seoDescription,
  "slug": slug.current,
  title,
  excerpt,
  coverImage,
  coverImg,
  date,
  category,
  readTime,
  sections[]{ heading, body, list }
`

export async function getAllBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc) { ${blogFields} }`
  )
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] { ${blogFields} }`,
    { slug }
  )
}

export async function getAllBlogSlugs() {
  return client.fetch<string[]>(
    `*[_type == "blog"].slug.current`
  )
}

// ── Legal Pages ───────────────────────────────────────────────────────────────

export async function getLegalPage(pageId: string) {
  return client.fetch(
    `*[_type == "legalPage" && pageId == $pageId][0] {
      seoTitle, seoDescription,
      pageId, heroTitle, lastUpdated,
      companyInfoItems[]{ label, value },
      sections[]{ title, content }
    }`,
    { pageId }
  )
}

// ── Marketing & Analytics ─────────────────────────────────────────────────────

export async function getMarketingSettings() {
  return client.fetch(
    `*[_type == "marketingSettings"][0] {
      googleAnalyticsId,
      googleTagManagerId,
      googleSearchConsoleVerification,
      facebookPixelId,
      tiktokPixelId,
      linkedinPartnerId,
      googleAdsId,
      headScripts,
      bodyStartScripts,
      bodyEndScripts,
      cookieConsentEnabled,
      cookieConsentMessage,
      cookieConsentPrivacyLink
    }`
  )
}

// ── FAQs ──────────────────────────────────────────────────────────────────────

export async function getAllFAQs() {
  return client.fetch(
    `*[_type == "faq"] | order(order asc) {
      question,
      answerIntro,
      answerBullets[]{ bold, text },
      answerOutro,
      answerLink{ text, href },
      order
    }`
  )
}
