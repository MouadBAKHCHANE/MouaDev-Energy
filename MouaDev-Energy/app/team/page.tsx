'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/layout/PageHero'
import SectionLabel from '@/components/ui/SectionLabel'
import FAQ from '@/components/sections/FAQ'
import Partners from '@/components/sections/Partners'
import { teamMembers } from '@/lib/data'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

// ── Team member card ─────────────────────────────────────────────────────────

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: (index % 3) * 0.08 }}
      style={{
        position: 'relative',
        height: 400,
        borderRadius: 50,
        overflow: 'hidden',
        border: '1px solid #e8e8e8',
      }}
    >
      <img
        src={member.src}
        alt={member.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      {/* Bottom gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 30,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 22,
            fontWeight: 600,
            color: '#fff',
            margin: '0 0 4px 0',
          }}
        >
          {member.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-jost), 'Jost', sans-serif",
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            margin: 0,
          }}
        >
          {member.role}
        </p>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TeamPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <PageHero
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Our team' }]}
        title="Our team"
        bgImage="https://framerusercontent.com/images/XvHWqouzRd8NA25OWGOH1f8UMY.jpg"
      />

      {/* ── Team Grid ── */}
      <section style={{ padding: '100px 20px', background: '#fff' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Header */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ marginBottom: 20 }}
          >
            <SectionLabel text="EXCELLENT TEAM" />
          </motion.div>
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 52,
              fontWeight: 500,
              lineHeight: '62px',
              letterSpacing: -2,
              color: '#000',
              marginBottom: 20,
            }}
          >
            Meet the team behind Solshine
          </motion.h2>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{
              fontFamily: "var(--font-jost), 'Jost', sans-serif",
              fontSize: 18,
              lineHeight: '28px',
              color: '#777',
              marginBottom: 60,
              maxWidth: 640,
            }}
          >
            A diverse group of professionals united by creativity, expertise, and a passion for building impactful digital solutions.
          </motion.p>

          {/* Full 6-member grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div className="full-team-grid">
            {teamMembers.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section style={{ padding: '80px 20px', background: '#f8f8f8' }}>
        <div
          style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 80,
              fontWeight: 700,
              color: '#50B5A2',
              lineHeight: 1,
              margin: '0 0 12px 0',
            }}
          >
            10+
          </motion.p>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            style={{
              fontFamily: "var(--font-jost), 'Jost', sans-serif",
              fontSize: 20,
              color: '#555',
              margin: 0,
            }}
          >
            Years of experience and expertise
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Partners ── */}
      <Partners />
    </main>
  )
}
