interface MarqueeProps {
  lightItems?: string[]
  darkItems?: string[]
}

export default function Marquee({
  lightItems,
  darkItems,
}: MarqueeProps) {
  const light = lightItems?.length ? [
    ...lightItems, ...lightItems, ...lightItems,
  ] : [
    'L\'Avenir avec le Soleil',
    'Innovation Solaire',
    'Énergie Renouvelable',
    'Innovation Solaire',
    'L\'Avenir avec le Soleil',
    'Innovation Solaire',
    'Énergie Renouvelable',
    'Innovation Solaire',
  ]

  const dark = darkItems?.length ? [
    ...darkItems, ...darkItems,
  ] : [
    'Révolution Renouvelable',
    'Énergie Propre',
    'Solutions Solaires',
    'Énergie du Soleil',
    'Un Futur Radieux',
    'Révolution Renouvelable',
    'Énergie Propre',
    'Solutions Solaires',
    'Énergie du Soleil',
    'Un Futur Radieux',
  ]

  const LightIcon = () => (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" style={{ flexShrink: 0, transform: 'rotate(-1deg)' }}>
      <path d="M11 0L13.5 9.5L22 13L13.5 16.5L11 26L8.5 16.5L0 13L8.5 9.5L11 0Z" />
    </svg>
  )

  const DarkIcon = () => (
    <svg width="15" height="17" viewBox="0 0 15 17" fill="currentColor" style={{ flexShrink: 0, transform: 'rotate(2deg)' }}>
      <path d="M7.5 0L9.5 6L15 8.5L9.5 11L7.5 17L5.5 11L0 8.5L5.5 6L7.5 0Z" />
    </svg>
  )

  const h4Style: React.CSSProperties = {
    fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
    fontSize: 24,
    fontWeight: 600,
    lineHeight: '30px',
    whiteSpace: 'pre',
    margin: 0,
  }

  return (
    <section style={{ overflow: 'clip', padding: '20px 0' }}>
      {/* Light Row */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 80,
          overflow: 'hidden',
          background: '#f8f8f8',
          transform: 'rotate(2deg)',
          width: 'calc(100% + 60px)',
          marginLeft: -30,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
          isolation: 'isolate',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
            animation: 'mqReverse 30s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {[...light, ...light].map((text, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 40,
                flexShrink: 0,
                padding: 12,
              }}
            >
              <LightIcon />
              <h4 style={{ ...h4Style, color: '#000' }}>{text}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Row */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 80,
          overflow: 'hidden',
          background: '#2c6262',
          borderRadius: 40,
          transform: 'rotate(-2deg)',
          width: 'calc(100% + 60px)',
          marginLeft: -30,
          marginTop: -10,
          position: 'relative',
          zIndex: 1,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
          isolation: 'isolate',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            padding: 10,
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 30,
              animation: 'mq 30s linear infinite',
              whiteSpace: 'nowrap',
            }}
          >
            {[...dark, ...dark].map((text, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 25,
                  flexShrink: 0,
                  padding: '22px 20px 23px 0',
                  transform: 'rotate(-2deg)',
                }}
              >
                <DarkIcon />
                <h4 style={{ ...h4Style, color: '#fff' }}>{text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
