import { defineType, defineField } from 'sanity'

const PAGE_OPTIONS = [
  { value: 'mentions-legales',       title: 'Mentions légales' },
  { value: 'cge',                    title: 'CGE – Conditions générales d\'entretien' },
  { value: 'cgu',                    title: 'CGU – Conditions générales d\'utilisation' },
  { value: 'cgv',                    title: 'CGV – Conditions générales de vente' },
  { value: 'confidentialite',        title: 'Politique de confidentialité & cookies' },
]

export default defineType({
  name: 'legalPage',
  title: 'Pages légales',
  type: 'document',

  fields: [
    // ═══════════════════════════════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', description: 'Apparaît dans l\'onglet du navigateur et les résultats Google. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, description: 'Résumé affiché sous le titre dans les résultats Google. ~155 caractères max.' }),

    // ═══════════════════════════════════════════════════════════════════════════
    // IDENTITY
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'pageId',
      title: 'Page',
      type: 'string',
      description: 'Identifiant unique — associe ce document à une URL spécifique',
      options: { list: PAGE_OPTIONS, layout: 'dropdown' },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Titre du hero',
      type: 'string',
      description: 'Grand titre affiché dans le bandeau hero',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Dernière mise à jour',
      type: 'string',
      description: 'Ex: 01.04.2025',
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // COMPANY INFO (mentions légales uniquement)
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'companyInfoItems',
      title: 'Informations société (Mentions légales)',
      description: 'Chaque entrée = une ligne du bloc société (ex: "Siège social" / "Chemin du Pré-Fleuri...")',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'companyInfoItem',
          title: 'Ligne',
          fields: [
            defineField({ name: 'label', title: 'Libellé', type: 'string' }),
            defineField({ name: 'value', title: 'Valeur', type: 'string' }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
      hidden: ({ document }) => document?.pageId !== 'mentions-legales',
    }),

    // ═══════════════════════════════════════════════════════════════════════════
    // SECTIONS / ARTICLES
    // ═══════════════════════════════════════════════════════════════════════════
    defineField({
      name: 'sections',
      title: 'Sections / Articles',
      description: 'Liste des sections ou articles. Chaque article a un titre et un contenu.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'legalSection',
          title: 'Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre de la section / N° article',
              type: 'string',
              description: 'Ex: "ARTICLE 1 – PRÉAMBULE & DÉFINITIONS"',
            }),
            defineField({
              name: 'content',
              title: 'Contenu',
              type: 'text',
              rows: 10,
              description: 'Texte libre. Utilisez • pour les listes et \\n pour les sauts de ligne.',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'content' },
            prepare({ title, subtitle }) {
              return {
                title: title || '(Section sans titre)',
                subtitle: subtitle ? subtitle.slice(0, 80) + '…' : '',
              }
            },
          },
        },
      ],
    }),
  ],

  preview: {
    select: { pageId: 'pageId', heroTitle: 'heroTitle' },
    prepare({ pageId, heroTitle }) {
      const label = PAGE_OPTIONS.find((o) => o.value === pageId)?.title ?? pageId ?? 'Nouvelle page légale'
      return {
        title: label,
        subtitle: heroTitle ?? '',
        media: undefined,
      }
    },
  },
})
