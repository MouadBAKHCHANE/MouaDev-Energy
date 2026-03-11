'use client'

import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

interface PageHeroProps {
  crumbs: Crumb[]
  title: string
  bgImage?: string
}

export default function PageHero({ crumbs, title, bgImage }: PageHeroProps) {
  return (
    <section
      className="page-hero-section"
      style={{
        position: 'relative',
        minHeight: 'clamp(360px, 50vh, 580px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(100px, 15vw, 160px) 20px clamp(40px, 6vw, 80px)',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      {bgImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url("${bgImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            opacity: 0.6,
          }}
        />
      )}

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Content */}
      <div className="page-hero-content" style={{ position: 'relative', zIndex: 1, maxWidth: 1400, margin: '0 auto', width: '100%' }}>
        {/* Breadcrumb */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 24,
            flexWrap: 'wrap',
          }}
        >
          {crumbs.map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {i > 0 && (
                <span
                  style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  /
                </span>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'color 0.18s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#50B5A2' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 14,
                    color: '#50B5A2',
                  }}
                >
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
          animation: heroFadeIn 0.5s ease forwards;
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
