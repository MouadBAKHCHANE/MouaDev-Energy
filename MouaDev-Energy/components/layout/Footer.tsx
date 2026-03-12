'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const brandGreen = '#50B5A2'

  const usefulLinks = [
    { text: 'Accueil', href: '/' },
    { text: 'À propos', href: '/about-us' },
    { text: 'Nos contrats d\'entretien', href: '/services' },
    { text: 'Notre équipe', href: '/team' },
    { text: 'Actualités', href: '/#news' },
    { text: 'Contactez-nous', href: '/contact-us' },
  ]

  const topContactItems = [
    {
      label: 'Téléphone',
      value: '+41 21 512 05 74',
      href: 'tel:+41215120574',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      label: 'Email',
      value: 'contact@zen-energieservices.ch',
      href: 'mailto:contact@zen-energieservices.ch',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          <rect width="20" height="16" x="2" y="4" rx="2" />
        </svg>
      )
    },
    {
      label: 'Localisation',
      value: 'Genève, Suisse',
      href: 'https://www.google.com/maps/place/Zen+%C3%89nergie+Services+Suisse/@46.1679287,6.1042381,17z/data=!3m1!4b1!4m6!3m5!1s0x478c7b159ea4d829:0x8e6093da28a7d236!8m2!3d46.167925!4d6.106813!16s%2Fg%2F11x2l3y6bv?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
          <path d="M15 5.764v15" />
          <path d="M9 3.236v15" />
        </svg>
      )
    },
  ]

  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/zen.energie.services/',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/zenenergieservices_suisse/?hl=fr',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
  ]

  return (
    <footer style={{ background: '#2c6262', color: '#fff', padding: '40px 20px 20px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* TOP BAR: Logo and Contact Blocks */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 30,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: 30,
          flexWrap: 'wrap',
          gap: 20
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/Logo complet/Blanc.webp" alt="Zen Energie Services" style={{ height: 40, width: 'auto' }} />
          </Link>

          {/* Contact Blocks */}
          <div style={{ display: 'flex', gap: 30, flexWrap: 'wrap' }}>
            {topContactItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: brandGreen,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000'
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 12,
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: 2
                  }}>{item.label}</div>
                  <div style={{
                    fontFamily: "var(--font-barlow)",
                    fontSize: 16,
                    fontWeight: 600
                  }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* MAIN GRID: 4 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 30
        }}>
          {/* Col 1: About */}
          <div>
            <img
              src="/Logo image/Blanc.webp"
              alt=""
              style={{ height: 36, width: 'auto', marginBottom: 14, opacity: 0.9 }}
            />
            <h4 style={{ fontFamily: "var(--font-barlow)", fontSize: 18, fontWeight: 600, marginBottom: 15 }}>À propos de Zen</h4>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.88)', maxWidth: 260 }}>
              Votre partenaire de confiance pour la maintenance et l’entretien de vos installations énergétiques en Suisse Romande.
            </p>
            {/* Social Icons moved here */}
            <div style={{ display: 'flex', gap: 12, marginTop: 15 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  style={{ color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-barlow)", fontSize: 18, fontWeight: 600, marginBottom: 15 }}>Liens Rapides</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {usefulLinks.map((link) => (
                <li key={link.text} style={{ marginBottom: 8 }}>
                  <Link href={link.href} style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    color: 'rgba(255, 255, 255, 0.88)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.88)'}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Information */}
          <div>
            <h4 style={{ fontFamily: "var(--font-barlow)", fontSize: 18, fontWeight: 600, marginBottom: 15 }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zm-9 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />, text: 'Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève' },
                { icon: <path d="M4 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4z M22 7l-10 7L2 7" />, text: 'contact@zen-energieservices.ch' },
                { icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />, text: '+41 21 512 05 74' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={brandGreen} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 4 }}>
                    {item.icon}
                  </svg>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.3 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ fontFamily: "var(--font-barlow)", fontSize: 18, fontWeight: 600, marginBottom: 15 }}>Newsletter</h4>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: 'rgba(255, 255, 255, 0.88)', marginBottom: 15 }}>
              Inscrivez-vous pour recevoir nos dernières actualités et offres.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
              <input
                type="email"
                placeholder="Votre adresse email"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  padding: '10px 16px',
                  borderRadius: 10,
                  outline: 'none',
                  fontSize: 16,
                  fontFamily: "var(--font-inter)",
                  width: '100%'
                }}
              />
              <button style={{
                background: brandGreen,
                color: '#000',
                border: 'none',
                borderRadius: 10,
                padding: '10px 20px',
                fontWeight: 600,
                fontSize: 16,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.filter = 'brightness(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.filter = 'none'
                }}
              >
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Policy, Copyright, Social */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 20,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          flexWrap: 'wrap',
          gap: 15
        }}>
          {/* Policy Links */}
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
            <Link href="/legal/mentions-legales" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)'}>MENTIONS LÉGALES</Link>
            <Link href="/legal/conditions-generales-utilisation" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)'}>CONDITIONS GÉNÉRALES D'UTILISATION</Link>
            <Link href="/legal/conditions-generales-vente" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)'}>CONDITIONS GÉNÉRALES DE VENTE</Link>
            <Link href="/legal/conditions-generales-entretien" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)'}>CONDITIONS GÉNÉRALES D'ENTRETIEN</Link>
            <Link href="/legal/politique-confidentialite-cookies" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)'}>POLITIQUE DE CONFIDENTIALITÉ & COOKIES</Link>
          </div>

          {/* Copyright */}
          <div style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: 'rgba(255, 255, 255, 0.65)' }}>
            &copy; 2026 Zen Énergie Services Suisse. Tous droits réservés.
          </div>


        </div>
      </div>
    </footer>
  )
}
