import { SITE_URL, SITE_NAME, COMPANY } from './seo'

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}/Logo complet/Vert medium.webp`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone,
      contactType: 'customer service',
      availableLanguage: 'French',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.locality,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: COMPANY.country,
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: COMPANY.name,
    image: `${SITE_URL}/Logo complet/Vert medium.webp`,
    url: SITE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: 'CHF',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.locality,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: COMPANY.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.1667,
      longitude: 6.1167,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 46.2044, longitude: 6.1432 },
      geoRadius: '50000',
    },
  }
}

export function serviceJsonLd(service: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.url}`,
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Suisse romande',
    },
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
