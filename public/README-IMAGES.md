# Guide des Images - Mein Kebab

Ce dossier contient toutes les images statiques du site. Voici où placer vos images pour la production.

## 📁 Structure recommandée

```
public/
├── images/
│   ├── hero/              # Images pour la section Hero
│   │   └── hero-kebab.jpg
│   ├── menu/              # Photos des plats
│   │   ├── berliner.jpg
│   │   ├── ancienne.jpg
│   │   └── veggy.jpg
│   ├── photos/            # Photos de la galerie
│   │   ├── plats/
│   │   ├── terrasse/
│   │   └── salle/
│   ├── logo/              # Logos et icônes
│   │   └── logo-mein-kebab.svg
│   └── og/                # Images Open Graph
│       └── og-image.jpg
├── icon-192.png           # Favicon 192x192 (PWA)
├── icon-512.png           # Favicon 512x512 (PWA)
└── favicon.ico            # Favicon classique
```

## 🖼️ Images à ajouter

### 1. Image Hero (Page d'accueil)
- **Fichier** : `images/hero/hero-kebab.jpg` ou `.webp`
- **Taille recommandée** : 1920x1080px (16:9)
- **Format** : JPG ou WebP optimisé
- **Poids max** : 500KB
- **Usage** : Fond de la section Hero sur la page d'accueil

### 2. Photos du Menu
- **Fichiers** : `images/menu/[nom-du-plat].jpg`
- **Taille recommandée** : 800x600px (4:3)
- **Format** : JPG ou WebP optimisé
- **Poids max** : 200KB par image
- **Exemples** :
  - `berliner.jpg`
  - `ancienne.jpg`
  - `veggy.jpg`
  - `bowl-berliner.jpg`

### 3. Galerie Photos
- **Dossier** : `images/photos/`
- **Sous-dossiers** :
  - `plats/` : Photos des plats
  - `terrasse/` : Photos de la terrasse
  - `salle/` : Photos de l'intérieur
- **Taille recommandée** : 1200x800px
- **Format** : JPG ou WebP optimisé
- **Poids max** : 300KB par image

### 4. Logo
- **Fichier** : `images/logo/logo-mein-kebab.svg` ou `.png`
- **Format SVG recommandé** pour la qualité
- **Alternative PNG** : 512x512px avec fond transparent

### 5. Image Open Graph (SEO)
- **Fichier** : `images/og/og-image.jpg`
- **Taille** : 1200x630px (ratio 1.91:1)
- **Format** : JPG optimisé
- **Poids max** : 500KB
- **Usage** : Image partagée sur les réseaux sociaux

### 6. Favicons (PWA)
- **icon-192.png** : 192x192px
- **icon-512.png** : 512x512px
- **favicon.ico** : 32x32px (multi-taille)
- **Format** : PNG avec fond transparent ou couleur

## 🔧 Optimisation des images

### Avant d'ajouter les images :

1. **Compression** : Utilisez des outils comme :
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Conversion WebP** : Pour de meilleures performances :
   ```bash
   # Avec cwebp (Google)
   cwebp input.jpg -q 80 -o output.webp
   ```

3. **Redimensionnement** : Utilisez des outils comme :
   - [ResizeImage](https://resizeimage.net/)
   - Photoshop / GIMP
   - ImageMagick

## 📝 Mise à jour du code

Après avoir ajouté vos images, vous devrez mettre à jour les références dans le code :

### 1. Hero (app/page.tsx)
```tsx
// Remplacer le placeholder par :
<Image
  src="/images/hero/hero-kebab.jpg"
  alt="Mein Kebab - Le vrai Gemüse Kebap de Berlin"
  fill
  priority
  className="object-cover"
/>
```

### 2. Menu (components/MenuGrid.tsx)
```tsx
<Image
  src={`/images/menu/${item.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
  alt={item.name}
  width={400}
  height={300}
/>
```

### 3. Galerie Photos (app/photos/page.tsx)
```tsx
// Remplacer les placeholders par vos vraies images
const photos = [
  { src: "/images/photos/plats/photo-1.jpg", alt: "..." },
  // ...
];
```

## ✅ Checklist avant déploiement

- [ ] Image Hero ajoutée et optimisée
- [ ] Photos du menu ajoutées (au moins 3-5)
- [ ] Galerie photos remplie (12+ images recommandées)
- [ ] Logo SVG/PNG ajouté
- [ ] Image Open Graph créée (1200x630px)
- [ ] Favicons générés (192x192, 512x512, favicon.ico)
- [ ] Toutes les images compressées
- [ ] Formats WebP créés (optionnel mais recommandé)
- [ ] Code mis à jour avec les bons chemins

## 🚀 Déploiement

Les images seront automatiquement servies par Next.js depuis le dossier `public/`.

**Exemple d'URL en production** :
- `https://meinkebab.fr/images/hero/hero-kebab.jpg`
- `https://meinkebab.fr/images/menu/berliner.jpg`

## 📞 Support

Pour toute question sur l'optimisation des images, consultez la [documentation Next.js Image](https://nextjs.org/docs/app/api-reference/components/image).

