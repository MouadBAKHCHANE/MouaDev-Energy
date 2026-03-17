/**
 * Seed script — creates the 5 legal page documents in Sanity.
 *
 * Usage:  node scripts/seed-legal-pages.mjs
 *
 * Documents created:
 *   - mentions-legales
 *   - cge  (Conditions générales d'entretien)
 *   - cgu  (Conditions générales d'utilisation)
 *   - cgv  (Conditions générales de vente)
 *   - confidentialite (Politique de confidentialité & cookies)
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// ── Legal pages ───────────────────────────────────────────────────────────────

const legalPages = [
  // ── Mentions légales ──────────────────────────────────────────────────────
  {
    _id: 'legal-mentions-legales',
    _type: 'legalPage',
    pageId: 'mentions-legales',
    heroTitle: 'Mentions Légales',
    lastUpdated: '01.04.2025',
    companyInfoItems: [
      { _key: 'ci1', label: "Nom de l'entreprise :",                             value: 'Zen Énergie Services Sàrl' },
      { _key: 'ci2', label: 'Siège social :',                                    value: 'Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève' },
      { _key: 'ci3', label: 'Numéro de téléphone :',                             value: '+41 21 512 05 74' },
      { _key: 'ci4', label: 'Adresse email :',                                   value: 'contact@zen-energieservices.ch' },
      { _key: 'ci5', label: "Numéro d'enregistrement au Registre du Commerce :", value: 'CH-660.5.256.023-9.' },
      { _key: 'ci6', label: 'Directeur général / représentant légal :',          value: 'Olivier RICHARD' },
    ],
    sections: [
      {
        _key: 'ml1',
        title: 'Hébergement du site internet :',
        content: 'Infomaniak Network SA\nRue Eugène-Marziano 25, 1227 Genève - Suisse\nN° IDE & TVA : CHE-103.167.648',
      },
      {
        _key: 'ml2',
        title: 'Propriété intellectuelle :',
        content: "L'ensemble des contenus présents sur ce site (textes, images, vidéos, graphiques, logos, icônes, etc.) est protégé par le droit d'auteur et reste la propriété exclusive de Zen Énergie Services Suisse ou de leurs ayants droit respectifs. Toute reproduction, distribution, modification ou adaptation sans autorisation préalable est strictement interdite.",
      },
      {
        _key: 'ml3',
        title: 'Responsabilité :',
        content: "Zen Énergie Services Suisse ne peut être tenu responsable des erreurs ou omissions dans les contenus publiés sur son site. La société s'efforce d'assurer une mise à jour régulière des informations. L'utilisation des liens externes proposés sur le site est faite sous la responsabilité exclusive de l'utilisateur.",
      },
      {
        _key: 'ml4',
        title: 'Contact pour réclamations ou questions légales :',
        content: 'Pour toute demande, merci de nous contacter à : contact@zen-energieservices.ch',
      },
    ],
  },

  // ── CGE ───────────────────────────────────────────────────────────────────
  {
    _id: 'legal-cge',
    _type: 'legalPage',
    pageId: 'cge',
    heroTitle: "Conditions Générales d'Entretien",
    lastUpdated: '01.04.2025',
    sections: [
      {
        _key: 'cge1',
        title: 'ARTICLE 1 – PRÉAMBULE & DÉFINITIONS',
        content: "1. Préambule\nLes présentes Conditions Générales d'Entretien (CGE) régissent l'ensemble des prestations d'entretien et de maintenance fournies par Zen Énergie Services Suisse aux particuliers et aux professionnels. Elles visent à assurer transparence, qualité et sécurité dans la maintenance des installations énergétiques (pompes à chaleur, panneaux photovoltaïques, boilers thermodynamiques, etc.).\n\n2. Définitions\n• Contrat : accord conclu entre Zen Énergie Services Suisse et le Client pour la fourniture des prestations décrites ci-après.\n• Client : toute personne physique ou morale ayant souscrit à l'une des offres d'entretien.\n• Prestations : l'ensemble des services d'entretien, de maintenance, de dépannage et de suivi technique.\n• Espace Client : portail en ligne dédié à la gestion du contrat, à la consultation des rapports d'intervention et aux demandes de suivi.",
      },
      {
        _key: 'cge2',
        title: "ARTICLE 2 – OBJET ET CHAMP D'APPLICATION",
        content: "1. Objet\nLes présentes CGE définissent les modalités d'exécution des contrats d'entretien et de maintenance signés entre Zen Énergie Services Suisse et ses Clients.\n\n2. Champ d'application\nCes CGE s'appliquent à l'ensemble des offres commercialisées, à savoir :\n• Zen Accès\n• Zen Équilibre\n• Zen Plus\n• PV Clean (Nettoyage des panneaux photovoltaïques)\n\nToute souscription implique l'acceptation intégrale et sans réserve des présentes CGE.",
      },
      {
        _key: 'cge3',
        title: 'ARTICLE 3 – DESCRIPTION DES OFFRES & SERVICES INCLUS',
        content: "1. Zen Accès\n• Prestations incluses :\n- Entretien biennal (programmé tous les 2 ans) selon les spécifications de l'équipement (panneaux photovoltaïques, pompes à chaleur, boilers thermodynamiques)\n- Accès à un espace client en ligne sécurisé\n• Exclusions :\n- Pièces de rechange\n- Dépannage, main d'œuvre et déplacement\n- Pour les panneaux photovoltaïques, la mise en place d'un échafaudage pour l'accès au toit n'est pas comprise dans le contrat. Si l'accès au toit s'avère compliqué, un drone pourra être utilisé. Si l'accès est impossible, le contrat sera annulé.\n- Pannes ou défauts antérieurs à la souscription du contrat (contactez Zen Énergie Services pour en savoir plus)\n\n2. Zen Équilibre\n• Prestations incluses :\n- Entretien annuel selon les spécifications de l'équipement (panneaux photovoltaïques, pompes à chaleur, boilers thermodynamiques)\n- Accès à un espace client en ligne\n• Exclusions :\n- Pièces de rechange\n- Dépannage, main d'œuvre et déplacement\n- Pour les panneaux photovoltaïques, la mise en place d'un échafaudage pour l'accès au toit n'est pas comprise dans le contrat. Si l'accès au toit s'avère compliqué, un drone pourra être utilisé. Si l'accès est impossible, le contrat sera annulé.\n- Pannes ou défauts antérieurs à la souscription du contrat (contactez Zen Énergie Services pour en savoir plus)\n\n3. Zen Plus\n• Prestations incluses :\n- Entretien annuel selon les spécifications de l'équipement (panneaux photovoltaïques, pompes à chaleur, boilers thermodynamiques)\n- Dépannage incluant déplacement, diagnostic et main-d'œuvre pour la réparation\n- Devis gratuit en cas de remplacement nécessaire\n- Accès à un espace client en ligne\n• Exclusions :\n- Pièces de rechange et remplacement complet des équipements\n- Pour les panneaux photovoltaïques, la mise en place d'un échafaudage pour l'accès au toit n'est pas comprise dans le contrat. Si l'accès au toit s'avère compliqué, un drone pourra être utilisé. Si l'accès est impossible, le contrat sera annulé.\n- Pannes ou défauts antérieurs à la souscription du contrat (contactez Zen Énergie Services pour en savoir plus)\n\n4. PV Clean\n• Prestations incluses :\n- Nettoyage manuel des panneaux à l'aide de perches télescopiques ou de brosses rotatives\n- Application éventuelle d'une couche protectrice\n- Remise d'un rapport détaillé de nettoyage\n• Exclusions :\n- Réparations des panneaux ou des systèmes de fixation",
      },
      {
        _key: 'cge4',
        title: "ARTICLE 4 – MODALITÉS D'INTERVENTION & ORGANISATION",
        content: "1. Fréquence et calendrier\n• Zen Accès : intervention tous les 2 ans\n• Zen Équilibre et Zen Plus : intervention annuelle\n• PV Clean : intervention à la demande ou selon un contrat spécifique. Le Client sera informé au moins 14 jours avant la date prévue d'intervention.\n\n2. Organisation et durée\n• La durée moyenne d'intervention varie entre 1 et 3 heures selon la nature et le nombre d'équipements concernés.\n• En cas d'intervention d'urgence (uniquement dans le cadre de Zen Plus), une réponse est garantie sous 48 heures ouvrables.",
      },
      {
        _key: 'cge5',
        title: 'ARTICLE 5 – OBLIGATIONS DU CLIENT',
        content: "Le Client s'engage à :\n• Assurer la disponibilité et l'accessibilité des installations pour permettre l'intervention des techniciens.\n• Informer Zen Énergie Services Suisse de toute spécificité ou contrainte liée à l'installation (accès difficile, contraintes techniques, etc.).\n• Maintenir les équipements dans un état compatible avec une bonne exécution des prestations.\n• Signaler rapidement tout dysfonctionnement ou anomalie constatée.",
      },
      {
        _key: 'cge6',
        title: 'ARTICLE 6 – OBLIGATIONS DE ZEN ÉNERGIE SERVICES SUISSE',
        content: "Zen Énergie Services Suisse s'engage à :\n• Exécuter les prestations conformément aux normes en vigueur et aux standards de qualité du secteur.\n• Mettre à disposition un personnel qualifié et régulièrement formé aux dernières avancées technologiques.\n• Informer le Client, préalablement à toute intervention, des conditions, du planning et des modalités d'exécution.\n• Remettre un rapport d'intervention détaillé à l'issue de chaque visite.",
      },
      {
        _key: 'cge7',
        title: 'ARTICLE 7 – CONDITIONS SPÉCIFIQUES TECHNIQUES PAR PRODUIT',
        content: "1. Entretien pompe à chaleur\nL'intervention comprend les prestations suivantes :\na) Nettoyage des filtres\nb) Nettoyage de l'unité extérieure et des unités intérieures (si présentes)\nc) Nettoyage des bacs de réception des condensats et vérification de l'écoulement (si présent)\nd) Nettoyage de(s) filtre(s) à tamis et du pot à boue (si présent(s))\ne) Nettoyage des échangeurs hydrauliques (si présents)\nf) Contrôle visuel et auditif de l'ensemble des unités intérieures et extérieures\ng) Contrôle d'étanchéité des installations de fluide frigorigène\nh) Vérification et resserrage des connexions électriques\ni) Vérification des circuits électroniques et des organes de sécurité\nj) Vérification du bon fonctionnement de la pompe à chaleur et de l'appoint électrique éventuel\nk) Vérification du fonctionnement de la régulation et des réglages\nl) Vérification électrique concernant la mise à terre\nm) Contrôle des performances (températures entrées et sortie d'air ou d'eau)\nn) Contrôle des paramètres de fonctionnement\no) Relevé des températures, des pressions et de la tension\np) Vérification du niveau d'eau\nq) Vérification des vis et écrous\nr) Vérification de l'état de l'isolation\ns) Contrôle du fluide caloporteur (si présent)\nt) Contrôle du pot à boues et contrôle d'absence de gaz en points hauts\nu) Contrôle du désembouage\nv) Rapport d'intervention complet\n\n2. Nettoyage panneaux photovoltaïques (PV Clean)\na) Nettoyage simple : dépoussiérage\nb) Nettoyage mécanique : utilisation de perches télescopiques ou brosses rotatives et d'eau déminéralisée.\nc) Pose d'une couche protectrice\nd) Rapport de nettoyage\n\n3. Entretien panneaux photovoltaïques\na) Sur le toit :\ni. Contrôle d'étanchéité de la toiture\nii. Vérification visuelle sous les panneaux de l'état général des panneaux photovoltaïques\niii. Contrôles de sécurité\niv. Vérification de l'état du système de montage des panneaux photovoltaïques\nv. Vérification et ajustement des paramètres de l'onduleur\nvi. Vérification des serrages de connexion des câbles\nvii. Diagnostic électrique\nb) En bas de l'habitat :\ni. Vérification du tableau électrique et resserrage des bornes\nii. Vérification des parafoudres AC et DC\niii. Vérification du bon fonctionnement des dispositifs de coupure d'urgence\niv. Vérification de l'état de l'onduleur/batterie de stockage (si existant)\nc) Monitoring à distance :\ni. Mise à jour du logiciel\nii. Rapport d'intervention\n\n4. Entretien boiler thermodynamique\na) Inspection générale :\ni. Vérification de l'état du ballon et des éléments chauffants\nii. Analyse des éventuelles fuites ou trace de corrosion\nb) Nettoyage :\ni. Nettoyage du boiler\nii. Nettoyage des grilles de ventilation\nc) Contrôle du circuit frigorifique :\ni. Inspection des pressions et températures de fonctionnement\nii. Recherche de fuites éventuelles de fluide frigorigène\niii. Contrôle d'étanchéité gaz et eau\nd) Diagnostic technique :\ni. Vérification du thermostat et des ondes de température\nii. Tests de sécurité\ne) Maintenance :\ni. Vérification des réglages pour optimiser la consommation énergétique\nf) Rapport d'intervention",
      },
      {
        _key: 'cge8',
        title: 'ARTICLE 8 – MODALITÉS DE PAIEMENT ET FACTURATION',
        content: "1. Paiement initial et modalités\n• Le paiement de la première annuité (pour les contrats Zen Équilibre et Zen Plus) et les paiements biennaux (pour le contrat Zen Accès) s'effectuent en ligne lors de la souscription, via carte bancaire, e-banking ou QR-facture, ou bien sur facture lors de cas particuliers.\n• Les facturations annuelles ou biennales suivantes sont établies à la date anniversaire de souscription du contrat, par QR-facture.\n\n2. Révision des tarifs\n• Les tarifs sont garantis pendant la durée initiale du contrat. Toute modification ultérieure fera l'objet d'un avenant.",
      },
      {
        _key: 'cge9',
        title: 'ARTICLE 9 – DURÉE, RENOUVELLEMENT ET RÉSILIATION',
        content: "1. Durée du contrat\n• Les contrats d'entretien (Zen Accès, Zen Équilibre, Zen Plus) sont conclus pour une durée minimale de 4 ans.\n• Le contrat de nettoyage PV Clean est conclu pour une seule prestation.\n\n2. Renouvellement\n• À l'issue de la période initiale, le contrat est automatiquement renouvelé pour une nouvelle période de 1 an, sauf résiliation par l'une des parties dans les conditions prévues à cet effet.\n\n3. Modalités de résiliation\n• La résiliation anticipée est possible moyennant un préavis écrit de trois mois avant la date de renouvellement, et uniquement dans les cas suivants : catastrophe naturelle, décès, vente de la maison, installation hors services (sous réserve d'acceptation par Zen Énergie Services)\n\n4. Conséquences de la résiliation\n• En cas de résiliation, le Client recevra une copie complète des rapports d'intervention réalisés jusqu'à la date effective de résiliation.",
      },
      {
        _key: 'cge10',
        title: 'ARTICLE 10 – RESPONSABILITÉS, GARANTIES ET LIMITATIONS',
        content: "1. Responsabilités\n• Zen Énergie Services Suisse n'est pas responsable des dysfonctionnements liés à un entretien insuffisant antérieur à la souscription.\n• La responsabilité de Zen Énergie Services Suisse se limite à la bonne exécution des prestations contractuelles, sans extension aux dommages indirects.\n\n2. Garanties\n• En cas d'intervention non conforme, Zen Énergie Services Suisse s'engage à effectuer une nouvelle intervention corrective sans frais supplémentaires.\n\n3. Limitation de garantie\n• Toute prestation non expressément prévue dans le contrat fera l'objet d'un devis complémentaire.",
      },
      {
        _key: 'cge11',
        title: 'ARTICLE 11 – CONFIDENTIALITÉ ET PROTECTION DES DONNÉES',
        content: "1. Confidentialité\n• Les parties s'engagent à maintenir la confidentialité de toutes les informations échangées dans le cadre de l'exécution du contrat.\n\n2. Protection des données\n• Les données personnelles du Client seront traitées conformément à la législation en vigueur et à la politique de confidentialité affichée sur le site.",
      },
      {
        _key: 'cge12',
        title: 'ARTICLE 12 – MODIFICATION DES CGE ET COMMUNICATION',
        content: "1. Modification des CGE\n• Zen Énergie Services Suisse se réserve le droit de modifier les présentes CGE. Toute modification sera notifiée au Client au moins 30 jours avant son entrée en vigueur.\n\n2. Communication\n• Toutes les notifications seront transmises par voie électronique (courriel) et/ou par courrier recommandé.",
      },
      {
        _key: 'cge13',
        title: 'ARTICLE 13 – FORCE MAJEURE',
        content: "Aucune des parties ne pourra être tenue responsable de l'inexécution de ses obligations en cas de force majeure (catastrophes naturelles, grèves, interruptions de service de prestataires externes, etc.), telle que définie par la jurisprudence.",
      },
      {
        _key: 'cge14',
        title: 'ARTICLE 14 – DROIT APPLICABLE ET JURIDICTION COMPÉTENTE',
        content: "1. Droit applicable\n• Les présentes CGE sont régies par le droit suisse.\n\n2. Juridiction\n• En cas de litige relatif à l'exécution ou à l'interprétation du contrat, les tribunaux du canton de Genève seront compétents, sauf disposition impérative contraire.",
      },
      {
        _key: 'cge15',
        title: 'ARTICLE 15 – DISPOSITIONS DIVERSES',
        content: "1. Indépendance des clauses\n• Si une ou plusieurs dispositions des présentes CGE sont déclarées nulles ou inapplicables, les autres dispositions demeureront en vigueur.\n\n2. Intégralité du contrat\n• Les présentes CGE, complétées par les Conditions Générales de Vente (CGV) le cas échéant, constituent l'intégralité de l'accord entre les parties.",
      },
    ],
  },

  // ── CGU ───────────────────────────────────────────────────────────────────
  {
    _id: 'legal-cgu',
    _type: 'legalPage',
    pageId: 'cgu',
    heroTitle: "Conditions Générales d'Utilisation",
    lastUpdated: '01.04.2025',
    sections: [
      {
        _key: 'cgu0',
        title: '',
        content: "Le site Internet www.zen-energie-services.com/ch est édité par Zen Énergie Services Suisse Sàrl, dont le siège est situé à Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, inscrite au Registre du Commerce suisse sous le numéro CH-660.5.256.023-9.\n\nEn accédant et en naviguant sur le Site, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces termes, veuillez ne pas utiliser le Site.",
      },
      {
        _key: 'cgu1',
        title: 'ARTICLE 1 – OBJET',
        content: "Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités et conditions d'utilisation du site Internet (ci-après \"le Site\"), édité par Zen Énergie Services Suisse (ci-après \"la Société\").\nEn accédant et en utilisant le Site, l'utilisateur reconnaît avoir pris connaissance des présentes CGU et les accepter sans réserve.",
      },
      {
        _key: 'cgu2',
        title: "ARTICLE 2 – IDENTITÉ DE L'ÉDITEUR ET CONTACT",
        content: "Le Site est édité par :\nZen Énergie Services Suisse Sàrl\nAdresse : Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates\nNuméro d'enregistrement au Registre du Commerce : CH-660.5.256.023-9.\nTéléphone : +41 21 512 05 74\nEmail : contact@zen-energieservices.ch\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870",
      },
      {
        _key: 'cgu3',
        title: 'ARTICLE 3 – ACCÈS AU SITE',
        content: "3.1. Gratuité de l'accès\nL'accès au Site est gratuit, hors frais de connexion à Internet à la charge de l'Utilisateur.\n\n3.2. Disponibilité\nLe Site est accessible 24h/24 et 7j/7, sous réserve d'interruptions pour maintenance ou mise à jour, ou en cas de force majeure.\n\n3.3. Conditions d'accès\nCertaines sections du Site, notamment l'espace client, nécessitent une authentification via des identifiants personnels. L'Utilisateur s'engage à préserver la confidentialité de ses identifiants.",
      },
      {
        _key: 'cgu4',
        title: 'ARTICLE 4 – SERVICES PROPOSÉS SUR LE SITE',
        content: "Le Site propose notamment les fonctionnalités suivantes :\n• Simulateur de contrats : pour obtenir des recommandations de contrats d'entretien adaptés aux besoins.\n• Souscription et paiement en ligne : pour finaliser la commande des contrats proposés.\n• Espace client : pour gérer les contrats, consulter les factures et suivre les prestations réalisées.",
      },
      {
        _key: 'cgu5',
        title: "ARTICLE 5 – RESPONSABILITÉ DE L'UTILISATEUR",
        content: "L'Utilisateur s'engage à :\n• Utiliser le Site dans le respect des lois et règlements en vigueur en Suisse.\n• Ne pas détourner le Site à des fins frauduleuses ou illicites.\n• Ne pas tenter d'altérer ou de nuire au bon fonctionnement du Site, notamment en introduisant des virus ou autres logiciels malveillants.",
      },
      {
        _key: 'cgu6',
        title: 'ARTICLE 6 – RESPONSABILITÉ DE ZEN ÉNERGIE SERVICES',
        content: "6.1. Informations publiées : Zen Énergie Services Suisse s'efforce de fournir des informations exactes mais ne peut garantir leur exhaustivité.\n6.2. Fonctionnement du Site : La Société décline toute responsabilité en cas de dysfonctionnement technique ou perte de données liée à l'utilisation.",
      },
      {
        _key: 'cgu7',
        title: 'ARTICLE 7 – PROPRIÉTÉ INTELLECTUELLE',
        content: 'Tous les contenus du Site sont protégés par le droit suisse. Toute reproduction sans accord préalable écrit est strictement interdite.',
      },
      {
        _key: 'cgu8',
        title: 'ARTICLE 8 – DONNÉES PERSONNELLES ET COOKIES',
        content: 'La collecte et le traitement des données sont régis par notre Politique de protection des données et notre Politique de cookies.',
      },
      {
        _key: 'cgu9',
        title: 'ARTICLE 9 – MODIFICATIONS DES CGU',
        content: 'Zen Énergie Services Suisse se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication.',
      },
      {
        _key: 'cgu10',
        title: 'ARTICLE 10 – DROIT APPLICABLE ET FOR JUDICIAIRE',
        content: "Les présentes CGU sont régies par le droit suisse. Tout litige relève de la compétence exclusive des tribunaux du siège de Zen Énergie Services Suisse.",
      },
    ],
  },

  // ── CGV ───────────────────────────────────────────────────────────────────
  {
    _id: 'legal-cgv',
    _type: 'legalPage',
    pageId: 'cgv',
    heroTitle: 'Conditions Générales de Vente',
    lastUpdated: '01.04.2025',
    sections: [
      {
        _key: 'cgv1',
        title: 'ARTICLE 1 – OBJET',
        content: "Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Zen Énergie Services Suisse Sàrl et ses clients dans le cadre de la souscription et de l'exécution des contrats d'entretien des pompes à chaleur, panneaux photovoltaïques et boilers thermodynamiques.\n\nZen Énergie Services Suisse propose ses prestations dans le but d'améliorer la performance, la durabilité et la sécurité des équipements énergétiques verts des particuliers.",
      },
      {
        _key: 'cgv2',
        title: 'ARTICLE 2 – SERVICES PROPOSÉS',
        content: "2.1. Nature des services\nZen Énergie Services Suisse propose les contrats suivants :\n1. Zen Accès : entretien tous les 2 ans, avec suivi en ligne.\n2. Zen Équilibre : entretien annuel, avec suivi en ligne.\n3. Zen Plus : entretien annuel, dépannage inclus (main-d'œuvre et déplacements compris).\n4. PV Clean : nettoyage ponctuel des panneaux solaires.\n\n2.2. Exclusions\nLes prestations couvertes par les contrats d'entretien n'incluent pas :\n• Le remplacement des pièces défectueuses ou usées.\n• Les consommables nécessaires au bon fonctionnement des équipements.\n• Les réparations nécessitant des modifications structurelles de l'installation.\n\nLes pièces de rechange, si nécessaires, seront facturées en sus et feront l'objet d'un devis soumis à l'approbation préalable du Client.\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870",
      },
      {
        _key: 'cgv3',
        title: 'ARTICLE 3 – SOUSCRIPTION ET PAIEMENT',
        content: "3.1. Souscription\nLa souscription se fait en ligne ou par téléphone sur le site officiel de Zen Énergie Services Suisse.\n\n3.2. Modalités de paiement\n• Paiement annuel pour les contrats Zen Équilibre & Zen Plus : le paiement s'effectue annuellement sur la période des 4 années de contrat. Le paiement de la première année de contrat est exigé au moment de la souscription. Les moyens de paiement acceptés sont : carte bancaire, e-banking, QR-facture, acomptes.\n• Paiement biennal (tous les 2 ans) pour les contrats Zen Accès : le paiement s'effectue chaque 2 ans sur la période des 4 années de contrat. Les moyens de paiement acceptés sont : carte bancaire, e-banking, 3x, QR-facture, acomptes.\n• Paiements suivants : à chaque date anniversaire de la souscription, une facture sera envoyée pour le règlement des annuités ou biennalités suivantes.\n\nEn cas de retard de paiement :\n• Des intérêts moratoires au taux légal en vigueur ainsi qu'une indemnité forfaitaire de 20 CHF par rappel seront appliqués.\n• Après trois rappels infructueux, Zen Énergie Services Suisse se réserve le droit de suspendre les prestations.\n\n3.3. Engagement contractuel\nLe contrat est conclu pour une période initiale de 4 ans. Toute résiliation anticipée est soumise aux conditions détaillées à l'article 6.",
      },
      {
        _key: 'cgv4',
        title: "ARTICLE 4 – EXÉCUTION DES SERVICES",
        content: "4.1. Planification des interventions\nZen Énergie Services Suisse s'engage à planifier et à exécuter les interventions d'entretien dans les délais convenus.\n\n4.2. Obligations du Client\nLe Client doit garantir un accès sûr et fonctionnel aux équipements. Si le lieu d'intervention est inaccessible ou si le Client est absent sans notification préalable, Zen Énergie Services Suisse se réserve le droit de facturer des frais supplémentaires.\n\n4.3. Partenaires externes agréés\nPour garantir une intervention rapide et efficace, Zen Énergie Services Suisse peut faire appel à des partenaires externes agréés. Le Client sera informé si une intervention est réalisée par un partenaire externe.",
      },
      {
        _key: 'cgv5',
        title: 'ARTICLE 5 – GARANTIE DES PRESTATIONS',
        content: "Zen Énergie Services Suisse garantit la qualité des services d'entretien réalisés conformément aux bonnes pratiques professionnelles.\n\n5.1. Défauts imputables à Zen Énergie Services\nEn cas de défaut imputable à l'intervention, Zen Énergie Services Suisse s'engage à effectuer une réparation gratuite dans les meilleurs délais.\n\n5.2. Limites de garantie\nCette garantie est limitée aux prestations réalisées et n'inclut pas :\n• Les défauts ou pannes liés à des pièces défectueuses ou usées.\n• Les vices de fabrication ou de conception des équipements.\n• Les dommages causés par une utilisation incorrecte ou un défaut d'entretien préalable.",
      },
      {
        _key: 'cgv6',
        title: 'ARTICLE 6 – RÉSILIATION ET ANNULATION',
        content: "6.1. Résiliation ordinaire\n• Le contrat peut être résilié à l'issue de la durée initiale de 4 ans ou de chaque période de renouvellement annuel, avec un préavis de 3 mois.\n• La résiliation doit être notifiée par écrit (lettre recommandée ou e-mail avec accusé de réception).\n\n6.2. Résiliation anticipée\nLa résiliation avant la fin de la période d'engagement est possible uniquement dans les cas suivants :\n1. Déménagement hors zone d'intervention.\n2. Force majeure : décès, incapacité permanente ou autre événement rendant impossible l'exécution du contrat.\n3. Manquement grave de Zen Énergie Services Suisse après une mise en demeure restée sans réponse pendant 30 jours.\n\n6.3. Conséquences de la résiliation anticipée\n• En cas de résiliation anticipée sans motif valable, le Client est redevable de 50 % des mensualités restantes.\n\n6.4. Droit de rétractation\nLe Client dispose d'un délai de 14 jours à compter de la date de souscription pour annuler le contrat.",
      },
      {
        _key: 'cgv7',
        title: 'ARTICLE 7 – PROTECTION DES DONNÉES',
        content: "Zen Énergie Services Suisse s'engage à protéger les données personnelles de ses Clients conformément à la Loi fédérale sur la protection des données (LPD).\n\nDroits du Client\nLe Client peut demander :\n• Une copie des données personnelles détenues.\n• La rectification ou la suppression des informations incorrectes.\n• Toute violation de données sera signalée aux autorités compétentes et aux personnes concernées.",
      },
      {
        _key: 'cgv8',
        title: 'ARTICLE 8 – RÈGLEMENT DES LITIGES',
        content: "En cas de différend, les parties conviennent de rechercher une solution amiable, éventuellement via un processus de médiation, avant toute saisine des tribunaux compétents.",
      },
      {
        _key: 'cgv9',
        title: 'ARTICLE 9 – DROIT APPLICABLE ET FOR JUDICIAIRE',
        content: "1. Les présentes Conditions Générales sont régies par le droit suisse.\n2. Tout litige opposant les parties sera soumis à la compétence exclusive des tribunaux situés au lieu du siège de Zen Énergie Services Suisse Sàrl.\n3. Zen Énergie Services Suisse se réserve toutefois le droit d'introduire une action judiciaire au siège ou au domicile du défendeur.\n4. Le présent contrat constitue une reconnaissance de dette au sens de l'article 82 de la LP.\n5. L'application de la Convention des Nations Unies sur les contrats de vente internationale de marchandises est expressément exclue.",
      },
      {
        _key: 'cgv10',
        title: 'ARTICLE 10 – ACCEPTATION DES CGV',
        content: "La validation de la souscription vaut acceptation sans réserve des présentes Conditions Générales de Vente.\n\nLes présentes sont à jour au 1er avril 2025.",
      },
    ],
  },

  // ── Politique de confidentialité & cookies ────────────────────────────────
  {
    _id: 'legal-confidentialite',
    _type: 'legalPage',
    pageId: 'confidentialite',
    heroTitle: 'Politique de Confidentialité & Cookies',
    lastUpdated: '01.04.2025',
    sections: [
      {
        _key: 'pc1',
        title: 'Introduction',
        content: "Zen Énergie Services Suisse attache une grande importance à la confidentialité et à la protection des données personnelles des utilisateurs de son site et de ses clients. Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.",
      },
      {
        _key: 'pc2',
        title: 'Données collectées',
        content: "Les données personnelles suivantes peuvent être collectées :\n• Identité : nom, prénom, adresse email, numéro de téléphone, adresse postale.\n• Données techniques : adresse IP, type de navigateur, système d'exploitation, données de navigation sur le site.\n• Données contractuelles : informations nécessaires pour souscrire et gérer les contrats d'entretien et de maintenance.",
      },
      {
        _key: 'pc3',
        title: 'Utilisation des données',
        content: "Vos données personnelles sont collectées et utilisées dans le cadre suivant :\n1. Gestion des souscriptions à nos services d'entretien.\n2. Envoi de communications commerciales ou techniques.\n3. Analyse du trafic sur le site pour l'amélioration de nos services.\n4. Respect des obligations légales et contractuelles.",
      },
      {
        _key: 'pc4',
        title: 'Durée de conservation',
        content: "Les données sont conservées uniquement pour la durée nécessaire à la réalisation des finalités mentionnées, conformément à la loi suisse.",
      },
      {
        _key: 'pc5',
        title: 'Droits des utilisateurs',
        content: "Conformément à la législation suisse, vous disposez des droits suivants :\n• Droit d'accès : connaître les données que nous détenons sur vous.\n• Droit de rectification : corriger des données inexactes.\n• Droit à l'effacement : demander la suppression de vos données, sauf obligation légale contraire.\n• Droit d'opposition : vous opposer à l'utilisation de vos données à des fins de marketing direct.\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870",
      },
      {
        _key: 'pc6',
        title: 'Sécurité',
        content: "Zen Énergie Services Suisse met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre les accès non autorisés, la perte ou le vol.",
      },
      {
        _key: 'pc7',
        title: "Qu'est-ce qu'un cookie ?",
        content: "Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur un site web.",
      },
      {
        _key: 'pc8',
        title: 'Types de cookies utilisés par Zen Énergie Services Suisse',
        content: "1. Cookies strictement nécessaires : indispensables pour naviguer sur notre site et utiliser ses fonctionnalités.\n2. Cookies de performance : utilisés pour analyser l'audience du site (via des outils comme Google Analytics).\n3. Cookies fonctionnels : permettent de mémoriser vos choix (langue, préférences).\n4. Cookies publicitaires : utilisés pour afficher des publicités ciblées (le cas échéant).",
      },
      {
        _key: 'pc9',
        title: 'Consentement',
        content: "Lors de votre première visite, un bandeau vous informe de l'utilisation des cookies. Vous pouvez accepter ou configurer vos préférences via ce bandeau.",
      },
      {
        _key: 'pc10',
        title: 'Gestion des cookies',
        content: "Vous pouvez désactiver les cookies en modifiant les paramètres de votre navigateur :\n• Pour Chrome : https://support.google.com/chrome/answer/95647\n• Pour Firefox : https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent",
      },
      {
        _key: 'pc11',
        title: 'Contact',
        content: "Pour toute question sur vos données personnelles ou pour exercer vos droits, contactez-nous à : contact@zen-energieservices.ch\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870",
      },
      {
        _key: 'pc12',
        title: 'Modifications',
        content: "Cette politique pourra être mise à jour régulièrement. Toute modification sera publiée sur cette page.",
      },
    ],
  },
]

// ── Seed ──────────────────────────────────────────────────────────────────────

async function seed() {
  console.log(`\nSeeding ${legalPages.length} legal page documents into Sanity...\n`)

  const transaction = client.transaction()
  for (const doc of legalPages) {
    transaction.createOrReplace(doc)
  }

  const result = await transaction.commit()
  console.log(`✓ Successfully seeded ${legalPages.length} legal page documents!`)
  console.log(`  Transaction ID: ${result.transactionId}`)
  legalPages.forEach(p => console.log(`  ✓ ${p.pageId}`))

  const count = await client.fetch('count(*[_type == "legalPage"])')
  console.log(`\n✓ Verification: ${count} legalPage documents in Sanity\n`)
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
