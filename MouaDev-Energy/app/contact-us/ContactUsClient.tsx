'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import { toCSS, TextStyle } from '@/lib/textStyle'

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
  heroTitleStyle?: TextStyle | null
  sectionTitleStyle?: TextStyle | null
  formTitleStyle?: TextStyle | null
  sectionOrder?: { sectionId: string; enabled?: boolean }[]
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
  googleMapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d88390.22443205377!2d6.1386482!3d46.1866878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b159ea4d829%3A0x8e6093da28a7d236!2sZen%20%C3%89nergie%20Services%20Suisse!5e0!3m2!1sen!2sch!4v1786990556734!5m2!1sen!2sch',
  heroTitleStyle,
  sectionTitleStyle,
  formTitleStyle,
  sectionOrder,
}: ContactUsClientProps) {
  const show = (id: string) => {
    if (!sectionOrder?.length) return true
    const entry = sectionOrder.find((s) => s.sectionId === id)
    return entry ? entry.enabled !== false : true
  }
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || 'Erreur lors de l\'envoi.')
        setStatus('error')
      } else {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
      }
    } catch {
      setErrorMsg('Erreur réseau. Veuillez réessayer.')
      setStatus('error')
    }
  }

  // Split address at comma for line break
  const addressParts = address.split(',')
  const addressLine1 = addressParts.slice(0, -1).join(',')
  const addressLine2 = addressParts[addressParts.length - 1]?.trim()

  return (
    <main>
      {show('hero') && (
        <PageHero
          crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Contactez-nous' }]}
          title={heroTitle}
          bgImage={heroBgImage}
          compact={true}
          titleStyle={toCSS(heroTitleStyle)}
        />
      )}

      {show('contactForm') && (
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
                color: '#000', marginBottom: 34, lineHeight: 1.1,
                ...toCSS(sectionTitleStyle),
              }}>
                {sectionTitle}
              </h2>

              {/* Address card */}
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', borderRadius: 16, padding: '20px 24px',
                  marginBottom: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 7,
                  textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.18s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light, #50b5a2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 16, fontWeight: 500, color: '#fff', lineHeight: '24px',
                }}>
                  {addressLine1},<br />{addressLine2}
                </div>
              </a>

              {/* Email + Phone row */}
              <div className="contact-info-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', borderRadius: 16, padding: '20px 20px',
                    display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center', textAlign: 'center',
                    textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.18s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light, #50b5a2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 13, fontWeight: 500, color: '#fff', lineHeight: '20px', wordBreak: 'break-all',
                  }}>
                    {email}
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  style={{
                    background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', borderRadius: 16, padding: '20px 20px',
                    display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center', textAlign: 'center',
                    textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.18s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light, #50b5a2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 16, fontWeight: 500, color: '#fff',
                  }}>
                    {phone}
                  </div>
                </a>
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
                ...toCSS(formTitleStyle),
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
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email" name="email" placeholder="Adresse e-mail *"
                      value={formData.email} onChange={handleChange} required
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel" name="phone" placeholder="Numéro de téléphone"
                      value={formData.phone} onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
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
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-primary-light, #50b5a2)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e0e0e0' }}
                    />
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    {status === 'success' && (
                      <div style={{
                        background: '#e6f7f5', border: '1px solid #2a9b96', borderRadius: 10,
                        padding: '14px 20px', marginBottom: 16, color: '#2c6262', fontWeight: 600,
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      }}>
                        Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                      </div>
                    )}
                    {status === 'error' && (
                      <div style={{
                        background: '#fef2f2', border: '1px solid #f87171', borderRadius: 10,
                        padding: '14px 20px', marginBottom: 16, color: '#b91c1c', fontWeight: 500,
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      }}>
                        {errorMsg}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        width: '100%', padding: '16px',
                        borderRadius: 10, background: 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)', border: 'none',
                        fontSize: 16, fontWeight: 600,
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        color: '#fff', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        opacity: status === 'loading' ? 0.7 : 1,
                        transition: 'background 0.18s ease, color 0.18s ease',
                      }}
                      onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.background = 'var(--color-primary-light, #50b5a2)'; e.currentTarget.style.color = '#000' }}}
                      onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%)'; e.currentTarget.style.color = '#fff' }}
                    >
                      {status === 'loading' ? 'Envoi en cours…' : submitText}
                    </button>
                  </div>

                </div>
              </form>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Map ── */}
      {show('contactForm') && (
        <section style={{ background: '#fff' }}>
          <iframe
            src={googleMapUrl.includes('output=embed') || googleMapUrl.includes('/maps/embed') ? googleMapUrl : `${googleMapUrl}${googleMapUrl.includes('?') ? '&' : '?'}output=embed`}
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
      )}

      <style>{`
        .contact-inner {
          display: flex;
          gap: 80px;
          align-items: stretch;
        }
        .contact-left { flex: 0 0 48%; display: flex; flex-direction: column; }
        /* Ancre les cartes info en bas de colonne, alignées avec le bas du formulaire */
        .contact-left > a[href^="https://maps"] { margin-top: auto; }
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
