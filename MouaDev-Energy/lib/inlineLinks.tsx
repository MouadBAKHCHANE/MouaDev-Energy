import Link from 'next/link'
import type { ReactNode } from 'react'

const linkStyle = {
  color: 'var(--color-primary, #2a9b96)',
  fontWeight: 500,
  textDecoration: 'underline',
  textUnderlineOffset: 3,
} as const

/**
 * Les textes saisis dans Sanity sont du texte brut. On y accepte la syntaxe
 * `[texte](/chemin)` pour poser des liens : chemin interne → <Link>,
 * URL externe → nouvel onglet.
 */
export function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    const [, label, href] = m
    out.push(
      href.startsWith('/')
        ? <Link key={m.index} href={href} style={linkStyle}>{label}</Link>
        : <a key={m.index} href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>{label}</a>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}
