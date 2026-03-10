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
    q: 'À quelle fréquence dois-je faire nettoyer mes panneaux photovoltaïques ?',
    a: 'En règle générale, un nettoyage annuel est recommandé pour la majorité des installations. Cependant, plusieurs facteurs peuvent nécessiter une fréquence plus élevée :\n\n• En zone rurale ou agricole (poussières, pollen, fientes d\'oiseaux) : 2 fois par an\n• En zone urbaine ou industrielle (pollution, suie) : 1 à 2 fois par an\n• En zone de montagne avec chutes de neige importantes : après chaque enneigement prolongé\n\nDes facteurs spécifiques comme une faible inclinaison des panneaux (< 15°) ou la proximité d\'arbres peuvent également justifier un nettoyage plus régulier, car les salissures s\'accumulent plus rapidement et s\'écoulent moins facilement.',
  },
  {
    q: 'Comment se déroule un entretien et une maintenance Zen ?',
    a: 'Notre intervention se déroule en 3 phases :\n\n1. Sur le toit :\n• Inspection visuelle des panneaux (micro-fissures, délamination, ombrage)\n• Vérification des fixations mécaniques et de l\'étanchéité\n• Contrôle des câbles et des connecteurs\n• Nettoyage professionnel des surfaces (eau déminéralisée + outils homologués)\n• Mesure de la tension et du courant en conditions réelles\n\n2. En bas de l\'habitat :\n• Vérification du tableau électrique et des protections (disjoncteurs, parafoudres)\n• Contrôle et diagnostic de l\'onduleur (température, erreurs, rendement)\n• Vérification du compteur de production et remontée des données\n\n3. Monitoring à distance (selon contrat) :\n• Analyse des courbes de production sur les derniers mois\n• Comparaison avec les données météo pour détecter toute anomalie\n• Rapport d\'intervention complet remis au client',
  },
  {
    q: 'Quelle est la durée de vie des panneaux photovoltaïques régulièrement entretenus ?',
    a: 'Les panneaux photovoltaïques modernes ont une durée de vie estimée entre 25 et 30 ans. Avec un entretien régulier et professionnel, vous pouvez maintenir :\n\n• 90 à 95 % du rendement initial après 10 ans\n• 80 à 90 % du rendement initial après 25 ans\n\nSans entretien, la dégradation s\'accélère significativement : encrassement, micro-fissures non détectées, corrosion des connexions et problèmes d\'onduleur peuvent réduire la production de 15 à 25 % en quelques années seulement. Un entretien régulier protège donc directement votre retour sur investissement.',
  },
  {
    q: 'Quelles sont les étapes de nettoyage de l\'offre PV Clean ?',
    a: 'Notre offre PV Clean comprend 4 étapes clés :\n\n1. Dépoussiérage à sec : élimination des poussières grossières, fientes et débris à l\'aide d\'outils doux pour ne pas rayer les surfaces\n2. Nettoyage mécanique humide : lavage à l\'eau déminéralisée avec des brosses à poils souples rotatives, sans détergent chimique agressif, pour préserver les traitements de surface\n3. Application d\'une couche protectrice (en option) : traitement hydrophobe permettant aux salissures de glisser plus facilement et de réduire la fréquence de nettoyage\n4. Rapport d\'intervention : photos avant/après, mesures de production, recommandations personnalisées\n\nL\'offre PV Clean est disponible sans contrat d\'entretien, à partir de CHF 392 pour 8 panneaux.',
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
        title="Panneaux Photovoltaïques"
        bgImage="/Photos HD/Photos produits/Panneaux solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp"
      />

      {/* ── Main layout: sticky left + scrolling right ── */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }} className="ps-outer">
          <div className="ps-layout">

            {/* ── LEFT SIDEBAR (sticky) ── */}
            <aside className="ps-sidebar">

              {/* Service nav — individual cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {sidebarServices.map((s) => {
                  const isCurrent = s.href === '/services/panneaux-solaires'
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
                      style={{ ...formInputStyle, borderRadius: 14, resize: 'vertical' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    borderRadius: 8, background: '#000', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#222' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#000' }}
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
                Maximisez votre production solaire grâce à un entretien régulier de vos panneaux photovoltaïques
              </motion.h2>


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

              {/* Pricing section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28,
                }}>
                  <div style={{ flex: 1, height: 1, background: '#000' }} />
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 22, fontWeight: 700, color: '#000', whiteSpace: 'nowrap', margin: 0,
                  }}>
                    À partir de CHF 420.-/ an&nbsp;!
                  </h3>
                  <div style={{ flex: 1, height: 1, background: '#000' }} />
                </div>

                {/* 3 pricing cards */}
                <div className="ps-pricing-grid">
                  {[
                    {
                      num: '1',
                      title: 'ZEN ACCÈS',
                      subtitle: 'La tranquillité essentielle',
                      features: ['Compte client online', 'Entretien tous les 2 ans'],
                      prices: [
                        { label: '< 6 kWc', sub: "jusqu'à 14 panneaux", price: '420 CHF / 2 ans' },
                        { label: '> 6 kWc', sub: 'de 15 à 30 panneaux', price: '510 CHF / 2 ans' },
                        { label: '> 12 kWc', sub: '+ de 30 panneaux', price: '610 CHF / 2 ans' },
                      ],
                    },
                    {
                      num: '2',
                      title: 'ZEN ÉQUILIBRE',
                      subtitle: 'La couverture complète',
                      features: ['Compte client online', 'Entretien annuel'],
                      prices: [
                        { label: '< 6 kWc', sub: "jusqu'à 14 panneaux", price: '470 CHF / an' },
                        { label: '> 6 kWc', sub: 'de 15 à 30 panneaux', price: '550 CHF / an' },
                        { label: '> 12 kWc', sub: '+ de 30 panneaux', price: '650 CHF / an' },
                      ],
                    },
                    {
                      num: '3',
                      title: 'ZEN PLUS',
                      subtitle: 'La sérénité assurée',
                      features: ['Compte client online', 'Entretien annuel', 'Dépannage, main d\'œuvre et déplacement'],
                      prices: [
                        { label: '< 6 kWc', sub: "jusqu'à 14 panneaux", price: '520 CHF / an' },
                        { label: '> 6 kWc', sub: 'de 15 à 30 panneaux', price: '650 CHF / an' },
                        { label: '> 12 kWc', sub: '+ de 30 panneaux', price: '750 CHF / an' },
                      ],
                    },
                  ].map((plan) => (
                    <div key={plan.num} style={{ borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                      {/* Teal top */}
                      <div style={{ background: '#2a9b96', padding: '20px 20px 16px', position: 'relative' }}>
                        {/* Number badge */}
                        <div style={{
                          position: 'absolute', top: 12, left: 12,
                          width: 24, height: 24, borderRadius: '50%',
                          background: 'rgba(0,0,0,0.25)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 12, fontWeight: 700, color: '#fff',
                        }}>{plan.num}</div>
                        {/* Solar panel icon */}
                        <div style={{ textAlign: 'center', marginBottom: 10, marginTop: 8 }}>
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <rect x="2" y="8" width="32" height="20" rx="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
                            <line x1="2" y1="18" x2="34" y2="18" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                            <line x1="13" y1="8" x2="13" y2="28" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                            <line x1="23" y1="8" x2="23" y2="28" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                            <line x1="13" y1="28" x2="18" y2="34" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                            <line x1="23" y1="28" x2="18" y2="34" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
                            <circle cx="27" cy="12" r="3" fill="rgba(255,255,255,0.5)"/>
                          </svg>
                        </div>
                        <div style={{
                          textAlign: 'center',
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: 0.5, marginBottom: 4,
                        }}>{plan.title}</div>
                        <div style={{
                          textAlign: 'center',
                          fontFamily: "var(--font-jost), 'Jost', sans-serif",
                          fontSize: 13, color: 'rgba(255,255,255,0.85)',
                        }}>{plan.subtitle}</div>
                        {/* Features */}
                        <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0 }}>
                          {plan.features.map((f, fi) => (
                            <li key={fi} style={{
                              fontFamily: "var(--font-jost), 'Jost', sans-serif",
                              fontSize: 13, color: '#fff',
                              display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4,
                            }}>
                              <span style={{ color: 'rgba(255,255,255,0.7)', marginTop: 1 }}>•</span>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Dark bottom */}
                      <div style={{ background: '#1a3535', padding: '16px 20px', flex: 1 }}>
                        {plan.prices.map((p, pi) => (
                          <div key={pi} style={{ marginBottom: pi < plan.prices.length - 1 ? 14 : 0 }}>
                            <div style={{
                              fontFamily: "var(--font-jost), 'Jost', sans-serif",
                              fontSize: 12, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic',
                            }}>
                              {p.label} <span style={{ fontSize: 11 }}>({p.sub})</span>
                            </div>
                            <div style={{
                              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                              fontSize: 20, fontWeight: 700, color: '#fff', lineHeight: 1.2,
                            }}>{p.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discount banner */}
                <div style={{
                  marginTop: 20, borderRadius: 16, overflow: 'hidden',
                  background: '#1a3535', padding: '20px 28px',
                  display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    border: '2px solid #50B5A2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#50B5A2"/>
                      <circle cx="12" cy="12" r="10" stroke="#50B5A2" strokeWidth="1.5" fill="none"/>
                      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#50B5A2">%</text>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 2,
                    }}>
                      Vous possédez plusieurs équipements différents ?
                    </div>
                    <div style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 13, color: 'rgba(255,255,255,0.6)',
                    }}>
                      sur la 1ère année de contrat à partir de 2 contrats d'entretien souscrits !
                    </div>
                  </div>
                  <div style={{
                    background: '#50B5A2', borderRadius: 8, padding: '8px 20px',
                    display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                  }}>
                    <span style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 14, color: '#000',
                    }}>Profitez d'un rabais de</span>
                    <span style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 28, fontWeight: 800, color: '#000', lineHeight: 1,
                    }}>10 %</span>
                  </div>
                </div>
              </motion.div>

              {/* Disclaimer card */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  background: '#f8f8f8', borderRadius: 12, padding: '16px 20px',
                  marginBottom: 48, border: '1px solid #e8e8e8',
                }}
              >
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 13, color: '#777', lineHeight: '20px', margin: 0,
                }}>
                  <strong style={{ color: '#555' }}>*</strong> Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise. Le nettoyage des panneaux n'est pas inclus.
                </p>
              </motion.div>

              {/* PV Clean section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                {/* Header */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 13, fontWeight: 600, color: '#2a9b96', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6,
                  }}>NOS SOLUTIONS D'ENTRETIEN :</div>
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 22, fontWeight: 700, color: '#000', margin: '0 0 12px', letterSpacing: -0.5,
                  }}>
                    Pensez à faire nettoyer vos panneaux solaires par un professionnel
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 15, color: '#555', lineHeight: '23px', margin: '0 0 6px',
                  }}>
                    La garantie de la performance maximale de vos panneaux solaires passe inévitablement par leur propreté. 15% de production annuelle sont en moyenne perdus en raison de la saleté de l'installation.
                  </p>
                  <p style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 15, color: '#555', lineHeight: '23px', margin: '0 0 20px',
                  }}>
                    Notre service de nettoyage spécialisé utilise des techniques de pointe pour éliminer débris, mousses et saletés diverses et s'adapte à la surface et à la configuration de votre installation existante.
                  </p>
                </div>

                {/* PV Clean card — 2 columns */}
                <div className="ps-pv-clean-grid">
                  {/* Left: brand/promo */}
                  <div style={{
                    background: 'linear-gradient(135deg, #e8f7f5 0%, #d0eeea 100%)',
                    borderRadius: 16, padding: '32px 28px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  }}>
                    <div>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 17, fontWeight: 800, color: '#2a9b96', letterSpacing: 0.5,
                        textTransform: 'uppercase', marginBottom: 10,
                      }}>OFFRE PV CLEAN :</div>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 20, fontWeight: 700, color: '#1a3535', lineHeight: 1.25, marginBottom: 24,
                      }}>
                        L'EFFICACITÉ RETROUVÉE DE VOS PANNEAUX PHOTOVOLTAÏQUES !
                      </div>
                    </div>
                    {/* ZEN logo */}
                    <img
                      src="/zen-logo-vert-fonce.webp"
                      alt="Zen Énergie Services"
                      style={{ width: 100, height: 'auto', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Right: price + features */}
                  <div style={{
                    background: '#1a3535', borderRadius: 16, padding: '28px 24px',
                    display: 'flex', flexDirection: 'column',
                  }}>
                    {/* Price */}
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

                    {/* Included */}
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

              {/* Why maintain section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ background: '#f8f8f8', borderRadius: 20, padding: '32px 28px', marginBottom: 48 }}
              >
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 20, fontWeight: 700, color: '#000', marginBottom: 14, letterSpacing: -0.5, lineHeight: 1.3,
                }}>
                  Pourquoi dois-je entretenir régulièrement mes panneaux photovoltaïques ?
                </h3>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 15, color: '#444', lineHeight: '24px', marginBottom: 14,
                }}>
                  L'entretien régulier de vos panneaux photovoltaïques est essentiel pour garantir leur performance et leur durabilité. En Suisse, les conditions climatiques (neige, pollen, poussière) peuvent réduire l'efficacité des panneaux en formant des dépôts sur leur surface. Un entretien régulier permet :
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    "D'optimiser la production d'énergie en assurant que vos panneaux captent un maximum de lumière.",
                    "De prévenir les dommages, comme les microfissures ou la corrosion, qui pourraient réduire leur durée de vie.",
                    "De répondre aux exigences de garantie, car certains fabricants demandent un entretien périodique pour maintenir la couverture.",
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

        .ps-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .ps-pricing-grid { grid-template-columns: 1fr; }
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
          }
        }
        @media (max-width: 640px) {
          .ps-duo-grid { grid-template-columns: 1fr; }
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
  borderRadius: 100,
  border: '1px solid #e0e0e0',
  fontSize: 14,
  fontFamily: "var(--font-jost), 'Jost', sans-serif",
  outline: 'none',
  background: '#fff',
  color: '#000',
  transition: 'border-color 0.18s ease',
  boxSizing: 'border-box',
}
