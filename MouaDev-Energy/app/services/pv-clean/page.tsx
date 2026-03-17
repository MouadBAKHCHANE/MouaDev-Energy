import { getPvCleanPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import PvCleanClient from './PvCleanClient'

export const revalidate = 60

export default async function PvCleanPage() {
  const data = await getPvCleanPage()
  const img = (src: any) => src ? urlFor(src).width(1200).quality(85).url() : undefined
  const v = <T,>(x: T | null | undefined): T | undefined => x ?? undefined

  return (
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
      faqs={
        data?.faqs
          ? data.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
          : undefined
      }
    />
  )
}
