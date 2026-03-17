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

// ═══════════════════════════════════════════════════════════════════════════════
// PANNEAUX SOLAIRES
// ═══════════════════════════════════════════════════════════════════════════════
async function seedPanneauxSolaires() {
  const doc = {
    _id: 'panneauxSolairesPage',
    _type: 'panneauxSolairesPage',
    heroTitle: 'Panneaux Photovoltaïques',
    breadcrumbLabel: 'Panneaux solaires',
    overlayHeadline: 'Maximisez votre production solaire grâce à un entretien régulier de vos panneaux photovoltaïques',
    contractsTitle: 'Panneaux photovoltaïques',
    contractFeatures: [
      { _key: 'f1', label: 'Engagement', acces: '4 ans', equilibre: '4 ans', plus: '4 ans' },
      { _key: 'f2', label: "Périodicité de la visite d'entretien", acces: 'Tous les 2 ans', equilibre: 'Annuel', plus: 'Annuel' },
      { _key: 'f3', label: "Attestation d'entretien", acces: '✓', equilibre: '✓', plus: '✓' },
      { _key: 'f4', label: 'Compte client online', acces: '✓', equilibre: '✓', plus: '✓' },
      { _key: 'f5', label: "Dépannage, main d'œuvre et déplacement", acces: '✗', equilibre: '✗', plus: '✓' },
    ],
    discountHeadline: 'Vous possédez plusieurs équipements différents ?',
    discountText: "sur la 1ère année de contrat à partir de 2 contrats d'entretien souscrits !",
    discountBadge: '10 %',
    disclaimer: "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client et ne sont pas incluses dans les contrats d'entretien. En cas de remplacement de pièces (main-d'œuvre et pièce non couvertes sauf Zen Plus qui couvre la main-d'œuvre et le déplacement). Les tarifs indiqués sont donnés à titre indicatif et peuvent varier en fonction de la configuration de l'installation, de son accessibilité et de sa localisation géographique. Un devis personnalisé sera établi après étude de votre dossier. Les interventions de dépannage du contrat Zen Plus couvrent la main-d'œuvre et le déplacement du technicien ; les pièces de rechange restent à la charge du client.",
    pvCleanTitle: 'Pensez à faire nettoyer vos panneaux solaires par un professionnel',
    pvCleanIntro: [
      "La garantie de la performance maximale de votre installation photovoltaïque repose sur un nettoyage professionnel régulier. En effet, environ 15% de production annuelle sont en moyenne perdus à cause de l'encrassement des panneaux (poussières, fientes d'oiseaux, pollen, pollution atmosphérique). Ces résidus forment une couche opaque qui réduit la captation de lumière et peut entraîner des phénomènes de surchauffe locale (hot spots) endommageant les cellules photovoltaïques.",
      "Notre service de nettoyage spécialisé utilise des techniques de pointe (eau déminéralisée, brosses rotatives à poils souples, perches télescopiques professionnelles) pour restaurer la pleine capacité de production de vos panneaux sans risque de rayure ou de détérioration des traitements antireflet. Chaque intervention est documentée avec un rapport complet comprenant des photos avant/après et des mesures de rendement."
    ],
    pvCleanFeatures: [
      'Nettoyage simple : dépoussiérage',
      "Nettoyage mécanique : utilisation de perches télescopiques ou brosses rotatives et d'eau déminéralisée.",
      "Pose d'une couche protectrice",
      'Rapport de nettoyage complet',
    ],
    pvCleanDisclaimer: '* Offre tarifaire valable pour une intervention à partir de 8 panneaux.',
    whyTitle: 'Pourquoi dois-je entretenir régulièrement mes panneaux photovoltaïques ?',
    whyIntro: "L'entretien régulier de vos panneaux photovoltaïques est essentiel pour garantir leur performance optimale et prolonger leur durée de vie. En Suisse, les conditions climatiques variées (neige, pluie, pollen, poussières) accélèrent l'encrassement et peuvent masquer des micro-défauts invisibles à l'œil nu. Un entretien régulier permet :",
    whyBullets: [
      "D'optimiser la production d'énergie en assurant que vos panneaux captent un maximum de lumière.",
      "De prévenir les dommages, comme les microfissures ou la corrosion des connecteurs, qui peuvent entraîner des pannes coûteuses.",
      "De répondre aux exigences de garantie, car certains fabricants demandent un entretien régulier pour maintenir la couverture.",
    ],
    faqTitle: "Questions sur l'entretien de vos panneaux",
    faqs: [
      {
        _key: 'faq1',
        question: 'À quelle fréquence dois-je faire nettoyer mes panneaux photovoltaïques ?',
        answer: "En règle générale, un nettoyage annuel est recommandé pour la majorité des installations. Cependant, plusieurs facteurs peuvent nécessiter une fréquence plus élevée :\n\n• En zone rurale ou agricole (poussières, pollen, fientes d'oiseaux) : 2 fois par an\n• En zone urbaine ou industrielle (pollution, suie) : 1 à 2 fois par an\n• En zone de montagne avec chutes de neige importantes : après chaque enneigement prolongé\n\nDes facteurs spécifiques comme une faible inclinaison des panneaux (< 15°) ou la proximité d'arbres peuvent également justifier un nettoyage plus régulier.",
      },
      {
        _key: 'faq2',
        question: 'Comment se déroule un entretien et une maintenance Zen ?',
        answer: "Notre intervention se déroule en 3 phases :\n\n1. Sur le toit :\n• Inspection visuelle des panneaux (micro-fissures, délamination, ombrage)\n• Vérification des fixations mécaniques et de l'étanchéité\n• Contrôle des câbles et des connecteurs\n• Nettoyage professionnel des surfaces\n• Mesure de la tension et du courant\n\n2. En bas de l'habitat :\n• Vérification du tableau électrique\n• Contrôle et diagnostic de l'onduleur\n• Vérification du compteur de production\n\n3. Monitoring à distance (selon contrat) :\n• Analyse des courbes de production\n• Comparaison avec les données météo\n• Rapport d'intervention complet",
      },
      {
        _key: 'faq3',
        question: 'Quelle est la durée de vie des panneaux photovoltaïques régulièrement entretenus ?',
        answer: "Les panneaux photovoltaïques modernes ont une durée de vie estimée entre 25 et 30 ans. Avec un entretien régulier et professionnel, vous pouvez maintenir :\n\n• 90 à 95 % du rendement initial après 10 ans\n• 80 à 90 % du rendement initial après 25 ans\n\nSans entretien, la dégradation s'accélère significativement.",
      },
      {
        _key: 'faq4',
        question: "Quelles sont les étapes de nettoyage de l'offre PV Clean ?",
        answer: "Notre offre PV Clean comprend 4 étapes clés :\n\n1. Dépoussiérage à sec\n2. Nettoyage mécanique humide à l'eau déminéralisée\n3. Application d'une couche protectrice (en option)\n4. Rapport d'intervention : photos avant/après, mesures de production\n\nL'offre PV Clean est disponible sans contrat d'entretien, à partir de CHF 392 pour 8 panneaux.",
      },
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Panneaux Solaires page seeded')
}

// ═══════════════════════════════════════════════════════════════════════════════
// POMPE À CHALEUR
// ═══════════════════════════════════════════════════════════════════════════════
async function seedPompeChaleur() {
  const doc = {
    _id: 'pompeChaleurPage',
    _type: 'pompeChaleurPage',
    heroTitle: 'Pompe à Chaleur',
    breadcrumbLabel: 'Pompe à chaleur',
    overlayHeadline: "Profitez d'un confort thermique optimal grâce à l'entretien régulier de votre pompe à chaleur",
    contractsTitle: 'Pompes à chaleur',
    contractFeatures: [
      { _key: 'f1', label: 'Engagement', acces: '4 ans', equilibre: '4 ans', plus: '4 ans' },
      { _key: 'f2', label: "Périodicité de la visite d'entretien", acces: 'Tous les 2 ans', equilibre: 'Annuel', plus: 'Annuel' },
      { _key: 'f3', label: "Attestation d'entretien", acces: '✓', equilibre: '✓', plus: '✓' },
      { _key: 'f4', label: 'Compte client online', acces: '✓', equilibre: '✓', plus: '✓' },
      { _key: 'f5', label: "Dépannage, main d'œuvre et déplacement", acces: '✗', equilibre: '✗', plus: '✓' },
    ],
    discountHeadline: 'Vous possédez plusieurs équipements différents ?',
    discountBoxes: [
      { _key: 'd1', pct: '10%', desc: 'sur votre contrat pour 2 pompes à chaleur', iconCount: 2 },
      { _key: 'd2', pct: '15%', desc: 'à partir de 3 pompes à chaleur', iconCount: 3 },
    ],
    disclaimer: "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client et ne sont pas incluses dans les contrats d'entretien. Les tarifs indiqués sont donnés à titre indicatif et peuvent varier en fonction de la configuration de l'installation, de son accessibilité et de sa localisation géographique. Un devis personnalisé sera établi après étude de votre dossier. Les interventions de dépannage du contrat Zen Plus couvrent la main-d'œuvre et le déplacement du technicien ; les pièces de rechange restent à la charge du client.",
    whyTitle: 'Pourquoi dois-je entretenir régulièrement ma pompe à chaleur ?',
    whyIntro: "L'entretien régulier de votre pompe à chaleur est indispensable pour garantir son efficacité et prolonger sa durée de vie. Un entretien régulier permet :",
    whyBullets: [
      "De maintenir un coefficient de performance (COP) optimal et réduire votre consommation énergétique.",
      "De détecter et corriger les pertes de fluide frigorigène avant qu'elles n'endommagent le compresseur.",
      "De respecter les obligations légales suisses en matière d'entretien des équipements thermiques.",
    ],
    faqTitle: "Questions sur l'entretien de votre pompe à chaleur",
    faqs: [
      {
        _key: 'faq1',
        question: 'À quelle fréquence dois-je faire entretenir ma pompe à chaleur ?',
        answer: "Un entretien annuel est recommandé pour garantir le bon fonctionnement de votre pompe à chaleur. Certaines situations nécessitent une attention particulière :\n\n• Installation de plus de 5 ans : contrôle semestriel recommandé\n• Pompe air/eau en zone poussiéreuse : nettoyage des filtres tous les 3 mois\n• Après un hiver rigoureux : vérification du circuit hydraulique",
      },
      {
        _key: 'faq2',
        question: "Est-ce que l'entretien de ma pompe à chaleur est obligatoire ?",
        answer: "En Suisse, l'entretien régulier des pompes à chaleur est fortement recommandé et dans certains cas obligatoire :\n\n• Les installations contenant plus de 3 kg de fluide frigorigène doivent être contrôlées annuellement\n• La plupart des fabricants conditionnent leur garantie à un entretien régulier\n• Certains cantons imposent des obligations spécifiques d'entretien",
      },
      {
        _key: 'faq3',
        question: "Comment se déroule une intervention d'entretien ?",
        answer: "Notre intervention complète comprend :\n\n• Contrôle visuel général de l'installation\n• Vérification du circuit frigorifique et des pressions\n• Nettoyage de l'évaporateur et du condenseur\n• Contrôle du compresseur et des composants électriques\n• Vérification du circuit hydraulique\n• Test des sécurités et des régulations\n• Mesure des performances (COP)\n• Rapport d'intervention détaillé",
      },
      {
        _key: 'faq4',
        question: 'Quelle est la durée de vie de ma pompe à chaleur régulièrement entretenue ?',
        answer: "Une pompe à chaleur bien entretenue a une durée de vie de 15 à 20 ans. Sans entretien régulier, cette durée peut être réduite de moitié, avec une baisse progressive du rendement de 5 à 10% par an.",
      },
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Pompe à Chaleur page seeded')
}

// ═══════════════════════════════════════════════════════════════════════════════
// BOILER THERMODYNAMIQUE
// ═══════════════════════════════════════════════════════════════════════════════
async function seedBoiler() {
  const doc = {
    _id: 'boilerPage',
    _type: 'boilerPage',
    heroTitle: 'Boiler Thermodynamique',
    breadcrumbLabel: 'Boiler thermodynamique',
    overlayHeadline: "Optimisez votre production d'eau chaude grâce à l'entretien de votre boiler thermodynamique",
    contractsTitle: 'Boiler thermodynamique',
    contractFeatures: [
      { _key: 'f1', label: 'Engagement', acces: '4 ans', equilibre: '4 ans', plus: '4 ans' },
      { _key: 'f2', label: "Périodicité de la visite d'entretien", acces: 'Tous les 2 ans', equilibre: 'Annuel', plus: 'Annuel' },
      { _key: 'f3', label: "Attestation d'entretien", acces: '✓', equilibre: '✓', plus: '✓' },
      { _key: 'f4', label: 'Compte client online', acces: '✓', equilibre: '✓', plus: '✓' },
      { _key: 'f5', label: "Dépannage, main d'œuvre et déplacement", acces: '✗', equilibre: '✗', plus: '✓' },
    ],
    discountHeadline: 'Vous possédez plusieurs équipements différents ?',
    discountText: "sur la 1ère année de contrat à partir de 2 contrats d'entretien souscrits !",
    discountBadge: '10 %',
    disclaimer: "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client et ne sont pas incluses dans les contrats d'entretien. Les tarifs indiqués sont donnés à titre indicatif et peuvent varier en fonction de la configuration de l'installation, de son accessibilité et de sa localisation géographique. Un devis personnalisé sera établi après étude de votre dossier. Les interventions de dépannage du contrat Zen Plus couvrent la main-d'œuvre et le déplacement du technicien ; les pièces de rechange restent à la charge du client.",
    whyTitle: 'Pourquoi dois-je entretenir régulièrement mon boiler thermodynamique ?',
    whyIntro: "L'entretien régulier de votre boiler thermodynamique est essentiel pour garantir une production d'eau chaude efficace et économique. Un entretien régulier permet :",
    whyBullets: [
      "De maintenir le coefficient de performance (COP) optimal et réduire votre consommation électrique.",
      "De prévenir l'entartrage et la corrosion qui dégradent les composants internes et réduisent le volume d'eau chaude disponible.",
      "D'assurer la sécurité de l'installation en vérifiant les organes de protection (soupape, anode, thermostat de sécurité).",
    ],
    faqTitle: "Questions sur l'entretien du boiler thermodynamique",
    faqs: [
      {
        _key: 'faq1',
        question: 'À quelle fréquence dois-je faire entretenir mon boiler thermodynamique ?',
        answer: "Un entretien tous les 12 à 24 mois est recommandé selon l'utilisation et la dureté de l'eau. En zone calcaire, un détartrage annuel est conseillé.",
      },
      {
        _key: 'faq2',
        question: "Comment se déroule une intervention d'entretien ?",
        answer: "Notre intervention comprend 6 étapes :\n\n1. Inspection visuelle complète\n2. Nettoyage de l'évaporateur et du ventilateur\n3. Contrôle des pressions et du circuit frigorifique\n4. Vérification de la soupape de sécurité et de l'anode\n5. Test des performances et optimisation des réglages\n6. Rapport d'intervention détaillé",
      },
      {
        _key: 'faq3',
        question: 'Quelle est la durée de vie de mon boiler thermodynamique régulièrement entretenu ?',
        answer: "Un boiler thermodynamique bien entretenu a une durée de vie de 15 à 20 ans. L'entretien régulier permet de maintenir un rendement optimal et de prévenir les pannes coûteuses.",
      },
      {
        _key: 'faq4',
        question: 'Quels sont les signes indiquant que mon boiler nécessite un entretien ?',
        answer: "Plusieurs signes doivent vous alerter :\n\n• Production d'eau chaude insuffisante ou irrégulière\n• Bruits inhabituels (claquements, vibrations)\n• Augmentation de la consommation électrique\n• Présence de traces de calcaire ou de rouille\n• Fuites d'eau autour de l'appareil",
      },
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ Boiler Thermodynamique page seeded')
}

// ═══════════════════════════════════════════════════════════════════════════════
// PV CLEAN
// ═══════════════════════════════════════════════════════════════════════════════
async function seedPvClean() {
  const doc = {
    _id: 'pvCleanPage',
    _type: 'pvCleanPage',
    heroTitle: 'PV Clean — Nettoyage',
    breadcrumbLabel: 'PV Clean — Nettoyage',
    overlayHeadline: 'Retrouvez toute la puissance de vos panneaux solaires avec notre offre PV Clean',
    offerTitle: 'OFFRE PV CLEAN :',
    offerSubtitle: "L'EFFICACITÉ RETROUVÉE DE VOS PANNEAUX PHOTOVOLTAÏQUES !",
    offerLabel: 'Ce que contient votre offre PV Clean :',
    offerFeatures: [
      'Nettoyage simple : dépoussiérage',
      "Nettoyage mécanique : utilisation de perches télescopiques ou brosses rotatives et d'eau déminéralisée.",
      "Pose d'une couche protectrice",
      'Rapport de nettoyage complet',
    ],
    offerDisclaimer: '* Offre tarifaire valable pour une intervention à partir de 8 panneaux.',
    whyTitle: 'Pourquoi faire nettoyer ses panneaux solaires par un professionnel ?',
    whyIntro: "Des panneaux encrassés perdent jusqu'à 25% de leur rendement. Un nettoyage professionnel permet :",
    whyBullets: [
      "De restituer immédiatement la pleine puissance de votre installation en éliminant poussières, fientes et dépôts calcaires.",
      "De préserver l'intégrité des panneaux grâce à des techniques de nettoyage adaptées, sans rayures ni produits agressifs.",
      "D'améliorer la durabilité de votre installation en appliquant une couche protectrice hydrophobe qui réduit l'accumulation future de salissures.",
    ],
    faqTitle: 'Questions sur le nettoyage PV Clean',
    faqs: [
      {
        _key: 'faq1',
        question: 'Combien de panneaux sont nécessaires pour bénéficier du service PV Clean ?',
        answer: "Notre offre PV Clean est disponible à partir de 8 panneaux, avec un forfait minimum de CHF 392. Au-delà, le tarif est de CHF 49 par panneau supplémentaire.",
      },
      {
        _key: 'faq2',
        question: 'Comment se déroule un nettoyage PV Clean ?',
        answer: "Notre intervention PV Clean comprend 4 étapes :\n\n1. Dépoussiérage à sec\n2. Nettoyage mécanique humide à l'eau déminéralisée avec brosses à poils souples\n3. Application d'une couche protectrice (en option)\n4. Rapport d'intervention : photos avant/après, mesures de production, recommandations",
      },
      {
        _key: 'faq3',
        question: "Quelle est la différence entre PV Clean et un contrat d'entretien ?",
        answer: "PV Clean est une intervention ponctuelle de nettoyage, sans engagement. Les contrats d'entretien (Zen Accès, Zen Équilibre, Zen Plus) incluent en plus :\n\n• Une inspection technique complète\n• Le diagnostic de l'onduleur et du câblage\n• Un suivi à distance et monitoring\n• Une assistance téléphonique",
      },
      {
        _key: 'faq4',
        question: "Quelle perte de rendement entraîne l'encrassement des panneaux ?",
        answer: "Des panneaux encrassés peuvent perdre en moyenne 15% de leur production annuelle. Dans certains cas, cette perte peut atteindre 25 à 30%. Un nettoyage professionnel permet de restituer immédiatement la pleine puissance de votre installation.",
      },
    ],
  }

  await client.createOrReplace(doc)
  console.log('✅ PV Clean page seeded')
}

// ═══════════════════════════════════════════════════════════════════════════════
// RUN ALL
// ═══════════════════════════════════════════════════════════════════════════════
async function main() {
  console.log('🌱 Seeding service pages...\n')
  await seedPanneauxSolaires()
  await seedPompeChaleur()
  await seedBoiler()
  await seedPvClean()
  console.log('\n✅ All service pages seeded!')
}

main().catch(console.error)
