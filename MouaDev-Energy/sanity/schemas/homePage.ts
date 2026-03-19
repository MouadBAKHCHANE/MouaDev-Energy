import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Page d\'accueil',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'ourServices', title: 'Nos Services (carousel)' },
    { name: 'servicesLime', title: 'Services (fond vert)' },
    { name: 'about', title: 'À propos' },
    { name: 'pricing', title: 'Tarifs' },
    { name: 'process', title: 'Process d\'intervention' },
    { name: 'marquee', title: 'Bandeau défilant' },
    { name: 'news', title: 'Actualités' },
  ],
  fields: [
    // ═══════════════════════════════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo', description: 'Apparaît dans l\'onglet du navigateur et les résultats Google. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, group: 'seo', description: 'Résumé affiché sous le titre dans les résultats Google. ~155 caractères max.' }),

    // ═══════════════════════════════════════════════════════════════════════════
    // HERO
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'heroBadge',
      title: 'Badge (ex: "Suisse Romande")',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Titre principal',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroAccentWord',
      title: 'Mot en couleur accent (ex: "confiance")',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroBgImage',
      title: 'Image de fond',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),
    defineField({
      name: 'heroCta',
      title: 'Texte du bouton CTA',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Lien du bouton CTA',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroReviewCount',
      title: 'Nombre d\'avis (ex: "100+ avis")',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroRating',
      title: 'Note (ex: "4.96 sur 5")',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTickerText',
      title: 'Texte du bandeau défilant',
      type: 'string',
      group: 'hero',
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // OUR SERVICES (carousel)
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'ourServicesLabel',
      title: 'Label de section',
      type: 'string',
      group: 'ourServices',
    }),
    defineField({
      name: 'ourServicesTitle',
      title: 'Titre',
      type: 'string',
      group: 'ourServices',
    }),
    defineField({
      name: 'ourServicesDesc',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'ourServices',
    }),
    defineField({
      name: 'ourServicesCta',
      title: 'Texte du bouton',
      type: 'string',
      group: 'ourServices',
    }),
    defineField({
      name: 'ourServicesCards',
      title: 'Cartes de services',
      type: 'array',
      group: 'ourServices',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'icon', title: 'Icône', type: 'image' },
            { name: 'link', title: 'Lien', type: 'string' },
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // SERVICES LIME (fond vert)
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'slimeTitle',
      title: 'Titre',
      type: 'text',
      rows: 2,
      group: 'servicesLime',
    }),
    defineField({
      name: 'slimeAccent',
      title: 'Partie du titre en couleur accent',
      type: 'string',
      group: 'servicesLime',
    }),
    defineField({
      name: 'slimeDesc',
      title: 'Description',
      type: 'text',
      rows: 2,
      group: 'servicesLime',
    }),
    defineField({
      name: 'slimeCta',
      title: 'Texte du bouton',
      type: 'string',
      group: 'servicesLime',
    }),
    defineField({
      name: 'slimeStats',
      title: 'Statistiques',
      type: 'array',
      group: 'servicesLime',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Valeur', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({
      name: 'slimeCards',
      title: 'Cartes de services',
      type: 'array',
      group: 'servicesLime',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 2 },
            { name: 'icon', title: 'Icône', type: 'image' },
          ],
          preview: { select: { title: 'title', media: 'icon' } },
        },
      ],
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // ABOUT
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'aboutLabel',
      title: 'Label de section',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'Titre',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutBody',
      title: 'Texte principal',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutCta',
      title: 'Texte du bouton',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'about',
    }),
    defineField({
      name: 'aboutFeatures',
      title: 'Points forts',
      type: 'array',
      group: 'about',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // PRICING
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'pricingLabel',
      title: 'Label de section',
      type: 'string',
      group: 'pricing',
    }),
    defineField({
      name: 'pricingTitle',
      title: 'Titre',
      type: 'string',
      group: 'pricing',
    }),
    defineField({
      name: 'pricingDesc',
      title: 'Description',
      type: 'text',
      rows: 2,
      group: 'pricing',
    }),
    defineField({
      name: 'pricingCards',
      title: 'Cartes de prix',
      type: 'array',
      group: 'pricing',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'price', title: 'Prix', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'ctaText', title: 'Texte du bouton', type: 'string' },
            { name: 'ctaLink', title: 'Lien du bouton', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'price', media: 'image' } },
        },
      ],
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // PROCESS (FunFact)
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'processLabel',
      title: 'Label de section',
      type: 'string',
      group: 'process',
    }),
    defineField({
      name: 'processTitle',
      title: 'Titre',
      type: 'string',
      group: 'process',
    }),
    defineField({
      name: 'processSubtitle',
      title: 'Sous-titre (en couleur accent)',
      type: 'string',
      group: 'process',
    }),
    defineField({
      name: 'processDesc',
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'process',
    }),
    defineField({
      name: 'processSteps',
      title: 'Étapes',
      type: 'array',
      group: 'process',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 3 },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'icon', title: 'Icône', type: 'image' },
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // MARQUEE
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'marqueeLight',
      title: 'Textes bandeau clair',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'marquee',
    }),
    defineField({
      name: 'marqueeDark',
      title: 'Textes bandeau foncé',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'marquee',
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // NEWS
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'newsLabel',
      title: 'Label de section',
      type: 'string',
      group: 'news',
    }),
    defineField({
      name: 'newsTitle',
      title: 'Titre',
      type: 'string',
      group: 'news',
    }),
    defineField({
      name: 'newsCta',
      title: 'Texte du bouton',
      type: 'string',
      group: 'news',
    }),
    defineField({
      name: 'newsArticles',
      title: 'Articles mis en avant',
      type: 'array',
      group: 'news',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'author', title: 'Auteur', type: 'string' },
            { name: 'readTime', title: 'Temps de lecture', type: 'string' },
            { name: 'link', title: 'Lien', type: 'string' },
          ],
          preview: { select: { title: 'title', media: 'image' } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page d\'accueil' }
    },
  },
})
