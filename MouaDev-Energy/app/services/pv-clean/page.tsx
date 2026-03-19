import type { Metadata } from 'next'
import { getPvCleanPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import PvCleanClient from './PvCleanClient'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPvCleanPage()
  return {
    title: data?.seoTitle || 'PV Clean — Nettoyage Panneaux Solaires',
    description: data?.seoDescription || "Service de nettoyage professionnel de panneaux solaires. À partir de CHF 392 pour 8 panneaux. Devis gratuit.",
    alternates: { canonical: '/services/pv-clean' },
  }
}

export const revalidate = 60

export default async function PvCleanPage() {
  const data = await getPvCleanPage()
  const img = (src: any) => src ? urlFor(src).width(1200).quality(85).url() : undefined
  const v = <T,>(x: T | null | undefined): T | undefined => x ?? undefined

  const faqs = data?.faqs?.map((f: any) => ({ q: f.question, a: f.answer }))

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: 'PV Clean — Nettoyage Panneaux Solaires', description: 'Service de nettoyage professionnel de panneaux solaires.', url: '/services/pv-clean' })} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Accueil', url: '/' }, { name: 'Services', url: '/services' }, { name: 'PV Clean', url: '/services/pv-clean' }])} />
      {faqs?.length ? <JsonLd data={faqPageJsonLd(faqs.map((f: any) => ({ question: f.q, answer: f.a })))} /> : null}
      <PvCleanClient
        heroTitle={v(data?.heroTitle)}
        heroBgImage={img(data?.heroBgImage)}
        breadcrumbLabel={v(data?.breadcrumbLabel)}
        mainImage={img(data?.mainImage)}
        overlayHeadline={v(data?.overlayHeadline)}
        offerImage={img(data?.offerImage)}
        offerTitle={v(data?.offerTitle)}
        offerSubtitle={v(data?.offerSubtitle)}
        offerLabel={v(data?.offerLabel)}
        offerFeatures={v(data?.offerFeatures)}
        offerDisclaimer={v(data?.offerDisclaimer)}
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
