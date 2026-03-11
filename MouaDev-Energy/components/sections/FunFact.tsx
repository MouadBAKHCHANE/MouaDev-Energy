'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

// Extracted from original: heading uses y:44
const revealHeading = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

const cards = [
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Femme%20ve%CC%81rifiant%20Boiler.webp',
    imgAlt: 'Prise de rendez-vous',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-33.webp',
    title: '1. Prise de rendez-vous',
    desc: 'Dès votre contrat souscrit en ligne, un expert Zen prendra contact avec vous dans les 48heures pour planifier votre 1ère intervention.',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/technician-discussing-heat-pump-setup-with-homeowner-garden.webp',
    imgAlt: 'Diagnostic et intervention',
    icon: 'https://framerusercontent.com/images/2jvk0kJxyokxITdWGVCBwINpl6w.png',
    title: '2. Diagnostic et intervention',
    desc: 'Nos experts se déplacent avec un équipement de pointe pour entretenir ou dépanner vos installations.',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Technicien%20Inspection%20Pompe%20Chaleur.webp',
    imgAlt: 'Envoi du rapport d’intervention',
    icon: 'https://framerusercontent.com/images/jpxArhZs8VwgsAK7U5D5B5MqU.png',
    title: '3. Envoi du rapport d’intervention',
    desc: 'Un rapport d’intervention vous sera transmis à la suite de la visite de nos experts.',
  },
  {
    img: '/Photos%20HD/Photos%20d_ambiance/iStock%20Image%201484x707.webp',
    imgAlt: 'Suivi en ligne',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-35.webp',
    title: '4. Suivi en ligne',
    desc: 'Gérez votre contrat, vos rapports d’interventions et vos demandes directement depuis votre espace client Zen.',
  },
]

// Extracted: cards scale to 0.972 when behind, transformOrigin center
function StackCard({ card, index, totalCards }: { card: typeof cards[0]; index: number; totalCards: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // When this card scrolls up (next card pushes it), scale down from 1 → 0.972
  // Only cards that aren't the last one should scale down
  const isLast = index === totalCards - 1
  const scale = useTransform(scrollYProgress, [0, 1], isLast ? [1, 1] : [1, 0.972])

  return (
    <div ref={ref} style={{ position: 'sticky', top: 100 + index * 20, zIndex: index + 1 }}>
      <motion.div
        className="ff-card"
        style={{
          scale,
          willChange: 'transform',
          transformOrigin: 'center center',
          display: 'flex', flexDirection: 'row', gap: 20,
          width: '100%', height: 400, alignItems: 'center',
          borderRadius: 40, overflow: 'hidden',
        }}
      >
        {/* Image half — left */}
        <div className="ff-img" style={{ flex: '1 1 60%', height: '100%', borderRadius: 40, overflow: 'hidden' }}>
          <img
            src={card.img} alt={card.imgAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 50%', display: 'block' }}
          />
        </div>

        {/* Lime content half — right */}
        <div className="ff-lime-panel" style={{
          flex: '0 0 auto', width: 400, height: 400,
          background: '#0a1e1d', borderRadius: 40, padding: 35,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          justifyContent: 'flex-start', gap: 30,
        }}>
          {/* Icon */}
          <div style={{ width: 85, height: 85 }}>
            <img
              src={card.icon}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(130deg)'
              }}
            />
          </div>

          {/* Text + button block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 32, fontWeight: 500, lineHeight: '40px', letterSpacing: -1,
              color: '#fff', margin: 0,
            }}>{card.title}</h3>
            <p style={{
              fontFamily: "var(--font-jost), 'Jost', sans-serif",
              fontSize: 16, lineHeight: '24px', color: 'rgba(255,255,255,0.6)', margin: 0,
            }}>{card.desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function FunFact() {
  return (
    <section className="funfact-section" style={{ padding: '80px 20px', background: '#fff' }}>
      {/* Container: flex column, gap 50px, centered, maxWidth 1440 */}
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 50 }}>

        {/* Header block */}
        <motion.div
          variants={revealHeading} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' }}
        >
          <SectionLabel text="Process de l’intervention" />
          <h2 className="ff-h2" style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2,
            color: '#000', textAlign: 'center', maxWidth: 850, margin: 0,
          }}>
            Comment se déroule une intervention <br /> avec Zen Énergie Services ?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 10 }}>
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 24, fontWeight: 600, color: '#50B5A2', margin: 0
            }}>Un entretien Zen, en toute simplicité !</h3>
            <p style={{
              fontFamily: "var(--font-jost), 'Jost', sans-serif",
              fontSize: 18, lineHeight: '28px', color: '#444', maxWidth: 800, margin: '0 auto'
            }}>
              Nos experts interviennent en toute sécurité et confiance à votre domicile et répondent à toutes vos questions sur l’entretien et la maintenance de vos installations.
            </p>
          </div>
        </motion.div>

        {/* Cards stack: full-width, vertical, gap 50px */}
        <div className="ff-cards-container" style={{ width: '100%', maxWidth: 1200, display: 'flex', flexDirection: 'column', gap: 50 }}>
          {cards.map((card, i) => (
            <StackCard key={i} card={card} index={i} totalCards={cards.length} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={revealHeading} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          style={{ marginTop: 20 }}
        >
          <a
            href="tel:+41215120574"
            style={{
              display: 'inline-flex', alignItems: 'center',
              borderRadius: 14, background: '#0a1f1e', color: '#fff',
              padding: '9px 8px 9px 24px', gap: 24,
              textDecoration: 'none', cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={e => {
              const arr = e.currentTarget.querySelector('.ff-arr') as HTMLElement
              if (arr) arr.style.background = '#50B5A2'
            }}
            onMouseLeave={e => {
              const arr = e.currentTarget.querySelector('.ff-arr') as HTMLElement
              if (arr) arr.style.background = '#fff'
            }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <span style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 15, fontWeight: 500, lineHeight: 1.3, color: 'rgba(255,255,255,0.7)' }}>
                Vous avez une question ?
              </span>
              <span style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 17, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.3px' }}>
                +41 21 512 05 74
              </span>
            </span>
            <span className="ff-arr" style={{
              width: 48, height: 44, borderRadius: 14, background: '#fff', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.3s ease',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </a>
        </motion.div>

      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .ff-cards-container {
            gap: 24px !important;
          }
          .ff-card {
            flex-direction: column !important;
            height: auto !important;
            gap: 0 !important;
          }
          .ff-img {
            flex: none !important;
            width: 100% !important;
            height: 220px !important;
            border-radius: 28px 28px 0 0 !important;
          }
          .ff-lime-panel {
            width: 100% !important;
            height: auto !important;
            border-radius: 0 0 28px 28px !important;
            padding: 24px !important;
            gap: 14px !important;
          }
          .ff-lime-panel h3 {
            font-size: 22px !important;
            line-height: 28px !important;
          }
          .ff-lime-panel p {
            font-size: 14px !important;
            line-height: 21px !important;
          }
          .ff-lime-panel > div:first-child {
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </section>
  )
}

