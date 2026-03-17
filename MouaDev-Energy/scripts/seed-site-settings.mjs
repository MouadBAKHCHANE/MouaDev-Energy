import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) { console.error('Missing SANITY_API_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteName: 'Zen Énergie Services',
  siteDescription: "Votre partenaire de confiance pour la maintenance et l'entretien de vos installations énergétiques en Suisse romande. Pompes à chaleur, panneaux solaires, boilers thermodynamiques.",
  typeformUrl: 'https://form.typeform.com/to/rRhOu7eb',
  phone: '+41 21 512 05 74',
  email: 'contact@zen-energieservices.ch',
  address: 'Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève',
  mapLat: 46.167925,
  mapLng: 6.106813,
  socialFacebook: 'https://facebook.com',
  socialInstagram: 'https://instagram.com',
  footerAbout: "Votre partenaire de confiance pour la maintenance et l'entretien de vos installations énergétiques en Suisse Romande.",
  footerNewsletter: 'Inscrivez-vous pour recevoir nos dernières actualités et offres.',
  copyright: '© 2026 Zen Énergie Services Suisse. Tous droits réservés.',
}

async function main() {
  console.log('Seeding siteSettings...')
  await client.createOrReplace(siteSettings)
  console.log('✓ siteSettings seeded successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
