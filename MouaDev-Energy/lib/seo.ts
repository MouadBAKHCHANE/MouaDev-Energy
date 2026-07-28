import type { Metadata } from 'next'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zen-energieservices.com'
export const SITE_NAME = 'Zen Énergie Services'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`

/**
 * Construit le <title> d'une page à partir du champ SEO saisi dans le back-office.
 *
 * Le layout racine applique le template `%s | Zen Énergie Services`. Or la plupart
 * des seoTitle saisis dans Sanity contiennent déjà la marque, ce qui produisait des
 * titres doublonnés et tronqués dans Google
 * (« … I Zen Énergie | Zen Énergie Services », 93 caractères).
 *
 * Règle : si le titre saisi mentionne déjà la marque, il est utilisé tel quel
 * (`absolute`) ; sinon on laisse le template ajouter le suffixe.
 */
const HAS_BRAND = /zen\s*[ée]nergie/i

export function pageTitle(seoTitle?: string | null, fallback?: string): Metadata['title'] {
  const title = seoTitle?.trim()
  if (!title) return fallback ?? null
  return HAS_BRAND.test(title) ? { absolute: title } : title
}

export const COMPANY = {
  name: 'Zen Énergie Services Sàrl',
  streetAddress: 'Chemin du Pré-Fleuri 1-3',
  locality: 'Plan-les-Ouates',
  postalCode: '1228',
  region: 'Genève',
  country: 'CH',
  fullAddress: 'Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève',
  phone: '+41 21 512 05 74',
  email: 'contact@zen-energieservices.ch',
  rc: 'CH-660.5.256.023-9',
  ceo: 'Olivier RICHARD',
} as const
