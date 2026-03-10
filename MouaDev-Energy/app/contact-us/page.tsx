'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main>
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Contactez-nous' }]}
        title="Contactez-nous"
        bgImage="https://framerusercontent.com/images/gY3cWZMLXhPg9FmxaSD4I4kAPRM.jpg"
      />

      {/* ── Contact Section ───────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '60px 20px' }}>
        <div
          className="contact-inner"
          style={{ maxWidth: 1400, margin: '0 auto' }}
        >
          {/* ── Left column ─────────────────────────────────────────────── */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="contact-left"
          >
            <div style={{ marginBottom: 20 }}>
              <SectionLabel text="TRAVAILLONS ENSEMBLE" />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                fontSize: 42,
                fontWeight: 600,
                letterSpacing: -1,
                color: '#000',
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              Votre partenaire de confiance pour la maintenance énergétique
            </h2>

            {/* Contact info items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
              {/* Address */}
              <ContactInfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Notre localisation"
                value="Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève"
              />
              {/* Email */}
              <ContactInfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="Email"
                value="contact@zen-energieservices.ch"
              />
              {/* Phone */}
              <ContactInfoItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
                label="Téléphone"
                value="+41 21 512 05 74"
              />
            </div>
          </motion.div>

          {/* ── Right column — form ──────────────────────────────────────── */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="contact-right"
          >
            <div
              style={{
                background: '#f8f8f8',
                borderRadius: 30,
                padding: 35,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  marginBottom: 20,
                  color: '#000',
                }}
              >
                Une question ? Écrivez-nous.
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Adresse email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  {/* Message — spans full width */}
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      borderRadius: 20,
                      resize: 'vertical',
                      gridColumn: '1 / -1',
                    }}
                  />
                  {/* Submit */}
                  <SubmitButton />
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .contact-inner {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .contact-left {
          flex: 0 0 45%;
        }
        .contact-right {
          flex: 1;
        }
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .contact-inner {
            flex-direction: column;
            gap: 50px;
          }
          .contact-left {
            flex: none;
          }
        }
        @media (max-width: 600px) {
          .contact-form-grid {
            grid-template-columns: 1fr;
          }
          .contact-form-grid textarea,
          .contact-form-grid button {
            grid-column: 1 / -1 !important;
          }
        }
      `}</style>
    </main>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 22px',
  borderRadius: 50,
  border: '1px solid #e8e8e8',
  fontSize: 16,
  fontFamily: "var(--font-inter), 'Inter', sans-serif",
  background: '#fff',
  outline: 'none',
  color: '#000',
  boxSizing: 'border-box',
}

function SubmitButton() {
  const brandGreen = '#50B5A2'
  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = '#000'
    e.currentTarget.style.color = '#fff'
  }
  const handleLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = brandGreen
    e.currentTarget.style.color = '#000'
  }

  return (
    <button
      type="submit"
      style={{
        gridColumn: '1 / -1',
        width: '100%',
        background: brandGreen,
        color: '#000',
        padding: 16,
        borderRadius: 100,
        fontSize: 17,
        fontWeight: 600,
        fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
        cursor: 'pointer',
        transition: 'all 0.18s ease',
        border: 'none',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Envoyer le message
    </button>
  )
}

interface ContactInfoItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

function ContactInfoItem({ icon, label, value }: ContactInfoItemProps) {
  const brandGreen = '#50B5A2'
  return (
    <div style={{ display: 'flex', gap: 15, alignItems: 'flex-start' }}>
      {/* Icon circle */}
      <div
        style={{
          width: 52,
          height: 52,
          minWidth: 52,
          background: `${brandGreen}26`, // 15% opacity
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>
      {/* Text */}
      <div>
        <h6
          style={{
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            fontSize: 14,
            color: '#777',
            fontWeight: 500,
            marginBottom: 4,
            margin: '0 0 4px',
          }}
        >
          {label}
        </h6>
        <p
          style={{
            fontFamily: "var(--font-inter), 'Inter', sans-serif",
            fontSize: 16,
            color: '#000',
            margin: 0,
            lineHeight: '24px',
          }}
        >
          {value}
        </p>
      </div>
    </div>
  )
}
