'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import PageHero from '@/components/layout/PageHero'
import FAQ from '@/components/sections/FAQ'
import { services } from '@/lib/data'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params?.slug as string

  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        title={service.title}
        bgImage={service.heroImg}
      />

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div
          style={{ maxWidth: 1400, margin: '0 auto' }}
          className="svc-detail-outer"
        >
          <div
            style={{ display: 'flex', gap: 60 }}
            className="svc-detail-layout"
          >
            {/* ── Left: Other Services Nav ───────────────────────────────── */}
            <motion.aside
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ flex: '0 0 280px' }}
              className="svc-detail-sidebar"
            >
              <div
                style={{
                  background: '#f8f8f8',
                  borderRadius: 20,
                  overflow: 'hidden',
                  padding: '10px 0',
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    color: '#999',
                    padding: '16px 20px 8px',
                  }}
                >
                  Other Services
                </p>
                {services.map((s) => {
                  const isCurrent = s.slug === slug
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      style={{
                        display: 'block',
                        padding: '14px 20px',
                        fontSize: 16,
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontWeight: isCurrent ? 600 : 400,
                        color: isCurrent ? '#000' : '#555',
                        background: isCurrent ? '#50B5A2' : 'transparent',
                        borderBottom: '1px solid #e8e8e8',
                        borderRadius: 12,
                        margin: '4px 8px',
                        textDecoration: 'none',
                        transition: 'background 0.18s ease, color 0.18s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (!isCurrent) {
                          (e.currentTarget as HTMLAnchorElement).style.background = '#f0f0f0'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent) {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                        }
                      }}
                    >
                      {s.title}
                    </Link>
                  )
                })}
              </div>
            </motion.aside>

            {/* ── Right: Main Body ───────────────────────────────────────── */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Intro */}
              <motion.p
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "var(--font-jost), 'Jost', sans-serif",
                  fontSize: 20,
                  lineHeight: '30px',
                  fontWeight: 500,
                  color: '#000',
                  marginBottom: 30,
                }}
              >
                {service.intro}
              </motion.p>

              {/* Body Paragraphs */}
              {service.body.map((para, i) => (
                <motion.p
                  key={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.05 }}
                  style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 18,
                    lineHeight: '28px',
                    color: '#333',
                    marginBottom: 20,
                  }}
                >
                  {para}
                </motion.p>
              ))}

              {/* Includes Heading */}
              <motion.h3
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#000',
                  marginTop: 40,
                  marginBottom: 20,
                }}
              >
                Solar energy solutions service includes
              </motion.h3>

              {/* Includes List */}
              <motion.ul
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
              >
                {service.includes.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        background: '#50B5A2',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6.5L4.5 9L10 3"
                          stroke="#000"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 17,
                        color: '#333',
                        lineHeight: '26px',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </motion.ul>

              {/* Working Process Heading */}
              <motion.h3
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#000',
                  marginTop: 40,
                  marginBottom: 20,
                }}
              >
                Our working process
              </motion.h3>

              {/* Steps Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 20,
                }}
                className="svc-steps-grid"
              >
                {service.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
                    style={{
                      background: '#f8f8f8',
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#50B5A2',
                        lineHeight: 1,
                        marginBottom: 12,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h4
                      style={{
                        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#000',
                        marginBottom: 8,
                        lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 15,
                        color: '#555',
                        lineHeight: '22px',
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form Section ──────────────────────────────────────────── */}
      <ContactSection />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .svc-detail-layout {
            flex-direction: column !important;
          }
          .svc-detail-sidebar {
            flex: none !important;
            width: 100% !important;
          }
          .svc-contact-layout {
            flex-direction: column !important;
          }
          .svc-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .svc-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}

/* ── Contact Section Component ──────────────────────────────────────────── */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section style={{ background: '#f8f8f8', padding: '100px 20px' }}>
      <div
        style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 60 }}
        className="svc-contact-layout"
      >
        {/* Left: Contact Info */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ flex: '0 0 400px' }}
          className="svc-contact-info"
        >
          <p
            style={{
              fontFamily: "var(--font-inter), 'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: 16,
            }}
          >
            CONTACT US
          </p>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 500,
              letterSpacing: -2,
              color: '#000',
              lineHeight: 1.15,
              marginBottom: 40,
            }}
          >
            Have any questions on your minds!
          </h2>

          {/* Contact Items */}
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: 'Address',
              value: '123 Solar Street, Green City, GC 10001',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              label: 'Email',
              value: 'info@solshine.com',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
              label: 'Phone',
              value: '+1 (555) 123-4567',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  background: '#50B5A2',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </span>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), 'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#888',
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 16,
                    color: '#000',
                    lineHeight: '24px',
                  }}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          style={{ flex: 1 }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: 100,
                border: '1px solid #e8e8e8',
                fontSize: 16,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                outline: 'none',
                background: '#fff',
                color: '#000',
                transition: 'border-color 0.18s ease',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: 100,
                border: '1px solid #e8e8e8',
                fontSize: 16,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                outline: 'none',
                background: '#fff',
                color: '#000',
                transition: 'border-color 0.18s ease',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: 100,
                border: '1px solid #e8e8e8',
                fontSize: 16,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                outline: 'none',
                background: '#fff',
                color: '#000',
                transition: 'border-color 0.18s ease',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: 20,
                border: '1px solid #e8e8e8',
                fontSize: 16,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                outline: 'none',
                background: '#fff',
                color: '#000',
                resize: 'vertical',
                transition: 'border-color 0.18s ease',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#50B5A2' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#e8e8e8' }}
            />

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: 100,
                background: '#50B5A2',
                border: 'none',
                fontSize: 17,
                fontWeight: 600,
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                color: '#000',
                cursor: 'pointer',
                transition: 'background 0.18s ease, color 0.18s ease',
                letterSpacing: -0.3,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#000'
                e.currentTarget.style.color = '#50B5A2'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#50B5A2'
                e.currentTarget.style.color = '#000'
              }}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .svc-contact-info {
            flex: none !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
