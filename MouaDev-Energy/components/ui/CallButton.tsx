interface CallButtonProps {
  phone: string
  /** Texte affiché ; par défaut le numéro lui-même. */
  label?: string
  /** light : sur fond sombre (hero) ; dark : sur fond blanc. */
  tone?: 'light' | 'dark'
  size?: 'default' | 'sm'
  className?: string
}

/**
 * Bouton secondaire « Appeler » : même gabarit que Button (rayon, hauteur, police),
 * avec l'icône à gauche. Styles dans globals.css (.call-btn).
 */
export default function CallButton({ phone, label, tone = 'light', size = 'default', className }: CallButtonProps) {
  const classes = ['call-btn', `call-btn--${tone}`, size === 'sm' ? 'call-btn--sm' : '', className ?? '']
    .filter(Boolean)
    .join(' ')

  return (
    <a href={`tel:${phone.replace(/\s/g, '')}`} className={classes} aria-label={`Appeler le ${phone}`}>
      <span className="call-btn-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <span className="call-btn-label">{label ?? phone}</span>
    </a>
  )
}
