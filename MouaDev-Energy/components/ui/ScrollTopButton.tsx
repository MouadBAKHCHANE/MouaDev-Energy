'use client'

import { useState, useEffect, useCallback } from 'react'

/**
 * Remontée en haut de page avec une durée proportionnelle à la distance.
 *
 * `window.scrollTo({ behavior: 'smooth' })` laisse le navigateur choisir la
 * durée, qui est quasi constante quelle que soit la distance : sur une page
 * longue, la remontée devient un défilement extrêmement rapide et illisible.
 * On anime donc nous-mêmes, entre 400 et 1100 ms selon la hauteur à parcourir.
 */
const MIN_DURATION = 400
const MAX_DURATION = 1100
const PX_PER_MS = 4

// easeInOutCubic : démarrage et arrivée doux, sans à-coup au milieu
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 500)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    const start = window.scrollY
    if (start === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      window.scrollTo(0, 0)
      return
    }

    const duration = Math.min(MAX_DURATION, Math.max(MIN_DURATION, start / PX_PER_MS))
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration)
      window.scrollTo(0, start * (1 - ease(progress)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: 'var(--btn-radius, 14px)',
        background: 'var(--color-primary-light, #50B5A2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 90,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
        fontSize: 20,
        border: '1px solid #fff',
      }}
      aria-label="Revenir en haut de la page"
    >
      ↑
    </button>
  )
}
