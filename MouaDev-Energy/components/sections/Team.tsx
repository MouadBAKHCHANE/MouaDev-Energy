'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

// Extracted: row 1 visible, row 2 slides up from y:70
const revealHeading = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}
const revealRow2 = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const members = [
  { src: 'https://framerusercontent.com/images/8lO1MDdXOmRLodroWn2TxIpCBQ4.jpg', name: 'James Carter', role: 'Directeur Général' },
  { src: 'https://framerusercontent.com/images/B6SAUcWOaxeRbm7TmftAKKuE3bo.jpg', name: 'Emily Johnson', role: 'Directrice Technique' },
  { src: 'https://framerusercontent.com/images/84rQ0xS0GSXogxfHmYXKT30ETM.jpg', name: 'Michael Brown', role: 'Directeur de Projet' },
  { src: 'https://framerusercontent.com/images/aVsvLJkR2RekklaZEFisskMVMr0.jpg', name: 'Amy Walker', role: 'Responsable des Ventes' },
  { src: 'https://framerusercontent.com/images/D6NjmeWaBY1FiFMHLr429HxpKRM.jpg', name: 'Liam Harris', role: 'Stratège de Croissance' },
  { src: 'https://framerusercontent.com/images/jwXvxAQ61mfcjjrQsvoreqxnrMg.jpg', name: 'Mia Walker', role: 'Responsable Clientèle' },
  { src: 'https://framerusercontent.com/images/4IYsIb0v1oKwTl7EqitohJPpc.jpg', name: 'Noah Lewis', role: 'Conseiller Commercial' },
]

// Social icon SVG paths
const socials = [
  { name: 'Twitter', path: 'M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.007-.01Z' },
  { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z' },
  { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z' },
  { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z' },
]

function MemberCard({ member, index }: { member: typeof members[0]; index: number }) {
  const isRow2 = index >= 3 // first 3 members in row 1, next 4 in row 2

  const card = (
    <div className="team-card" style={{ position: 'relative', width: '100%', height: 320 }}>
      {/* Extracted: Desktop card — 331x355, borderRadius 50, overflow clip, 1px border */}
      <div style={{
        width: '100%', height: '100%', borderRadius: 50, overflow: 'hidden',
        position: 'relative', border: '1px solid #e8e8e8',
      }}>
        {/* Image */}
        <img
          src={member.src} alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Hover layer — lime bg, opacity 0→1, covers entire card */}
        <div className="team-hover-layer" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: '#50B5A2', opacity: 0, zIndex: 6,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'space-between', padding: 24,
          transition: 'opacity 0.3s ease',
          borderRadius: 50,
        }}>
          {/* Social icons — top right, vertical stack */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              {socials.map((s) => (
                <a key={s.name} href="#" style={{ display: 'flex', width: 20, height: 20 }}>
                  <svg viewBox="0 0 24 24" fill="#000" width="20" height="20">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Name + role — rotated 270deg, positioned bottom-left */}
          <div style={{
            position: 'absolute', bottom: 50, left: 65,
            transform: 'rotate(270deg)',
            transformOrigin: 'bottom left',
            display: 'flex', flexDirection: 'column', gap: 4,
            whiteSpace: 'nowrap',
          }}>
            <h4 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 24, fontWeight: 600, lineHeight: '30px', color: '#000', margin: 0,
            }}>{member.name}</h4>
            <p style={{
              fontFamily: "var(--font-jost), 'Jost', sans-serif",
              fontSize: 18, fontWeight: 400, lineHeight: '28px', color: '#000', margin: 0,
            }}>{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  )

  if (isRow2) {
    return (
      <motion.div
        variants={revealRow2} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {card}
      </motion.div>
    )
  }

  return card
}

export default function Team() {
  return (
    <section id="team" className="team-section" style={{ padding: '80px 20px', background: '#f8f8f8' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Extracted: CSS Grid, 4 columns of 331.25px, gap 25px */}
        <div className="team-grid">
          {/* Intro card — 331x355, black bg, borderRadius 50, padding 25 */}
          <motion.div
            className="team-intro"
            variants={revealHeading} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div style={{ width: 60, height: 60 }}>
              <img
                src="https://framerusercontent.com/images/8pp5kzVhwpOfHWE5mU8I5BsEYXc.png"
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'hue-rotate(60deg) brightness(2)' }}
              />
            </div>
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 36, fontWeight: 500, lineHeight: '44px', letterSpacing: -1.5,
              color: '#fff', margin: 0, flex: 1,
            }}>
              Nos experts &amp; conseillers dédiés
            </h3>
            <div>
              <Button variant="lime" label="Découvrir l'équipe" href="/notre-equipe" showArrow={false} />
            </div>
          </motion.div>

          {members.map((m, i) => (
            <MemberCard key={i} member={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
