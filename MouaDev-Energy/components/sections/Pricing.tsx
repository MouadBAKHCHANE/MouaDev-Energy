'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { urlFor } from '@/lib/sanity'
import { toCSS, TextStyle } from '@/lib/textStyle'

const revealHeading = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}
const revealCard = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const defaultPlans = [
  {
    name: 'PANNEAUX PHOTOVOLTAÏQUES', price: 'À partir de CHF 420.- / an !',
    btnColor: '#09b8a0',
    image: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-showing-thumbs-up-gesture-ie-class-front-roof-with-installed-solar-panels.webp',
    bgPos: 'center 50%',
    ctaText: 'Demander un Devis',
    ctaLink: 'https://form.typeform.com/to/rRhOu7eb',
  },
  {
    name: 'POMPES À CHALEUR', price: 'À partir de CHF 450.- / an !',
    btnColor: '#f26422',
    image: '/Photos%20HD/Photos%20produits/Pompe%20a%CC%80%20chaleur/modern-home-with-grey-heat-pump-unit-mounted-exterior-wall.webp',
    bgPos: 'center 40%',
    ctaText: 'Demander un Devis',
    ctaLink: 'https://form.typeform.com/to/rRhOu7eb',
  },
  {
    name: 'BOILER THERMODYNAMIQUE', price: 'À partir de CHF 140.- / an !',
    btnColor: '#0a6363',
    image: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/zen-05.webp',
    bgPos: 'center 50%',
    ctaText: 'Demander un Devis',
    ctaLink: 'https://form.typeform.com/to/rRhOu7eb',
  },
  {
    name: 'NETTOYAGE DES PANNEAUX PHOTOVOLTAÏQUES', price: '49 CHF',
    btnColor: '#0e254a',
    image: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PV/Ouvrier%20et%20panneaux%20solaires.webp',
    bgPos: 'center 40%',
    ctaText: 'Demander un Devis',
    ctaLink: 'https://form.typeform.com/to/rRhOu7eb',
  },
]

const btnColors = ['#09b8a0', '#f26422', '#0a6363', '#0e254a']

interface PricingProps {
  label?: string
  title?: string
  desc?: string
  cards?: Array<{ title: string; price: string; image?: any; ctaText: string; ctaLink: string }>
  titleStyle?: TextStyle
  descStyle?: TextStyle
}

export default function Pricing({
  label = "NOS SOLUTIONS D'ENTRETIEN",
  title = "Découvrez nos offres d'entretien en un coup d'œil !",
  desc = "Choisissez la solution qui correspond à votre installation et profitez d'une expertise locale pour la pérennité de vos équipements.",
  cards,
  titleStyle,
  descStyle,
}: PricingProps) {
  const plans = cards?.length
    ? cards.map((c, idx) => ({
        name: c.title,
        price: c.price,
        image: c.image ? urlFor(c.image).width(1200).quality(80).url() : defaultPlans[idx]?.image || '',
        bgPos: defaultPlans[idx]?.bgPos || 'center 50%',
        btnColor: btnColors[idx] || '#09b8a0',
        ctaText: 'Demander un Devis',
        ctaLink: c.ctaLink,
      }))
    : defaultPlans

  return (
    <section id="pricing" className="pricing-section" style={{ padding: '80px 20px', background: '#fff' }}>
      <div className="pricing-inner">
        <div className="pricing-left">
          <motion.div variants={revealHeading} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <SectionLabel text={label} />
          </motion.div>
          <motion.h2 variants={revealHeading} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="pricing-h2" style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2, color: '#000',
            ...toCSS(titleStyle),
          }}>
            {title}
          </motion.h2>
          <motion.p variants={revealHeading} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="pricing-body" style={{
            fontFamily: "var(--font-jost), 'Jost', sans-serif",
            fontSize: 17, fontWeight: 400, lineHeight: '26px', color: '#000',
            ...toCSS(descStyle),
          }}>
            {desc}
          </motion.p>
        </div>

        <div className="pricing-right">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={revealCard} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="price-card"
              style={{
                borderRadius: 40, padding: '64px 56px', minHeight: 220, display: 'flex', gap: 25, alignItems: 'center', marginBottom: 20,
                position: 'relative', overflow: 'hidden',
                background: '#000', color: '#fff',
              }}
            >
              {plan.image && (
                <>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url("${plan.image}")`,
                    backgroundSize: 'cover', backgroundPosition: plan.bgPos || 'center',
                    zIndex: 0
                  }} />
                  <div style={{
                    position: 'absolute', top: 0, bottom: 0, left: 0,
                    width: '65%',
                    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
                    zIndex: 1
                  }} />
                </>
              )}
              <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 600, lineHeight: '28px', marginBottom: 12 }}>{plan.name}</div>
                <motion.a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  style={{
                    display: 'inline-block', textAlign: 'center', padding: '8px 22px', borderRadius: 'var(--btn-radius-sm, 10px)',
                    fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 13, fontWeight: 600,
                    textDecoration: 'none', marginTop: 20,
                    background: plan.btnColor, color: '#fff', width: 'fit-content',
                    cursor: 'pointer'
                  }}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={{
                      hover: { y: -2, scale: 1.05 }
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {plan.ctaText}
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
