import { getContactPage, getSiteSettings } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import ContactUsClient from './ContactUsClient'

export const revalidate = 0

export default async function ContactUsPage() {
  const [cp, settings] = await Promise.all([getContactPage(), getSiteSettings()])

  return (
    <ContactUsClient
      heroTitle={cp?.heroTitle}
      heroBgImage={cp?.heroBgImage ? urlFor(cp.heroBgImage).width(1920).quality(80).url() : undefined}
      sectionLabel={cp?.sectionLabel}
      sectionTitle={cp?.sectionTitle}
      formTitle={cp?.formTitle}
      submitText={cp?.submitText}
      address={settings?.address}
      email={settings?.email}
      phone={settings?.phone}
      mapLat={settings?.mapLat}
      mapLng={settings?.mapLng}
    />
  )
}
