import re, os

BASE = r"c:\Users\EliteBook\OneDrive\Desktop\naoenergy.ch\ZEN ÉNERGIE SERVICES\MouaDev-Energy"

TABLE_TEMPLATE = r'''                {/* Comparison table */}
                <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  <div className="ps-comparison-table">
                    {/* Header row */}
                    <div style={{ padding: '28px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: '#000', marginBottom: 4 }}>Nos contrats</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 14, color: '#666' }}>__NAME__</div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '__ACCENT__' }}>Zen Acc&egrave;s</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La tranquillit&eacute; essentielle</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1].map(i => <div key={i} style={{ width: 22, height: 22, background: '__ACCENT__', WebkitMask: 'url("__ICON__") center/contain no-repeat', mask: 'url("__ICON__") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '__ACCENT__' }}>Zen &Eacute;quilibre</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La s&eacute;r&eacute;nit&eacute; assur&eacute;e</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1].map(i => <div key={i} style={{ width: 22, height: 22, background: '__ACCENT__', WebkitMask: 'url("__ICON__") center/contain no-repeat', mask: 'url("__ICON__") center/contain no-repeat' }} />)}
                      </div>
                    </div>
                    <div style={{ padding: '24px 12px', textAlign: 'center', borderBottom: '2px solid #eee', background: '#fff' }}>
                      <div style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '__ACCENT__' }}>Zen Plus</div>
                      <div style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, color: '#888', marginTop: 2 }}>La couverture compl&egrave;te</div>
                      <div style={{ display: 'flex', gap: 4, justifyContent: 'center', marginTop: 10 }}>
                        {[0,1,2].map(i => <div key={i} style={{ width: 22, height: 22, background: '__ACCENT__', WebkitMask: 'url("__ICON__") center/contain no-repeat', mask: 'url("__ICON__") center/contain no-repeat' }} />)}
                      </div>
                    </div>

                    {/* Row: Engagement */}
                    <div className="ps-tbl-label" style={{ background: '#fff' }}>
                      <div className="ps-tbl-icon" style={{ background: '__ICONBG__' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3" width="11" height="9.5" rx="1.5" stroke="__ACCENT__" strokeWidth="1.3"/><path d="M1.5 6h11" stroke="__ACCENT__" strokeWidth="1.3"/><path d="M4.5 1v3M9.5 1v3" stroke="__ACCENT__" strokeWidth="1.3" strokeLinecap="round"/></svg>
                      </div>
                      <span>Engagement</span>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>4 ans</div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>4 ans</div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>4 ans</div>

                    {/* Row: Periodicite */}
                    <div className="ps-tbl-label" style={{ background: '#f8f9fa' }}>
                      <div className="ps-tbl-icon" style={{ background: '__ICONBG__' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="__ACCENT__" strokeWidth="1.3" fill="none"/><path d="M7 4v3.5l2.5 1.5" stroke="__ACCENT__" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>
                      </div>
                      <span>P&eacute;riodicit&eacute; de la visite d&apos;entretien</span>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#f8f9fa' }}>Tous les 2 ans</div>
                    <div className="ps-tbl-val" style={{ background: '#f8f9fa' }}>Annuel</div>
                    <div className="ps-tbl-val" style={{ background: '#f8f9fa' }}>Annuel</div>

                    {/* Row: Attestation */}
                    <div className="ps-tbl-label" style={{ background: '#fff' }}>
                      <div className="ps-tbl-icon" style={{ background: '__ICONBG__' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2.5" y="1" width="9" height="12" rx="1.5" stroke="__ACCENT__" strokeWidth="1.3" fill="none"/><path d="M5 5h4M5 7.5h4M5 10h2.5" stroke="__ACCENT__" strokeWidth="1.1" strokeLinecap="round"/></svg>
                      </div>
                      <span>Attestation d&apos;entretien</span>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#d1d5db"/><path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="__ACCENT__"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="__ACCENT__"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>

                    {/* Row: Compte client */}
                    <div className="ps-tbl-label" style={{ background: '#f8f9fa' }}>
                      <div className="ps-tbl-icon" style={{ background: '__ICONBG__' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" stroke="__ACCENT__" strokeWidth="1.3" fill="none"/><path d="M2.5 13c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke="__ACCENT__" strokeWidth="1.3" strokeLinecap="round" fill="none"/></svg>
                      </div>
                      <span>Compte client online</span>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#f8f9fa' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="__ACCENT__"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#f8f9fa' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="__ACCENT__"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#f8f9fa' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="__ACCENT__"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>

                    {/* Row: Depannage */}
                    <div className="ps-tbl-label" style={{ background: '#fff' }}>
                      <div className="ps-tbl-icon" style={{ background: '__ICONBG__' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8 3a3 3 0 00-4 4l-2 2 1.5 1.5 2-2a3 3 0 004-4L8 6 7 5z" stroke="__ACCENT__" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                      </div>
                      <span>D&eacute;pannage, main d&apos;&oelig;uvre et d&eacute;placement</span>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#d1d5db"/><path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#d1d5db"/><path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>
                    </div>
                    <div className="ps-tbl-val" style={{ background: '#fff' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="__ACCENT__"/><path d="M7 12.5L10.5 16L17 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>

                    {/* CTA row */}
                    <div style={{ padding: '24px 20px', background: '#fff', borderTop: '2px solid #eee' }} />
                    {[0,1,2].map(i => (
                      <div key={i} style={{ padding: '20px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: '#fff', borderTop: '2px solid #eee' }}>
                        <a href="https://form.typeform.com/to/rRhOu7eb" target="_blank" rel="noopener noreferrer" className="ps-tbl-cta-btn" style={{ display: 'inline-block', padding: '10px 16px', borderRadius: 20, background: '__ACCENT__', color: '#fff', fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 12, fontWeight: 600, textDecoration: 'none', textAlign: 'center', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}>Voir nos offres d&apos;entretien</a>
                        <a href="/legal/cge" style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif", fontSize: 11, color: '#999', textDecoration: 'underline' }}>Conditions des contrats</a>
                      </div>
                    ))}
                  </div>
                </div>'''

NEW_CSS = '''        .ps-comparison-table {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          min-width: 680px;
          border-radius: 20px;
          overflow: hidden;
          background: #f8f9fa;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .ps-tbl-label {
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid #eee;
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #333;
        }
        .ps-tbl-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ps-tbl-val {
          padding: 14px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #eee;
          font-family: var(--font-jost), 'Jost', sans-serif;
          font-size: 14px;
          color: #333;
          text-align: center;
        }
        .ps-tbl-cta-btn:hover { opacity: 0.85; }'''

files_config = [
    ("panneaux-solaires", "Panneaux photovolta\u00efques", "#2a9b96", "/icons/CHARTEGRAPHIQUENAOSERVICE-18.webp", "#e6f5f3"),
    ("pompe-a-chaleur", "Pompes \u00e0 chaleur", "#e8552c", "/icons/CHARTEGRAPHIQUENAOSERVICE-20.webp", "#fdeee9"),
    ("boiler-thermodynamique", "Boiler thermodynamique", "#0c2a54", "/icons/CHARTEGRAPHIQUENAOSERVICE-15.webp", "#e8edf4"),
]

for slug, name, accent, icon, icon_bg in files_config:
    path = os.path.join(BASE, "app", "services", slug, "page.tsx")
    content = open(path, encoding="utf-8").read()

    # Build table JSX with substitutions
    table = TABLE_TEMPLATE.replace("__NAME__", name).replace("__ACCENT__", accent).replace("__ICON__", icon).replace("__ICONBG__", icon_bg)

    # Replace card section: from "{/* 3 pricing cards */}" up to (but not including) "{/* Discount banner"
    pattern = r'\s*\{/\* 3 pricing cards \*/\}.*?</div>\s*\n(\s*\{/\* Discount banner)'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        before = content[:match.start()]
        after = "\n\n                " + match.group(1) + content[match.end():]
        content = before + "\n" + table + after
        print(f"  [OK] Replaced card section in {slug}")
    else:
        print(f"  [WARN] Could not find card section in {slug}")

    # Replace old CSS classes
    old_css_pattern = r'\.ps-pricing-grid \{[^}]+\}\s*\.ps-contract-card \{[^}]+\}\s*\.ps-contract-card:hover \{[^}]+\}\s*@media[^{]+\{\s*\.ps-pricing-grid \{[^}]+\}\s*\}'
    if re.search(old_css_pattern, content):
        content = re.sub(old_css_pattern, NEW_CSS, content)
        print(f"  [OK] Replaced CSS in {slug}")
    else:
        print(f"  [WARN] Could not find old CSS in {slug}")

    open(path, "w", encoding="utf-8").write(content)
    print(f"  [DONE] {slug}")

print("\nAll files updated!")
