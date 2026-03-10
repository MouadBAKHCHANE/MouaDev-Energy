// ── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  slug: string
  title: string
  shortDesc: string
  intro: string
  body: string[]
  includes: string[]
  steps: { title: string; desc: string }[]
  heroImg: string
  icon: string
}

export const services: Service[] = [
  {
    slug: 'rooftop-solar',
    title: 'Rooftop solar panel installation',
    shortDesc: 'Professional rooftop solar panel installation designed for maximum sunlight capture and energy output.',
    intro: 'Our rooftop solar panel installation service delivers high-performance solar systems engineered to maximise energy production while complementing your property.',
    body: [
      'We begin with a thorough site assessment to evaluate roof orientation, shading, and structural integrity. Our engineers then design a custom layout that captures the most sunlight throughout the day.',
      'Using premium solar panels and certified mounting hardware, our installation teams complete most residential projects within 1–2 days with zero structural damage to your roof.',
    ],
    includes: [
      'Full site assessment and custom system design',
      'Premium solar panels with 25-year performance warranty',
      'Certified racking and mounting hardware',
      'Grid-tie inverter installation and configuration',
      'Electrical safety inspection and certification',
      'Monitoring system setup and training',
    ],
    steps: [
      { title: 'Site assessment', desc: 'We visit your property to evaluate roof structure, orientation, and shading.' },
      { title: 'System design', desc: 'Our engineers create a custom layout optimised for maximum energy output.' },
      { title: 'Installation', desc: 'Certified technicians install panels, mounting hardware, and inverters.' },
      { title: 'Inspection', desc: 'A full electrical safety inspection is carried out before grid connection.' },
      { title: 'Grid connection', desc: 'We handle all paperwork and coordinate the grid tie-in with your utility.' },
      { title: 'Monitoring setup', desc: 'We configure your monitoring system so you can track production in real time.' },
    ],
    heroImg: 'https://framerusercontent.com/images/0HSvl4Kh9UWjFClIJIkYs1QIO0.jpg',
    icon: 'https://framerusercontent.com/images/Hyv2Ql52EMBz3P3BmYwhd17lDc.png',
  },
  {
    slug: 'solar-system-maintenance',
    title: 'Solar system maintenance',
    shortDesc: 'Scheduled maintenance to keep your solar system operating at peak efficiency year after year.',
    intro: 'Regular maintenance is the key to long system life and consistent energy output. Our technicians keep every component of your solar installation performing at its best.',
    body: [
      'Over time, connections can loosen, inverters can degrade, and firmware may need updating. Our annual maintenance visits catch small issues before they cause costly failures.',
      'Each visit includes a full visual inspection, electrical testing, panel cleaning, and a detailed report with recommendations.',
    ],
    includes: [
      'Annual or bi-annual maintenance visits',
      'Full electrical performance testing',
      'Panel cleaning and inspection',
      'Inverter firmware updates',
      'Wiring and connection integrity check',
      'Written performance report and recommendations',
    ],
    steps: [
      { title: 'Schedule visit', desc: 'Book your maintenance visit online or by phone at your convenience.' },
      { title: 'Visual inspection', desc: 'Technicians inspect panels, racking, wiring, and inverter housing.' },
      { title: 'Electrical testing', desc: 'We measure voltage, current, and output against expected values.' },
      { title: 'Cleaning', desc: 'Panels are cleaned to restore full light absorption.' },
      { title: 'Report', desc: 'You receive a written report with performance data and any recommended actions.' },
      { title: 'Follow-up', desc: 'Any repairs or replacements are scheduled and carried out promptly.' },
    ],
    heroImg: 'https://framerusercontent.com/images/d609Uzv5sske4DYDYAIapU3M.jpg',
    icon: 'https://framerusercontent.com/images/tYjjjnV08Cc8JGQRKY9g3S1qvLU.png',
  },
  {
    slug: 'off-grid-solar',
    title: 'Off grid solar installation',
    shortDesc: 'Complete off-grid solar systems with battery storage for full energy independence.',
    intro: 'Off-grid solar systems give you complete energy independence — no utility bills, no power outages, and no reliance on the grid.',
    body: [
      'We design systems sized to your exact energy consumption, combining high-capacity solar panels with lithium battery banks and smart charge controllers.',
      'Whether you need a cabin system, a farm installation, or a fully autonomous home, our team handles everything from design to commissioning.',
    ],
    includes: [
      'Energy audit and off-grid system sizing',
      'High-efficiency solar panels',
      'Lithium battery bank with BMS',
      'MPPT charge controller installation',
      'Off-grid inverter/charger configuration',
      'Full system commissioning and training',
    ],
    steps: [
      { title: 'Energy audit', desc: 'We calculate your daily energy needs to right-size the system.' },
      { title: 'System design', desc: 'Panels, batteries, and inverter are selected to meet your load requirements.' },
      { title: 'Installation', desc: 'All components are installed and wired by certified off-grid specialists.' },
      { title: 'Battery setup', desc: 'Battery management system (BMS) is configured for optimal cycle life.' },
      { title: 'Commissioning', desc: 'We test the full system under load to verify performance.' },
      { title: 'Training', desc: 'We walk you through monitoring and basic troubleshooting.' },
    ],
    heroImg: 'https://framerusercontent.com/images/1EnacoluFALIJqQC2THjamugM.jpg',
    icon: 'https://framerusercontent.com/images/gz6zByfwfxSk9G6Guihznt9CnjM.png',
  },
  {
    slug: 'solar-panel-cleaning',
    title: 'Solar panel cleaning services',
    shortDesc: 'Dirt, dust, and debris reduce your solar panels efficiency by up to 30%. Our cleaning service restores full output.',
    intro: 'A clean panel is an efficient panel. Dust, bird droppings, and pollen can reduce your energy yield by up to 30% over time.',
    body: [
      'Our trained cleaning teams use pure water systems and soft brushes specifically designed for solar panels — no abrasive chemicals that could void your warranty.',
      'We offer one-time deep cleans and regular scheduled contracts, and we always inspect panels for damage while on site.',
    ],
    includes: [
      'Pure water cleaning system (no chemicals)',
      'Soft-bristle brush and squeegee technique',
      'Visual panel inspection during service',
      'Debris removal from racking and gutters',
      'Before/after production comparison report',
      'Flexible scheduling: single visit or contract',
    ],
    steps: [
      { title: 'Booking', desc: 'Schedule a one-time clean or a recurring maintenance contract.' },
      { title: 'Pre-clean inspection', desc: 'Technicians check for cracked panels or loose connections before starting.' },
      { title: 'Cleaning', desc: 'Panels are cleaned with pure water and soft brushes to remove all soiling.' },
      { title: 'Rinse & dry', desc: 'A final rinse removes any residue and panels are left streak-free.' },
      { title: 'Output check', desc: 'We compare inverter output before and after cleaning to confirm improvement.' },
      { title: 'Report', desc: 'A service report is emailed to you after every visit.' },
    ],
    heroImg: 'https://framerusercontent.com/images/1rLEspARYhhuJ5AhgeapVxWeFA.jpg',
    icon: 'https://framerusercontent.com/images/R1Nc0cZIZe9itgYCE5FJSDaSJc.png',
  },
  {
    slug: 'wind-turbine-repair',
    title: 'Wind turbine repair services',
    shortDesc: 'Expert repair and maintenance services to keep wind turbines operating efficiently and safely.',
    intro: 'Wind turbines operate in harsh conditions and require specialist maintenance to deliver consistent power output throughout their 20+ year lifespan.',
    body: [
      'Our turbine technicians are trained to work at height and qualified to diagnose mechanical, electrical, and blade issues on all major small-to-medium wind turbine brands.',
      'We offer emergency call-outs, scheduled servicing, and long-term maintenance contracts for residential and commercial turbine owners.',
    ],
    includes: [
      'Full mechanical and electrical diagnostic',
      'Blade inspection and repair',
      'Nacelle and gearbox servicing',
      'Controller and inverter diagnostics',
      'Tower and foundation structural check',
      'Emergency call-out service',
    ],
    steps: [
      { title: 'Diagnostic call-out', desc: 'We visit the site and assess the turbine using specialised diagnostic tools.' },
      { title: 'Fault identification', desc: 'Mechanical, electrical, and blade faults are identified and documented.' },
      { title: 'Parts procurement', desc: 'Genuine or OEM-equivalent parts are sourced at competitive prices.' },
      { title: 'Repair', desc: 'Qualified technicians carry out repairs safely at height.' },
      { title: 'Testing', desc: 'The turbine is tested at multiple wind speeds to confirm full functionality.' },
      { title: 'Service report', desc: 'A detailed report is provided with all work completed and recommendations.' },
    ],
    heroImg: 'https://framerusercontent.com/images/YkROzWcb2tUmAxdUcRfBLgHacU.jpg',
    icon: 'https://framerusercontent.com/images/dzRxE4gVbVi1wRzrhrYjLRMpN4Y.png',
  },
  {
    slug: 'solar-inverter-repair',
    title: 'Solar inverter repair',
    shortDesc: 'Fast and reliable inverter diagnostics and repairs to restore peak energy performance.',
    intro: 'The inverter is the brain of your solar system. When it fails, your panels stop producing usable electricity. Our rapid repair service minimises downtime.',
    body: [
      'Our engineers can diagnose most inverter faults remotely using monitoring data before they even arrive on site, reducing repair time significantly.',
      'We carry a comprehensive stock of replacement components for all major inverter brands including SMA, Fronius, SolarEdge, Huawei, and Sungrow.',
    ],
    includes: [
      'Remote monitoring data analysis',
      'On-site fault diagnosis',
      'Component-level repair or full replacement',
      'Firmware and configuration updates',
      'Post-repair performance verification',
      'Warranty claim support',
    ],
    steps: [
      { title: 'Remote diagnosis', desc: 'We review monitoring data to identify the fault before visiting site.' },
      { title: 'Site visit', desc: 'An engineer visits to confirm the fault and assess repair options.' },
      { title: 'Repair or replace', desc: 'We repair at component level where possible, or replace with a compatible unit.' },
      { title: 'Firmware update', desc: 'Inverter firmware is updated to the latest stable version.' },
      { title: 'Reconfiguration', desc: 'Settings are reconfigured to match your system and grid requirements.' },
      { title: 'Sign-off', desc: 'Performance is verified and a service certificate is issued.' },
    ],
    heroImg: 'https://framerusercontent.com/images/arGA85cgsigolEQsZOeBSaQ4qI.jpg',
    icon: 'https://framerusercontent.com/images/2jvk0kJxyokxITdWGVCBwINpl6w.png',
  },
]

// ── Blogs ─────────────────────────────────────────────────────────────────────

export interface BlogSection {
  heading: string
  body: string
  list?: string[]
}

export interface Blog {
  slug: string
  title: string
  excerpt: string
  coverImg: string
  date: string
  category: string
  readTime: string
  sections: BlogSection[]
}

export const blogs: Blog[] = [
  {
    slug: 'entretien-panneaux-solaires',
    title: 'Pourquoi entretenir régulièrement ses panneaux photovoltaïques ?',
    excerpt: 'Les panneaux photovoltaïques sont une solution efficace et durable. Découvrez pourquoi un entretien régulier est indispensable pour garantir leur performance et leur longévité.',
    coverImg: '/Photos HD/Visuels Technique/Technique - PV/Entretien panneaux solaires.webp',
    date: '10 janvier 2026',
    category: 'Panneaux solaires',
    readTime: '4 min de lecture',
    sections: [
      {
        heading: 'Maximiser votre production d\'énergie',
        body: 'Le climat suisse présente des particularités qui influencent directement la performance des panneaux solaires. Divers éléments comme la poussière, le pollen, les feuilles mortes ou encore les fientes d\'oiseaux ou les résidus de neige peuvent s\'accumuler sur la surface des panneaux solaires. Une couche de saleté, même fine, réduit la quantité de lumière captée et diminue ainsi la production d\'électricité.\n\nUn panneau encrassé peut perdre jusqu\'à 15 % de son rendement énergétique annuel. Un entretien régulier permet de maintenir une production optimale et d\'optimiser le retour sur investissement de votre installation.',
      },
      {
        heading: 'Prolonger la durée de vie de vos panneaux',
        body: 'Les panneaux photovoltaïques sont conçus avec une durée de vie de 25 à 30 ans, voire plus, mais leur longévité dépend directement de leur entretien.\n\nSans maintenance, des problèmes tels que des microfissures, des infiltrations d\'eau ou une corrosion prématurée peuvent apparaître. Ces défauts peuvent accélérer le vieillissement des cellules photovoltaïques et nécessiter des réparations coûteuses. Un entretien préventif permet de détecter ces anomalies à temps et d\'éviter une détérioration prématurée de votre installation.',
      },
      {
        heading: 'Assurer la sécurité et la conformité de votre installation',
        body: 'Un mauvais entretien peut engendrer des risques électriques ou mécaniques. Une maintenance professionnelle inclut des vérifications de sécurité essentielles pour assurer un fonctionnement sans danger de votre système.',
        list: [
          'Câbles défectueux ou mal serrés pouvant causer des courts-circuits',
          'Infiltrations d\'eau favorisant la corrosion des connexions électriques',
          'Présence de mousses et lichens, augmentant le risque d\'inflammabilité',
        ],
      },
      {
        heading: 'Respecter les exigences de garantie des fabricants',
        body: 'Certains fabricants de panneaux photovoltaïques demandent un entretien régulier pour que leur garantie reste valide. Ne pas respecter ces préconisations peut entraîner une perte de garantie en cas de panne ou de dysfonctionnement.',
      },
      {
        heading: 'Réduire les coûts de maintenance et d\'intervention',
        body: 'Un entretien régulier évite des pannes coûteuses et prolonge la durée de vie des équipements annexes comme l\'onduleur et les batteries de stockage. Mieux vaut investir dans un entretien préventif que de devoir remplacer des composants prématurément.\n\nFaites confiance à Zen Énergie Services Suisse pour l\'entretien de vos panneaux photovoltaïques grâce à nos contrats d\'entretien adaptés à vos besoins.',
      },
    ],
  },
  {
    slug: 'entretien-pompe-a-chaleur',
    title: 'Comment bien utiliser sa pompe à chaleur ?',
    excerpt: 'La pompe à chaleur est une solution de chauffage performante et écologique. Adoptez les bons réflexes au quotidien pour en tirer le meilleur parti et réduire votre consommation d\'énergie.',
    coverImg: '/Photos HD/Visuels Technique/Technique - PAC/Heat pump AdobeStock.webp',
    date: '20 janvier 2026',
    category: 'Pompe à chaleur',
    readTime: '3 min de lecture',
    sections: [
      {
        heading: 'Régler correctement la température de consigne',
        body: 'L\'un des avantages majeurs d\'une pompe à chaleur est sa capacité à maintenir une température stable tout en consommant peu d\'énergie. Cependant, un mauvais réglage peut entraîner une surconsommation. Évitez d\'augmenter la température de plusieurs degrés en pensant chauffer plus vite — une PAC fonctionne de manière progressive.',
        list: [
          '19-21°C dans les pièces de vie (salon, cuisine, bureau)',
          '17-18°C dans les chambres pour un bon confort nocturne',
          '16°C dans les zones peu utilisées (buanderie, couloirs)',
        ],
      },
      {
        heading: 'Ne pas éteindre sa pompe à chaleur en hiver',
        body: 'Contrairement aux systèmes de chauffage classiques, une PAC fonctionne mieux lorsqu\'elle est en régime continu à basse température.\n\nÉvitez de couper complètement votre PAC la nuit ou en votre absence prolongée. Privilégiez une réduction progressive de la température, plutôt qu\'un arrêt total.',
      },
      {
        heading: 'Optimiser l\'isolation de votre logement',
        body: 'Une pompe à chaleur performante ne sera efficace que si votre habitation est bien isolée. Une mauvaise isolation entraîne des déperditions thermiques, obligeant votre PAC à fonctionner plus longtemps et à consommer plus. Un logement mal isolé peut entraîner une perte de chaleur de 20 à 30 %.',
        list: [
          'L\'isolation des fenêtres et des portes',
          'L\'étanchéité des murs et du toit',
          'L\'utilisation de rideaux thermiques en hiver',
        ],
      },
      {
        heading: 'Entretenir régulièrement votre pompe à chaleur',
        body: 'Une pompe à chaleur bien entretenue est plus efficace, plus économique et plus durable. Un entretien professionnel est fortement recommandé — il garantira le bon fonctionnement de votre installation sur le long terme.\n\nZen Énergie Services Suisse propose des contrats d\'entretien sur mesure, adaptés pour assurer la longévité et l\'efficacité de votre pompe à chaleur. Un réseau d\'experts proches de chez vous dans toute la Suisse romande.',
      },
    ],
  },
  {
    slug: 'maintenance-boiler',
    title: 'Pourquoi entretenir son boiler thermodynamique ?',
    excerpt: 'Le boiler thermodynamique est une solution efficace pour produire de l\'eau chaude sanitaire. Découvrez pourquoi un entretien régulier est indispensable pour maintenir ses performances et sa longévité.',
    coverImg: '/Photos HD/Visuels Technique/Technique - Boiler/Boiler AdobeStock.webp',
    date: '1 février 2026',
    category: 'Boiler',
    readTime: '2 min de lecture',
    sections: [
      {
        heading: 'Maintenir un rendement optimal et réduire sa consommation d\'énergie',
        body: 'Le boiler thermodynamique utilise une pompe à chaleur pour chauffer l\'eau, un processus très économe en énergie. Cependant, sans entretien, son efficacité diminue progressivement, entraînant une hausse de la consommation électrique. Un entretien régulier permet de garantir un rendement optimal et d\'économiser jusqu\'à 20 % d\'énergie.',
        list: [
          'L\'accumulation de calcaire réduit le transfert de chaleur et force l\'appareil à fonctionner plus longtemps',
          'Des filtres encrassés ou un manque de ventilation peuvent ralentir l\'échange thermique',
          'Un mauvais réglage des paramètres de fonctionnement peut entraîner une surconsommation',
        ],
      },
      {
        heading: 'Prolonger la durée de vie du boiler',
        body: 'Un boiler thermodynamique bien entretenu peut durer 15 à 20 ans, alors qu\'un manque de suivi peut réduire cette durée de moitié.',
        list: [
          'Dépôts de calcaire accélérant l\'usure de la résistance et du ballon',
          'Détérioration des joints et des connexions entraînant des fuites',
          'Encrassement des conduits d\'air réduisant l\'efficacité du système thermodynamique',
        ],
      },
      {
        heading: 'Préserver la qualité de l\'eau et éviter les bactéries',
        body: 'Un boiler thermodynamique stocke l\'eau à une température qui peut favoriser le développement de bactéries, notamment la légionelle, responsable d\'infections pulmonaires. L\'entretien Zen Énergie Services inclut une vérification des températures et un nettoyage des composants pour garantir une eau saine et sûre.',
        list: [
          'Température de l\'eau insuffisante pour éliminer les bactéries',
          'Présence de dépôts stagnants favorisant la prolifération bactérienne',
        ],
      },
      {
        heading: 'Respecter les exigences de garantie et de conformité',
        body: 'Comme pour tout appareil, les fabricants exigent souvent un entretien régulier pour que la garantie reste valable. Certaines pannes ne sont pas couvertes si l\'entretien n\'a pas été effectué.\n\nUne maintenance conforme garantit que l\'appareil répond aux normes de sécurité et de performance en Suisse. Un rapport détaillé est fourni après chaque intervention pour assurer un suivi complet de votre installation.',
      },
    ],
  },
  {
    slug: 'nettoyage-panneaux-solaires',
    title: 'Tout savoir sur le nettoyage des panneaux solaires',
    excerpt: 'Saviez-vous qu\'un panneau encrassé peut perdre jusqu\'à 15 % de sa production annuelle ? Découvrez pourquoi, comment et à quelle fréquence entretenir vos panneaux solaires.',
    coverImg: '/Photos HD/Visuels Technique/Nettoyage - PV/man-clean-up-solar-panels-that-are-dirty-with-dust-birds-droppings.webp',
    date: '10 février 2026',
    category: 'PV Clean',
    readTime: '2 min de lecture',
    sections: [
      {
        heading: 'Pourquoi nettoyer ses panneaux solaires ?',
        body: 'Avec le temps, divers éléments s\'accumulent sur la surface des panneaux, réduisant leur capacité à capter la lumière solaire. Un nettoyage régulier permet d\'éliminer ces impuretés et d\'optimiser la production d\'énergie solaire.',
        list: [
          'Poussière et pollution',
          'Feuilles mortes et débris végétaux',
          'Fientes d\'oiseaux',
          'Neige et résidus de glace',
        ],
      },
      {
        heading: 'À quelle fréquence faut-il nettoyer ses panneaux solaires ?',
        body: 'La fréquence de nettoyage dépend de plusieurs facteurs liés à votre environnement et à votre installation.',
        list: [
          'Zone résidentielle ou rurale : un nettoyage tous les 6 à 12 mois est suffisant',
          'Zone urbaine ou industrielle : un nettoyage tous les 6 mois est recommandé en raison de la pollution',
          'Région enneigée : vérification après l\'hiver pour retirer les résidus de neige et de glace',
          'Toiture sous les arbres : nettoyage plus régulier pour éviter l\'accumulation de feuilles et de mousse',
        ],
      },
      {
        heading: 'Comment nettoyer ses panneaux solaires ?',
        body: 'Un nettoyage efficace passe par une intervention professionnelle d\'une entreprise spécialisée qui prendra toutes les précautions nécessaires pour ne pas endommager les panneaux (produits adaptés, processus de sécurité).\n\nNettoyer soi-même ses panneaux peut s\'avérer complexe et risqué, surtout si l\'installation est en hauteur. À éviter absolument : utiliser un jet haute pression, des produits chimiques, ou marcher sur les panneaux.\n\nZen Énergie Services propose une offre dédiée : PV Clean, un service de nettoyage professionnel qui garantit un entretien optimal et sécurisé de vos panneaux solaires.',
      },
      {
        heading: 'Les bénéfices concrets d\'un nettoyage régulier',
        body: 'Un entretien régulier de vos panneaux solaires présente des avantages concrets et mesurables.',
        list: [
          'Jusqu\'à 15 % d\'énergie supplémentaire grâce à une meilleure captation de la lumière',
          'Durée de vie prolongée des panneaux en évitant l\'accumulation de saletés corrosives',
          'Moins de risques de dysfonctionnements liés à des dépôts qui altèrent la structure des cellules photovoltaïques',
          'Respect des garanties des fabricants, qui exigent parfois un entretien régulier',
        ],
      },
    ],
  },
  {
    slug: 'optimiser-rendement-solaire',
    title: 'Quels sont les risques sans entretien régulier de vos installations ?',
    excerpt: 'Pompes à chaleur, panneaux photovoltaïques, boilers thermodynamiques... Sans un entretien régulier, leur performance peut rapidement décliner, entraînant des conséquences coûteuses.',
    coverImg: '/Photos HD/Photos d_ambiance/person-near-alternative-energy-plant.webp',
    date: '20 février 2026',
    category: 'Entretien',
    readTime: '2 min de lecture',
    sections: [
      {
        heading: 'Une perte de performance et une surconsommation énergétique',
        body: 'Sans entretien, vos installations deviennent moins performantes, ce qui entraîne une hausse de votre consommation d\'énergie et de vos factures.',
        list: [
          'Pompe à chaleur : un manque d\'entretien réduit l\'efficacité de l\'échange thermique, forçant l\'appareil à fonctionner plus longtemps — augmentation de 20 à 30 % de la consommation électrique',
          'Panneaux photovoltaïques : la saleté et les dépôts réduisent la captation de la lumière solaire, pouvant entraîner une perte de jusqu\'à 15 % de production annuelle',
          'Boiler thermodynamique : l\'accumulation de calcaire réduit l\'efficacité du système et augmente la consommation énergétique',
        ],
      },
      {
        heading: 'Un risque accru de pannes et de réparations coûteuses',
        body: 'Les équipements mal entretenus sont plus susceptibles de tomber en panne, souvent aux moments les plus critiques (en hiver pour une pompe à chaleur, par exemple). Avec un contrat d\'entretien Zen, vous évitez les mauvaises surprises et bénéficiez d\'un suivi régulier.',
        list: [
          'Usure prématurée des composants : filtres encrassés, câbles défectueux, échangeurs bouchés',
          'Onduleur solaire endommagé : un manque de contrôle des connexions électriques peut provoquer des surtensions',
          'Coût des réparations sans contrat d\'entretien : une panne imprévue peut générer des frais importants',
        ],
      },
      {
        heading: 'Une réduction de la durée de vie des équipements',
        body: 'Sans entretien, la durée de vie de vos installations est considérablement réduite.',
        list: [
          'Pompe à chaleur : 15 à 20 ans avec un entretien régulier, contre 10 à 12 ans sans suivi',
          'Panneaux photovoltaïques : 25 à 30 ans bien entretenus, contre 20 ans ou moins en cas de négligence',
          'Boiler thermodynamique : peut durer 15 à 20 ans, mais un manque de nettoyage peut causer des pannes bien plus tôt',
        ],
      },
      {
        heading: 'Des risques de sécurité accrus',
        body: 'Ne pas entretenir régulièrement ses installations peut compromettre la sécurité de votre habitation. Des risques électriques avec des connexions endommagées, un risque sanitaire avec un boiler mal entretenu qui favorise le développement de bactéries, ou encore des risques plus importants de fuites ou d\'infiltrations.\n\nZen Énergie Services propose des offres d\'entretien clé en main, pour une maintenance sans soucis. Contactez nos experts locaux au 021 512 05 74.',
      },
    ],
  },
  {
    slug: 'avantages-contrat-entretien',
    title: 'Quels sont les atouts des contrats d\'entretien Zen ?',
    excerpt: 'Investir dans un contrat d\'entretien Zen Énergie Services, c\'est garantir la performance, la longévité et la sécurité de vos équipements énergétiques, avec un service complet et des offres flexibles.',
    coverImg: '/Photos HD/Photos d_ambiance/Zen.webp',
    date: '1 mars 2026',
    category: 'Contrats',
    readTime: '4 min de lecture',
    sections: [
      {
        heading: 'Des formules adaptées à vos besoins',
        body: 'Chez Zen Énergie Services Suisse, nous savons que chaque installation et chaque client a des besoins différents. C\'est pourquoi nous proposons plusieurs formules de contrats d\'entretien adaptées. Chaque contrat Zen offre de plus un accès digital gratuit à un espace client totalement personnalisé où chacun pourra y retrouver ses factures, son abonnement et ses rapports d\'intervention.',
        list: [
          'Zen Accès : avec un entretien et une maintenance tous les 2 ans',
          'Zen Équilibre : un entretien annuel de vos installations',
          'Zen Plus : un contrat Premium avec un entretien annuel et les dépannages inclus',
          'PV Clean : une offre spécialement conçue pour le nettoyage des panneaux photovoltaïques, avec un paiement unique pour chaque intervention',
        ],
      },
      {
        heading: 'Une intervention rapide et efficace',
        body: 'En souscrivant à un contrat Zen, vous avez accès à un service de qualité, assuré par des professionnels qualifiés et disponibles dans toute la Suisse romande.',
        list: [
          'Un service client réactif : nos experts interviennent rapidement dans toute la Suisse romande',
          'Des techniciens qualifiés : nos experts sont formés aux dernières technologies pour assurer un service de qualité',
          'Un rapport d\'intervention détaillé après chaque visite : un compte-rendu clair de l\'état de l\'installation et de l\'intervention Zen',
        ],
      },
      {
        heading: 'Des offres avantageuses',
        body: 'Les contrats Zen Énergie Services sont conçus pour répondre à tous les foyers et à tous les besoins. Souscrivez dès maintenant et profitez de l\'entretien Zen Énergie Services sans souci. Restez Zen !',
        list: [
          'Un rabais de 10% sur la 1ère année d\'abonnement pour la souscription de plusieurs contrats produits différents',
          'Un rabais de 10% sur l\'abonnement global pour 2 pompes à chaleur',
          'Un rabais de 15% sur l\'abonnement global pour 3 pompes à chaleur ou plus',
        ],
      },
    ],
  },
]

// ── Team Members ─────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string
  role: string
  src: string
}

export const teamMembers: TeamMember[] = [
  { src: 'https://framerusercontent.com/images/8lO1MDdXOmRLodroWn2TxIpCBQ4.jpg', name: 'James Carter', role: 'Chief Executive Officer' },
  { src: 'https://framerusercontent.com/images/B6SAUcWOaxeRbm7TmftAKKuE3bo.jpg', name: 'Emily Johnson', role: 'Chief Technology Officer' },
  { src: 'https://framerusercontent.com/images/84rQ0xS0GSXogxfHmYXKT30ETM.jpg', name: 'Michael Brown', role: 'Product Director' },
  { src: 'https://framerusercontent.com/images/aVsvLJkR2RekklaZEFisskMVMr0.jpg', name: 'Amy Walker', role: 'Sales Manager' },
  { src: 'https://framerusercontent.com/images/D6NjmeWaBY1FiFMHLr429HxpKRM.jpg', name: 'Liam Harris', role: 'Growth Strategist' },
  { src: 'https://framerusercontent.com/images/jwXvxAQ61mfcjjrQsvoreqxnrMg.jpg', name: 'Mia Walker', role: 'Client Relations Manager' },
]

// ── FAQs ─────────────────────────────────────────────────────────────────────

export interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  { q: 'How long does a solar installation usually take?', a: 'Most residential solar installations are completed within 1–3 days, depending on system size and roof complexity. The full process from consultation to activation typically takes 4–8 weeks.' },
  { q: 'Do solar panels work on cloudy days?', a: 'Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency. Modern panels are designed to capture diffused sunlight and can produce 10–25% of their normal output even on overcast days.' },
  { q: 'What maintenance do solar systems require?', a: 'Solar panels require minimal maintenance — typically just periodic cleaning and annual inspections. Our maintenance plans cover everything to keep your system running optimally.' },
  { q: 'What is grid tie solar solution?', a: 'A grid-tie solar system connects to the utility grid, allowing you to use solar energy during the day and draw from the grid at night. Excess energy can be sold back to the utility company.' },
]
