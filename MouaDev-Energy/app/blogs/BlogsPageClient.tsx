'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import ArrowIcon from '@/components/ui/ArrowIcon'
import { urlFor } from '@/lib/sanity'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

const cardReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

interface ArticleData {
  slug: string
  title: string
  coverImage?: any
  coverImg: string
  readTime: string
}

interface FaqData {
  question: string
  answerIntro?: string
  answerBullets?: { bold?: string; text: string }[]
  answerOutro?: string
  answerLink?: { text: string; href: string }
}

interface Props {
  articles: ArticleData[]
  faqs: FaqData[]
}

export default function BlogsPageClient({ articles, faqs }: Props) {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [visibleCount, setVisibleCount] = useState(6)

  return (
    <main>
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Actualités' }]}
        title="Actualités"
        bgImage="/Photos%20HD/Paysages%20suisses/AdobeStock_277430203.webp"
        compact={true}
      />

      {/* ── Article Grid ── */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>

          {/* 3-col grid */}
          <div className="bl-grid">
            {articles.slice(0, visibleCount).map((article, i) => (
              <Link key={article.slug} href={`/blogs/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div
                  variants={cardReveal} initial="hidden" whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: (i % 3) * 0.12 }}
                  className="bl-card"
                >
                  {/* Image + overlay */}
                  <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', marginBottom: 18 }}>
                    <img
                      src={article.coverImage ? urlFor(article.coverImage).width(600).url() : article.coverImg} alt={article.title}
                      style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      className="bl-card-img"
                    />
                    {/* Bottom overlay tag */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '32px 14px 12px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
                      display: 'flex', alignItems: 'center', gap: 14,
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontSize: 13, color: '#fff',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Zen Énergie
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="bl-card-title" style={{
                    fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                    fontSize: 20, fontWeight: 600, lineHeight: '28px',
                    color: '#000', margin: '0 0 14px 0',
                    transition: 'color 0.2s ease',
                  }}>{article.title}</h3>

                  {/* Arrow */}
                  <span className="bl-card-arrow" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 40, height: 40, borderRadius: '50%',
                    border: '1px solid #e8e8e8', color: '#000',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                  }}>
                    <ArrowIcon direction="diagonal" size={16} strokeColor="currentColor" />
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < articles.length && (
            <motion.div
              variants={reveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}
            >
              <button
                onClick={() => setVisibleCount(prev => prev + 3)}
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: '#50B5A2', color: '#000',
                  borderRadius: 14, padding: '12px 32px',
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 16, fontWeight: 600, border: 'none', cursor: 'pointer',
                  transition: 'background 0.18s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = '#3da090'}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = '#50B5A2'}
              >
                Voir plus d'articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── FAQ — split layout ── */}
      <section style={{ background: '#fff', padding: '100px 20px', borderTop: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Title — full width above the row */}
          <motion.div
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ marginBottom: 16 }}
          >
            <SectionLabel text="QUESTIONS FRÉQUENTES" />
          </motion.div>
          <motion.h2
            variants={reveal} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{
              fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
              fontSize: 48, fontWeight: 600, letterSpacing: -2,
              color: '#000', marginBottom: 48, lineHeight: '56px',
            }}
          >
            Tout ce que vous devez savoir
          </motion.h2>

          <div className="bl-faq-row">

            {/* Left — accordion */}
            <div className="bl-faq-left">
              {faqs.map((faq, i) => {
                const isActive = activeIdx === i
                return (
                  <motion.div
                    key={i}
                    variants={reveal} initial="hidden" whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.07 }}
                    style={{ borderBottom: '1px solid #e8e8e8' }}
                  >
                    <div
                      onClick={() => setActiveIdx(activeIdx === i ? -1 : i)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: 16, cursor: 'pointer', padding: '22px 0',
                        fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                        fontSize: 18, fontWeight: 500, color: '#000',
                      }}
                    >
                      <span>{faq.question}</span>
                      <span style={{
                        width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                        border: isActive ? '1px solid #50B5A2' : '1px solid #e8e8e8',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: isActive ? '#50B5A2' : 'transparent',
                        fontSize: 22, lineHeight: 1,
                        transform: isActive ? 'rotate(45deg)' : 'none',
                        transition: 'all 0.2s ease',
                      }}>+</span>
                    </div>
                    <div style={{
                      maxHeight: isActive ? 600 : 0, overflow: 'hidden',
                      transition: 'max-height 0.35s ease', paddingBottom: isActive ? 20 : 0,
                    }}>
                      <div style={{
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                        fontSize: 16, lineHeight: '26px', color: '#777', margin: 0,
                      }}>
                        {faq.answerIntro && (
                          <span>
                            {faq.answerIntro}
                            {faq.answerLink && !faq.answerBullets?.length && !faq.answerOutro && (
                              <>{' '}<Link href={faq.answerLink.href} style={{ color: '#50B5A2', fontWeight: 600 }}>{faq.answerLink.text}</Link>.</>
                            )}
                          </span>
                        )}
                        {faq.answerBullets && faq.answerBullets.length > 0 && (
                          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {faq.answerBullets.map((b, bi) => (
                              <div key={bi} style={{ display: 'flex', gap: 8 }}>
                                <span style={{ color: '#50B5A2' }}>•</span>
                                <span>{b.bold && <strong>{b.bold}</strong>} {b.text}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {faq.answerOutro && (
                          <div style={{ marginTop: 10 }}>
                            {faq.answerOutro}
                            {faq.answerLink && (
                              <>{' '}<Link href={faq.answerLink.href} style={{ color: '#50B5A2', fontWeight: 600 }}>{faq.answerLink.text}</Link>.</>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Right — dark CTA card */}
            <motion.div
              className="bl-faq-right"
              variants={reveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, #2c6262 0%, #2a9b96 100%)',
                borderRadius: 28, padding: 32,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'flex-start', gap: 24,
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: -80, right: -80, width: 280, height: 280,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(80,181,162,0.18) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: '#50B5A2',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 24, fontWeight: 600, lineHeight: '32px',
                  color: '#e0f5f3', margin: '0 0 12px 0',
                }}>
                  Vous avez encore des questions ? On est là pour vous aider.
                </h3>
                <p style={{
                  fontFamily: "var(--font-inter), 'Inter', sans-serif",
                  fontSize: 15, lineHeight: '24px',
                  color: 'rgba(255,255,255,0.55)', margin: 0,
                }}>
                  Choisir un contrat d'entretien est une décision importante. Nos experts sont disponibles pour vous guider et répondre à toutes vos questions.
                </p>
              </div>

              <Link
                href="/contact-us"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: '#50B5A2', color: '#000',
                  borderRadius: 14, padding: '8px 8px 8px 24px', gap: 16,
                  fontFamily: "var(--font-barlow), 'Barlow', sans-serif",
                  fontSize: 16, fontWeight: 600, textDecoration: 'none',
                  alignSelf: 'flex-start', transition: 'background 0.18s ease',
                  position: 'relative', zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#3da090'
                  const arr = e.currentTarget.querySelector('.bl-cta-arr') as HTMLElement
                  if (arr) { arr.style.background = '#fff'; arr.style.color = '#000' }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#50B5A2'
                  const arr = e.currentTarget.querySelector('.bl-cta-arr') as HTMLElement
                  if (arr) { arr.style.background = '#000'; arr.style.color = '#fff' }
                }}
              >
                Contactez-nous
                <span className="bl-cta-arr" style={{
                  width: 40, height: 36, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#2c6262', color: '#fff', transition: 'background 0.18s ease, color 0.18s ease',
                }}>
                  <ArrowIcon direction="right" size={16} strokeColor="currentColor" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        /* Article grid */
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .bl-card { cursor: pointer; }
        .bl-card:hover .bl-card-img { transform: scale(1.04); }
        .bl-card:hover .bl-card-title { color: #50B5A2 !important; }
        .bl-card:hover .bl-card-arrow {
          background: #50B5A2 !important;
          border-color: #50B5A2 !important;
        }

        /* FAQ split */
        .bl-faq-row {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }
        .bl-faq-left { flex: 1.1; }
        .bl-faq-right { flex: 0.7; }

        @media (max-width: 1024px) {
          .bl-grid { grid-template-columns: repeat(2, 1fr); }
          .bl-faq-row { flex-direction: column; }
          .bl-faq-right { width: 100%; min-height: auto; }
        }
        @media (max-width: 640px) {
          .bl-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}
