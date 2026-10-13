'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { MAP_W, MAP_H, SWISS_PATHS, ZONE_CITIES } from './swissMap'

interface Props {
  /** Pages locales publiées, ex. { city: 'Lausanne', href: '/services/pv-clean/lausanne' } */
  pages: { city: string; href: string }[]
}

const slugOf = (href: string) => href.split('/').filter(Boolean).pop() ?? ''

/**
 * « Nos zones d'intervention » : carte de la Suisse (cantons desservis en couleur) et boutons des
 * pages locales, reliés à leur ville par une flèche. Les flèches sont tracées en mesurant les
 * positions réelles des boutons et des points, donc elles restent justes à toutes les largeurs.
 * Sur mobile (liste sous la carte), pas de flèches : chaque point porte le nom de sa ville.
 */
export default function ZonesMap({ pages }: Props) {
  const uid = useId().replace(/:/g, '')
  const bodyRef = useRef<HTMLDivElement>(null)
  const [lines, setLines] = useState<{ key: string; d: string }[]>([])
  const [active, setActive] = useState<string | null>(null)

  // Boutons classés du nord au sud, comme les villes sur la carte : les flèches ne se croisent pas
  const items = useMemo(() => {
    const y = (key: string) => ZONE_CITIES.find((c) => c.key === key)?.y ?? Infinity
    return pages.map((p) => ({ ...p, key: slugOf(p.href) })).sort((a, b) => y(a.key) - y(b.key))
  }, [pages])
  const pageKeys = useMemo(() => new Set(items.map((i) => i.key)), [items])

  const measure = useCallback(() => {
    const body = bodyRef.current
    if (!body) return
    // Flèches seulement quand la liste est à côté de la carte (voir --zm-lines dans le CSS)
    if (getComputedStyle(body).getPropertyValue('--zm-lines').trim() !== '1') {
      setLines([])
      return
    }
    const b = body.getBoundingClientRect()
    const next: { key: string; d: string }[] = []
    for (const it of items) {
      const btn = body.querySelector(`[data-zone="${it.key}"]`)
      const dot = body.querySelector(`[data-dot="${it.key}"]`)
      if (!btn || !dot) continue
      const rb = btn.getBoundingClientRect()
      const rd = dot.getBoundingClientRect()
      const x1 = rb.right - b.left + 6
      const y1 = rb.top + rb.height / 2 - b.top
      const cx = rd.left + rd.width / 2 - b.left
      const cy = rd.top + rd.height / 2 - b.top
      // Courbe qui arrive à l'horizontale, arrêtée juste avant le point : la pointe le touche sans le couvrir
      const x2 = cx - rd.width / 2 - 5
      const dx = Math.max(24, (x2 - x1) * 0.55)
      next.push({ key: it.key, d: `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${cy} ${x2},${cy}` })
    }
    setLines(next)
  }, [items])

  useEffect(() => {
    measure()
    const body = bodyRef.current
    const ro = new ResizeObserver(() => measure())
    if (body) ro.observe(body)
    // La largeur des boutons change quand les polices web finissent de charger
    document.fonts?.ready.then(() => measure()).catch(() => {})
    return () => ro.disconnect()
  }, [measure])

  return (
    <div className="zm">
      <h2 className="zm-title">Nos zones d&apos;intervention</h2>
      <p className="zm-intro">
        Nous intervenons dans les cantons de Genève, Vaud, Fribourg, Neuchâtel et du Valais.
      </p>

      <div className="zm-body" ref={bodyRef}>
        <ul className="zm-list">
          {items.map((it) => (
            <li key={it.key}>
              <Link
                href={it.href}
                data-zone={it.key}
                className={`zm-btn${active === it.key ? ' is-active' : ''}`}
                onMouseEnter={() => setActive(it.key)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(it.key)}
                onBlur={() => setActive(null)}
              >
                Nettoyage de panneaux solaires à {it.city}
                <span className="zm-btn-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="zm-map">
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            role="img"
            aria-label="Carte de la Suisse : zone d'intervention dans les cantons de Genève, Vaud, Fribourg, Neuchâtel et du Valais"
          >
            <path d={SWISS_PATHS.country} className="zm-country" />
            <path d={SWISS_PATHS.served} className="zm-served" />
            <path d={SWISS_PATHS.borders} className="zm-borders" />
            <path d={SWISS_PATHS.lakes} className="zm-lakes" />
            {ZONE_CITIES.map((c) => {
              const hasPage = pageKeys.has(c.key)
              return (
                <g key={c.key} className={`zm-city${hasPage ? ' has-page' : ''}${active === c.key ? ' is-active' : ''}`}>
                  {hasPage && <circle className="zm-pulse" cx={c.x} cy={c.y} r={14} />}
                  <circle data-dot={c.key} className="zm-dot" cx={c.x} cy={c.y} r={hasPage ? 14 : 9} />
                  <text className="zm-label" x={c.x + 22} y={c.y + 9}>{c.name}</text>
                </g>
              )
            })}
          </svg>
        </div>

        {lines.length > 0 && (
          <svg className="zm-lines" aria-hidden="true">
            <defs>
              <marker id={`${uid}-a`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--color-primary, #2a9b96)" />
              </marker>
              <marker id={`${uid}-b`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--color-primary-dark, #2c6262)" />
              </marker>
            </defs>
            {lines.map((l) => (
              <path
                key={l.key}
                d={l.d}
                className={`zm-line${active === l.key ? ' is-active' : ''}`}
                markerEnd={`url(#${uid}-${active === l.key ? 'b' : 'a'})`}
              />
            ))}
          </svg>
        )}
      </div>

      <style>{`
        .zm { margin-bottom: 48px; padding: 24px 28px 22px; border-radius: 16px; background: #f3f8f7; border: 1px solid #d5ebe8; }
        .zm-title {
          font-family: var(--font-space-grotesk), 'Space Grotesk', sans-serif;
          font-size: 20px; font-weight: 700; color: #000; margin: 0 0 6px; letter-spacing: -0.3px;
        }
        .zm-intro { font-family: var(--font-jost), 'Jost', sans-serif; font-size: 15px; line-height: 23px; color: #555; margin: 0 0 18px; }

        .zm-body {
          --zm-lines: 1;
          position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 48px; align-items: center;
        }
        .zm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 2; }
        .zm-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-jost), 'Jost', sans-serif; font-size: 15px; color: #2c6262;
          background: #fff; border: 1px solid #d5ebe8; border-radius: var(--btn-radius-sm, 10px);
          padding: 9px 14px 9px 16px; text-decoration: none; white-space: nowrap;
          box-shadow: 0 2px 8px rgba(44, 98, 98, 0.06);
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .zm-btn-arrow { display: inline-block; transition: transform 0.25s ease; }
        .zm-btn:hover, .zm-btn:focus-visible, .zm-btn.is-active {
          background: var(--color-primary-dark, #2c6262); border-color: var(--color-primary-dark, #2c6262); color: #fff;
          transform: translateY(-2px); box-shadow: 0 8px 18px rgba(44, 98, 98, 0.22);
        }
        .zm-btn:hover .zm-btn-arrow, .zm-btn:focus-visible .zm-btn-arrow, .zm-btn.is-active .zm-btn-arrow { transform: translateX(4px); }

        .zm-map { position: relative; z-index: 1; }
        .zm-map svg { display: block; width: 100%; height: auto; overflow: visible; }
        .zm-country { fill: #e3ece9; stroke: #cfdedb; stroke-width: 1.5; }
        .zm-served { fill: rgba(80, 181, 162, 0.38); stroke: var(--color-primary, #2a9b96); stroke-width: 1.8; }
        .zm-borders { fill: none; stroke: #fff; stroke-width: 2; }
        .zm-lakes { fill: #d3e9ee; }
        .zm-dot { fill: var(--color-primary, #2a9b96); stroke: #fff; stroke-width: 3; transition: fill 0.25s ease; }
        .zm-city.has-page .zm-dot { fill: var(--color-primary-dark, #2c6262); }
        .zm-city.is-active .zm-dot { fill: #000; }
        .zm-pulse {
          fill: var(--color-primary-dark, #2c6262); opacity: 0;
          transform-box: fill-box; transform-origin: center; animation: zmPulse 2.4s ease-out infinite;
        }
        @keyframes zmPulse { from { transform: scale(0.8); opacity: 0.45; } to { transform: scale(2.6); opacity: 0; } }
        .zm-label {
          font-family: var(--font-jost), 'Jost', sans-serif; font-size: 28px; font-weight: 500; fill: #2c6262;
          paint-order: stroke; stroke: #f3f8f7; stroke-width: 6px; stroke-linejoin: round;
        }
        .zm-city.has-page .zm-label { font-weight: 700; }


        .zm-lines { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; z-index: 1; }
        .zm-line { fill: none; stroke: var(--color-primary, #2a9b96); stroke-width: 1.6; stroke-dasharray: 5 5; transition: stroke 0.25s ease, stroke-width 0.25s ease; }
        .zm-line.is-active { stroke: var(--color-primary-dark, #2c6262); stroke-width: 2.2; stroke-dasharray: none; }

        /* Tablette et mobile : carte au-dessus, boutons en dessous, sans flèches */
        @media (max-width: 760px) {
          .zm { padding: 20px 16px 18px; }
          .zm-body { --zm-lines: 0; grid-template-columns: 1fr; gap: 18px; }
          .zm-map { order: -1; }
          .zm-btn { white-space: normal; }
          .zm-label { font-size: 40px; stroke-width: 9px; }
        }
      `}</style>
    </div>
  )
}
