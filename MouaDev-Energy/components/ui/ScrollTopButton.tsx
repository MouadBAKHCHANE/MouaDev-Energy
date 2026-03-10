'use client'

import { useState, useEffect } from 'react'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        width: 50,
        height: 50,
        borderRadius: 14,
        background: '#50B5A2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 90,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        fontSize: 20,
        border: '1px solid #fff',
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
