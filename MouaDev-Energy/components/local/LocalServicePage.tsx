import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import LocalFaq from './LocalFaq'
import { renderInline } from '@/lib/inlineLinks'

export interface LocalServicePageData {
  city: string
  heroTitle?: string
  intro?: string
  facts?: { value: string; label: string }[]
  communes?: string[]
  sections?: { heading: string; body: string }[]
  faqs?: { question: string; answer: string }[]
  ctaTitle?: string
  ctaText?: string
}

interface Props {
  data: LocalServicePageData
  heroBgImage: string
  ctaImage: string
  /** Page service parente, ex. { label: 'PV Clean', href: '/services/pv-clean' } */
  parent: { label: string; href: string }
  ctaHref: string
}

export default function LocalServicePage({ data, heroBgImage, ctaImage, parent, ctaHref }: Props) {
  const { city, heroTitle, intro, facts = [], communes = [], sections = [], faqs = [], ctaTitle, ctaText } = data
  // Arguments de la carte devis : repris des chiffres clés de la page (donc vérifiés et éditables)
  const ctaPoints = facts.slice(0, 3).map((f) => f.value)

  return (
    <main>
      <PageHero
        crumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: parent.label, href: parent.href },
          { label: city },
        ]}
        title={heroTitle || city}
        bgImage={heroBgImage}
        compact={true}
      />

      <section className="lp-section">
        <div className="lp-inner">
          {intro && <p className="lp-intro">{renderInline(intro)}</p>}

          {facts.length > 0 && (
            <div className="lp-facts">
              {facts.map((f, i) => (
                <div key={i} className="lp-fact">
                  <span className="lp-fact-value">{f.value}</span>
                  <span className="lp-fact-label">{f.label}</span>
                </div>
              ))}
            </div>
          )}

          {communes.length > 0 && (
            <div className="lp-block">
              <h2 className="lp-h2">Communes desservies</h2>
              <ul className="lp-communes">
                {communes.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          )}

          {sections.map((s, i) => (
            <div key={i} className="lp-block">
              <h2 className="lp-h2">{s.heading}</h2>
              {s.body.split('\n\n').map((p, j) => (
                <p key={j} className="lp-p">{renderInline(p)}</p>
              ))}
            </div>
          ))}

          <div className="lp-cta">
            <div className="lp-cta-media">
              <Image src={ctaImage} alt={`Nettoyage de panneaux solaires à ${city}`} fill sizes="(max-width: 760px) 100vw, 420px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="lp-cta-body">
              <span className="lp-cta-label">Devis gratuit</span>
              <h2 className="lp-cta-title">{ctaTitle || `Besoin d’une intervention à ${city} ?`}</h2>
              <p className="lp-cta-text">
                {ctaText || `Nous intervenons à ${city} et dans les communes voisines, avec la même méthode et les mêmes conditions que partout en Suisse romande.`}
              </p>
              {ctaPoints.length > 0 && (
                <ul className="lp-cta-points">
                  {ctaPoints.map((p) => <li key={p}>{p}</li>)}
                </ul>
              )}
              <div className="lp-cta-actions">
                <Button variant="lime" label="Demander un devis" href={ctaHref} />
                <Button variant="dark" label={`Voir le service ${parent.label}`} href={parent.href} />
              </div>
            </div>
          </div>

          {faqs.length > 0 && (
            <div className="lp-block">
              <LocalFaq title={`Questions fréquentes à ${city}`} faqs={faqs} />
            </div>
          )}
        </div>
      </section>

      <style>{`
        .lp-section { background: #fff; padding: 60px 20px 80px; }
        .lp-inner { max-width: 960px; margin: 0 auto; }
        .lp-intro {
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 19px; line-height: 30px; color: #333; margin: 0 0 32px;
        }
        .lp-facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 44px; }
        .lp-fact {
          display: flex; flex-direction: column; gap: 2px; padding: 14px 16px;
          border-radius: 14px; background: #e0f5f3; border-left: 3px solid var(--color-primary, #2a9b96);
        }
        .lp-fact-value {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 20px; font-weight: 700; color: var(--color-primary-dark, #2c6262); line-height: 1.2;
        }
        .lp-fact-label { font-family: var(--font-jost), 'Jost', sans-serif; font-size: 13px; color: #666; line-height: 1.35; }
        .lp-block { margin-bottom: 40px; }
        .lp-h2 {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 26px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.25; color: #000; margin: 0 0 14px;
        }
        .lp-p { font-family: var(--font-jost), 'Jost', sans-serif; font-size: 17px; line-height: 27px; color: #444; margin: 0 0 14px; }
        .lp-communes { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
        .lp-communes li {
          font-family: var(--font-jost), 'Jost', sans-serif; font-size: 15px; color: #2c6262;
          background: #f3f8f7; border: 1px solid #d5ebe8; border-radius: 999px; padding: 6px 14px;
        }
        .lp-cta {
          margin: 8px 0 56px; border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%);
          display: grid; grid-template-columns: 42% 1fr; box-shadow: 0 18px 40px rgba(44, 98, 98, 0.18);
        }
        .lp-cta-media { position: relative; min-height: 340px; }
        .lp-cta-body { padding: 36px 36px 38px; display: flex; flex-direction: column; gap: 14px; }
        .lp-cta-label {
          align-self: flex-start; font-family: var(--font-jost), 'Jost', sans-serif; font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #000;
          background: var(--color-primary-light, #50b5a2); border-radius: 999px; padding: 5px 12px;
        }
        .lp-cta-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 30px; font-weight: 600; letter-spacing: -0.8px; line-height: 1.15; color: #fff; margin: 0;
        }
        .lp-cta-text { font-family: var(--font-jost), 'Jost', sans-serif; font-size: 16px; line-height: 25px; color: rgba(255,255,255,0.88); margin: 0; }
        .lp-cta-points { list-style: none; padding: 0; margin: 2px 0 6px; display: flex; flex-wrap: wrap; gap: 8px 18px; }
        .lp-cta-points li {
          position: relative; padding-left: 22px; font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 15px; font-weight: 500; color: #fff;
        }
        .lp-cta-points li::before {
          content: ''; position: absolute; left: 0; top: 50%; width: 14px; height: 14px; margin-top: -7px;
          border-radius: 50%; background: var(--color-primary-light, #50b5a2);
          box-shadow: inset 0 0 0 4px var(--color-primary-dark, #2c6262);
        }
        .lp-cta-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 6px; }
        @media (max-width: 640px) {
          .lp-section { padding: 40px 16px 60px; }
          .lp-intro { font-size: 17px; line-height: 27px; }
          .lp-h2 { font-size: 22px; }
          .lp-cta { grid-template-columns: 1fr; }
          .lp-cta-media { min-height: 220px; }
          .lp-cta-body { padding: 26px 22px 28px; }
          .lp-cta-title { font-size: 24px; }
        }
      `}</style>
    </main>
  )
}
