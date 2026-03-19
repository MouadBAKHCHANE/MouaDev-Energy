import type { Metadata } from 'next'
import { getHomePage } from '@/lib/queries'
import { localBusinessJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePage()
  return {
    title: data?.seoTitle || 'Accueil — Maintenance Énergétique en Suisse Romande',
    description: data?.seoDescription || "Zen Énergie Services : entretien et maintenance de pompes à chaleur, panneaux solaires et boilers thermodynamiques à Genève et en Suisse romande.",
    alternates: { canonical: '/' },
  }
}
import { SECTION_REGISTRY, DEFAULT_SECTION_ORDER } from '@/lib/sectionRegistry'
import type { SectionEntry } from '@/lib/sectionRegistry'

export const revalidate = 0

export default async function Home() {
  const hp = await getHomePage()

  const sections: SectionEntry[] =
    hp?.sectionOrder?.length > 0 ? hp.sectionOrder : DEFAULT_SECTION_ORDER

  return (
    <main>
      <JsonLd data={localBusinessJsonLd()} />
      {sections
        .filter((s) => s.enabled !== false)
        .map((s) => {
          const def = SECTION_REGISTRY[s.sectionId]
          if (!def) return null
          const Component = def.component
          return <Component key={s.sectionId} {...def.propsMapper(hp)} />
        })}
    </main>
  )
}
