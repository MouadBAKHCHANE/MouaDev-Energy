import { defineField } from 'sanity'

interface SectionOption {
  title: string
  value: string
}

export function makeSectionOrderField(sections: SectionOption[]) {
  const labels = Object.fromEntries(sections.map((s) => [s.value, s.title]))

  return defineField({
    name: 'sectionOrder',
    title: 'Ordre et visibilité des sections',
    description: 'Glissez pour réordonner. Désactivez pour masquer une section.',
    type: 'array',
    group: 'layout',
    validation: (Rule) =>
      Rule.custom((entries: any[] | undefined) => {
        if (!entries) return true
        const ids = entries.map((e) => e.sectionId)
        const unique = new Set(ids)
        return ids.length === unique.size
          ? true
          : 'Chaque section ne peut apparaître qu\'une seule fois.'
      }),
    of: [
      {
        type: 'object',
        name: 'sectionEntry',
        fields: [
          defineField({
            name: 'sectionId',
            title: 'Section',
            type: 'string',
            options: { list: sections },
            readOnly: true,
          }),
          defineField({
            name: 'enabled',
            title: 'Afficher cette section',
            type: 'boolean',
            initialValue: true,
          }),
        ],
        preview: {
          select: { sectionId: 'sectionId', enabled: 'enabled' },
          prepare(selection) {
            const { sectionId, enabled } = selection as { sectionId: string; enabled: boolean }
            return {
              title: `${enabled === false ? '🚫 ' : '✅ '}${labels[sectionId] || sectionId}`,
            }
          },
        },
      },
    ],
  })
}

export const LAYOUT_GROUP = { name: 'layout', title: 'Mise en page', default: true }
