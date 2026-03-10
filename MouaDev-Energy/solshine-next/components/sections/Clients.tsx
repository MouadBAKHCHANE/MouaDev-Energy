'use client'

import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const logos = [
  { src: '/brands/Logo principal.webp', alt: 'Logo principal' },
  { src: '/brands/imgi_130_SSES-1024x427.webp', alt: 'SSES' },
  { src: '/brands/imgi_135_CCIG-768x376.webp', alt: 'CCIG' },
  { src: '/brands/imgi_24_Logo-PlanetSolar-512x423-2.webp', alt: 'PlanetSolar' },
  { src: '/brands/imgi_35_PACsystememodule_logo-1-4.svg', alt: 'PAC systeme module' },
  { src: '/brands/naoenergy.svg', alt: 'NaoEnergy' },
]

export default function Clients() {
  return (
    <section style={{ padding: '20px 20px', background: '#fff' }}>
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="clients-inner"
        style={{ display: 'flex', alignItems: 'center', gap: 40, maxWidth: 1400, margin: '0 auto' }}
      >
        <h4
          style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 18, fontWeight: 600, lineHeight: '24px',
            color: '#000', flexShrink: 0, maxWidth: 220,
          }}
        >
          Soutenu par nos partenaires de confiance
        </h4>
        <div
          style={{
            overflow: 'hidden',
            flex: 1,
            maskImage: 'linear-gradient(90deg, transparent 2%, black 15%, black 85%, transparent 98%)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 2%, black 15%, black 85%, transparent 98%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 'max-content',
              animation: 'mq 25s linear infinite',
            }}
          >
            {[0, 1].map((setIndex) => (
              <div key={setIndex} style={{ display: 'flex', alignItems: 'center', gap: 60, paddingRight: 60 }}>
                {[...logos].map((logo, i) => (
                  <img
                    key={`${setIndex}-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      height: 40,
                      width: 'auto',
                      minWidth: 100,
                      maxWidth: 160,
                      flexShrink: 0,
                      objectFit: 'contain',
                      filter: 'brightness(0)',
                      opacity: 0.7,
                      transition: 'opacity 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.7'
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <style jsx global>{`
        @media (max-width: 640px) {
          .clients-inner {
            flex-direction: column !important;
            gap: 20px !important;
            text-align: center;
          }
          .clients-inner h4 {
            max-width: 100% !important;
            flex-shrink: unset !important;
          }
        }
      `}</style>
    </section>
  )
}
