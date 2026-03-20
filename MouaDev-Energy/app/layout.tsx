import type { Metadata } from 'next'
import { Barlow, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import { getSiteSettings, getMarketingSettings, getThemeSettings } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import { organizationJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import SkipNav from '@/components/seo/SkipNav'
import { TrackingHead, TrackingBodyStart, TrackingBodyEnd } from '@/components/seo/TrackingScripts'
import ThemeStyles from '@/components/seo/ThemeStyles'
import CookieBanner from '@/components/ui/CookieBanner'

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Zen Énergie Services — Maintenance et Entretien Suisse',
    template: `%s | ${SITE_NAME}`,
  },
  description: "Votre partenaire de confiance pour la maintenance et l'entretien de vos installations énergétiques en Suisse romande. Pompes à chaleur, panneaux solaires, boilers thermodynamiques.",
  keywords: ['maintenance énergétique', 'pompe à chaleur', 'panneaux solaires', 'boiler thermodynamique', 'Genève', 'Suisse romande', 'entretien'],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: 'Zen Énergie Services — Maintenance et Entretien Suisse',
    description: "Partenaire de référence pour la maintenance de vos installations énergétiques en Suisse romande.",
    locale: 'fr_CH',
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Zen Énergie Services — Maintenance Énergétique Suisse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
  },
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
  const [settings, marketing, theme] = await Promise.all([getSiteSettings(), getMarketingSettings(), getThemeSettings()])

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
      <head>
        <TrackingHead
          googleAnalyticsId={marketing?.googleAnalyticsId}
          googleTagManagerId={marketing?.googleTagManagerId}
          googleSearchConsoleVerification={marketing?.googleSearchConsoleVerification}
          facebookPixelId={marketing?.facebookPixelId}
          tiktokPixelId={marketing?.tiktokPixelId}
          linkedinPartnerId={marketing?.linkedinPartnerId}
          googleAdsId={marketing?.googleAdsId}
          headScripts={marketing?.headScripts}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeStyles
          colorPrimary={theme?.colorPrimary}
          colorHover={theme?.colorHover}
          colorDark={theme?.colorDark}
          buttonStyle={theme?.buttonStyle}
          cardStyle={theme?.cardStyle}
        />
        <TrackingBodyStart
          googleTagManagerId={marketing?.googleTagManagerId}
          bodyStartScripts={marketing?.bodyStartScripts}
        />
        <SkipNav />
        <JsonLd data={organizationJsonLd()} />
        <Header siteData={siteData} />
        <div id="main-content">{children}</div>
        <Footer siteData={siteData} />
        <ScrollTopButton />
        <TrackingBodyEnd bodyEndScripts={marketing?.bodyEndScripts} />
        {marketing?.cookieConsentEnabled && marketing?.cookieConsentMessage && (
          <CookieBanner
            message={marketing.cookieConsentMessage}
            privacyLink={marketing.cookieConsentPrivacyLink}
          />
        )}
      </body>
    </html>
  )
}
