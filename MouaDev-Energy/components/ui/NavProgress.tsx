'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Barre de progression en haut de l'écran pendant une navigation interne.
 * Elle apparaît dès le clic sur un lien du site, et se termine quand la nouvelle page est affichée.
 * Sans elle, sur mobile, la page actuelle restait figée 1 à 2 s après le tap, sans aucun retour.
 * Styles dans globals.css (.nav-progress).
 */
export default function NavProgress() {
  const pathname = usePathname()
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')

  // Nouvelle page affichée : on termine la barre puis on la masque
  useEffect(() => {
    setState((s) => (s === 'loading' ? 'done' : s))
    const t = window.setTimeout(() => setState('idle'), 450)
    return () => window.clearTimeout(t)
  }, [pathname])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as HTMLElement | null)?.closest('a')
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return
      const url = new URL(link.href, window.location.href)
      // Seulement les liens internes vers une autre page (pas les ancres de la même page)
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return
      setState('loading')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <div className={`nav-progress is-${state}`} aria-hidden="true" />
}
