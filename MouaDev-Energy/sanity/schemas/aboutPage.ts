import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Qui sommes-nous' },
    { name: 'whyChoose', title: 'Pourquoi nous choisir' },
  ],
  fields: [
    // ═══════════════════════════════════════════════════════════════════════════
    // HERO
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'heroTitle',
      title: 'Titre du hero',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroBgImage',
      title: 'Image de fond du hero',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // QUI SOMMES-NOUS
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'introLabel',
      title: 'Label de section',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'introTitle',
      title: 'Titre',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'introParagraphs',
      title: 'Paragraphes',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
      group: 'intro',
    }),
    defineField({
      name: 'introImage',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      group: 'intro',
    }),
    defineField({
      name: 'introCta',
      title: 'Texte du bouton CTA',
      type: 'string',
      group: 'intro',
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // POURQUOI NOUS CHOISIR
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'whyLabel',
      title: 'Label de section',
      type: 'string',
      group: 'whyChoose',
    }),
    defineField({
      name: 'whyTitle',
      title: 'Titre',
      type: 'text',
      rows: 2,
      group: 'whyChoose',
    }),
    defineField({
      name: 'whyBgImage',
      title: 'Image de fond',
      type: 'image',
      options: { hotspot: true },
      group: 'whyChoose',
    }),
    defineField({
      name: 'whyFeatures',
      title: 'Points forts',
      type: 'array',
      group: 'whyChoose',
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
    defineField({
      name: 'whyTickerText',
      title: 'Texte du bandeau défilant',
      type: 'string',
      group: 'whyChoose',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page À propos' }
    },
  },
})
