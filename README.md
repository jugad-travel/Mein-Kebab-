# Mein Kebab - Site Vitrine

Site vitrine performant, responsive et SEO-friendly pour le restaurant Mein Kebab (Gemüse Kebap – Berlin style) à Lille.

## 🚀 Stack Technique

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animations)
- **lucide-react** (icônes)
- **shadcn/ui** (composants UI)

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🛠️ Installation

1. Cloner le projet (ou naviguer dans le dossier)
```bash
cd mein-kebab
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📁 Structure du projet

```
mein-kebab/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── menu/              # Page menu
│   ├── photos/            # Page photos
│   ├── avis/              # Page avis
│   ├── contact/           # Page contact
│   ├── mentions-legales/  # Mentions légales
│   ├── confidentialite/   # Politique de confidentialité
│   ├── layout.tsx         # Layout principal
│   ├── robots.ts          # robots.txt
│   └── sitemap.ts         # sitemap.xml
├── components/            # Composants réutilisables
│   ├── SiteHeader.tsx
│   ├── Hero.tsx
│   ├── Section.tsx
│   ├── MenuGrid.tsx
│   ├── Hours.tsx
│   ├── ReviewCarousel.tsx
│   ├── MapCard.tsx
│   ├── Footer.tsx
│   └── LogoMeinKebab.tsx
├── data/                  # Données JSON
│   ├── infos.json         # Informations du restaurant
│   ├── menu.json          # Menu complet
│   └── reviews.json       # Avis clients
└── lib/                   # Utilitaires
    ├── utils.ts
    └── data.ts
```

## 📝 Modification des données

### Modifier le menu

Éditez le fichier `data/menu.json` :

```json
{
  "categories": [
    {
      "name": "Sandwichs",
      "items": [
        {
          "name": "Berliner",
          "price": 11.0,
          "description": "...",
          "tags": ["best-seller"],
          "_a_confirmer": true
        }
      ]
    }
  ]
}
```

### Modifier les horaires

Éditez le fichier `data/infos.json` :

```json
{
  "hours": [
    { "day": "lundi", "open": "12:00", "close": "22:30" },
    { "day": "mardi", "open": "12:00", "close": "22:30", "note": "..." },
    { "day": "mercredi", "closed": true }
  ]
}
```

### Modifier les informations du restaurant

Éditez le fichier `data/infos.json` :

```json
{
  "name": "Mein Kebab",
  "slogan": "...",
  "address": "...",
  "phone": "...",
  "email": "...",
  "rating": 5.0,
  "reviews_count": 1586
}
```

## 🎨 Palette de couleurs

- **Noir charbon** : `#0B0B0D` (fond sombre)
- **Blanc pur** : `#FFFFFF` (texte/fonds cartes)
- **Rouge broche** : `#D2483A` (CTA, accents)
- **Gris ardoise** : `#1F2329` (fonds secondaires)
- **Jaune épices** : `#F2B705` (micro-accents)

## 🚀 Déploiement sur Vercel

1. **Préparer le projet**
```bash
npm run build
```

2. **Déployer sur Vercel**
   - Connectez votre compte GitHub à Vercel
   - Importez le projet `mein-kebab`
   - Vercel détectera automatiquement Next.js
   - Cliquez sur "Deploy"

3. **Variables d'environnement** (si nécessaire)
   - Ajoutez vos clés API dans les paramètres du projet Vercel

4. **Domaine personnalisé** (optionnel)
   - Dans les paramètres du projet, ajoutez votre domaine personnalisé

## 📊 Performance & SEO

Le site est optimisé pour :
- **Lighthouse** : Score ≥ 95 (Performance, SEO, Accessibilité)
- **Images** : Format WebP/AVIF avec Next.js Image
- **Structured Data** : Schema.org (Restaurant, LocalBusiness)
- **Sémantique HTML5** : Balises sémantiques appropriées
- **ARIA** : Attributs d'accessibilité
- **i18n** : Français uniquement

## ♿ Accessibilité

- Contrastes de couleurs conformes WCAG AA
- Focus visibles sur tous les éléments interactifs
- Libellés ARIA appropriés
- Taille de police minimale : 16px
- Navigation au clavier complète

## 📱 Responsive

Le site est entièrement responsive et optimisé pour :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 🔧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

## 📄 Licence

Propriétaire - Tous droits réservés © 2024 Mein Kebab

## 📞 Support

Pour toute question ou problème, contactez : contact@meinkebab.fr
