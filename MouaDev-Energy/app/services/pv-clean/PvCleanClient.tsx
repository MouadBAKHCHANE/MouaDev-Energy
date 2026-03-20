'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { toCSS, TextStyle } from '@/lib/textStyle'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

const sidebarServices = [
  { label: 'Panneaux solaires', href: '/services/panneaux-solaires', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp', accent: 'var(--color-primary, #2a9b96)' },
  { label: 'Pompe à chaleur', href: '/services/pompe-a-chaleur', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp', accent: '#e8552c' },
  { label: 'Boiler thermodynamique', href: '/services/boiler-thermodynamique', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp', accent: '#0c2a54' },
  { label: 'PV Clean — Nettoyage', href: '/services/pv-clean', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp', accent: 'var(--color-primary, #2a9b96)' },
]

const defaultFaqs = [
  {
    q: 'Combien de panneaux sont nécessaires pour bénéficier du service PV Clean ?',
    a: 'Notre offre PV Clean est disponible à partir de 8 panneaux, avec un forfait minimum de CHF 392. Au-delà, le tarif est de CHF 49 par panneau supplémentaire.',
  },
  {
    q: 'Comment se déroule un nettoyage PV Clean ?',
    a: 'Notre intervention PV Clean comprend 4 étapes :\n\n1. Dépoussiérage à sec : élimination des poussières grossières, fientes et débris\n2. Nettoyage mécanique humide : lavage à l\'eau déminéralisée avec brosses à poils souples\n3. Application d\'une couche protectrice (en option) : traitement hydrophobe\n4. Rapport d\'intervention : photos avant/après, mesures de production, recommandations',
  },
  {
    q: 'Quelle est la différence entre PV Clean et un contrat d\'entretien ?',
    a: 'PV Clean est une intervention ponctuelle de nettoyage, sans engagement. Les contrats d\'entretien (Zen Accès, Zen Équilibre, Zen Plus) incluent en plus :\n\n• Une inspection technique complète de l\'installation\n• Le diagnostic de l\'onduleur et du câblage\n• Un suivi à distance et monitoring\n• Une assistance téléphonique\n\nLe nettoyage PV Clean est disponible seul ou en complément d\'un contrat d\'entretien.',
  },
  {
    q: 'Quelle perte de rendement entraîne l\'encrassement des panneaux ?',
    a: 'Des panneaux encrassés peuvent perdre en moyenne 15% de leur production annuelle. Dans certains cas (accumulation importante de poussières, fientes d\'oiseaux, pollution industrielle), cette perte peut atteindre 25 à 30%. Un nettoyage professionnel permet de restituer immédiatement la pleine puissance de votre installation.',
  },
]

const defaultOfferFeatures = [
  'Nettoyage simple : dépoussiérage',
  'Nettoyage mécanique : utilisation de perches télescopiques ou brosses rotatives et d\'eau déminéralisée.',
  'Pose d\'une couche protectrice',
  'Rapport de nettoyage complet',
]

const defaultWhyBullets = [
  "De restituer immédiatement la pleine puissance de votre installation en éliminant poussières, fientes et dépôts calcaires.",
  "De préserver l'intégrité des panneaux grâce à des techniques de nettoyage adaptées, sans rayures ni produits agressifs.",
  "D'améliorer la durabilité de votre installation en appliquant une couche protectrice hydrophobe qui limite les salissures futures.",
]

interface PvCleanClientProps {
  heroTitle?: string
  heroBgImage?: string
  breadcrumbLabel?: string
  mainImage?: string
  overlayHeadline?: string
  offerImage?: string
  offerTitle?: string
  offerSubtitle?: string
  offerLabel?: string
  offerFeatures?: string[]
  offerDisclaimer?: string
  whyTitle?: string
  whyIntro?: string
  whyBullets?: string[]
  detailImages?: string[]
  faqTitle?: string
  faqs?: { q: string; a: string }[]
  overlayHeadlineStyle?: TextStyle
  offerTitleStyle?: TextStyle
  whyTitleStyle?: TextStyle
  faqTitleStyle?: TextStyle
}

export default function PvCleanClient({
  heroTitle = 'PV Clean — Nettoyage',
  heroBgImage = '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-view-cleaning-solar-panels-surface.webp',
  breadcrumbLabel = 'PV Clean — Nettoyage',
  mainImage = '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-worker-cleaning-solar-panels-from-dust.webp',
  overlayHeadline = 'Retrouvez toute la puissance de vos panneaux solaires avec notre offre PV Clean',
  offerImage = '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-solar-technician-installing-solar-panel-outdoors.webp',
  offerTitle = "L'EFFICACITÉ RETROUVÉE DE VOS PANNEAUX PHOTOVOLTAÏQUES !",
  offerSubtitle = 'OFFRE PV CLEAN :',
  offerLabel = 'Ce que contient votre offre PV Clean :',
  offerFeatures = defaultOfferFeatures,
  offerDisclaimer = '* Offre tarifaire valable pour une intervention à partir de 8 panneaux.',
  whyTitle = 'Pourquoi faire nettoyer ses panneaux solaires par un professionnel ?',
  whyIntro = "Des panneaux encrassés perdent jusqu'à 25% de leur rendement. Un nettoyage professionnel permet :",
  whyBullets = defaultWhyBullets,
  detailImages = [
    '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/1789536761.webp',
    '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-view-cleaning-solar-panels-surface.webp',
  ],
  faqTitle = 'Questions sur le nettoyage PV Clean',
  faqs = defaultFaqs,
  overlayHeadlineStyle,
  offerTitleStyle,
  whyTitleStyle,
  faqTitleStyle,
}: PvCleanClientProps) {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main>
      <PageHero
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: breadcrumbLabel },
        ]}
        title={heroTitle}
        bgImage={heroBgImage}
        compact={true}
      />

      {/* ── Main layout: sticky left + scrolling right ── */}
      <section className="ps-section" style={{ background: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }} className="ps-outer">
          <div className="ps-layout">

            {/* ── LEFT SIDEBAR (sticky) ── */}
            <aside className="ps-sidebar">

              {/* Service nav */}
              <div className="ps-service-nav" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {sidebarServices.map((s) => {
                  const isCurrent = s.href === '/services/pv-clean'
                  const isDarkAccent = s.accent === '#0c2a54' || s.accent === '#e8552c'
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="ps-nav-link"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 12,
                        padding: '16px 18px',
                        fontSize: 14,
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontWeight: isCurrent ? 600 : 400,
                        color: isCurrent ? (isDarkAccent ? '#fff' : '#000') : '#444',
                        background: isCurrent ? s.accent : '#fff',
                        borderRadius: 16,
                        border: isCurrent ? 'none' : '1px solid #ebebeb',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: isCurrent ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
                      }}
                      onMouseEnter={(e) => {
                        if (!isCurrent) {
                          e.currentTarget.style.background = s.accent
                          e.currentTarget.style.color = isDarkAccent ? '#fff' : '#000'
                          e.currentTarget.style.borderColor = s.accent
                          const icon = e.currentTarget.querySelector('.sb-icon') as HTMLElement
                          if (icon) icon.style.background = isDarkAccent ? '#fff' : '#000'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent) {
                          e.currentTarget.style.background = '#fff'
                          e.currentTarget.style.color = '#444'
                          e.currentTarget.style.borderColor = '#ebebeb'
                          const icon = e.currentTarget.querySelector('.sb-icon') as HTMLElement
                          if (icon) icon.style.background = s.accent
                        }
                      }}
                    >
                      <div className="sb-icon" style={{
                        width: 32, height: 32, flexShrink: 0,
                        background: isCurrent ? (isDarkAccent ? '#fff' : '#000') : s.accent,
                        transition: 'background 0.2s ease',
                        WebkitMask: `url("${s.icon}") center/contain no-repeat`,
                        mask: `url("${s.icon}") center/contain no-repeat`,
                      }} />
                      <span style={{ flex: 1 }}>{s.label}</span>
                      <span className="ps-nav-arrow" style={{
                        width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                        border: isCurrent ? '1px solid rgba(255,255,255,0.25)' : '1px solid #e0e0e0',
                        background: 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13,
                      }}>→</span>
                    </Link>
                  )
                })}
              </div>

              <div className="ps-sidebar-extra">
              {/* Contact form card */}
              <div style={{
                background: '#fff', borderRadius: 20, padding: '28px 24px', marginBottom: 24,
                border: '1px solid #ebebeb', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}>
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 24, fontWeight: 700, letterSpacing: -0.5,
                  color: '#000', marginBottom: 24, lineHeight: '30px',
                }}>
                  Vous avez une question ? Contactez-nous
                </h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <label style={labelStyle}>Nom</label>
                    <input
                      type="text" name="name" placeholder="Prénom *"
                      value={formData.name} onChange={handleChange} required
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email" name="email" placeholder="Adresse e-mail *"
                      value={formData.email} onChange={handleChange} required
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel" name="phone" placeholder="Numéro de téléphone *"
                      value={formData.phone} onChange={handleChange}
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" placeholder="Écrivez votre message..."
                      value={formData.message} onChange={handleChange} rows={4}
                      style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    borderRadius: 8, background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease, color 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary-light, #50b5a2)'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)'; e.currentTarget.style.color = '#fff' }}
                  >
                    Envoyer un message
                  </button>
                </form>
              </div>

              {/* CTA promo card */}
              <div style={{
                background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', borderRadius: 20, padding: '28px 24px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -60, right: -60, width: 180, height: 180,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 17, fontWeight: 600, color: '#fff', lineHeight: '24px', marginBottom: 10,
                }}>
                  Nettoyage professionnel & certifié
                </h4>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: '22px', marginBottom: 20,
                }}>
                  Des techniciens qualifiés interviennent dans toute la Suisse romande pour le nettoyage de vos panneaux.
                </p>
                <Link href="https://form.typeform.com/to/rRhOu7eb" target="_blank" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#fff', color: '#000',
                  borderRadius: 8, padding: '10px 20px',
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.18s ease',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e0f5f3' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff' }}
                >
                  Demander un Devis →
                </Link>
              </div>
              </div>
            </aside>

            {/* ── RIGHT CONTENT (scrolls) ── */}
            <div className="ps-content">

              {/* Intro headline & Main image */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                className="ps-main-img-block" style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 40, position: 'relative' }}
              >
                <img
                  src={mainImage}
                  alt="Nettoyage panneaux solaires PV Clean"
                  className="ps-main-img" style={{ width: '100%', height: 300, objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
                />

                {/* Overlay Text Card — top right */}
                <div className="ps-overlay-card" style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  maxWidth: '420px',
                  background: 'rgba(255, 255, 255, 0.45)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 36, height: 36, flexShrink: 0, background: 'var(--color-primary, #2a9b96)', WebkitMask: 'url("/Logo image/Blanc.webp") center/contain no-repeat', mask: 'url("/Logo image/Blanc.webp") center/contain no-repeat' }} />
                    <h2
                      style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 'clamp(16px, 2vw, 22px)',
                        fontWeight: 700,
                        letterSpacing: -0.5,
                        color: '#000',
                        lineHeight: 1.3,
                        margin: 0,
                        ...toCSS(overlayHeadlineStyle),
                      }}
                    >
                      {overlayHeadline}
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* PV Clean pricing card */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                {/* PV Clean card — 2 columns */}
                <div className="ps-pv-clean-grid">
                  {/* Left: brand/promo */}
                  <div style={{
                    position: 'relative', overflow: 'hidden',
                    borderRadius: 16, padding: '32px 28px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    minHeight: 220,
                  }}>
                    <img
                      src={offerImage}
                      alt=""
                      loading="lazy"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: 'center 30%',
                      }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(26,54,54,0.55)',
                    }} />
                    <img
                      src="/Logo image/Blanc.webp"
                      alt="Zen Énergie Services"
                      style={{ position: 'relative', zIndex: 1, width: 60, height: 'auto', objectFit: 'contain' }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: 0.5,
                        textTransform: 'uppercase', marginBottom: 6,
                      }}>{offerSubtitle}</div>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.25,
                        ...toCSS(offerTitleStyle),
                      }}>
                        {offerTitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: price + features */}
                  <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', borderRadius: 16, padding: '28px 24px',
                    display: 'flex', flexDirection: 'column',
                  }}>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 12, letterSpacing: 0.3,
                    }}>{offerLabel}</div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                      {offerFeatures.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <span style={{
                            width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                            background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                          }}>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6.5L4.5 9L10 3" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span style={{
                            fontFamily: "var(--font-jost), 'Jost', sans-serif",
                            fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: '20px',
                          }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 11, color: 'rgba(255,255,255,0.4)', lineHeight: '17px', margin: '16px 0 0',
                    }}>
                      {offerDisclaimer}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA button */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                <Link
                  href="https://form.typeform.com/to/rRhOu7eb"
                  target="_blank"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 14,
                    background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', color: '#fff',
                    borderRadius: 'var(--btn-radius, 14px)', padding: '12px 12px 12px 24px',
                    fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                    fontSize: 15, fontWeight: 700, textDecoration: 'none',
                    transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(42, 155, 150, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLElement;
                    btn.style.background = 'linear-gradient(135deg, var(--color-primary, #2a9b96) 0%, var(--color-primary-light, #50b5a2) 100%)';
                    const arr = btn.querySelector('.card-arr') as HTMLElement | null;
                    if (arr) {
                      arr.style.background = '#fff';
                      arr.style.transform = 'translateX(4px)';
                      arr.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.4)';
                      const svg = arr.querySelector('svg') as SVGElement | null;
                      if (svg) svg.style.stroke = 'var(--color-primary-dark, #2c6262)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLElement;
                    btn.style.background = 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)';
                    const arr = btn.querySelector('.card-arr') as HTMLElement | null;
                    if (arr) {
                      arr.style.background = 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, #1f4545 100%)';
                      arr.style.transform = 'translateX(0)';
                      arr.style.boxShadow = '0 4px 8px rgba(44, 98, 98, 0.3)';
                      const svg = arr.querySelector('svg') as SVGElement | null;
                      if (svg) svg.style.stroke = '#fff';
                    }
                  }}
                >
                  Demander un Devis
                  <span className="card-arr" style={{
                    width: 36, height: 36, borderRadius: 'var(--btn-radius-sm, 10px)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, #1f4545 100%)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 4px 8px rgba(44, 98, 98, 0.3)',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </motion.div>

              {/* Why clean section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                className="ps-why-block" style={{ background: '#f8f8f8', borderRadius: 20, padding: '32px 28px', marginBottom: 48 }}
              >
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 20, fontWeight: 700, color: '#000', marginBottom: 14, letterSpacing: -0.5, lineHeight: 1.3,
                  ...toCSS(whyTitleStyle),
                }}>
                  {whyTitle}
                </h3>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 15, color: '#444', lineHeight: '24px', marginBottom: 14,
                }}>
                  {whyIntro}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {whyBullets.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{
                        width: 10, height: 10, minWidth: 10, background: 'var(--color-primary-light, #50b5a2)', borderRadius: 2,
                        marginTop: 7, display: 'inline-block',
                      }} />
                      <span style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 15, color: '#444', lineHeight: '24px',
                      }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Two images */}
              <div className="ps-duo-grid" style={{ marginBottom: 64 }}>
                <motion.div
                  variants={reveal} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ borderRadius: 16, overflow: 'hidden' }}
                >
                  <img
                    src={detailImages[0]}
                    alt="Nettoyage panneaux solaires"
                    loading="lazy"
                    className="ps-detail-img" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
                {detailImages[1] && (
                  <motion.div
                    variants={reveal} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    style={{ borderRadius: 16, overflow: 'hidden' }}
                  >
                    <img
                      src={detailImages[1]}
                      alt="Nettoyage gros plan panneau solaire"
                      loading="lazy"
                      className="ps-detail-img" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                )}
              </div>

              {/* FAQ */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 8 }}
              >
                <SectionLabel text="QUESTIONS FRÉQUENTES" />
              </motion.div>
              <motion.h3
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
                className="ps-faq-title"
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 28, fontWeight: 600, letterSpacing: -1,
                  color: '#000', marginBottom: 32, lineHeight: '36px',
                  ...toCSS(faqTitleStyle),
                }}
              >
                {faqTitle}
              </motion.h3>

              {faqs.map((faq, i) => {
                const isActive = activeIdx === i
                return (
                  <motion.div
                    key={i}
                    variants={reveal} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.06 }}
                    style={{ borderBottom: '1px solid #e8e8e8' }}
                  >
                    <div
                      onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: 16, cursor: 'pointer', padding: '22px 0',
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 17, fontWeight: 500, color: '#000',
                      }}
                    >
                      <span className="ps-faq-q-text">{faq.q}</span>
                      <span style={{
                        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                        border: isActive ? '1px solid var(--color-primary-light, #50b5a2)' : '1px solid #e8e8e8',
                        background: isActive ? 'var(--color-primary-light, #50b5a2)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 20, lineHeight: 1,
                        transform: isActive ? 'rotate(45deg)' : 'none',
                        transition: 'all 0.2s ease',
                      }}>+</span>
                    </div>
                    <div style={{
                      maxHeight: isActive ? 600 : 0, overflow: 'hidden',
                      transition: 'max-height 0.4s ease', paddingBottom: isActive ? 20 : 0,
                    }}>
                      <div style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 16, lineHeight: '26px', color: '#666',
                      }}>
                        {faq.a.split('\n').map((line, li) =>
                          line.startsWith('•') ? (
                            <div key={li} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                              <span style={{ color: 'var(--color-primary-light, #50b5a2)', flexShrink: 0 }}>•</span>
                              <span>{line.slice(1).trim()}</span>
                            </div>
                          ) : line.match(/^\d+\./) ? (
                            <div key={li} style={{ fontWeight: 600, marginTop: li > 0 ? 10 : 0, marginBottom: 4, color: '#333' }}>{line}</div>
                          ) : line === '' ? (
                            <div key={li} style={{ height: 8 }} />
                          ) : (
                            <p key={li} style={{ margin: '0 0 4px' }}>{line}</p>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* ── Mobile/tablet: contact + CTA cards (hidden on desktop) ── */}
          <div className="ps-mobile-cards">
            <div style={{ background: '#fff', borderRadius: 20, padding: '28px 24px', marginBottom: 24, border: '1px solid #ebebeb', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: '#000', marginBottom: 24, lineHeight: '28px' }}>
                Vous avez une question ? Contactez-nous
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={labelStyle}>Nom</label>
                  <input type="text" name="name" placeholder="Prénom *" value={formData.name} onChange={handleChange} required style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input type="email" name="email" placeholder="Adresse e-mail *" value={formData.email} onChange={handleChange} required style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input type="tel" name="phone" placeholder="Numéro de téléphone *" value={formData.phone} onChange={handleChange} style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" placeholder="Écrivez votre message..." value={formData.message} onChange={handleChange} rows={4}
                    style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: 8, background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', border: 'none', fontSize: 15, fontWeight: 700, fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: '#fff', cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease', marginTop: 4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-primary-light, #50b5a2)'; e.currentTarget.style.color = '#000' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)'; e.currentTarget.style.color = '#fff' }}>
                  Envoyer un message
                </button>
              </form>
            </div>
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', borderRadius: 20, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600, color: '#fff', lineHeight: '24px', marginBottom: 10 }}>
                Nettoyage professionnel & certifié
              </h4>
              <p style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: '22px', marginBottom: 20 }}>
                Des techniciens qualifiés interviennent dans toute la Suisse romande pour le nettoyage de vos panneaux.
              </p>
              <Link href="https://form.typeform.com/to/rRhOu7eb" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#000', borderRadius: 8, padding: '10px 20px', fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.18s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e0f5f3' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff' }}>
                Demander une offre →
              </Link>
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .ps-layout {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }
        .ps-sidebar {
          flex: 0 0 300px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }
        .ps-content { flex: 1; min-width: 0; }
        .ps-mobile-cards { display: none; }

        /* hover handled by onMouseEnter/onMouseLeave inline handlers */

        .ps-pv-clean-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 20px;
        }
        @media (max-width: 700px) {
          .ps-pv-clean-grid { grid-template-columns: 1fr; }
        }
        .ps-duo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .ps-layout { flex-direction: column !important; }
          .ps-sidebar {
            flex: none !important;
            width: 100% !important;
            position: static !important;
            max-height: none !important;
            order: -1 !important;
          }
          .ps-content { order: 1 !important; }
          .ps-section { padding-top: 40px !important; padding-bottom: 40px !important; }
          .ps-service-nav .ps-nav-link {
            padding: 10px 14px !important;
            font-size: 13px !important;
            border-radius: var(--btn-radius-sm, 10px) !important;
          }
          .ps-nav-arrow { display: none !important; }
          .ps-sidebar-extra { display: none !important; }
          .ps-section-wrap { padding-top: 32px !important; padding-bottom: 48px !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .ps-service-nav {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            margin-bottom: 0 !important;
          }
          .ps-mobile-cards {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            align-items: start;
          }
        }
        @media (max-width: 640px) {
          .ps-service-nav {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            margin-bottom: 0 !important;
          }
          .ps-mobile-cards { display: block !important; }
          .ps-duo-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ps-section-wrap { padding-left: 12px !important; padding-right: 12px !important; }
        }
        .ps-tbl-scroll::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 48px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.9));
          pointer-events: none;
          border-radius: 0 20px 20px 0;
          z-index: 1;
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .ps-main-img { height: 260px !important; }
          .ps-discount-banner { flex-direction: column !important; align-items: flex-start !important; }
          .ps-discount-badge { width: 100% !important; justify-content: flex-start !important; box-sizing: border-box !important; }
        }
        @media (max-width: 640px) {
          .ps-main-img-block { margin-bottom: 28px !important; }
          .ps-main-img { height: 200px !important; }
          .ps-overlay-card {
            right: 12px !important;
            left: 12px !important;
            max-width: none !important;
            top: auto !important;
            bottom: 16px !important;
          }
          .ps-discount-banner { flex-direction: column !important; align-items: stretch !important; gap: 10px !important; padding: 16px 14px !important; }
          .ps-discount-badge { width: 100% !important; justify-content: center !important; box-sizing: border-box !important; }
          .ps-discount-icon { display: none !important; }
          .ps-why-block { padding: 20px 16px !important; }
          .ps-detail-img { height: 180px !important; }
          .ps-faq-q-text { font-size: 15px !important; line-height: 22px !important; }
          .ps-faq-title {
            font-size: 22px !important;
            letter-spacing: -0.5px !important;
            line-height: 30px !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </main>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  fontSize: 14,
  fontWeight: 500,
  color: '#000',
  marginBottom: 6,
}

const formInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 18px',
  borderRadius: 10,
  border: '1px solid #e0e0e0',
  fontSize: 14,
  fontFamily: "var(--font-jost), 'Jost', sans-serif",
  outline: 'none',
  background: '#fff',
  color: '#000',
  transition: 'border-color 0.18s ease',
  boxSizing: 'border-box',
}
