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
      heroBadge, heroTitle, heroTitleStyle, heroAccentWord, heroSubtitle, heroSubtitleStyle,
      heroBgImage, heroCta, heroCtaLink,
      heroReviewCount, heroRating, heroTickerText,

      ourServicesLabel, ourServicesTitle, ourServicesTitleStyle, ourServicesDesc, ourServicesDescStyle, ourServicesCta, ourServicesCtaLink,
      ourServicesCards[]{ title, image, icon, link },

      slimeTitle, slimeTitleStyle, slimeAccent, slimeDesc, slimeDescStyle, slimeCta, slimeCtaLink,
      slimeStats[]{ value, label },
      slimeCards[]{ title, desc, icon },

      aboutLabel, aboutTitle, aboutTitleStyle, aboutBody, aboutBodyStyle, aboutCta, aboutCtaLink, aboutImage,
      aboutFeatures[]{ title, desc },

      pricingLabel, pricingTitle, pricingTitleStyle, pricingDesc, pricingDescStyle,
      pricingCards[]{ title, price, image, ctaText, ctaLink },

      processLabel, processTitle, processTitleStyle, processSubtitle, processDesc, processDescStyle,
      processSteps[]{ title, desc, image, icon },

      marqueeLight, marqueeDark,

      newsLabel, newsTitle, newsTitleStyle, newsCta, newsCtaLink,
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
      heroTitle, heroTitleStyle, heroBgImage,
      introLabel, introTitle, introTitleStyle, introParagraphs, introImage, introCta,
      whyLabel, whyTitle, whyTitleStyle, whyBgImage,
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
      heroTitle, heroTitleStyle, heroBgImage,
      sectionLabel, sectionTitle, sectionTitleStyle,
      formTitle, formTitleStyle, submitText
    }`
  )
}

// ── Services Page ─────────────────────────────────────────────────────────────

export async function getServicesPage() {
  return client.fetch(
    `*[_type == "servicesPage"][0] {
      sectionOrder[]{ sectionId, enabled },
      seoTitle, seoDescription,
      heroTitle, heroTitleStyle, heroBgImage,
      cardsLabel, cardsTitle, cardsTitleStyle, cardsDesc, cardsDescStyle,
      serviceCards[]{ title, desc, img, icon, href },
      statsLabel, statsTitle, statsTitleStyle, statsDesc, statsDescStyle,
      stats[]{ tag, prefix, num, suffix, desc },
      quoteTitle, quoteBody,
      expLabel, expTitle, expTitleStyle, expImage,
      expItems[]{ title, text, icon },
      serviceDetails[]{ label, title, desc, img, features, href, imgLeft },
      ctaTitle, ctaTitleStyle, ctaAccent, ctaButtonText, ctaButtonLink,
      ctaQuestionLabel, ctaQuestionDesc
    }`
  )
}

// ── Service Pages (singletons) ───────────────────────────────────────────────

const servicePageFields = `
  sectionOrder[]{ sectionId, enabled },
  seoTitle, seoDescription,
  heroTitle, heroTitleStyle, heroBgImage, breadcrumbLabel,
  mainImage, overlayHeadline, overlayHeadlineStyle,
  contractsTitle, contractsTitleStyle,
  contractFeatures[]{ label, acces, equilibre, plus },
  discountHeadline, discountText, discountBadge, disclaimer,
  whyTitle, whyTitleStyle, whyIntro, whyBullets, detailImages,
  faqTitle, faqTitleStyle, faqs[]{ question, answer }
`

export async function getPanneauxSolairesPage() {
  return client.fetch(
    `*[_type == "panneauxSolairesPage"][0] {
      ${servicePageFields},
      pvCleanTitle, pvCleanTitleStyle, pvCleanIntro, pvCleanImage,
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
      heroTitle, heroTitleStyle, heroBgImage, breadcrumbLabel,
      mainImage, overlayHeadline, overlayHeadlineStyle,
      offerImage, offerTitle, offerTitleStyle, offerSubtitle, offerLabel,
      offerFeatures, offerDisclaimer,
      whyTitle, whyTitleStyle, whyIntro, whyBullets, detailImages,
      faqTitle, faqTitleStyle, faqs[]{ question, answer }
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

// ── Theme Settings ───────────────────────────────────────────────────────────

export async function getThemeSettings() {
  return client.fetch(
    `*[_type == "themeSettings"][0] {
      colorPrimary,
      colorHover,
      colorDark,
      buttonStyle,
      cardStyle
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
