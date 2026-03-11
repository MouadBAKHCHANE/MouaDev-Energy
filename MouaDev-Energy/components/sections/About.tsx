'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import CheckIcon from '@/components/ui/CheckIcon'
import Button from '@/components/ui/Button'

// Extracted: heading uses y:44
const revealHeading = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

const checkItems = [
  { title: "Performance garantie", desc: "assurez la performance optimale de vos installations" },
  { title: "Expertise locale", desc: "une équipe d’experts proche de chez vous formée aux dernières avancées technologiques" },
  { title: "Engagement durable", desc: "prolongez la durée de vie de vos équipements tout en contribuant à un avenir plus vert" },
  { title: "Fiabilité & confiance", desc: "une qualité irréprochable, lors de toute intervention afin de répondre à l’ensemble des normes et prérogatives du domaine." },
]

export default function About() {
  return (
    <section id="about" className="about-section" style={{ padding: '80px 20px', background: '#f8f8f8' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* 3-column row: alignItems flex-start to allow manual title positioning */}
        <div className="about-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>

          {/* Column 1: Now contains the Heading and Description */}
          <motion.div
            className="about-col-1"
            variants={revealHeading} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              flex: '1 1 400px',
              display: 'flex',
              flexDirection: 'column',
              gap: 30,
              paddingTop: 60 // This moves the titles "lower" and centers them better with the image height
            }}
          >
            {/* Header block moved inside the column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              <SectionLabel text="À PROPOS DE NOUS" />
              <h2
                className="about-h2"
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2, color: '#000',
                  margin: 0,
                }}
              >
                Pourquoi choisir <br />
                Zen Énergie Services ?
              </h2>
            </div>

            <p className="about-body" style={{
              fontFamily: "var(--font-jost), 'Jost', sans-serif",
              fontSize: 17, fontWeight: 400, lineHeight: '26px', color: '#000', margin: 0,
            }}>
              Fort d’une expertise reconnue depuis de nombreuses années en Suisse, Zen Énergie Services s’assure de la longévité et de l’optimisation du rendement de vos installations sur le long terme. Des experts locaux au service des particuliers tout au long de l’année.
            </p>

            <div>
              <Button variant="lime" label="En savoir plus" href="/about-us" />
            </div>
          </motion.div>

          {/* Column 2: Image + spinning lime circle */}
          <motion.div
            className="about-col-2"
            variants={revealHeading} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            style={{ flex: '0 0 393px', position: 'relative', height: 530 }}
          >
            <Image
              src="/Photos%20HD/Visuels%20Technique/Technique%20-%20PV/Re%CC%81paration%20panneau%20solaire.webp"
              alt="Two men fix solar panel"
              fill
              sizes="(max-width: 1024px) 100vw, 393px"
              style={{ borderRadius: 50, objectFit: 'cover', objectPosition: '60% 50%' }}
            />
            {/* Lime circle with spinning "About us" text */}
            <div className="about-spin-badge" style={{
              position: 'absolute', bottom: 16, left: 16,
              width: 124, height: 124, borderRadius: 150, background: '#50B5A2',
              padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div className="about-spin" style={{ width: 100, height: 100, position: 'relative' }}>
                <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  <defs>
                    <path id="aboutCirclePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  </defs>
                  <text
                    style={{
                      fontFamily: "var(--font-inter), 'Inter', sans-serif",
                      fontSize: 12, fontWeight: 600, wordSpacing: 3,
                      fill: '#000',
                    }}
                  >
                    <textPath href="#aboutCirclePath">
                      {'\u2726  À propos  \u2726  À propos  \u2726  À propos \u2726  À propos'}
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Column 3: h3 + checklist */}
          <motion.div
            className="about-col-3"
            variants={revealHeading} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{
              flex: '1 1 300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 30,
              paddingTop: 80 // Align with titles on the left
            }}
          >
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 32, fontWeight: 500, lineHeight: '40px', letterSpacing: -1,
              color: '#000', margin: 0,
            }}>
              Ce qui nous distingue
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              {checkItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: '#000',
                  lineHeight: '22px'
                }}>
                  <div style={{ marginTop: 2 }}>
                    <CheckIcon />
                  </div>
                  <span>
                    <strong style={{ fontWeight: 600 }}>{item.title} :</strong> {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .about-row {
            flex-direction: column !important;
            align-items: center !important;
          }
          .about-col-1, .about-col-3 {
            padding-top: 0 !important;
            flex: 1 1 100% !important;
          }
          .about-col-2 {
            flex: 0 0 auto !important;
            width: 100% !important;
            max-width: 393px;
          }
        }
        @media (max-width: 640px) {
          .about-section {
            overflow: hidden !important;
            width: 100% !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
          }
          .about-spin-badge {
            bottom: 16px !important;
            left: 16px !important;
            top: auto !important;
            right: auto !important;
          }
        }
      `}</style>
    </section>
  )
}
