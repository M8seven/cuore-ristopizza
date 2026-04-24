# Cuore Ristopizza — sito web

Sito vetrina proprietario per **Cuore Ristopizza** (Cogliate, MB). Stack: **Astro 5** + **Tailwind CSS 4** + **@lucide/astro** + **Vercel adapter** (output statico).

## Requisiti

- Node.js 20+
- npm 10+

## Sviluppo locale

```bash
npm install
npm run dev
```

Apre `http://localhost:4321`.

## Build di produzione

```bash
npm run build
npm run preview   # serve la build locale per verifica
```

L'output statico finisce in `dist/` (e anche `.vercel/output/` per il deploy).

## Deploy

Il progetto è configurato per **Vercel** (adapter `@astrojs/vercel`, output statico). Primo deploy:

```bash
npm i -g vercel    # se non già installato
vercel login
vercel             # primo deploy (configura progetto + dominio)
vercel --prod      # deploy in produzione
```

Configurare dominio custom `cuoreristopizza.it` dalla dashboard Vercel.

## Struttura

```
src/
├── data/
│   ├── business.ts           # dati azienda (nome, orari, contatti, geo)
│   ├── menu.ts               # dataset pizze / sfizi / extras
│   └── monthly-special.json  # pizza del mese (CMS flat-file)
├── components/
│   ├── Header.astro          # sticky + mobile sheet
│   ├── Footer.astro
│   ├── FrictionlessContact.astro  # FAB WhatsApp + Tel (priorità)
│   ├── Hero.astro
│   ├── Manifesto.astro
│   ├── MonthlySpecialFeatured.astro
│   ├── Events.astro
│   ├── InteractiveMenu.astro # tabs desktop ↔ accordion mobile
│   ├── PaymentBadges.astro
│   └── SchemaOrgJsonLd.astro # Local SEO
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── menu.astro
│   ├── eventi.astro
│   ├── contatti.astro
│   ├── privacy-policy.astro
│   └── cookie-policy.astro
└── styles/
    └── global.css            # Tailwind + CSS vars (brand colors + typography)
```

## TODO pre-deploy

- [ ] **Sostituire immagini Unsplash** con foto reali del ristorante. Attualmente:
  - Hero: `src/components/Hero.astro` (variabile `heroImage`)
  - Pizza del mese: `src/components/MonthlySpecialFeatured.astro` (variabile `specialImage`)
- [ ] **Verificare coordinate geo** di Via Padovan 9/A (attuali: 45.6483, 9.0852). Aggiornare in `src/data/business.ts` → `BUSINESS.geo`.
- [ ] **Creare `public/og-image.jpg`** (1200×630 px). Al momento referenziata ma mancante.
- [ ] **Revisione legale** di `privacy-policy.astro` e `cookie-policy.astro` (contengono placeholder tecnici).
- [ ] **Aggiornare pizza del mese** a inizio mese → `src/data/monthly-special.json`.
- [ ] **Dominio**: registrare e puntare `cuoreristopizza.it` al deployment Vercel.

## Modificare menu, prezzi, orari

Tutti i dati vengono da `src/data/business.ts` e `src/data/menu.ts`. Modifica lì → il resto del sito si aggiorna automaticamente.

## Accessibilità

- Contrast text/background 14.7:1 (WCAG AAA)
- FAB con `aria-label` espliciti
- Mobile menu accessibile da tastiera (ESC per chiudere)
- Tab menu con `role="tab"`/`tabpanel` e navigazione freccia ← →
- `prefers-reduced-motion` rispettato

## Performance

- Astro SSG: zero JS di default, ~15kb JS minimo (solo menu tabs + mobile sheet + FAB reveal)
- Font self-hosted (Fontsource) → no chiamate esterne a Google Fonts
- Target Lighthouse: 95+/100/100/100
