import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'themeSettings',
  title: 'Thème & Design',
  type: 'document',
  groups: [
    { name: 'colors', title: 'Couleurs', default: true },
    { name: 'buttons', title: 'Boutons & Cartes' },
  ],
  fields: [
    /* ══════════ COULEURS ══════════ */
    defineField({
      name: 'colorPrimary',
      title: 'Couleur principale',
      type: 'string',
      group: 'colors',
      description:
        'Couleur dominante du site : boutons, icônes, liens, badges, bordures actives.\n' +
        'Par défaut : #2a9b96 (turquoise Zen)',
      validation: (r) =>
        r.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).error('Format hexadécimal requis (ex : #2a9b96)'),
      initialValue: '#2a9b96',
    }),
    defineField({
      name: 'colorHover',
      title: 'Couleur de survol / accent',
      type: 'string',
      group: 'colors',
      description:
        'Couleur au survol des boutons et liens, fonds d\'accent légers, puces, check-marks.\n' +
        'Par défaut : #50b5a2 (turquoise clair)',
      validation: (r) =>
        r.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).error('Format hexadécimal requis (ex : #50b5a2)'),
      initialValue: '#50b5a2',
    }),
    defineField({
      name: 'colorDark',
      title: 'Couleur foncée (header / footer)',
      type: 'string',
      group: 'colors',
      description:
        'Fond du header, du footer, et des sections sombres du site.\n' +
        'Par défaut : #2c6262 (vert foncé)',
      validation: (r) =>
        r.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).error('Format hexadécimal requis (ex : #2c6262)'),
      initialValue: '#2c6262',
    }),

    /* ══════════ BOUTONS & CARTES ══════════ */
    defineField({
      name: 'buttonStyle',
      title: 'Style des boutons',
      type: 'string',
      group: 'buttons',
      description:
        'Change la forme de tous les boutons (« Demander un Devis », « En savoir plus », etc.).\n\n' +
        '💊 Arrondi → ╭──────────╮ coins à 14px (actuel)\n' +
        '⬜ Carré → ┌──────────┐ coins à 6px, look corporate\n' +
        '💎 Capsule → (══════════) coins à 50px, look startup',
      options: {
        list: [
          { title: '💊 Arrondi (actuel)', value: 'rounded' },
          { title: '⬜ Carré', value: 'square' },
          { title: '💎 Capsule', value: 'pill' },
        ],
        layout: 'radio',
      },
      initialValue: 'rounded',
    }),
    defineField({
      name: 'cardStyle',
      title: 'Style des cartes',
      type: 'string',
      group: 'buttons',
      description:
        'Change l\'apparence des cartes de services, articles, FAQ.\n\n' +
        '🟦 Arrondi → Coins 24px + ombre légère (actuel)\n' +
        '⬜ Carré → Coins 8px, look minimaliste\n' +
        '🌓 Ombre portée → Coins 24px + ombre forte, effet « carte qui flotte »',
      options: {
        list: [
          { title: '🟦 Arrondi (actuel)', value: 'rounded' },
          { title: '⬜ Carré', value: 'square' },
          { title: '🌓 Ombre portée', value: 'shadow' },
        ],
        layout: 'radio',
      },
      initialValue: 'rounded',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Thème & Design' }),
  },
})
