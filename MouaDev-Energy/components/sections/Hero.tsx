'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import ArrowIcon from '@/components/ui/ArrowIcon'

const reveal = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 20px 90px',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, background: '#000', overflow: 'hidden' }}>
        <Image
          src="/Photos HD/Photos d_ambiance/Famille AdobeStock.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-bg-img"
          style={{
            objectFit: 'cover',
            objectPosition: '40% center',
            transform: 'scale(1.05)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 20px' }}>
        <div className="hero-container" style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: 20 }}>

          <div className="hero-text-content" style={{ flex: 1, paddingRight: 32 }}>

            {/* Title row: h1 left, social proof right */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="hero-title-block"
              style={{ marginBottom: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}
            >
              <div>
                <div className="hero-badge" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '6px 14px',
                  borderRadius: 14,
                  marginBottom: 14,
                }}>
                  <svg width="16" height="16" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 4 }}>
                    <rect width="512" height="512" fill="#D52B1E" />
                    <path d="M384 213.33H298.67V128H213.33V213.33H128V298.67H213.33V384H298.67V298.67H384V213.33Z" fill="white" />
                  </svg>
                  <span style={{ color: '#fff', fontFamily: "var(--font-inter), 'Inter', sans-serif", fontSize: 14, fontWeight: 500 }}>
                    Suisse Romande
                  </span>
                </div>
                <h1
                  className="hero-h1"
                  style={{
                    fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                    fontSize: 'clamp(34px, 7vw, 60px)',
                    fontWeight: 600,
                    lineHeight: 1.0,
                    letterSpacing: -1,
                    color: '#fff',
                    maxWidth: 850,
                    margin: 0,
                  }}
                >
                  Zen Énergie Services,<br />votre partenaire<br />de <span style={{ color: '#50B5A2' }}>confiance</span>
                </h1>
              </div>

              {/* Social proof — right of title */}
              <div className="hero-social-proof" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                <div className="hero-avatars-row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {[
                    'https://framerusercontent.com/images/W0YDkN2aIKIGEe2LbILwOdRJAjk.jpg',
                    'https://framerusercontent.com/images/D6NjmeWaBY1FiFMHLr429HxpKRM.jpg',
                    'https://framerusercontent.com/images/jwXvxAQ61mfcjjrQsvoreqxnrMg.jpg',
                    'https://framerusercontent.com/images/84rQ0xS0GSXogxfHmYXKT30ETM.jpg',
                  ].map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Reviewer"
                      className="hero-avatar"
                      style={{
                        width: 36, height: 36, borderRadius: '50%',
                        border: '2px solid rgba(255,255,255,0.3)',
                        marginTop: i === 0 ? 0 : -10, objectFit: 'cover',
                      }}
                    />
                  ))}
                </div>
                <div style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 12, fontWeight: 500, color: '#fff', lineHeight: 1.3, textAlign: 'center',
                }}>
                  <strong style={{ display: 'block', fontSize: 13, fontWeight: 600 }}>100+ avis</strong>
                  <span style={{ color: '#50B5A2', fontSize: 12 }}>4.96 sur 5</span>
                </div>
              </div>
            </motion.div>

            {/* Subtitle — desktop only */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="hero-subtitle"
              style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: 18,
                lineHeight: '28px',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: 500,
                marginBottom: 0,
              }}
            >
              Augmentez la longévité et la performance de vos équipements de chauffage et installations photovoltaïques.
            </motion.p>
          </div>

          {/* CTA + Social proof bottom row */}
          <div className="hero-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 32, flexShrink: 0 }}>
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <Link
                href="/services"
                className="hero-cta-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  borderRadius: 14,
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 17,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  whiteSpace: 'nowrap',
                  background: '#50B5A2',
                  color: '#000',
                  padding: '8px 8px 8px 24px',
                  gap: 24,
                  border: 'none',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const arr = e.currentTarget.querySelector('.hero-btn-arr') as HTMLElement;
                  if (arr) { arr.style.background = '#fff'; arr.style.color = '#000'; }
                  const svg = e.currentTarget.querySelector('.hero-btn-arr svg') as SVGElement;
                  if (svg) svg.querySelectorAll('polyline, path, line').forEach((s) => (s as SVGElement).setAttribute('stroke', '#000'));
                }}
                onMouseLeave={(e) => {
                  const arr = e.currentTarget.querySelector('.hero-btn-arr') as HTMLElement;
                  if (arr) { arr.style.background = '#2c6262'; arr.style.color = '#fff'; }
                  const svg = e.currentTarget.querySelector('.hero-btn-arr svg') as SVGElement;
                  if (svg) svg.querySelectorAll('polyline, path, line').forEach((s) => (s as SVGElement).setAttribute('stroke', '#fff'));
                }}
              >
                <span>Explorer maintenant</span>
                <span
                  className="hero-btn-arr"
                  style={{
                    width: 48, height: 44, borderRadius: 14,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, background: '#2c6262', color: '#fff',
                    transition: 'background 0.2s ease',
                  }}
                >
                  <ArrowIcon direction="right" size={20} strokeColor="currentColor" />
                </span>
              </Link>
            </motion.div>

            {/* Social proof — desktop bottom right */}
            <motion.div
              className="hero-bottom-social"
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}
            >
              <div style={{ display: 'flex' }}>
                {[
                  'https://framerusercontent.com/images/W0YDkN2aIKIGEe2LbILwOdRJAjk.jpg',
                  'https://framerusercontent.com/images/D6NjmeWaBY1FiFMHLr429HxpKRM.jpg',
                  'https://framerusercontent.com/images/jwXvxAQ61mfcjjrQsvoreqxnrMg.jpg',
                  'https://framerusercontent.com/images/84rQ0xS0GSXogxfHmYXKT30ETM.jpg',
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Reviewer"
                    style={{
                      width: 36, height: 36, borderRadius: '50%',
                      border: '2px solid rgba(255,255,255,0.4)',
                      marginLeft: i === 0 ? 0 : -10, objectFit: 'cover',
                    }}
                  />
                ))}
              </div>
              <div style={{
                fontFamily: "var(--font-inter), 'Inter', sans-serif",
                fontSize: 13, fontWeight: 500, color: '#fff', lineHeight: 1.4,
              }}>
                <strong style={{ display: 'block', fontSize: 14, fontWeight: 700 }}>100+ avis</strong>
                <span style={{ color: '#50B5A2' }}>4.96 sur 5 ★</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Desktop: hide title-row social proof, show bottom one */
        .hero-social-proof {
          display: none !important;
        }
        @media (max-width: 640px) {
          .hero-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-bottom: 0 !important;
          }
          .hero-text-content {
            padding-right: 0 !important;
            width: 100% !important;
          }
          .hero-section {
            padding: 0 0 90px !important;
            min-height: 100svh !important;
            justify-content: flex-end !important;
          }
          .hero-content {
            padding: 0 16px !important;
          }
          .hero-title-block {
            margin-bottom: 20px !important;
          }
          .hero-subtitle {
            display: none !important;
          }
          .hero-bottom {
            margin-top: 8px !important;
          }
          .hero-bg-img {
            transform: none !important;
          }
          .hero-h1 {
            font-size: 32px !important;
            letter-spacing: -0.5px !important;
            line-height: 0.95 !important;
          }
          .hero-badge {
            font-size: 12px !important;
            padding: 4px 10px !important;
            margin-bottom: 14px !important;
          }
          .hero-cta-link {
            font-size: 14px !important;
            padding: 6px 6px 6px 16px !important;
            gap: 14px !important;
            border-radius: 10px !important;
          }
          .hero-cta-link .hero-btn-arr {
            width: 36px !important;
            height: 34px !important;
            border-radius: 8px !important;
          }
          /* On mobile: show title-row social proof, hide bottom one */
          .hero-social-proof {
            display: flex !important;
            transform: translateY(12px) !important;
          }
          .hero-bottom-social {
            display: none !important;
          }
          .hero-bottom {
            justify-content: flex-start !important;
          }
          .hero-ticker-track {
            animation-duration: 120s !important;
          }
        }
        .hero-ticker-track {
          animation: ticker 280s linear infinite;
        }
      `}</style>

      {/* Ticker — extracted: stroke 1px white, fill transparent, 700 weight, ~30px/s, container opacity 0.19 */}
      <div
        style={{
          position: 'absolute', bottom: -20, left: 0, right: 0,
          zIndex: 1, overflow: 'clip', whiteSpace: 'nowrap',
          opacity: 0.19,
        }}
      >
        <div className="hero-ticker-track" style={{ display: 'inline-flex' }}>
          {Array(8).fill('Ma maison, Mon confort.        ').map((text, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 120,
                fontWeight: 700,
                color: 'transparent',
                WebkitTextStroke: '1px rgb(255, 255, 255)',
                WebkitTextFillColor: 'rgba(255, 255, 255, 0)',
                lineHeight: '120px',
                letterSpacing: -1,
                whiteSpace: 'pre',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section >
  )
}
