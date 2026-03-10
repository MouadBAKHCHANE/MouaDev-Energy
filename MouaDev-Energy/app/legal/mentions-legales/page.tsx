import PageHero from '@/components/layout/PageHero'

export default function MentionsLegalesPage() {
    return (
        <main>
            <PageHero
                crumbs={[{ label: 'Accueil', href: '/' }, { label: 'Mentions Légales' }]}
                title="MENTIONS LÉGALES"
            />

            <section style={{ background: '#fff', padding: '100px 20px' }}>
                <div style={{ maxWidth: 860, margin: '0 auto' }}>
                    <h2 style={{ fontFamily: "var(--font-barlow)", fontSize: 24, fontWeight: 600, color: '#000', marginBottom: 10 }}>MENTIONS LÉGALES ZEN ÉNERGIE SERVICES SUISSE</h2>
                    <p style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: 16,
                        color: '#777',
                        marginBottom: 40
                    }}>Dernière mise à jour : 01.04.2025</p>

                    <div style={{ display: 'grid', gap: '20px', marginBottom: 40 }}>
                        <div>
                            <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>Nom de l’entreprise :</strong>
                            <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>Zen Énergie Services Sàrl</span>
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>Siège social :</strong>
                            <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève</span>
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>Numéro de téléphone :</strong>
                            <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>+41 21 512 05 74</span>
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>Adresse email :</strong>
                            <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>contact@zen-energieservices.ch</span>
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>Numéro d’enregistrement au Registre du Commerce :</strong>
                            <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>CH-660.5.256.023-9.</span>
                        </div>
                        <div>
                            <strong style={{ display: 'block', fontSize: 18, color: '#000' }}>Directeur général / représentant légal :</strong>
                            <span style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)' }}>Olivier RICHARD</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h3 style={{ fontFamily: "var(--font-barlow)", fontSize: 22, fontWeight: 600, color: '#000', marginBottom: 15 }}>Hébergement du site internet :</h3>
                        <p style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)', lineHeight: '28px' }}>
                            Infomaniak Network SA<br />
                            Rue Eugène-Marziano 25, 1227 Genève - Suisse<br />
                            N° IDE & TVA : CHE-103.167.648
                        </p>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h3 style={{ fontFamily: "var(--font-barlow)", fontSize: 22, fontWeight: 600, color: '#000', marginBottom: 15 }}>Propriété intellectuelle :</h3>
                        <p style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)', lineHeight: '28px' }}>
                            L’ensemble des contenus présents sur ce site (textes, images, vidéos, graphiques, logos, icônes, etc.)
                            est protégé par le droit d’auteur et reste la propriété exclusive de Zen Énergie Services Suisse ou
                            de leurs ayants droit respectifs. Toute reproduction, distribution, modification ou adaptation
                            sans autorisation préalable est strictement interdite.
                        </p>
                    </div>

                    <div style={{ marginBottom: 40 }}>
                        <h3 style={{ fontFamily: "var(--font-barlow)", fontSize: 22, fontWeight: 600, color: '#000', marginBottom: 15 }}>Responsabilité :</h3>
                        <p style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)', lineHeight: '28px' }}>
                            Zen Énergie Services Suisse ne peut être tenu responsable des erreurs ou omissions dans les contenus
                            publiés sur son site. La société s’efforce d’assurer une mise à jour régulière des informations.
                            L’utilisation des liens externes proposés sur le site est faite sous la responsabilité exclusive de l’utilisateur.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontFamily: "var(--font-barlow)", fontSize: 22, fontWeight: 600, color: '#000', marginBottom: 15 }}>Contact pour réclamations ou questions légales :</h3>
                        <p style={{ fontSize: 17, color: '#555', fontFamily: 'var(--font-inter)', lineHeight: '28px' }}>
                            Pour toute demande, merci de nous contacter à : contact@zen-energieservices.ch
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
