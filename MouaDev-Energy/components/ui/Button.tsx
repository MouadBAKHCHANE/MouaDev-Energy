'use client'

import ArrowIcon from './ArrowIcon'

interface ButtonProps {
  variant: 'dark' | 'lime' | 'outline'
  size?: 'default' | 'sm'
  label: string
  href?: string
  showArrow?: boolean
}

export default function Button({
  variant,
  size = 'default',
  label,
  href,
  showArrow = true,
}: ButtonProps) {
  const isOutline = variant === 'outline'
  const isSm = size === 'sm'

  // Extracted: <a> padding 9px 8px 9px 24px, Inter 16px/600
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 14,
    fontFamily: "var(--font-inter), 'Inter', sans-serif",
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: '-0.32px',
    lineHeight: '22.4px',
    cursor: 'pointer',
    transition: 'all 0.18s ease',
    whiteSpace: 'normal',
    textAlign: 'left',
    maxWidth: '100%',
    textDecoration: 'none',
  }

  // Variant styles
  if (variant === 'dark') {
    Object.assign(baseStyle, {
      background: '#000', color: '#fff',
      padding: isSm ? '8px 6px 8px 20px' : '9px 8px 9px 24px',
      gap: isSm ? 12 : 24,
    })
  } else if (variant === 'lime') {
    Object.assign(baseStyle, {
      background: '#50B5A2', color: '#000',
      padding: isSm ? '8px 6px 8px 20px' : '9px 8px 9px 24px',
      gap: isSm ? 12 : 24,
    })
  } else if (variant === 'outline') {
    Object.assign(baseStyle, {
      background: 'transparent',
      border: '1px solid #000',
      color: '#000',
      padding: '12px 24px',
      gap: 12,
    })
  }

  // Arrow circle — Extracted: 48x44, white bg on dark/lime
  const arrW = isOutline ? 40 : isSm ? 36 : 48
  const arrH = isOutline ? 40 : isSm ? 36 : 44
  const arrStyle: React.CSSProperties = {
    width: arrW,
    height: arrH,
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    overflow: 'hidden',
    transition: 'background 0.3s ease',
  }

  if (variant === 'dark') {
    arrStyle.background = '#fff'
  } else if (variant === 'lime') {
    arrStyle.background = '#000'
  } else if (variant === 'outline') {
    arrStyle.background = '#000'
  }

  const arrowStroke =
    variant === 'dark' ? '#000' : variant === 'lime' ? '#fff' : '#fff'
  const arrowSize = isSm ? 16 : 20

  const inner = (
    <>
      <span className="lbl">{label}</span>
      {showArrow && (
        <span className="arr" style={arrStyle}>
          <ArrowIcon direction="right" size={arrowSize} strokeColor={arrowStroke} />
        </span>
      )}
    </>
  )

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const arr = el.querySelector('.arr') as HTMLElement
    const svg = arr?.querySelector('svg') as SVGElement

    if (svg) {
      svg.style.transform = 'translateX(4px)'
      svg.style.transition = 'transform 0.3s ease'
    }

    if (variant === 'dark') {
      if (arr) {
        arr.style.background = '#50B5A2'
        arr.querySelectorAll('line, path, polyline').forEach(s => (s as SVGElement).setAttribute('stroke', '#000'))
      }
    } else if (variant === 'lime') {
      if (arr) {
        arr.style.background = '#fff'
        arr.querySelectorAll('line, path, polyline').forEach(s => (s as SVGElement).setAttribute('stroke', '#000'))
      }
    } else if (variant === 'outline') {
      el.style.background = '#000'
      el.style.color = '#fff'
      el.style.borderColor = '#000'
      if (arr) {
        arr.style.background = '#fff'
        arr.querySelectorAll('line, path, polyline').forEach(s => (s as SVGElement).setAttribute('stroke', '#000'))
      }
    }
  }

  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    const arr = el.querySelector('.arr') as HTMLElement
    const svg = arr?.querySelector('svg') as SVGElement

    if (svg) {
      svg.style.transform = 'translateX(0px)'
    }

    if (variant === 'dark') {
      if (arr) {
        arr.style.background = '#fff'
        arr.querySelectorAll('line, path, polyline').forEach(s => (s as SVGElement).setAttribute('stroke', '#000'))
      }
    } else if (variant === 'lime') {
      if (arr) {
        arr.style.background = '#000'
        arr.querySelectorAll('line, path, polyline').forEach(s => (s as SVGElement).setAttribute('stroke', '#fff'))
      }
    } else if (variant === 'outline') {
      el.style.background = 'transparent'
      el.style.color = '#000'
      el.style.borderColor = '#000'
      if (arr) {
        arr.style.background = '#000'
        arr.querySelectorAll('line, path, polyline').forEach(s => (s as SVGElement).setAttribute('stroke', '#fff'))
      }
    }
  }

  if (href) {
    return (
      <a
        href={href}
        style={baseStyle}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      style={baseStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {inner}
    </button>
  )
}
