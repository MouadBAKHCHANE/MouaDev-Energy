'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { client } from '@/lib/sanity'

const reveal = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
}

interface FaqBullet {
  bold?: string
  text: string
}

interface FaqLink {
  text: string
  href: string
}

interface FaqData {
  question: string
  answerIntro?: string
  answerBullets?: FaqBullet[]
  answerOutro?: string
  answerLink?: FaqLink
}

// Hardcoded fallback in case Sanity is unavailable
const fallbackFaqs: FaqData[] = [
  {
    question: "Pourquoi dois-je entretenir régulièrement mon installation ?",
    answerIntro: "L'entretien régulier de vos installations (panneaux photovoltaïques, pompes à chaleur, boilers thermodynamiques) est essentiel pour plusieurs raisons :",
    answerBullets: [
      { bold: 'Optimisation des performances :', text: "un équipement bien entretenu fonctionne à pleine capacité, ce qui vous permet de maximiser les économies d'énergie" },
      { bold: 'Prévention des pannes :', text: "l'entretien aide à détecter et à résoudre les petits problèmes avant qu'ils ne se transforment en pannes coûteuses." },
      { bold: 'Prolongation de la durée de vie :', text: "les composants soumis à un entretien régulier s'usent moins rapidement, ce qui permet à vos installations de durer plusieurs années de plus" },
      { bold: 'Conformité réglementaire et garantie :', text: "en Suisse, certaines installations, comme les circuits contenant du fluide frigorigène, nécessitent un contrôle régulier. De plus, de nombreux fabricants exigent un entretien périodique pour maintenir la validité de la garantie." },
      { bold: "Respect de l'environnement :", text: "des équipements en bon état consomment moins d'énergie et produisent moins de déchets ou d'émissions nocives" },
    ],
  },
  {
    question: "Quelles marques sont concernées par les contrats Zen Énergie Services ?",
    answerIntro: "Zen Énergie Services intervient sur la majorité des marques d'appareils et d'équipements.",
  },
  {
    question: "Comment payer mon/mes contrat(s) d'entretien ?",
    answerIntro: "La souscription et le paiement de la 1ère annuité de votre contrat d'entretien de 4 ans ou de l'Offre PV Clean s'effectuent en ligne sur le site www.zen-energieservices.ch.",
  },
  {
    question: "Quelle est la durée d'engagement d'un contrat d'entretien ?",
    answerIntro: "Tous les contrats d'entretien Zen Énergie Services ont une durée d'engagement de 4 ans. La 1ère annuité est payable en ligne à la souscription. Les modalités de résiliation et d'annulation de contrat sont consultables sur",
    answerLink: { text: 'ce lien', href: '/legal/conditions-generales-entretien' },
  },
  {
    question: "Comment résilier votre contrat ?",
    answerIntro: "Les modalités de résiliation et d'annulation de contrat sont consultables sur",
    answerLink: { text: 'ce lien', href: '/legal/conditions-generales-entretien' },
  },
  {
    question: "Que dois-je faire en cas de déménagement ?",
    answerIntro: "La résiliation avant la fin de la période d'engagement est possible uniquement dans le cas suivant :",
    answerBullets: [
      { bold: '', text: "Déménagement hors zone d'intervention (preuve de changement d'adresse requise)." },
    ],
    answerOutro: "Pour plus d'informations, veuillez consulter les modalités de résiliation et d'annulation de contrat sur",
    answerLink: { text: 'ce lien', href: '/legal/conditions-generales-entretien' },
  },
]

function FaqAnswer({ faq }: { faq: FaqData }) {
  return (
    <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 17, lineHeight: '26px', color: '#777' }}>
      {faq.answerIntro && (
        <span>
          {faq.answerIntro}
          {/* If there's a link right after intro (no bullets, no outro) */}
          {faq.answerLink && !faq.answerBullets?.length && !faq.answerOutro && (
            <>
              {' '}
              <Link href={faq.answerLink.href} style={{ color: '#50B5A2', fontWeight: 600 }}>
                {faq.answerLink.text}
              </Link>
              .
            </>
          )}
        </span>
      )}

      {faq.answerBullets && faq.answerBullets.length > 0 && (
        <div style={{ marginTop: 15, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faq.answerBullets.map((bullet, i) => (
            <div key={i} style={{ display: 'flex', gap: 8 }}>
              <span style={{ color: '#50B5A2' }}>•</span>
              <span>
                {bullet.bold && <strong>{bullet.bold}</strong>} {bullet.text}
              </span>
            </div>
          ))}
        </div>
      )}

      {faq.answerOutro && (
        <div style={{ marginTop: 10 }}>
          {faq.answerOutro}
          {faq.answerLink && (
            <>
              {' '}
              <Link href={faq.answerLink.href} style={{ color: '#50B5A2', fontWeight: 600 }}>
                {faq.answerLink.text}
              </Link>
              .
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(-1)
  const [faqs, setFaqs] = useState<FaqData[]>(fallbackFaqs)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "faq"] | order(order asc) {
          question,
          answerIntro,
          answerBullets[]{ bold, text },
          answerOutro,
          answerLink{ text, href }
        }`
      )
      .then((data: FaqData[]) => {
        if (data && data.length > 0) setFaqs(data)
      })
      .catch(() => {
        // Keep fallback
      })
  }, [])

  const toggleFaq = (idx: number) => { setActiveIdx(activeIdx === idx ? -1 : idx) }

  return (
    <section className="faq-section" style={{ padding: '80px 20px', background: '#fff' }}>
      <div className="faq-inner">
        <div className="faq-left">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ marginBottom: 15 }}>
            <SectionLabel text="FAQ" />
          </motion.div>
          <motion.h2 variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }} className="faq-h2" style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2, color: '#000', marginBottom: 15,
          }}>
            Vos questions,<br />nos réponses
          </motion.h2>
          <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="faq-body" style={{
            fontFamily: "var(--font-jost), 'Jost', sans-serif",
            fontSize: 17, fontWeight: 400, lineHeight: '26px', color: '#777', marginBottom: 30,
          }}>
            Retrouvez toutes les informations nécessaires pour choisir et souscrire votre contrat optimal en toute sérénité
          </motion.p>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
            <Button variant="lime" label="Nous contacter" href="/contact-us" />
          </motion.div>
        </div>

        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }} transition={{ duration: 0.8, ease: 'easeOut' }} style={{ flex: 1 }}>
          {faqs.map((faq, i) => {
            const isActive = activeIdx === i
            return (
              <div key={i} style={{ borderBottom: '1px solid #e8e8e8', padding: '24px 0' }}>
                <div onClick={() => toggleFaq(i)} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, cursor: 'pointer',
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 500, color: '#000',
                }}>
                  <h4 style={{ margin: 0, font: 'inherit' }}>{faq.question}</h4>
                  <span style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: isActive ? '1px solid #50B5A2' : '1px solid #e8e8e8',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: 'all 0.18s ease', fontSize: 20, lineHeight: 1,
                    background: isActive ? '#50B5A2' : 'transparent',
                    transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </div>
                <div style={{
                  maxHeight: isActive ? 600 : 0, overflow: 'hidden',
                  transition: 'max-height 0.4s ease', paddingTop: isActive ? 16 : 0,
                }}>
                  <FaqAnswer faq={faq} />
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
