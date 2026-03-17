import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

// Singleton document types — shown as single items, not lists
const singletonTypes = [
  'siteSettings', 'homePage', 'aboutPage', 'contactPage', 'servicesPage',
  'panneauxSolairesPage', 'pompeChaleurPage', 'boilerPage', 'pvCleanPage',
]

// Helper to create a singleton list item
const singleton = (S: any, title: string, schemaType: string) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .child(S.document().schemaType(schemaType).documentId(schemaType))

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
            // Global
            singleton(S, 'Paramètres du site', 'siteSettings'),
            singleton(S, 'Page d\'accueil', 'homePage'),
            singleton(S, 'Page À propos', 'aboutPage'),
            singleton(S, 'Page Contact', 'contactPage'),
            singleton(S, 'Page Services', 'servicesPage'),
            S.divider(),
            // Service pages
            S.listItem()
              .title('Pages Services')
              .child(
                S.list()
                  .title('Pages Services')
                  .items([
                    singleton(S, 'Panneaux Solaires', 'panneauxSolairesPage'),
                    singleton(S, 'Pompe à Chaleur', 'pompeChaleurPage'),
                    singleton(S, 'Boiler Thermodynamique', 'boilerPage'),
                    singleton(S, 'PV Clean', 'pvCleanPage'),
                  ])
              ),
            S.divider(),
            // Regular document types (exclude singletons)
            ...S.documentTypeListItems().filter(
              (item) => !singletonTypes.includes(item.getId()!)
            ),
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
