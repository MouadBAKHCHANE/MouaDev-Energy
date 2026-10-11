'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import CallButton from '@/components/ui/CallButton'

/**
 * Barre d'action fixée en bas de l'écran, sur mobile uniquement (CSS).
 * Elle n'apparaît que lorsqu'aucun autre bouton devis n'est visible : ni ceux sous
 * l'introduction, ni la carte devis, ni le footer (qu'elle masquerait).
 */
export default function LocalStickyCta({ phone, ctaHref }: { phone: string; ctaHref: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const targets = [
      document.getElementById('lp-intro-actions'),
      document.querySelector('.lp-cta'),
      document.querySelector('footer'),
    ].filter(Boolean) as Element[]

    const onScreen = new Set<Element>()
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) onScreen.add(e.target)
        else onScreen.delete(e.target)
      }
      setVisible(onScreen.size === 0)
    })
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  // Remonte le bouton « retour en haut » pour qu'il ne passe pas sous la barre
  useEffect(() => {
    document.body.classList.toggle('has-sticky-cta', visible)
    return () => document.body.classList.remove('has-sticky-cta')
  }, [visible])

  return (
    <div className={`lp-sticky${visible ? ' is-visible' : ''}`}>
      <CallButton phone={phone} label="Appeler" tone="dark" size="sm" />
      <Button variant="lime" size="sm" fullWidth label="Demander un devis" href={ctaHref} />
    </div>
  )
}
