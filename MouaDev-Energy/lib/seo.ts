export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://zen-energieservices.ch'
export const SITE_NAME = 'Zen Énergie Services'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`

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
