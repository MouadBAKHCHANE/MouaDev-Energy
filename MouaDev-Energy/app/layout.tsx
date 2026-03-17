import type { Metadata } from 'next'
import { Barlow, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import { getSiteSettings } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'

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

export const revalidate = 60

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()

  const img = (src: any) => src ? urlFor(src).width(400).quality(80).url() : undefined

  const siteData = {
    phone: settings?.phone ?? '+41 21 512 05 74',
    email: settings?.email ?? 'contact@zen-energieservices.ch',
    address: settings?.address ?? 'Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève',
    typeformUrl: settings?.typeformUrl ?? 'https://form.typeform.com/to/rRhOu7eb',
    logoLight: img(settings?.logoLight) ?? '/Logo complet/Blanc.webp',
    logoDark: img(settings?.logoDark) ?? '/Logo complet/Vert medium.webp',
    logoIcon: img(settings?.logoIcon) ?? '/Logo image/Blanc.webp',
    socialLinks: settings?.socialLinks ?? [],
    footerAbout: settings?.footerAbout ?? "Votre partenaire de confiance pour la maintenance et l'entretien de vos installations énergétiques en Suisse Romande.",
    footerNewsletter: settings?.footerNewsletter ?? 'Inscrivez-vous pour recevoir nos dernières actualités et offres.',
    copyright: settings?.copyright ?? '© 2026 Zen Énergie Services Suisse. Tous droits réservés.',
  }

  return (
    <html lang="fr" className={`${barlow.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header siteData={siteData} />
        {children}
        <Footer siteData={siteData} />
        <ScrollTopButton />
      </body>
    </html>
  )
}
