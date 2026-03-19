'use client'

import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import FAQ from '@/components/sections/FAQ'
import { ArrowUpRight } from 'lucide-react'

const reveal = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
const slideLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }
const slideRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }
const vp = { once: true as const, amount: 0.15 }

/* ── Default fallback data ── */

const defaultServiceCards = [
  {
    title: 'Panneaux photovoltaïques',
    desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.',
    img: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-worker-firld-by-solar-panels.webp',
    href: '/services/panneaux-solaires',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp',
    accent: '#2a9b96',
  },
  {
    title: 'Pompe à chaleur',
    desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.',
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Pompes%20a%CC%80%20chaleur%20avantages%20et%20inconve%CC%81nients.webp',
    href: '/services/pompe-a-chaleur',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp',
    accent: '#e8552c',
  },
  {
    title: 'Boiler thermodynamique',
    desc: "Nettoyage et vérification des composants pour une production d'eau chaude efficace et durable.",
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Ajustement%20de%20re%CC%81troe%CC%81clairage.webp',
    href: '/services/boiler-thermodynamique',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp',
    accent: '#0c2a54',
  },
  {
    title: 'Nettoyage PV Clean',
    desc: "Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.",
    img: '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/1789536761.webp',
    href: '/services/pv-clean',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp',
    accent: '#2a9b96',
  },
]

const defaultServiceDetails = [
  {
    label: 'Panneaux photovoltaïques',
    title: 'Maximisez la production de votre installation solaire',
    desc: "Un entretien régulier de vos panneaux photovoltaïques garantit une production optimale d'énergie.",
    img: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp',
    features: ["Contrôle d'étanchéité de la toiture", 'Vérification du système de montage des panneaux', 'Diagnostic électrique et paramètres onduleur', 'Monitoring à distance et mise à jour logiciel', "Rapport d'intervention détaillé"],
    href: '/services/panneaux-solaires',
    imgLeft: true,
  },
  {
    label: 'Pompe à chaleur',
    title: "Profitez d'un confort thermique optimal toute l'année",
    desc: "Prolongez la durée de vie de votre pompe à chaleur et assurez ses performances avec nos contrats d'entretien adaptés.",
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/heat-pump-airwater-technology-home.webp',
    features: ['Nettoyage des filtres et unités intérieure / extérieure', "Contrôle d'étanchéité du circuit frigorigène", 'Vérification des connexions électriques', 'Relevé des températures, pressions et tensions', "Rapport d'intervention complet"],
    href: '/services/pompe-a-chaleur',
    imgLeft: false,
  },
  {
    label: 'Boiler thermodynamique',
    title: "Optimisez votre production d'eau chaude toute l'année",
    desc: "Le boiler thermodynamique est un équipement clé de votre confort quotidien.",
    img: '/Photos%20HD/Photos%20produits/Boiler/1.webp',
    features: ['Inspection générale et détection de fuites', 'Nettoyage du boiler et grilles de ventilation', 'Contrôle du circuit frigorifique', 'Vérification du thermostat et des organes de sécurité', 'Optimisation des réglages pour la consommation énergétique'],
    href: '/services/boiler-thermodynamique',
    imgLeft: true,
  },
  {
    label: 'Nettoyage PV Clean',
    title: 'Retrouvez toute la puissance de vos panneaux solaires',
    desc: "Des panneaux encrassés perdent jusqu'à 25% de leur rendement.",
    img: '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-view-cleaning-solar-panels-surface.webp',
    features: ['Nettoyage simple : dépoussiérage', "Nettoyage mécanique à l'eau déminéralisée", "Application d'une couche protectrice", 'Rapport de nettoyage détaillé', 'À partir de CHF 392* (minimum 8 panneaux)'],
    href: '/services/pv-clean',
    imgLeft: false,
  },
]

const defaultStats = [
  { tag: 'SÉCURITÉ HABITATION', num: 100, suffix: '%', desc: "Élimination des risques de sécurité et protection complète de vos installations électriques et thermiques." },
  { tag: 'PERFORMANCE RESTAURÉE', prefix: '+', num: 30, suffix: '%', desc: "Récupération immédiate de votre productivité énergétique pouvant atteindre jusqu'à 30% de rendement supplémentaire." },
  { tag: 'DURABILITÉ ÉTENDUE', prefix: '+', num: 15, suffix: ' ans', desc: "Préservation de l'intégrité des composants pour une durée de vie prolongée et un amortissement optimal." },
  { tag: 'ÉCONOMIES RÉELLES', prefix: '-', num: 40, suffix: '%', desc: "Réduction drastique des pannes récurrentes et suppression des coûts d'intervention d'urgence imprévus." },
]

const defaultExpItems = [
  { title: 'Contrat digitalisé avec maintenance téléphonique', text: "Votre contrat digitalisé avec une maintenance téléphonique à disposition pour vous accompagner à tout moment en cas de besoin.", icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-35.webp' },
  { title: 'Espace client personnel', text: "Votre espace client personnel pour gérer l'entièreté de votre contrat et de vos interventions, accessible en ligne à tout moment.", icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-14.webp' },
  { title: 'Contrats flexibles adaptés à vos besoins', text: "Des contrats flexibles adaptés à vos besoins.", icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-22.webp' },
]

/* ── Per-service accent colors ── */
const accentByHref: Record<string, string> = {
  '/services/pompe-a-chaleur': '#e8552c',
  '/services/boiler-thermodynamique': '#0c2a54',
}

/* ── Types ── */

interface ServiceCard { title: string; desc: string; img: string; icon: string; href: string; accent?: string }
interface ServiceDetail { label: string; title: string; desc: string; img: string; features: string[]; href: string; imgLeft: boolean }
interface Stat { tag: string; prefix?: string; num: number; suffix: string; desc: string }
interface ExpItem { title: string; text: string; icon: string }

export interface ServicesClientProps {
  heroTitle?: string
  heroBgImage?: string
  cardsLabel?: string
  cardsTitle?: string
  cardsDesc?: string
  serviceCards?: ServiceCard[]
  statsLabel?: string
  statsTitle?: string
  statsDesc?: string
  stats?: Stat[]
  quoteTitle?: string
  quoteBody?: string
  expLabel?: string
  expTitle?: string
  expImage?: string
  expItems?: ExpItem[]
  serviceDetails?: ServiceDetail[]
  ctaTitle?: string
  ctaAccent?: string
  ctaButtonText?: string
  ctaButtonLink?: string
  ctaQuestionLabel?: string
  ctaQuestionDesc?: string
}

function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) { animate(count, value, { duration: 1.2, ease: 'easeOut' }) }
  }, [inView, count, value])

  return (
    <motion.span ref={ref}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  )
}

export default function ServicesClient(props: ServicesClientProps) {
  const heroTitle = props.heroTitle ?? "Nos solutions d'entretien"
  const heroBgImage = props.heroBgImage ?? '/Photos%20HD/Photos%20d_ambiance/happy-family-background-house-with-solar-panels-roof-selective-focus.webp'
  const cardsLabel = props.cardsLabel ?? 'NOS SERVICES'
  const cardsTitle = props.cardsTitle ?? 'Nos solutions pour votre confort en toute sérénité'
  const cardsDesc = props.cardsDesc ?? "Un entretien sur mesure pour vos installations de chauffage et photovoltaïques.\n\nDécouvrez nos solutions adaptées à vos équipements et besoins."
  const cards = props.serviceCards?.length ? props.serviceCards : defaultServiceCards
  const statsLabel = props.statsLabel ?? 'RÉSULTATS CONCRETS'
  const statsTitle = props.statsTitle ?? "Ce que l'entretien Zen apporte concrètement"
  const statsDesc = props.statsDesc ?? 'Plusieurs évènements peuvent venir endommager votre installation solaire ou de pompe à chaleur et ses performances.'
  const statsList = props.stats?.length ? props.stats : defaultStats
  const quoteTitle = props.quoteTitle ?? 'Ces conséquences peuvent être évitées avec une maintenance et un entretien régulier.'
  const quoteBody = props.quoteBody ?? "Nous observons un gain de longévité allant jusqu'à 10 ans avec une maintenance régulière et professionnelle de vos installations. Afin de prévenir et d'éviter des problèmes de sécurité ou d'usure, les experts Zen s'assurent du diagnostic, du suivi, des réparations et de la maintenance de vos installations."
  const expLabel = props.expLabel ?? "L'expérience Zen"
  const expTitle = props.expTitle ?? "Les atouts de nos contrats d'entretien"
  const expImage = props.expImage ?? '/Photos%20HD/Photos%20d_ambiance/Zen.webp'
  const expItems = props.expItems?.length ? props.expItems : defaultExpItems
  const details = props.serviceDetails?.length ? props.serviceDetails : defaultServiceDetails
  const ctaTitle = props.ctaTitle ?? 'Prêt à protéger'
  const ctaAccent = props.ctaAccent ?? 'vos installations ?'
  const ctaButtonText = props.ctaButtonText ?? 'Demander un devis'
  const ctaButtonLink = props.ctaButtonLink ?? 'https://form.typeform.com/to/rRhOu7eb'
  const ctaQuestionLabel = props.ctaQuestionLabel ?? 'Une question ?'
  const ctaQuestionDesc = props.ctaQuestionDesc ?? 'Notre équipe est disponible pour vous accompagner et répondre à toutes vos questions.'

  const descParts = cardsDesc.split('\n\n')

  return (
    <main>
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Nos Services' }]}
        title={heroTitle}
        bgImage={heroBgImage}
        compact={true}
      />

      {/* ── Services Card Grid ──────────────────────────────────────────── */}
      <section style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="svc-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 60, marginBottom: 80 }}>
            <div style={{ flex: '0 0 55%' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5 }} style={{ marginBottom: 16 }}
              >
                <SectionLabel text={cardsLabel} />
              </motion.div>
              <motion.h2
                className="svc-cards-title"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 600,
                  letterSpacing: -1, color: '#000', lineHeight: 1.1, margin: 0,
                }}
              >
                {cardsTitle}
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ flex: 1 }}
            >
              <p style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: 17, lineHeight: '27px', color: '#555', margin: 0, maxWidth: 440
              }}>
                {descParts.map((part, i) => (
                  <span key={i}>{i > 0 && <><br /><br /></>}{part}</span>
                ))}
              </p>
            </motion.div>
          </div>

          <div className="svc-card-grid">
            {cards.map((card, i) => (
              <motion.a
                key={i}
                href={card.href}
                className="svc-card"
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={vp} transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit', '--card-accent': accentByHref[card.href] || card.accent || '#2a9b96' } as any}
              >
                <div className="svc-card-img-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img className="svc-card-img" src={card.img} alt={card.title} loading="lazy" decoding="async" />
                  <div className="svc-card-overlay" />
                  <div className="svc-card-badge">
                    <div
                      style={{
                        width: '38px', height: '38px', backgroundColor: '#fff',
                        WebkitMask: `url("${card.icon}") center/contain no-repeat`,
                        mask: `url("${card.icon}") center/contain no-repeat`
                      }}
                    />
                  </div>
                </div>
                <div className="svc-card-content" style={{
                  padding: '32px 28px 36px', flex: 1, display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden'
                }}>
                  <div className="svc-card-shine" />
                  <h3 className="svc-card-title" style={{
                    fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                    fontSize: '26px', fontWeight: 600, color: '#000',
                    marginBottom: '14px', letterSpacing: '-0.8px',
                    transition: 'color 0.3s ease', position: 'relative', zIndex: 2
                  }}>{card.title}</h3>
                  <p className="svc-card-desc" style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: 15, lineHeight: '1.6', color: '#444',
                    marginBottom: 24, transition: 'color 0.3s ease',
                    position: 'relative', zIndex: 2
                  }}>{card.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto', position: 'relative', zIndex: 2 }}>
                    <span className="svc-card-read-more">Découvrir l&apos;offre</span>
                    <span className="svc-card-arrow"><ArrowUpRight size={20} /></span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Banner ────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '90px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="stats-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 60, marginBottom: 60 }}>
            <div style={{ flex: '0 0 55%' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5 }} style={{ marginBottom: 20 }}
              >
                <SectionLabel text={statsLabel} />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 'clamp(32px, 5vw, 62px)', fontWeight: 600,
                  letterSpacing: -2, color: '#000', lineHeight: 1, margin: 0,
                }}
              >
                {statsTitle}
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ flex: 1, paddingTop: 30 }}
            >
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 17, lineHeight: '26px', color: '#555', margin: 0, maxWidth: 480
              }}>{statsDesc}</p>
            </motion.div>
          </div>

          <div className="svc-stats-grid">
            {statsList.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ position: 'relative' }}
              >
                <div style={{ width: '100%', height: 1.5, background: '#000', marginBottom: 20 }} />
                <p style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 12, fontWeight: 700, color: '#000',
                  textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12
                }}>{s.tag}</p>
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 74, fontWeight: 600, color: '#000',
                  lineHeight: 1, letterSpacing: -2, marginBottom: 20,
                }}>
                  <Counter value={s.num} prefix={s.prefix} suffix={s.suffix} />
                </h3>
                <p style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 15, lineHeight: '23px', color: '#666', margin: 0,
                }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              marginTop: 80, padding: '40px',
              background: '#f8fbfc', borderRadius: 32,
              border: '1px solid #e1e9e8',
              display: 'flex', alignItems: 'center', gap: 40
            }}
          >
            <div style={{ width: 4, alignSelf: 'stretch', background: '#50b5a2', borderRadius: 2 }} />
            <div style={{ flex: 1 }}>
              <p style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 19, lineHeight: '28px', color: '#000', fontWeight: 600,
                marginBottom: 16, letterSpacing: -0.5
              }}>{quoteTitle}</p>
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 16, lineHeight: '26px', color: '#555', margin: 0, maxWidth: 900
              }}>{quoteBody}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── L'EXPÉRIENCE ZEN ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', padding: '0', overflow: 'hidden' }}>
        <div className="zen-exp-inner">
          <div className="zen-exp-photo">
            <img
              src={expImage}
              alt={expLabel}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 60%, #2a9b96 100%)',
            }} />
          </div>

          <div className="zen-exp-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.5 }}
              style={{ marginBottom: 16 }}
            >
              <span style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 13, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#fff'
              }}>{expLabel}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 600,
                color: '#fff', letterSpacing: -1.5, lineHeight: 1.1,
                marginBottom: 32,
              }}
            >
              {expTitle}
            </motion.h2>

            {expItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={vp} transition={{ duration: 0.5, delay: i * 0.15 }}
                className="zen-exp-item"
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{
                      width: 32, height: 32, flexShrink: 0,
                      background: '#50b5a2',
                      WebkitMask: `url("${item.icon}") center/contain no-repeat`,
                      mask: `url("${item.icon}") center/contain no-repeat`,
                    }} />
                    <h3 style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 18, fontWeight: 600, color: '#fff',
                      letterSpacing: -0.5, margin: 0,
                    }}>{item.title}</h3>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 15, lineHeight: '24px',
                    color: 'rgba(255,255,255,0.82)', margin: 0,
                  }}>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alternating Service Sections ───────────────────────────────── */}
      {details.map((svc, i) => (
        <section
          key={i}
          style={{ padding: '100px 20px', background: i % 2 === 0 ? '#fff' : '#f7f9f8', overflow: 'hidden' }}
        >
          <div
            className="svc-detail-row"
            style={{
              maxWidth: 1320, margin: '0 auto',
              display: 'flex', gap: 80, alignItems: 'center',
              flexDirection: svc.imgLeft ? 'row' : 'row-reverse',
            }}
          >
            <motion.div
              variants={svc.imgLeft ? slideLeft : slideRight}
              initial="hidden" whileInView="visible"
              viewport={vp} transition={{ duration: 0.55, ease: 'easeOut' }}
              style={{ flex: '0 0 48%' }}
            >
              <div style={{ borderRadius: 28, overflow: 'hidden', aspectRatio: '4/3', background: '#eee' }}>
                <img
                  src={svc.img} alt={svc.label}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>

            <motion.div
              variants={svc.imgLeft ? slideRight : slideLeft}
              initial="hidden" whileInView="visible"
              viewport={vp} transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
              style={{ flex: 1, minWidth: 0 }}
            >
              <SectionLabel text={svc.label} />
              <h2 style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 600,
                lineHeight: 1.2, letterSpacing: -1, color: '#000', margin: '18px 0 18px',
              }}>{svc.title}</h2>
              <p style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: 16, lineHeight: '26px', color: '#555', marginBottom: 28,
              }}>{svc.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 36 }}>
                {svc.features.map((f, fi) => (
                  <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: '#2a9b96',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: 2,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontSize: 15, lineHeight: '22px', color: '#333',
                    }}>{f}</span>
                  </div>
                ))}
              </div>
              <Button variant="dark" label="Voir nos contrats" href={svc.href} />
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', padding: '0 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          <div className="cta-banner-inner">
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={vp} transition={{ duration: 0.8, ease: 'easeOut' }}
              className="cta-banner-left"
            >
              <div style={{ width: 48, height: 3, background: '#50b5a2', borderRadius: 2, marginBottom: 28 }} />
              <h2 style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600,
                letterSpacing: -1.5, color: '#fff', lineHeight: 1.1, marginBottom: 36,
              }}>
                {ctaTitle} <br />
                <span style={{ color: '#50b5a2' }}>{ctaAccent}</span>
              </h2>
              <Button variant="lime" label={ctaButtonText} href={ctaButtonLink} />
            </motion.div>

            <div className="cta-banner-divider" />

            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={vp} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="cta-banner-right"
            >
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#fff', marginBottom: 20,
              }}>{ctaQuestionLabel}</p>
              <p style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 20, fontWeight: 500, color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.5, marginBottom: 36,
              }}>{ctaQuestionDesc}</p>

              <a href="tel:+41215120574" style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 24px', borderRadius: 16,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: 12, cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: '#50b5a2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 12, color: 'rgba(255,255,255,0.75)', margin: '0 0 2px',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>Appeler</p>
                    <p style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 17, fontWeight: 600, color: '#fff', margin: 0, letterSpacing: -0.3,
                    }}>+41 21 512 05 74</p>
                  </div>
                </motion.div>
              </a>

              <a href="mailto:contact@zen-energieservices.ch" style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 24px', borderRadius: 16,
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 12, color: 'rgba(255,255,255,0.75)', margin: '0 0 2px',
                      textTransform: 'uppercase', letterSpacing: '0.08em',
                    }}>Écrire</p>
                    <p style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 15, fontWeight: 600, color: '#fff', margin: 0,
                    }}>contact@zen-energieservices.ch</p>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <FAQ />

      <style dangerouslySetInnerHTML={{ __html: `
        .svc-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) and (min-width: 641px) {
          .svc-card-grid {
            display: flex;
            gap: 20px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 16px;
            margin: 0 -20px;
            padding-left: 20px;
            padding-right: 20px;
            scrollbar-width: none;
          }
          .svc-card-grid::-webkit-scrollbar { display: none; }
          .svc-card-grid > * {
            flex: 0 0 calc(50% - 10px);
            min-width: calc(50% - 10px);
            scroll-snap-align: start;
          }
        }
        .svc-card {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
          background: #fff;
          cursor: pointer;
          will-change: transform, box-shadow;
          transform: translateZ(0);
          transition: all 0.5s cubic-bezier(0.165,0.84,0.44,1);
          display: flex;
          flex-direction: column;
        }
        .svc-card-content {
          background: rgba(255, 255, 255, 0.6) !important;
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border-top: 1px solid rgba(255, 255, 255, 0.4);
        }
        .svc-card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-25deg);
          transition: 0.75s;
          pointer-events: none;
          z-index: 1;
        }
        .svc-card:hover .svc-card-shine {
          left: 150%;
          transition: 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .svc-card-img-wrap {
          position: relative;
          overflow: hidden;
          background: #eee;
        }
        .svc-card-img {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(42,155,150,0.55) 0%, rgba(80,181,162,0.35) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .svc-card-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 64px;
          height: 64px;
          border-radius: 18px;
          background: var(--card-accent, #2a9b96);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          transition: all 0.4s cubic-bezier(0.165,0.84,0.44,1);
          z-index: 5;
        }
        .svc-card-top-arrow {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #50b5a2;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          opacity: 0;
          transform: translate(-10px, 10px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.165,0.84,0.44,1);
          z-index: 5;
        }
        .svc-card-read-more {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: var(--card-accent, #2a9b96);
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: opacity 0.35s ease, max-width 0.4s ease, margin-right 0.3s ease;
          margin-right: 0;
        }
        .svc-card-arrow {
          font-size: 22px;
          color: var(--card-accent, #2a9b96);
          font-weight: 500;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .svc-card:hover {
          box-shadow: 0 15px 45px rgba(0,0,0,0.1);
          transform: translateY(-5px);
          border-color: var(--card-accent, #50b5a2);
        }
        .svc-card:hover .svc-card-title { color: var(--card-accent, #2a9b96) !important; }
        .svc-card:hover .svc-card-read-more,
        .svc-card:hover .svc-card-arrow { color: var(--card-accent, #50b5a2) !important; }
        .svc-card:hover .svc-card-img { transform: scale(1.06); }
        .svc-card:hover .svc-card-overlay { opacity: 0; }
        .svc-card:hover .svc-card-badge {
          background: var(--card-accent, #50b5a2);
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .svc-card:hover .svc-card-read-more {
          opacity: 1;
          max-width: 130px;
          margin-right: 8px;
        }
        .svc-card:hover .svc-card-arrow { transform: translateX(6px); }
        .svc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .zen-exp-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
        }
        .zen-exp-photo {
          position: relative;
          overflow: hidden;
        }
        .zen-exp-content {
          padding: 60px 60px 60px 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .zen-exp-item {
          display: flex;
          gap: 22px;
          padding: 18px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .zen-exp-num {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #50b5a2;
          letter-spacing: 0.05em;
          padding-top: 4px;
          flex-shrink: 0;
        }
        .cta-banner-inner {
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 80px;
          align-items: center;
          padding: 100px 0;
        }
        .cta-banner-divider {
          width: 1px;
          align-self: stretch;
          background: rgba(255,255,255,0.08);
        }
        .cta-banner-left, .cta-banner-right { padding: 0; }
        @media (max-width: 1024px) {
          .zen-exp-inner { grid-template-columns: 1fr; }
          .zen-exp-photo { height: 360px; }
          .zen-exp-photo > div { background: linear-gradient(to bottom, transparent 60%, #2c6262 100%) !important; }
          .zen-exp-content { padding: 60px 30px; }
        }
        @media (max-width: 860px) {
          .cta-banner-inner { grid-template-columns: 1fr; gap: 50px; padding: 70px 0; }
          .cta-banner-divider { display: none; }
        }
        @media (max-width: 900px) {
          .svc-detail-row { flex-direction: column !important; gap: 40px !important; }
          .svc-header-row, .stats-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
            margin-bottom: 50px !important;
          }
          .svc-header-row > div, .stats-header-row > div { flex: none !important; width: 100% !important; }
          .svc-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 50px !important; }
          .svc-stats-grid h3 { font-size: 60px !important; }
        }
        @media (max-width: 640px) {
          .svc-card-grid {
            display: flex;
            gap: 16px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 12px;
            margin: 0 -20px;
            padding-left: 20px;
            padding-right: 20px;
            scrollbar-width: none;
          }
          .svc-card-grid::-webkit-scrollbar { display: none; }
          .svc-card-grid > * {
            flex: 0 0 85%;
            min-width: 85%;
            scroll-snap-align: start;
          }
          .svc-cards-title { font-size: clamp(24px, 7vw, 32px) !important; }
          .svc-stats-grid { grid-template-columns: 1fr !important; }
          .svc-card:hover { transform: none; }
          .svc-card-img { aspect-ratio: 4 / 3; }
        }
        @media (hover: none) {
          .svc-card:hover { transform: none; box-shadow: none; }
          .svc-card { will-change: auto; }
        }
      ` }} />
    </main>
  )
}
