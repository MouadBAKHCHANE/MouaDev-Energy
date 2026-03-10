import PageHero from '@/components/layout/PageHero'

export default function CGUPage() {
    const sections = [
        {
            title: "ARTICLE 1 – OBJET",
            content: "Les présentes Conditions Générales d’Utilisation (ci-après “CGU”) définissent les modalités et conditions d’utilisation du site Internet www.zen-energie-services.com (ci-après “le Site”), édité par Zen Énergie Services Suisse (ci-après “la Société”).\nEn accédant et en utilisant le Site, l’utilisateur (ci-après “l’Utilisateur”) reconnaît avoir pris connaissance des présentes CGU, les comprendre, et les accepter sans réserve."
        },
        {
            title: "ARTICLE 2 – IDENTITÉ DE L’ÉDITEUR ET CONTACT",
            content: "Le Site est édité par :\nZen Énergie Services Suisse Sàrl\nAdresse : Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates\nNuméro d’enregistrement au Registre du Commerce : CH-660.5.256.023-9.\nTéléphone : +41 21 512 05 74\nEmail : contact@zen-energieservices.ch\n\nZen Énergie Services Suisse Sàrl au capital de 20'000 CHF – Siège social : Chemin du Pré-Fleuri 1-3 1228 Plan-les-Ouates\nN° registre commerce Suisse : CH-660.5.256.023-9 - IDE/TVA CHE-386.094.870"
        },
        {
            title: "ARTICLE 3 – ACCÈS AU SITE",
            content: "3.1. Gratuité de l’accès\nL’accès au Site est gratuit, hors frais de connexion à Internet à la charge de l’Utilisateur.\n\n3.2. Disponibilité\nLe Site est accessible 24h/24 et 7j/7, sous réserve d’interruptions pour maintenance ou mise à jour, ou en cas de force majeure. Zen Énergie Services Suisse ne peut être tenue responsable des interruptions imprévues.\n\n3.3. Conditions d’accès\nCertaines sections du Site, notamment l’espace client, nécessitent une authentification via des identifiants personnels. L’Utilisateur s’engage à préserver la confidentialité de ses identifiants et à informer immédiatement Zen Énergie Services Suisse en cas d’usage frauduleux."
        },
        {
            title: "ARTICLE 4 – SERVICES PROPOSÉS SUR LE SITE",
            content: "Le Site propose notamment les fonctionnalités suivantes :\n• Simulateur de contrats : pour obtenir des recommandations de contrats d’entretien adaptés aux besoins.\n• Souscription et paiement en ligne : pour finaliser la commande des contrats proposés.\n• Espace client : pour gérer les contrats, consulter les factures et suivre les prestations réalisées."
        },
        {
            title: "ARTICLE 5 – RESPONSABILITÉ DE L’UTILISATEUR",
            content: "L’Utilisateur s’engage à :\n• Utiliser le Site dans le respect des lois et règlements en vigueur en Suisse.\n• Ne pas détourner le Site à des fins frauduleuses ou illicites.\n• Ne pas tenter d’altérer ou de nuire au bon fonctionnement du Site, notamment en introduisant des virus ou autres logiciels malveillants."
        },
        {
            title: "ARTICLE 6 – RESPONSABILITÉ DE ZEN ÉNERGIE SERVICES",
            content: "6.1. Informations publiées : Zen Énergie Services Suisse s’efforce de fournir des informations exactes mais ne peut garantir leur exhaustivité.\n6.2. Fonctionnement du Site : La Société décline toute responsabilité en cas de dysfonctionnement technique ou perte de données liée à l’utilisation."
        },
        {
            title: "ARTICLE 7 – PROPRIÉTÉ INTELLECTUELLE",
            content: "Tous les contenus du Site sont protégés par le droit suisse. Toute reproduction sans accord préalable écrit est strictement interdite."
        },
        {
            title: "ARTICLE 8 – DONNÉES PERSONNELLES ET COOKIES",
            content: "La collecte et le traitement des données sont régis par notre Politique de protection des données et notre Politique de cookies."
        },
        {
            title: "ARTICLE 9 – MODIFICATIONS DES CGU",
            content: "Zen Énergie Services Suisse se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication."
        },
        {
            title: "ARTICLE 10 – DROIT APPLICABLE ET FOR JUDICIAIRE",
            content: "Les présentes CGU sont régies par le droit suisse. Tout litige relève de la compétence exclusive des tribunaux du siège de Zen Énergie Services Suisse."
        },
    ]

    return (
        <main>
            <PageHero
                crumbs={[{ label: 'Accueil', href: '/' }, { label: 'CGU' }]}
                title="CONDITIONS GÉNÉRALES D'UTILISATION"
            />

            <section style={{ background: '#fff', padding: '100px 20px' }}>
                <div style={{ maxWidth: 860, margin: '0 auto' }}>
                    <h2 style={{ fontFamily: "var(--font-barlow)", fontSize: 24, fontWeight: 600, color: '#000', marginBottom: 10 }}>CONDITIONS GÉNÉRALES D'UTILISATION (CGU)</h2>

                    <p style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 16,
                        color: '#777',
                        marginBottom: 30
                    }}>Dernière mise à jour : 01.04.2025</p>

                    <div style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 17,
                        lineHeight: '28px',
                        color: '#555',
                        marginBottom: 40
                    }}>
                        <p style={{ marginBottom: 15 }}>
                            Le site Internet www.zen-energie-services.com/ch (ci-après “le Site”) est édité par
                            Zen Énergie Services Suisse Sàrl, dont le siège est situé à Chemin du Pré-Fleuri 1-3,
                            1228 Plan-les-Ouates, inscrite au Registre du Commerce suisse sous le numéro CH-660.5.256.023-9.
                        </p>
                        <p style={{ marginBottom: 15 }}>
                            En accédant et en naviguant sur le Site, vous acceptez sans réserve les présentes
                            Conditions Générales d’Utilisation (CGU). Si vous n’acceptez pas ces termes, veuillez
                            ne pas utiliser le Site.
                        </p>
                        <p>
                            Les présentes CGU ont pour objet de définir les modalités d’utilisation du Site et les
                            droits et obligations des utilisateurs.
                        </p>
                    </div>

                    {sections.map((section, i) => (
                        <div key={i} style={{ marginBottom: 40 }}>
                            <h2 style={{
                                fontFamily: "var(--font-barlow)",
                                fontSize: 22,
                                fontWeight: 600,
                                color: '#000',
                                marginBottom: 15
                            }}>{section.title}</h2>
                            <p style={{
                                fontFamily: "var(--font-inter)",
                                fontSize: 17,
                                lineHeight: '28px',
                                color: '#555',
                                whiteSpace: 'pre-line'
                            }}>{section.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
