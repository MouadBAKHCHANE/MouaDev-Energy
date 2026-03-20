import { defineType, defineField } from 'sanity'
import { makeSectionOrderField, LAYOUT_GROUP } from './helpers/sectionOrder'

export default defineType({
  name: 'pvCleanPage',
  title: 'Page PV Clean',
  type: 'document',
  groups: [
    LAYOUT_GROUP,
    { name: 'seo', title: 'SEO' },
    { name: 'hero', title: 'Hero' },
    { name: 'content', title: 'Contenu principal' },
    { name: 'offer', title: 'Offre PV Clean' },
    { name: 'why', title: 'Pourquoi nettoyer' },
    { name: 'faq', title: 'FAQ' },
  ],
  fields: [
    makeSectionOrderField([
      { title: 'Hero', value: 'hero' },
      { title: 'Contenu principal', value: 'content' },
      { title: 'Offre PV Clean', value: 'offer' },
      { title: 'Pourquoi nettoyer', value: 'why' },
      { title: 'FAQ', value: 'faq' },
    ]),

    // ── SEO ──
    defineField({ name: 'seoTitle', title: 'Titre SEO (balise <title>)', type: 'string', group: 'seo', description: 'Apparaît dans l\'onglet du navigateur et les résultats Google. ~60 caractères max.' }),
    defineField({ name: 'seoDescription', title: 'Description SEO (meta description)', type: 'text', rows: 3, group: 'seo', description: 'Résumé affiché sous le titre dans les résultats Google. ~155 caractères max.' }),

    // ── Hero ──
    defineField({ name: 'heroTitle', title: 'Titre hero', type: 'string', group: 'hero' }),
    defineField({ name: 'heroTitleStyle', title: 'Style du titre hero', type: 'textStyle', group: 'hero' }),
    defineField({ name: 'heroBgImage', title: 'Image de fond hero', type: 'image', options: { hotspot: true }, group: 'hero' }),
    defineField({ name: 'breadcrumbLabel', title: 'Label breadcrumb', type: 'string', group: 'hero' }),

    // ── Contenu principal ──
    defineField({ name: 'mainImage', title: 'Image principale', type: 'image', options: { hotspot: true }, group: 'content' }),
    defineField({ name: 'overlayHeadline', title: 'Titre overlay (sur image)', type: 'text', rows: 3, group: 'content' }),
    defineField({ name: 'overlayHeadlineStyle', title: 'Style du titre overlay', type: 'textStyle', group: 'content' }),

    // ── Offre PV Clean ──
    defineField({ name: 'offerImage', title: 'Image offre', type: 'image', options: { hotspot: true }, group: 'offer' }),
    defineField({ name: 'offerTitle', title: 'Titre offre', type: 'string', group: 'offer' }),
    defineField({ name: 'offerTitleStyle', title: 'Style du titre offre', type: 'textStyle', group: 'offer' }),
    defineField({ name: 'offerSubtitle', title: 'Sous-titre offre', type: 'string', group: 'offer' }),
    defineField({ name: 'offerLabel', title: 'Label liste', type: 'string', group: 'offer' }),
    defineField({ name: 'offerFeatures', title: 'Points offre', type: 'array', of: [{ type: 'string' }], group: 'offer' }),
    defineField({ name: 'offerDisclaimer', title: 'Mention offre', type: 'string', group: 'offer' }),

    // ── Pourquoi nettoyer ──
    defineField({ name: 'whyTitle', title: 'Titre', type: 'string', group: 'why' }),
    defineField({ name: 'whyTitleStyle', title: 'Style du titre', type: 'textStyle', group: 'why' }),
    defineField({ name: 'whyIntro', title: 'Introduction', type: 'text', rows: 4, group: 'why' }),
    defineField({ name: 'whyBullets', title: 'Points clés', type: 'array', of: [{ type: 'text' }], group: 'why' }),
    defineField({ name: 'detailImages', title: 'Images de détail (2)', type: 'array', of: [{ type: 'image', options: { hotspot: true } }], group: 'why' }),

    // ── FAQ ──
    defineField({ name: 'faqTitle', title: 'Titre section FAQ', type: 'string', group: 'faq' }),
    defineField({ name: 'faqTitleStyle', title: 'Style du titre FAQ', type: 'textStyle', group: 'faq' }),
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
