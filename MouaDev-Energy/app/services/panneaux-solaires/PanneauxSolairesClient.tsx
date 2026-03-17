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

const defaultContractFeatures = [
  { label: 'Engagement', acces: '4 ans', equilibre: '4 ans', plus: '4 ans' },
  { label: "Périodicité de la visite d'entretien", acces: 'Tous les 2 ans', equilibre: 'Annuel', plus: 'Annuel' },
  { label: "Attestation d'entretien", acces: 'check', equilibre: 'check', plus: 'check' },
  { label: 'Compte client online', acces: 'check', equilibre: 'check', plus: 'check' },
  { label: "Dépannage, main d'œuvre et déplacement", acces: 'cross', equilibre: 'cross', plus: 'check' },
]

const defaultPvCleanFeatures = [
  'Nettoyage simple : dépoussiérage',
  'Nettoyage mécanique : utilisation de perches télescopiques ou brosses rotatives et d\'eau déminéralisée.',
  'Pose d\'une couche protectrice',
  'Rapport de nettoyage complet',
]

const defaultWhyBullets = [
  "D'optimiser la production d'énergie en assurant que vos panneaux captent un maximum de lumière.",
  "De prévenir les dommages, comme les microfissures ou la corrosion, qui pourraient réduire leur durée de vie.",
  "De répondre aux exigences de garantie, car certains fabricants demandent un entretien périodique pour maintenir la couverture.",
]

interface PanneauxSolairesClientProps {
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
  pvCleanTitle?: string
  pvCleanIntro?: string[]
  pvCleanImage?: string
  pvCleanFeatures?: string[]
  pvCleanDisclaimer?: string
  whyTitle?: string
  whyIntro?: string
  whyBullets?: string[]
  detailImages?: string[]
  faqTitle?: string
  faqs?: { q: string; a: string }[]
}

export default function PanneauxSolairesClient({
  heroTitle = 'Panneaux Photovoltaïques',
  heroBgImage = '/Photos HD/Photos produits/Panneaux solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp',
  breadcrumbLabel = 'Panneaux solaires',
  mainImage = '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-worker-firld-by-solar-panels.webp',
  overlayHeadline = 'Maximisez votre production solaire grâce à un entretien régulier de vos panneaux photovoltaïques',
  contractFeatures = defaultContractFeatures,
  discountHeadline = 'Vous possédez plusieurs équipements différents ?',
  discountText = "sur la 1ère année de contrat à partir de 2 contrats d'entretien souscrits !",
  discountBadge = '10 %',
  disclaimer = "Contrats d'une durée d'engagement de 4 ans. Les pièces de rechange sont à la totale charge du client. Les contrats d'entretien sont résiliables sous conditions en période de contrat selon les conditions générales de vente applicables ; et avec un préavis écrit de trois mois avant le prochain renouvellement de contrat de 4 ans. Sans cette résiliation, le contrat est automatiquement prolongé pour une période 4 années supplémentaires. Tous les prix s'entendent TVA comprise. Le nettoyage des panneaux n'est pas inclus.",
  pvCleanTitle = 'Pensez à faire nettoyer vos panneaux solaires par un professionnel',
  pvCleanIntro = [
    "La garantie de la performance maximale de vos panneaux solaires passe inévitablement par leur propreté. 15% de production annuelle sont en moyenne perdus en raison de la saleté de l'installation.",
    "Notre service de nettoyage spécialisé utilise des techniques de pointe pour éliminer débris, mousses et saletés diverses et s'adapte à la surface et à la configuration de votre installation existante.",
  ],
  pvCleanImage = '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-solar-technician-installing-solar-panel-outdoors.webp',
  pvCleanFeatures = defaultPvCleanFeatures,
  pvCleanDisclaimer = '* Offre tarifaire valable pour une intervention à partir de 8 panneaux.',
  whyTitle = 'Pourquoi dois-je entretenir régulièrement mes panneaux photovoltaïques ?',
  whyIntro = "L'entretien régulier de vos panneaux photovoltaïques est essentiel pour garantir leur performance et leur durabilité. En Suisse, les conditions climatiques (neige, pollen, poussière) peuvent réduire l'efficacité des panneaux en formant des dépôts sur leur surface. Un entretien régulier permet :",
  whyBullets = defaultWhyBullets,
  detailImages = [
    '/Photos%20HD/Visuels%20Technique/Technique%20-%20PV/Ouvrier%20et%20panneaux%20solaires.webp',
    '/Photos%20HD/Visuels%20Technique/Technique%20-%20PV/Re%CC%81paration%20de%20panneaux%20solaires.webp',
  ],
  faqTitle = "Questions sur l'entretien de vos panneaux",
  faqs = defaultFaqs,
}: PanneauxSolairesClientProps) {
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
    if (val === 'check' || val === '✓') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#2a9b96"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      )
    }
    if (val === 'cross' || val === '✗') {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#d1d5db"/><path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
      )
    }
    return val
  }

  const rowIcons = [
    <svg key="cal" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3" width="11" height="9.5" rx="1.5" stroke="#2a9b96" strokeWidth="1.3"/><path d="M1.5 6h11" stroke="#2a9b96" strokeWidth="1.3"/><path d="M4.5 1v3M9.5 1v3" stroke="#2a9b96" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    <svg key="clk" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#2a9b96" strokeWidth="1.3" fill="none"/><path d="M7 4v3.5l2.5 1.5" stroke="#2a9b96" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
    <svg key="doc" width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="1" width="9" height="12" rx="1.5" stroke="#2a9b96" strokeWidth="1.3" fill="none"/><path d="M5 5h4M5 7.5h4M5 10h2.5" stroke="#2a9b96" strokeWidth="1.1" strokeLinecap="round"/></svg>,
    <svg key="usr" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" stroke="#2a9b96" strokeWidth="1.3" fill="none"/><path d="M2.5 13c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="#2a9b96" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>,
    <svg key="wrn" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8 3a3 3 0 00-4 4l-2 2 1.5 1.5 2-2a3 3 0 004-4L8 6 7 5z" stroke="#2a9b96" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
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
      <section className="ps-section-wrap" style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }} className="ps-outer">
          <div className="ps-layout">

            {/* ── LEFT SIDEBAR (sticky) ── */}
            <aside className="ps-sidebar">

              {/* Service nav */}
              <div className="ps-service-nav" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                {sidebarServices.map((s) => {
                  const isCurrent = s.href === '/services/panneaux-solaires'
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
                          e.currentTarget.style.background = s.accent + '18'
                          e.currentTarget.style.color = s.accent
                          e.currentTarget.style.borderColor = s.accent + '55'
                          const icon = e.currentTarget.querySelector('.sb-icon') as HTMLElement
                          if (icon) icon.style.background = s.accent
                          const arrow = e.currentTarget.querySelector('.ps-nav-arrow') as HTMLElement
                          if (arrow) { arrow.style.borderColor = s.accent + '55'; arrow.style.color = s.accent }
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent) {
                          e.currentTarget.style.background = '#fff'
                          e.currentTarget.style.color = '#444'
                          e.currentTarget.style.borderColor = '#ebebeb'
                          const icon = e.currentTarget.querySelector('.sb-icon') as HTMLElement
                          if (icon) icon.style.background = s.accent
                          const arrow = e.currentTarget.querySelector('.ps-nav-arrow') as HTMLElement
                          if (arrow) { arrow.style.borderColor = '#e0e0e0'; arrow.style.color = '' }
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
                background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', borderRadius: 20, padding: '28px 24px',
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
              </div>{/* end ps-sidebar-extra */}
            </aside>

            {/* ── RIGHT CONTENT (scrolls) ── */}
            <div className="ps-content">

              {/* Intro headline & Main image */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                className="ps-main-img-block" style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 56, position: 'relative' }}
              >
                <img
                  src={mainImage}
                  alt="Entretien panneaux solaires"
                  className="ps-main-img" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
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
                    <div style={{ width: 36, height: 36, flexShrink: 0, background: '#2a9b96', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />
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

              {/* Pricing section — Comparison table */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ marginBottom: 48 }}
              >
                <div className="ps-tbl-desktop">
                <div className="ps-tbl-scroll" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', position: 'relative' }}>
                  <div className="ps-comparison-table">
                    {/* Header row */}
                    <div style={{ padding: '28px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: '#000', marginBottom: 4 }}>Nos contrats</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: '#666' }}>Panneaux photovoltaïques</div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#2a9b96' }}>Zen Acc&egrave;s</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La tranquillit&eacute; essentielle</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0].map(i => <div key={i} style={{ width: 22, height: 22, background: '#2a9b96', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#2a9b96' }}>Zen &Eacute;quilibre</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La couverture compl&egrave;te</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1].map(i => <div key={i} style={{ width: 22, height: 22, background: '#2a9b96', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#2a9b96' }}>Zen Plus</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La s&eacute;r&eacute;nit&eacute; assur&eacute;e</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 22, background: '#2a9b96', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />)}
                      </div>
                    </div>

                    {/* Data rows */}
                    {contractFeatures.map((row, ri) => {
                      const bg = ri % 2 === 0 ? '#fff' : '#f8f9fa'
                      return [
                        <div key={`l-${ri}`} className="ps-tbl-label" style={{ background: bg }}>
                          <div className="ps-tbl-icon" style={{ background: '#e0f5f3' }}>
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
                            background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', color: '#fff',
                            borderRadius: 14, padding: '10px 10px 10px 18px',
                            fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                            fontSize: 12, fontWeight: 700, textDecoration: 'none',
                            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                            boxShadow: '0 4px 12px rgba(42, 155, 150, 0.3)',
                          }}
                          onMouseEnter={(e) => {
                            const btn = e.currentTarget as HTMLElement;
                            btn.style.background = 'linear-gradient(135deg, #2a9b96 0%, #50b5a2 100%)';
                            const arr = btn.querySelector('.tbl-arr') as HTMLElement | null;
                            if (arr) {
                              arr.style.background = '#fff';
                              arr.style.transform = 'translateX(4px)';
                              arr.style.boxShadow = '0 8px 16px rgba(255, 255, 255, 0.4)';
                              const svg = arr.querySelector('svg') as SVGElement | null;
                              if (svg) svg.style.stroke = '#2c6262';
                            }
                          }}
                          onMouseLeave={(e) => {
                            const btn = e.currentTarget as HTMLElement;
                            btn.style.background = 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)';
                            const arr = btn.querySelector('.tbl-arr') as HTMLElement | null;
                            if (arr) {
                              arr.style.background = 'linear-gradient(135deg, #2c6262 0%, #1f4545 100%)';
                              arr.style.transform = 'translateX(0)';
                              arr.style.boxShadow = '0 4px 8px rgba(44, 98, 98, 0.3)';
                              const svg = arr.querySelector('svg') as SVGElement | null;
                              if (svg) svg.style.stroke = '#fff';
                            }
                          }}
                        >
                          Demander un Devis
                          <span className="tbl-arr" style={{
                            width: 28, height: 28, borderRadius: 10, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', flexShrink: 0, background: 'linear-gradient(135deg, #2c6262 0%, #1f4545 100%)',
                            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            boxShadow: '0 4px 8px rgba(44, 98, 98, 0.3)',
                          }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        </a>
                        <a href="/legal/conditions-generales-vente" style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 11, color: '#999', textDecoration: 'underline' }}>Conditions des contrats</a>
                      </div>
                    ))}
                  </div>
                </div>
                </div>{/* end ps-tbl-desktop */}

                {/* Mobile contract cards */}
                <div className="ps-tbl-mobile">
                  {[
                    { name: 'Zen Accès', sub: 'La tranquillité essentielle', key: 'acces' as const, icons: 1 },
                    { name: 'Zen Équilibre', sub: 'La couverture complète', key: 'equilibre' as const, icons: 2 },
                    { name: 'Zen Plus', sub: 'La sérénité assurée', key: 'plus' as const, icons: 3 },
                  ].map((contract) => (
                    <div key={contract.key} className="ps-contract-card">
                      <div className="ps-contract-header">
                        <div className="ps-contract-name" style={{ color: '#2a9b96' }}>{contract.name}</div>
                        <div className="ps-contract-sub">{contract.sub}</div>
                        <div className="ps-contract-icons">
                          {Array.from({ length: contract.icons }).map((_, ii) => (
                            <div key={ii} style={{ width: 18, height: 18, background: '#2a9b96', WebkitMask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat', mask: 'url("/Logo image/Vert medium.webp") center/contain no-repeat' }} />
                          ))}
                        </div>
                      </div>
                      {contractFeatures.map((row, ri) => (
                        <div key={ri} className="ps-contract-row" style={{ background: ri % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                          <span className="ps-contract-label">
                            <span className="ps-contract-row-icon" style={{ background: '#e0f5f3' }}>{rowIcons[ri] || rowIcons[0]}</span>
                            {row.label}
                          </span>
                          <span className="ps-contract-val">{renderCellValue(row[contract.key])}</span>
                        </div>
                      ))}
                      <div className="ps-contract-cta">
                        <a
                          href="https://form.typeform.com/to/rRhOu7eb" target="_blank" rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', color: '#fff',
                            borderRadius: 10, padding: '10px 18px',
                            fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                            fontSize: 13, fontWeight: 700, textDecoration: 'none', width: '100%', justifyContent: 'center',
                          }}
                        >
                          Demander un Devis →
                        </a>
                        <a href="/legal/conditions-generales-vente" style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 11, color: '#999', textDecoration: 'underline', textAlign: 'center' as const }}>Conditions des contrats</a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discount coupon */}
                <div className="ps-coupon-wrap" style={{ position: 'relative', marginTop: 20 }}>
                  {/* Notch circles */}
                  <div style={{
                    position: 'absolute', left: -9, top: '50%', transform: 'translateY(-50%)',
                    width: 18, height: 18, borderRadius: '50%',
                    background: '#fff', zIndex: 3, border: '1px solid #ddd',
                  }} />
                  <div style={{
                    position: 'absolute', right: -9, top: '50%', transform: 'translateY(-50%)',
                    width: 18, height: 18, borderRadius: '50%',
                    background: '#fff', zIndex: 3, border: '1px solid #ddd',
                  }} />
                  <div className="ps-discount-banner" style={{
                    borderRadius: 16, overflow: 'hidden', position: 'relative',
                    background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)',
                    border: '1.5px dashed rgba(255,255,255,0.45)',
                    padding: '24px 28px 20px',
                    display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
                  }}>
                    {/* Torn top edge */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 10 }} preserveAspectRatio="none" viewBox="0 0 400 10">
                      <polyline points="0,10 20,0 40,10 60,0 80,10 100,0 120,10 140,0 160,10 180,0 200,10 220,0 240,10 260,0 280,10 300,0 320,10 340,0 360,10 380,0 400,10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
                    </svg>
                    <div className="ps-discount-icon" style={{
                      width: 52, height: 52, borderRadius: '50%',
                      border: '2px solid #fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="8" cy="8" r="2.5" stroke="#fff" strokeWidth="1.8"/>
                        <circle cx="16" cy="16" r="2.5" stroke="#fff" strokeWidth="1.8"/>
                        <line x1="5" y1="19" x2="19" y2="5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 2,
                      }}>
                        {discountHeadline}
                      </div>
                      <div style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 13, color: 'rgba(255,255,255,0.6)',
                      }}>
                        {discountText}
                      </div>
                    </div>
                    <div className="ps-coupon-sep" style={{
                      alignSelf: 'stretch', width: 0,
                      borderLeft: '1.5px dashed rgba(255,255,255,0.4)',
                      flexShrink: 0,
                    }} />
                    <div className="ps-discount-badge" style={{
                      background: '#fff', borderRadius: 8, padding: '8px 20px',
                      display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 14, color: '#000',
                      }}>Profitez d&apos;un rabais de</span>
                      <span style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 28, fontWeight: 800, color: '#000', lineHeight: 1,
                      }}>{discountBadge.replace(/profitez d'un rabais de\s*/i, '')}</span>
                    </div>
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
                    {pvCleanTitle}
                  </h3>
                  {pvCleanIntro.map((text, i) => (
                    <p key={i} style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 15, color: '#555', lineHeight: '23px', margin: i < pvCleanIntro.length - 1 ? '0 0 6px' : '0 0 20px',
                    }}>
                      {text}
                    </p>
                  ))}
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
                    {/* Background photo */}
                    <img
                      src={pvCleanImage}
                      alt=""
                      loading="lazy"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%', objectFit: 'cover',
                        objectPosition: 'center 30%',
                      }}
                    />
                    {/* Dark green overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(26,54,54,0.55)',
                    }} />
                    {/* ZEN logo — top */}
                    <img
                      src="/Logo image/Blanc.webp"
                      alt="Zen Énergie Services"
                      style={{ position: 'relative', zIndex: 1, width: 52, height: 'auto', objectFit: 'contain' }}
                    />
                    {/* Text — bottom */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 0.5,
                        textTransform: 'uppercase', marginBottom: 6,
                      }}>OFFRE PV CLEAN :</div>
                      <div style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.3,
                      }}>
                        L'EFFICACITÉ RETROUVÉE DE VOS PANNEAUX PHOTOVOLTAÏQUES !
                      </div>
                    </div>
                  </div>

                  {/* Right: price + features */}
                  <div style={{
                    background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', borderRadius: 16, padding: '28px 24px',
                    display: 'flex', flexDirection: 'column',
                  }}>
                    {/* Included */}
                    <div style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 12, letterSpacing: 0.3,
                    }}>Ce que contient votre offre PV Clean :</div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                      {pvCleanFeatures.map((item, i) => (
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
                      {pvCleanDisclaimer}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why maintain section */}
              <motion.div
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
                className="ps-why-block" style={{ background: '#f8f8f8', borderRadius: 20, padding: '32px 28px', marginBottom: 48 }}
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
                    src={detailImages[0]}
                    alt="Ouvrier panneaux solaires"
                    loading="lazy"
                    className="ps-detail-img" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
                  />
                </motion.div>
                <motion.div
                  variants={reveal} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  style={{ borderRadius: 16, overflow: 'hidden' }}
                >
                  <img
                    src={detailImages[1] || detailImages[0]}
                    alt="Réparation panneaux solaires"
                    loading="lazy"
                    className="ps-detail-img" style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }}
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
                className="ps-faq-title"
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
                      <span className="ps-faq-q-text">{faq.q}</span>
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
                          line.startsWith('\u2022') ? (
                            <div key={li} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                              <span style={{ color: '#50B5A2', flexShrink: 0 }}>&bull;</span>
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
            {/* Contact form */}
            <div style={{
              background: '#fff', borderRadius: 20, padding: '28px 24px', marginBottom: 24,
              border: '1px solid #ebebeb', boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 22, fontWeight: 700, letterSpacing: -0.5,
                color: '#000', marginBottom: 24, lineHeight: '28px',
              }}>
                Vous avez une question ? Contactez-nous
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={labelStyle}>Nom</label>
                  <input type="text" name="name" placeholder="Prénom *" value={formData.name} onChange={handleChange} required style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input type="email" name="email" placeholder="Adresse e-mail *" value={formData.email} onChange={handleChange} required style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input type="tel" name="phone" placeholder="Numéro de téléphone *" value={formData.phone} onChange={handleChange} style={formInputStyle}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" placeholder="Écrivez votre message..." value={formData.message} onChange={handleChange} rows={4}
                    style={{ ...formInputStyle, borderRadius: 10, resize: 'vertical' }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = '#e0e0e0' }} />
                </div>
                <button type="submit" style={{
                  width: '100%', padding: '14px', borderRadius: 8,
                  background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', border: 'none',
                  fontSize: 15, fontWeight: 700, fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  color: '#fff', cursor: 'pointer', transition: 'background 0.18s ease, color 0.18s ease', marginTop: 4,
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
              background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', borderRadius: 20, padding: '28px 24px',
              position: 'relative', overflow: 'hidden',
            }}>
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
              <Link href="https://form.typeform.com/to/rRhOu7eb" target="_blank" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: '#000',
                borderRadius: 8, padding: '10px 20px', fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.18s ease',
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e0f5f3' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#fff' }}
              >
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

        .ps-nav-link:hover {
          background: #f5f5f5 !important;
          border-color: #d8d8d8 !important;
        }

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
            border-radius: 12px !important;
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
          .ps-discount-banner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 10px !important; padding: 20px 14px 16px !important; }
          .ps-discount-badge { width: auto !important; justify-content: center !important; box-sizing: border-box !important; }
          .ps-coupon-sep { display: none !important; }
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
        .ps-tbl-desktop { display: block; }
        .ps-tbl-mobile { display: none; }
        @media (max-width: 640px) {
          .ps-tbl-desktop { display: none; }
          .ps-tbl-mobile {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 0;
          }
          .ps-contract-card {
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #eee;
            background: #fff;
          }
          .ps-contract-header {
            padding: 16px 16px 12px;
            background: #fff;
            border-bottom: 2px solid #eee;
          }
          .ps-contract-name {
            font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
            font-size: 17px;
            font-weight: 700;
          }
          .ps-contract-sub {
            font-family: var(--font-jost), 'Jost', sans-serif;
            font-size: 12px;
            color: #888;
            margin-top: 2px;
          }
          .ps-contract-icons {
            display: flex;
            gap: 4px;
            margin-top: 8px;
          }
          .ps-contract-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px;
            gap: 8px;
          }
          .ps-contract-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-family: var(--font-jost), 'Jost', sans-serif;
            font-size: 12px;
            color: #333;
            flex: 1;
          }
          .ps-contract-row-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .ps-contract-val {
            font-family: var(--font-jost), 'Jost', sans-serif;
            font-size: 13px;
            color: #333;
            flex-shrink: 0;
          }
          .ps-contract-cta {
            padding: 14px 16px;
            background: #fff;
            border-top: 2px solid #eee;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 16px',
  borderRadius: 10,
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
