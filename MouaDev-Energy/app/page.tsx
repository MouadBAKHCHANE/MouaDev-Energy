import Hero from '@/components/sections/Hero'
import ServicesLime from '@/components/sections/ServicesLime'
import OurServices from '@/components/sections/OurServices'
import About from '@/components/sections/About'
import Pricing from '@/components/sections/Pricing'
import FunFact from '@/components/sections/FunFact'
import Marquee from '@/components/sections/Marquee'
import FAQ from '@/components/sections/FAQ'
import News from '@/components/sections/News'

export default function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <ServicesLime />
      <About />
      <Pricing />
      <FunFact />
      <Marquee />
      <FAQ />
      <News />
    </main>
  )
}
