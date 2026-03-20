import type { Metadata } from 'next'
import { getServicesPage } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getServicesPage()
  return {
    title: data?.seoTitle || 'Nos Services',
    description: data?.seoDescription || "Découvrez nos services de maintenance : pompes à chaleur, panneaux solaires, boilers thermodynamiques et nettoyage PV à Genève.",
    alternates: { canonical: '/services' },
  }
}
import { urlFor } from '@/lib/sanity'
import ServicesClient from './ServicesClient'

export const revalidate = 0

export default async function ServicesPage() {
  const sp = await getServicesPage()

  const img = (src: any) => src ? urlFor(src).width(1400).quality(80).url() : undefined

  const serviceCards = sp?.serviceCards?.map((c: any) => ({
    title: c.title,
    desc: c.desc,
    img: img(c.img) ?? '',
    icon: img(c.icon) ?? '',
    href: c.href ?? '#',
  }))

  const stats = sp?.stats?.map((s: any) => ({
    tag: s.tag,
    prefix: s.prefix,
    num: s.num,
    suffix: s.suffix,
    desc: s.desc,
  }))

  const expItems = sp?.expItems?.map((e: any) => ({
    title: e.title,
    text: e.text,
    icon: img(e.icon) ?? '',
  }))

  const serviceDetails = sp?.serviceDetails?.map((d: any) => ({
    label: d.label,
    title: d.title,
    desc: d.desc,
    img: img(d.img) ?? '',
    features: d.features ?? [],
    href: d.href ?? '#',
    imgLeft: d.imgLeft ?? true,
  }))

  return (
    <ServicesClient
      sectionOrder={sp?.sectionOrder}
      heroTitle={sp?.heroTitle}
      heroBgImage={img(sp?.heroBgImage)}
      cardsLabel={sp?.cardsLabel}
      cardsTitle={sp?.cardsTitle}
      cardsTitleStyle={sp?.cardsTitleStyle}
      cardsDesc={sp?.cardsDesc}
      cardsDescStyle={sp?.cardsDescStyle}
      serviceCards={serviceCards}
      statsLabel={sp?.statsLabel}
      statsTitle={sp?.statsTitle}
      statsTitleStyle={sp?.statsTitleStyle}
      statsDesc={sp?.statsDesc}
      statsDescStyle={sp?.statsDescStyle}
      stats={stats}
      quoteTitle={sp?.quoteTitle}
      quoteBody={sp?.quoteBody}
      expLabel={sp?.expLabel}
      expTitle={sp?.expTitle}
      expTitleStyle={sp?.expTitleStyle}
      expImage={img(sp?.expImage)}
      expItems={expItems}
      serviceDetails={serviceDetails}
      ctaTitle={sp?.ctaTitle}
      ctaTitleStyle={sp?.ctaTitleStyle}
      ctaAccent={sp?.ctaAccent}
      ctaButtonText={sp?.ctaButtonText}
      ctaButtonLink={sp?.ctaButtonLink}
      ctaQuestionLabel={sp?.ctaQuestionLabel}
      ctaQuestionDesc={sp?.ctaQuestionDesc}
    />
  )
}
