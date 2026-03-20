import { defineType, defineField } from 'sanity'
import { makeSectionOrderField, LAYOUT_GROUP } from './helpers/sectionOrder'

export default defineType({
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  groups: [
    LAYOUT_GROUP,
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Qui sommes-nous' },
    { name: 'whyChoose', title: 'Pourquoi nous choisir' },
  ],
  fields: [
    makeSectionOrderField([
      { title: 'Hero', value: 'hero' },
      { title: 'Qui sommes-nous', value: 'intro' },
      { title: 'Pourquoi nous choisir', value: 'whyChoose' },
    ]),

    // ═══════════════════════════════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo', description: 'Apparaît dans l\'onglet du navigateur et les résultats Google. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, group: 'seo', description: 'Résumé affiché sous le titre dans les résultats Google. ~155 caractères max.' }),

    // ═══════════════════════════════════════════════════════════════════════════
    // HERO
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'heroTitle',
      title: 'Titre du hero',
      type: 'string',
      group: 'hero',
    }),
    defineField({ name: 'heroTitleStyle', title: 'Style du titre hero', type: 'textStyle', group: 'hero' }),
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
    defineField({ name: 'introTitleStyle', title: 'Style du titre', type: 'textStyle', group: 'intro' }),
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
    defineField({ name: 'whyTitleStyle', title: 'Style du titre', type: 'textStyle', group: 'whyChoose' }),
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
