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

const homePage = {
  _id: 'homePage',
  _type: 'homePage',

  // ── Hero ──
  heroBadge: 'Suisse Romande',
  heroTitle: 'Zen Énergie Services, votre partenaire de confiance',
  heroAccentWord: 'confiance',
  heroSubtitle: 'Augmentez la longévité et la performance de vos équipements de chauffage et installations photovoltaïques.',
  heroCta: 'Explorer maintenant',
  heroCtaLink: '/services',
  heroReviewCount: '100+ avis',
  heroRating: '4.96 sur 5',
  heroTickerText: 'Ma maison, Mon confort.',

  // ── OurServices ──
  ourServicesLabel: 'NOS SERVICES',
  ourServicesTitle: 'Des solutions énergétiques sur mesure adaptées à vos besoins',
  ourServicesDesc: "Notre équipe conçoit et installe des systèmes d'énergie solaire personnalisés basés sur votre consommation, la configuration de votre propriété et votre budget.",
  ourServicesCta: "Découvrir nos offres d'entretien",
  ourServicesCards: [
    { _key: 'os1', title: 'Panneaux solaires', link: '/services/panneaux-solaires' },
    { _key: 'os2', title: 'Pompes à chaleur', link: '/services/pompe-a-chaleur' },
    { _key: 'os3', title: 'Boiler thermodynamique', link: '/services/boiler-thermodynamique' },
    { _key: 'os4', title: 'Nettoyage panneaux solaires', link: '/services/pv-clean' },
  ],

  // ── ServicesLime ──
  slimeTitle: "Prolongez la durée de vie de vos équipements grâce à nos contrats d'entretien.",
  slimeAccent: 'grâce à nos contrats',
  slimeDesc: 'Des solutions adaptées à chaque foyer pour assurer longévité, performance et sérénité au quotidien.',
  slimeCta: 'Découvrir nos offres',
  slimeStats: [
    { _key: 'st1', value: '4+', label: "Types d'équipements" },
    { _key: 'st2', value: '100+', label: 'Clients satisfaits' },
    { _key: 'st3', value: '4.96★', label: 'Note moyenne' },
  ],
  slimeCards: [
    { _key: 'sc1', title: 'Panneaux solaires', desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.' },
    { _key: 'sc2', title: 'Pompes à chaleur', desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.' },
    { _key: 'sc3', title: 'Boiler thermodynamique', desc: "Nettoyage et vérification des composants pour une production d'eau chaude efficace." },
    { _key: 'sc4', title: 'Nettoyage panneaux solaires', desc: 'Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.' },
  ],

  // ── About ──
  aboutLabel: 'À PROPOS DE NOUS',
  aboutTitle: 'Pourquoi choisir Zen Énergie Services ?',
  aboutBody: "Fort d'une expertise reconnue depuis de nombreuses années en Suisse, Zen Énergie Services s'assure de la longévité et de l'optimisation du rendement de vos installations sur le long terme. Des experts locaux au service des particuliers tout au long de l'année.",
  aboutCta: 'En savoir plus',
  aboutFeatures: [
    { _key: 'af1', title: 'Performance garantie', desc: 'assurez la performance optimale de vos installations' },
    { _key: 'af2', title: 'Expertise locale', desc: "une équipe d'experts proche de chez vous formée aux dernières avancées technologiques" },
    { _key: 'af3', title: 'Engagement durable', desc: "prolongez la durée de vie de vos équipements tout en contribuant à un avenir plus vert" },
    { _key: 'af4', title: 'Fiabilité & confiance', desc: "une qualité irréprochable, lors de toute intervention afin de répondre à l'ensemble des normes et prérogatives du domaine." },
  ],

  // ── Pricing ──
  pricingLabel: "NOS SOLUTIONS D'ENTRETIEN",
  pricingTitle: "Découvrez nos offres d'entretien en un coup d'œil !",
  pricingDesc: "Choisissez la solution qui correspond à votre installation et profitez d'une expertise locale pour la pérennité de vos équipements.",
  pricingCards: [
    { _key: 'pc1', title: 'PANNEAUX PHOTOVOLTAÏQUES', price: 'À partir de CHF 420.- / an !', ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
    { _key: 'pc2', title: 'POMPES À CHALEUR', price: 'À partir de CHF 450.- / an !', ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
    { _key: 'pc3', title: 'BOILER THERMODYNAMIQUE', price: 'À partir de CHF 140.- / an !', ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
    { _key: 'pc4', title: 'NETTOYAGE DES PANNEAUX PHOTOVOLTAÏQUES', price: '49 CHF', ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
  ],

  // ── Process ──
  processLabel: "Process de l'intervention",
  processTitle: 'Comment se déroule une intervention avec Zen Énergie Services ?',
  processSubtitle: 'Un entretien Zen, en toute simplicité !',
  processDesc: "Nos experts interviennent en toute sécurité et confiance à votre domicile et répondent à toutes vos questions sur l'entretien et la maintenance de vos installations.",
  processSteps: [
    { _key: 'ps1', title: 'Prise de rendez-vous', desc: "Dès votre contrat souscrit en ligne, un expert Zen prendra contact avec vous dans les 48heures pour planifier votre 1ère intervention." },
    { _key: 'ps2', title: 'Diagnostic et intervention', desc: "Nos experts se déplacent avec un équipement de pointe pour entretenir ou dépanner vos installations." },
    { _key: 'ps3', title: "Envoi du rapport d'intervention", desc: "Un rapport d'intervention vous sera transmis à la suite de la visite de nos experts." },
    { _key: 'ps4', title: 'Suivi en ligne', desc: "Gérez votre contrat, vos rapports d'interventions et vos demandes directement depuis votre espace client Zen." },
  ],

  // ── Marquee ──
  marqueeLight: ["L'Avenir avec le Soleil", 'Innovation Solaire', 'Énergie Renouvelable'],
  marqueeDark: ['Révolution Renouvelable', 'Énergie Propre', 'Solutions Solaires', 'Énergie du Soleil', 'Un Futur Radieux'],

  // ── News ──
  newsLabel: 'DERNIÈRES ACTUALITÉS',
  newsTitle: 'Actualités et innovations dans les énergies propres',
  newsCta: "Plus d'articles",
  newsArticles: [
    { _key: 'na1', title: 'Pourquoi entretenir régulièrement ses panneaux photovoltaïques ?', author: 'Zen Énergie', readTime: '4 min', link: '/blogs/entretien-panneaux-solaires' },
    { _key: 'na2', title: 'Comment bien utiliser sa pompe à chaleur ?', author: 'Zen Énergie', readTime: '3 min', link: '/blogs/entretien-pompe-a-chaleur' },
    { _key: 'na3', title: 'Pourquoi entretenir son boiler thermodynamique ?', author: 'Zen Énergie', readTime: '2 min', link: '/blogs/maintenance-boiler' },
  ],
}

async function main() {
  console.log('Seeding homePage...')
  await client.createOrReplace(homePage)
  console.log('✓ homePage seeded successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
