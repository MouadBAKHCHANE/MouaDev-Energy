import { getAboutPage } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import AboutUsClient from './AboutUsClient'

export const revalidate = 0

export default async function AboutUsPage() {
  const ap = await getAboutPage()

  return (
    <AboutUsClient
      heroTitle={ap?.heroTitle}
      heroBgImage={ap?.heroBgImage ? urlFor(ap.heroBgImage).width(1920).quality(80).url() : undefined}
      introLabel={ap?.introLabel}
      introTitle={ap?.introTitle}
      introParagraphs={ap?.introParagraphs}
      introImage={ap?.introImage ? urlFor(ap.introImage).width(1000).quality(80).url() : undefined}
      introCta={ap?.introCta}
      whyLabel={ap?.whyLabel}
      whyTitle={ap?.whyTitle}
      whyBgImage={ap?.whyBgImage ? urlFor(ap.whyBgImage).width(1920).quality(80).url() : undefined}
      whyFeatures={ap?.whyFeatures}
      whyTickerText={ap?.whyTickerText}
    />
  )
}
