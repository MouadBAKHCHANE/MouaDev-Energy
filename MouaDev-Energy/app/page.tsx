import { getHomePage } from '@/lib/queries'
import Hero from '@/components/sections/Hero'
import ServicesLime from '@/components/sections/ServicesLime'
import OurServices from '@/components/sections/OurServices'
import About from '@/components/sections/About'
import Pricing from '@/components/sections/Pricing'
import FunFact from '@/components/sections/FunFact'
import Marquee from '@/components/sections/Marquee'
import FAQ from '@/components/sections/FAQ'
import News from '@/components/sections/News'

export const revalidate = 60

export default async function Home() {
  const hp = await getHomePage()

  return (
    <main>
      <Hero
        badge={hp?.heroBadge}
        title={hp?.heroTitle}
        accentWord={hp?.heroAccentWord}
        subtitle={hp?.heroSubtitle}
        bgImage={hp?.heroBgImage}
        cta={hp?.heroCta}
        ctaLink={hp?.heroCtaLink}
        reviewCount={hp?.heroReviewCount}
        rating={hp?.heroRating}
        tickerText={hp?.heroTickerText}
      />
      <OurServices
        label={hp?.ourServicesLabel}
        title={hp?.ourServicesTitle}
        desc={hp?.ourServicesDesc}
        cta={hp?.ourServicesCta}
        cards={hp?.ourServicesCards}
      />
      <ServicesLime
        title={hp?.slimeTitle}
        accent={hp?.slimeAccent}
        desc={hp?.slimeDesc}
        cta={hp?.slimeCta}
        stats={hp?.slimeStats}
        cards={hp?.slimeCards}
      />
      <About
        label={hp?.aboutLabel}
        title={hp?.aboutTitle}
        body={hp?.aboutBody}
        ctaText={hp?.aboutCta}
        image={hp?.aboutImage}
        features={hp?.aboutFeatures}
      />
      <Pricing
        label={hp?.pricingLabel}
        title={hp?.pricingTitle}
        desc={hp?.pricingDesc}
        cards={hp?.pricingCards}
      />
      <FunFact
        label={hp?.processLabel}
        title={hp?.processTitle}
        subtitle={hp?.processSubtitle}
        desc={hp?.processDesc}
        steps={hp?.processSteps}
      />
      <Marquee
        lightItems={hp?.marqueeLight}
        darkItems={hp?.marqueeDark}
      />
      <FAQ />
      <News
        label={hp?.newsLabel}
        title={hp?.newsTitle}
        cta={hp?.newsCta}
        articles={hp?.newsArticles}
      />
    </main>
  )
}
