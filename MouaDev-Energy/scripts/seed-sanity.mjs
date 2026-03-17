/**
 * Seed script — pushes all hardcoded data from lib/data.ts into Sanity.
 *
 * Usage:  node scripts/seed-sanity.mjs
 *
 * Documents created:
 *   - 4 × service
 *   - 6 × blog
 *   - 5 × faq
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// ── Services ──────────────────────────────────────────────────────────────────

const services = [
  {
    _id: 'service-panneaux-solaires',
    _type: 'service',
    slug: { _type: 'slug', current: 'panneaux-solaires' },
    title: 'Entretien panneaux solaires',
    shortDesc: 'Maintenance professionnelle de vos panneaux photovoltaïques pour garantir un rendement optimal année après année.',
    intro: 'Vos panneaux solaires sont un investissement à long terme. Un entretien régulier est essentiel pour maintenir leur performance et prolonger leur durée de vie.',
    body: [
      "Avec le temps, la poussière, le pollen, les fientes d'oiseaux et les résidus de neige s'accumulent sur la surface des panneaux, réduisant leur capacité à capter la lumière solaire. Un panneau encrassé peut perdre jusqu'à 15 % de son rendement annuel.",
      "Nos techniciens qualifiés réalisent un contrôle complet de votre installation : inspection visuelle, vérification des connexions électriques, test de performance de l'onduleur et nettoyage des panneaux. Un rapport d'intervention détaillé vous est remis après chaque visite.",
    ],
    includes: [
      'Inspection visuelle complète des panneaux et du câblage',
      "Test de performance et vérification de l'onduleur",
      'Nettoyage professionnel des panneaux',
      "Vérification des connexions et de l'étanchéité",
      'Contrôle de la structure de fixation',
      "Rapport d'intervention détaillé avec recommandations",
    ],
    steps: [
      { _key: 's1', title: 'Prise de rendez-vous', desc: 'Planifiez votre entretien en ligne ou par téléphone selon vos disponibilités.' },
      { _key: 's2', title: 'Inspection visuelle', desc: 'Nos techniciens inspectent les panneaux, le câblage et les fixations.' },
      { _key: 's3', title: 'Tests électriques', desc: 'Mesure de la tension, du courant et comparaison avec les valeurs attendues.' },
      { _key: 's4', title: 'Nettoyage', desc: 'Les panneaux sont nettoyés avec un système à eau pure et des brosses adaptées.' },
      { _key: 's5', title: 'Rapport', desc: 'Vous recevez un rapport complet avec les données de performance et les recommandations.' },
      { _key: 's6', title: 'Suivi', desc: 'Les éventuelles réparations sont planifiées et réalisées rapidement.' },
    ],
    heroImg: '/Photos HD/Visuels Technique/Technique - PV/Entretien panneaux solaires.webp',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp',
    order: 1,
  },
  {
    _id: 'service-pompe-a-chaleur',
    _type: 'service',
    slug: { _type: 'slug', current: 'pompe-a-chaleur' },
    title: 'Entretien pompe à chaleur',
    shortDesc: "Maintenance régulière de votre pompe à chaleur pour assurer son efficacité énergétique et sa longévité.",
    intro: "La pompe à chaleur est au cœur de votre confort thermique. Un entretien professionnel régulier garantit son bon fonctionnement et réduit votre consommation d'énergie.",
    body: [
      "Sans entretien, l'efficacité de l'échange thermique diminue, forçant l'appareil à fonctionner plus longtemps et augmentant votre consommation électrique de 20 à 30 %. Les filtres encrassés, les câbles défectueux et les échangeurs bouchés accélèrent l'usure des composants.",
      "Nos experts réalisent un diagnostic complet de votre pompe à chaleur : vérification du circuit frigorifique, contrôle des performances, nettoyage des filtres et des échangeurs, et ajustement des paramètres de fonctionnement.",
    ],
    includes: [
      'Vérification du circuit frigorifique et des pressions',
      'Nettoyage des filtres et des échangeurs thermiques',
      'Contrôle des performances et du COP',
      'Vérification des connexions électriques',
      'Ajustement des paramètres de régulation',
      "Rapport d'intervention détaillé avec recommandations",
    ],
    steps: [
      { _key: 's1', title: 'Prise de rendez-vous', desc: "Contactez-nous pour fixer une date d'intervention à votre convenance." },
      { _key: 's2', title: 'Diagnostic', desc: 'Nos techniciens réalisent un diagnostic complet de votre installation.' },
      { _key: 's3', title: 'Nettoyage', desc: 'Filtres, échangeurs et composants sont nettoyés en profondeur.' },
      { _key: 's4', title: 'Contrôle', desc: 'Les performances et les pressions sont mesurées et comparées aux normes.' },
      { _key: 's5', title: 'Optimisation', desc: 'Les réglages sont ajustés pour un fonctionnement optimal.' },
      { _key: 's6', title: 'Rapport', desc: "Un compte-rendu détaillé vous est remis avec l'état de l'installation." },
    ],
    heroImg: '/Photos HD/Visuels Technique/Technique - PAC/Heat pump AdobeStock.webp',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp',
    order: 2,
  },
  {
    _id: 'service-boiler-thermodynamique',
    _type: 'service',
    slug: { _type: 'slug', current: 'boiler-thermodynamique' },
    title: 'Entretien boiler thermodynamique',
    shortDesc: "Maintenance de votre boiler thermodynamique pour une production d'eau chaude efficace et hygiénique.",
    intro: "Le boiler thermodynamique est une solution économique pour la production d'eau chaude sanitaire. Un entretien régulier est indispensable pour maintenir ses performances et garantir la qualité de l'eau.",
    body: [
      "L'accumulation de calcaire réduit le transfert de chaleur et force l'appareil à fonctionner plus longtemps, augmentant votre consommation énergétique. Un boiler bien entretenu peut durer 15 à 20 ans, contre 8 à 10 ans sans suivi.",
      "Notre maintenance inclut le détartrage, la vérification de l'anode de protection, le contrôle des températures pour prévenir le risque de légionellose, et l'inspection complète du système thermodynamique.",
    ],
    includes: [
      'Détartrage du ballon et de la résistance',
      "Vérification et remplacement de l'anode de protection",
      'Contrôle des températures et prévention légionelle',
      'Inspection du système thermodynamique',
      'Vérification des joints et des connexions',
      "Rapport d'intervention détaillé avec recommandations",
    ],
    steps: [
      { _key: 's1', title: 'Prise de rendez-vous', desc: 'Planifiez votre entretien selon vos disponibilités.' },
      { _key: 's2', title: 'Inspection', desc: "Vérification visuelle et technique de l'ensemble du boiler." },
      { _key: 's3', title: 'Détartrage', desc: 'Nettoyage en profondeur du ballon et de la résistance.' },
      { _key: 's4', title: 'Contrôle sanitaire', desc: 'Vérification des températures pour garantir une eau saine.' },
      { _key: 's5', title: 'Tests', desc: 'Contrôle du bon fonctionnement du système thermodynamique.' },
      { _key: 's6', title: 'Rapport', desc: "Remise d'un rapport détaillé avec l'état de votre installation." },
    ],
    heroImg: '/Photos HD/Visuels Technique/Technique - Boiler/Boiler AdobeStock.webp',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp',
    order: 3,
  },
  {
    _id: 'service-pv-clean',
    _type: 'service',
    slug: { _type: 'slug', current: 'pv-clean' },
    title: 'PV Clean — Nettoyage panneaux solaires',
    shortDesc: "Service de nettoyage professionnel ponctuel pour redonner à vos panneaux solaires leur pleine capacité de production.",
    intro: "Un panneau propre est un panneau performant. Notre service PV Clean élimine toutes les impuretés qui réduisent votre production d'énergie solaire.",
    body: [
      "La poussière, la pollution, les fientes d'oiseaux et les résidus végétaux forment une couche opaque qui peut réduire la production de vos panneaux jusqu'à 15 %. Un nettoyage professionnel restaure immédiatement leur rendement optimal.",
      "Nos équipes utilisent un système à eau pure et des brosses souples spécialement conçues pour les panneaux solaires — aucun produit chimique qui pourrait endommager le revêtement ou annuler votre garantie. Une inspection visuelle est réalisée pendant l'intervention.",
    ],
    includes: [
      'Nettoyage à l\'eau pure sans produits chimiques',
      'Brosses souples adaptées aux panneaux solaires',
      'Inspection visuelle pendant le nettoyage',
      'Élimination des débris sur les fixations et gouttières',
      'Comparaison avant/après de la production',
      "Rapport de service après chaque intervention",
    ],
    steps: [
      { _key: 's1', title: 'Réservation', desc: 'Réservez votre nettoyage en ligne ou par téléphone.' },
      { _key: 's2', title: 'Inspection préalable', desc: "Vérification de l'état des panneaux avant le nettoyage." },
      { _key: 's3', title: 'Nettoyage', desc: "Les panneaux sont nettoyés avec de l'eau pure et des brosses souples." },
      { _key: 's4', title: 'Rinçage', desc: 'Un rinçage final élimine tout résidu pour un résultat impeccable.' },
      { _key: 's5', title: 'Vérification', desc: 'Comparaison de la production avant et après nettoyage.' },
      { _key: 's6', title: 'Rapport', desc: "Un rapport de service vous est envoyé après l'intervention." },
    ],
    heroImg: '/Photos HD/Visuels Technique/Nettoyage - PV/man-clean-up-solar-panels-that-are-dirty-with-dust-birds-droppings.webp',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp',
    order: 4,
  },
]

// ── Blogs ─────────────────────────────────────────────────────────────────────

const blogs = [
  {
    _id: 'blog-entretien-panneaux-solaires',
    _type: 'blog',
    slug: { _type: 'slug', current: 'entretien-panneaux-solaires' },
    title: 'Pourquoi entretenir régulièrement ses panneaux photovoltaïques ?',
    excerpt: "Les panneaux photovoltaïques sont une solution efficace et durable. Découvrez pourquoi un entretien régulier est indispensable pour garantir leur performance et leur longévité.",
    coverImg: '/Photos HD/Visuels Technique/Technique - PV/Entretien panneaux solaires.webp',
    date: '10 janvier 2026',
    category: 'Panneaux solaires',
    readTime: '4 min de lecture',
    sections: [
      {
        _key: 'b1s1',
        heading: "Maximiser votre production d'énergie",
        body: "Le climat suisse présente des particularités qui influencent directement la performance des panneaux solaires. Divers éléments comme la poussière, le pollen, les feuilles mortes ou encore les fientes d'oiseaux ou les résidus de neige peuvent s'accumuler sur la surface des panneaux solaires. Une couche de saleté, même fine, réduit la quantité de lumière captée et diminue ainsi la production d'électricité.\n\nUn panneau encrassé peut perdre jusqu'à 15 % de son rendement énergétique annuel. Un entretien régulier permet de maintenir une production optimale et d'optimiser le retour sur investissement de votre installation.",
      },
      {
        _key: 'b1s2',
        heading: 'Prolonger la durée de vie de vos panneaux',
        body: "Les panneaux photovoltaïques sont conçus avec une durée de vie de 25 à 30 ans, voire plus, mais leur longévité dépend directement de leur entretien.\n\nSans maintenance, des problèmes tels que des microfissures, des infiltrations d'eau ou une corrosion prématurée peuvent apparaître. Ces défauts peuvent accélérer le vieillissement des cellules photovoltaïques et nécessiter des réparations coûteuses. Un entretien préventif permet de détecter ces anomalies à temps et d'éviter une détérioration prématurée de votre installation.",
      },
      {
        _key: 'b1s3',
        heading: 'Assurer la sécurité et la conformité de votre installation',
        body: "Un mauvais entretien peut engendrer des risques électriques ou mécaniques. Une maintenance professionnelle inclut des vérifications de sécurité essentielles pour assurer un fonctionnement sans danger de votre système.",
        list: [
          'Câbles défectueux ou mal serrés pouvant causer des courts-circuits',
          "Infiltrations d'eau favorisant la corrosion des connexions électriques",
          "Présence de mousses et lichens, augmentant le risque d'inflammabilité",
        ],
      },
      {
        _key: 'b1s4',
        heading: 'Respecter les exigences de garantie des fabricants',
        body: "Certains fabricants de panneaux photovoltaïques demandent un entretien régulier pour que leur garantie reste valide. Ne pas respecter ces préconisations peut entraîner une perte de garantie en cas de panne ou de dysfonctionnement.",
      },
      {
        _key: 'b1s5',
        heading: "Réduire les coûts de maintenance et d'intervention",
        body: "Un entretien régulier évite des pannes coûteuses et prolonge la durée de vie des équipements annexes comme l'onduleur et les batteries de stockage. Mieux vaut investir dans un entretien préventif que de devoir remplacer des composants prématurément.\n\nFaites confiance à Zen Énergie Services Suisse pour l'entretien de vos panneaux photovoltaïques grâce à nos contrats d'entretien adaptés à vos besoins.",
      },
    ],
  },
  {
    _id: 'blog-entretien-pompe-a-chaleur',
    _type: 'blog',
    slug: { _type: 'slug', current: 'entretien-pompe-a-chaleur' },
    title: 'Comment bien utiliser sa pompe à chaleur ?',
    excerpt: "La pompe à chaleur est une solution de chauffage performante et écologique. Adoptez les bons réflexes au quotidien pour en tirer le meilleur parti et réduire votre consommation d'énergie.",
    coverImg: '/Photos HD/Visuels Technique/Technique - PAC/Heat pump AdobeStock.webp',
    date: '20 janvier 2026',
    category: 'Pompe à chaleur',
    readTime: '3 min de lecture',
    sections: [
      {
        _key: 'b2s1',
        heading: 'Régler correctement la température de consigne',
        body: "L'un des avantages majeurs d'une pompe à chaleur est sa capacité à maintenir une température stable tout en consommant peu d'énergie. Cependant, un mauvais réglage peut entraîner une surconsommation. Évitez d'augmenter la température de plusieurs degrés en pensant chauffer plus vite — une PAC fonctionne de manière progressive.",
        list: [
          '19-21°C dans les pièces de vie (salon, cuisine, bureau)',
          '17-18°C dans les chambres pour un bon confort nocturne',
          '16°C dans les zones peu utilisées (buanderie, couloirs)',
        ],
      },
      {
        _key: 'b2s2',
        heading: 'Ne pas éteindre sa pompe à chaleur en hiver',
        body: "Contrairement aux systèmes de chauffage classiques, une PAC fonctionne mieux lorsqu'elle est en régime continu à basse température.\n\nÉvitez de couper complètement votre PAC la nuit ou en votre absence prolongée. Privilégiez une réduction progressive de la température, plutôt qu'un arrêt total.",
      },
      {
        _key: 'b2s3',
        heading: "Optimiser l'isolation de votre logement",
        body: "Une pompe à chaleur performante ne sera efficace que si votre habitation est bien isolée. Une mauvaise isolation entraîne des déperditions thermiques, obligeant votre PAC à fonctionner plus longtemps et à consommer plus. Un logement mal isolé peut entraîner une perte de chaleur de 20 à 30 %.",
        list: [
          "L'isolation des fenêtres et des portes",
          "L'étanchéité des murs et du toit",
          "L'utilisation de rideaux thermiques en hiver",
        ],
      },
      {
        _key: 'b2s4',
        heading: 'Entretenir régulièrement votre pompe à chaleur',
        body: "Une pompe à chaleur bien entretenue est plus efficace, plus économique et plus durable. Un entretien professionnel est fortement recommandé — il garantira le bon fonctionnement de votre installation sur le long terme.\n\nZen Énergie Services Suisse propose des contrats d'entretien sur mesure, adaptés pour assurer la longévité et l'efficacité de votre pompe à chaleur. Un réseau d'experts proches de chez vous dans toute la Suisse romande.",
      },
    ],
  },
  {
    _id: 'blog-maintenance-boiler',
    _type: 'blog',
    slug: { _type: 'slug', current: 'maintenance-boiler' },
    title: 'Pourquoi entretenir son boiler thermodynamique ?',
    excerpt: "Le boiler thermodynamique est une solution efficace pour produire de l'eau chaude sanitaire. Découvrez pourquoi un entretien régulier est indispensable pour maintenir ses performances et sa longévité.",
    coverImg: '/Photos HD/Visuels Technique/Technique - Boiler/Boiler AdobeStock.webp',
    date: '1 février 2026',
    category: 'Boiler',
    readTime: '2 min de lecture',
    sections: [
      {
        _key: 'b3s1',
        heading: "Maintenir un rendement optimal et réduire sa consommation d'énergie",
        body: "Le boiler thermodynamique utilise une pompe à chaleur pour chauffer l'eau, un processus très économe en énergie. Cependant, sans entretien, son efficacité diminue progressivement, entraînant une hausse de la consommation électrique. Un entretien régulier permet de garantir un rendement optimal et d'économiser jusqu'à 20 % d'énergie.",
        list: [
          "L'accumulation de calcaire réduit le transfert de chaleur et force l'appareil à fonctionner plus longtemps",
          "Des filtres encrassés ou un manque de ventilation peuvent ralentir l'échange thermique",
          "Un mauvais réglage des paramètres de fonctionnement peut entraîner une surconsommation",
        ],
      },
      {
        _key: 'b3s2',
        heading: 'Prolonger la durée de vie du boiler',
        body: "Un boiler thermodynamique bien entretenu peut durer 15 à 20 ans, alors qu'un manque de suivi peut réduire cette durée de moitié.",
        list: [
          "Dépôts de calcaire accélérant l'usure de la résistance et du ballon",
          'Détérioration des joints et des connexions entraînant des fuites',
          "Encrassement des conduits d'air réduisant l'efficacité du système thermodynamique",
        ],
      },
      {
        _key: 'b3s3',
        heading: "Préserver la qualité de l'eau et éviter les bactéries",
        body: "Un boiler thermodynamique stocke l'eau à une température qui peut favoriser le développement de bactéries, notamment la légionelle, responsable d'infections pulmonaires. L'entretien Zen Énergie Services inclut une vérification des températures et un nettoyage des composants pour garantir une eau saine et sûre.",
        list: [
          "Température de l'eau insuffisante pour éliminer les bactéries",
          'Présence de dépôts stagnants favorisant la prolifération bactérienne',
        ],
      },
      {
        _key: 'b3s4',
        heading: 'Respecter les exigences de garantie et de conformité',
        body: "Comme pour tout appareil, les fabricants exigent souvent un entretien régulier pour que la garantie reste valable. Certaines pannes ne sont pas couvertes si l'entretien n'a pas été effectué.\n\nUne maintenance conforme garantit que l'appareil répond aux normes de sécurité et de performance en Suisse. Un rapport détaillé est fourni après chaque intervention pour assurer un suivi complet de votre installation.",
      },
    ],
  },
  {
    _id: 'blog-nettoyage-panneaux-solaires',
    _type: 'blog',
    slug: { _type: 'slug', current: 'nettoyage-panneaux-solaires' },
    title: 'Tout savoir sur le nettoyage des panneaux solaires',
    excerpt: "Saviez-vous qu'un panneau encrassé peut perdre jusqu'à 15 % de sa production annuelle ? Découvrez pourquoi, comment et à quelle fréquence entretenir vos panneaux solaires.",
    coverImg: '/Photos HD/Visuels Technique/Nettoyage - PV/man-clean-up-solar-panels-that-are-dirty-with-dust-birds-droppings.webp',
    date: '10 février 2026',
    category: 'PV Clean',
    readTime: '2 min de lecture',
    sections: [
      {
        _key: 'b4s1',
        heading: 'Pourquoi nettoyer ses panneaux solaires ?',
        body: "Avec le temps, divers éléments s'accumulent sur la surface des panneaux, réduisant leur capacité à capter la lumière solaire. Un nettoyage régulier permet d'éliminer ces impuretés et d'optimiser la production d'énergie solaire.",
        list: [
          'Poussière et pollution',
          'Feuilles mortes et débris végétaux',
          "Fientes d'oiseaux",
          'Neige et résidus de glace',
        ],
      },
      {
        _key: 'b4s2',
        heading: 'À quelle fréquence faut-il nettoyer ses panneaux solaires ?',
        body: "La fréquence de nettoyage dépend de plusieurs facteurs liés à votre environnement et à votre installation.",
        list: [
          'Zone résidentielle ou rurale : un nettoyage tous les 6 à 12 mois est suffisant',
          "Zone urbaine ou industrielle : un nettoyage tous les 6 mois est recommandé en raison de la pollution",
          "Région enneigée : vérification après l'hiver pour retirer les résidus de neige et de glace",
          "Toiture sous les arbres : nettoyage plus régulier pour éviter l'accumulation de feuilles et de mousse",
        ],
      },
      {
        _key: 'b4s3',
        heading: 'Comment nettoyer ses panneaux solaires ?',
        body: "Un nettoyage efficace passe par une intervention professionnelle d'une entreprise spécialisée qui prendra toutes les précautions nécessaires pour ne pas endommager les panneaux (produits adaptés, processus de sécurité).\n\nNettoyer soi-même ses panneaux peut s'avérer complexe et risqué, surtout si l'installation est en hauteur. À éviter absolument : utiliser un jet haute pression, des produits chimiques, ou marcher sur les panneaux.\n\nZen Énergie Services propose une offre dédiée : PV Clean, un service de nettoyage professionnel qui garantit un entretien optimal et sécurisé de vos panneaux solaires.",
      },
      {
        _key: 'b4s4',
        heading: "Les bénéfices concrets d'un nettoyage régulier",
        body: "Un entretien régulier de vos panneaux solaires présente des avantages concrets et mesurables.",
        list: [
          "Jusqu'à 15 % d'énergie supplémentaire grâce à une meilleure captation de la lumière",
          "Durée de vie prolongée des panneaux en évitant l'accumulation de saletés corrosives",
          "Moins de risques de dysfonctionnements liés à des dépôts qui altèrent la structure des cellules photovoltaïques",
          "Respect des garanties des fabricants, qui exigent parfois un entretien régulier",
        ],
      },
    ],
  },
  {
    _id: 'blog-optimiser-rendement-solaire',
    _type: 'blog',
    slug: { _type: 'slug', current: 'optimiser-rendement-solaire' },
    title: "Quels sont les risques sans entretien régulier de vos installations ?",
    excerpt: "Pompes à chaleur, panneaux photovoltaïques, boilers thermodynamiques... Sans un entretien régulier, leur performance peut rapidement décliner, entraînant des conséquences coûteuses.",
    coverImg: "/Photos HD/Photos d'ambiance/person-near-alternative-energy-plant.webp",
    date: '20 février 2026',
    category: 'Entretien',
    readTime: '2 min de lecture',
    sections: [
      {
        _key: 'b5s1',
        heading: 'Une perte de performance et une surconsommation énergétique',
        body: "Sans entretien, vos installations deviennent moins performantes, ce qui entraîne une hausse de votre consommation d'énergie et de vos factures.",
        list: [
          "Pompe à chaleur : un manque d'entretien réduit l'efficacité de l'échange thermique, forçant l'appareil à fonctionner plus longtemps — augmentation de 20 à 30 % de la consommation électrique",
          "Panneaux photovoltaïques : la saleté et les dépôts réduisent la captation de la lumière solaire, pouvant entraîner une perte de jusqu'à 15 % de production annuelle",
          "Boiler thermodynamique : l'accumulation de calcaire réduit l'efficacité du système et augmente la consommation énergétique",
        ],
      },
      {
        _key: 'b5s2',
        heading: 'Un risque accru de pannes et de réparations coûteuses',
        body: "Les équipements mal entretenus sont plus susceptibles de tomber en panne, souvent aux moments les plus critiques (en hiver pour une pompe à chaleur, par exemple). Avec un contrat d'entretien Zen, vous évitez les mauvaises surprises et bénéficiez d'un suivi régulier.",
        list: [
          'Usure prématurée des composants : filtres encrassés, câbles défectueux, échangeurs bouchés',
          "Onduleur solaire endommagé : un manque de contrôle des connexions électriques peut provoquer des surtensions",
          "Coût des réparations sans contrat d'entretien : une panne imprévue peut générer des frais importants",
        ],
      },
      {
        _key: 'b5s3',
        heading: 'Une réduction de la durée de vie des équipements',
        body: "Sans entretien, la durée de vie de vos installations est considérablement réduite.",
        list: [
          'Pompe à chaleur : 15 à 20 ans avec un entretien régulier, contre 10 à 12 ans sans suivi',
          'Panneaux photovoltaïques : 25 à 30 ans bien entretenus, contre 20 ans ou moins en cas de négligence',
          'Boiler thermodynamique : peut durer 15 à 20 ans, mais un manque de nettoyage peut causer des pannes bien plus tôt',
        ],
      },
      {
        _key: 'b5s4',
        heading: 'Des risques de sécurité accrus',
        body: "Ne pas entretenir régulièrement ses installations peut compromettre la sécurité de votre habitation. Des risques électriques avec des connexions endommagées, un risque sanitaire avec un boiler mal entretenu qui favorise le développement de bactéries, ou encore des risques plus importants de fuites ou d'infiltrations.\n\nZen Énergie Services propose des offres d'entretien clé en main, pour une maintenance sans soucis. Contactez nos experts locaux au 021 512 05 74.",
      },
    ],
  },
  {
    _id: 'blog-avantages-contrat-entretien',
    _type: 'blog',
    slug: { _type: 'slug', current: 'avantages-contrat-entretien' },
    title: "Quels sont les atouts des contrats d'entretien Zen ?",
    excerpt: "Investir dans un contrat d'entretien Zen Énergie Services, c'est garantir la performance, la longévité et la sécurité de vos équipements énergétiques, avec un service complet et des offres flexibles.",
    coverImg: "/Photos HD/Photos d'ambiance/Zen.webp",
    date: '1 mars 2026',
    category: 'Contrats',
    readTime: '4 min de lecture',
    sections: [
      {
        _key: 'b6s1',
        heading: 'Des formules adaptées à vos besoins',
        body: "Chez Zen Énergie Services Suisse, nous savons que chaque installation et chaque client a des besoins différents. C'est pourquoi nous proposons plusieurs formules de contrats d'entretien adaptées. Chaque contrat Zen offre de plus un accès digital gratuit à un espace client totalement personnalisé où chacun pourra y retrouver ses factures, son abonnement et ses rapports d'intervention.",
        list: [
          'Zen Accès : avec un entretien et une maintenance tous les 2 ans',
          'Zen Équilibre : un entretien annuel de vos installations',
          'Zen Plus : un contrat Premium avec un entretien annuel et les dépannages inclus',
          'PV Clean : une offre spécialement conçue pour le nettoyage des panneaux photovoltaïques, avec un paiement unique pour chaque intervention',
        ],
      },
      {
        _key: 'b6s2',
        heading: 'Une intervention rapide et efficace',
        body: "En souscrivant à un contrat Zen, vous avez accès à un service de qualité, assuré par des professionnels qualifiés et disponibles dans toute la Suisse romande.",
        list: [
          'Un service client réactif : nos experts interviennent rapidement dans toute la Suisse romande',
          "Des techniciens qualifiés : nos experts sont formés aux dernières technologies pour assurer un service de qualité",
          "Un rapport d'intervention détaillé après chaque visite : un compte-rendu clair de l'état de l'installation et de l'intervention Zen",
        ],
      },
      {
        _key: 'b6s3',
        heading: 'Des offres avantageuses',
        body: "Les contrats Zen Énergie Services sont conçus pour répondre à tous les foyers et à tous les besoins. Souscrivez dès maintenant et profitez de l'entretien Zen Énergie Services sans souci. Restez Zen !",
        list: [
          "Un rabais de 10% sur la 1ère année d'abonnement pour la souscription de plusieurs contrats produits différents",
          "Un rabais de 10% sur l'abonnement global pour 2 pompes à chaleur",
          "Un rabais de 15% sur l'abonnement global pour 3 pompes à chaleur ou plus",
        ],
      },
    ],
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    _id: 'faq-1',
    _type: 'faq',
    question: "À quelle fréquence faut-il entretenir ses installations énergétiques ?",
    answer: "La fréquence dépend du type d'équipement. Pour une pompe à chaleur, un entretien annuel est recommandé. Pour les panneaux solaires, un contrôle et nettoyage tous les 1 à 2 ans est idéal. Le boiler thermodynamique nécessite un entretien annuel pour prévenir le calcaire et les risques sanitaires.",
    order: 1,
  },
  {
    _id: 'faq-2',
    _type: 'faq',
    question: "Quels sont les risques si je n'entretiens pas mes équipements ?",
    answer: "Sans entretien régulier, vous risquez une baisse de performance (jusqu'à 30 % de perte de rendement), une augmentation de votre consommation énergétique, des pannes coûteuses, et une réduction significative de la durée de vie de vos installations.",
    order: 2,
  },
  {
    _id: 'faq-3',
    _type: 'faq',
    question: "Quelle est la différence entre les contrats Zen Accès, Zen Équilibre et Zen Plus ?",
    answer: "Zen Accès propose un entretien tous les 2 ans. Zen Équilibre offre un entretien annuel. Zen Plus est notre formule premium avec un entretien annuel et les dépannages inclus (main-d'œuvre et déplacement). Tous les contrats incluent un accès à votre espace client en ligne.",
    order: 3,
  },
  {
    _id: 'faq-4',
    _type: 'faq',
    question: "Intervenez-vous dans toute la Suisse romande ?",
    answer: "Oui, Zen Énergie Services intervient dans toute la Suisse romande. Notre siège est situé à Plan-les-Ouates (Genève) et nous disposons d'un réseau de techniciens qualifiés couvrant l'ensemble de la région.",
    order: 4,
  },
  {
    _id: 'faq-5',
    _type: 'faq',
    question: "Comment fonctionne le service PV Clean ?",
    answer: "PV Clean est un service de nettoyage ponctuel de vos panneaux solaires. À partir de CHF 392 pour 8 panneaux, nos équipes interviennent avec un système à eau pure et des brosses souples, sans produits chimiques. Aucun engagement — vous payez uniquement à l'intervention.",
    order: 5,
  },
]

// ── Seed ──────────────────────────────────────────────────────────────────────

async function seed() {
  const allDocs = [...services, ...blogs, ...faqs]
  console.log(`\nSeeding ${allDocs.length} documents into Sanity...\n`)

  const transaction = client.transaction()

  for (const doc of allDocs) {
    transaction.createOrReplace(doc)
  }

  const result = await transaction.commit()
  console.log(`✓ Successfully seeded ${allDocs.length} documents!`)
  console.log(`  Transaction ID: ${result.transactionId}`)
  console.log(`  - ${services.length} services`)
  console.log(`  - ${blogs.length} blogs`)
  console.log(`  - ${faqs.length} FAQs`)

  // Verify
  const count = await client.fetch('count(*[_type in ["service", "blog", "faq"]])')
  console.log(`\n✓ Verification: ${count} documents in Sanity\n`)
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
