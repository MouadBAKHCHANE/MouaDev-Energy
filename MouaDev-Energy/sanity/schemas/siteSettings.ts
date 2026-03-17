import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  groups: [
    { name: 'general', title: 'Général' },
    { name: 'logos', title: 'Logos' },
    { name: 'contact', title: 'Contact' },
    { name: 'social', title: 'Réseaux sociaux' },
    { name: 'footer', title: 'Pied de page' },
  ],
  fields: [
    // ── General ──
    defineField({
      name: 'siteName',
      title: 'Nom du site',
      type: 'string',
      group: 'general',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description du site (SEO)',
      type: 'text',
      rows: 3,
      group: 'general',
    }),
    defineField({
      name: 'typeformUrl',
      title: 'Lien Typeform (CTA "Demander une offre")',
      type: 'url',
      group: 'general',
    }),

    // ── Logos ──
    defineField({
      name: 'logoLight',
      title: 'Logo clair (fond sombre)',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo foncé (fond clair)',
      type: 'image',
      group: 'logos',
    }),
    defineField({
      name: 'logoIcon',
      title: 'Logo icône seule',
      type: 'image',
      group: 'logos',
    }),

    // ── Contact ──
    defineField({
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'mapLat',
      title: 'Latitude (Google Maps)',
      type: 'number',
      group: 'contact',
    }),
    defineField({
      name: 'mapLng',
      title: 'Longitude (Google Maps)',
      type: 'number',
      group: 'contact',
    }),

    // ── Social ──
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'array',
      group: 'social',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Plateforme',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'X (Twitter)', value: 'twitter' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TikTok', value: 'tiktok' },
                ],
              },
              validation: (r: any) => r.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (r: any) => r.required(),
            },
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
    }),

    // ── Footer ──
    defineField({
      name: 'footerAbout',
      title: 'Texte "À propos" du footer',
      type: 'text',
      rows: 3,
      group: 'footer',
    }),
    defineField({
      name: 'footerNewsletter',
      title: 'Texte newsletter du footer',
      type: 'text',
      rows: 2,
      group: 'footer',
    }),
    defineField({
      name: 'copyright',
      title: 'Texte copyright',
      type: 'string',
      group: 'footer',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Paramètres du site' }
    },
  },
})
