import { defineType, defineField } from 'sanity'
import { makeSectionOrderField, LAYOUT_GROUP } from './helpers/sectionOrder'

export default defineType({
  name: 'contactPage',
  title: 'Page Contact',
  type: 'document',
  groups: [
    LAYOUT_GROUP,
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'form', title: 'Formulaire' },
  ],
  fields: [
    makeSectionOrderField([
      { title: 'Hero', value: 'hero' },
      { title: 'Formulaire de contact', value: 'contactForm' },
    ]),

    // ── SEO ──
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo', description: 'Apparaît dans l\'onglet du navigateur et les résultats Google. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, group: 'seo', description: 'Résumé affiché sous le titre dans les résultats Google. ~155 caractères max.' }),

    // ── Hero ──
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

    // ── Formulaire ──
    defineField({
      name: 'sectionLabel',
      title: 'Label de section',
      type: 'string',
      group: 'form',
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Titre de section',
      type: 'string',
      group: 'form',
    }),
    defineField({ name: 'sectionTitleStyle', title: 'Style du titre', type: 'textStyle', group: 'form' }),
    defineField({
      name: 'formTitle',
      title: 'Titre du formulaire',
      type: 'string',
      group: 'form',
    }),
    defineField({ name: 'formTitleStyle', title: 'Style du titre formulaire', type: 'textStyle', group: 'form' }),
    defineField({
      name: 'submitText',
      title: 'Texte du bouton envoyer',
      type: 'string',
      group: 'form',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Contact' }
    },
  },
})
