import { createClient } from '@sanity/client'
import { readFileSync, readdirSync, existsSync } from 'fs'
import path from 'path'

const token = process.env.SANITY_API_TOKEN
if (!token) { console.error('Missing SANITY_API_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const PUBLIC = path.resolve('public')

function resolveFile(localPath) {
  const segments = localPath.split(/[/\\]/)
  let resolved = PUBLIC
  for (const seg of segments) {
    const candidate = path.join(resolved, seg)
    if (existsSync(candidate)) { resolved = candidate; continue }
    const entries = readdirSync(resolved)
    const match = entries.find(e => e.normalize('NFC') === seg.normalize('NFC'))
    resolved = path.join(resolved, match || seg)
  }
  return resolved
}

async function upload(localPath, label) {
  const filePath = resolveFile(localPath)
  const filename = path.basename(filePath)
  console.log(`  ${label}: ${filename}`)
  const buffer = readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType: filePath.endsWith('.webp') ? 'image/webp' : 'image/png',
  })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function main() {
  console.log('Seeding servicesPage text...')

  await client.createOrReplace({
    _id: 'servicesPage',
    _type: 'servicesPage',

    heroTitle: "Nos solutions d'entretien",

    cardsLabel: 'NOS SERVICES',
    cardsTitle: 'Nos solutions pour votre confort en toute sérénité',
    cardsDesc: "Un entretien sur mesure pour vos installations de chauffage et photovoltaïques.\n\nDécouvrez nos solutions adaptées à vos équipements et besoins.",

    serviceCards: [
      { _key: 'card-pac', title: 'Pompe à chaleur', desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.', href: '/services/pompe-a-chaleur' },
      { _key: 'card-pv', title: 'Panneaux photovoltaïques', desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.', href: '/services/panneaux-solaires' },
      { _key: 'card-boiler', title: 'Boiler thermodynamique', desc: "Nettoyage et vérification des composants pour une production d'eau chaude efficace et durable.", href: '/services/boiler-thermodynamique' },
      { _key: 'card-pvclean', title: 'Nettoyage PV Clean', desc: "Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.", href: '/services/pv-clean' },
    ],

    statsLabel: 'RÉSULTATS CONCRETS',
    statsTitle: "Ce que l'entretien Zen apporte concrètement",
    statsDesc: 'Plusieurs évènements peuvent venir endommager votre installation solaire ou de pompe à chaleur et ses performances.',
    stats: [
      { _key: 'stat-1', tag: 'SÉCURITÉ HABITATION', num: 100, suffix: '%', desc: "Élimination des risques de sécurité et protection complète de vos installations électriques et thermiques." },
      { _key: 'stat-2', tag: 'PERFORMANCE RESTAURÉE', prefix: '+', num: 30, suffix: '%', desc: "Récupération immédiate de votre productivité énergétique pouvant atteindre jusqu'à 30% de rendement supplémentaire." },
      { _key: 'stat-3', tag: 'DURABILITÉ ÉTENDUE', prefix: '+', num: 15, suffix: ' ans', desc: "Préservation de l'intégrité des composants pour une durée de vie prolongée et un amortissement optimal." },
      { _key: 'stat-4', tag: 'ÉCONOMIES RÉELLES', prefix: '-', num: 40, suffix: '%', desc: "Réduction drastique des pannes récurrentes et suppression des coûts d'intervention d'urgence imprévus." },
    ],
    quoteTitle: 'Ces conséquences peuvent être évitées avec une maintenance et un entretien régulier.',
    quoteBody: "Nous observons un gain de longévité allant jusqu'à 10 ans avec une maintenance régulière et professionnelle de vos installations. Afin de prévenir et d'éviter des problèmes de sécurité ou d'usure, les experts Zen s'assurent du diagnostic, du suivi, des réparations et de la maintenance de vos installations.",

    expLabel: "L'expérience Zen",
    expTitle: "Les atouts de nos contrats d'entretien",
    expItems: [
      { _key: 'exp-1', title: 'Contrat digitalisé avec maintenance téléphonique', text: "Votre contrat digitalisé avec une maintenance téléphonique à disposition pour vous accompagner à tout moment en cas de besoin." },
      { _key: 'exp-2', title: 'Espace client personnel', text: "Votre espace client personnel pour gérer l'entièreté de votre contrat et de vos interventions, accessible en ligne à tout moment." },
      { _key: 'exp-3', title: 'Contrats flexibles adaptés à vos besoins', text: "Des contrats flexibles adaptés à vos besoins." },
    ],

    serviceDetails: [
      {
        _key: 'det-pac',
        label: 'Pompe à chaleur',
        title: "Profitez d'un confort thermique optimal toute l'année",
        desc: "Prolongez la durée de vie de votre pompe à chaleur et assurez ses performances avec nos contrats d'entretien adaptés. Nos techniciens qualifiés réalisent un contrôle complet de votre installation selon les normes en vigueur en Suisse.",
        features: [
          'Nettoyage des filtres et unités intérieure / extérieure',
          "Contrôle d'étanchéité du circuit frigorigène",
          'Vérification des connexions électriques',
          'Relevé des températures, pressions et tensions',
          "Rapport d'intervention complet",
        ],
        href: '/services/pompe-a-chaleur',
        imgLeft: true,
      },
      {
        _key: 'det-pv',
        label: 'Panneaux photovoltaïques',
        title: 'Maximisez la production de votre installation solaire',
        desc: "Un entretien régulier de vos panneaux photovoltaïques garantit une production optimale d'énergie. Nos experts interviennent sur toiture et à distance pour assurer le bon fonctionnement de votre système.",
        features: [
          "Contrôle d'étanchéité de la toiture",
          'Vérification du système de montage des panneaux',
          'Diagnostic électrique et paramètres onduleur',
          'Monitoring à distance et mise à jour logiciel',
          "Rapport d'intervention détaillé",
        ],
        href: '/services/panneaux-solaires',
        imgLeft: false,
      },
      {
        _key: 'det-boiler',
        label: 'Boiler thermodynamique',
        title: "Optimisez votre production d'eau chaude toute l'année",
        desc: "Le boiler thermodynamique est un équipement clé de votre confort quotidien. Nos contrats d'entretien assurent son fonctionnement optimal et préviennent les pannes coûteuses avant qu'elles n'arrivent.",
        features: [
          'Inspection générale et détection de fuites',
          'Nettoyage du boiler et grilles de ventilation',
          'Contrôle du circuit frigorifique',
          'Vérification du thermostat et des organes de sécurité',
          'Optimisation des réglages pour la consommation énergétique',
        ],
        href: '/services/boiler-thermodynamique',
        imgLeft: true,
      },
      {
        _key: 'det-pvclean',
        label: 'Nettoyage PV Clean',
        title: 'Retrouvez toute la puissance de vos panneaux solaires',
        desc: "Des panneaux encrassés perdent jusqu'à 25% de leur rendement. Avec notre service PV Clean, bénéficiez d'un nettoyage professionnel pour restituer toute la puissance de votre installation solaire.",
        features: [
          'Nettoyage simple : dépoussiérage',
          "Nettoyage mécanique à l'eau déminéralisée",
          "Application d'une couche protectrice",
          'Rapport de nettoyage détaillé',
          'À partir de CHF 392* (minimum 8 panneaux)',
        ],
        href: '/services/pv-clean',
        imgLeft: false,
      },
    ],

    ctaTitle: 'Prêt à protéger',
    ctaAccent: 'vos installations ?',
    ctaButtonText: 'Demander un devis',
    ctaButtonLink: 'https://form.typeform.com/to/rRhOu7eb',
    ctaQuestionLabel: 'Une question ?',
    ctaQuestionDesc: 'Notre équipe est disponible pour vous accompagner et répondre à toutes vos questions.',
  })

  console.log('✓ servicesPage text seeded')

  // Upload images
  console.log('\nUploading services page images...')

  const heroBg = await upload('Photos HD/Photos d_ambiance/happy-family-background-house-with-solar-panels-roof-selective-focus.webp', 'Hero BG')

  // Service card images
  const cardImgs = await Promise.all([
    upload('Photos HD/Visuels Technique/Technique - PAC/Pompes à chaleur avantages et inconvénients.webp', 'Card PAC'),
    upload('Photos HD/Photos produits/Panneaux solaires/man-worker-firld-by-solar-panels.webp', 'Card PV'),
    upload('Photos HD/Visuels Technique/Technique - Boiler/Ajustement de rétroéclairage.webp', 'Card Boiler'),
    upload('Photos HD/Visuels Technique/Nettoyage - PV/1789536761.webp', 'Card PV Clean'),
  ])

  // Service card icons
  const cardIcons = await Promise.all([
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-20.webp', 'Icon PAC'),
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-18.webp', 'Icon PV'),
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-15.webp', 'Icon Boiler'),
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-23.webp', 'Icon PV Clean'),
  ])

  // Service detail images
  const detailImgs = await Promise.all([
    upload('Photos HD/Visuels Technique/Technique - PAC/heat-pump-airwater-technology-home.webp', 'Detail PAC'),
    upload('Photos HD/Photos produits/Panneaux solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp', 'Detail PV'),
    upload('Photos HD/Photos produits/Boiler/1.webp', 'Detail Boiler'),
    upload('Photos HD/Visuels Technique/Nettoyage - PV/close-up-view-cleaning-solar-panels-surface.webp', 'Detail PV Clean'),
  ])

  // Experience section image
  const expImg = await upload('Photos HD/Photos d_ambiance/Zen.webp', 'Exp Image')

  // Experience item icons
  const expIcons = await Promise.all([
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-35.webp', 'Exp Icon 1'),
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-14.webp', 'Exp Icon 2'),
    upload('icons/CHARTEGRAPHIQUENAOSERVICE-22.webp', 'Exp Icon 3'),
  ])

  // Patch all images
  await client.patch('servicesPage')
    .set({
      heroBgImage: heroBg,
      'serviceCards[0].img': cardImgs[0],
      'serviceCards[0].icon': cardIcons[0],
      'serviceCards[1].img': cardImgs[1],
      'serviceCards[1].icon': cardIcons[1],
      'serviceCards[2].img': cardImgs[2],
      'serviceCards[2].icon': cardIcons[2],
      'serviceCards[3].img': cardImgs[3],
      'serviceCards[3].icon': cardIcons[3],
      'serviceDetails[0].img': detailImgs[0],
      'serviceDetails[1].img': detailImgs[1],
      'serviceDetails[2].img': detailImgs[2],
      'serviceDetails[3].img': detailImgs[3],
      expImage: expImg,
      'expItems[0].icon': expIcons[0],
      'expItems[1].icon': expIcons[1],
      'expItems[2].icon': expIcons[2],
    })
    .commit()

  console.log('✓ servicesPage images uploaded and linked')
}

main().catch((err) => { console.error(err); process.exit(1) })
