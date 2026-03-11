'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ArrowIcon from '@/components/ui/ArrowIcon'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const services = [
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp',
    title: 'Panneaux solaires',
    desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.',
    number: '01',
  },
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp',
    title: 'Pompes à chaleur',
    desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.',
    number: '02',
  },
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp',
    title: 'Boiler thermodynamique',
    desc: 'Nettoyage et vérification des composants pour une production d\'eau chaude efficace.',
    number: '03',
  },
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp',
    title: 'Nettoyage panneaux solaires',
    desc: 'Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.',
    number: '04',
  },
]

export default function ServicesLime() {
  return (
    <section id="services" style={{ padding: '100px 20px', background: '#0a1e1d', position: 'relative', overflow: 'hidden' }}>

      {/* Decorative blob */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(80,181,162,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-150px', left: '-150px',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(80,181,162,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="svc2-inner">
        {/* LEFT */}
        <div className="svc2-left">
          {/* Heading */}
          <motion.h2
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="svc2-h2"
            style={{
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
              fontSize: 'clamp(30px, 5vw, 44px)', fontWeight: 600, lineHeight: 1.08, letterSpacing: -1,
              color: '#fff', marginBottom: 20,
            }}
          >
            Prolongez la durée de vie<br />
            de vos équipements<br />
            <span style={{ color: '#50B5A2' }}>grâce à nos contrats</span><br />
            d'entretien.
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="svc2-p"
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: 16, lineHeight: '26px', color: 'rgba(255,255,255,0.55)',
              maxWidth: 380, marginBottom: 36,
            }}
          >
            Des solutions adaptées à chaque foyer pour assurer longévité, performance et sérénité au quotidien.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <Link
              href="/services"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#50B5A2', color: '#000',
                borderRadius: 14, padding: '8px 8px 8px 24px', gap: 20,
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 16, fontWeight: 600, textDecoration: 'none',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#3da090'
                const arr = e.currentTarget.querySelector('.svc2-arr') as HTMLElement
                if (arr) { arr.style.background = '#fff'; arr.style.color = '#000' }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#50B5A2'
                const arr = e.currentTarget.querySelector('.svc2-arr') as HTMLElement
                if (arr) { arr.style.background = '#000'; arr.style.color = '#fff' }
              }}
            >
              Découvrir nos offres
              <span className="svc2-arr" style={{
                width: 44, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#0a1f1e', color: '#fff', transition: 'background 0.18s ease',
              }}>
                <ArrowIcon direction="right" size={18} strokeColor="currentColor" />
              </span>
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.28 }}
            style={{ display: 'flex', gap: 32, marginTop: 48 }}
          >
            {[
              { value: '4+', label: 'Types d\'équipements' },
              { value: '100+', label: 'Clients satisfaits' },
              { value: '4.96★', label: 'Note moyenne' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 28, fontWeight: 700, color: '#50B5A2', lineHeight: 1,
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 4,
                }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 2×2 grid */}
        <div className="svc2-right">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={reveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
              className="svc2-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
              }}
            >
              {/* Icon */}
              <motion.img
                src={svc.icon} alt={svc.title}
                style={{ width: 80, height: 80, objectFit: 'contain', filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(130deg)', flexShrink: 0, cursor: 'pointer' }}
                whileHover={{ scale: 1.18, rotate: 6, filter: 'brightness(0) invert(1) sepia(1) saturate(4) hue-rotate(130deg)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              />

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 23, fontWeight: 600, color: '#fff',
                  marginBottom: 7, lineHeight: 1.2,
                }}>{svc.title}</h3>
                <p style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 17, lineHeight: '26px', color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                }}>{svc.desc}</p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .svc2-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 80px;
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }
        .svc2-left {
          flex: 1;
          position: sticky;
          top: 120px;
        }
        .svc2-right {
          flex: 1.1;
          display: flex;
          flex-direction: column;
          gap: 23px;
        }
        .svc2-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 20px 24px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .svc2-card:hover {
          background: rgba(80,181,162,0.07);
          border-color: rgba(80,181,162,0.35);
          transform: translateY(-4px);
        }
        @media (max-width: 1024px) {
          .svc2-inner {
            flex-direction: column;
            gap: 40px;
          }
          .svc2-left {
            position: static;
          }
          .svc2-h2 {
            font-size: 22px !important;
            line-height: 1.15 !important;
          }
          .svc2-p {
            font-size: 14px !important;
            line-height: 22px !important;
          }
        }
        @media (max-width: 640px) {
          .svc2-h2 {
            font-size: 19px !important;
            line-height: 1.15 !important;
          }
          .svc2-p {
            font-size: 14px !important;
            line-height: 22px !important;
          }
        }
      `}</style>
    </section>
  )
}
