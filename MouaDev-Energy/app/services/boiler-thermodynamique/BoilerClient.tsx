'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

const sidebarServices = [
  { label: 'Panneaux solaires', href: '/services/panneaux-solaires', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp', accent: '#2a9b96' },
  { label: 'Pompe à chaleur', href: '/services/pompe-a-chaleur', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp', accent: '#e8552c' },
  { label: 'Boiler thermodynamique', href: '/services/boiler-thermodynamique', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp', accent: '#0c2a54' },
  { label: 'PV Clean — Nettoyage', href: '/services/pv-clean', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp', accent: '#2a9b96' },
]

const defaultFaqs = [
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

const defaultContractFeatures = [
  { label: 'Engagement', acces: '4 ans', equilibre: '4 ans', plus: '4 ans' },
  { label: 'Périodicité de la visite d\'entretien', acces: 'Tous les 2 ans', equilibre: 'Annuel', plus: 'Annuel' },
  { label: 'Attestation d\'entretien', acces: 'check', equilibre: 'check', plus: 'check' },
  { label: 'Compte client online', acces: 'check', equilibre: 'check', plus: 'check' },
  { label: 'Dépannage, main d\'œuvre et déplacement', acces: 'cross', equilibre: 'cross', plus: 'check' },
]

const defaultWhyBullets = [
  "De maintenir le coefficient de performance (COP) optimal et réduire votre consommation électrique.",
  "De prévenir l'entartrage et la corrosion qui dégradent les composants internes et réduisent la durée de vie de l'appareil.",
  "D'assurer la sécurité de l'installation en vérifiant les organes de protection (soupape, thermostat de sécurité).",
]

interface BoilerClientProps {
  heroTitle?: string
  heroBgImage?: string
  breadcrumbLabel?: string
  mainImage?: string
  overlayHeadline?: string
  contractFeatures?: { label: string; acces: string; equilibre: string; plus: string }[]
  discountHeadline?: string
  discountText?: string
  discountBadge?: string
  disclaimer?: string
  whyTitle?: string
  whyIntro?: string
  whyBullets?: string[]
  detailImages?: string[]
  faqTitle?: string
  faqs?: { q: string; a: string }[]
}

export default function BoilerClient({
  heroTitle = 'Boiler Thermodynamique',
  heroBgImage = '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Ajustement%20de%20re%CC%81troe%CC%81clairage.webp',
  breadcrumbLabel = 'Boiler thermodynamique',
  mainImage = '/Photos%20HD/Photos%20produits/Boiler/1.webp',
  overlayHeadline = "Optimisez votre production d\u2019eau chaude gr\u00e2ce \u00e0 l\u2019entretien de votre boiler thermodynamique",
  contractFeatures = defaultContractFeatures,
  discountHeadline = 'Vous possédez plusieurs équipements différents ?',
  discountText = "sur la 1ère année de contrat à partir de 2 contrats d'entretien souscrits !",
  discountBadge = '10 %',
  disclaimer = "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise.",
  whyTitle = 'Pourquoi dois-je entretenir régulièrement mon boiler thermodynamique ?',
  whyIntro = "L'entretien régulier de votre boiler thermodynamique est essentiel pour garantir une production d'eau chaude efficace et économique. Un entretien régulier permet :",
  whyBullets = defaultWhyBullets,
  detailImages = [
    '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Boiler%20AdobeStock.webp',
    '/Photos%20HD/Photos%20produits/Boiler/4.webp',
  ],
  faqTitle = "Questions sur l'entretien de votre boiler thermodynamique",
  faqs = defaultFaqs,
}: BoilerClientProps) {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const renderCheck = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#0c2a54"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )
  const renderCross = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#d1d5db"/><path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
  )

  const rowIcons = [
    // Engagement
    <svg key="eng" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3" width="11" height="9.5" rx="1.5" stroke="#0c2a54" strokeWidth="1.3"/><path d="M1.5 6h11" stroke="#0c2a54" strokeWidth="1.3"/><path d="M4.5 1v3M9.5 1v3" stroke="#0c2a54" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    // Periodicite
    <svg key="per" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#0c2a54" strokeWidth="1.3" fill="none"/><path d="M7 4v3.5l2.5 1.5" stroke="#0c2a54" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
    // Attestation
    <svg key="att" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="1" width="9" height="12" rx="1.5" stroke="#0c2a54" strokeWidth="1.3" fill="none"/><path d="M5 5h4M5 7.5h4M5 10h2.5" stroke="#0c2a54" strokeWidth="1.1" strokeLinecap="round"/></svg>,
    // Compte client
    <svg key="cli" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" stroke="#0c2a54" strokeWidth="1.3" fill="none"/><path d="M2.5 13c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="#0c2a54" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
    // Depannage
    <svg key="dep" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8 3a3 3 0 00-4 4l-2 2 1.5 1.5 2-2a3 3 0 004-4L8 6 7 5z" stroke="#0c2a54" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
  ]

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
      <section className="ps-section" style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }} className="ps-outer">
          <div className="ps-layout">

            {/* ── LEFT SIDEBAR (sticky) ── */}
            <aside className="ps-sidebar">

              {/* Service nav */}
              <div className="ps-service-nav" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {sidebarServices.map((s) => {
                  const isCurrent = s.href === '/services/boiler-thermodynamique'
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
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email" name="email" placeholder="Adresse e-mail *"
                      value={formData.email} onChange={handleChange} required
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel" name="phone" placeholder="Numéro de téléphone *"
                      value={formData.phone} onChange={handleChange}
                      style={formInputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message" placeholder="Écrivez votre message..."
                      value={formData.message} onChange={handleChange} rows={4}
                      style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: '14px',
                    borderRadius: 8, background: 'linear-gradient(135deg, #0c2a54 0%, #1a4a8a 100%)', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease, color 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#1a4a8a'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #0c2a54 0%, #1a4a8a 100%)'; e.currentTarget.style.color = '#fff' }}
                  >
                    Envoyer un message
                  </button>
                </form>
              </div>

              {/* CTA promo card */}
              <div style={{
                background: 'linear-gradient(135deg, #0c2a54 0%, #1a4a8a 100%)', borderRadius: 20, padding: '28px 24px',
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
                  Des techniciens qualifiés interviennent dans toute la Suisse romande pour l&apos;entretien de vos installations.
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
                style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 56, position: 'relative' }}
              >
                <img
                  src={mainImage}
                  alt="Entretien boiler thermodynamique"
                  style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
                />

                {/* Overlay Text Card — top right */}
                <div style={{
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
                    <div style={{ width: 36, height: 36, flexShrink: 0, background: '#0c2a54', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />
                    <h2
                      style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 'clamp(16px, 2vw, 22px)',
                        fontWeight: 700,
                        letterSpacing: -0.5,
                        color: '#000',
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {overlayHeadline}
                    </h2>
                  </div>
                </div>
              </motion.div>

              {/* Pricing section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                {/* Comparison table */}
                <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <div className="ps-comparison-table">
                    {/* Header row */}
                    <div style={{ padding: '28px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: '#000', marginBottom: 4 }}>Nos contrats</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: '#666' }}>Boiler thermodynamique</div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#0c2a54' }}>Zen Acc&egrave;s</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La tranquillit&eacute; essentielle</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0].map(i => <div key={i} style={{ width: 22, height: 22, background: '#0c2a54', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#0c2a54' }}>Zen &Eacute;quilibre</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La s&eacute;r&eacute;nit&eacute; assur&eacute;e</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1].map(i => <div key={i} style={{ width: 22, height: 22, background: '#0c2a54', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#0c2a54' }}>Zen Plus</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La couverture compl&egrave;te</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 22, background: '#0c2a54', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>

                    {/* Dynamic feature rows */}
                    {contractFeatures.map((row, ri) => {
                      const bg = ri % 2 === 0 ? '#fff' : '#f8f9fa'
                      const renderVal = (val: string) => {
                        if (val === 'check') return renderCheck()
                        if (val === 'cross') return renderCross()
                        return val
                      }
                      return (
                        <React.Fragment key={ri}>
                          <div className="ps-tbl-label" style={{ background: bg }}>
                            <div className="ps-tbl-icon" style={{ background: '#e8edf4' }}>
                              {rowIcons[ri] || null}
                            </div>
                            <span>{row.label}</span>
                          </div>
                          <div className="ps-tbl-val" style={{ background: bg }}>{renderVal(row.acces)}</div>
                          <div className="ps-tbl-val" style={{ background: bg }}>{renderVal(row.equilibre)}</div>
                          <div className="ps-tbl-val" style={{ background: bg }}>{renderVal(row.plus)}</div>
                        </React.Fragment>
                      )
                    })}

                    {/* CTA row */}
                    <div style={{ padding: '24px 20px', background: '#fff', borderTop: '2px solid #eee' }} />
                    {[0,1,2].map(i => (
                      <div key={i} style={{ padding: '20px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: '#fff', borderTop: '2px solid #eee' }}>
                        <a
                          href="https://form.typeform.com/to/rRhOu7eb" target="_blank" rel="noopener noreferrer"
                          className="ps-tbl-cta-btn"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            background: 'linear-gradient(135deg, #081d3d 0%, #0c2a54 100%)', color: '#fff',
                            borderRadius: 14, padding: '10px 10px 10px 18px',
                            fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                            fontSize: 12, fontWeight: 700, textDecoration: 'none',
                            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                            boxShadow: '0 4px 12px rgba(12, 42, 84, 0.3)',
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLElement;
                            btn.style.background = 'linear-gradient(135deg, #0c2a54 0%, #1a4070 100%)';
                            const arr = btn.querySelector('.tbl-arr') as HTMLElement | null;
                            if (arr) {
                              arr.style.background = '#fff';
                              arr.style.transform = 'translateX(4px)';
                              arr.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.4)';
                              const svg = arr.querySelector('svg') as SVGElement | null;
                              if (svg) svg.style.stroke = '#081d3d';
                            }
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLElement;
                            btn.style.background = 'linear-gradient(135deg, #081d3d 0%, #0c2a54 100%)';
                            const arr = btn.querySelector('.tbl-arr') as HTMLElement | null;
                            if (arr) {
                              arr.style.background = 'linear-gradient(135deg, #081d3d 0%, #061428 100%)';
                              arr.style.transform = 'translateX(0)';
                              arr.style.boxShadow = '0 4px 8px rgba(8, 29, 61, 0.3)';
                              const svg = arr.querySelector('svg') as SVGElement | null;
                              if (svg) svg.style.stroke = '#fff';
                            }
                          }}
                        >
                          Demander un Devis
                          <span className="tbl-arr" style={{
                            width: 28, height: 28, borderRadius: 10, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, #081d3d 0%, #061428 100%)',
                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            boxShadow: '0 4px 8px rgba(8, 29, 61, 0.3)',
                          }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        </a>
                        <a href="/legal/conditions-generales-vente" style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 11, color: '#999', textDecoration: 'underline' }}>Conditions des contrats</a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discount banner */}
                <div style={{
                  marginTop: 20, borderRadius: 16,
                  border: '2px dashed rgba(26,74,138,0.7)',
                  background: '#0c2a54', padding: '20px 28px',
                  display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
                }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ width: 44, height: 44, background: '#5b9bd5', WebkitMask: 'url("/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp") center/contain no-repeat', mask: 'url("/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp") center/contain no-repeat' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.92)', marginBottom: 2,
                    }}>
                      {discountHeadline}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 13, color: 'rgba(255,255,255,0.8)',
                    }}>
                      {discountText}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center', flexShrink: 0 }}>
                    <div style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 12, color: 'rgba(255,255,255,0.85)', marginBottom: 2,
                    }}>Profitez d&apos;un rabais de</div>
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 38, fontWeight: 800, color: '#5b9bd5', lineHeight: 1, letterSpacing: -1,
                    }}>{discountBadge.replace(/profitez d'un rabais de\s*/i, '')}</div>
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
                  <strong style={{ color: '#555' }}>*</strong> {disclaimer}
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
                        width: 10, height: 10, minWidth: 10, background: '#0c2a54', borderRadius: 2,
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
                {detailImages.map((src, i) => (
                  <motion.div
                    key={i}
                    variants={reveal} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
                    style={{ borderRadius: 16, overflow: 'hidden' }}
                  >
                    <img
                      src={src}
                      alt={`Boiler thermodynamique ${i + 1}`}
                      loading="lazy"
                      style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                ))}
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
                      <span>{faq.q}</span>
                      <span style={{
                        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                        border: isActive ? '1px solid #0c2a54' : '1px solid #e8e8e8',
                        background: isActive ? '#0c2a54' : 'transparent',
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
                              <span style={{ color: '#0c2a54', flexShrink: 0 }}>•</span>
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
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input type="email" name="email" placeholder="Adresse e-mail *" value={formData.email} onChange={handleChange} required style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input type="tel" name="phone" placeholder="Numéro de téléphone *" value={formData.phone} onChange={handleChange} style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" placeholder="Écrivez votre message..." value={formData.message} onChange={handleChange} rows={4}
                    style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#0c2a54' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: 8, background: 'linear-gradient(135deg, #0c2a54 0%, #1a4a8a 100%)', border: 'none', fontSize: 15, fontWeight: 700, fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: '#fff', cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease', marginTop: 4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1a4a8a'; e.currentTarget.style.color = '#000' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #0c2a54 0%, #1a4a8a 100%)'; e.currentTarget.style.color = '#fff' }}>
                  Envoyer un message
                </button>
              </form>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #0c2a54 0%, #1a4a8a 100%)', borderRadius: 20, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600, color: '#fff', lineHeight: '24px', marginBottom: 10 }}>
                Entretien professionnel & certifié
              </h4>
              <p style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: '22px', marginBottom: 20 }}>
                Des techniciens qualifiés interviennent dans toute la Suisse romande pour l&apos;entretien de vos installations.
              </p>
              <Link href="https://form.typeform.com/to/rRhOu7eb" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#000', borderRadius: 8, padding: '10px 20px', fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.18s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e0f5f3' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff' }}>
                Demander un Devis →
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

                .ps-comparison-table {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          min-width: 680px;
          border-radius: 20px;
          overflow: hidden;
          background: #f8f9fa;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .ps-tbl-label {
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #eee;
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #333;
        }
        .ps-tbl-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ps-tbl-val {
          padding: 14px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
        .ps-tbl-cta-btn:hover { opacity: 0.85; }
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
          .ps-service-nav {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            margin-bottom: 0 !important;
          }
          .ps-service-nav .ps-nav-link {
            padding: 10px 14px !important;
            font-size: 13px !important;
            border-radius: 12px !important;
          }
          .ps-nav-arrow { display: none !important; }
          .ps-sidebar-extra { display: none !important; }
          .ps-mobile-cards { display: block !important; }
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
