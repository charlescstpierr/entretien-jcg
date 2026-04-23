# Entretien JCG

Site vitrine Entretien JCG migré vers Next.js App Router, TypeScript et Tailwind CSS.

## Développement

```bash
npm install
npm run dev
```

## Déploiement Cloudflare Pages

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `out`

Le site est exporté statiquement avec `output: "export"`, `trailingSlash: true` et les images non optimisées pour rester compatible avec Cloudflare Pages.
