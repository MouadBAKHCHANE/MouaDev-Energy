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
      {showIcon && (
        <img
          src="/Logo image/Vert medium.webp"
          alt=""
          style={{ width: 22, height: 22, objectFit: 'contain', flexShrink: 0 }}
        />
      )}
      {text}
    </div>
  )
}
