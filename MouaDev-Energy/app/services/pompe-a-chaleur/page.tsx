import type { Metadata } from 'next'
import { getPompeChaleurPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import PompeChaleurClient from './PompeChaleurClient'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPompeChaleurPage()
  return {
    title: data?.seoTitle || 'Entretien Pompe à Chaleur',
    description: data?.seoDescription || "Maintenance et entretien de pompes à chaleur à Genève. Contrats adaptés avec Zen Énergie Services.",
    alternates: { canonical: '/services/pompe-a-chaleur' },
  }
}

export const revalidate = 60

export default async function PompeChaleurPage() {
  const data = await getPompeChaleurPage()
  const img = (src: any) => src ? urlFor(src).width(1200).quality(85).url() : undefined
  const v = <T,>(x: T | null | undefined): T | undefined => x ?? undefined

  const faqs = data?.faqs?.map((f: any) => ({ q: f.question, a: f.answer }))

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: 'Entretien Pompe à Chaleur', description: 'Maintenance et entretien de pompes à chaleur à Genève.', url: '/services/pompe-a-chaleur' })} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Accueil', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Pompe à Chaleur', url: '/services/pompe-a-chaleur' }])} />
      {faqs?.length ? <JsonLd data={faqPageJsonLd(faqs.map((f: any) => ({ question: f.q, answer: f.a })))} /> : null}
      <PompeChaleurClient
        heroTitle={v(data?.heroTitle)}
        heroBgImage={img(data?.heroBgImage)}
        breadcrumbLabel={v(data?.breadcrumbLabel)}
        mainImage={img(data?.mainImage)}
        overlayHeadline={v(data?.overlayHeadline)}
        contractFeatures={v(data?.contractFeatures)}
        discountBoxes={v(data?.discountBoxes)}
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
