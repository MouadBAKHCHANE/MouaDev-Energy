'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

const sidebarServices = [
  { label: 'Panneaux solaires', href: '/services/panneaux-solaires' },
  { label: 'Pompe à chaleur', href: '/services/pompe-a-chaleur' },
  { label: 'Boiler thermodynamique', href: '/services/boiler-thermodynamique' },
  { label: 'PV Clean — Nettoyage', href: '/services/pv-clean' },
]

const faqs = [
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

export default function PvCleanPage() {
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
          { label: 'PV Clean — Nettoyage' },
        ]}
        title="PV Clean — Nettoyage"
        bgImage="/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-view-cleaning-solar-panels-surface.webp"
      />

      {/* ── Main layout: sticky left + scrolling right ── */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }} className="ps-outer">
          <div className="ps-layout">

            {/* ── LEFT SIDEBAR (sticky) ── */}
            <aside className="ps-sidebar">

              {/* Service nav */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {sidebarServices.map((s) => {
                  const isCurrent = s.href === '/services/pv-clean'
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="ps-nav-link"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '18px 20px',
                        fontSize: 15,
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontWeight: isCurrent ? 600 : 400,
                        color: isCurrent ? '#000' : '#444',
                        background: isCurrent ? '#50B5A2' : '#fff',
                        borderRadius: 16,
                        border: isCurrent ? 'none' : '1px solid #ebebeb',
                        textDecoration: 'none',
                        transition: 'background 0.18s ease, border-color 0.18s ease',
                        boxShadow: isCurrent ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
                      }}
                    >
                      {s.label}
                      <span style={{
                        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                        border: isCurrent ? '1px solid rgba(0,0,0,0.15)' : '1px solid #e0e0e0',
                        background: 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 14,
                      }}>→</span>
                    </Link>
                  )
                })}
              </div>

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
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email" name="email" placeholder="Adresse e-mail *"
                      value={formData.email} onChange={handleChange} required
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel" name="phone" placeholder="Numéro de téléphone *"
                      value={formData.phone} onChange={handleChange}
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" placeholder="Écrivez votre message..."
                      value={formData.message} onChange={handleChange} rows={4}
                      style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    borderRadius: 8, background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease, color 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#50B5A2'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)'; e.currentTarget.style.color = '#fff' }}
                  >
                    Envoyer un message
                  </button>
                </form>
              </div>

              {/* CTA promo card */}
              <div style={{
                background: '#2c6262', borderRadius: 20, padding: '28px 24px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: -60, right: -60, width: 180, height: 180,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(80,181,162,0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: 40, height: 40, borderRadius: 10, background: '#50B5A2',
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
                  fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: '22px', marginBottom: 20,
                }}>
                  Des techniciens qualifiés interviennent dans toute la Suisse romande pour le nettoyage de vos panneaux.
                </p>
                <Link href="https://form.typeform.com/to/rRhOu7eb" target="_blank" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#50B5A2', color: '#000',
                  borderRadius: 8, padding: '10px 20px',
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.18s ease',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#3da090' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#50B5A2' }}
                >
                  Demander une offre →
                </Link>
              </div>
            </aside>

            {/* ── RIGHT CONTENT (scrolls) ── */}
            <div className="ps-content">

              {/* Intro headline */}
              <motion.h2
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 600, letterSpacing: -1.5,
                  color: '#000', lineHeight: 1.2, marginBottom: 20,
                }}
              >
                Retrouvez toute la puissance de vos panneaux solaires avec notre offre PV Clean
              </motion.h2>

              {/* Main image */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 56 }}
              >
                <img
                  src="/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/cleaning-solar-panel-with-microfiber-mop-wet-roof-solar-panel-photovoltaic-module-maintenance.webp"
                  alt="Nettoyage panneaux solaires PV Clean"
                  style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              {/* PV Clean pricing card */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28,
                }}>
                  <div style={{ flex: 1, height: 1, background: '#000' }} />
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 22, fontWeight: 700, color: '#000', whiteSpace: 'nowrap', margin: 0,
                  }}>
                    À partir de CHF 392.-&nbsp;!
                  </h3>
                  <div style={{ flex: 1, height: 1, background: '#000' }} />
                </div>

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
                      src="/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-solar-technician-installing-solar-panel-outdoors.webp"
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
                      style={{ position: 'relative', zIndex: 1, width: 100, height: 'auto', objectFit: 'contain' }}
                    />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 17, fontWeight: 800, color: '#50b5a2', letterSpacing: 0.5,
                        textTransform: 'uppercase', marginBottom: 10,
                      }}>OFFRE PV CLEAN :</div>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.25,
                      }}>
                        L'EFFICACITÉ RETROUVÉE DE VOS PANNEAUX PHOTOVOLTAÏQUES !
                      </div>
                    </div>
                  </div>

                  {/* Right: price + features */}
                  <div style={{
                    background: '#2c6262', borderRadius: 16, padding: '28px 24px',
                    display: 'flex', flexDirection: 'column',
                  }}>
                    <div style={{ marginBottom: 20 }}>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 34, fontWeight: 800, color: '#fff', lineHeight: 1,
                      }}>49 CHF / panneau</div>
                      <div style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4,
                      }}>(avec min. forfaitaire de 8 PV de 392 CHF)</div>
                    </div>

                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 13, fontWeight: 600, color: '#50B5A2', marginBottom: 12, letterSpacing: 0.3,
                    }}>Ce que contient votre offre PV Clean :</div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                      {[
                        'Nettoyage simple : dépoussiérage',
                        'Nettoyage mécanique : utilisation de perches télescopiques ou brosses rotatives et d\'eau déminéralisée.',
                        'Pose d\'une couche protectrice',
                        'Rapport de nettoyage complet',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <span style={{
                            width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                            background: '#50B5A2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
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
                      * Offre tarifaire valable pour une intervention à partir de 8 panneaux.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why clean section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ background: '#f8f8f8', borderRadius: 20, padding: '32px 28px', marginBottom: 48 }}
              >
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 20, fontWeight: 700, color: '#000', marginBottom: 14, letterSpacing: -0.5, lineHeight: 1.3,
                }}>
                  Pourquoi faire nettoyer ses panneaux solaires par un professionnel ?
                </h3>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 15, color: '#444', lineHeight: '24px', marginBottom: 14,
                }}>
                  Des panneaux encrassés perdent jusqu'à 25% de leur rendement. Un nettoyage professionnel permet :
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    "De restituer immédiatement la pleine puissance de votre installation en éliminant poussières, fientes et dépôts calcaires.",
                    "De préserver l'intégrité des panneaux grâce à des techniques de nettoyage adaptées, sans rayures ni produits agressifs.",
                    "D'améliorer la durabilité de votre installation en appliquant une couche protectrice hydrophobe qui limite les salissures futures.",
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{
                        width: 10, height: 10, minWidth: 10, background: '#50B5A2', borderRadius: 2,
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
                    src="/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/1789536761.webp"
                    alt="Nettoyage panneaux solaires"
                    loading="lazy"
                    style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
                <motion.div
                  variants={reveal} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  style={{ borderRadius: 16, overflow: 'hidden' }}
                >
                  <img
                    src="/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-view-cleaning-solar-panels-surface.webp"
                    alt="Nettoyage gros plan panneau solaire"
                    loading="lazy"
                    style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              </div>

              {/* CTA button */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 80 }}
              >
                <Link
                  href="https://form.typeform.com/to/rRhOu7eb"
                  target="_blank"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 12,
                    background: '#50B5A2', color: '#000',
                    borderRadius: 14, padding: '14px 14px 14px 28px',
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 16, fontWeight: 600, textDecoration: 'none',
                    transition: 'background 0.18s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#3da090' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#50B5A2' }}
                >
                  Demander un nettoyage PV Clean
                  <span style={{
                    width: 40, height: 36, borderRadius: 10, background: '#2c6262',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 18,
                  }}>→</span>
                </Link>
              </motion.div>

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
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 28, fontWeight: 600, letterSpacing: -1,
                  color: '#000', marginBottom: 32, lineHeight: '36px',
                }}
              >
                Questions sur le nettoyage PV Clean
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
                      <span>{faq.q}</span>
                      <span style={{
                        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                        border: isActive ? '1px solid #50B5A2' : '1px solid #e8e8e8',
                        background: isActive ? '#50B5A2' : 'transparent',
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
                              <span style={{ color: '#50B5A2', flexShrink: 0 }}>•</span>
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
        </div>
      </section>

      <style jsx global>{`
        .ps-layout {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }
        .ps-sidebar {
          flex: 0 0 360px;
          position: sticky;
          top: 100px;
          align-self: flex-start;
        }
        .ps-content { flex: 1; min-width: 0; }

        .ps-nav-link:hover {
          background: #f5f5f5 !important;
          border-color: #d8d8d8 !important;
        }

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
            order: 2 !important;
          }
          .ps-content { order: 1 !important; }
        }
        @media (max-width: 640px) {
          .ps-duo-grid { grid-template-columns: 1fr; }
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
