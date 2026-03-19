import type { Metadata } from 'next'
import LegalPageLayout from '../LegalPageLayout'
import { getLegalPage } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLegalPage('confidentialite')
  return {
    title: data?.seoTitle || 'Politique de Confidentialité et Cookies',
    description: data?.seoDescription || "Politique de confidentialité et gestion des cookies de Zen Énergie Services. Protection de vos données personnelles.",
    alternates: { canonical: '/legal/politique-confidentialite-cookies' },
  }
}

const defaultSections = [
  { title: "Introduction", content: `Zen Énergie Services Suisse attache une grande importance à la confidentialité et à la protection des données personnelles des utilisateurs de son site et de ses clients. Cette politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.` },
  { title: "Données collectées", content: `Les données personnelles suivantes peuvent être collectées :\n• Identité : nom, prénom, adresse email, numéro de téléphone, adresse postale.\n• Données techniques : adresse IP, type de navigateur, système d'exploitation, données de navigation sur le site.\n• Données contractuelles : informations nécessaires pour souscrire et gérer les contrats d'entretien et de maintenance.` },
  { title: "Utilisation des données", content: `Vos données personnelles sont collectées et utilisées dans le cadre suivant :\n1. Gestion des souscriptions à nos services d'entretien.\n2. Envoi de communications commerciales ou techniques.\n3. Analyse du trafic sur le site pour l'amélioration de nos services.\n4. Respect des obligations légales et contractuelles.` },
  { title: "Durée de conservation", content: `Les données sont conservées uniquement pour la durée nécessaire à la réalisation des finalités mentionnées, conformément à la loi suisse.` },
  { title: "Droits des utilisateurs", content: `Conformément à la législation suisse, vous disposez des droits suivants :\n• Droit d'accès : connaître les données que nous détenons sur vous.\n• Droit de rectification : corriger des données inexactes.\n• Droit à l'effacement : demander la suppression de vos données, sauf obligation légale contraire.\n• Droit d'opposition : vous opposer à l'utilisation de vos données à des fins de marketing direct.\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870` },
  { title: "Sécurité", content: `Zen Énergie Services Suisse met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre les accès non autorisés, la perte ou le vol.` },
  { title: "Qu'est-ce qu'un cookie ?", content: `Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lors de votre visite sur un site web.` },
  { title: "Types de cookies utilisés par Zen Énergie Services Suisse", content: `1. Cookies strictement nécessaires : indispensables pour naviguer sur notre site et utiliser ses fonctionnalités.\n2. Cookies de performance : utilisés pour analyser l'audience du site (via des outils comme Google Analytics).\n3. Cookies fonctionnels : permettent de mémoriser vos choix (langue, préférences).\n4. Cookies publicitaires : utilisés pour afficher des publicités ciblées (le cas échéant).` },
  { title: "Consentement", content: `Lors de votre première visite, un bandeau vous informe de l'utilisation des cookies. Vous pouvez accepter ou configurer vos préférences via ce bandeau.` },
  { title: "Gestion des cookies", content: `Vous pouvez désactiver les cookies en modifiant les paramètres de votre navigateur :\n• Pour Chrome : https://support.google.com/chrome/answer/95647\n• Pour Firefox : https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent` },
  { title: "Contact", content: `Pour toute question sur vos données personnelles ou pour exercer vos droits, contactez-nous à : contact@zen-energieservices.ch\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870` },
  { title: "Modifications", content: `Cette politique pourra être mise à jour régulièrement. Toute modification sera publiée sur cette page.` },
]

export default async function PrivacyCookiesPage() {
  const data = await getLegalPage('confidentialite')

  const heroTitle   = data?.heroTitle              || 'Politique de Confidentialité & Cookies'
  const lastUpdated = data?.lastUpdated             || '01.04.2025'
  const sections    = data?.sections?.length ? data.sections : defaultSections

  return (
    <LegalPageLayout
      heroTitle={heroTitle}
      crumbLabel="Confidentialité & Cookies"
      mainTitle="POLITIQUE DE CONFIDENTIALITÉ & COOKIES"
      lastUpdated={lastUpdated}
      sections={sections}
    />
  )
}
