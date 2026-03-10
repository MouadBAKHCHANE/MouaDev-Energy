import type { Metadata } from 'next'
import { Barlow, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollTopButton from '@/components/ui/ScrollTopButton'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Zen Énergie Services - Maintenance et Entretien Suisse',
  description: 'Votre partenaire de confiance pour la maintenance et l’entretien de vos installations énergétiques en Suisse romande.',
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
