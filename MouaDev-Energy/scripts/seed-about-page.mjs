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

const aboutPage = {
  _id: 'aboutPage',
  _type: 'aboutPage',

  // ── Hero ──
  heroTitle: 'À propos de nous',

  // ── Qui sommes-nous ──
  introLabel: 'QUI SOMMES-NOUS ?',
  introTitle: 'Votre partenaire de confiance pour des installations énergétiques fiables et pérennes',
  introParagraphs: [
    "Une équipe de spécialistes et d'experts-métiers pour l'entretien des solutions vertes de l'habitat.",
    "Zen Énergie Services est le partenaire de référence dans le secteur de la maintenance et de l'entretien des pompes à chaleur, boilers thermodynamiques et panneaux photovoltaïques en Suisse auprès des particuliers.",
    "Nos équipes d'experts mettent tout en œuvre pour assurer une qualité de production optimale de votre énergie, sur le long terme, grâce aux dernières technologies d'entretien et de maintenance.",
  ],
  introCta: 'Contactez-nous',

  // ── Pourquoi nous choisir ──
  whyLabel: 'POURQUOI NOUS CHOISIR',
  whyTitle: 'Votre premier choix pour la maintenance énergétique',
  whyFeatures: [
    { _key: 'wf1', title: 'Performance garantie', desc: 'Assurez la performance optimale de vos installations grâce à des interventions régulières et rigoureuses.' },
    { _key: 'wf2', title: 'Expertise locale', desc: "Une équipe d'experts proche de chez vous, formée aux dernières avancées technologiques en matière de maintenance énergétique." },
    { _key: 'wf3', title: 'Engagement durable', desc: "Prolongez la durée de vie de vos équipements tout en contribuant à un avenir plus vert et à la transition énergétique." },
    { _key: 'wf4', title: 'Fiabilité & confiance', desc: "Une qualité irréprochable lors de toute intervention, afin de répondre à l'ensemble des normes et prérogatives du domaine." },
  ],
  whyTickerText: 'Énergie Renouvelable',
}

async function main() {
  console.log('Seeding aboutPage...')
  await client.createOrReplace(aboutPage)
  console.log('✓ aboutPage seeded successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
