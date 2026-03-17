import { getPanneauxSolairesPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import PanneauxSolairesClient from './PanneauxSolairesClient'

export const revalidate = 60

export default async function PanneauxSolairesPage() {
  const data = await getPanneauxSolairesPage()
  const img = (src: any) => src ? urlFor(src).width(1200).quality(85).url() : undefined
  // Convert null → undefined so client defaults kick in
  const v = <T,>(x: T | null | undefined): T | undefined => x ?? undefined

  return (
    <PanneauxSolairesClient
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
      faqs={
        data?.faqs
          ? data.faqs.map((f: any) => ({ q: f.question, a: f.answer }))
          : undefined
      }
    />
  )
}
