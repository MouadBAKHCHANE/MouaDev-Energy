interface SectionLabelProps {
  text: string
  showIcon?: boolean
}

export default function SectionLabel({ text, showIcon = true }: SectionLabelProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: "var(--font-jost), 'Jost', sans-serif",
        fontSize: 17,
        fontWeight: 600,
        letterSpacing: '-0.34px',
        lineHeight: '23.8px',
        textTransform: 'uppercase',
        color: '#000',
      }}
    >
      {/* Bolt icon — 24x24 SVG matching Framer extraction */}
      {showIcon && (
        <div style={{ width: 24, height: 24, flexShrink: 0, color: '#50B5A2' }}>
          <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" style={{ display: 'block' }}>
            <path d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61-14.62 73.12a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.13Z" />
          </svg>
        </div>
      )}
      {text}
    </div>
  )
}
