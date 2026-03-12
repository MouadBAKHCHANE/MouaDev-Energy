'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  crumbs: Crumb[]
  title: string
  bgImage?: string
  compact?: boolean
}

export default function PageHero({ crumbs, title, bgImage, compact = false }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Smooth spring for silky motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  const scale = useTransform(smoothProgress, [0, 1], [1, 1.06])
  const y     = useTransform(smoothProgress, [0, 1], ['0%', '5%'])

  return (
    <section
      ref={sectionRef}
      className="page-hero-section"
      style={{
        position: 'relative',
        minHeight: compact ? 'clamp(240px, 30vh, 380px)' : 'clamp(300px, 40vh, 480px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: compact ? 'clamp(80px, 10vw, 110px) 20px clamp(20px, 4vw, 40px)' : 'clamp(90px, 12vw, 140px) 20px clamp(30px, 5vw, 60px)',
        background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Background image — parallax zoom on scroll */}
      {bgImage && (
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            scale,
            y,
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAEUlEQVR4nGPQSUrCihiGlgQAZKE8AQyy75wAAAAASUVORK5CYII="
            style={{ objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.75 }}
          />
        </motion.div>
      )}

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.2) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="page-hero-content" style={{ position: 'relative', zIndex: 2, maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {crumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {i > 0 && (
                <span style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
                  /
                </span>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.55)', transition: 'color 0.18s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#50B5A2' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: '#50B5A2' }}>
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: -3,
            color: '#fff',
            margin: 0,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>
      </div>

      <style>{`
        .page-hero-content {
          animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
