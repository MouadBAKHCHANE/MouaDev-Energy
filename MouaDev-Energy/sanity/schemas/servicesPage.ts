import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Page Services',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'cards', title: 'Grille de services' },
    { name: 'stats', title: 'Statistiques' },
    { name: 'experience', title: "L'expérience Zen" },
    { name: 'details', title: 'Détails des services' },
    { name: 'cta', title: 'Bannière CTA' },
  ],
  fields: [
    // ── SEO ──
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo', description: 'Apparaît dans l\'onglet du navigateur et les résultats Google. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, group: 'seo', description: 'Résumé affiché sous le titre dans les résultats Google. ~155 caractères max.' }),

    // ── Hero ──
    defineField({ name: 'heroTitle', title: 'Titre du hero', type: 'string', group: 'hero' }),
    defineField({ name: 'heroBgImage', title: 'Image de fond du hero', type: 'image', options: { hotspot: true }, group: 'hero' }),

    // ── Services card grid ──
    defineField({ name: 'cardsLabel', title: 'Label', type: 'string', group: 'cards' }),
    defineField({ name: 'cardsTitle', title: 'Titre', type: 'string', group: 'cards' }),
    defineField({ name: 'cardsDesc', title: 'Description', type: 'text', rows: 3, group: 'cards' }),
    defineField({
      name: 'serviceCards',
      title: 'Cartes de services',
      type: 'array',
      group: 'cards',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Titre', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
          defineField({ name: 'img', title: 'Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'icon', title: 'Icône', type: 'image' }),
          defineField({ name: 'href', title: 'Lien', type: 'string' }),
        ],
        preview: {
          select: { title: 'title', media: 'img' },
        },
      }],
    }),

    // ── Stats ──
    defineField({ name: 'statsLabel', title: 'Label', type: 'string', group: 'stats' }),
    defineField({ name: 'statsTitle', title: 'Titre', type: 'string', group: 'stats' }),
    defineField({ name: 'statsDesc', title: 'Description', type: 'text', rows: 3, group: 'stats' }),
    defineField({
      name: 'stats',
      title: 'Statistiques',
      type: 'array',
      group: 'stats',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'tag', title: 'Tag', type: 'string' }),
          defineField({ name: 'prefix', title: 'Préfixe', type: 'string' }),
          defineField({ name: 'num', title: 'Nombre', type: 'number' }),
          defineField({ name: 'suffix', title: 'Suffixe', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: {
          select: { title: 'tag', subtitle: 'num' },
        },
      }],
    }),
    defineField({ name: 'quoteTitle', title: 'Citation — titre', type: 'string', group: 'stats' }),
    defineField({ name: 'quoteBody', title: 'Citation — corps', type: 'text', rows: 4, group: 'stats' }),

    // ── L'expérience Zen ──
    defineField({ name: 'expLabel', title: 'Label', type: 'string', group: 'experience' }),
    defineField({ name: 'expTitle', title: 'Titre', type: 'string', group: 'experience' }),
    defineField({ name: 'expImage', title: 'Image', type: 'image', options: { hotspot: true }, group: 'experience' }),
    defineField({
      name: 'expItems',
      title: 'Atouts',
      type: 'array',
      group: 'experience',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Titre', type: 'string' }),
          defineField({ name: 'text', title: 'Texte', type: 'text', rows: 2 }),
          defineField({ name: 'icon', title: 'Icône', type: 'image' }),
        ],
        preview: {
          select: { title: 'title' },
        },
      }],
    }),

    // ── Service detail sections ──
    defineField({
      name: 'serviceDetails',
      title: 'Sections détaillées',
      type: 'array',
      group: 'details',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'title', title: 'Titre', type: 'string' }),
          defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
          defineField({ name: 'img', title: 'Image', type: 'image', options: { hotspot: true } }),
          defineField({ name: 'features', title: 'Points clés', type: 'array', of: [{ type: 'string' }] }),
          defineField({ name: 'href', title: 'Lien', type: 'string' }),
          defineField({ name: 'imgLeft', title: 'Image à gauche', type: 'boolean', initialValue: true }),
        ],
        preview: {
          select: { title: 'label' },
        },
      }],
    }),

    // ── CTA Banner ──
    defineField({ name: 'ctaTitle', title: 'Titre CTA', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaAccent', title: 'Texte accent CTA', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaButtonText', title: 'Texte du bouton', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaButtonLink', title: 'Lien du bouton', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaQuestionLabel', title: 'Label question', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaQuestionDesc', title: 'Description question', type: 'text', rows: 3, group: 'cta' }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Services' }
    },
  },
})
