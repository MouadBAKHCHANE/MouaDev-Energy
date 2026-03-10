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

const includes = [
  'Inspection complète des panneaux et de la structure',
  'Contrôle électrique et vérification des connexions',
  'Contrôle des performances de l\'onduleur',
  'Nettoyage professionnel des surfaces',
  'Rapport d\'intervention détaillé',
  'Maintenance préventive des équipements',
]

const steps = [
  {
    title: 'Prise de rendez-vous',
    desc: 'Planifiez votre intervention en ligne ou par téléphone selon vos disponibilités.',
  },
  {
    title: 'Inspection sur site',
    desc: 'Nos techniciens inspectent panneaux, câblage, fixations et onduleur.',
  },
  {
    title: 'Entretien & nettoyage',
    desc: 'Nettoyage professionnel et maintenance préventive pour restaurer le rendement.',
  },
  {
    title: 'Rapport d\'intervention',
    desc: 'Vous recevez un compte-rendu complet avec les mesures et recommandations.',
  },
  {
    title: 'Suivi contrat',
    desc: 'Retrouvez l\'historique de vos interventions dans votre espace client en ligne.',
  },
  {
    title: 'Prochaine intervention',
    desc: 'Nous planifions automatiquement la prochaine visite selon votre contrat.',
  },
]

const faqs = [
  {
    q: 'À quelle fréquence faut-il entretenir ses panneaux solaires ?',
    a: 'Selon votre contrat, l\'entretien est réalisé chaque année (Zen Équilibre, Zen Plus) ou tous les 2 ans (Zen Accès). Un entretien régulier permet d\'éviter une perte de rendement pouvant atteindre 15 % par an.',
  },
  {
    q: 'Quels équipements sont couverts par le contrat ?',
    a: 'Le contrat couvre vos panneaux photovoltaïques, l\'onduleur, le câblage et les fixations. Zen Énergie Services intervient sur la majorité des marques présentes sur le marché suisse.',
  },
  {
    q: 'Que se passe-t-il en cas de panne entre deux visites ?',
    a: 'Avec le contrat Zen Plus, la main-d\'œuvre et le déplacement pour les dépannages sont inclus. Pour les autres formules, une intervention ponctuelle peut être planifiée.',
  },
  {
    q: 'L\'entretien est-il obligatoire pour conserver la garantie fabricant ?',
    a: 'Oui, la plupart des fabricants exigent un entretien régulier pour maintenir la validité de la garantie. Notre rapport d\'intervention vous sert de preuve officielle de maintenance.',
  },
]

export default function PanneauxSolairesPage() {
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
          { label: 'Panneaux solaires' },
        ]}
        title="Entretien de panneaux solaires"
        bgImage="/Photos HD/Visuels Technique/Technique - PV/Entretien panneaux solaires.webp"
      />

      {/* ── Main layout: sticky left + scrolling right ── */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }} className="ps-outer">
          <div className="ps-layout">

            {/* ── LEFT SIDEBAR (sticky) ── */}
            <aside className="ps-sidebar">

              {/* Service nav */}
              <div style={{ background: '#f8f8f8', borderRadius: 20, overflow: 'hidden', marginBottom: 24 }}>
                <p style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 12, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
                  color: '#999', padding: '18px 20px 10px',
                }}>
                  Nos services
                </p>
                {sidebarServices.map((s) => {
                  const isCurrent = s.href === '/services/panneaux-solaires'
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="ps-nav-link"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '13px 16px',
                        fontSize: 15,
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontWeight: isCurrent ? 600 : 400,
                        color: isCurrent ? '#000' : '#555',
                        background: isCurrent ? '#50B5A2' : 'transparent',
                        borderRadius: 12,
                        margin: '3px 8px',
                        textDecoration: 'none',
                        transition: 'background 0.18s ease, color 0.18s ease',
                      }}
                    >
                      {s.label}
                      <span style={{
                        width: 26, height: 26, borderRadius: '50%',
                        border: isCurrent ? '1px solid rgba(0,0,0,0.2)' : '1px solid #e0e0e0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, flexShrink: 0,
                      }}>→</span>
                    </Link>
                  )
                })}
              </div>

              {/* Contact form card */}
              <div style={{
                background: '#f8f8f8', borderRadius: 20, padding: '28px 24px', marginBottom: 24,
              }}>
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 20, fontWeight: 600, letterSpacing: -0.5,
                  color: '#000', marginBottom: 20, lineHeight: '26px',
                }}>
                  Une question sur votre installation ?
                </h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <input
                    type="text" name="name" placeholder="Prénom *"
                    value={formData.name} onChange={handleChange} required
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
                  />
                  <input
                    type="email" name="email" placeholder="Adresse e-mail *"
                    value={formData.email} onChange={handleChange} required
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
                  />
                  <input
                    type="tel" name="phone" placeholder="Numéro de téléphone"
                    value={formData.phone} onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
                  />
                  <textarea
                    name="message" placeholder="Message"
                    value={formData.message} onChange={handleChange} rows={4}
                    style={{ ...inputStyle, borderRadius: 14, resize: 'vertical' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
                  />
                  <button type="submit" style={{
                    width: '100%', padding: '13px',
                    borderRadius: 100, background: '#50B5A2', border: 'none',
                    fontSize: 15, fontWeight: 600,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#000', cursor: 'pointer',
                    transition: 'background 0.18s ease',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#3da090' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#50B5A2' }}
                  >
                    Envoyer un message
                  </button>
                </form>
              </div>

              {/* CTA promo card */}
              <div style={{
                background: '#0a1e1d', borderRadius: 20, padding: '28px 24px',
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
                  Entretien professionnel & certifié
                </h4>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: '22px', marginBottom: 20,
                }}>
                  Des techniciens qualifiés interviennent dans toute la Suisse romande pour l'entretien de vos installations.
                </p>
                <Link href="https://form.typeform.com/to/rRhOu7eb" target="_blank" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: '#50B5A2', color: '#000',
                  borderRadius: 100, padding: '10px 20px',
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.18s ease',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#3da090' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#50B5A2' }}
                >
                  Obtenir un devis →
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
                Entretien intelligent de vos panneaux photovoltaïques pour une efficacité maximale
              </motion.h2>

              <motion.p
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
                style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 18, lineHeight: '28px', color: '#333', marginBottom: 16,
                }}
              >
                Les panneaux solaires mal entretenus peuvent perdre jusqu'à <strong>15–20 % de rendement</strong> par an. Notre service d'entretien professionnel garantit que votre installation fonctionne à son niveau optimal, protège votre investissement et prolonge la durée de vie de vos équipements.
              </motion.p>
              <motion.p
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
                style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 18, lineHeight: '28px', color: '#333', marginBottom: 40,
                }}
              >
                Nos techniciens certifiés interviennent dans toute la Suisse romande et utilisent des équipements homologués pour chaque intervention. Confiez l'entretien de vos panneaux à Zen Énergie Services — et restez Zen.
              </motion.p>

              {/* Main image */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 56 }}
              >
                <img
                  src="/Photos HD/Visuels Technique/Nettoyage - PV/cleaning-solar-panel-with-microfiber-mop-wet-roof-solar-panel-photovoltaic-module-maintenance.webp"
                  alt="Entretien panneaux solaires"
                  style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              {/* Includes section */}
              <motion.h3
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 26, fontWeight: 600, color: '#000', marginBottom: 12, letterSpacing: -0.5,
                }}
              >
                Ce que comprend notre service d'entretien
              </motion.h3>
              <motion.p
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 17, lineHeight: '27px', color: '#555', marginBottom: 28,
                }}
              >
                Nos techniciens effectuent un contrôle complet de votre installation, de la vérification électrique au nettoyage, en passant par l'inspection mécanique des fixations et la performance de l'onduleur.
              </motion.p>

              {/* Includes list — 2 cols */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                className="ps-includes-grid"
                style={{ marginBottom: 48 }}
              >
                {includes.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{
                      width: 22, height: 22, background: '#50B5A2', borderRadius: '50%',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5L4.5 9L10 3" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 16, color: '#333', lineHeight: '24px',
                    }}>{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Two images */}
              <div className="ps-duo-grid" style={{ marginBottom: 64 }}>
                <motion.div
                  variants={reveal} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ borderRadius: 16, overflow: 'hidden' }}
                >
                  <img
                    src="/Photos HD/Visuels Technique/Technique - PV/Ouvrier et panneaux solaires.webp"
                    alt="Ouvrier panneaux solaires"
                    style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
                <motion.div
                  variants={reveal} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  style={{ borderRadius: 16, overflow: 'hidden' }}
                >
                  <img
                    src="/Photos HD/Visuels Technique/Technique - PV/Réparation de panneaux solaires.webp"
                    alt="Réparation panneaux solaires"
                    style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
              </div>

              {/* Working process */}
              <motion.h3
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 26, fontWeight: 600, color: '#000', marginBottom: 28, letterSpacing: -0.5,
                }}
              >
                Notre processus d'intervention
              </motion.h3>

              <div className="ps-steps-grid" style={{ marginBottom: 48 }}>
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={reveal} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.07 }}
                    style={{ background: '#f8f8f8', borderRadius: 20, padding: '28px 24px' }}
                  >
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 36, fontWeight: 700, color: '#50B5A2', lineHeight: 1, marginBottom: 12,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4 style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 17, fontWeight: 600, color: '#000', marginBottom: 8, lineHeight: 1.3,
                    }}>{step.title}</h4>
                    <p style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 15, color: '#555', lineHeight: '22px', margin: 0,
                    }}>{step.desc}</p>
                  </motion.div>
                ))}
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
                  Souscrire un contrat d'entretien
                  <span style={{
                    width: 40, height: 36, borderRadius: 10, background: '#000',
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
                Questions sur l'entretien de vos panneaux
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
                      maxHeight: isActive ? 200 : 0, overflow: 'hidden',
                      transition: 'max-height 0.35s ease', paddingBottom: isActive ? 20 : 0,
                    }}>
                      <p style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 16, lineHeight: '26px', color: '#666', margin: 0,
                      }}>{faq.a}</p>
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
          flex: 0 0 300px;
          position: sticky;
          top: 100px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          scrollbar-width: none;
        }
        .ps-sidebar::-webkit-scrollbar { display: none; }
        .ps-content { flex: 1; min-width: 0; }

        .ps-nav-link:hover {
          background: #f0f0f0 !important;
        }

        .ps-includes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 24px;
        }
        .ps-duo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .ps-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1200px) {
          .ps-steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 1024px) {
          .ps-layout { flex-direction: column !important; }
          .ps-sidebar {
            flex: none !important;
            width: 100% !important;
            position: static !important;
            max-height: none !important;
          }
          .ps-includes-grid { grid-template-columns: 1fr; }
          .ps-steps-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ps-duo-grid { grid-template-columns: 1fr; }
          .ps-steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 16px',
  borderRadius: 100,
  border: '1px solid #e8e8e8',
  fontSize: 14,
  fontFamily: "var(--font-jost), 'Jost', sans-serif",
  outline: 'none',
  background: '#fff',
  color: '#000',
  transition: 'border-color 0.18s ease',
}
