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
    q: 'À quelle fréquence dois-je faire entretenir ma pompe à chaleur ?',
    a: 'En Suisse, il est recommandé de faire vérifier et entretenir votre pompe à chaleur une fois par an par un technicien certifié. Voici quelques cas particuliers :\n\n• Usage intensif ou zones froides : si votre pompe fonctionne toute l\'année, un contrôle annuel est indispensable.\n• Circuits avec fluide frigorigène : selon la loi, un contrôle peut être obligatoire tous les 1 à 2 ans pour garantir l\'étanchéité du circuit.\n• Entretiens saisonniers : avant l\'hiver, pour assurer une performance optimale, et au printemps, pour un nettoyage post-saison froide.',
  },
  {
    q: 'Est-ce que l\'entretien de ma pompe à chaleur est obligatoire ?',
    a: 'En Suisse, l\'entretien des pompes à chaleur n\'est pas strictement obligatoire pour les particuliers. Toutefois, des obligations peuvent s\'appliquer dans certains cas :\n\n• Si votre pompe utilise un fluide frigorigène, un contrôle régulier de l\'étanchéité est exigé par la législation suisse.\n• Certains contrats de garantie ou d\'assurance exigent un entretien annuel pour rester valides.\n• Dans le cadre d\'une copropriété ou d\'un bâtiment collectif, un entretien périodique peut être imposé par le règlement.\n\nMême en l\'absence d\'obligation légale, un entretien annuel est fortement recommandé pour assurer la sécurité, l\'efficacité et la longévité de votre installation.',
  },
  {
    q: 'Comment se déroule une intervention d\'entretien ?',
    a: 'L\'intervention comprend :\n\n• Nettoyage des filtres\n• Nettoyage de l\'unité extérieure et des unités intérieures (si présentes)\n• Nettoyage des bacs de réception des condensats et vérification de l\'écoulement (si présent)\n• Nettoyage des filtres à tamis et du pot à boue (si présents)\n• Nettoyage des échangeurs hydrauliques (si présents)\n• Contrôle visuel et auditif de l\'ensemble des unités intérieures et extérieures\n• Contrôle d\'étanchéité des installations de fluide frigorigène\n• Vérification et resserrage des connexions électriques\n• Vérification des circuits électroniques et des organes de sécurité\n• Vérification du bon fonctionnement de la pompe à chaleur et de l\'appoint électrique éventuel\n• Vérification du fonctionnement de la régulation et des réglages\n• Vérification électrique concernant la mise à terre\n• Contrôle des performances (températures entrées et sortie d\'air ou d\'eau)\n• Contrôle des paramètres de fonctionnement\n• Relevé des températures, des pressions et de la tension\n• Vérification du niveau d\'eau\n• Vérification des vis et écrous\n• Vérification de l\'état de l\'isolation\n• Contrôle du fluide caloporteur (si présent)\n• Contrôle du pot à boues et contrôle d\'absence de gaz en points hauts\n• Contrôle du désembouage\n• Rapport d\'intervention complet',
  },
  {
    q: 'Quelle est la durée de vie de ma pompe à chaleur régulièrement entretenue ?',
    a: 'Une pompe à chaleur bien entretenue peut durer 15 à 20 ans en moyenne, et parfois plus, selon les conditions d\'utilisation et la qualité initiale de l\'installation. Avec un entretien annuel, vous maximisez la durée de vie des composants essentiels, comme le compresseur, tout en réduisant les risques de pannes coûteuses. Sans entretien, les performances de la pompe déclinent rapidement, et les réparations imprévues augmentent, réduisant sa durée de vie à 10–12 ans dans certains cas.',
  },
]

export default function PompeAChaleurPage() {
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
          { label: 'Pompe à chaleur' },
        ]}
        title="Pompe à Chaleur"
        bgImage="/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Pompes%20a%CC%80%20chaleur%20avantages%20et%20inconve%CC%81nients.webp"
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
                  const isCurrent = s.href === '/services/pompe-a-chaleur'
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
                        background: isCurrent ? '#E8552C' : '#fff',
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
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#E8552C' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email" name="email" placeholder="Adresse e-mail *"
                      value={formData.email} onChange={handleChange} required
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#E8552C' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel" name="phone" placeholder="Numéro de téléphone *"
                      value={formData.phone} onChange={handleChange}
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#E8552C' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" placeholder="Écrivez votre message..."
                      value={formData.message} onChange={handleChange} rows={4}
                      style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#E8552C' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    borderRadius: 8, background: 'linear-gradient(135deg, #0a1e1a 0%, #0d2e28 60%, #0f3a30 100%)', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease, color 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#50B5A2'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #0a1e1a 0%, #0d2e28 60%, #0f3a30 100%)'; e.currentTarget.style.color = '#fff' }}
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
                  width: 40, height: 40, borderRadius: 10, background: '#E8552C',
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
                  background: '#E8552C', color: '#000',
                  borderRadius: 8, padding: '10px 20px',
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  transition: 'background 0.18s ease',
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#c94010' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#E8552C' }}
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
                Profitez d'un confort thermique optimal grâce à l'entretien régulier de votre pompe à chaleur
              </motion.h2>

              {/* Main image */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 56 }}
              >
                <img
                  src="/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/heat-pump-airwater-technology-home.webp"
                  alt="Entretien pompe à chaleur"
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
                    À partir de CHF 450.-/ an&nbsp;!
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
                      price: '450 CHF / 2 ans',
                    },
                    {
                      num: '2',
                      title: 'ZEN ÉQUILIBRE',
                      subtitle: 'La couverture complète',
                      features: ['Compte client online', 'Entretien annuel'],
                      price: '510 CHF / an',
                    },
                    {
                      num: '3',
                      title: 'ZEN PLUS',
                      subtitle: 'La sérénité assurée',
                      features: ['Compte client online', 'Entretien annuel', "Dépannage, main d'œuvre et déplacement"],
                      price: '600 CHF / an',
                    },
                  ].map((plan) => (
                    <div key={plan.num} className="ps-contract-card">

                      {/* ── Orange top ── */}
                      <div style={{ position: 'relative', padding: '16px 18px 14px', flex: 1,
                        background: 'linear-gradient(160deg, #c94010 0%, #e8552c 55%, #f07040 100%)',
                      }}>
                        {/* Radial glow */}
                        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
                          background: 'radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.18) 0%, transparent 65%)',
                        }} />

                        {/* Number badge */}
                        <div style={{
                          position: 'absolute', top: 10, left: 10, zIndex: 1,
                          width: 22, height: 22, borderRadius: '50%',
                          background: '#1a2744',
                          border: '1.5px solid rgba(255,255,255,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 10, fontWeight: 800, color: '#fff',
                        }}>{plan.num}</div>

                        {/* Icon bubble */}
                        <div style={{ textAlign: 'center', marginTop: 6, marginBottom: 10, position: 'relative', zIndex: 1 }}>
                          <div style={{
                            width: 54, height: 54, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)',
                            border: '1.5px solid rgba(255,255,255,0.3)',
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 6px 20px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.22)',
                          }}>
                            <img
                              src="/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-20.webp"
                              alt=""
                              style={{ width: 26, height: 26, objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <div style={{
                          position: 'relative', zIndex: 1, textAlign: 'center',
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 14, fontWeight: 800, color: '#fff',
                          letterSpacing: 1, textTransform: 'uppercase', marginBottom: 3,
                        }}>{plan.title}</div>

                        {/* Subtitle */}
                        <div style={{
                          position: 'relative', zIndex: 1, textAlign: 'center',
                          fontFamily: "var(--font-jost), 'Jost', sans-serif",
                          fontSize: 12, color: 'rgba(255,255,255,0.82)', marginBottom: 12,
                        }}>{plan.subtitle}</div>

                        {/* Divider */}
                        <div style={{ height: 1, background: 'rgba(255,255,255,0.18)', marginBottom: 10, position: 'relative', zIndex: 1 }} />

                        {/* Features */}
                        <ul style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative', zIndex: 1 }}>
                          {plan.features.map((f, fi) => (
                            <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, marginBottom: 5 }}>
                              <span style={{
                                width: 15, height: 15, borderRadius: '50%', flexShrink: 0,
                                background: 'rgba(255,255,255,0.22)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                              }}>
                                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                                  <path d="M1.5 5.5L3.5 7.5L8.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                              <span style={{
                                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                                fontSize: 12, color: '#fff', lineHeight: '17px',
                              }}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* ── Dark pricing bottom ── */}
                      <div style={{ background: '#1a2744', padding: '14px 18px 16px' }}>
                        <div style={{
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: -0.5,
                        }}>{plan.price}</div>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Discount banner — 2 dashed boxes */}
                <div style={{
                  marginTop: 20, borderRadius: 16, overflow: 'hidden',
                  background: '#1a2744', padding: '20px 24px',
                  display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
                }}>
                  {/* Left: icon + text */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: '0 0 auto' }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      border: '2px solid #E8552C',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <circle cx="8" cy="8" r="2.5" stroke="#E8552C" strokeWidth="1.8"/>
                        <circle cx="16" cy="16" r="2.5" stroke="#E8552C" strokeWidth="1.8"/>
                        <line x1="5" y1="19" x2="19" y2="5" stroke="#E8552C" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 13, fontWeight: 600, color: '#fff', maxWidth: 160,
                    }}>
                      Vous possédez plusieurs équipements différents ?
                    </div>
                  </div>

                  {/* Two dashed boxes */}
                  <div style={{ display: 'flex', gap: 12, flex: 1, flexWrap: 'wrap' }}>
                    {[
                      { pct: '10 %', desc: 'sur votre contrat pour', highlight: '2 pompes à chaleur', icons: 2 },
                      { pct: '15 %', desc: 'à partir de', highlight: '3 pompes à chaleur', icons: 3 },
                    ].map((box, bi) => (
                      <div key={bi} style={{
                        flex: 1, minWidth: 140,
                        border: '1.5px dashed rgba(255,255,255,0.35)',
                        borderRadius: 10, padding: '12px 14px',
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4,
                      }}>
                        <div style={{
                          fontFamily: "var(--font-jost), 'Jost', sans-serif",
                          fontSize: 10, fontWeight: 700, color: '#E8552C', letterSpacing: 1, textTransform: 'uppercase',
                        }}>PROFITEZ D'UN RABAIS DE</div>
                        <div style={{
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 30, fontWeight: 800, color: '#fff', lineHeight: 1,
                        }}>{box.pct}</div>
                        <div style={{
                          fontFamily: "var(--font-jost), 'Jost', sans-serif",
                          fontSize: 11, color: 'rgba(255,255,255,0.7)',
                        }}>{box.desc}<br/><span style={{ color: '#fff', fontWeight: 600 }}>{box.highlight}</span></div>
                        <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                          {Array.from({ length: box.icons }).map((_, ii) => (
                            <div key={ii} style={{
                              width: 28, height: 28,
                              background: '#E8552C',
                              WebkitMask: `url("/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-20.webp") center/contain no-repeat`,
                              mask: `url("/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-20.webp") center/contain no-repeat`,
                            }} />
                          ))}
                        </div>
                      </div>
                    ))}
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
                  <strong style={{ color: '#555' }}>*</strong> Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise.
                </p>
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
                  Pourquoi dois-je entretenir régulièrement ma pompe à chaleur ?
                </h3>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 15, color: '#444', lineHeight: '24px', marginBottom: 14,
                }}>
                  L'entretien régulier de votre pompe à chaleur est indispensable pour garantir son efficacité et prolonger sa durée de vie. Un entretien régulier permet :
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    "De maintenir un coefficient de performance (COP) optimal et réduire votre consommation énergétique.",
                    "De détecter et corriger les pertes de fluide frigorigène avant qu'elles n'endommagent le compresseur.",
                    "De respecter les obligations légales suisses en matière d'entretien des équipements thermiques.",
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{
                        width: 10, height: 10, minWidth: 10, background: '#E8552C', borderRadius: 2,
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
                    src="/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/side-view-man-working-construction-site.webp"
                    alt="Technicien pompe à chaleur"
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
                    src="/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Heat%20pump%20AdobeStock.webp"
                    alt="Pompe à chaleur installation maison"
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
                    background: '#E8552C', color: '#000',
                    borderRadius: 14, padding: '14px 14px 14px 28px',
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 16, fontWeight: 600, textDecoration: 'none',
                    transition: 'background 0.18s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#c94010' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#E8552C' }}
                >
                  Souscrire un contrat d'entretien
                  <span style={{
                    width: 40, height: 36, borderRadius: 10, background: '#0a1f1e',
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
                Questions sur l'entretien de votre pompe à chaleur
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
                        border: isActive ? '1px solid #E8552C' : '1px solid #e8e8e8',
                        background: isActive ? '#E8552C' : 'transparent',
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
                              <span style={{ color: '#E8552C', flexShrink: 0 }}>•</span>
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
          gap: 20px;
          align-items: stretch;
        }
        .ps-contract-card {
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .ps-contract-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.28), 0 8px 24px rgba(0,0,0,0.15);
        }
        @media (max-width: 900px) {
          .ps-pricing-grid { grid-template-columns: 1fr; }
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
