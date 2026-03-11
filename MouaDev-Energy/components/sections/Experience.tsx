'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import ArrowIcon from '@/components/ui/ArrowIcon'

const reveal = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0 },
}

const cards = [
  { icon: 'https://framerusercontent.com/images/SotZXXPsS3rKeaDqLHmOcIsk2tM.png', title: 'Nettoyage de panneaux solaires', desc: 'Maintenez vos panneaux à leur efficacité maximale avec un nettoyage professionnel et sécurisé.' },
  { icon: 'https://framerusercontent.com/images/8pp5kzVhwpOfHWE5mU8I5BsEYXc.png', title: 'Installation hors réseau', desc: 'Des systèmes solaires hors réseau fiables conçus pour l\'indépendance énergétique totale.' },
  { icon: 'https://framerusercontent.com/images/8xn45SyMTHf47SVTvVMykuSUs.png', title: 'Réparation d\'onduleurs', desc: 'Réparations rapides pour restaurer les performances et minimiser les temps d\'arrêt.' },
  { icon: 'https://framerusercontent.com/images/b4KzHV67W4mrSOMheANfAzfdYEM.png', title: 'Maintenance solaire', desc: 'Entretien régulier pour assurer l\'efficacité, la sécurité et la fiabilité de votre système.' },
  { icon: 'https://framerusercontent.com/images/ecIydEaqGIKuHaQqFsbw8tRCA.png', title: 'Réparation d\'éoliennes', desc: 'Diagnostics experts et réparations pour assurer le bon fonctionnement de vos systèmes éoliens.' },
  { icon: 'https://framerusercontent.com/images/jpxArhZs8VwgsAK7U5D5B5MqU.png', title: 'Installation en toiture', desc: 'Solutions solaires sur mesure qui maximisent les économies et optimisent la production.' },
]

export default function Experience() {
  return (
    <section className="exp-section" style={{ padding: '80px 20px', background: '#fff' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          variants={reveal} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 15, display: 'flex', justifyContent: 'center' }}
        >
          <SectionLabel text="NOS SERVICES D'EXCELLENCE" />
        </motion.div>
        <motion.h2
          variants={reveal} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="exp-h2"
          style={{
            fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
            fontSize: 48, fontWeight: 500, lineHeight: '58px', letterSpacing: -2,
            color: '#000', marginBottom: 30, maxWidth: 650, margin: '0 auto 30px',
          }}
        >
          Plus de 15 ans d'expérience<br />dans l'industrie énergétique
        </motion.h2>

        <div className="exp-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={reveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '0px 0px -50px 0px', amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.1 }}
              style={{
                background: '#f8f8f8', borderRadius: 12, padding: '30px 24px',
                textAlign: 'left', border: '1px solid #e8e8e8',
                transition: 'box-shadow 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(2,6,23,0.12)'
                const arr = e.currentTarget.querySelector('.card-arr-el') as HTMLElement
                if (arr) { arr.style.background = '#50B5A2'; arr.style.borderColor = '#50B5A2' }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                const arr = e.currentTarget.querySelector('.card-arr-el') as HTMLElement
                if (arr) { arr.style.background = 'transparent'; arr.style.borderColor = '#e8e8e8' }
              }}
            >
              <div style={{ width: 60, height: 60, marginBottom: 25 }}>
                <img src={card.icon} alt="" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 style={{
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 22, fontWeight: 600, lineHeight: '28px', color: '#000', marginBottom: 12,
              }}>{card.title}</h3>
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 16, lineHeight: '24px', color: '#777', marginBottom: 20,
              }}>{card.desc}</p>
              <div className="card-arr-el" style={{
                width: 44, height: 44, borderRadius: '50%', border: '1px solid #e8e8e8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.18s ease, border-color 0.18s ease',
              }}>
                <ArrowIcon direction="diagonal" size={18} strokeColor="#000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
