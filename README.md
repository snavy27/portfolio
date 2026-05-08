# Navalika Sharda · Portfolio (v2)

A modern rebuild of [snavy27.github.io](https://snavy27.github.io/) reflecting the post-Wells Fargo / EM Lyon / Priceforce.ai chapter.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** with a custom warm-editorial palette (cream, ink, terracotta, forest, gold)
- **Framer Motion** for entrance + scroll reveals
- **Lucide** icons + custom SVG accents

## Run locally

```bash
npm install
npm run dev
```

The dev server opens at <http://localhost:5173>.

## Build for production

```bash
npm run build
npm run preview
```

The build output lives in `dist/` and is fully static. Drop it on GitHub Pages, Vercel, Netlify, or anywhere else.

### Deploying to GitHub Pages

1. `npm run build`
2. Push `dist/` to the `gh-pages` branch (or use a GitHub Action like `peaceiris/actions-gh-pages`).
3. The `base: "./"` setting in `vite.config.ts` already makes asset paths relative, so it works for both `username.github.io` and project-page deployments.

## Editing content

All copy (bio, experience, projects, skills, education, testimonials) lives in **`src/data/portfolio.ts`**. Edit that one file to update everything.

The hero portrait lives at **`public/navalika.png`**. Drop in a new image with the same filename to swap it.

## Project structure

```
src/
├── App.tsx              # Section composition
├── main.tsx             # Entry
├── index.css            # Tailwind + base + utility layers
├── data/
│   └── portfolio.ts     # All content lives here
└── components/
    ├── Nav.tsx
    ├── Hero.tsx         # Hero with the big portrait box
    ├── About.tsx
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    ├── Education.tsx
    ├── Testimonials.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Design notes

- **Hero portrait box** is intentionally generous (`min-h-[420px]` to `min-h-[600px]` across breakpoints, 4:5 aspect ratio). Decorative overlays like the "currently shipping" badge and "Paris · 11ème" pill live *outside* the clipping frame, so screenshots and other UI never overlap the photo.
- Two custom serifs: **Fraunces** for headlines (with optical sizing) and **Inter** for body. **JetBrains Mono** handles small caps / monospace bits.
- The whole page has a faint paper-grain overlay so it does not feel sterile.
