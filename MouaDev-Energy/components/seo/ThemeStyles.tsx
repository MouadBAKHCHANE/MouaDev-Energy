const BUTTON_STYLES: Record<string, Record<string, string>> = {
  rounded: { '--btn-radius': '14px', '--btn-radius-sm': '10px' },
  square: { '--btn-radius': '6px', '--btn-radius-sm': '4px' },
  pill: { '--btn-radius': '50px', '--btn-radius-sm': '50px' },
}

const CARD_STYLES: Record<string, Record<string, string>> = {
  rounded: { '--card-radius': '24px', '--card-shadow': '0 4px 20px rgba(0,0,0,0.06)' },
  square: { '--card-radius': '8px', '--card-shadow': '0 2px 8px rgba(0,0,0,0.06)' },
  shadow: { '--card-radius': '24px', '--card-shadow': '0 12px 40px rgba(0,0,0,0.12)' },
}

interface ThemeStylesProps {
  colorPrimary?: string
  colorHover?: string
  colorDark?: string
  buttonStyle?: string
  cardStyle?: string
}

export default function ThemeStyles({
  colorPrimary,
  colorHover,
  colorDark,
  buttonStyle = 'rounded',
  cardStyle = 'rounded',
}: ThemeStylesProps) {
  const vars: Record<string, string> = {
    ...BUTTON_STYLES[buttonStyle] ?? BUTTON_STYLES.rounded,
    ...CARD_STYLES[cardStyle] ?? CARD_STYLES.rounded,
  }

  // Only inject color overrides if they're set in Sanity
  if (colorPrimary) vars['--color-primary'] = colorPrimary
  if (colorHover) {
    vars['--color-primary-light'] = colorHover
    vars['--color-accent'] = colorHover
  }
  if (colorDark) vars['--color-primary-dark'] = colorDark

  const css = `:root {\n${Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`

  return <style dangerouslySetInnerHTML={{ __html: css }} />
}
