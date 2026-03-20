import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'
import {
  CogIcon,
  HomeIcon,
  UsersIcon,
  EnvelopeIcon,
  BoltIcon,
  SunIcon,
  ControlsIcon,
  DropIcon,
  SparklesIcon,
  DocumentTextIcon,
  HelpCircleIcon,
  BookIcon,
  BarChartIcon,
  ColorWheelIcon,
} from '@sanity/icons'

// Singleton document types — shown as single items, not lists
const singletonTypes = [
  'siteSettings', 'homePage', 'aboutPage', 'contactPage', 'servicesPage',
  'panneauxSolairesPage', 'pompeChaleurPage', 'boilerPage', 'pvCleanPage',
  'marketingSettings', 'themeSettings',
]

// Helper to create a singleton list item with optional icon
const singleton = (S: any, title: string, schemaType: string, icon?: any) => {
  const item = S.listItem()
    .title(title)
    .id(schemaType)
    .child(S.document().schemaType(schemaType).documentId(schemaType))
  return icon ? item.icon(icon) : item
}

export default defineConfig({
  name: 'zen-energie',
  title: 'Zen Énergie Services',
  projectId: 'rn8uvbuk',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // ── Configuration ──
            singleton(S, 'Paramètres du site', 'siteSettings', CogIcon),
            singleton(S, 'Marketing & Analytics', 'marketingSettings', BarChartIcon),
            singleton(S, 'Thème & Design', 'themeSettings', ColorWheelIcon),
            S.divider(),

            // ── Pages principales ──
            singleton(S, 'Page d\'accueil', 'homePage', HomeIcon),
            singleton(S, 'Page À propos', 'aboutPage', UsersIcon),
            singleton(S, 'Page Contact', 'contactPage', EnvelopeIcon),
            singleton(S, 'Page Services', 'servicesPage', BoltIcon),
            S.divider(),

            // ── Pages services détaillées ──
            S.listItem()
              .title('Pages Services')
              .icon(BoltIcon)
              .child(
                S.list()
                  .title('Pages Services')
                  .items([
                    singleton(S, 'Panneaux Solaires', 'panneauxSolairesPage', SunIcon),
                    singleton(S, 'Pompe à Chaleur', 'pompeChaleurPage', ControlsIcon),
                    singleton(S, 'Boiler Thermodynamique', 'boilerPage', DropIcon),
                    singleton(S, 'PV Clean', 'pvCleanPage', SparklesIcon),
                  ])
              ),
            S.divider(),

            // ── Contenu dynamique ──
            S.listItem()
              .title('Articles')
              .icon(BookIcon)
              .child(S.documentTypeList('blog').title('Articles')),
            S.listItem()
              .title('FAQ')
              .icon(HelpCircleIcon)
              .child(S.documentTypeList('faq').title('FAQ')),
            S.listItem()
              .title('Pages légales')
              .icon(DocumentTextIcon)
              .child(S.documentTypeList('legalPage').title('Pages légales')),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    // Prevent creating new singletons via "New document" button
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
})
