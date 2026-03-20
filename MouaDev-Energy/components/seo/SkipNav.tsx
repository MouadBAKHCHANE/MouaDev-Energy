'use client'

export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="skip-nav"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      onFocus={(e) => {
        Object.assign(e.currentTarget.style, {
          position: 'fixed',
          left: '16px',
          top: '16px',
          width: 'auto',
          height: 'auto',
          overflow: 'visible',
          zIndex: '9999',
          padding: '12px 24px',
          background: 'var(--color-primary, #2a9b96)',
          color: '#fff',
          borderRadius: '8px',
          fontWeight: '600',
          textDecoration: 'none',
        })
      }}
      onBlur={(e) => {
        Object.assign(e.currentTarget.style, {
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        })
      }}
    >
      Aller au contenu principal
    </a>
  )
}
