import type { Metadata } from 'next'
import { getBoilerPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import BoilerClient from './BoilerClient'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBoilerPage()
  return {
    title: data?.seoTitle || 'Entretien Boiler Thermodynamique',
    description: data?.seoDescription || "Maintenance de boilers thermodynamiques en Suisse romande. Contrats d'entretien régulier avec Zen Énergie Services.",
    alternates: { canonical: '/services/boiler-thermodynamique' },
  }
}

export const revalidate = 60

export default async function BoilerThermodynamiquePage() {
  const data = await getBoilerPage()
  const img = (src: any) => src ? urlFor(src).width(1200).quality(85).url() : undefined
  const v = <T,>(x: T | null | undefined): T | undefined => x ?? undefined

  const faqs = data?.faqs?.map((f: any) => ({ q: f.question, a: f.answer }))

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: 'Entretien Boiler Thermodynamique', description: "Maintenance de boilers thermodynamiques en Suisse romande.", url: '/services/boiler-thermodynamique' })} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Accueil', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Boiler Thermodynamique', url: '/services/boiler-thermodynamique' }])} />
      {faqs?.length ? <JsonLd data={faqPageJsonLd(faqs.map((f: any) => ({ question: f.q, answer: f.a })))} /> : null}
      <BoilerClient
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
