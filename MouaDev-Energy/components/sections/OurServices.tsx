'use client'

import { useState, useLayoutEffect, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { urlFor } from '@/lib/sanity'
import { toCSS, TextStyle } from '@/lib/textStyle'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const defaultSlides = [
  {
    img: '/Photos%20HD/Photos%20produits/Panneaux%20solaires/man-worker-firld-by-solar-panels.webp',
    name: 'Panneaux solaires',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp',
    href: '/services/panneaux-solaires',
    accent: 'var(--color-primary-light, #50b5a2)',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Pompes%20a%CC%80%20chaleur%20avantages%20et%20inconve%CC%81nients.webp',
    name: 'Pompes à chaleur',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp',
    href: '/services/pompe-a-chaleur',
    accent: '#e8552c',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Ajustement%20de%20re%CC%81troe%CC%81clairage.webp',
    name: 'Boiler thermodynamique',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp',
    href: '/services/boiler-thermodynamique',
    accent: '#0c2a54',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Nettoyage%20-%20PV/1789536761.webp',
    name: 'Nettoyage panneaux solaires',
    icon: '/icons/CHARTEGRAPHIQUENAOSERVICE-23.webp',
    href: '/services/pv-clean',
    accent: 'var(--color-primary-light, #50b5a2)',
  },
]

interface OurServicesProps {
  label?: string
  title?: string
  desc?: string
  cta?: string
  ctaLink?: string
  cards?: Array<{ title: string; image?: any; icon?: any; link: string }>
  titleStyle?: TextStyle
  descStyle?: TextStyle
}

export default function OurServices({
  label = 'NOS SERVICES',
  title = 'Des solutions énergétiques sur mesure adaptées à vos besoins',
  desc = "Notre équipe conçoit et installe des systèmes d'énergie solaire personnalisés basés sur votre consommation, la configuration de votre propriété et votre budget.",
  cta = "Découvrir nos offres d'entretien",
  ctaLink = '/services',
  cards,
  titleStyle,
  descStyle,
}: OurServicesProps) {
  const slides = (cards && cards.length > 0)
    ? cards.map((card, i) => ({
        img: card.image?.asset ? urlFor(card.image).width(900).url() : defaultSlides[i]?.img ?? '',
        name: card.title ?? defaultSlides[i]?.name ?? '',
        icon: card.icon?.asset ? urlFor(card.icon).url() : defaultSlides[i]?.icon ?? '',
        href: card.link ?? defaultSlides[i]?.href ?? '/',
        accent: defaultSlides[i]?.accent ?? 'var(--color-primary-light, #50b5a2)',
      }))
    : defaultSlides

  // Infinite carousel: [clone_last, s0, s1, s2, s3, clone_first]
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]]

  const [active, setActive] = useState(1)
  const [animated, setAnimated] = useState(true)
  const lockRef = useRef(false)

  const prev = () => {
    if (lockRef.current) return
    lockRef.current = true
    setAnimated(true)
    setActive(i => i - 1)
  }
  const next = () => {
    if (lockRef.current) return
    lockRef.current = true
    setAnimated(true)
    setActive(i => i + 1)
  }

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== 'transform') return
    if (active === 0) {
      setAnimated(false)
      setActive(slides.length)
    } else if (active === extendedSlides.length - 1) {
      setAnimated(false)
      setActive(1)
    } else {
      lockRef.current = false
    }
  }

  useLayoutEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => {
        setAnimated(true)
        lockRef.current = false
      })
      return () => cancelAnimationFrame(id)
    }
  }, [animated])

  // Auto-scroll on mobile (4s interval, pauses on user interaction)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const pausedRef = useRef(false)

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      if (!pausedRef.current && !lockRef.current) {
        setAnimated(true)
        lockRef.current = true
        setActive(i => i + 1)
      }
    }, 4000)
  }, [])

  const pauseAutoPlay = useCallback(() => {
    pausedRef.current = true
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    // Resume after 8s of inactivity
    const resume = setTimeout(() => {
      pausedRef.current = false
      startAutoPlay()
    }, 8000)
    return () => clearTimeout(resume)
  }, [startAutoPlay])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    if (mq.matches) startAutoPlay()
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) startAutoPlay()
      else if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
    mq.addEventListener('change', handler)
    return () => {
      mq.removeEventListener('change', handler)
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [startAutoPlay])

  const handlePrev = () => { pauseAutoPlay(); prev() }
  const handleNext = () => { pauseAutoPlay(); next() }
  const handleDot = (i: number) => { pauseAutoPlay(); setAnimated(true); setActive(i + 1) }

  const realIndex = active === 0
    ? slides.length - 1
    : active === extendedSlides.length - 1
      ? 0
      : active - 1

  return (
    <section className="our-svc-section" style={{ padding: '40px 20px 100px', background: '#fff' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Text + CTA above cards */}
        <motion.div
          variants={reveal} initial="hidden" animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <SectionLabel text={label} />
        </motion.div>
        <motion.h2
          variants={reveal} initial="hidden" animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.37 }}
          className="our-svc-h2"
          style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontWeight: 500,
            color: '#000', maxWidth: 800, margin: '16px auto 16px', textAlign: 'center',
            ...toCSS(titleStyle),
          }}
        >
          {title}
        </motion.h2>
        <motion.p
          variants={reveal} initial="hidden" animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.42 }}
          className="our-svc-body"
          style={{
            fontFamily: "var(--font-jost), 'Jost', sans-serif",
            fontSize: 18, fontWeight: 400, lineHeight: '28px', color: '#555',
            maxWidth: 850, margin: '0 auto 30px', textAlign: 'center',
            ...toCSS(descStyle),
          }}
        >
          {desc}
        </motion.p>
        <motion.div
          variants={reveal} initial="hidden" animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.48 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}
        >
          <Button variant="lime" label={cta} href={ctaLink} />
        </motion.div>

        {/* Desktop grid */}
        <div className="svc-grid-container">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              variants={reveal} initial="hidden" animate="visible"
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + i * 0.1 }}
            >
              <motion.div initial="rest" whileHover="hover" animate="rest"
                style={{ display: 'block', borderRadius: 'var(--card-radius, 24px)', overflow: 'hidden', position: 'relative', aspectRatio: '0.73', background: '#000', cursor: 'pointer' }}
              >
                <Link href={slide.href} style={{ display: 'contents', textDecoration: 'none' }}>
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image src={slide.img} alt={slide.name}
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 450px"
                      style={{ objectFit: 'cover', objectPosition: 'center center', opacity: 0.9 }}
                    />
                  </motion.div>
                  <div style={{ position: 'absolute', inset: 0, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 70%, #000 100%)', zIndex: 2 }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <motion.div
                        variants={{ rest: { opacity: 0, scale: 0.7, y: -8 }, hover: { opacity: 1, scale: 1, y: 0 } }}
                        transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
                        style={{ width: 50, height: 50, borderRadius: '50%', background: slide.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.35)', flexShrink: 0 }}
                      >
                        <ArrowUpRight size={24} color="#fff" strokeWidth={2.5} />
                      </motion.div>
                    </div>
                    <div>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ width: 44, height: 44, background: slide.accent, WebkitMask: `url("${slide.icon}") center/contain no-repeat`, mask: `url("${slide.icon}") center/contain no-repeat` }} />
                      </div>
                      <h3 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 'clamp(22px, 2.2vw, 30px)', fontWeight: 600, lineHeight: 1.1, color: '#fff', margin: 0, textAlign: 'left', letterSpacing: -1 }}>
                        {slide.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="svc-carousel">
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--card-radius, 24px)' }}>
            <div
              className="svc-carousel-track"
              style={{ transform: `translateX(${-active * 100}%)`, transition: animated ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none' }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSlides.map((slide, i) => (
                <div key={i} className="svc-carousel-slide">
                  <Link href={slide.href} className="svc-card-link" style={{ display: 'block', textDecoration: 'none', borderRadius: 20, overflow: 'hidden', position: 'relative', aspectRatio: '1.1', background: '#000' }}>
                    <Image src={slide.img} alt={slide.name} fill quality={95} sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center center', opacity: 0.9 }} />
                    <div style={{ position: 'absolute', inset: 0, padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 70%, #000 100%)', zIndex: 2 }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div className="svc-card-arrow" style={{ width: 38, height: 38, borderRadius: '50%', background: slide.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ArrowUpRight size={20} color="#fff" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div>
                        <div style={{ marginBottom: 8 }}>
                          <div style={{ width: 32, height: 32, background: slide.accent, WebkitMask: `url("${slide.icon}") center/contain no-repeat`, mask: `url("${slide.icon}") center/contain no-repeat` }} />
                        </div>
                        <h3 style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 600, lineHeight: 1.1, color: '#fff', margin: 0, letterSpacing: -0.5 }}>
                          {slide.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <button onClick={handlePrev} className="svc-arrow svc-arrow-left" aria-label="Précédent">
              <ChevronLeft size={22} strokeWidth={2} />
            </button>
            <button onClick={handleNext} className="svc-arrow svc-arrow-right" aria-label="Suivant">
              <ChevronRight size={22} strokeWidth={2} />
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => handleDot(i)}
                style={{ width: i === realIndex ? 24 : 8, height: 8, borderRadius: 4, background: i === realIndex ? 'var(--color-primary-light, #50b5a2)' : '#ddd', border: 'none', padding: 0, cursor: 'pointer', transition: 'all 0.3s ease' }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
      <style>{`
        .our-svc-h2 {
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.1;
          letter-spacing: -2px;
        }
        .svc-grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .svc-carousel {
          display: none;
        }
        @media (max-width: 1200px) {
          .svc-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .our-svc-section {
            padding: 60px 16px !important;
          }
          .our-svc-h2 {
            font-size: 24px !important;
            line-height: 1.15 !important;
            letter-spacing: -0.8px !important;
          }
          .svc-grid-container {
            display: none;
          }
          .svc-carousel {
            display: block;
          }
          .svc-carousel-track {
            display: flex;
          }
          .svc-carousel-slide {
            flex: 0 0 100%;
            width: 100%;
          }
          .svc-card-arrow {
            opacity: 0;
            transform: scale(0.7) translateY(-8px);
            transition: opacity 0.3s ease, transform 0.3s ease;
          }
          .svc-card-link:hover .svc-card-arrow {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          .svc-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: none;
            background: rgba(255,255,255,0.85);
            backdrop-filter: blur(6px);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #333;
            z-index: 10;
            box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            transition: background 0.2s ease, color 0.2s ease;
          }
          .svc-arrow-left {
            left: 12px;
          }
          .svc-arrow-right {
            right: 12px;
          }
          .svc-arrow:active {
            background: var(--color-primary-light, #50b5a2);
            color: #fff;
          }
        }
      `}</style>
    </section>
  )
}
