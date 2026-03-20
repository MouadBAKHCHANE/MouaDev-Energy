import { defineType, defineField } from 'sanity'

/**
 * Reusable object type for per-text styling in Sanity.
 * Add as a companion field next to any title/text field.
 * Example: { name: 'heroTitleStyle', title: 'Style du titre', type: 'textStyle' }
 */
export default defineType({
  name: 'textStyle',
  title: 'Style de texte',
  type: 'object',
  fields: [
    defineField({
      name: 'fontSize',
      title: 'Taille (px)',
      type: 'number',
      description: 'Taille en pixels. Laissez vide pour la valeur par défaut.',
      validation: (r) => r.min(8).max(200),
    }),
    defineField({
      name: 'fontFamily',
      title: 'Police',
      type: 'string',
      description: 'Laissez vide pour la police par défaut.',
      options: {
        list: [
          { title: 'Inter', value: 'Inter' },
          { title: 'Barlow', value: 'Barlow' },
          { title: 'Space Grotesk', value: 'Space Grotesk' },
          { title: 'Jost', value: 'Jost' },
        ],
      },
    }),
    defineField({
      name: 'fontColor',
      title: 'Couleur',
      type: 'string',
      description: 'Code couleur hexadécimal (ex: #ff0000). Laissez vide pour la couleur par défaut.',
      validation: (r) => r.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).error('Format hexadécimal invalide (ex: #ff0000)'),
    }),
  ],
  options: { collapsible: true, collapsed: true },
})
