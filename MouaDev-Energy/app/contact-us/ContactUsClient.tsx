'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

interface ContactUsClientProps {
  heroTitle?: string
  heroBgImage?: string
  sectionLabel?: string
  sectionTitle?: string
  formTitle?: string
  submitText?: string
  address?: string
  email?: string
  phone?: string
  googleMapUrl?: string
}

export default function ContactUsClient({
  heroTitle = 'Contactez-nous',
  heroBgImage = '/Photos%20HD/Photos%20d_ambiance/iStock%20Image%201484x707.webp',
  sectionLabel = 'TRAVAILLONS ENSEMBLE',
  sectionTitle = 'Votre partenaire de confiance pour la maintenance énergétique',
  formTitle = 'Une question en tête ?',
  submitText = 'Envoyer le message',
  address = 'Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève',
  email = 'contact@zen-energieservices.ch',
  phone = '+41 21 512 05 74',
  googleMapUrl = 'https://maps.google.com/maps?q=46.167925,6.106813&output=embed&z=17',
}: ContactUsClientProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  // Split address at comma for line break
  const addressParts = address.split(',')
  const addressLine1 = addressParts.slice(0, -1).join(',')
  const addressLine2 = addressParts[addressParts.length - 1]?.trim()

  return (
    <main>
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Contactez-nous' }]}
        title={heroTitle}
        bgImage={heroBgImage}
        compact={true}
      />

      <section className="contact-section" style={{ background: '#fff', padding: '80px 20px' }}>
        <div className="contact-inner" style={{ maxWidth: 1400, margin: '0 auto' }}>

          {/* ── LEFT ── */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut' }}
            className="contact-left"
          >
            <div style={{ marginBottom: 16 }}>
              <SectionLabel text={sectionLabel} />
            </div>
            <h2 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 600, letterSpacing: -2,
              color: '#000', marginBottom: 36, lineHeight: 1.1,
            }}>
              {sectionTitle}
            </h2>

            {/* Address card */}
            <div style={{
              background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', borderRadius: 16, padding: '28px 28px',
              marginBottom: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 10,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#50B5A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 16, fontWeight: 500, color: '#fff', lineHeight: '24px',
              }}>
                {addressLine1},<br />{addressLine2}
              </div>
            </div>

            {/* Email + Phone row */}
            <div className="contact-info-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {/* Email */}
              <div style={{
                background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', borderRadius: 16, padding: '28px 22px',
                display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#50B5A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 13, fontWeight: 500, color: '#fff', lineHeight: '20px', wordBreak: 'break-all',
                }}>
                  {email}
                </div>
              </div>

              {/* Phone */}
              <div style={{
                background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', borderRadius: 16, padding: '28px 22px',
                display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#50B5A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 16, fontWeight: 500, color: '#fff',
                }}>
                  {phone}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — Form ── */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="contact-right"
          >
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 600, letterSpacing: -1.5,
              color: '#000', marginBottom: 32, lineHeight: 1.2,
            }}>
              {formTitle}
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div className="contact-form-grid">

                <div>
                  <label style={labelStyle}>Nom</label>
                  <input
                    type="text" name="name" placeholder="Prénom *"
                    value={formData.name} onChange={handleChange} required
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email" name="email" placeholder="Adresse e-mail *"
                    value={formData.email} onChange={handleChange} required
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Téléphone</label>
                  <input
                    type="tel" name="phone" placeholder="Numéro de téléphone"
                    value={formData.phone} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                  />
                </div>

                <div />

                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message" placeholder="Écrivez votre message..." rows={3}
                    value={formData.message} onChange={handleChange}
                    style={{ ...inputStyle, borderRadius: 10, resize: 'none' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#50B5A2' }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <button
                    type="submit"
                    style={{
                      width: '100%', padding: '16px',
                      borderRadius: 10, background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)', border: 'none',
                      fontSize: 16, fontWeight: 600,
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      color: '#fff', cursor: 'pointer',
                      transition: 'background 0.18s ease, color 0.18s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#50B5A2'; e.currentTarget.style.color = '#000' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)'; e.currentTarget.style.color = '#fff' }}
                  >
                    {submitText}
                  </button>
                </div>

              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Map ── */}
      <section style={{ background: '#fff', paddingBottom: 80 }}>
        <iframe
          src={googleMapUrl.includes('output=embed') ? googleMapUrl : `${googleMapUrl}${googleMapUrl.includes('?') ? '&' : '?'}output=embed`}
          width="100%"
          height="480"
          className="contact-map"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zen Énergie Services — Localisation"
        />
      </section>

      <style>{`
        .contact-inner {
          display: flex;
          gap: 80px;
          align-items: flex-start;
        }
        .contact-left { flex: 0 0 48%; }
        .contact-right { flex: 1; }
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .contact-inner { flex-direction: column; gap: 50px; }
          .contact-left { flex: none; width: 100%; }
        }
        @media (max-width: 640px) {
          .contact-section { padding: 48px 16px !important; }
          .contact-form-grid { grid-template-columns: 1fr; gap: 14px; }
          .contact-info-row { grid-template-columns: 1fr !important; }
          .contact-inner { gap: 36px; }
          .contact-right { width: 100% !important; flex: none !important; }
          .contact-map { height: 280px !important; }
        }
      `}</style>
    </main>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  fontSize: 14, fontWeight: 500,
  color: '#000', marginBottom: 8,
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '13px 18px',
  borderRadius: 10,
  border: '1px solid #e0e0e0',
  fontSize: 15,
  fontFamily: "var(--font-jost), 'Jost', sans-serif",
  background: '#fff',
  outline: 'none',
  color: '#000',
  transition: 'border-color 0.18s ease',
  boxSizing: 'border-box',
}
