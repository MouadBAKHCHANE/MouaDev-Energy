import type { CSSProperties } from 'react'

/** Shape of a textStyle object from Sanity */
export interface TextStyle {
  fontSize?: number
  fontFamily?: string
  fontColor?: string
}

/** Font family CSS var map */
const FONT_MAP: Record<string, string> = {
  'Inter': "var(--font-inter), 'Inter', sans-serif",
  'Barlow': "var(--font-barlow), 'Barlow', sans-serif",
  'Space Grotesk': "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
  'Jost': "var(--font-jost), 'Jost', sans-serif",
}

/**
 * Convert a Sanity textStyle object to React inline CSS properties.
 * Returns an empty object if no overrides are set, so spreading is always safe.
 */
export function toCSS(style?: TextStyle | null): CSSProperties {
  if (!style) return {}
  const css: CSSProperties = {}
  if (style.fontSize) css.fontSize = style.fontSize
  if (style.fontFamily && FONT_MAP[style.fontFamily]) css.fontFamily = FONT_MAP[style.fontFamily]
  if (style.fontColor) css.color = style.fontColor
  return css
}
