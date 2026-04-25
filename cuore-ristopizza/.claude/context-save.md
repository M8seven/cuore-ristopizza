# Cuore Ristopizza — Context Save (sessione 25 apr 2026)

## Decisioni prese

### Stack & architettura
- **Astro 5** SSG + Tailwind 4 (`@tailwindcss/vite`) + `@lucide/astro` + Vercel adapter — scelto sopra Next.js + framer-motion del brief originario perché vetrina informativa = serve LCP basso, Lighthouse 100, zero JS di default.
- TypeScript strict.
- Output `static`, configurabile via env (`PUBLIC_SITE_URL`, `PUBLIC_BASE_PATH`, `PUBLIC_DEPLOY_TARGET`) per supportare sia Vercel produzione (`cuoreristopizza.it`) sia GH Pages preview (`/cuore-ristopizza/`).
- Font self-hosted via Fontsource (Inter Variable + Playfair Display 400/700). NO Google Fonts CDN.
- Niente framer-motion. Animazioni: pure CSS keyframes + IntersectionObserver per scroll-reveal. Bundle JS minimo (~1-2kb).
- Repo: `github.com/M8seven/cuore-ristopizza` (ora **PUBBLICO** dopo richiesta utente per abilitare GH Pages su free plan).

### Workflow infrastruttura
- Repo locale: `/Users/m87/Hub/dev/web_site/` con sub-cartella `cuore-ristopizza/` (progetto Astro).
- `.github/workflows/deploy.yml` al repo root → build via `withastro/action@v3` (Node 22) + deploy via `actions/deploy-pages@v4`.
- GH Pages abilitato con `build_type: workflow` via API.
- **Dev server attivo** in background al PID 94259 (`nohup npm run dev > /tmp/cuore-dev.log 2>&1 &`) — http://localhost:4321.

### Design system
- Cream background `#FAFAFA`, ink `#1F2937` (contrast 14.7:1 AAA), accent terracotta `#C62828`, WhatsApp `#25D366`.
- Inter (body) + Playfair Display (heading + italic accents).
- Italic-corsivo del titolo come accent rosso ("racconta una storia.", "in ogni trancio.", ecc.) — pattern editoriale.

## Finding accettati
- **Ultraplan è bug**: anche con App installed "All repos" + `/web-setup` esegue successful, il backend ultraplan continua a richiedere App-on-this-repo. Workaround: skip via `ExitPlanMode` con approvazione utente locale. Memoria salvata: `ultraplan_github_app_blocker.md`.
- **No Chrome automation**: utente rifiuta sistematicamente le tool MCP `claude-in-chrome__*`. Memoria: `no_chrome_automation.md`.
- **No Hub-scan in greenfield**: non esplorare altri progetti Hub/dev/* per "ereditare pattern". Memoria: `no_hub_scan_greenfield.md`.
- **Stack lean per vetrine**: Astro > Next.js, no framer-motion. Memoria: `stack_preference_vetrina_sites.md`.
- **GitHub Pages su Free plan = solo repo pubblici**. Repo cambiato a public (dati di contatto già pubblici sul vecchio sito).

## Finding scartati / non applicati
- **Cerbero workflow**: skippato per questo progetto (vetrina statica = LOW-MED risk, audit squad esterno overkill).
- **Ultraplan**: skippato dopo 6+ tentativi falliti.
- **framer-motion**: scartato dal brief originario, solo CSS.
- **`<base>` tag soluzione semplice**: scartata, usato `import.meta.env.BASE_URL` per link interni Header/Footer.

## Stato task

### ✅ Completati
1. Scaffold Astro + integrations (Tailwind, sitemap, Vercel)
2. Data layer: `src/data/business.ts`, `src/data/menu.ts`, `src/data/monthly-special.json`
3. Layout + SchemaOrgJsonLd (JSON-LD Restaurant+LocalBusiness, meta OG/Twitter complete)
4. Componenti persistenti: Header (sticky+blur+mobile sheet), Footer, FrictionlessContact (FAB)
5. Sezioni: Hero, Manifesto, MonthlySpecialFeatured, Events, InteractiveMenu (tabs/accordion), PaymentBadges
6. Pages: index, menu, eventi, contatti (con Google Maps embed), privacy-policy, cookie-policy
7. Public assets: favicon SVG cuore, robots.txt, README con TODO pre-deploy
8. Build production OK (~772K total, ~96K font subset latin caricato)
9. Git commit + push iniziale (commit `7f0050c`)
10. **Editorial visual layer** (commit `69b7971`): grain texture, parallax hero, scroll-reveal IO, marquee strip, section numbers, card-lift hover, heart-pulse animation badge Cuore, decorative SVG basilico
11. **GH Pages deploy** (commit `b3da919`, fix Node 22): live a https://m8seven.github.io/cuore-ristopizza/
12. **Prototipi pizza interattiva** (commit `13f3de0`): /prototipo-1 (emoji floating + parallax) e /prototipo-2 (cards hover ingredient explosion)

### 🔄 In corso (ultimo task quando context watchdog è scattato)
- **Prototipo 1 v2**: utente disse "non ci siamo, deve essere più dinamico e realistico". Ho riscritto `src/pages/prototipo-1.astro`:
  - SVG illustrati professionali per ingredienti (tomato/basil/mozza/olive/chili/mushroom/salami/garlic) con gradient + highlights + dettagli (NO più emoji)
  - Multi-wave organic motion (drift-a + drift-b keyframes con periodi diversi)
  - 3D perspective tilt del piano sul mouse (rotateX/rotateY con lerp smoothing)
  - Depth blur + opacity scale per profondità
  - Click su ingrediente → "drop onto pizza" animation con coordinate calcolate dinamicamente
  - Tooltip nome ingrediente on hover/focus
  - Astro check: 0 errori
- **PROSSIMO STEP** (pre-watchdog): commit + push del prototipo v2 → triggera GH Pages auto-deploy → mando link aggiornato all'utente per review/cliente.

### ⏳ Pending / TODO
- Decidere se prototipo-2 va ribadito anch'esso con SVG realistici (utente non ha specificato, ma ha detto "deve essere" singolare → forse vuole solo proto-1 v2)
- Pre-deploy produzione (TODO in README): foto reali al posto Unsplash, geo verificate (45.6483, 9.0852 placeholder), og-image.jpg, revisione legale privacy/cookie, dominio `cuoreristopizza.it`
- Deploy Vercel produzione quando dominio pronto

## File critici modificati nella sessione

### Creati
- `cuore-ristopizza/astro.config.mjs` (env-aware site/base/adapter)
- `cuore-ristopizza/src/data/business.ts`, `menu.ts`, `monthly-special.json`
- `cuore-ristopizza/src/styles/global.css` (Tailwind 4 + theme + animazioni)
- `cuore-ristopizza/src/layouts/BaseLayout.astro`
- `cuore-ristopizza/src/components/`: Header, Footer, FrictionlessContact, Hero, Manifesto, MonthlySpecialFeatured, Events, InteractiveMenu, PaymentBadges, SchemaOrgJsonLd, **Marquee, ScrollReveal, SectionNumber** (visual layer)
- `cuore-ristopizza/src/pages/`: index, menu, eventi, contatti, privacy-policy, cookie-policy, **prototipo-1, prototipo-2**
- `cuore-ristopizza/public/favicon.svg`, `robots.txt`
- `cuore-ristopizza/README.md`
- `.github/workflows/deploy.yml` (root del repo, NON sottocartella)

### Modificati ultimamente
- `cuore-ristopizza/src/pages/prototipo-1.astro` — appena riscritto in v2 (SVG illustrati, 3D tilt, drop interaction). **NON ANCORA COMMITTED**.

## URL importanti
- Dev: http://localhost:4321 (PID 94259)
- GH Pages: https://m8seven.github.io/cuore-ristopizza/
- Repo: https://github.com/M8seven/cuore-ristopizza
- Prototipi (live, ultimo deploy con v1 emoji): /prototipo-1, /prototipo-2

## Note sull'utente
- Italiano, lavora a Cogliate (cliente reale).
- Stile comunicativo: brevità, chiede direzioni concrete ("cosa devo fare?"), tollera poco i loop debug (frustrato 6+ volte su ultraplan).
- Ha rifiutato Chrome automation più volte → niente più screenshot via Claude-in-Chrome, dare URL diretti.
- Non vuole framer-motion senza motivo, preferisce stack lean.
- Per cliente: cerca "qualcosa di non piatto", aveva detto "troppo piatto troppo comune" prima del visual layer; "non ci siamo, deve essere più dinamico e realistico" sui prototipi pizza.

## Comandi utili per riprendere
```bash
# Verifica dev server attivo
ps -p 94259 || echo "dev server giù — rilancia: cd cuore-ristopizza && nohup npm run dev > /tmp/cuore-dev.log 2>&1 &"

# Commit + push (per triggerare GH Pages auto-deploy)
cd /Users/m87/Hub/dev/web_site && git status --short

# Watch deploy
gh run list --repo M8seven/cuore-ristopizza --limit 1
```
