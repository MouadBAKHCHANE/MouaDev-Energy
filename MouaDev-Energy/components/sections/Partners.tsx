'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const reveal = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
}

const logos = [
  { src: 'https://framerusercontent.com/images/gjmyWxGl1gWzjkyIh4cJfB7rg.svg', alt: 'Ja Solar' },
  { src: 'https://framerusercontent.com/images/4I0nUFgLGKqAqwEE0S5l6yrCXzQ.svg', alt: 'logoipsum' },
  { src: 'https://framerusercontent.com/images/GPSxJ7zrNG4isyTYg1gr1HjRTA.svg', alt: 'ecoflow' },
  { src: 'https://framerusercontent.com/images/BrSvSHXO0TEgMV8PBsJNMJBsMzc.svg', alt: 'solar edge' },
  { src: 'https://framerusercontent.com/images/sxqGwXa7qjplji4ZcgX8fmYOs.svg', alt: 'solax power' },
  { src: 'https://framerusercontent.com/images/ThiPMi5yUjVdKo6t4N9wLOgcQ.svg', alt: '21six' },
  { src: 'https://framerusercontent.com/images/GIK8uZI3M0K4ofRzG3UQCXutM.svg', alt: 'wallbox' },
  { src: 'https://framerusercontent.com/images/Qifbcz2UjIveHTCuImUZcqT9kZg.svg', alt: 'recom' },
  { src: 'https://framerusercontent.com/images/8MGbLgt1qCHDtoeeols5V043HfU.svg', alt: 'span' },
  { src: 'https://framerusercontent.com/images/duZwjP73YzY6931zuqasWWfWDZY.svg', alt: 'solaria' },
]

export default function Partners() {
  return (
    <section className="partners-section" style={{ padding: '80px 20px', background: '#f8f8f8' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div className="partners-head">
          <div>
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ marginBottom: 15 }}>
              <SectionLabel text="NOS PARTENAIRES" />
            </motion.div>
            <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="partners-h2" style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 52, fontWeight: 500, lineHeight: '62px', letterSpacing: -2, color: '#000',
            }}>
              Soutenu par nos partenaires<br />de confiance
            </motion.h2>
          </div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
            <Button variant="lime" label="Devenir partenaire" href="/contact-us" />
          </motion.div>
        </div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="partners-grid">
          {logos.map((logo, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 40, padding: '35px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '2/1', boxShadow: 'rgba(0,0,0,0.04) 0px 5px 30px' }}>
              <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" style={{ maxHeight: 22, width: 'auto', opacity: 0.5, filter: 'grayscale(100%)' }} />
            </div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .partners-head {
            text-align: center;
          }
          .partners-h2 {
            font-size: clamp(28px, 8vw, 52px) !important;
            line-height: 1.15 !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}
