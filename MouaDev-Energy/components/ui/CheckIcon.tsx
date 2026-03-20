export default function CheckIcon() {
  return (
    <div style={{
      width: 18,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-primary-light, #50b5a2)',
      borderRadius: '50%',
      flexShrink: 0
    }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  )
}
