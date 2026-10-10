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
}

interface Props {
  data: LocalServicePageData
  heroBgImage: string
  /** Page service parente, ex. { label: 'PV Clean', href: '/services/pv-clean' } */
  parent: { label: string; href: string }
  ctaHref: string
}

export default function LocalServicePage({ data, heroBgImage, parent, ctaHref }: Props) {
  const { city, heroTitle, intro, facts = [], communes = [], sections = [], faqs = [] } = data

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
            <p className="lp-cta-text">Besoin d’une intervention à {city} ?</p>
            <div className="lp-cta-actions">
              <Button variant="lime" label="Demander un devis" href={ctaHref} />
              <Button variant="dark" label={`Voir le service ${parent.label}`} href={parent.href} />
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
          margin: 8px 0 48px; padding: 28px; border-radius: 20px;
          background: linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%);
          display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap;
        }
        .lp-cta-text { font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; color: #fff; margin: 0; }
        .lp-cta-actions { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
        @media (max-width: 640px) {
          .lp-section { padding: 40px 16px 60px; }
          .lp-intro { font-size: 17px; line-height: 27px; }
          .lp-h2 { font-size: 22px; }
          .lp-cta { padding: 22px; }
          .lp-cta-text { font-size: 19px; }
        }
      `}</style>
    </main>
  )
}
