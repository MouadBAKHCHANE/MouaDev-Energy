import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  groups: [
    { name: 'general', title: 'Général', default: true },
    { name: 'page', title: 'Page détaillée' },
    { name: 'pricing', title: 'Tarification' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    // ── General ──
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'general',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'general',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'shortDesc',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      group: 'general',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image héro',
      type: 'image',
      options: { hotspot: true },
      group: 'general',
    }),
    defineField({
      name: 'heroImg',
      title: 'Image héro (chemin local — fallback)',
      type: 'string',
      hidden: true,
      group: 'general',
    }),
    defineField({
      name: 'iconImage',
      title: 'Icône',
      type: 'image',
      group: 'general',
    }),
    defineField({
      name: 'icon',
      title: 'Icône (chemin local — fallback)',
      type: 'string',
      hidden: true,
      group: 'general',
    }),
    defineField({
      name: 'accentColor',
      title: 'Couleur accent (hex)',
      type: 'string',
      description: 'Ex: #E8552C pour PAC, #2a9b96 pour PV',
      group: 'general',
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      group: 'general',
    }),

    // ── Page détaillée ──
    defineField({
      name: 'introHeadline',
      title: "Titre d'accroche (overlay sur image)",
      type: 'text',
      rows: 3,
      group: 'page',
    }),
    defineField({
      name: 'introImage',
      title: "Image d'introduction",
      type: 'image',
      options: { hotspot: true },
      group: 'page',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      group: 'page',
    }),
    defineField({
      name: 'body',
      title: 'Corps (paragraphes)',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'page',
    }),
    defineField({
      name: 'includes',
      title: 'Ce que comprend le service',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'page',
    }),
    defineField({
      name: 'steps',
      title: 'Étapes du processus',
      type: 'array',
      group: 'page',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: 'whyTitle',
      title: 'Pourquoi entretenir — titre',
      type: 'string',
      group: 'page',
    }),
    defineField({
      name: 'whyIntro',
      title: 'Pourquoi entretenir — introduction',
      type: 'text',
      rows: 3,
      group: 'page',
    }),
    defineField({
      name: 'whyBullets',
      title: 'Pourquoi entretenir — points clés',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'page',
    }),
    defineField({
      name: 'detailImages',
      title: 'Images de détail (2)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'page',
    }),

    // ── Pricing ──
    defineField({
      name: 'pricingHeader',
      title: 'Titre tarification',
      type: 'string',
      description: 'Ex: "À partir de CHF 450.-/ an !"',
      group: 'pricing',
    }),
    defineField({
      name: 'plans',
      title: 'Offres',
      type: 'array',
      group: 'pricing',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'num', title: 'Numéro', type: 'string' }),
            defineField({ name: 'title', title: 'Titre', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Sous-titre', type: 'string' }),
            defineField({ name: 'features', title: 'Fonctionnalités', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'price', title: 'Prix', type: 'string' }),
          ],
          preview: { select: { title: 'title', subtitle: 'price' } },
        },
      ],
    }),
    defineField({
      name: 'discountBoxes',
      title: 'Boîtes de remise',
      type: 'array',
      group: 'pricing',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'pct', title: 'Pourcentage', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'string' }),
            defineField({ name: 'highlight', title: 'Texte mis en valeur', type: 'string' }),
            defineField({ name: 'iconCount', title: "Nombre d'icônes", type: 'number' }),
          ],
          preview: { select: { title: 'pct', subtitle: 'desc' } },
        },
      ],
    }),
    defineField({
      name: 'disclaimer',
      title: 'Mention légale',
      type: 'text',
      rows: 4,
      group: 'pricing',
    }),

    // ── FAQ ──
    defineField({
      name: 'faqs',
      title: 'Questions fréquentes',
      type: 'array',
      group: 'faq',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Réponse', type: 'text', rows: 8 }),
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
    defineField({
      name: 'faqSectionTitle',
      title: 'Titre section FAQ',
      type: 'string',
      group: 'faq',
    }),
  ],
  orderings: [
    {
      title: 'Ordre',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'shortDesc' },
  },
})
