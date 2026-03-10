'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const cardReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

const articles = [
  { img: 'https://framerusercontent.com/images/rGDjx8YMbG9oRVmwoQAAeYflmO0.jpg', title: 'Comment un site solaire performant génère plus de contacts', author: 'Zen Énergie', read: '4 min' },
  { img: 'https://framerusercontent.com/images/XvHWqouzRd8NA25OWGOH1f8UMY.jpg', title: 'Tendances du design des sites solaires en 2025', author: 'Zen Énergie', read: '3 min' },
  { img: 'https://framerusercontent.com/images/arGA85cgsigolEQsZOeBSaQ4qI.jpg', title: 'Créer une présence en ligne forte pour vos solutions', author: 'Zen Énergie', read: '2 min' },
]

export default function News() {
  return (
    <section id="news" className="news-section" style={{ padding: '80px 20px', background: '#fff' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ marginBottom: 15, display: 'flex', justifyContent: 'center' }}>
          <SectionLabel text="DERNIÈRES ACTUALITÉS" />
        </motion.div>
        <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="news-h2" style={{
          fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
          fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2, color: '#000', marginBottom: 40,
        }}>
          Actualités et innovations<br />dans les énergies propres
        </motion.h2>

        <div className="news-grid">
          {articles.map((article, i) => (
            <motion.div key={i} className="news-card" variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.75, ease: 'easeOut', delay: i * 0.18 }}>
              <div style={{ position: 'relative', borderRadius: 50, overflow: 'hidden', aspectRatio: '16/10' }}>
                <img src={article.img} alt="Solar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px 12px',
                  background: 'linear-gradient(to top, rgba(80, 181, 162, 0.9) 0%, rgba(80, 181, 162, 0) 100%)',
                  display: 'flex', gap: 16,
                  fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 13, color: '#fff',
                  borderRadius: '0 0 50px 50px',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>👤 {article.author}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>💬 {article.read}</span>
                </div>
              </div>
              <div style={{ padding: '20px 4px', textAlign: 'left' }}>
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 24, fontWeight: 600, lineHeight: '30px', color: '#000', marginBottom: 12,
                }}>{article.title}</h3>
                <a href="#" className="news-read-more">
                  <span className="news-read-label">Lire plus</span>
                  <span className="news-read-arrow">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ marginTop: 40, display: 'inline-flex' }}>
          <Button variant="lime" label="Plus d'articles" href="/actualites" />
        </motion.div>
      </div>

      <style jsx global>{`
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
