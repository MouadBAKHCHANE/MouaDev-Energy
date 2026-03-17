import LegalPageLayout from '../LegalPageLayout'
import { getLegalPage } from '@/lib/queries'

const defaultCompanyInfo = [
  { label: "Nom de l'entreprise :",                                   value: "Zen Énergie Services Sàrl" },
  { label: "Siège social :",                                          value: "Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève" },
  { label: "Numéro de téléphone :",                                   value: "+41 21 512 05 74" },
  { label: "Adresse email :",                                         value: "contact@zen-energieservices.ch" },
  { label: "Numéro d'enregistrement au Registre du Commerce :",       value: "CH-660.5.256.023-9." },
  { label: "Directeur général / représentant légal :",                value: "Olivier RICHARD" },
]

const defaultSections = [
  {
    title: "Hébergement du site internet :",
    content: "Infomaniak Network SA\nRue Eugène-Marziano 25, 1227 Genève - Suisse\nN° IDE & TVA : CHE-103.167.648",
  },
  {
    title: "Propriété intellectuelle :",
    content: "L'ensemble des contenus présents sur ce site (textes, images, vidéos, graphiques, logos, icônes, etc.) est protégé par le droit d'auteur et reste la propriété exclusive de Zen Énergie Services Suisse ou de leurs ayants droit respectifs. Toute reproduction, distribution, modification ou adaptation sans autorisation préalable est strictement interdite.",
  },
  {
    title: "Responsabilité :",
    content: "Zen Énergie Services Suisse ne peut être tenu responsable des erreurs ou omissions dans les contenus publiés sur son site. La société s'efforce d'assurer une mise à jour régulière des informations. L'utilisation des liens externes proposés sur le site est faite sous la responsabilité exclusive de l'utilisateur.",
  },
  {
    title: "Contact pour réclamations ou questions légales :",
    content: "Pour toute demande, merci de nous contacter à : contact@zen-energieservices.ch",
  },
]

export default async function MentionsLegalesPage() {
  const data = await getLegalPage('mentions-legales')

  const heroTitle       = data?.heroTitle                                    || 'Mentions Légales'
  const lastUpdated     = data?.lastUpdated                                  || '01.04.2025'
  const companyInfoItems = data?.companyInfoItems?.length ? data.companyInfoItems : defaultCompanyInfo
  const sections        = data?.sections?.length ? data.sections             : defaultSections

  return (
    <LegalPageLayout
      heroTitle={heroTitle}
      crumbLabel="Mentions Légales"
      mainTitle="MENTIONS LÉGALES ZEN ÉNERGIE SERVICES SUISSE"
      lastUpdated={lastUpdated}
      companyInfoItems={companyInfoItems}
      sections={sections}
    />
  )
}
