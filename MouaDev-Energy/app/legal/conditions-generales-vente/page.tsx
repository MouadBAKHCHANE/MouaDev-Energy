import type { Metadata } from 'next'
import LegalPageLayout from '../LegalPageLayout'
import { getLegalPage } from '@/lib/queries'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLegalPage('cgv')
  return {
    title: data?.seoTitle || 'Conditions Générales de Vente',
    description: data?.seoDescription || "Conditions générales de vente (CGV) de Zen Énergie Services. Modalités de souscription et paiement.",
    alternates: { canonical: '/legal/conditions-generales-vente' },
  }
}

const defaultSections = [
  { title: "ARTICLE 1 – OBJET", content: `Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Zen Énergie Services Suisse Sàrl et ses clients dans le cadre de la souscription et de l'exécution des contrats d'entretien des pompes à chaleur, panneaux photovoltaïques et boilers thermodynamiques.\n\nZen Énergie Services Suisse propose ses prestations dans le but d'améliorer la performance, la durabilité et la sécurité des équipements énergétiques verts des particuliers.` },
  { title: "ARTICLE 2 – SERVICES PROPOSÉS", content: `2.1. Nature des services\nZen Énergie Services Suisse propose les contrats suivants :\n1. Zen Accès : entretien tous les 2 ans, avec suivi en ligne.\n2. Zen Équilibre : entretien annuel, avec suivi en ligne.\n3. Zen Plus : entretien annuel, dépannage inclus (main-d'œuvre et déplacements compris).\n4. PV Clean : nettoyage ponctuel des panneaux solaires.\n\n2.2. Exclusions\nLes prestations couvertes par les contrats d'entretien n'incluent pas :\n• Le remplacement des pièces défectueuses ou usées.\n• Les consommables nécessaires au bon fonctionnement des équipements.\n• Les réparations nécessitant des modifications structurelles de l'installation.\n\nLes pièces de rechange, si nécessaires, seront facturées en sus et feront l'objet d'un devis soumis à l'approbation préalable du Client.\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates N° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870` },
  { title: "ARTICLE 3 – SOUSCRIPTION ET PAIEMENT", content: `3.1. Souscription\nLa souscription se fait en ligne ou par téléphone sur le site officiel de Zen Énergie Services Suisse.\n\n3.2. Modalités de paiement\n• Paiement annuel pour les contrats Zen Équilibre & Zen Plus : le paiement s'effectue annuellement sur la période des 4 années de contrat. Le paiement de la première année de contrat est exigé au moment de la souscription. Les moyens de paiement acceptés sont : carte bancaire, e-banking, QR-facture, acomptes.\n• Paiement biennal (tous les 2 ans) pour les contrats Zen Accès : le paiement s'effectue chaque 2 ans sur la période des 4 années de contrat. Les moyens de paiement acceptés sont : carte bancaire, e-banking, 3x, QR-facture, acomptes.\n• Paiements suivants : à chaque date anniversaire de la souscription, une facture sera envoyée pour le règlement des annuités ou biennalités suivantes.\n\nEn cas de retard de paiement :\n• Des intérêts moratoires au taux légal en vigueur ainsi qu'une indemnité forfaitaire de 20 CHF par rappel seront appliqués.\n• Après trois rappels infructueux, Zen Énergie Services Suisse se réserve le droit de suspendre les prestations.\n\n3.3. Engagement contractuel\nLe contrat est conclu pour une période initiale de 4 ans. Toute résiliation anticipée est soumise aux conditions détaillées à l'article 6.` },
  { title: "ARTICLE 4 – EXÉCUTION DES SERVICES", content: `4.1. Planification des interventions\nZen Énergie Services Suisse s'engage à planifier et à exécuter les interventions d'entretien dans les délais convenus.\n\n4.2. Obligations du Client\nLe Client doit garantir un accès sûr et fonctionnel aux équipements. Si le lieu d'intervention est inaccessible ou si le Client est absent sans notification préalable, Zen Énergie Services Suisse se réserve le droit de facturer des frais supplémentaires.\n\n4.3. Partenaires externes agréés\nPour garantir une intervention rapide et efficace, Zen Énergie Services Suisse peut faire appel à des partenaires externes agréés. Le Client sera informé si une intervention est réalisée par un partenaire externe.` },
  { title: "ARTICLE 5 – GARANTIE DES PRESTATIONS", content: `Zen Énergie Services Suisse garantit la qualité des services d'entretien réalisés conformément aux bonnes pratiques professionnelles.\n\n5.1. Défauts imputables à Zen Énergie Services\nEn cas de défaut imputable à l'intervention, Zen Énergie Services Suisse s'engage à effectuer une réparation gratuite dans les meilleurs délais.\n\n5.2. Limites de garantie\nCette garantie est limitée aux prestations réalisées et n'inclut pas :\n• Les défauts ou pannes liés à des pièces défectueuses ou usées.\n• Les vices de fabrication ou de conception des équipements.\n• Les dommages causés par une utilisation incorrecte ou un défaut d'entretien préalable.` },
  { title: "ARTICLE 6 – RÉSILIATION ET ANNULATION", content: `6.1. Résiliation ordinaire\n• Le contrat peut être résilié à l'issue de la durée initiale de 4 ans ou de chaque période de renouvellement annuel, avec un préavis de 3 mois.\n• La résiliation doit être notifiée par écrit (lettre recommandée ou e-mail avec accusé de réception).\n\n6.2. Résiliation anticipée\nLa résiliation avant la fin de la période d'engagement est possible uniquement dans les cas suivants :\n1. Déménagement hors zone d'intervention.\n2. Force majeure : décès, incapacité permanente ou autre événement rendant impossible l'exécution du contrat.\n3. Manquement grave de Zen Énergie Services Suisse après une mise en demeure restée sans réponse pendant 30 jours.\n\n6.3. Conséquences de la résiliation anticipée\n• En cas de résiliation anticipée sans motif valable, le Client est redevable de 50 % des mensualités restantes.\n\n6.4. Droit de rétractation\nLe Client dispose d'un délai de 14 jours à compter de la date de souscription pour annuler le contrat.` },
  { title: "ARTICLE 7 – PROTECTION DES DONNÉES", content: `Zen Énergie Services Suisse s'engage à protéger les données personnelles de ses Clients conformément à la Loi fédérale sur la protection des données (LPD).\n\nDroits du Client\nLe Client peut demander :\n• Une copie des données personnelles détenues.\n• La rectification ou la suppression des informations incorrectes.\n• Toute violation de données sera signalée aux autorités compétentes et aux personnes concernées.` },
  { title: "ARTICLE 8 – RÈGLEMENT DES LITIGES", content: `En cas de différend, les parties conviennent de rechercher une solution amiable, éventuellement via un processus de médiation, avant toute saisine des tribunaux compétents.` },
  { title: "ARTICLE 9 – DROIT APPLICABLE ET FOR JUDICIAIRE", content: `1. Les présentes Conditions Générales sont régies par le droit suisse.\n2. Tout litige opposant les parties sera soumis à la compétence exclusive des tribunaux situés au lieu du siège de Zen Énergie Services Suisse Sàrl.\n3. Zen Énergie Services Suisse se réserve toutefois le droit d'introduire une action judiciaire au siège ou au domicile du défendeur.\n4. Le présent contrat constitue une reconnaissance de dette au sens de l'article 82 de la LP.\n5. L'application de la Convention des Nations Unies sur les contrats de vente internationale de marchandises est expressément exclue.` },
  { title: "ARTICLE 10 – ACCEPTATION DES CGV", content: `La validation de la souscription vaut acceptation sans réserve des présentes Conditions Générales de Vente.\n\nLes présentes sont à jour au 1er avril 2025.` },
]

export default async function CGVPage() {
  const data = await getLegalPage('cgv')

  const heroTitle   = data?.heroTitle              || 'Conditions Générales de Vente'
  const lastUpdated = data?.lastUpdated             || '01.04.2025'
  const sections    = data?.sections?.length ? data.sections : defaultSections

  return (
    <LegalPageLayout
      heroTitle={heroTitle}
      crumbLabel="Conditions Générales de Vente"
      mainTitle="CONDITIONS GÉNÉRALES DE VENTE (CGV)"
      lastUpdated={lastUpdated}
      sections={sections}
    />
  )
}
