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

// Find service document by slug
async function findService(slug) {
  return client.fetch(`*[_type == "service" && slug.current == $slug][0]._id`, { slug })
}

async function patchService(slug, data) {
  const id = await findService(slug)
  if (!id) { console.error(`Service "${slug}" not found!`); return }
  await client.patch(id).set(data).commit()
  console.log(`✓ Patched ${slug}`)
}

async function main() {
  // ── PAC ──────────────────────────────────────────────────────────────
  console.log('\n── Pompe à chaleur ──')
  const pacIntroImg = await upload('Photos HD/Visuels Technique/Technique - PAC/heat-pump-airwater-technology-home.webp', 'PAC intro')
  const pacIconImg = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-20.webp', 'PAC icon')
  const pacDetail1 = await upload('Photos HD/Visuels Technique/Technique - PAC/side-view-man-working-construction-site.webp', 'PAC detail1')
  const pacDetail2 = await upload('Photos HD/Visuels Technique/Technique - PAC/Heat pump AdobeStock.webp', 'PAC detail2')

  await patchService('pompe-a-chaleur', {
    accentColor: '#E8552C',
    introHeadline: "Profitez d'un confort thermique optimal grâce à l'entretien régulier de votre pompe à chaleur",
    introImage: pacIntroImg,
    iconImage: pacIconImg,
    detailImages: [pacDetail1, pacDetail2],
    pricingHeader: 'À partir de CHF 450.-/ an\u00a0!',
    plans: [
      { _key: 'pac-1', num: '1', title: 'ZEN ACCÈS', subtitle: 'La tranquillité essentielle', features: ['Compte client online', 'Entretien tous les 2 ans'], price: '450 CHF / 2 ans' },
      { _key: 'pac-2', num: '2', title: 'ZEN ÉQUILIBRE', subtitle: 'La couverture complète', features: ['Compte client online', 'Entretien annuel'], price: '510 CHF / an' },
      { _key: 'pac-3', num: '3', title: 'ZEN PLUS', subtitle: 'La sérénité assurée', features: ['Compte client online', 'Entretien annuel', "Dépannage, main d'œuvre et déplacement"], price: '600 CHF / an' },
    ],
    discountBoxes: [
      { _key: 'pac-d1', pct: '10 %', desc: 'sur votre contrat pour', highlight: '2 pompes à chaleur', iconCount: 2 },
      { _key: 'pac-d2', pct: '15 %', desc: 'à partir de', highlight: '3 pompes à chaleur', iconCount: 3 },
    ],
    disclaimer: "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise.",
    whyTitle: 'Pourquoi dois-je entretenir régulièrement ma pompe à chaleur ?',
    whyIntro: "L'entretien régulier de votre pompe à chaleur est indispensable pour garantir son efficacité et prolonger sa durée de vie. Un entretien régulier permet :",
    whyBullets: [
      "De maintenir un coefficient de performance (COP) optimal et réduire votre consommation énergétique.",
      "De détecter et corriger les pertes de fluide frigorigène avant qu'elles n'endommagent le compresseur.",
      "De respecter les obligations légales suisses en matière d'entretien des équipements thermiques.",
    ],
    faqSectionTitle: "Questions sur l'entretien de votre pompe à chaleur",
    faqs: [
      { _key: 'pac-faq1', question: 'À quelle fréquence dois-je faire entretenir ma pompe à chaleur ?', answer: "En Suisse, il est recommandé de faire vérifier et entretenir votre pompe à chaleur une fois par an par un technicien certifié. Voici quelques cas particuliers :\n\n• Usage intensif ou zones froides : si votre pompe fonctionne toute l'année, un contrôle annuel est indispensable.\n• Circuits avec fluide frigorigène : selon la loi, un contrôle peut être obligatoire tous les 1 à 2 ans pour garantir l'étanchéité du circuit.\n• Entretiens saisonniers : avant l'hiver, pour assurer une performance optimale, et au printemps, pour un nettoyage post-saison froide." },
      { _key: 'pac-faq2', question: "Est-ce que l'entretien de ma pompe à chaleur est obligatoire ?", answer: "En Suisse, l'entretien des pompes à chaleur n'est pas strictement obligatoire pour les particuliers. Toutefois, des obligations peuvent s'appliquer dans certains cas :\n\n• Si votre pompe utilise un fluide frigorigène, un contrôle régulier de l'étanchéité est exigé par la législation suisse.\n• Certains contrats de garantie ou d'assurance exigent un entretien annuel pour rester valides.\n• Dans le cadre d'une copropriété ou d'un bâtiment collectif, un entretien périodique peut être imposé par le règlement.\n\nMême en l'absence d'obligation légale, un entretien annuel est fortement recommandé pour assurer la sécurité, l'efficacité et la longévité de votre installation." },
      { _key: 'pac-faq3', question: "Comment se déroule une intervention d'entretien ?", answer: "L'intervention comprend :\n\n• Nettoyage des filtres\n• Nettoyage de l'unité extérieure et des unités intérieures (si présentes)\n• Nettoyage des bacs de réception des condensats et vérification de l'écoulement (si présent)\n• Contrôle visuel et auditif de l'ensemble des unités intérieures et extérieures\n• Contrôle d'étanchéité des installations de fluide frigorigène\n• Vérification et resserrage des connexions électriques\n• Vérification des circuits électroniques et des organes de sécurité\n• Vérification du bon fonctionnement de la pompe à chaleur et de l'appoint électrique éventuel\n• Relevé des températures, des pressions et de la tension\n• Rapport d'intervention complet" },
      { _key: 'pac-faq4', question: 'Quelle est la durée de vie de ma pompe à chaleur régulièrement entretenue ?', answer: "Une pompe à chaleur bien entretenue peut durer 15 à 20 ans en moyenne, et parfois plus, selon les conditions d'utilisation et la qualité initiale de l'installation. Avec un entretien annuel, vous maximisez la durée de vie des composants essentiels, comme le compresseur, tout en réduisant les risques de pannes coûteuses. Sans entretien, les performances de la pompe déclinent rapidement, et les réparations imprévues augmentent, réduisant sa durée de vie à 10–12 ans dans certains cas." },
    ],
  })

  // ── PV ──────────────────────────────────────────────────────────────
  console.log('\n── Panneaux solaires ──')
  const pvIntroImg = await upload('Photos HD/Photos produits/Panneaux solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp', 'PV intro')
  const pvIconImg = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-18.webp', 'PV icon')
  const pvDetail1 = await upload('Photos HD/Photos produits/Panneaux solaires/man-worker-firld-by-solar-panels.webp', 'PV detail1')
  const pvDetail2 = await upload('Photos HD/Visuels Technique/Nettoyage - PV/close-up-view-cleaning-solar-panels-surface.webp', 'PV detail2')

  await patchService('panneaux-solaires', {
    accentColor: '#2a9b96',
    introHeadline: "Optimisez la performance de vos panneaux solaires grâce à un entretien professionnel régulier",
    introImage: pvIntroImg,
    iconImage: pvIconImg,
    detailImages: [pvDetail1, pvDetail2],
    pricingHeader: 'À partir de CHF 390.-/ an\u00a0!',
    plans: [
      { _key: 'pv-1', num: '1', title: 'ZEN ACCÈS', subtitle: 'La tranquillité essentielle', features: ['Compte client online', 'Entretien tous les 2 ans'], price: '390 CHF / 2 ans' },
      { _key: 'pv-2', num: '2', title: 'ZEN ÉQUILIBRE', subtitle: 'La couverture complète', features: ['Compte client online', 'Entretien annuel'], price: '450 CHF / an' },
      { _key: 'pv-3', num: '3', title: 'ZEN PLUS', subtitle: 'La sérénité assurée', features: ['Compte client online', 'Entretien annuel', "Dépannage, main d'œuvre et déplacement"], price: '540 CHF / an' },
    ],
    discountBoxes: [
      { _key: 'pv-d1', pct: '10 %', desc: 'Multi-contrat pour', highlight: '2 équipements différents', iconCount: 2 },
      { _key: 'pv-d2', pct: '15 %', desc: 'Multi-contrat à partir de', highlight: '3 équipements différents', iconCount: 3 },
    ],
    disclaimer: "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise.",
    whyTitle: 'Pourquoi entretenir régulièrement vos panneaux solaires ?',
    whyIntro: "L'entretien régulier de votre installation photovoltaïque est essentiel pour maintenir un rendement optimal et protéger votre investissement. Un entretien régulier permet :",
    whyBullets: [
      "De maintenir un rendement optimal de vos panneaux et d'éviter des pertes de production allant jusqu'à 25%.",
      "De détecter précocement les défauts électriques, les micro-fissures ou les problèmes d'onduleur.",
      "De garantir la sécurité de votre toiture et de votre installation électrique.",
    ],
    faqSectionTitle: "Questions sur l'entretien de vos panneaux solaires",
    faqs: [
      { _key: 'pv-faq1', question: "À quelle fréquence dois-je faire entretenir mes panneaux solaires ?", answer: "Nous recommandons un contrôle technique annuel et un nettoyage selon l'environnement (tous les 1 à 3 ans). Les installations en zone urbaine, agricole ou à proximité d'arbres nécessitent un nettoyage plus fréquent." },
      { _key: 'pv-faq2', question: "Que comprend un entretien technique de panneaux photovoltaïques ?", answer: "L'entretien technique comprend :\n\n• Contrôle d'étanchéité de la toiture\n• Vérification du système de montage des panneaux\n• Diagnostic électrique complet\n• Vérification et paramétrage de l'onduleur\n• Monitoring à distance et mise à jour logiciel\n• Rapport d'intervention détaillé" },
      { _key: 'pv-faq3', question: "Quelle est la différence entre entretien technique et nettoyage PV Clean ?", answer: "L'entretien technique est un contrôle complet de l'installation (électrique, mécanique, monitoring). Le PV Clean est un nettoyage professionnel des panneaux pour éliminer les salissures. Les deux sont complémentaires pour un rendement maximal." },
      { _key: 'pv-faq4', question: "L'entretien de panneaux solaires est-il obligatoire en Suisse ?", answer: "Il n'existe pas d'obligation légale stricte pour les particuliers. Cependant, l'entretien est fortement recommandé pour :\n\n• Maintenir les garanties fabricant et installateur\n• Assurer la sécurité de votre installation\n• Optimiser votre retour sur investissement\n• Respecter les exigences de votre assurance habitation" },
    ],
  })

  // ── BOILER ──────────────────────────────────────────────────────────
  console.log('\n── Boiler thermodynamique ──')
  const boilerIntroImg = await upload('Photos HD/Photos produits/Boiler/1.webp', 'Boiler intro')
  const boilerIconImg = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-15.webp', 'Boiler icon')
  const boilerDetail1 = await upload('Photos HD/Visuels Technique/Technique - Boiler/Ajustement de rétroéclairage.webp', 'Boiler detail1')

  await patchService('boiler-thermodynamique', {
    accentColor: '#E8552C',
    introHeadline: "Assurez une production d'eau chaude efficace et durable grâce à l'entretien de votre boiler thermodynamique",
    introImage: boilerIntroImg,
    iconImage: boilerIconImg,
    detailImages: [boilerDetail1],
    pricingHeader: 'À partir de CHF 390.-/ an\u00a0!',
    plans: [
      { _key: 'bt-1', num: '1', title: 'ZEN ACCÈS', subtitle: 'La tranquillité essentielle', features: ['Compte client online', 'Entretien tous les 2 ans'], price: '390 CHF / 2 ans' },
      { _key: 'bt-2', num: '2', title: 'ZEN ÉQUILIBRE', subtitle: 'La couverture complète', features: ['Compte client online', 'Entretien annuel'], price: '450 CHF / an' },
      { _key: 'bt-3', num: '3', title: 'ZEN PLUS', subtitle: 'La sérénité assurée', features: ['Compte client online', 'Entretien annuel', "Dépannage, main d'œuvre et déplacement"], price: '540 CHF / an' },
    ],
    discountBoxes: [
      { _key: 'bt-d1', pct: '10 %', desc: 'Multi-contrat pour', highlight: '2 équipements différents', iconCount: 2 },
      { _key: 'bt-d2', pct: '15 %', desc: 'Multi-contrat à partir de', highlight: '3 équipements différents', iconCount: 3 },
    ],
    disclaimer: "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise.",
    whyTitle: 'Pourquoi entretenir votre boiler thermodynamique ?',
    whyIntro: "Le boiler thermodynamique est un équipement clé de votre confort quotidien. Un entretien régulier permet :",
    whyBullets: [
      "De maintenir une production d'eau chaude efficace et constante toute l'année.",
      "De détecter l'usure des composants (anode, résistance, joints) avant les pannes.",
      "De prévenir l'accumulation de calcaire et les problèmes de corrosion.",
    ],
    faqSectionTitle: "Questions sur l'entretien de votre boiler thermodynamique",
    faqs: [
      { _key: 'bt-faq1', question: "À quelle fréquence faut-il entretenir un boiler thermodynamique ?", answer: "Nous recommandons un entretien annuel pour vérifier l'état général, le circuit frigorifique, le thermostat et les organes de sécurité. Le détartrage est conseillé tous les 2 à 3 ans selon la dureté de l'eau." },
      { _key: 'bt-faq2', question: "Que comprend l'entretien d'un boiler thermodynamique ?", answer: "L'entretien comprend :\n\n• Inspection générale et détection de fuites\n• Nettoyage du boiler et grilles de ventilation\n• Contrôle du circuit frigorifique\n• Vérification du thermostat et des organes de sécurité\n• Optimisation des réglages pour la consommation énergétique\n• Rapport d'intervention" },
      { _key: 'bt-faq3', question: "Quels sont les signes qu'un boiler a besoin d'entretien ?", answer: "Plusieurs signes doivent vous alerter :\n\n• Eau chaude insuffisante ou température instable\n• Bruits inhabituels (claquements, sifflements)\n• Augmentation anormale de la consommation électrique\n• Fuites visibles autour de l'appareil\n• Odeur désagréable de l'eau chaude (signe de bactéries)" },
    ],
  })

  // ── PV CLEAN ──────────────────────────────────────────────────────────
  console.log('\n── PV Clean ──')
  const pvcleanIntroImg = await upload('Photos HD/Visuels Technique/Nettoyage - PV/1789536761.webp', 'PVClean intro')
  const pvcleanIconImg = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-23.webp', 'PVClean icon')

  await patchService('pv-clean', {
    accentColor: '#2a9b96',
    introHeadline: "Retrouvez toute la puissance de vos panneaux solaires avec notre service de nettoyage professionnel",
    introImage: pvcleanIntroImg,
    iconImage: pvcleanIconImg,
    pricingHeader: 'Tarif PV Clean',
    plans: [
      { _key: 'pvc-1', num: '1', title: 'PV CLEAN', subtitle: 'Nettoyage ponctuel', features: ['Dépoussiérage complet', "Nettoyage mécanique à l'eau déminéralisée", 'Application couche protectrice (option)', 'Rapport de nettoyage détaillé'], price: 'CHF 392 min. (8 panneaux)' },
    ],
    disclaimer: "Le tarif minimum de CHF 392 correspond à une intervention pour 8 panneaux. Au-delà, le tarif est de CHF 49 par panneau supplémentaire. TVA comprise.",
    whyTitle: 'Pourquoi nettoyer vos panneaux solaires ?',
    whyIntro: "Des panneaux encrassés perdent jusqu'à 25% de leur rendement. Un nettoyage professionnel permet :",
    whyBullets: [
      "De restituer immédiatement la pleine puissance de votre installation solaire.",
      "D'éliminer les salissures tenaces (fientes, pollen, pollution) que la pluie ne suffit pas à enlever.",
      "De protéger les surfaces avec un traitement hydrophobe qui prolonge la propreté.",
    ],
    faqSectionTitle: "Questions sur le service PV Clean",
    faqs: [
      { _key: 'pvc-faq1', question: 'Combien de panneaux sont nécessaires pour bénéficier du service PV Clean ?', answer: "Notre offre PV Clean est disponible à partir de 8 panneaux, avec un forfait minimum de CHF 392. Au-delà, le tarif est de CHF 49 par panneau supplémentaire." },
      { _key: 'pvc-faq2', question: 'Comment se déroule un nettoyage PV Clean ?', answer: "Notre intervention PV Clean comprend 4 étapes :\n\n1. Dépoussiérage à sec : élimination des poussières grossières, fientes et débris\n2. Nettoyage mécanique humide : lavage à l'eau déminéralisée avec brosses à poils souples\n3. Application d'une couche protectrice (en option) : traitement hydrophobe\n4. Rapport d'intervention : photos avant/après, mesures de production, recommandations" },
      { _key: 'pvc-faq3', question: "Quelle est la différence entre PV Clean et un contrat d'entretien ?", answer: "PV Clean est une intervention ponctuelle de nettoyage, sans engagement. Les contrats d'entretien (Zen Accès, Zen Équilibre, Zen Plus) incluent en plus :\n\n• Une inspection technique complète de l'installation\n• Le diagnostic de l'onduleur et du câblage\n• Un suivi à distance et monitoring\n• Une assistance téléphonique\n\nLe nettoyage PV Clean est disponible seul ou en complément d'un contrat d'entretien." },
      { _key: 'pvc-faq4', question: "Quelle perte de rendement entraîne l'encrassement des panneaux ?", answer: "Des panneaux encrassés peuvent perdre en moyenne 15% de leur production annuelle. Dans certains cas (accumulation importante de poussières, fientes d'oiseaux, pollution industrielle), cette perte peut atteindre 25 à 30%. Un nettoyage professionnel permet de restituer immédiatement la pleine puissance de votre installation." },
    ],
  })

  console.log('\n✓ All 4 service offers seeded!')
}

main().catch((err) => { console.error(err); process.exit(1) })
