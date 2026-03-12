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
    q: 'À quelle fréquence dois-je faire entretenir mon boiler thermodynamique ?',
    a: 'En Suisse, il est recommandé de faire entretenir votre boiler thermodynamique tous les 12 à 24 mois, selon les conditions suivantes :\n\n• Régions avec eau dure : si vous habitez dans une zone où l\'eau est très calcaire, un entretien annuel est indispensable pour éviter les dépôts.\n• Utilisation intensive : si votre boiler chauffe l\'eau pour une grande famille ou une activité commerciale, un contrôle plus fréquent peut être nécessaire.\n• Conditions standard : un entretien tous les 18 à 24 mois suffit pour garantir des performances optimales.',
  },
  {
    q: 'Comment se déroule une intervention d\'entretien ?',
    a: 'L\'intervention comprend :\n\n1. Inspection générale :\n• Vérification de l\'état du ballon et des éléments chauffants\n• Analyse des éventuelles fuites ou trace de corrosion\n\n2. Nettoyage :\n• Nettoyage du boiler\n• Nettoyage des grilles de ventilation\n\n3. Contrôle du circuit frigorifique :\n• Inspection des pressions et températures de fonctionnement\n• Recherche de fuites éventuelles de fluide frigorigène\n• Contrôle d\'étanchéité gaz et eau\n\n4. Diagnostic technique :\n• Vérification du thermostat et des ondes de température\n• Tests de sécurité\n\n5. Maintenance :\n• Vérification des réglages pour optimiser la consommation énergétique\n\n6. Rapport d\'intervention',
  },
  {
    q: 'Quelle est la durée de vie de mon boiler thermodynamique régulièrement entretenu ?',
    a: 'Un boiler thermodynamique bien entretenu peut durer 15 à 20 ans, voire plus. Les avantages d\'un entretien régulier sont :\n\n• Une diminution des risques de panne majeure.\n• Une efficacité maintenue tout au long de sa durée de vie.\n• Une réduction des coûts énergétiques grâce à des performances optimales.\n\nSans entretien, la durée de vie peut être réduite de moitié en raison des problèmes liés au calcaire, aux fuites ou à l\'usure prématurée des composants.',
  },
  {
    q: 'Quels sont les signes indiquant que mon boiler nécessite un entretien ?',
    a: 'Plusieurs signes doivent vous alerter :\n\n• Eau chaude insuffisante ou température instable\n• Bruits inhabituels (claquements, sifflements)\n• Augmentation de la consommation électrique\n• Présence de calcaire ou de rouille dans l\'eau\n• Fuites au niveau des raccords',
  },
]

export default function BoilerThermodynamiquePage() {
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
          { label: 'Boiler thermodynamique' },
        ]}
        title="Boiler Thermodynamique"
        bgImage="/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Ajustement%20de%20re%CC%81troe%CC%81clairage.webp"
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
                  const isCurrent = s.href === '/services/boiler-thermodynamique'
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
                        background: isCurrent ? '#0a6363' : '#fff',
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
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0a6363' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email" name="email" placeholder="Adresse e-mail *"
                      value={formData.email} onChange={handleChange} required
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0a6363' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel" name="phone" placeholder="Numéro de téléphone *"
                      value={formData.phone} onChange={handleChange}
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0a6363' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" placeholder="Écrivez votre message..."
                      value={formData.message} onChange={handleChange} rows={4}
                      style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0a6363' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    borderRadius: 8, background: 'linear-gradient(135deg, #0a6363 0%, #0d8080 100%)', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease, color 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#0d8080'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #0a6363 0%, #0d8080 100%)'; e.currentTarget.style.color = '#fff' }}
                  >
                    Envoyer un message
                  </button>
                </form>
              </div>

              {/* CTA promo card */}
              <div style={{
                background: 'linear-gradient(135deg, #0a6363 0%, #0d8080 100%)', borderRadius: 20, padding: '28px 24px',
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
                  Entretien professionnel & certifié
                </h4>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: '22px', marginBottom: 20,
                }}>
                  Des techniciens qualifiés interviennent dans toute la Suisse romande pour l'entretien de vos installations.
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
                Optimisez votre production d'eau chaude grâce à l'entretien de votre boiler thermodynamique
              </motion.h2>

              {/* Main image */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 56 }}
              >
                <img
                  src="/Photos%20HD/Photos%20produits/Boiler/1.webp"
                  alt="Entretien boiler thermodynamique"
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
                    À partir de CHF 140.-/ an&nbsp;!
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
                      price: '140',
                      period: 'CHF / 2 ans',
                    },
                    {
                      num: '2',
                      title: 'ZEN ÉQUILIBRE',
                      subtitle: 'La couverture complète',
                      features: ['Compte client online', 'Entretien annuel'],
                      price: '190',
                      period: 'CHF / an',
                    },
                    {
                      num: '3',
                      title: 'ZEN PLUS',
                      subtitle: 'La sérénité assurée',
                      features: ['Compte client online', 'Entretien annuel', "Dépannage, main d'œuvre et déplacement"],
                      price: '250',
                      period: 'CHF / an',
                    },
                  ].map((plan, idx) => (
                    <motion.div
                      key={plan.num}
                      className="ps-contract-card"
                      style={{ cursor: 'pointer', height: '100%' }}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      onMouseEnter={(e) => {
                        const card = e.currentTarget as HTMLElement;
                        card.style.boxShadow = '0 20px 60px rgba(10, 99, 99, 0.35)';
                      }}
                      onMouseLeave={(e) => {
                        const card = e.currentTarget as HTMLElement;
                        card.style.boxShadow = '0 8px 24px rgba(10, 99, 99, 0.15)';
                      }}
                    >
                      {/* ── Card wrapper ── */}
                      <div style={{
                        display: 'flex', flexDirection: 'column', height: '100%',
                        borderRadius: 24, overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(10, 99, 99, 0.15)',
                        transition: 'box-shadow 0.3s ease',
                      }}>

                        {/* ── Top section with gradient ── */}
                        <div style={{
                          position: 'relative', padding: '32px 20px 28px', flex: 1,
                          background: `linear-gradient(135deg, #0a6363 0%, #0d8080 100%)`,
                        }}>
                          {/* Corner accent */}
                          <div style={{
                            position: 'absolute', top: 0, right: 0, width: 0, height: 0,
                            borderStyle: 'solid',
                            borderWidth: '0 120px 120px 0',
                            borderColor: `transparent rgba(255,255,255,0.08) transparent transparent`,
                            zIndex: 1,
                          }} />

                          {/* Number badge - larger and more prominent */}
                          <div style={{
                            position: 'absolute', top: 16, left: 20, zIndex: 2,
                            width: 44, height: 44, borderRadius: '50%',
                            background: `linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)`,
                            border: '2px solid rgba(255,255,255,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                            fontSize: 18, fontWeight: 800, color: '#fff',
                            backdropFilter: 'blur(10px)',
                            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)',
                          }}>{plan.num}</div>

                          {/* Icon bubble - more prominent */}
                          <div style={{ textAlign: 'center', marginTop: 14, marginBottom: 16, position: 'relative', zIndex: 2 }}>
                            <div style={{
                              width: 64, height: 64, borderRadius: '50%',
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                              border: '2px solid rgba(255,255,255,0.35)',
                              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                              backdropFilter: 'blur(10px)',
                            }}>
                              <svg width="54" height="54" viewBox="0 0 54 54" style={{ position: 'absolute' }} fill="none">
                                {[0,45,90,135,180,225,270,315].map((deg, i) => (
                                  <line key={i}
                                    x1={27 + Math.cos(deg * Math.PI / 180) * 21}
                                    y1={27 + Math.sin(deg * Math.PI / 180) * 21}
                                    x2={27 + Math.cos(deg * Math.PI / 180) * 26}
                                    y2={27 + Math.sin(deg * Math.PI / 180) * 26}
                                    stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"
                                  />
                                ))}
                              </svg>
                              <img
                                src="/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-15.webp"
                                alt=""
                                style={{ width: 32, height: 32, objectFit: 'contain', filter: 'brightness(0) invert(1)', position: 'relative', zIndex: 1 }}
                              />
                            </div>
                          </div>

                          {/* Title */}
                          <div style={{
                            position: 'relative', zIndex: 2, textAlign: 'center',
                            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                            fontSize: 16, fontWeight: 800, color: '#fff',
                            letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6,
                          }}>{plan.title}</div>

                          {/* Subtitle */}
                          <div style={{
                            position: 'relative', zIndex: 2, textAlign: 'center',
                            fontFamily: "var(--font-jost), 'Jost', sans-serif",
                            fontSize: 13, color: 'rgba(255,255,255,0.88)', marginBottom: 18,
                            fontWeight: 500,
                          }}>{plan.subtitle}</div>

                          {/* Divider */}
                          <div style={{ height: 1.5, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)', marginBottom: 16, position: 'relative', zIndex: 2 }} />

                          {/* Features */}
                          <ul style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative', zIndex: 2, gap: 8, display: 'flex', flexDirection: 'column' }}>
                            {plan.features.map((f, fi) => (
                              <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                <span style={{
                                  width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                                  background: 'rgba(255,255,255,0.28)',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                                  border: '1px solid rgba(255,255,255,0.15)',
                                }}>
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M1.5 5.5L3.5 7.5L8.5 2.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                                <span style={{
                                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                                  fontSize: 13, color: '#fff', lineHeight: '18px', fontWeight: 500,
                                }}>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Discount banner */}
                <div style={{
                  marginTop: 20, borderRadius: 16,
                  border: '2px dashed rgba(80,181,162,0.7)',
                  background: '#063d3d', padding: '20px 28px',
                  display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
                }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ width: 44, height: 44, background: '#4dd4c7', WebkitMask: 'url("/Icônes/CHARTEGRAPHIQUENAOSERVICE-15.webp") center/contain no-repeat', mask: 'url("/Icônes/CHARTEGRAPHIQUENAOSERVICE-15.webp") center/contain no-repeat' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: 2,
                    }}>
                      Vous possédez plusieurs équipements différents ?
                    </div>
                    <div style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 13, color: 'rgba(255,255,255,0.8)',
                    }}>
                      sur la 1ère année de contrat à partir de 2 contrats d'entretien souscrits !
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 12, color: 'rgba(255,255,255,0.85)', marginBottom: 2,
                    }}>Profitez d'un rabais de</div>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 38, fontWeight: 800, color: '#4dd4c7', lineHeight: 1, letterSpacing: -1,
                    }}>10 %</div>
                  </div>
                </div>
              </motion.div>

              {/* CTA button */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                <a
                  href="https://form.typeform.com/to/rRhOu7eb"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 14,
                    background: 'linear-gradient(135deg, #0a6363 0%, #0d8080 100%)', color: '#fff',
                    borderRadius: 14, padding: '12px 12px 12px 24px',
                    fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                    fontSize: 15, fontWeight: 700, textDecoration: 'none',
                    transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                    boxShadow: '0 4px 12px rgba(10, 99, 99, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLElement;
                    btn.style.background = 'linear-gradient(135deg, #0d8080 0%, #10a0a0 100%)';
                    const arr = btn.querySelector('.card-arr') as HTMLElement | null;
                    if (arr) {
                      arr.style.background = '#fff';
                      arr.style.transform = 'translateX(4px)';
                      arr.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.4)';
                      const svg = arr.querySelector('svg') as SVGElement | null;
                      if (svg) svg.style.stroke = '#0a6363';
                    }
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLElement;
                    btn.style.background = 'linear-gradient(135deg, #0a6363 0%, #0d8080 100%)';
                    const arr = btn.querySelector('.card-arr') as HTMLElement | null;
                    if (arr) {
                      arr.style.background = 'linear-gradient(135deg, #0a6363 0%, #075252 100%)';
                      arr.style.transform = 'translateX(0)';
                      arr.style.boxShadow = '0 4px 8px rgba(10, 99, 99, 0.3)';
                      const svg = arr.querySelector('svg') as SVGElement | null;
                      if (svg) svg.style.stroke = '#fff';
                    }
                  }}
                >
                  Demander cette offre
                  <span className="card-arr" style={{
                    width: 36, height: 36, borderRadius: 12, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, #0a6363 0%, #075252 100%)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 4px 8px rgba(44, 98, 98, 0.3)',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#fff' }}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
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
                  Pourquoi dois-je entretenir régulièrement mon boiler thermodynamique ?
                </h3>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 15, color: '#444', lineHeight: '24px', marginBottom: 14,
                }}>
                  L'entretien régulier de votre boiler thermodynamique est essentiel pour garantir une production d'eau chaude efficace et économique. Un entretien régulier permet :
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    "De maintenir le coefficient de performance (COP) optimal et réduire votre consommation électrique.",
                    "De prévenir l'entartrage et la corrosion qui dégradent les composants internes et réduisent la durée de vie de l'appareil.",
                    "D'assurer la sécurité de l'installation en vérifiant les organes de protection (soupape, thermostat de sécurité).",
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <span style={{
                        width: 10, height: 10, minWidth: 10, background: '#0a6363', borderRadius: 2,
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
                    src="/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Boiler%20AdobeStock.webp"
                    alt="Boiler thermodynamique entretien"
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
                    src="/Photos%20HD/Photos%20produits/Boiler/4.webp"
                    alt="Boiler thermodynamique"
                    loading="lazy"
                    style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
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
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 28, fontWeight: 600, letterSpacing: -1,
                  color: '#000', marginBottom: 32, lineHeight: '36px',
                }}
              >
                Questions sur l'entretien de votre boiler thermodynamique
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
                        border: isActive ? '1px solid #0a6363' : '1px solid #e8e8e8',
                        background: isActive ? '#0a6363' : 'transparent',
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
                              <span style={{ color: '#0a6363', flexShrink: 0 }}>•</span>
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
