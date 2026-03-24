# Zen Énergie Services — Site Web

Site vitrine et CMS pour **Zen Énergie Services Sàrl**, spécialiste de la maintenance énergétique en Suisse romande (pompes à chaleur, boilers thermodynamiques, panneaux solaires).

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 14 (App Router) |
| CMS | Sanity v3 (Studio embarqué) |
| Animations | Framer Motion |
| Emails | Nodemailer (SMTP Infomaniak) |
| Déploiement | Vercel |
| Styles | CSS-in-JS (inline styles) + Tailwind (utilitaires) |

---

## Structure du projet

```
MouaDev-Energy/
├── app/                        # Pages Next.js (App Router)
│   ├── page.tsx                # Accueil
│   ├── about-us/               # À propos
│   ├── contact-us/             # Contact + formulaire email
│   ├── services/               # Pages de service
│   │   ├── panneaux-solaires/
│   │   ├── pompe-a-chaleur/
│   │   ├── boiler-thermodynamique/
│   │   └── pv-clean/
│   ├── actualites/             # Blog / actualités
│   ├── legal/                  # Pages légales (CGE, CGU, CGV, etc.)
│   ├── studio/                 # Sanity Studio (interface CMS)
│   └── api/
│       ├── contact/            # Envoi email formulaire contact
│       └── revalidate/         # Revalidation ISR depuis Sanity
├── components/
│   ├── layout/                 # Header, Footer
│   ├── sections/               # Sections homepage (Hero, About, Pricing…)
│   └── ui/                     # Composants réutilisables (Button, SectionLabel…)
├── lib/                        # Utilitaires (queries Sanity, helpers)
├── sanity/                     # Schémas CMS
│   └── schemas/                # Un fichier par type de contenu
├── public/                     # Assets statiques (logos, photos, icônes)
├── docs/
│   └── GUIDE-CLIENT-SANITY.md  # Guide d'utilisation du CMS pour le client
└── SANITY-CMS-INTEGRATION-GUIDE.md
```

---

## Lancer le projet en local

### Prérequis

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Variables d'environnement

Créer un fichier `.env.local` à la racine de `MouaDev-Energy/` :

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=rn8uvbuk
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=<votre_token_sanity>
SANITY_REVALIDATE_SECRET=<votre_secret>

# SMTP (Infomaniak)
SMTP_HOST=mail.infomaniak.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=commandes@zen-energieservices.ch
SMTP_PASS=<votre_mot_de_passe_email>
```

### Démarrer

```bash
npm run dev
```

- Site : [http://localhost:3000](http://localhost:3000)
- Studio Sanity : [http://localhost:3000/studio](http://localhost:3000/studio)

---

## CMS — Sanity Studio

Toutes les pages et sections sont éditables via Sanity Studio, sans toucher au code.

**URL de production :** `https://zen-energieservices.com/studio`

### Pages configurables

| Page | Sections éditables |
|---|---|
| Accueil | Hero, À propos, Services, Tarifs, Process, FAQ, Actualités |
| Panneaux solaires | Hero, Tableau comparatif, Remise multi-équipement, Conditions, PV Clean, Pourquoi entretenir, FAQ |
| Pompe à chaleur | Hero, Tableau comparatif, Remises multi-PAC, Conditions, Pourquoi entretenir, FAQ |
| Boiler thermodynamique | Hero, Tableau comparatif, Remise, Conditions, Pourquoi entretenir, FAQ |
| PV Clean | Hero, Offre, Pourquoi, FAQ |
| À propos | Hero, Contenu, Statistiques |
| Contact | Hero, Formulaire, Carte |

### Fonctionnalités CMS

- **Visibilité par section** : chaque section peut être activée/désactivée individuellement
- **Réorganisation** : l'ordre des sections est configurable par drag & drop
- **Styles de texte** : taille, poids, couleur personnalisables par champ
- **Revalidation automatique** : les modifications sont publiées en moins de 60 secondes

> **Note :** Si un champ est laissé vide dans Sanity, le contenu correspondant n'est pas affiché sur le site.

---

## Déploiement (Vercel)

### Variables d'environnement Vercel

Dans **Settings → Environment Variables** du projet Vercel, ajouter :

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_TOKEN
SANITY_REVALIDATE_SECRET
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
```

### Déployer

```bash
git push origin main
```

Vercel déclenche automatiquement un nouveau déploiement à chaque push sur `main`.

---

## Formulaire de contact

Le formulaire `/contact-us` envoie les messages vers `commandes@zen-energieservices.ch` via SMTP Infomaniak.

- Le champ `Reply-To` est l'adresse email du visiteur — il suffit de répondre depuis la boîte mail
- Les messages arrivent en HTML formaté (nom, email, téléphone, message)

---

## Informations société

| | |
|---|---|
| **Nom** | Zen Énergie Services Sàrl |
| **Adresse** | Chemin du Pré-Fleuri 1-3, 1228 Plan-les-Ouates, Genève |
| **Téléphone** | +41 21 512 05 74 |
| **Email** | contact@zen-energieservices.ch |
| **RC** | CH-660.5.256.023-9 |
| **TVA** | CHE-386.094.870 |

---

## Guide client

Voir [`docs/GUIDE-CLIENT-SANITY.md`](docs/GUIDE-CLIENT-SANITY.md) pour le guide complet d'utilisation du CMS (en français).
