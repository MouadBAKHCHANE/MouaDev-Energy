# Guide d'utilisation — Sanity Studio
## Zen Énergie Services

---

## Accès à Sanity Studio

Ouvrez votre navigateur et allez sur :

**https://votre-domaine.ch/studio**

Connectez-vous avec votre compte Sanity.

---

## Navigation dans le panneau de gauche

Votre panneau de gauche est organisé comme suit :

| Icône | Section | Description |
|---|---|---|
| ⚙️ | **Paramètres du site** | Logos, téléphone, email, adresse, réseaux sociaux, footer |
| 📊 | **Marketing & Analytics** | Google Analytics, Facebook Pixel, scripts de tracking |
| — | — | — |
| 🏠 | **Page d'accueil** | Contenu et mise en page de la page d'accueil |
| 👥 | **Page À propos** | Contenu de la page "Qui sommes-nous" |
| ✉️ | **Page Contact** | Hero et formulaire de contact |
| ⚡ | **Page Services** | Page principale listant tous les services |
| — | — | — |
| ⚡ | **Pages Services** | Sous-dossier contenant les 4 pages détaillées : |
|    | ☀️ Panneaux Solaires | Contrats, tarifs, FAQ panneaux solaires |
|    | 🎛️ Pompe à Chaleur | Contrats, tarifs, FAQ pompes à chaleur |
|    | 💧 Boiler Thermodynamique | Contrats, tarifs, FAQ boilers |
|    | ✨ PV Clean | Offre nettoyage, FAQ PV Clean |
| — | — | — |
| 📖 | **Articles** | Blog / actualités |
| ❓ | **FAQ** | Questions fréquentes (page FAQ globale) |
| 📄 | **Pages légales** | CGU, CGV, CGE, mentions légales, confidentialité |

---

## Comment modifier le contenu d'une page

1. Cliquez sur la page dans le panneau de gauche
2. Les **onglets** en haut organisent le contenu par section :
   - **Mise en page** — Ordre et visibilité des sections
   - **SEO** — Titre et description pour Google
   - **Hero** — Bannière principale
   - Autres onglets selon la page
3. Modifiez les champs souhaités
4. Cliquez sur **Publish** (bouton vert en haut à droite)

**Important :** Les modifications apparaissent sur le site dans un délai de **1 minute** maximum.

---

## Mise en page — Réordonner ou masquer des sections

Chaque page dispose d'un onglet **"Mise en page"** (le premier onglet).

### Réordonner les sections
- Cliquez sur l'icône **☰** (trois barres) à gauche d'une section
- **Glissez** la section vers le haut ou le bas
- Publiez pour appliquer

### Masquer une section
- Cliquez sur la section dans la liste
- Décochez **"Afficher cette section"**
- La section affichera 🚫 au lieu de ✅
- Publiez pour appliquer

### Réafficher une section
- Cliquez sur la section marquée 🚫
- Recochez **"Afficher cette section"**
- Publiez

---

## SEO — Optimiser pour Google

Chaque page a un onglet **SEO** avec deux champs :

### Titre SEO (balise `<title>`)
- C'est le texte qui apparaît dans l'onglet du navigateur et dans les résultats Google
- **Maximum recommandé : 60 caractères**
- Exemple : `Panneaux Solaires — Entretien et Maintenance | Zen Énergie`

### Description SEO (meta description)
- C'est le résumé affiché sous le titre dans Google
- **Maximum recommandé : 155 caractères**
- Exemple : `Entretien professionnel de vos panneaux solaires en Suisse romande. Contrats d'entretien sur mesure. Devis gratuit.`

**Conseil :** Incluez vos mots-clés principaux (ville, service, action) naturellement dans ces champs.

---

## Marketing & Analytics

Cette section vous permet d'ajouter vos outils de suivi **sans toucher au code**.

### Onglet "Analytics"

| Champ | Où trouver l'ID | Format |
|---|---|---|
| **Google Analytics 4** | GA4 → Admin → Flux de données → ID de mesure | `G-XXXXXXXXXX` |
| **Google Tag Manager** | GTM → Admin → ID du conteneur | `GTM-XXXXXXX` |
| **Google Search Console** | Search Console → Paramètres → Vérification → balise HTML → copier le contenu | Texte libre |

**Note :** Si vous utilisez Google Tag Manager, vous pouvez gérer GA4, Google Ads et les pixels depuis GTM directement — pas besoin de les configurer aussi dans Sanity.

### Onglet "Pixels & Ads"

| Champ | Où trouver l'ID |
|---|---|
| **Meta (Facebook) Pixel** | Meta Events Manager → Sources de données → ID du Pixel |
| **TikTok Pixel** | TikTok Ads Manager → Événements → Gérer → ID du Pixel |
| **LinkedIn Insight Tag** | LinkedIn Campaign Manager → Analyser → Insight Tag → Partner ID |
| **Google Ads** | Google Ads → Outils → Conversions → ID de conversion (format `AW-XXXXXXXXX`) |

### Onglet "Scripts personnalisés"

Pour tout autre outil (Hotjar, Crisp chat, etc.) :
1. Copiez le code fourni par l'outil
2. Collez-le dans le bon champ selon les instructions de l'outil :
   - **Scripts `<head>`** — La plupart des outils vont ici
   - **Scripts début `<body>`** — Requis par certains outils (ex: GTM noscript)
   - **Scripts fin `<body>`** — Pour les widgets de chat, popups, etc.

⚠️ **Attention :** Un code incorrect peut casser le site. En cas de doute, demandez à votre développeur.

---

## Paramètres du site

### Onglet "Général"
- **Nom du site** — Utilisé dans les titres SEO
- **Lien Typeform** — URL du formulaire de demande d'offre

### Onglet "Logos"
- **Logo clair** — Affiché sur fond sombre (header, footer)
- **Logo foncé** — Affiché sur fond clair
- **Logo icône** — Version réduite du logo

### Onglet "Contact"
- **Téléphone** — Affiché dans le header, footer et page contact
- **Email** — Idem
- **Adresse** — Idem
- **Lien Google Maps** — Pour la carte sur la page contact

### Onglet "Réseaux sociaux"
- Ajoutez/modifiez les liens vers vos réseaux (Facebook, Instagram, LinkedIn, etc.)

### Onglet "Pied de page"
- Texte "À propos" du footer
- Texte newsletter
- Copyright

---

## Articles de blog

### Créer un article
1. Cliquez sur **Articles** dans le panneau de gauche
2. Cliquez sur le bouton **+** (créer)
3. Remplissez :
   - **Titre** — Titre de l'article
   - **Slug** — URL de l'article (ex: `entretien-pompe-chaleur`)
   - **Image de couverture**
   - **Extrait** — Résumé affiché dans la liste
   - **Catégorie** et **Temps de lecture**
   - **Sections** — Le contenu de l'article (titre, texte, liste)
4. Publiez

### Modifier un article
1. Cliquez sur l'article dans la liste
2. Modifiez les champs souhaités
3. Publiez

---

## FAQ

### Ajouter une question
1. Cliquez sur **FAQ** dans le panneau de gauche
2. Cliquez sur **+** (créer)
3. Remplissez : question, introduction, points clés, conclusion, lien
4. Le champ **Ordre** détermine la position dans la liste (1 = premier)
5. Publiez

---

## Pages légales

Les pages légales (CGU, CGV, CGE, Mentions légales, Confidentialité) sont déjà créées.

Pour modifier :
1. Cliquez sur **Pages légales** → sélectionnez la page
2. Modifiez le contenu des sections
3. Mettez à jour la **date de dernière modification**
4. Publiez

---

## Bonnes pratiques

### Images
- **Format recommandé :** WebP ou JPG
- **Taille recommandée :** 1920px de large maximum
- **Poids maximum :** 500 Ko (compressez avec [TinyPNG](https://tinypng.com) avant l'upload)
- Utilisez le **point focal** (hotspot) sur les images pour contrôler le recadrage

### Publier vs Draft
- **Draft** (orange) = modifications en cours, non visibles sur le site
- **Published** (vert) = visible sur le site
- Vous pouvez travailler sur un draft sans affecter le site en ligne, puis publier quand tout est prêt

### Annuler des modifications
- Tant que vous n'avez pas publié, vous pouvez cliquer sur **Discard changes** pour revenir à la version publiée

---

## En cas de problème

- **Le site ne se met pas à jour :** Attendez 1 minute, puis rafraîchissez la page (Ctrl+Maj+R)
- **Une section a disparu :** Vérifiez l'onglet "Mise en page" — la section est peut-être désactivée
- **Erreur sur le site après modification Marketing :** Videz le champ "Scripts personnalisés" et publiez
- **Besoin d'aide technique :** Contactez votre développeur

---

*Document généré le 19 mars 2026 — Zen Énergie Services*
