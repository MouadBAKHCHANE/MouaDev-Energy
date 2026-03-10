interface ArrowIconProps {
  direction: 'right' | 'diagonal'
  size?: number
  strokeColor?: string
}

export default function ArrowIcon({ direction, size, strokeColor = '#000' }: ArrowIconProps) {
  if (direction === 'right') {
    const w = size || 20
    return (
      <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={2}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    )
  }

  return (
    <svg width={size || 18} height={size || 18} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth={2}>
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}
