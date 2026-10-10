'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import { renderInline } from '@/lib/inlineLinks'

/** Accordéon FAQ, même rendu que les pages services (pastille « + » qui pivote). */
export default function LocalFaq({ title, faqs }: { title: string; faqs: { question: string; answer: string }[] }) {
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <SectionLabel text="QUESTIONS FRÉQUENTES" />
      </div>
      <h2 style={{
        fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
        fontSize: 28, fontWeight: 600, letterSpacing: -1,
        color: '#000', marginBottom: 32, lineHeight: '36px',
      }}>
        {title}
      </h2>

      {faqs.map((faq, i) => {
        const isActive = activeIdx === i
        return (
          <div key={i} style={{ borderBottom: '1px solid #e8e8e8' }}>
            <button
              type="button"
              onClick={() => setActiveIdx(isActive ? -1 : i)}
              aria-expanded={isActive}
              style={{
                width: '100%', background: 'none', border: 'none', textAlign: 'left',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, cursor: 'pointer', padding: '22px 0',
                fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                fontSize: 17, fontWeight: 500, color: '#000',
              }}
            >
              <span>{faq.question}</span>
              <span aria-hidden="true" style={{
                width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                border: isActive ? '1px solid var(--color-primary-light, #50b5a2)' : '1px solid #e8e8e8',
                background: isActive ? 'var(--color-primary-light, #50b5a2)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, lineHeight: 1,
                transform: isActive ? 'rotate(45deg)' : 'none',
                transition: 'all 0.2s ease',
              }}>+</span>
            </button>
            <div style={{
              maxHeight: isActive ? 600 : 0, overflow: 'hidden',
              transition: 'max-height 0.4s ease', paddingBottom: isActive ? 20 : 0,
            }}>
              <p style={{
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
                fontSize: 16, lineHeight: '26px', color: '#666', margin: 0,
              }}>
                {renderInline(faq.answer)}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
