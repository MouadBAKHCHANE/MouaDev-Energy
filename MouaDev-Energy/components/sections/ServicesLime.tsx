'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ArrowIcon from '@/components/ui/ArrowIcon'
import { urlFor } from '@/lib/sanity'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

/* Cards slide in from the right one by one */
const cardSlide = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0 },
}

const defaultServices = [
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp',
    title: 'Panneaux solaires',
    desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.',
  },
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp',
    title: 'Pompes à chaleur',
    desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.',
  },
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp',
    title: 'Boiler thermodynamique',
    desc: 'Nettoyage et vérification des composants pour une production d\'eau chaude efficace.',
  },
  {
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp',
    title: 'Nettoyage panneaux solaires',
    desc: 'Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.',
  },
]

const defaultStats = [
  { value: '4+', label: 'Types d\'équipements' },
  { value: '100+', label: 'Clients satisfaits' },
  { value: '4.96★', label: 'Note moyenne' },
]

interface ServicesLimeProps {
  title?: string
  accent?: string
  desc?: string
  cta?: string
  stats?: Array<{ value: string; label: string }>
  cards?: Array<{ title: string; desc: string; icon?: any }>
}

function ServiceCard({ svc, index }: { svc: { icon: string; title: string; desc: string }; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={cardSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.15 }}
      className="svc2-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {/* Icon with hover animation */}
      <motion.img
        src={svc.icon}
        alt={svc.title}
        loading="lazy"
        decoding="async"
        style={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(130deg)',
          flexShrink: 0,
          cursor: 'pointer',
        }}
        animate={hovered ? {
          scale: 1.2,
          rotate: [0, -8, 8, -5, 5, 0],
          filter: 'brightness(0) invert(1) sepia(1) saturate(4) hue-rotate(130deg)',
        } : {
          scale: 1,
          rotate: 0,
          filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(130deg)',
        }}
        transition={hovered ? {
          scale: { type: 'spring', stiffness: 400, damping: 12 },
          rotate: { duration: 0.5, ease: 'easeInOut' },
          filter: { duration: 0.2 },
        } : {
          duration: 0.3,
        }}
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
  )
}

export default function ServicesLime({
  title = "Prolongez la durée de vie de vos équipements grâce à nos contrats d'entretien.",
  accent = 'grâce à nos contrats',
  desc = 'Des solutions adaptées à chaque foyer pour assurer longévité, performance et sérénité au quotidien.',
  cta = 'Découvrir nos offres',
  stats,
  cards,
}: ServicesLimeProps) {
  const services = cards?.length
    ? cards.map((c) => ({
        icon: c.icon ? urlFor(c.icon).width(160).url() : '',
        title: c.title,
        desc: c.desc,
      }))
    : defaultServices

  const statsData = stats?.length ? stats : defaultStats

  // Build title with accent highlighted
  function renderTitle() {
    if (!accent || !title.includes(accent)) {
      return title
    }
    const parts = title.split(accent)
    return (
      <>
        {parts[0]}<span style={{ color: '#50B5A2' }}>{accent}</span>{parts[1] || ''}
      </>
    )
  }

  return (
    <section id="services" style={{ padding: '100px 20px', background: '#2c6262', position: 'relative', overflow: 'hidden' }}>

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

      {/* Big "e" watermark */}
      <img
        src="/Logo image/Blanc.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-60px',
          bottom: '-40px',
          width: 500,
          height: 500,
          objectFit: 'contain',
          opacity: 0.04,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

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
            {renderTitle()}
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
            {desc}
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
              {cta}
              <span className="svc2-arr" style={{
                width: 44, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#2c6262', color: '#fff', transition: 'background 0.18s ease',
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
            {statsData.map((stat, i) => (
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

        {/* RIGHT — cards sliding from right */}
        <div className="svc2-right">
          {services.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} />
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
