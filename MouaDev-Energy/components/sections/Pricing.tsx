'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const revealHeading = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}
const revealCard = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

interface IFeature {
  text: string;
  included: boolean;
}

const plans = [
  {
    name: 'PANNEAUX PHOTOVOLTAÏQUES', price: 'À partir de CHF 420.-', period: '/ an !',
    desc: '',
    btnClass: 'dark' as const, theme: 'light' as const,
    btnColor: '#09b8a0',
    image: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-showing-thumbs-up-gesture-ie-class-front-roof-with-installed-solar-panels.webp',
    bgPos: 'center 50%',
    customMessage: "",
    features: [] as IFeature[]
  },
  {
    name: 'POMPES À CHALEUR', price: 'À partir de CHF 450.-', period: '/ an !',
    desc: '',
    btnClass: 'lime' as const, theme: 'dark' as const,
    btnColor: '#f26422',
    image: '/Photos%20HD/Photos%20produits/Pompe%20a%CC%80%20chaleur/modern-home-with-grey-heat-pump-unit-mounted-exterior-wall.webp',
    bgPos: 'center 40%',
    customMessage: "",
    features: [] as IFeature[]
  },
  {
    name: 'BOILER THERMODYNAMIQUE', price: 'À partir de CHF 140.-', period: '/ an !',
    desc: '',
    btnClass: 'dark' as const, theme: 'dark' as const,
    btnColor: '#0a6363',
    image: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/zen-05.webp',
    bgPos: 'center 50%',
    customMessage: "",
    features: [] as IFeature[]
  },
  {
    name: 'NETTOYAGE DES PANNEAUX PHOTOVOLTAÏQUES',
    price: '49 CHF',
    period: <span className="block mt-1 text-sm font-normal">(avec min. forfaitaire de 8 PV de 392 CHF)</span>,
    desc: '',
    btnClass: 'lime' as const, theme: 'dark' as const,
    btnColor: '#0e254a',
    image: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PV/Ouvrier%20et%20panneaux%20solaires.webp',
    bgPos: 'center 40%',
    features: [] as IFeature[],
  },
]

export default function Pricing() {
  const primaryColor = '#09b8a0';
  const secondaryColor = '#f26422'; // New orange color for buttons

  return (
    <section id="pricing" className="pricing-section" style={{ padding: '80px 20px', background: '#fff' }}>
      <div className="pricing-inner">
        <div className="pricing-left">
          <motion.div variants={revealHeading} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <SectionLabel text="NOS SOLUTIONS D’ENTRETIEN" />
          </motion.div>
          <motion.h2 variants={revealHeading} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="pricing-h2" style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2, color: '#000',
          }}>
            Découvrez nos offres d’entretien <br /> en un coup d’œil !
          </motion.h2>
          <motion.p variants={revealHeading} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="pricing-body" style={{
            fontFamily: "var(--font-jost), 'Jost', sans-serif",
            fontSize: 17, fontWeight: 400, lineHeight: '26px', color: '#000',
          }}>
            Choisissez la solution qui correspond à votre installation et profitez d'une expertise locale pour la pérennité de vos équipements.
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
                borderRadius: 40, padding: 32, display: 'flex', gap: 25, alignItems: 'center', marginBottom: 20,
                position: 'relative', overflow: 'hidden',
                ...(plan.theme === 'light'
                  ? { background: '#f8f8f8', border: '1px solid #e8e8e8' }
                  : { background: '#000', color: '#fff' }),
                ...(plan.image ? { color: '#fff' } : {})
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
                <div className="price-val" style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 500, lineHeight: '1.2', letterSpacing: -1, marginBottom: 12 }}>
                  {plan.price}
                  <span style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                    letterSpacing: '-0.32px'
                  }}>
                    {plan.period}
                  </span>
                </div>
                {plan.desc && (
                  <p style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 15, lineHeight: '22px', color: plan.theme === 'dark' || plan.image ? '#fff' : '#000', margin: '12px 0 20px' }}>{plan.desc}</p>
                )}
                <motion.a
                  href="https://form.typeform.com/to/rRhOu7eb"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover="hover"
                  style={{
                    display: 'inline-block', textAlign: 'center', padding: '8px 22px', borderRadius: 12,
                    fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 13, fontWeight: 600,
                    textDecoration: 'none', marginTop: (plan.desc || plan.customMessage) ? 20 : 20,
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
                    Demander une offre
                  </motion.span>
                </motion.a>
              </div>

              {(plan.customMessage || plan.features.length > 0) && (
                <div style={{ flex: '0 0 auto', maxWidth: '300px', position: 'relative', zIndex: 2 }}>
                  {plan.customMessage ? (
                    <p style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: '22px',
                      color: '#fff',
                      textAlign: 'left',
                      margin: 0
                    }}>
                      {plan.customMessage}
                    </p>
                  ) : (
                    <>
                      <h4 style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 15, fontWeight: 700, lineHeight: '20px', letterSpacing: '-0.5px', marginBottom: 12 }}>Inclus :</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {plan.features.map((feat, fi) => (
                          <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 13, lineHeight: '18px' }}>
                            <span style={{
                              width: 16, height: 16, borderRadius: 40,
                              background: plan.theme === 'dark' || plan.image ? primaryColor : '#000',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1
                            }}>
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                            {feat.text}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
