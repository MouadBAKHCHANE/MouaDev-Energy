'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowIcon from '@/components/ui/ArrowIcon'

const navItems = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Nos contrats d\'entretien',
    href: '/services',
    subItems: [
      { label: 'Toutes nos offres', href: '/services' },
      { label: 'Panneaux solaires', href: '/services/panneaux-solaires' },
      { label: 'Pompes à chaleur', href: '/services/pompes-a-chaleur' },
      { label: 'Boiler thermodynamique', href: '/services/boiler-thermodynamique' },
      { label: 'Nettoyage panneaux solaires', href: '/services/nettoyage-panneaux-solaires' },
    ]
  },
  { label: 'À propos', href: '/about-us' },
  { label: 'Actualités', href: '/#news' },
  { label: 'Contact', href: '/contact-us' }
]

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileContractsOpen, setIsMobileContractsOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isDrawerOpen])

  const isScrolled = scrollY > 50
  const textColor = isScrolled ? '#000' : '#fff'
  const isDark = isScrolled

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '12px 20px',
        background: isScrolled ? '#fff' : 'transparent',
        boxShadow: isScrolled ? 'rgba(0,0,0,0.04) 0px 0.6px 0.6px -0.58px, rgba(0,0,0,0.05) 0px 2.3px 2.3px -1.17px, rgba(0,0,0,0.08) 0px 10px 10px -1.75px' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1400,
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', position: 'relative', height: 48, width: 160 }}>
          <img
            src="/Logo complet/Blanc.webp"
            alt="Zen Energie Services"
            style={{
              position: 'absolute', height: 48, width: 'auto', objectFit: 'contain',
              opacity: isDark ? 0 : 1, transition: 'opacity 0.3s ease', pointerEvents: isDark ? 'none' : 'auto',
            }}
          />
          <img
            src="/Logo complet/Vert medium.webp"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute', height: 48, width: 'auto', objectFit: 'contain',
              opacity: isDark ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: isDark ? 'auto' : 'none',
            }}
          />
        </a>

        {/* Right group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>

          {/* Desktop nav pill — hidden on mobile */}
          <div className="header-desktop-nav" style={{
            display: 'flex', alignItems: 'center',
            borderRadius: 14, padding: '4px 8px',
            border: isScrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.2)',
            background: isScrolled ? 'transparent' : 'rgba(255,255,255,0.06)',
            backdropFilter: isScrolled ? 'none' : 'blur(4px)',
            WebkitBackdropFilter: isScrolled ? 'none' : 'blur(4px)',
            transition: 'all 0.3s ease',
          }}>
            {navItems.map((item) => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => { if (item.subItems) setIsDropdownOpen(true) }}
                onMouseLeave={() => { if (item.subItems) setIsDropdownOpen(false) }}
              >
                <Link href={item.href} style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 15, fontWeight: 500, color: textColor,
                  padding: '6px 14px', borderRadius: 14,
                  transition: 'background 0.18s ease, color 0.18s ease',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#50B5A2'; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = textColor }}
                >
                  {item.label}
                  {item.subItems && (
                    <span style={{
                      width: 15, height: 15, borderRadius: '50%', background: textColor,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: isScrolled ? '#fff' : '#000', transition: 'background 0.3s ease',
                    }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3L4 5L6 3" />
                      </svg>
                    </span>
                  )}
                </Link>
                {item.subItems && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: 'absolute', top: '100%', left: 0,
                          paddingTop: 8,
                          zIndex: 100,
                        }}
                      >
                        <div style={{
                          background: '#fff', borderRadius: 20, padding: '12px 10px',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.10)', minWidth: 260,
                          border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: 4,
                        }}>
                          {item.subItems.map((sub) => (
                            <Link key={sub.label} href={sub.href} style={{
                              fontFamily: "var(--font-inter)", fontSize: 14, color: '#333',
                              padding: '10px 16px', borderRadius: 12, textDecoration: 'none', transition: 'all 0.2s ease',
                            }}
                              onMouseEnter={(e) => { e.currentTarget.style.background = '#f0faf8'; e.currentTarget.style.color = '#50B5A2' }}
                              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#333' }}
                            >{sub.label}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Search icon */}
          <button
            className="header-search-btn"
            style={{
              width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'none', border: 'none', cursor: 'pointer', color: textColor, transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#50B5A2'}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = textColor}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Hamburger — always visible, left of CTA */}
          <button onClick={() => setIsDrawerOpen(true)} className="header-hamburger"
            style={{
              width: 44, height: 44, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'none', border: 'none', cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.querySelectorAll('span').forEach(s => s.style.background = '#50B5A2')}
            onMouseLeave={(e) => e.currentTarget.querySelectorAll('span').forEach(s => s.style.background = textColor)}
          >
            {[26, 23, 29].map((w, i) => (
              <span key={i} style={{ display: 'block', width: w, height: 2, background: textColor, transition: 'background 0.2s ease' }} />
            ))}
          </button>

          {/* Desktop CTA — hidden on mobile */}
          <Link href="https://form.typeform.com/to/rRhOu7eb" className="header-desktop-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', borderRadius: 14,
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif", fontSize: 16, fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.18s ease', whiteSpace: 'nowrap' as const,
              background: '#50B5A2', color: '#000', padding: '6px 6px 6px 20px', gap: 20, border: 'none', textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              const arr = e.currentTarget.querySelector('.cta-arrow') as HTMLElement
              if (arr) { arr.style.background = '#fff'; arr.style.color = '#000' }
            }}
            onMouseLeave={(e) => {
              const arr = e.currentTarget.querySelector('.cta-arrow') as HTMLElement
              if (arr) { arr.style.background = '#000'; arr.style.color = '#fff' }
            }}
          >
            Demander une offre
            <span className="cta-arrow" style={{
              width: 40, height: 40, borderRadius: 14, display: 'flex', alignItems: 'center',
              justifyContent: 'center', flexShrink: 0, background: '#000', color: '#fff', transition: 'background 0.18s ease',
            }}>
              <ArrowIcon direction="right" size={20} strokeColor="currentColor" />
            </span>
          </Link>
        </div>

        <style jsx global>{`
          .header-desktop-nav { display: flex; }
          .header-desktop-cta { display: inline-flex; }
          .header-hamburger { display: flex; }
          .drawer-nav-links { display: none; }
          @media (max-width: 1024px) {
            .header-desktop-nav { display: none !important; }
            .header-desktop-cta { display: none !important; }
            .drawer-nav-links { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Off-canvas Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                zIndex: 1001,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: 400,
                background: '#fff',
                zIndex: 1002,
                padding: '24px 32px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
                overflowY: 'auto'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 30,
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Logo */}
              <div style={{ marginBottom: 20, marginTop: 4 }}>
                <img src="/Logo complet/Vert medium.webp" alt="Zen" style={{ height: 38, width: 'auto' }} />
              </div>

              {/* Nav Links — mobile only */}
              <nav className="drawer-nav-links" style={{ flexDirection: 'column', marginBottom: 16 }}>
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => setIsMobileContractsOpen(!isMobileContractsOpen)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '12px 0',
                            borderBottom: '1px solid rgba(0,0,0,0.07)',
                            fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                            fontSize: 17,
                            fontWeight: 600,
                            color: '#000',
                            textAlign: 'left',
                          }}
                        >
                          {item.label}
                          <svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            style={{ transform: isMobileContractsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', flexShrink: 0 }}
                          >
                            <path d="M4 6L8 10L12 6" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {isMobileContractsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div style={{ paddingLeft: 12, paddingBottom: 4, display: 'flex', flexDirection: 'column' }}>
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setIsDrawerOpen(false)}
                                    style={{
                                      fontFamily: "var(--font-inter)",
                                      fontSize: 15,
                                      color: '#555',
                                      padding: '9px 0',
                                      textDecoration: 'none',
                                      borderBottom: '1px solid rgba(0,0,0,0.04)',
                                      transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#50B5A2'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#555'}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsDrawerOpen(false)}
                        style={{
                          display: 'block',
                          fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                          fontSize: 17,
                          fontWeight: 600,
                          color: '#000',
                          padding: '12px 0',
                          textDecoration: 'none',
                          borderBottom: '1px solid rgba(0,0,0,0.07)',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#50B5A2'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#000'}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                {/* Adresse */}
                <div>
                  <h4 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 13, fontWeight: 700, marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#999' }}>Adresse</h4>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: '#444', lineHeight: 1.4, margin: 0 }}>
                    Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h4 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 13, fontWeight: 700, marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#999' }}>Contact</h4>
                  <a href="mailto:contact@zen-energieservices.ch" style={{
                    fontFamily: "var(--font-inter)", fontSize: 12, color: '#50B5A2',
                    textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: 2,
                  }}>
                    contact@zen-energieservices.ch
                  </a>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: '#444' }}>
                    +41 21 512 05 74
                  </div>
                </div>

                {/* Social */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <h4 style={{ fontFamily: "var(--font-space-grotesk)", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#999', margin: 0 }}>Suivez-nous</h4>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <a href="https://www.facebook.com/zen.energie.services/" style={{ color: '#000' }} target="_blank">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/zenenergieservices_suisse/?hl=fr" style={{ color: '#000' }} target="_blank">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div style={{ marginTop: 'auto', paddingTop: 10 }}>
                <Link
                  href="https://form.typeform.com/to/rRhOu7eb"
                  onClick={() => setIsDrawerOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#50B5A2',
                    padding: '6px 6px 6px 18px',
                    borderRadius: 14,
                    textDecoration: 'none',
                    color: '#000',
                    fontWeight: 600,
                    fontSize: 16,
                    fontFamily: "var(--font-barlow)",
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Demander une offre
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    <ArrowIcon direction="right" size={20} strokeColor="#fff" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
