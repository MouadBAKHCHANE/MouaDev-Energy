import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'panneauxSolairesPage',
  title: 'Page Panneaux Solaires',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'content', title: 'Contenu principal' },
    { name: 'contracts', title: 'Contrats & Tarifs' },
    { name: 'pvClean', title: 'Section PV Clean' },
    { name: 'why', title: 'Pourquoi entretenir' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    // ── Hero ──
    defineField({ name: 'heroTitle', title: 'Titre hero', type: 'string', group: 'hero' }),
    defineField({ name: 'heroBgImage', title: 'Image de fond hero', type: 'image', options: { hotspot: true }, group: 'hero' }),
    defineField({ name: 'breadcrumbLabel', title: 'Label breadcrumb', type: 'string', group: 'hero' }),

    // ── Contenu principal ──
    defineField({ name: 'mainImage', title: 'Image principale', type: 'image', options: { hotspot: true }, group: 'content' }),
    defineField({ name: 'overlayHeadline', title: 'Titre overlay (sur image)', type: 'text', rows: 3, group: 'content' }),

    // ── Contrats ──
    defineField({ name: 'contractsTitle', title: 'Titre section contrats', type: 'string', group: 'contracts' }),
    defineField({
      name: 'contractFeatures',
      title: 'Lignes du tableau comparatif',
      type: 'array',
      group: 'contracts',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Nom de la feature', type: 'string' }),
          defineField({ name: 'acces', title: 'Zen Accès', type: 'string' }),
          defineField({ name: 'equilibre', title: 'Zen Équilibre', type: 'string' }),
          defineField({ name: 'plus', title: 'Zen Plus', type: 'string' }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),
    defineField({ name: 'discountHeadline', title: 'Titre remise', type: 'string', group: 'contracts' }),
    defineField({ name: 'discountText', title: 'Texte remise', type: 'text', rows: 2, group: 'contracts' }),
    defineField({ name: 'discountBadge', title: 'Badge remise (ex: "10%")', type: 'string', group: 'contracts' }),
    defineField({ name: 'disclaimer', title: 'Mention légale', type: 'text', rows: 6, group: 'contracts' }),

    // ── PV Clean ──
    defineField({ name: 'pvCleanTitle', title: 'Titre section PV Clean', type: 'string', group: 'pvClean' }),
    defineField({ name: 'pvCleanIntro', title: 'Paragraphes d\'introduction', type: 'array', of: [{ type: 'text' }], group: 'pvClean' }),
    defineField({ name: 'pvCleanImage', title: 'Image PV Clean', type: 'image', options: { hotspot: true }, group: 'pvClean' }),
    defineField({ name: 'pvCleanFeatures', title: 'Points PV Clean', type: 'array', of: [{ type: 'string' }], group: 'pvClean' }),
    defineField({ name: 'pvCleanDisclaimer', title: 'Mention PV Clean', type: 'string', group: 'pvClean' }),

    // ── Pourquoi entretenir ──
    defineField({ name: 'whyTitle', title: 'Titre', type: 'string', group: 'why' }),
    defineField({ name: 'whyIntro', title: 'Introduction', type: 'text', rows: 4, group: 'why' }),
    defineField({ name: 'whyBullets', title: 'Points clés', type: 'array', of: [{ type: 'text' }], group: 'why' }),
    defineField({ name: 'detailImages', title: 'Images de détail (2)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], group: 'why' }),

    // ── FAQ ──
    defineField({ name: 'faqTitle', title: 'Titre section FAQ', type: 'string', group: 'faq' }),
    defineField({
      name: 'faqs',
      title: 'Questions fréquentes',
      type: 'array',
      group: 'faq',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string' }),
          defineField({ name: 'answer', title: 'Réponse', type: 'text', rows: 8 }),
        ],
        preview: { select: { title: 'question' } },
      }],
    }),
  ],
  preview: {
    prepare() { return { title: 'Page Panneaux Solaires' } },
  },
})
