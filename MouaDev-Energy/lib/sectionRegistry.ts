import Hero from '@/components/sections/Hero'
import OurServices from '@/components/sections/OurServices'
import ServicesLime from '@/components/sections/ServicesLime'
import About from '@/components/sections/About'
import Pricing from '@/components/sections/Pricing'
import FunFact from '@/components/sections/FunFact'
import Marquee from '@/components/sections/Marquee'
import FAQ from '@/components/sections/FAQ'
import News from '@/components/sections/News'

export interface SectionEntry {
  sectionId: string
  enabled: boolean
}

interface SectionDef {
  component: React.ComponentType<any>
  propsMapper: (hp: any) => Record<string, any>
}

export const SECTION_REGISTRY: Record<string, SectionDef> = {
  hero: {
    component: Hero,
    propsMapper: (hp) => ({
      badge: hp?.heroBadge,
      title: hp?.heroTitle,
      accentWord: hp?.heroAccentWord,
      subtitle: hp?.heroSubtitle,
      bgImage: hp?.heroBgImage,
      cta: hp?.heroCta,
      ctaLink: hp?.heroCtaLink || undefined,
      reviewCount: hp?.heroReviewCount,
      rating: hp?.heroRating,
      tickerText: hp?.heroTickerText,
    }),
  },
  ourServices: {
    component: OurServices,
    propsMapper: (hp) => ({
      label: hp?.ourServicesLabel,
      title: hp?.ourServicesTitle,
      desc: hp?.ourServicesDesc,
      cta: hp?.ourServicesCta,
      ctaLink: hp?.ourServicesCtaLink || undefined,
      cards: hp?.ourServicesCards,
    }),
  },
  servicesLime: {
    component: ServicesLime,
    propsMapper: (hp) => ({
      title: hp?.slimeTitle,
      accent: hp?.slimeAccent,
      desc: hp?.slimeDesc,
      cta: hp?.slimeCta,
      ctaLink: hp?.slimeCtaLink || undefined,
      stats: hp?.slimeStats,
      cards: hp?.slimeCards,
    }),
  },
  about: {
    component: About,
    propsMapper: (hp) => ({
      label: hp?.aboutLabel,
      title: hp?.aboutTitle,
      body: hp?.aboutBody,
      ctaText: hp?.aboutCta,
      ctaLink: hp?.aboutCtaLink || undefined,
      image: hp?.aboutImage,
      features: hp?.aboutFeatures,
    }),
  },
  pricing: {
    component: Pricing,
    propsMapper: (hp) => ({
      label: hp?.pricingLabel,
      title: hp?.pricingTitle,
      desc: hp?.pricingDesc,
      cards: hp?.pricingCards,
    }),
  },
  process: {
    component: FunFact,
    propsMapper: (hp) => ({
      label: hp?.processLabel,
      title: hp?.processTitle,
      subtitle: hp?.processSubtitle,
      desc: hp?.processDesc,
      steps: hp?.processSteps,
    }),
  },
  marquee: {
    component: Marquee,
    propsMapper: (hp) => ({
      lightItems: hp?.marqueeLight,
      darkItems: hp?.marqueeDark,
    }),
  },
  faq: {
    component: FAQ,
    propsMapper: () => ({}),
  },
  news: {
    component: News,
    propsMapper: (hp) => ({
      label: hp?.newsLabel,
      title: hp?.newsTitle,
      cta: hp?.newsCta,
      ctaLink: hp?.newsCtaLink || undefined,
      articles: hp?.newsArticles,
    }),
  },
}

export const DEFAULT_SECTION_ORDER: SectionEntry[] = [
  { sectionId: 'hero', enabled: true },
  { sectionId: 'ourServices', enabled: true },
  { sectionId: 'servicesLime', enabled: true },
  { sectionId: 'about', enabled: true },
  { sectionId: 'pricing', enabled: true },
  { sectionId: 'process', enabled: true },
  { sectionId: 'marquee', enabled: true },
  { sectionId: 'faq', enabled: true },
  { sectionId: 'news', enabled: true },
]
