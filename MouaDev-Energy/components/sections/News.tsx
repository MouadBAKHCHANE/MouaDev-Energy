'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { urlFor } from '@/lib/sanity'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const cardReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

const defaultArticles = [
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PV/Entretien%20panneaux%20solaires.webp',
    title: 'Pourquoi entretenir régulièrement ses panneaux photovoltaïques ?',
    author: 'Zen Énergie',
    read: '4 min',
    slug: 'entretien-panneaux-solaires',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20PAC/Heat%20pump%20AdobeStock.webp',
    title: "Comment bien utiliser sa pompe à chaleur ?",
    author: 'Zen Énergie',
    read: '3 min',
    slug: 'entretien-pompe-a-chaleur',
  },
  {
    img: '/Photos%20HD/Visuels%20Technique/Technique%20-%20Boiler/Boiler%20AdobeStock.webp',
    title: 'Pourquoi entretenir son boiler thermodynamique ?',
    author: 'Zen Énergie',
    read: '2 min',
    slug: 'maintenance-boiler',
  },
]

interface NewsProps {
  label?: string
  title?: string
  cta?: string
  articles?: Array<{ title: string; image?: any; author: string; readTime: string; link: string }>
}

export default function News({
  label = 'DERNIÈRES ACTUALITÉS',
  title = 'Actualités et innovations dans les énergies propres',
  cta = "Plus d'articles",
  articles,
}: NewsProps) {
  const items = articles?.length
    ? articles.map((a) => ({
        img: a.image ? urlFor(a.image).width(800).quality(80).url() : '',
        title: a.title,
        author: a.author,
        read: a.readTime,
        slug: a.link.replace(/^\/blogs\//, ''),
      }))
    : defaultArticles

  return (
    <section id="news" className="news-section" style={{ padding: '80px 20px', background: '#fff' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ marginBottom: 15, display: 'flex', justifyContent: 'center' }}>
          <SectionLabel text={label} />
        </motion.div>
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="news-h2" style={{
          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2, color: '#000', marginBottom: 40,
        }}>
          {title}
        </motion.h2>

        <div className="news-grid">
          {items.map((article, i) => (
            <Link key={i} href={`/blogs/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div className="news-card" variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.75, ease: 'easeOut', delay: i * 0.18 }}>
                <div style={{ position: 'relative', borderRadius: 50, overflow: 'hidden', aspectRatio: '16/10' }}>
                  <img src={article.img} alt={article.title} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px 12px',
                    background: 'linear-gradient(to top, rgba(80, 181, 162, 0.9) 0%, rgba(80, 181, 162, 0) 100%)',
                    display: 'flex', gap: 16,
                    fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 13, color: '#fff',
                    borderRadius: '0 0 50px 50px',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      {article.author}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                      {article.read} de lecture
                    </span>
                  </div>
                </div>
                <div style={{ padding: '20px 4px', textAlign: 'left' }}>
                  <h3 style={{
                    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                    fontSize: 24, fontWeight: 600, lineHeight: '30px', color: '#000', marginBottom: 12,
                  }}>{article.title}</h3>
                  <span className="news-read-more">
                    <span className="news-read-label">Lire plus</span>
                    <span className="news-read-arrow">→</span>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ marginTop: 40, display: 'inline-flex' }}>
          <Button variant="lime" label={cta} href="/blogs" />
        </motion.div>
      </div>

      <style>{`
        .news-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 18px;
          color: #000;
          text-decoration: none;
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-weight: 600;
        }
        .news-read-label {
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          white-space: nowrap;
          transition: max-width 0.3s ease, opacity 0.3s ease;
          font-size: 16px;
        }
        .news-card:hover .news-read-label {
          max-width: 100px;
          opacity: 1;
        }
        .news-read-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .news-card:hover .news-read-arrow {
          transform: translateX(4px);
        }
        .news-card {
          cursor: pointer;
        }
        .news-card h3 {
          transition: color 0.3s ease;
        }
        .news-card:hover h3 {
          color: #50B5A2 !important;
        }
      `}</style>
    </section>
  )
}
