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

const faqs = [
  {
    _id: 'faq-1',
    _type: 'faq',
    question: "Pourquoi dois-je entretenir régulièrement mon installation ?",
    answerIntro: "L'entretien régulier de vos installations (panneaux photovoltaïques, pompes à chaleur, boilers thermodynamiques) est essentiel pour plusieurs raisons :",
    answerBullets: [
      {
        _key: 'b1',
        bold: 'Optimisation des performances :',
        text: "un équipement bien entretenu fonctionne à pleine capacité, ce qui vous permet de maximiser les économies d'énergie",
      },
      {
        _key: 'b2',
        bold: 'Prévention des pannes :',
        text: "l'entretien aide à détecter et à résoudre les petits problèmes avant qu'ils ne se transforment en pannes coûteuses.",
      },
      {
        _key: 'b3',
        bold: 'Prolongation de la durée de vie :',
        text: "les composants soumis à un entretien régulier s'usent moins rapidement, ce qui permet à vos installations de durer plusieurs années de plus",
      },
      {
        _key: 'b4',
        bold: 'Conformité réglementaire et garantie :',
        text: "en Suisse, certaines installations, comme les circuits contenant du fluide frigorigène, nécessitent un contrôle régulier. De plus, de nombreux fabricants exigent un entretien périodique pour maintenir la validité de la garantie.",
      },
      {
        _key: 'b5',
        bold: "Respect de l'environnement :",
        text: "des équipements en bon état consomment moins d'énergie et produisent moins de déchets ou d'émissions nocives",
      },
    ],
    order: 1,
  },
  {
    _id: 'faq-2',
    _type: 'faq',
    question: "Quelles marques sont concernées par les contrats Zen Énergie Services ?",
    answerIntro: "Zen Énergie Services intervient sur la majorité des marques d'appareils et d'équipements.",
    order: 2,
  },
  {
    _id: 'faq-3',
    _type: 'faq',
    question: "Comment payer mon/mes contrat(s) d'entretien ?",
    answerIntro: "La souscription et le paiement de la 1ère annuité de votre contrat d'entretien de 4 ans ou de l'Offre PV Clean s'effectuent en ligne sur le site www.zen-energieservices.ch.",
    order: 3,
  },
  {
    _id: 'faq-4',
    _type: 'faq',
    question: "Quelle est la durée d'engagement d'un contrat d'entretien ?",
    answerIntro: "Tous les contrats d'entretien Zen Énergie Services ont une durée d'engagement de 4 ans. La 1ère annuité est payable en ligne à la souscription. Les modalités de résiliation et d'annulation de contrat sont consultables sur",
    answerLink: {
      text: 'ce lien',
      href: '/legal/conditions-generales-entretien',
    },
    order: 4,
  },
  {
    _id: 'faq-5',
    _type: 'faq',
    question: "Comment résilier votre contrat ?",
    answerIntro: "Les modalités de résiliation et d'annulation de contrat sont consultables sur",
    answerLink: {
      text: 'ce lien',
      href: '/legal/conditions-generales-entretien',
    },
    order: 5,
  },
  {
    _id: 'faq-6',
    _type: 'faq',
    question: "Que dois-je faire en cas de déménagement ?",
    answerIntro: "La résiliation avant la fin de la période d'engagement est possible uniquement dans le cas suivant :",
    answerBullets: [
      {
        _key: 'b1',
        bold: '',
        text: "Déménagement hors zone d'intervention (preuve de changement d'adresse requise).",
      },
    ],
    answerOutro: "Pour plus d'informations, veuillez consulter les modalités de résiliation et d'annulation de contrat sur",
    answerLink: {
      text: 'ce lien',
      href: '/legal/conditions-generales-entretien',
    },
    order: 6,
  },
]

async function main() {
  // Delete old FAQ documents first
  const existing = await client.fetch('*[_type == "faq"]._id')
  if (existing.length > 0) {
    console.log(`Deleting ${existing.length} old FAQ documents...`)
    const tx = client.transaction()
    for (const id of existing) {
      tx.delete(id)
    }
    await tx.commit()
  }

  console.log('Seeding 6 FAQ documents...')
  const tx = client.transaction()
  for (const faq of faqs) {
    tx.createOrReplace(faq)
  }
  await tx.commit()
  console.log('✓ 6 FAQs seeded successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
