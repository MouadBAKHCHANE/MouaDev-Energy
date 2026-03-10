'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

const reveal = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
}

const faqs = [
  {
    q: 'Pourquoi dois-je entretenir régulièrement mon installation ?',
    a: (
      <>
        L'entretien régulier de vos installations (panneaux photovoltaïques, pompes à chaleur, boilers thermodynamiques) est essentiel pour plusieurs raisons :
        <div style={{ marginTop: 15, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 8 }}><span style={{ color: '#50B5A2' }}>•</span> <span><strong>Optimisation des performances :</strong> un équipement bien entretenu fonctionne à pleine capacité, ce qui vous permet de maximiser les économies d’énergie</span></div>
          <div style={{ display: 'flex', gap: 8 }}><span style={{ color: '#50B5A2' }}>•</span> <span><strong>Prévention des pannes :</strong> l’entretien aide à détecter et à résoudre les petits problèmes avant qu’ils ne se transforment en pannes coûteuses.</span></div>
          <div style={{ display: 'flex', gap: 8 }}><span style={{ color: '#50B5A2' }}>•</span> <span><strong>Prolongation de la durée de vie :</strong> les composants soumis à un entretien régulier s'usent moins rapidement, ce qui permet à vos installations de durer plusieurs années de plus</span></div>
          <div style={{ display: 'flex', gap: 8 }}><span style={{ color: '#50B5A2' }}>•</span> <span><strong>Conformité réglementaire et garantie :</strong> en Suisse, certaines installations, comme les circuits contenant du fluide frigorigène, nécessitent un contrôle régulier. De plus, de nombreux fabricants exigent un entretien périodique pour maintenir la validité de la garantie.</span></div>
          <div style={{ display: 'flex', gap: 8 }}><span style={{ color: '#50B5A2' }}>•</span> <span><strong>Respect de l’environnement :</strong> des équipements en bon état consomment moins d’énergie et produisent moins de déchets ou d’émissions nocives</span></div>
        </div>
      </>
    )
  },
  {
    q: 'Quelles marques sont concernées par les contrats Zen Énergie Services ?',
    a: 'Zen Énergie Services intervient sur la majorité des marques d’appareils et d’équipements.'
  },
  {
    q: 'Comment payer mon/mes contrat(s) d’entretien ?',
    a: "La souscription et le paiement de la 1ère annuité de votre contrat d’entretien de 4 ans ou de l’Offre PV Clean s’effectuent en ligne sur le site www.zen-energieservices.ch."
  },
  {
    q: 'Quelle est la durée d’engagement d’un contrat d’entretien ?',
    a: (
      <>
        Tous les contrats d’entretien Zen Énergie Services ont une durée d’engagement de 4 ans. La 1ère annuité est payable en ligne à la souscription. Les modalités de résiliation et d’annulation de contrat sont consultables sur {' '}
        <Link href="/legal/conditions-generales-entretien" style={{ color: '#50B5A2', fontWeight: 600 }}>ce lien</Link>.
      </>
    )
  },
  {
    q: 'Comment résilier votre contrat ?',
    a: (
      <>
        Les modalités de résiliation et d’annulation de contrat sont consultables sur {' '}
        <Link href="/legal/conditions-generales-entretien" style={{ color: '#50B5A2', fontWeight: 600 }}>ce lien</Link>.
      </>
    )
  },
  {
    q: 'Que dois-je faire en cas de déménagement ?',
    a: (
      <>
        La résiliation avant la fin de la période d’engagement est possible uniquement dans le cas suivant :
        <div style={{ marginTop: 10, display: 'flex', gap: 8, paddingLeft: 10 }}>
          <span style={{ color: '#50B5A2' }}>•</span> <span>Déménagement hors zone d’intervention (preuve de changement d’adresse requise).</span>
        </div>
        <div style={{ marginTop: 10 }}>
          Pour plus d’informations, veuillez consulter les modalités de résiliation et d’annulation de contrat sur {' '}
          <Link href="/legal/conditions-generales-entretien" style={{ color: '#50B5A2', fontWeight: 600 }}>ce lien</Link>.
        </div>
      </>
    )
  }
]

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(-1)
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
                  <h4 style={{ margin: 0, font: 'inherit' }}>{faq.q}</h4>
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
                  <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 17, lineHeight: '26px', color: '#777' }}>{faq.a}</div>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
