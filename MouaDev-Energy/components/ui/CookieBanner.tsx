'use client'

import { useState, useEffect } from 'react'

interface CookieBannerProps {
  message: string
  privacyLink?: string
}

const COOKIE_KEY = 'zen-cookie-consent'

export default function CookieBanner({ message, privacyLink }: CookieBannerProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  function refuse() {
    localStorage.setItem(COOKIE_KEY, 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--color-primary-dark, #2c6262)',
        color: '#fff',
        padding: '20px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <p style={{ margin: 0, fontSize: 14, lineHeight: '22px', maxWidth: 700, textAlign: 'center' }}>
        {message}
        {privacyLink && (
          <>
            {' '}
            <a
              href={privacyLink}
              style={{ color: 'var(--color-primary-light, #50b5a2)', textDecoration: 'underline' }}
            >
              Politique de confidentialité
            </a>
          </>
        )}
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={accept}
          style={{
            background: 'var(--color-primary, #2a9b96)',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--btn-radius, 14px)',
            padding: '10px 24px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Tout accepter
        </button>
        <button
          onClick={refuse}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: 'var(--btn-radius, 14px)',
            padding: '10px 24px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Refuser
        </button>
      </div>
    </div>
  )
}
