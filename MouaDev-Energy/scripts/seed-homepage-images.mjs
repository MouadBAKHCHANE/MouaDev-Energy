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
  // Walk each segment from PUBLIC, resolving Unicode normalization mismatches
  const segments = localPath.split(/[/\\]/)
  let resolved = PUBLIC
  for (const seg of segments) {
    const candidate = path.join(resolved, seg)
    if (existsSync(candidate)) {
      resolved = candidate
      continue
    }
    // Try NFC normalization match in directory listing
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
  console.log('Uploading homepage images...\n')

  // Hero bg
  const heroBg = await upload('Photos HD/Photos d_ambiance/Famille AdobeStock.webp', 'Hero BG')

  // About image
  const aboutImg = await upload('Photos HD/Visuels Technique/Technique - PV/Réparation panneau solaire.webp', 'About')

  // OurServices card images
  const os1Img = await upload('Photos HD/Photos produits/Panneaux solaires/man-worker-firld-by-solar-panels.webp', 'OurServices - PV')
  const os2Img = await upload('Photos HD/Visuels Technique/Technique - PAC/Pompes à chaleur avantages et inconvénients.webp', 'OurServices - PAC')
  const os3Img = await upload('Photos HD/Visuels Technique/Technique - Boiler/Ajustement de rétroéclairage.webp', 'OurServices - Boiler')
  const os4Img = await upload('Photos HD/Visuels Technique/Nettoyage - PV/1789536761.webp', 'OurServices - PV Clean')

  // OurServices card icons
  const iconPV = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-18.webp', 'Icon PV')
  const iconPAC = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-20.webp', 'Icon PAC')
  const iconBoiler = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-15.webp', 'Icon Boiler')
  const iconPVClean = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-23.webp', 'Icon PV Clean')

  // Pricing images
  const pr1Img = await upload('Photos HD/Photos produits/Panneaux solaires/man-showing-thumbs-up-gesture-ie-class-front-roof-with-installed-solar-panels.webp', 'Pricing - PV')
  const pr2Img = await upload('Photos HD/Photos produits/Pompe à chaleur/modern-home-with-grey-heat-pump-unit-mounted-exterior-wall.webp', 'Pricing - PAC')
  const pr3Img = await upload('Photos HD/Visuels Technique/Technique - Boiler/zen-05.webp', 'Pricing - Boiler')
  const pr4Img = await upload('Photos HD/Visuels Technique/Technique - PV/Ouvrier et panneaux solaires.webp', 'Pricing - PV Clean')

  // Process step images
  const ps1Img = await upload('Photos HD/Visuels Technique/Technique - Boiler/Femme vérifiant Boiler.webp', 'Process 1')
  const ps2Img = await upload('Photos HD/Visuels Technique/Technique - PAC/technician-discussing-heat-pump-setup-with-homeowner-garden.webp', 'Process 2')
  const ps3Img = await upload('Photos HD/Visuels Technique/Technique - PAC/Technicien Inspection Pompe Chaleur.webp', 'Process 3')
  const ps4Img = await upload('Photos HD/Photos d_ambiance/iStock Image 1484x707.webp', 'Process 4')

  // Process step icons
  const psIcon1 = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-33.webp', 'Process Icon 1')
  const psIcon4 = await upload('icons/CHARTEGRAPHIQUENAOSERVICE-35.webp', 'Process Icon 4')

  // News article images
  const na1Img = await upload('Photos HD/Visuels Technique/Technique - PV/Entretien panneaux solaires.webp', 'News 1')
  const na2Img = await upload('Photos HD/Visuels Technique/Technique - PAC/Heat pump AdobeStock.webp', 'News 2')
  const na3Img = await upload('Photos HD/Visuels Technique/Technique - Boiler/Boiler AdobeStock.webp', 'News 3')

  console.log('\nPatching homePage with images...')

  await client.patch('homePage').set({
    heroBgImage: heroBg,
    aboutImage: aboutImg,
    ourServicesCards: [
      { _key: 'os1', title: 'Panneaux solaires', image: os1Img, icon: iconPV, link: '/services/panneaux-solaires' },
      { _key: 'os2', title: 'Pompes à chaleur', image: os2Img, icon: iconPAC, link: '/services/pompe-a-chaleur' },
      { _key: 'os3', title: 'Boiler thermodynamique', image: os3Img, icon: iconBoiler, link: '/services/boiler-thermodynamique' },
      { _key: 'os4', title: 'Nettoyage panneaux solaires', image: os4Img, icon: iconPVClean, link: '/services/pv-clean' },
    ],
    slimeCards: [
      { _key: 'sc1', title: 'Panneaux solaires', desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.', icon: iconPV },
      { _key: 'sc2', title: 'Pompes à chaleur', desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.', icon: iconPAC },
      { _key: 'sc3', title: 'Boiler thermodynamique', desc: "Nettoyage et vérification des composants pour une production d'eau chaude efficace.", icon: iconBoiler },
      { _key: 'sc4', title: 'Nettoyage panneaux solaires', desc: 'Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.', icon: iconPVClean },
    ],
    pricingCards: [
      { _key: 'pc1', title: 'PANNEAUX PHOTOVOLTAÏQUES', price: 'À partir de CHF 420.- / an !', image: pr1Img, ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
      { _key: 'pc2', title: 'POMPES À CHALEUR', price: 'À partir de CHF 450.- / an !', image: pr2Img, ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
      { _key: 'pc3', title: 'BOILER THERMODYNAMIQUE', price: 'À partir de CHF 140.- / an !', image: pr3Img, ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
      { _key: 'pc4', title: 'NETTOYAGE DES PANNEAUX PHOTOVOLTAÏQUES', price: '49 CHF', image: pr4Img, ctaText: 'Demander une offre', ctaLink: 'https://form.typeform.com/to/rRhOu7eb' },
    ],
    processSteps: [
      { _key: 'ps1', title: 'Prise de rendez-vous', desc: "Dès votre contrat souscrit en ligne, un expert Zen prendra contact avec vous dans les 48heures pour planifier votre 1ère intervention.", image: ps1Img, icon: psIcon1 },
      { _key: 'ps2', title: 'Diagnostic et intervention', desc: "Nos experts se déplacent avec un équipement de pointe pour entretenir ou dépanner vos installations.", image: ps2Img },
      { _key: 'ps3', title: "Envoi du rapport d'intervention", desc: "Un rapport d'intervention vous sera transmis à la suite de la visite de nos experts.", image: ps3Img },
      { _key: 'ps4', title: 'Suivi en ligne', desc: "Gérez votre contrat, vos rapports d'interventions et vos demandes directement depuis votre espace client Zen.", image: ps4Img, icon: psIcon4 },
    ],
    newsArticles: [
      { _key: 'na1', title: 'Pourquoi entretenir régulièrement ses panneaux photovoltaïques ?', image: na1Img, author: 'Zen Énergie', readTime: '4 min', link: '/blogs/entretien-panneaux-solaires' },
      { _key: 'na2', title: 'Comment bien utiliser sa pompe à chaleur ?', image: na2Img, author: 'Zen Énergie', readTime: '3 min', link: '/blogs/entretien-pompe-a-chaleur' },
      { _key: 'na3', title: 'Pourquoi entretenir son boiler thermodynamique ?', image: na3Img, author: 'Zen Énergie', readTime: '2 min', link: '/blogs/maintenance-boiler' },
    ],
  }).commit()

  console.log('✓ homePage images uploaded and linked successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
