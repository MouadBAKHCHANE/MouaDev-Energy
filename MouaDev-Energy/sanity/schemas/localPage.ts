import { defineType, defineField } from 'sanity'

/**
 * Déclinaison locale d'un service (ex. « Nettoyage de panneaux solaires à
 * Lausanne »), servie à /services/<service>/<slug>.
 *
 * Pour que la page soit utile à Google, son contenu doit être réellement local
 * (communes, conditions, FAQ) : une copie de la page service avec seulement le
 * nom de la ville changé serait ignorée.
 */
export const LOCAL_SERVICES = [
  { title: 'PV Clean — Nettoyage panneaux solaires', value: 'pv-clean' },
] as const

export default defineType({
  name: 'localPage',
  title: 'Page locale',
  type: 'document',
  groups: [
    { name: 'main', title: 'Page', default: true },
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Contenu' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    defineField({
      name: 'service',
      title: 'Service',
      type: 'string',
      group: 'main',
      options: { list: [...LOCAL_SERVICES] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'city', title: 'Ville / zone', type: 'string', group: 'main', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Adresse (fin de l’URL)',
      description: 'Ex. « lausanne » → /services/pv-clean/lausanne',
      type: 'slug',
      group: 'main',
      options: { source: 'city' },
      validation: (r) => r.required(),
    }),

    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo', description: '~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO', type: 'text', rows: 3, group: 'seo', description: '~155 caractères max.' }),

    defineField({ name: 'heroTitle', title: 'Titre principal (H1)', type: 'string', group: 'content' }),
    defineField({ name: 'heroBgImage', title: 'Image du hero', type: 'image', group: 'content', options: { hotspot: true } }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      description: 'Liens possibles avec la syntaxe [texte](/chemin).',
      type: 'text',
      rows: 4,
      group: 'content',
    }),
    defineField({
      name: 'facts',
      title: 'Chiffres clés',
      type: 'array',
      group: 'content',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', title: 'Valeur', type: 'string' }),
          defineField({ name: 'label', title: 'Libellé', type: 'string' }),
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),
    defineField({ name: 'communes', title: 'Communes desservies', type: 'array', of: [{ type: 'string' }], group: 'content' }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      group: 'content',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'heading', title: 'Titre (H2)', type: 'string' }),
          defineField({ name: 'body', title: 'Texte', description: 'Paragraphes séparés par une ligne vide. Liens : [texte](/chemin).', type: 'text', rows: 6 }),
        ],
        preview: { select: { title: 'heading' } },
      }],
    }),
    defineField({
      name: 'faqs',
      title: 'Questions fréquentes',
      type: 'array',
      group: 'faq',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string' }),
          defineField({ name: 'answer', title: 'Réponse', type: 'text', rows: 4 }),
        ],
        preview: { select: { title: 'question' } },
      }],
    }),
  ],
  preview: {
    select: { city: 'city', service: 'service' },
    prepare({ city, service }: any) {
      return { title: city || 'Page locale', subtitle: service ? `/services/${service}` : '' }
    },
  },
})
