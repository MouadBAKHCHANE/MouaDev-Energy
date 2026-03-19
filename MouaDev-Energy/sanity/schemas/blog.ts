import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', description: 'Si vide, le titre de l\'article sera utilisé. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, description: 'Si vide, l\'extrait sera utilisé. ~155 caractères max.' }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coverImg',
      title: 'Image de couverture (chemin local — fallback)',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
    }),
    defineField({
      name: 'readTime',
      title: 'Temps de lecture',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', title: 'Titre', type: 'string' },
            { name: 'body', title: 'Contenu', type: 'text', rows: 6 },
            {
              name: 'list',
              title: 'Liste à puces',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
