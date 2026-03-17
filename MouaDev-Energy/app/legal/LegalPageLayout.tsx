import PageHero from '@/components/layout/PageHero'

interface LegalSection {
  title?: string
  content?: string
}

interface CompanyInfoItem {
  label: string
  value: string
}

interface LegalPageLayoutProps {
  heroTitle: string
  crumbLabel: string
  mainTitle: string
  lastUpdated?: string
  companyInfoItems?: CompanyInfoItem[]
  sections: LegalSection[]
}

export default function LegalPageLayout({
  heroTitle,
  crumbLabel,
  mainTitle,
  lastUpdated,
  companyInfoItems,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main>
      <PageHero
        crumbs={[{ label: 'Accueil', href: '/' }, { label: crumbLabel }]}
        title={heroTitle}
        compact={true}
      />

      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>

          {/* Page title */}
          <h2 style={{
            fontFamily: "var(--font-barlow)",
            fontSize: 24, fontWeight: 600, color: '#000', marginBottom: 10,
          }}>
            {mainTitle}
          </h2>

          {/* Last updated */}
          {lastUpdated && (
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16, color: '#777', marginBottom: 40,
            }}>
              Dernière mise à jour : {lastUpdated}
            </p>
          )}

          {/* Company info block (mentions légales only) */}
          {companyInfoItems && companyInfoItems.length > 0 && (
            <div style={{ display: 'grid', gap: '20px', marginBottom: 40 }}>
              {companyInfoItems.map((item, i) => (
                <div key={i}>
                  <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>
                    {item.label}
                  </strong>
                  <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Sections */}
          {sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 40 }}>
              {section.title && (
                <h3 style={{
                  fontFamily: "var(--font-barlow)",
                  fontSize: 22, fontWeight: 600, color: '#000', marginBottom: 15,
                }}>
                  {section.title}
                </h3>
              )}
              {section.content && (
                <p style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 17, lineHeight: '28px', color: '#555',
                  whiteSpace: 'pre-line',
                }}>
                  {section.content}
                </p>
              )}
            </div>
          ))}

        </div>
      </section>
    </main>
  )
}
