# Wilson Dental - Site Moderne

Site web du cabinet dentaire Wilson Dental à Levallois-Perret.

## Stack Technique

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** – Animations fluides
- **Lucide React** – Icônes
- **TypeScript**

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx       # Layout global (fonts, metadata)
│   ├── globals.css      # Styles globaux + design tokens
│   └── page.tsx         # Page principale
└── components/
    ├── Navbar.tsx        # Navigation sticky + menu mobile
    ├── Hero.tsx          # Section héro avec stats
    ├── About.tsx         # À propos avec grille de stats
    ├── Services.tsx      # 6 catégories de soins
    ├── Team.tsx          # Présentation de l'équipe
    ├── Testimonials.tsx  # Avis patients (carousel)
    ├── Contact.tsx       # Formulaire de contact
    └── Footer.tsx        # Pied de page
```

## Déploiement

```bash
npm run build
```

Compatible Vercel, Netlify, ou tout hébergeur supportant Next.js.
