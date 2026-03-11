import type { Metadata } from 'next'
import { Barlow, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollTopButton from '@/components/ui/ScrollTopButton'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Zen Énergie Services — Maintenance et Entretien Suisse',
  description: "Votre partenaire de confiance pour la maintenance et l'entretien de vos installations énergétiques en Suisse romande. Pompes à chaleur, panneaux solaires, boilers thermodynamiques.",
  keywords: ['maintenance énergétique', 'pompe à chaleur', 'panneaux solaires', 'boiler thermodynamique', 'Genève', 'Suisse romande', 'entretien'],
  authors: [{ name: 'Zen Énergie Services' }],
  openGraph: {
    title: 'Zen Énergie Services — Maintenance et Entretien Suisse',
    description: "Partenaire de référence pour la maintenance de vos installations énergétiques en Suisse romande.",
    locale: 'fr_CH',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon-32.png',
    apple: { url: '/icon.png', sizes: '512x512', type: 'image/png' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollTopButton />
      </body>
    </html>
  )
}
