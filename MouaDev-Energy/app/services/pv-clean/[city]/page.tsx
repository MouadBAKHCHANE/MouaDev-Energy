import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageTitle } from '@/lib/seo'
import { getLocalPage, getLocalPages } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { serviceJsonLd, breadcrumbJsonLd, faqPageJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import LocalServicePage from '@/components/local/LocalServicePage'

const SERVICE = 'pv-clean'
const PARENT = { label: 'PV Clean', href: '/services/pv-clean' }
const FALLBACK_HERO = '/Photos HD/Visuels Technique/Technique - PV/Ouvrier et panneaux solaires.webp'

export const revalidate = 3600

export async function generateStaticParams() {
  const pages: { slug: string }[] = (await getLocalPages(SERVICE)) ?? []
  return pages.map((p) => ({ city: p.slug }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const data = await getLocalPage(SERVICE, params.city)
  if (!data) notFound()
  return {
    title: pageTitle(data.seoTitle, `Nettoyage panneaux solaires ${data.city}`),
    description: data.seoDescription,
    alternates: { canonical: `/services/${SERVICE}/${params.city}` },
  }
}

export default async function LocalPvCleanPage({ params }: { params: { city: string } }) {
  const data = await getLocalPage(SERVICE, params.city)
  if (!data) notFound()

  const url = `/services/${SERVICE}/${params.city}`
  const hero = data.heroBgImage ? urlFor(data.heroBgImage).width(1920).quality(85).url() : FALLBACK_HERO

  return (
    <>
      <JsonLd data={serviceJsonLd({
        name: `Nettoyage de panneaux solaires à ${data.city}`,
        serviceType: 'Nettoyage photovoltaïque',
        description: data.seoDescription || `Nettoyage professionnel de panneaux solaires à ${data.city}.`,
        url,
        areaServed: [{ '@type': 'City', name: data.city }],
      })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Accueil', url: '/' },
        { name: 'Services', url: '/services' },
        { name: PARENT.label, url: PARENT.href },
        { name: data.city, url },
      ])} />
      {data.faqs?.length ? <JsonLd data={faqPageJsonLd(data.faqs)} /> : null}
      <LocalServicePage
        data={data}
        heroBgImage={hero}
        parent={PARENT}
        ctaHref="https://form.typeform.com/to/rRhOu7eb"
      />
    </>
  )
}
