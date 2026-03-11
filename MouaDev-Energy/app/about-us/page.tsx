'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import ArrowIcon from '@/components/ui/ArrowIcon'
import Marquee from '@/components/sections/Marquee'
import FAQ from '@/components/sections/FAQ'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

// ── Service category cards ────────────────────────────────────────────────────

const serviceCategories = [
  {
    image: '/Photos HD/Visuels Technique/Technique - PV/Entretien panneaux solaires.webp',
    label: 'PANNEAUX SOLAIRES',
    title: 'Maintenance & Entretien photovoltaïque',
    desc: "Contrôle, nettoyage et optimisation de vos panneaux pour garantir un rendement maximal sur le long terme.",
  },
  {
    image: '/Photos HD/Visuels Technique/Technique - PAC/Heat pump AdobeStock.webp',
    label: 'POMPES À CHALEUR',
    title: 'Entretien & contrôle technique PAC',
    desc: "Maintenance préventive et corrective pour assurer le confort thermique de votre foyer toute l'année.",
  },
  {
    image: '/Photos HD/Visuels Technique/Technique - Boiler/Boiler AdobeStock.webp',
    label: 'BOILERS THERMODYNAMIQUES',
    title: 'Vérification & maintenance boiler',
    desc: "Nettoyage et inspection des composants pour une production d'eau chaude efficace et durable.",
  },
]

// ── Why Choose (Nos atouts) ───────────────────────────────────────────────────

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

const atouts = [
  {
    icon: <IconPerf />,
    title: 'Performance garantie',
    desc: 'Assurez la performance optimale de vos installations grâce à des interventions régulières et rigoureuses.',
  },
  {
    icon: <IconPin />,
    title: 'Expertise locale',
    desc: "Une équipe d'experts proche de chez vous, formée aux dernières avancées technologiques en matière de maintenance énergétique.",
  },
  {
    icon: <IconLeaf />,
    title: 'Engagement durable',
    desc: "Prolongez la durée de vie de vos équipements tout en contribuant à un avenir plus vert et à la transition énergétique.",
  },
  {
    icon: <IconShield />,
    title: 'Fiabilité & confiance',
    desc: "Une qualité irréprochable lors de toute intervention, afin de répondre à l'ensemble des normes et prérogatives du domaine.",
  },
]

// ── Stat cards ────────────────────────────────────────────────────────────────

const statCards = [
  {
    number: '100+',
    title: 'CLIENTS SATISFAITS',
    desc: "Des familles en Suisse Romande nous font confiance pour l'entretien de leurs équipements énergétiques.",
  },
  {
    number: '4.96★',
    title: 'NOTE MOYENNE',
    desc: 'Une excellence de service reconnue par nos clients, reflétée dans chaque avis et intervention.',
  },
  {
    number: '4+',
    title: "TYPES D'ÉQUIPEMENTS",
    desc: 'Panneaux solaires, pompes à chaleur, boilers thermodynamiques et nettoyage PV.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutUsPage() {
  return (
    <main>

      {/* ── 1. Hero ── */}
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
        title="À propos de nous"
        bgImage="/Photos HD/Photos produits/Panneaux solaires/solar-generator-field-outside-small-rural-town.webp"
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
                src="/Photos HD/Photos d_ambiance/person-near-alternative-energy-plant.webp"
                alt="Personne près d'une installation énergétique"
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
                <SectionLabel text="QUI SOMMES-NOUS ?" />
              </div>
              <h2 className="au-h2" style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: -1,
                color: '#000', marginBottom: 20,
              }}>
                Votre partenaire de confiance pour des installations énergétiques fiables et pérennes
              </h2>
              {[
                "Une équipe de spécialistes et d'experts-métiers pour l'entretien des solutions vertes de l'habitat.",
                "Zen Énergie Services est le partenaire de référence dans le secteur de la maintenance et de l'entretien des pompes à chaleur, boilers thermodynamiques et panneaux photovoltaïques en Suisse auprès des particuliers.",
                "Nos équipes d'experts mettent tout en œuvre pour assurer une qualité de production optimale de votre énergie, sur le long terme, grâce aux dernières technologies d'entretien et de maintenance.",
              ].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: i < 2 ? 12 : 32 }}>
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
                  Contactez-nous
                  <span className="au-btn-arr" style={{
                    width: 44, height: 40, borderRadius: 12,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#0a1f1e', color: '#fff', transition: 'background 0.18s ease',
                  }}>
                    <ArrowIcon direction="right" size={18} strokeColor="currentColor" />
                  </span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. Nos atouts (Why Choose) ── */}
      <section style={{ padding: '100px 20px', background: '#f8f8f8' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ marginBottom: 20 }}
          >
            <SectionLabel text="NOS ATOUTS" />
          </motion.div>
          <motion.h2
            className="au-section-h2"
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: -2,
              color: '#000', marginBottom: 16, maxWidth: 700,
            }}
          >
            Simplifiez-vous la vie avec un entretien professionnel sans complications
          </motion.h2>
          <motion.p
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: 17, lineHeight: '27px', color: '#777',
              marginBottom: 50, maxWidth: 600,
            }}
          >
            Avec Zen Énergie Services, profitez d'un entretien professionnel sans complications.
          </motion.p>

          {/* 2×2 grid */}
          <div className="au-why-grid">
            {atouts.map((card, i) => (
              <motion.div
                key={i}
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.08 }}
                style={{ background: '#fff', borderRadius: 20, padding: 40 }}
              >
                <div style={{
                  width: 50, height: 50, borderRadius: '50%', background: '#50B5A2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, flexShrink: 0,
                }}>
                  {card.icon}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 22, fontWeight: 600, color: '#000', margin: '0 0 12px 0',
                }}>{card.title}</h3>
                <p style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 17, lineHeight: '26px', color: '#777', margin: 0,
                }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}
          >
            <Link
              href="https://form.typeform.com/to/rRhOu7eb"
              style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#50B5A2', color: '#000',
                borderRadius: 14, padding: '8px 8px 8px 28px', gap: 20,
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 17, fontWeight: 600, textDecoration: 'none',
                transition: 'background 0.18s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = '#3da090'}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = '#50B5A2'}
            >
              Demandez votre devis
              <span style={{
                width: 44, height: 40, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#0a1f1e', color: '#fff',
              }}>
                <ArrowIcon direction="right" size={18} strokeColor="currentColor" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Nos domaines d'expertise (Service categories) ── */}
      <section style={{ padding: '100px 20px', background: '#f8f8f8' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
          >
            <SectionLabel text="NOS DOMAINES D'EXPERTISE" />
          </motion.div>
          <motion.h2
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="au-section-h2"
            style={{
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
              fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 600, lineHeight: 1.2, letterSpacing: -2,
              color: '#000', marginBottom: 16, textAlign: 'center',
            }}
          >
            Une expertise complète<br />en maintenance énergétique
          </motion.h2>
          <motion.p
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: 17, lineHeight: '27px', color: '#777',
              marginBottom: 56, textAlign: 'center',
            }}
          >
            Panneaux solaires, pompes à chaleur ou boilers — nous intervenons sur tous vos équipements.
          </motion.p>

          {/* 3-column cards */}
          <div className="au-svc-grid">
            {serviceCategories.map((svc, i) => (
              <motion.div
                key={i}
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
                className="au-svc-card"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = '0 10px 30px rgba(2,6,23,0.12)'
                  const arr = el.querySelector('.au-arr') as HTMLElement
                  if (arr) { arr.style.background = '#50B5A2'; arr.style.borderColor = '#50B5A2' }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = 'none'
                  const arr = el.querySelector('.au-arr') as HTMLElement
                  if (arr) { arr.style.background = 'transparent'; arr.style.borderColor = '#e8e8e8' }
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: 'clamp(160px, 20vw, 220px)', borderRadius: 20, overflow: 'hidden', marginBottom: 28 }}>
                  <img
                    src={svc.image} alt={svc.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
                  />
                </div>
                <span style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
                  color: '#50B5A2', textTransform: 'uppercase', marginBottom: 10, display: 'block',
                }}>{svc.label}</span>
                <h3 style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 22, fontWeight: 600, lineHeight: '28px', color: '#000', marginBottom: 12,
                }}>{svc.title}</h3>
                <p style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 16, lineHeight: '24px', color: '#777', marginBottom: 28, flex: 1,
                }}>{svc.desc}</p>
                <div className="au-arr" style={{
                  width: 44, height: 44, borderRadius: '50%', border: '1px solid #e8e8e8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.18s ease, border-color 0.18s ease',
                }}>
                  <ArrowIcon direction="diagonal" size={18} strokeColor="#000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <FAQ />

      <style jsx global>{`
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

        /* Why choose grid */
        .au-why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        /* Section headings responsive */
        @media (max-width: 1024px) {
          .au-intro-row { flex-direction: column; }
          .au-intro-right img { height: 380px !important; }
          .au-svc-grid { grid-template-columns: 1fr !important; }
          .au-stat-grid { grid-template-columns: 1fr !important; }
          .au-why-grid { grid-template-columns: 1fr !important; }
          .au-h2 { font-size: 38px !important; line-height: 46px !important; }
          .au-section-h2 { font-size: 38px !important; line-height: 48px !important; }
        }
        @media (max-width: 768px) {
          .au-svc-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .au-h2 { font-size: 30px !important; line-height: 38px !important; }
          .au-section-h2 { font-size: 28px !important; line-height: 36px !important; }
          .au-intro-right img { height: 260px !important; border-radius: 28px !important; }
        }
      `}</style>
    </main>
  )
}
