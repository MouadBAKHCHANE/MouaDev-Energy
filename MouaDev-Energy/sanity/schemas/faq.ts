import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'answerIntro',
      title: 'Réponse — texte introductif',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'answerBullets',
      title: 'Réponse — liste à puces (optionnel)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'bold', title: 'Texte en gras', type: 'string' },
            { name: 'text', title: 'Texte', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'bold', subtitle: 'text' },
          },
        },
      ],
    }),
    defineField({
      name: 'answerOutro',
      title: 'Réponse — texte de conclusion (optionnel)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'answerLink',
      title: 'Lien dans la réponse (optionnel)',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texte du lien', type: 'string' },
        { name: 'href', title: 'URL du lien', type: 'string' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
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
    select: { title: 'question' },
  },
})
