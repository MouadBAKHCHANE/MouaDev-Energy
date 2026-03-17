import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pvCleanPage',
  title: 'Page PV Clean',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'content', title: 'Contenu principal' },
    { name: 'offer', title: 'Offre PV Clean' },
    { name: 'why', title: 'Pourquoi nettoyer' },
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

    // ── Offre PV Clean ──
    defineField({ name: 'offerImage', title: 'Image offre', type: 'image', options: { hotspot: true }, group: 'offer' }),
    defineField({ name: 'offerTitle', title: 'Titre offre', type: 'string', group: 'offer' }),
    defineField({ name: 'offerSubtitle', title: 'Sous-titre offre', type: 'string', group: 'offer' }),
    defineField({ name: 'offerLabel', title: 'Label liste', type: 'string', group: 'offer' }),
    defineField({ name: 'offerFeatures', title: 'Points offre', type: 'array', of: [{ type: 'string' }], group: 'offer' }),
    defineField({ name: 'offerDisclaimer', title: 'Mention offre', type: 'string', group: 'offer' }),

    // ── Pourquoi nettoyer ──
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
    prepare() { return { title: 'Page PV Clean' } },
  },
})
