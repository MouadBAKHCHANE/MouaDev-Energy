'use client'

import { useEffect } from 'react'
import { createPopup } from '@typeform/embed'
import '@typeform/embed/build/css/popup.css'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

/**
 * Intercepte globalement les clics vers un lien Typeform (form.typeform.com/to/<id>)
 * et ouvre le formulaire en POPUP (l'utilisateur reste sur le domaine).
 * À la soumission réelle (callback onSubmit), déclenche la conversion une seule fois :
 *  - GA4   : generate_lead
 *  - Meta  : Lead   (Pixel déjà chargé sur le site)
 *  - (Google Ads futur : ajouter ici gtag('event','conversion',{ send_to:'AW-…/label' }))
 *
 * Avantage vs lien externe / page merci : on ne quitte jamais le site, donc le contexte
 * d'attribution (gclid Google, _fbc Meta) reste disponible → conversion exacte, sans sur-comptage.
 */
export default function TypeformLeadPopup() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // ignore les clics modifiés (ouverture volontaire dans un nouvel onglet)
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return

      const target = e.target as HTMLElement | null
      const link = target?.closest('a[href*="form.typeform.com/to/"]') as HTMLAnchorElement | null
      if (!link) return

      const match = link.href.match(/form\.typeform\.com\/to\/([A-Za-z0-9]+)/)
      if (!match) return

      e.preventDefault()

      const popup = createPopup(match[1], {
        onSubmit: () => {
          window.gtag?.('event', 'generate_lead', { method: 'typeform' })
          window.fbq?.('track', 'Lead')
        },
      })
      popup.open()
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}