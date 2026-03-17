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
  { label: 'Panneaux solaires', href: '/services/panneaux-solaires', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp', accent: '#2a9b96' },
  { label: 'Pompe à chaleur', href: '/services/pompe-a-chaleur', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp', accent: '#e8552c' },
  { label: 'Boiler thermodynamique', href: '/services/boiler-thermodynamique', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp', accent: '#0c2a54' },
  { label: 'PV Clean — Nettoyage', href: '/services/pv-clean', icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp', accent: '#2a9b96' },
]

const defaultFaqs = [
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

const defaultContractFeatures = [
  { label: 'Engagement', acces: '4 ans', equilibre: '4 ans', plus: '4 ans' },
  { label: 'Périodicité de la visite d\'entretien', acces: 'Tous les 2 ans', equilibre: 'Annuel', plus: 'Annuel' },
  { label: 'Attestation d\'entretien', acces: 'check', equilibre: 'check', plus: 'check' },
  { label: 'Compte client online', acces: 'check', equilibre: 'check', plus: 'check' },
  { label: 'Dépannage, main d\'œuvre et déplacement', acces: 'cross', equilibre: 'cross', plus: 'check' },
]

const defaultDiscountBoxes = [
  { pct: '10 %', desc: 'sur votre contrat pour 2 pompes à chaleur', iconCount: 2 },
  { pct: '15 %', desc: 'à partir de 3 pompes à chaleur', iconCount: 3 },
]

const defaultWhyBullets = [
  "De maintenir un coefficient de performance (COP) optimal et réduire votre consommation énergétique.",
  "De détecter et corriger les pertes de fluide frigorigène avant qu'elles n'endommagent le compresseur.",
  "De respecter les obligations légales suisses en matière d'entretien des équipements thermiques.",
]

interface PompeChaleurClientProps {
  heroTitle?: string
  heroBgImage?: string
  breadcrumbLabel?: string
  mainImage?: string
  overlayHeadline?: string
  contractFeatures?: { label: string; acces: string; equilibre: string; plus: string }[]
  discountBoxes?: { pct: string; desc: string; iconCount: number }[]
  disclaimer?: string
  whyTitle?: string
  whyIntro?: string
  whyBullets?: string[]
  detailImages?: string[]
  faqTitle?: string
  faqs?: { q: string; a: string }[]
}

export default function PompeChaleurClient({
  heroTitle = 'Pompe à Chaleur',
  heroBgImage = '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Pompes%20a%CC%80%20chaleur%20avantages%20et%20inconve%CC%81nients.webp',
  breadcrumbLabel = 'Pompe à chaleur',
  mainImage = '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/heat-pump-airwater-technology-home.webp',
  overlayHeadline = "Profitez d\u2019un confort thermique optimal gr\u00e2ce \u00e0 l\u2019entretien r\u00e9gulier de votre pompe \u00e0 chaleur",
  contractFeatures = defaultContractFeatures,
  discountBoxes = defaultDiscountBoxes,
  disclaimer = "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise.",
  whyTitle = 'Pourquoi dois-je entretenir régulièrement ma pompe à chaleur ?',
  whyIntro = "L'entretien régulier de votre pompe à chaleur est indispensable pour garantir son efficacité et prolonger sa durée de vie. Un entretien régulier permet :",
  whyBullets = defaultWhyBullets,
  detailImages = [
    '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/side-view-man-working-construction-site.webp',
    '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Heat%20pump%20AdobeStock.webp',
  ],
  faqTitle = "Questions sur l'entretien de votre pompe à chaleur",
  faqs = defaultFaqs,
}: PompeChaleurClientProps) {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  /* ── helpers for the comparison table ── */
  const renderCellValue = (val: string) => {
    if (val === 'check') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e8552c"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    }
    if (val === 'cross') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#d1d5db"/><path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
      )
    }
    return val
  }

  const rowIcons = [
    // Engagement
    <svg key="cal" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3" width="11" height="9.5" rx="1.5" stroke="#e8552c" strokeWidth="1.3"/><path d="M1.5 6h11" stroke="#e8552c" strokeWidth="1.3"/><path d="M4.5 1v3M9.5 1v3" stroke="#e8552c" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    // Periodicite
    <svg key="clk" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#e8552c" strokeWidth="1.3" fill="none"/><path d="M7 4v3.5l2.5 1.5" stroke="#e8552c" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
    // Attestation
    <svg key="doc" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="1" width="9" height="12" rx="1.5" stroke="#e8552c" strokeWidth="1.3" fill="none"/><path d="M5 5h4M5 7.5h4M5 10h2.5" stroke="#e8552c" strokeWidth="1.1" strokeLinecap="round"/></svg>,
    // Compte client
    <svg key="usr" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" stroke="#e8552c" strokeWidth="1.3" fill="none"/><path d="M2.5 13c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="#e8552c" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
    // Depannage
    <svg key="wrn" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8 3a3 3 0 00-4 4l-2 2 1.5 1.5 2-2a3 3 0 004-4L8 6 7 5z" stroke="#e8552c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
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
                  const isCurrent = s.href === '/services/pompe-a-chaleur'
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
                      }}>&rarr;</span>
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
                    borderRadius: 8, background: 'linear-gradient(135deg, #8B3A1A 0%, #C94010 100%)', border: 'none',
                    fontSize: 15, fontWeight: 700,
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    color: '#fff', cursor: 'pointer',
                    transition: 'background 0.18s ease, color 0.18s ease',
                    marginTop: 4,
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#50B5A2'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #8B3A1A 0%, #C94010 100%)'; e.currentTarget.style.color = '#fff' }}
                  >
                    Envoyer un message
                  </button>
                </form>
              </div>

              {/* CTA promo card */}
              <div style={{
                background: 'linear-gradient(135deg, #8B3A1A 0%, #C94010 100%)', borderRadius: 20, padding: '28px 24px',
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
                  Entretien professionnel &amp; certifié
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
                  Demander un Devis &rarr;
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
                  alt="Entretien pompe à chaleur"
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
                    <div style={{ width: 36, height: 36, flexShrink: 0, background: '#e8552c', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />
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
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: '#666' }}>Pompes à chaleur</div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#e8552c' }}>Zen Acc&egrave;s</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La tranquillit&eacute; essentielle</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0].map(i => <div key={i} style={{ width: 22, height: 22, background: '#e8552c', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#e8552c' }}>Zen &Eacute;quilibre</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La s&eacute;r&eacute;nit&eacute; assur&eacute;e</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1].map(i => <div key={i} style={{ width: 22, height: 22, background: '#e8552c', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#e8552c' }}>Zen Plus</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La couverture compl&egrave;te</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 22, background: '#e8552c', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>

                    {/* Data rows */}
                    {contractFeatures.map((row, ri) => {
                      const bg = ri % 2 === 0 ? '#fff' : '#f8f9fa'
                      return [
                        <div key={`l-${ri}`} className="ps-tbl-label" style={{ background: bg }}>
                          <div className="ps-tbl-icon" style={{ background: '#fdeee9' }}>
                            {rowIcons[ri] || rowIcons[0]}
                          </div>
                          <span>{row.label}</span>
                        </div>,
                        <div key={`a-${ri}`} className="ps-tbl-val" style={{ background: bg }}>{renderCellValue(row.acces)}</div>,
                        <div key={`e-${ri}`} className="ps-tbl-val" style={{ background: bg }}>{renderCellValue(row.equilibre)}</div>,
                        <div key={`p-${ri}`} className="ps-tbl-val" style={{ background: bg }}>{renderCellValue(row.plus)}</div>,
                      ]
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
                            background: 'linear-gradient(135deg, #c44420 0%, #e8552c 100%)', color: '#fff',
                            borderRadius: 14, padding: '10px 10px 10px 18px',
                            fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                            fontSize: 12, fontWeight: 700, textDecoration: 'none',
                            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                            boxShadow: '0 4px 12px rgba(232, 85, 44, 0.3)',
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLElement;
                            btn.style.background = 'linear-gradient(135deg, #e8552c 0%, #f07050 100%)';
                            const arr = btn.querySelector('.tbl-arr') as HTMLElement | null;
                            if (arr) {
                              arr.style.background = '#fff';
                              arr.style.transform = 'translateX(4px)';
                              arr.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.4)';
                              const svg = arr.querySelector('svg') as SVGElement | null;
                              if (svg) svg.style.stroke = '#c44420';
                            }
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLElement;
                            btn.style.background = 'linear-gradient(135deg, #c44420 0%, #e8552c 100%)';
                            const arr = btn.querySelector('.tbl-arr') as HTMLElement | null;
                            if (arr) {
                              arr.style.background = 'linear-gradient(135deg, #c44420 0%, #a03518 100%)';
                              arr.style.transform = 'translateX(0)';
                              arr.style.boxShadow = '0 4px 8px rgba(196, 68, 32, 0.3)';
                              const svg = arr.querySelector('svg') as SVGElement | null;
                              if (svg) svg.style.stroke = '#fff';
                            }
                          }}
                        >
                          Demander un Devis
                          <span className="tbl-arr" style={{
                            width: 28, height: 28, borderRadius: 10, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, #c44420 0%, #a03518 100%)',
                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            boxShadow: '0 4px 8px rgba(196, 68, 32, 0.3)',
                          }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        </a>
                        <a href="/legal/conditions-generales-vente" style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 11, color: '#999', textDecoration: 'underline' }}>Conditions des contrats</a>
                      </div>
                    ))}
                  </div>
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
                    {discountBoxes.map((box, bi) => (
                      <div key={bi} style={{
                        flex: 1, minWidth: 140,
                        border: '1.5px dashed rgba(255,255,255,0.35)',
                        borderRadius: 10, padding: '12px 14px',
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4,
                      }}>
                        <div style={{
                          fontFamily: "var(--font-jost), 'Jost', sans-serif",
                          fontSize: 10, fontWeight: 700, color: '#E8552C', letterSpacing: 1, textTransform: 'uppercase',
                        }}>PROFITEZ D&apos;UN RABAIS DE</div>
                        <div style={{
                          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                          fontSize: 30, fontWeight: 800, color: '#fff', lineHeight: 1,
                        }}>{box.pct}</div>
                        <div style={{
                          fontFamily: "var(--font-jost), 'Jost', sans-serif",
                          fontSize: 11, color: 'rgba(255,255,255,0.7)',
                        }}>{box.desc}</div>
                        <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                          {Array.from({ length: box.iconCount }).map((_, ii) => (
                            <div key={ii} style={{
                              width: 28, height: 28,
                              background: '#E8552C',
                              WebkitMask: `url("/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp") center/contain no-repeat`,
                              mask: `url("/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp") center/contain no-repeat`,
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
                {detailImages.map((src, di) => (
                  <motion.div
                    key={di}
                    variants={reveal} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: di * 0.1 }}
                    style={{ borderRadius: 16, overflow: 'hidden' }}
                  >
                    <img
                      src={src}
                      alt={di === 0 ? 'Technicien pompe à chaleur' : 'Pompe à chaleur installation maison'}
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
                          line.startsWith('\u2022') ? (
                            <div key={li} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                              <span style={{ color: '#E8552C', flexShrink: 0 }}>&bull;</span>
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
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#C94010' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input type="email" name="email" placeholder="Adresse e-mail *" value={formData.email} onChange={handleChange} required style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#C94010' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input type="tel" name="phone" placeholder="Numéro de téléphone *" value={formData.phone} onChange={handleChange} style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#C94010' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" placeholder="Écrivez votre message..." value={formData.message} onChange={handleChange} rows={4}
                    style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#C94010' }} onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '14px', borderRadius: 8, background: 'linear-gradient(135deg, #8B3A1A 0%, #C94010 100%)', border: 'none', fontSize: 15, fontWeight: 700, fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", color: '#fff', cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease', marginTop: 4 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#50B5A2'; e.currentTarget.style.color = '#000' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #8B3A1A 0%, #C94010 100%)'; e.currentTarget.style.color = '#fff' }}>
                  Envoyer un message
                </button>
              </form>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #8B3A1A 0%, #C94010 100%)', borderRadius: 20, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h4 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600, color: '#fff', lineHeight: '24px', marginBottom: 10 }}>
                Entretien professionnel &amp; certifié
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
