'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import ArrowIcon from '@/components/ui/ArrowIcon'
import FAQ from '@/components/sections/FAQ'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

// ── Icons ───────────────────────────────────────────────────────────────────

function IconPerf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

const defaultIcons = [<IconPerf />, <IconPin />, <IconLeaf />, <IconShield />]

const defaultFeatures = [
  { title: 'Performance garantie', desc: 'Assurez la performance optimale de vos installations grâce à des interventions régulières et rigoureuses.' },
  { title: 'Expertise locale', desc: "Une équipe d'experts proche de chez vous, formée aux dernières avancées technologiques en matière de maintenance énergétique." },
  { title: 'Engagement durable', desc: "Prolongez la durée de vie de vos équipements tout en contribuant à un avenir plus vert et à la transition énergétique." },
  { title: 'Fiabilité & confiance', desc: "Une qualité irréprochable lors de toute intervention, afin de répondre à l'ensemble des normes et prérogatives du domaine." },
]

const defaultParagraphs = [
  "Une équipe de spécialistes et d'experts-métiers pour l'entretien des solutions vertes de l'habitat.",
  "Zen Énergie Services est le partenaire de référence dans le secteur de la maintenance et de l'entretien des pompes à chaleur, boilers thermodynamiques et panneaux photovoltaïques en Suisse auprès des particuliers.",
  "Nos équipes d'experts mettent tout en œuvre pour assurer une qualité de production optimale de votre énergie, sur le long terme, grâce aux dernières technologies d'entretien et de maintenance.",
]

// ── Props ───────────────────────────────────────────────────────────────────

interface AboutUsClientProps {
  heroTitle?: string
  heroBgImage?: string
  introLabel?: string
  introTitle?: string
  introParagraphs?: string[]
  introImage?: string
  introCta?: string
  whyLabel?: string
  whyTitle?: string
  whyBgImage?: string
  whyFeatures?: Array<{ title: string; desc: string }>
  whyTickerText?: string
}

export default function AboutUsClient({
  heroTitle = 'À propos de nous',
  heroBgImage = '/Photos HD/Photos produits/Panneaux solaires/solar-generator-field-outside-small-rural-town.webp',
  introLabel = 'QUI SOMMES-NOUS ?',
  introTitle = 'Votre partenaire de confiance pour des installations énergétiques fiables et pérennes',
  introParagraphs,
  introImage = '/Photos HD/Photos d_ambiance/person-near-alternative-energy-plant.webp',
  introCta = 'Contactez-nous',
  whyLabel = 'POURQUOI NOUS CHOISIR',
  whyTitle = 'Votre premier choix pour la maintenance énergétique',
  whyBgImage,
  whyFeatures,
  whyTickerText = 'Énergie Renouvelable',
}: AboutUsClientProps) {
  const paragraphs = introParagraphs?.length ? introParagraphs : defaultParagraphs
  const features = whyFeatures?.length ? whyFeatures : defaultFeatures
  const whyBgUrl = whyBgImage || '/Photos%20HD/Photos%20d_ambiance/man-showing-thumbs-up-gesture-ie-class-front-roof-with-installed-solar-panels.webp'

  return (
    <main>

      {/* ── 1. Hero ── */}
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
        title={heroTitle}
        bgImage={heroBgImage}
        compact={true}
      />

      {/* ── 2. Qui sommes-nous ── */}
      <section style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="au-intro-row">

            {/* Left — image */}
            <motion.div
              className="au-intro-right"
              variants={reveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src={introImage}
                alt="Personne près d'une installation énergétique"
                loading="lazy" decoding="async"
                style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center', borderRadius: 40, display: 'block' }}
              />
            </motion.div>

            {/* Right — text */}
            <motion.div
              className="au-intro-left"
              variants={reveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.12 }}
            >
              <div style={{ marginBottom: 14 }}>
                <SectionLabel text={introLabel} />
              </div>
              <h2 className="au-h2" style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: -1,
                color: '#000', marginBottom: 20,
              }}>
                {introTitle}
              </h2>
              {paragraphs.map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: i < paragraphs.length - 1 ? 12 : 32 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000" style={{ flexShrink: 0, marginTop: 3 }}>
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    <polyline points="9 12 11 14 15 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: 16, lineHeight: '26px', color: i === 0 ? '#555' : '#777', margin: 0,
                  }}>{text}</p>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link
                  href="/contact-us"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    background: '#50B5A2', color: '#000',
                    borderRadius: 14, padding: '8px 8px 8px 24px', gap: 20,
                    fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                    fontSize: 16, fontWeight: 600, textDecoration: 'none',
                    transition: 'background 0.18s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#3da090'
                    const arr = e.currentTarget.querySelector('.au-btn-arr') as HTMLElement
                    if (arr) { arr.style.background = '#fff'; arr.style.color = '#000' }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#50B5A2'
                    const arr = e.currentTarget.querySelector('.au-btn-arr') as HTMLElement
                    if (arr) { arr.style.background = '#000'; arr.style.color = '#fff' }
                  }}
                >
                  {introCta}
                  <span className="au-btn-arr" style={{
                    width: 44, height: 40, borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#2c6262', color: '#fff', transition: 'background 0.18s ease',
                  }}>
                    <ArrowIcon direction="right" size={18} strokeColor="currentColor" />
                  </span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. Pourquoi nous choisir ── */}
      <section style={{ position: 'relative', paddingTop: 56, overflow: 'hidden' }}>

        {/* Background image */}
        <div className="wc-bg" style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${whyBgUrl}')`,
          backgroundSize: 'cover', backgroundPosition: 'center 20%',
          zIndex: 0,
        }} />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(44,98,98,0.72)', zIndex: 1 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', padding: '0 20px' }}>

          {/* Top label — centered */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}
          >
            <img src="/Logo image/Blanc.webp" alt="" style={{ width: 22, height: 22, objectFit: 'contain' }} />
            <span style={{
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
              fontSize: 13, fontWeight: 700, letterSpacing: '0.14em',
              color: '#50B5A2', textTransform: 'uppercase',
            }}>{whyLabel}</span>
          </motion.div>

          {/* Heading — centered */}
          <motion.h2
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            style={{
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
              fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 700, lineHeight: 1.08,
              letterSpacing: -1.5, color: '#fff', textAlign: 'center', marginBottom: 40,
            }}
          >
            {whyTitle}
          </motion.h2>

          {/* 2×2 features grid — centered */}
          <div className="wc-features">
            {features.map((card, i) => (
              <motion.div
                key={i}
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.09 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <motion.div
                  style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: '#50B5A2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, cursor: 'default',
                  }}
                  whileInView={{ rotate: [0, -12, 12, -8, 8, 0], scale: [1, 1.15, 1.15, 1.1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 + i * 0.12 }}
                  whileHover={{ scale: 1.2, rotate: 8, background: '#3da090' }}
                >
                  {defaultIcons[i] || defaultIcons[0]}
                </motion.div>
                <h3 style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 17, fontWeight: 700, color: '#fff', margin: 0,
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 14, lineHeight: '22px', color: 'rgba(255,255,255,0.6)', margin: 0,
                }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom dark ticker */}
        <div style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', marginTop: 48, overflow: 'hidden', padding: '18px 0' }}>
          <div className="wc-ticker-track">
            {[...Array(10)].map((_, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 28, flexShrink: 0, paddingRight: 28 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#50B5A2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                <span style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 22, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap',
                }}>{whyTickerText}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── 4. FAQ ── */}
      <FAQ />

      <style>{`
        /* Intro row */
        .au-intro-row {
          display: flex;
          gap: 70px;
          align-items: flex-start;
        }
        .au-intro-left { flex: 1.1; }
        .au-intro-right { flex: 0.9; }

        /* Service category grid */
        .au-svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .au-svc-card {
          background: #fff;
          border-radius: 24px;
          padding: 28px;
          border: 1px solid #e8e8e8;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease;
          cursor: default;
        }

        /* Stats grid */
        .au-stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Why choose section */
        .wc-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px 48px;
          max-width: 860px;
          margin: 0 auto;
          padding-bottom: 0;
        }
        .wc-ticker-track {
          display: flex;
          animation: wcTicker 28s linear infinite;
          width: max-content;
        }
        @keyframes wcTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Section headings responsive */
        @media (max-width: 1024px) {
          .au-intro-row { flex-direction: column; }
          .au-intro-right img { height: 380px !important; }
          .au-svc-grid { grid-template-columns: 1fr !important; }
          .au-stat-grid { grid-template-columns: 1fr !important; }
          .au-h2 { font-size: 38px !important; line-height: 46px !important; }
          .au-section-h2 { font-size: 38px !important; line-height: 48px !important; }
          .wc-features { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 768px) {
          .au-svc-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .au-h2 { font-size: 30px !important; line-height: 38px !important; }
          .au-section-h2 { font-size: 28px !important; line-height: 36px !important; }
          .au-intro-right img { height: 260px !important; border-radius: 28px !important; }
          .wc-features { grid-template-columns: 1fr; gap: 36px; }
          .wc-bg { background-position: 20% 70% !important; }
        }
      `}</style>
    </main>
  )
}
