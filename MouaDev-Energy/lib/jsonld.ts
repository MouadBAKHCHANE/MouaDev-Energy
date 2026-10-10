import { SITE_URL, SITE_NAME, COMPANY, DEFAULT_OG_IMAGE } from './seo'

const ORG_ID = `${SITE_URL}/#organization`
const BUSINESS_ID = `${SITE_URL}/#localbusiness`
const LOGO = `${SITE_URL}/Logo complet/Vert medium.webp`

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: COMPANY.streetAddress,
  addressLocality: COMPANY.locality,
  postalCode: COMPANY.postalCode,
  addressRegion: COMPANY.region,
  addressCountry: COMPANY.country,
}

const cantonsServed = COMPANY.cantons.map((name) => ({ '@type': 'AdministrativeArea', name }))

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: COMPANY.name,
    url: SITE_URL,
    logo: LOGO,
    email: COMPANY.email,
    sameAs: COMPANY.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      areaServed: 'CH',
      availableLanguage: 'French',
    },
    address: postalAddress,
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    // Sous-type schema.org des entreprises de chauffage et climatisation
    '@type': 'HVACBusiness',
    '@id': BUSINESS_ID,
    name: COMPANY.name,
    image: DEFAULT_OG_IMAGE,
    logo: LOGO,
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: 'CHF',
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.167925,
      longitude: 6.106813,
    },
    hasMap: COMPANY.googleMaps,
    areaServed: cantonsServed,
    sameAs: COMPANY.sameAs,
    parentOrganization: { '@id': ORG_ID },
  }
}

export function serviceJsonLd(service: {
  name: string
  description: string
  url: string
  serviceType?: string
  /** Zones précises (pages locales) ; par défaut les 5 cantons. */
  areaServed?: { '@type': 'City' | 'AdministrativeArea'; name: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.serviceType ?? service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: { '@type': 'HVACBusiness', '@id': BUSINESS_ID, name: COMPANY.name },
    areaServed: service.areaServed ?? cantonsServed,
  }
}

export function blogPostingJsonLd(post: {
  title: string
  slug: string
  excerpt?: string
  date?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blogs/${post.slug}`,
    datePublished: post.date,
    image: post.image,
    author: { '@type': 'Organization', name: COMPANY.name },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/Logo complet/Vert medium.webp` },
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
