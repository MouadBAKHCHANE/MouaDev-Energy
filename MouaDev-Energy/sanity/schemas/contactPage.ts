import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Page Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Titre du hero',
      type: 'string',
    }),
    defineField({
      name: 'heroBgImage',
      title: 'Image de fond du hero',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sectionLabel',
      title: 'Label de section',
      type: 'string',
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Titre de section',
      type: 'string',
    }),
    defineField({
      name: 'formTitle',
      title: 'Titre du formulaire',
      type: 'string',
    }),
    defineField({
      name: 'submitText',
      title: 'Texte du bouton envoyer',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Page Contact' }
    },
  },
})
