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

const serviceCards = [
  {
    id: 'pompe-a-chaleur',
    title: 'Pompe à chaleur',
    desc: 'Contrôle technique et maintenance préventive pour assurer le confort thermique de votre foyer.',
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Pompes%20a%CC%80%20chaleur%20avantages%20et%20inconve%CC%81nients.webp',
    href: '/services/pompe-a-chaleur',
    icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-20.webp',
  },
  {
    id: 'panneaux-solaires',
    title: 'Panneaux photovoltaïques',
    desc: 'Entretien et optimisation de votre installation photovoltaïque pour un rendement maximal.',
    img: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-worker-firld-by-solar-panels.webp',
    href: '/services/panneaux-solaires',
    icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-18.webp',
  },
  {
    id: 'boiler',
    title: 'Boiler thermodynamique',
    desc: "Nettoyage et vérification des composants pour une production d'eau chaude efficace et durable.",
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Ajustement%20de%20re%CC%81troe%CC%81clairage.webp',
    href: '/services/boiler-thermodynamique',
    icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-15.webp',
  },
  {
    id: 'pv-clean',
    title: 'Nettoyage PV Clean',
    desc: "Élimination des impuretés pour redonner toute sa puissance à votre installation solaire.",
    img: '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/1789536761.webp',
    href: '/services/pv-clean',
    icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-23.webp',
  },
]

const services = [
  {
    id: 'pompe-a-chaleur',
    label: 'Pompe à chaleur',
    title: "Profitez d'un confort thermique optimal toute l'année",
    desc: "Prolongez la durée de vie de votre pompe à chaleur et assurez ses performances avec nos contrats d'entretien adaptés. Nos techniciens qualifiés réalisent un contrôle complet de votre installation selon les normes en vigueur en Suisse.",
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/heat-pump-airwater-technology-home.webp',
    features: [
      'Nettoyage des filtres et unités intérieure / extérieure',
      "Contrôle d'étanchéité du circuit frigorigène",
      'Vérification des connexions électriques',
      'Relevé des températures, pressions et tensions',
      "Rapport d'intervention complet",
    ],
    href: '/services/pompe-a-chaleur',
    imgLeft: true,
  },
  {
    id: 'panneaux-solaires',
    label: 'Panneaux photovoltaïques',
    title: 'Maximisez la production de votre installation solaire',
    desc: "Un entretien régulier de vos panneaux photovoltaïques garantit une production optimale d'énergie. Nos experts interviennent sur toiture et à distance pour assurer le bon fonctionnement de votre système.",
    img: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp',
    features: [
      "Contrôle d'étanchéité de la toiture",
      'Vérification du système de montage des panneaux',
      'Diagnostic électrique et paramètres onduleur',
      'Monitoring à distance et mise à jour logiciel',
      "Rapport d'intervention détaillé",
    ],
    href: '/services/panneaux-solaires',
    imgLeft: false,
  },
  {
    id: 'boiler',
    label: 'Boiler thermodynamique',
    title: "Optimisez votre production d'eau chaude toute l'année",
    desc: "Le boiler thermodynamique est un équipement clé de votre confort quotidien. Nos contrats d'entretien assurent son fonctionnement optimal et préviennent les pannes coûteuses avant qu'elles n'arrivent.",
    img: '/Photos%20HD/Photos%20produits/Boiler/1.webp',
    features: [
      'Inspection générale et détection de fuites',
      'Nettoyage du boiler et grilles de ventilation',
      'Contrôle du circuit frigorifique',
      'Vérification du thermostat et des organes de sécurité',
      'Optimisation des réglages pour la consommation énergétique',
    ],
    href: '/services/boiler-thermodynamique',
    imgLeft: true,
  },
  {
    id: 'pv-clean',
    label: 'Nettoyage PV Clean',
    title: 'Retrouvez toute la puissance de vos panneaux solaires',
    desc: "Des panneaux encrassés perdent jusqu'à 25% de leur rendement. Avec notre service PV Clean, bénéficiez d'un nettoyage professionnel pour restituer toute la puissance de votre installation solaire.",
    img: '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/close-up-view-cleaning-solar-panels-surface.webp',
    features: [
      'Nettoyage simple : dépoussiérage',
      "Nettoyage mécanique à l'eau déminéralisée",
      "Application d'une couche protectrice",
      'Rapport de nettoyage détaillé',
      'À partir de CHF 392* (minimum 8 panneaux)',
    ],
    href: '/services/pv-clean',
    imgLeft: false,
  },
]

const stats = [
  {
    tag: 'SÉCURITÉ HABITATION',
    num: 100, suffix: '%',
    desc: "Élimination des risques de sécurité et protection complète de vos installations électriques et thermiques."
  },
  {
    tag: 'PERFORMANCE RESTAURÉE',
    prefix: '+', num: 30, suffix: '%',
    desc: "Récupération immédiate de votre productivité énergétique pouvant atteindre jusqu'à 30% de rendement supplémentaire."
  },
  {
    tag: 'DURABILITÉ ÉTENDUE',
    prefix: '+', num: 15, suffix: ' ans',
    desc: "Préservation de l'intégrité des composants pour une durée de vie prolongée et un amortissement optimal."
  },
  {
    tag: 'ÉCONOMIES RÉELLES',
    prefix: '-', num: 40, suffix: '%',
    desc: "Réduction drastique des pannes récurrentes et suppression des coûts d'intervention d'urgence imprévus."
  }
]

function Counter({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 1.2, ease: 'easeOut' })
    }
  }, [inView, count, value])

  return (
    <motion.span ref={ref}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  )
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Nos Services' }]}
        title="Nos solutions d'entretien"
        bgImage="/Photos%20HD/Photos%20d_ambiance/happy-family-background-house-with-solar-panels-roof-selective-focus.webp"
        compact={true}
      />

      {/* ── Services Card Grid ──────────────────────────────────────────── */}
      <section style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }}>
          {/* Split header: Label+Title left / Desc right */}
          <div className="svc-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 60, marginBottom: 80 }}>
            <div style={{ flex: '0 0 55%' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5 }} style={{ marginBottom: 16 }}
              >
                <SectionLabel text="NOS SERVICES" />
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 600,
                  letterSpacing: -1, color: '#000', lineHeight: 1.1, margin: 0,
                }}
              >
                Nos solutions pour votre <br /> confort en toute sérénité
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
                Un entretien sur mesure pour vos installations de chauffage et photovoltaïques.
                <br /><br />
                Découvrez nos solutions adaptées à vos équipements et besoins.
              </p>
            </motion.div>
          </div>

          <div className="svc-card-grid">
            {serviceCards.map((card, i) => (
              <motion.a
                key={card.id}
                href={card.href}
                className="svc-card"
                variants={reveal} initial="hidden" whileInView="visible"
                viewport={vp} transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                {/* Image area */}
                <div className="svc-card-img-wrap">
                  <img className="svc-card-img" src={card.img} alt={card.title} loading="lazy" decoding="async" />
                  <div className="svc-card-overlay" />
                  
                  {/* Glassmorphism Title Card inside Image */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    width: '85%',
                  }}>
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.45)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      padding: '24px 20px',
                      borderRadius: '24px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}>
                      <h3 style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#000',
                        margin: 0,
                        letterSpacing: '-0.5px'
                      }}>
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Icon badge - white icon */}
                  <div className="svc-card-badge">
                    <img 
                      src={card.icon} 
                      alt="" 
                      style={{ 
                        width: 32, height: 32, objectFit: 'contain',
                        filter: 'brightness(0) invert(1)'
                      }} 
                    />
                  </div>
                  <div className="svc-card-top-arrow">
                    <ArrowUpRight size={24} color="#fff" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Text content */}
                <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p className="svc-card-desc" style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: 15, lineHeight: '24px', color: '#666',
                    marginBottom: 20,
                    transition: 'color 0.3s ease'
                  }}>
                    {card.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                    <span className="svc-card-read-more">En savoir plus</span>
                    <span className="svc-card-arrow">→</span>
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
                <SectionLabel text="RÉSULTATS CONCRETS" />
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
                Ce que l'entretien Zen <br /> apporte concrètement
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
              }}>
                Plusieurs évènements peuvent venir endommager votre installation solaire ou de pompe à chaleur et ses performances.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="svc-stats-grid">
            {stats.map((s, i) => (
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
                }}>
                  {s.tag}
                </p>
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
                }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote card */}
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
              }}>
                Ces conséquences peuvent être évitées avec une maintenance et un entretien régulier.
              </p>
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 16, lineHeight: '26px', color: '#555', margin: 0, maxWidth: 900
              }}>
                Nous observons un gain de longévité allant jusqu'à <span style={{ color: '#000', fontWeight: 700 }}>10 ans</span> avec une maintenance régulière et professionnelle de vos installations. Afin de prévenir et d'éviter des problèmes de sécurité ou d'usure, les experts <span style={{ color: '#50b5a2', fontWeight: 600 }}>Zen</span> s'assurent du diagnostic, du suivi, des réparations et de la maintenance de vos installations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── L'EXPÉRIENCE ZEN — Redesigned ──────────────────────────────── */}
      <section style={{ background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', padding: '0', overflow: 'hidden' }}>
        <div className="zen-exp-inner">
          {/* Left: full-bleed photo */}
          <div className="zen-exp-photo">
            <img
              src="/Photos%20HD/Photos%20d_ambiance/Zen.webp"
              alt="L'expérience Zen"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 60%, #2a9b96 100%)',
            }} />
          </div>

          {/* Right: content */}
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
              }}>L'expérience Zen</span>
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
              Les atouts de nos <br /> contrats d'entretien
            </motion.h2>

            {[{
                num: '01',
                title: 'Contrat digitalisé avec maintenance téléphonique',
                text: "Votre contrat digitalisé avec une maintenance téléphonique à disposition pour vous accompagner à tout moment en cas de besoin.",
                icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-35.webp',
              },
              {
                num: '02',
                title: 'Espace client personnel',
                text: "Votre espace client personnel pour gérer l'entièreté de votre contrat et de vos interventions, accessible en ligne à tout moment.",
                icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-14.webp',
              },
              {
                num: '03',
                title: 'Contrats flexibles adaptés à vos besoins',
                text: "Des contrats flexibles adaptés à vos besoins.",
                icon: '/Ic%C3%B4nes/CHARTEGRAPHIQUENAOSERVICE-22.webp',
              },
            ].map((item, i) => (
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
      {services.map((svc, i) => (
        <section
          key={svc.id}
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
              }}>
                {svc.title}
              </h2>
              <p style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: 16, lineHeight: '26px', color: '#555', marginBottom: 28,
              }}>
                {svc.desc}
              </p>
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
                    }}>
                      {f}
                    </span>
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

            {/* Left — heading + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={vp} transition={{ duration: 0.8, ease: 'easeOut' }}
              className="cta-banner-left"
            >
              {/* Decorative teal line */}
              <div style={{ width: 48, height: 3, background: '#50b5a2', borderRadius: 2, marginBottom: 28 }} />
              <h2 style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 600,
                letterSpacing: -1.5, color: '#fff', lineHeight: 1.1, marginBottom: 36,
              }}>
                Prêt à protéger <br />
                <span style={{ color: '#50b5a2' }}>vos installations ?</span>
              </h2>
              <Button variant="lime" label="Demander un devis" href="https://form.typeform.com/to/rRhOu7eb" />
            </motion.div>

            {/* Divider */}
            <div className="cta-banner-divider" />

            {/* Right — contact info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={vp} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="cta-banner-right"
            >
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: '#fff', marginBottom: 20,
              }}>
                Une question ?
              </p>
              <p style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 20, fontWeight: 500, color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.5, marginBottom: 36,
              }}>
                Notre équipe est disponible pour vous accompagner et répondre à toutes vos questions.
              </p>

              {/* Phone */}
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

              {/* Email */}
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

      <style jsx global>{`
        /* ── Card grid ── */
        .svc-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        /* ── Card base ── */
        .svc-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8e8e8;
          background: #fff;
          cursor: pointer;
          will-change: transform, box-shadow;
          transform: translateZ(0);
          transition: box-shadow 0.4s cubic-bezier(0.165,0.84,0.44,1),
                      transform 0.4s cubic-bezier(0.165,0.84,0.44,1),
                      background 0.4s ease,
                      border-color 0.4s ease;
        }

        /* ── Image wrapper ── */
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

        /* ── Teal overlay (invisible by default) ── */
        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(42,155,150,0.55) 0%, rgba(80,181,162,0.35) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        /* ── Icon badge ── */
        .svc-card-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: #2a9b96;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(42,155,150,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* ── Top-right arrow bubble ── */
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
          
        /* ── Icon badge ── */
        .svc-card-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: #2a9b96;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(42,155,150,0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          z-index: 5;
        }

        /* ── Top-right arrow bubble ── */
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


        /* ── "En savoir plus" text ── */
        .svc-card-read-more {
          font-family: var(--font-inter), 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #2a9b96;
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          transition: opacity 0.35s ease, max-width 0.4s ease, margin-right 0.3s ease;
          margin-right: 0;
        }

        /* ── Arrow ── */
        .svc-card-arrow {
          font-size: 22px;
          color: #2a9b96;
          font-weight: 500;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        /* ── Hover states ── */
        .svc-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.13);
          transform: translateY(-8px);
          background: #2a9b96;
          border-color: #2a9b96;
        }
        .svc-card:hover .svc-card-desc {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        .svc-card:hover .svc-card-read-more,
        .svc-card:hover .svc-card-arrow {
          color: #fff !important;
        }
        .svc-card:hover .svc-card-img { transform: scale(1.06); }
        .svc-card:hover .svc-card-overlay { opacity: 1; }
        .svc-card:hover .svc-card-badge {
          background: #fff;
          transform: scale(1.08);
          box-shadow: 0 10px 30px rgba(42,155,150,0.55);
        }

        .svc-card:hover .svc-card-top-arrow {
          opacity: 1;
          transform: translate(0,0) scale(1);
        }
        .svc-card:hover .svc-card-read-more {
          opacity: 1;
          max-width: 130px;
          margin-right: 8px;
        }
        .svc-card:hover .svc-card-arrow { transform: translateX(6px); }

        /* ── Stats grid ── */
        .svc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        /* ── L'EXPÉRIENCE ZEN ── */
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

        /* ── CTA Banner ── */
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
        .cta-banner-left, .cta-banner-right {
          padding: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .zen-exp-inner {
            grid-template-columns: 1fr;
          }
          .zen-exp-photo {
            height: 360px;
          }
          .zen-exp-photo > div {
            background: linear-gradient(to bottom, transparent 60%, #2c6262 100%) !important;
          }
          .zen-exp-content {
            padding: 60px 30px;
          }
        }
        @media (max-width: 860px) {
          .cta-banner-inner {
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 70px 0;
          }
          .cta-banner-divider { display: none; }
        }
        @media (max-width: 900px) {
          .svc-detail-row {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .svc-header-row, .stats-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
            margin-bottom: 50px !important;
          }
          .svc-header-row > div, .stats-header-row > div {
            flex: none !important;
            width: 100% !important;
          }
          .svc-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 50px !important;
          }
          .svc-stats-grid h3 { font-size: 60px !important; }
        }
        @media (max-width: 640px) {
          .svc-card-grid { grid-template-columns: 1fr; }
          .svc-stats-grid { grid-template-columns: 1fr !important; }
          .svc-card:hover { transform: none; }
          .svc-card-img { aspect-ratio: 4 / 3; }
        }
        @media (hover: none) {
          .svc-card:hover { transform: none; box-shadow: none; }
          .svc-card { will-change: auto; }
        }
      `}</style>
    </main>
  )
}
