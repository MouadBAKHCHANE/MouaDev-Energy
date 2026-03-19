import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'marketingSettings',
  title: 'Marketing & Analytics',
  type: 'document',
  groups: [
    { name: 'analytics', title: 'Analytics', default: true },
    { name: 'pixels', title: 'Pixels & Ads' },
    { name: 'custom', title: 'Scripts personnalisés' },
    { name: 'consent', title: 'Consentement cookies' },
  ],
  fields: [
    // ── Analytics ──
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics 4 — ID de mesure',
      type: 'string',
      group: 'analytics',
      description: 'Format : G-XXXXXXXXXX. Se trouve dans GA4 → Admin → Flux de données.',
      validation: (Rule) =>
        Rule.regex(/^G-[A-Z0-9]+$/, { name: 'GA4 ID' }).warning(
          'L\'ID doit commencer par "G-" suivi de lettres et chiffres.'
        ),
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager — ID du conteneur',
      type: 'string',
      group: 'analytics',
      description: 'Format : GTM-XXXXXXX. Permet de gérer tous vos tags depuis une seule interface.',
      validation: (Rule) =>
        Rule.regex(/^GTM-[A-Z0-9]+$/, { name: 'GTM ID' }).warning(
          'L\'ID doit commencer par "GTM-" suivi de lettres et chiffres.'
        ),
    }),
    defineField({
      name: 'googleSearchConsoleVerification',
      title: 'Google Search Console — Code de vérification',
      type: 'string',
      group: 'analytics',
      description: 'Le contenu de la balise meta "google-site-verification". Se trouve dans Search Console → Paramètres → Validation de la propriété.',
    }),

    // ── Pixels & Ads ──
    defineField({
      name: 'facebookPixelId',
      title: 'Meta (Facebook) Pixel — ID',
      type: 'string',
      group: 'pixels',
      description: 'Format : 15-16 chiffres. Se trouve dans Meta Events Manager.',
    }),
    defineField({
      name: 'tiktokPixelId',
      title: 'TikTok Pixel — ID',
      type: 'string',
      group: 'pixels',
      description: 'Se trouve dans TikTok Ads Manager → Événements.',
    }),
    defineField({
      name: 'linkedinPartnerId',
      title: 'LinkedIn Insight Tag — Partner ID',
      type: 'string',
      group: 'pixels',
      description: 'Se trouve dans LinkedIn Campaign Manager → Analyser → Insight Tag.',
    }),
    defineField({
      name: 'googleAdsId',
      title: 'Google Ads — ID de conversion',
      type: 'string',
      group: 'pixels',
      description: 'Format : AW-XXXXXXXXX. Pour le suivi des conversions Google Ads.',
    }),

    // ── Scripts personnalisés ──
    defineField({
      name: 'headScripts',
      title: 'Scripts <head> personnalisés',
      type: 'text',
      rows: 10,
      group: 'custom',
      description: 'Code HTML/JS injecté dans le <head>. Pour les outils non listés ci-dessus (Hotjar, Crisp, etc.). ⚠️ Attention : un code incorrect peut casser le site.',
    }),
    defineField({
      name: 'bodyStartScripts',
      title: 'Scripts début <body>',
      type: 'text',
      rows: 8,
      group: 'custom',
      description: 'Code injecté juste après l\'ouverture de <body>. Nécessaire pour certains outils comme GTM (noscript).',
    }),
    defineField({
      name: 'bodyEndScripts',
      title: 'Scripts fin <body>',
      type: 'text',
      rows: 8,
      group: 'custom',
      description: 'Code injecté avant la fermeture de </body>. Pour les widgets de chat, etc.',
    }),

    // ── Consentement cookies ──
    defineField({
      name: 'cookieConsentEnabled',
      title: 'Activer la bannière de consentement cookies',
      type: 'boolean',
      group: 'consent',
      initialValue: false,
      description: 'Affiche un bandeau de consentement RGPD/LPD. Les scripts analytics ne se chargent qu\'après acceptation.',
    }),
    defineField({
      name: 'cookieConsentMessage',
      title: 'Message de la bannière',
      type: 'text',
      rows: 3,
      group: 'consent',
      description: 'Texte affiché dans la bannière de cookies.',
      initialValue: 'Ce site utilise des cookies pour améliorer votre expérience et analyser le trafic. En continuant, vous acceptez notre politique de confidentialité.',
    }),
    defineField({
      name: 'cookieConsentPrivacyLink',
      title: 'Lien vers la politique de confidentialité',
      type: 'string',
      group: 'consent',
      initialValue: '/legal/politique-confidentialite-cookies',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Marketing & Analytics' }
    },
  },
})
