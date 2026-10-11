import Image from 'next/image'
import PageHero from '@/components/layout/PageHero'
import Button from '@/components/ui/Button'
import CallButton from '@/components/ui/CallButton'
import LocalStickyCta from './LocalStickyCta'
import LocalFaq from './LocalFaq'
import { renderInline } from '@/lib/inlineLinks'

export interface LocalServicePageData {
  city: string
  heroTitle?: string
  heroSubtitle?: string
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
  phone: string
}

export default function LocalServicePage({ data, heroBgImage, ctaImage, parent, ctaHref, phone }: Props) {
  const { city, heroTitle, heroSubtitle, intro, facts = [], communes = [], sections = [], faqs = [], ctaTitle, ctaText } = data
  // Arguments de la carte devis : repris des chiffres clés de la page (donc vérifiés et éditables)
  const ctaPoints = facts.slice(0, 3).map((f) => f.value)
  // Accroche du hero : éditable dans Sanity, sinon les mêmes chiffres clés
  const subtitle = heroSubtitle || (ctaPoints.length > 0 ? ctaPoints.join(' · ') : undefined)
  // Format suisse (021 …) dans la carte : plus court, il tient à côté du bouton devis
  const phoneNational = phone.replace(/^\+41\s?/, '0')
  // Espace insécable avant « ? ! : ; » (typographie française) : la ponctuation ne passe jamais seule à la ligne
  const cardTitle = (ctaTitle || `Besoin d’une intervention à ${city} ?`).replace(/ ([?!:;])/g, '\u00A0$1')

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
        subtitle={subtitle}
      />

      <section className="lp-section">
        <div className="lp-inner">
          <div className="lp-intro-row">
            {intro && <p className="lp-intro">{renderInline(intro)}</p>}
            <div id="lp-intro-actions" className="lp-intro-actions">
              <Button variant="lime" label="Demander un devis" href={ctaHref} />
              <CallButton phone={phone} tone="dark" />
            </div>
          </div>

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
              <h2 className="lp-cta-title">{cardTitle}</h2>
              <p className="lp-cta-text">
                {ctaText || `Nous intervenons à ${city} et dans les communes voisines, avec la même méthode et les mêmes conditions que partout en Suisse romande.`}
              </p>
              {ctaPoints.length > 0 && (
                <ul className="lp-cta-points">
                  {ctaPoints.map((p) => <li key={p}>{p}</li>)}
                </ul>
              )}
              <div className="lp-cta-actions">
                <Button variant="lime" size="sm" label="Demander un devis" href={ctaHref} />
                <CallButton phone={phone} label={phoneNational} tone="light" size="sm" />
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

      <LocalStickyCta phone={phone} ctaHref={ctaHref} />

      <style>{`
        .lp-section { background: #fff; padding: 60px 20px 80px; }
        .lp-inner { max-width: 960px; margin: 0 auto; }
        .lp-intro {
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 19px; line-height: 30px; color: #333; margin: 0;
        }
        .lp-intro-row { display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center; margin-bottom: 36px; }
        .lp-intro-actions { display: flex; flex-direction: column; gap: 10px; }
        .lp-intro-actions > a { justify-content: space-between; }
        .lp-intro-actions > a.call-btn { justify-content: flex-start; }
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
          background: #f3f8f7; border: 1px solid #d5ebe8; border-radius: var(--btn-radius-sm, 10px); padding: 6px 14px;
        }
        .lp-cta {
          margin: 8px 0 56px; border-radius: 24px; overflow: hidden;
          background: linear-gradient(135deg, var(--color-primary-dark, #2c6262) 0%, var(--color-primary, #2a9b96) 100%);
          display: grid; grid-template-columns: 1fr 1fr; box-shadow: 0 18px 40px rgba(44, 98, 98, 0.18);
        }
        .lp-cta-media { position: relative; min-height: 280px; }
        .lp-cta-body { padding: 28px 32px; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
        .lp-cta-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 24px; font-weight: 600; letter-spacing: -0.6px; line-height: 1.2; color: #fff; margin: 0;
        }
        .lp-cta-text { font-family: var(--font-jost), 'Jost', sans-serif; font-size: 15px; line-height: 23px; color: rgba(255,255,255,0.88); margin: 0; }
        .lp-cta-points { list-style: none; padding: 0; margin: 0 0 4px; display: flex; flex-wrap: wrap; gap: 6px 16px; }
        .lp-cta-points li {
          position: relative; padding-left: 20px; font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 14px; font-weight: 500; color: #fff;
        }
        .lp-cta-points li::before {
          content: ''; position: absolute; left: 0; top: 50%; width: 10px; height: 10px; margin-top: -5px;
          border-radius: 2px; background: var(--color-primary-light, #50b5a2);
        }
        .lp-cta-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-top: 4px; }
        .lp-cta-actions > a.call-btn { flex: 1; justify-content: flex-start; }

        /* Barre d'action mobile : masquée au-dessus de 760px */
        .lp-sticky { display: none; }
        @media (max-width: 760px) {
          .lp-sticky {
            display: grid; grid-template-columns: auto 1fr; gap: 10px;
            position: fixed; left: 0; right: 0; bottom: 0; z-index: 95;
            padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
            background: rgba(255,255,255,0.97); border-top: 1px solid #e3eeec;
            box-shadow: 0 -8px 24px rgba(0,0,0,0.08);
            transform: translateY(110%); visibility: hidden;
            transition: transform 0.3s ease, visibility 0s linear 0.3s;
          }
          .lp-sticky.is-visible { transform: translateY(0); visibility: visible; transition: transform 0.3s ease, visibility 0s; }
        }
        /* Téléphones : bouton d'appel réduit à l'icône pour que « Demander un devis » tienne sur une ligne */
        @media (max-width: 480px) {
          .lp-sticky .call-btn-label { display: none; }
          .lp-sticky .call-btn { padding: 7px; }
          .lp-sticky .lbl { white-space: nowrap; }
        }

        @media (max-width: 760px) {
          .lp-intro-row { grid-template-columns: 1fr; gap: 20px; }
        }

        @media (max-width: 640px) {
          .lp-cta-actions { flex-direction: column; align-items: stretch; }
          .lp-cta-actions > a { justify-content: space-between; }
          .lp-section { padding: 40px 16px 60px; }
          .lp-intro { font-size: 17px; line-height: 27px; }
          .lp-h2 { font-size: 22px; }
          .lp-cta { grid-template-columns: 1fr; }
          .lp-cta-media { min-height: 220px; }
          .lp-cta-body { padding: 24px 20px 26px; }
          .lp-cta-title { font-size: 22px; }
        }
      `}</style>
    </main>
  )
}
