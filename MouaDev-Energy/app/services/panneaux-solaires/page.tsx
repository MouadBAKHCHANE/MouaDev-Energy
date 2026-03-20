import type { Metadata } from 'next'
import { getPanneauxSolairesPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import PanneauxSolairesClient from './PanneauxSolairesClient'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPanneauxSolairesPage()
  return {
    title: data?.seoTitle || 'Entretien Panneaux Solaires',
    description: data?.seoDescription || "Contrats de maintenance pour panneaux solaires en Suisse romande. Formules Zen Accès, Zen Équilibre et Zen Plus.",
    alternates: { canonical: '/services/panneaux-solaires' },
  }
}

export const revalidate = 60

export default async function PanneauxSolairesPage() {
  const data = await getPanneauxSolairesPage()
  const img = (src: any) => src ? urlFor(src).width(1200).quality(85).url() : undefined
  // Convert null → undefined so client defaults kick in
  const v = <T,>(x: T | null | undefined): T | undefined => x ?? undefined

  const faqs = data?.faqs?.map((f: any) => ({ q: f.question, a: f.answer }))

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: 'Entretien Panneaux Solaires', description: 'Contrats de maintenance pour panneaux solaires en Suisse romande.', url: '/services/panneaux-solaires' })} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Accueil', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Panneaux Solaires', url: '/services/panneaux-solaires' }])} />
      {faqs?.length ? <JsonLd data={faqPageJsonLd(faqs.map((f: any) => ({ question: f.q, answer: f.a })))} /> : null}
      <PanneauxSolairesClient
        sectionOrder={v(data?.sectionOrder)}
        heroTitle={v(data?.heroTitle)}
        heroBgImage={img(data?.heroBgImage)}
        breadcrumbLabel={v(data?.breadcrumbLabel)}
        mainImage={img(data?.mainImage)}
        overlayHeadline={v(data?.overlayHeadline)}
        contractFeatures={v(data?.contractFeatures)}
        discountHeadline={v(data?.discountHeadline)}
        discountText={v(data?.discountText)}
        discountBadge={v(data?.discountBadge)}
        disclaimer={v(data?.disclaimer)}
        pvCleanTitle={v(data?.pvCleanTitle)}
        pvCleanIntro={v(data?.pvCleanIntro)}
        pvCleanImage={img(data?.pvCleanImage)}
        pvCleanFeatures={v(data?.pvCleanFeatures)}
        pvCleanDisclaimer={v(data?.pvCleanDisclaimer)}
        whyTitle={v(data?.whyTitle)}
        whyIntro={v(data?.whyIntro)}
        whyBullets={v(data?.whyBullets)}
        detailImages={
          data?.detailImages
            ? data.detailImages.map((di: any) => img(di)).filter(Boolean)
            : undefined
        }
        faqTitle={v(data?.faqTitle)}
        faqs={faqs}
      />
    </>
  )
}
