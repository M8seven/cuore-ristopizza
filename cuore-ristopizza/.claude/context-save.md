# Cuore Ristopizza — Context Save (aggiornato 26 apr 2026)

## Decisioni prese

### Stack & architettura
- **Astro 5** SSG + Tailwind 4 (`@tailwindcss/vite`) + `@lucide/astro` + Vercel adapter, env-overridable per GH Pages.
- TypeScript strict.
- Output `static`. Repo: `github.com/M8seven/cuore-ristopizza` **PUBBLICO** (Free plan + Pages requires public).
- Dev server: `nohup npm run dev > /tmp/cuore-dev.log 2>&1 &` (PID variava, da rilanciare se giù).
- Foto: 6 .jpg da Unsplash committate in `cuore-ristopizza/public/photos/` — URL ottenuti via WebFetch dalle pagine reali (non guess), licenza Unsplash free.

### Design system
- Cream `#FAFAFA`, ink `#1F2937`, accent terracotta `#C62828`. Section "dark cinematic" usa `#0d0907` con accento `#ff8a6a`.
- Inter (body) + Playfair Display. Italic-serif accent rosso sui titoli.

## Finding accettati / scartati

**Accettati**
- Astro > Next.js per vetrine, no framer-motion. (vedi `stack_preference_vetrina_sites.md`)
- /web-setup ufficiale per ultraplan SU PRIVATE, ma backend ultraplan ha bug conosciuto: skippato. (`ultraplan_github_app_blocker.md`)
- No Chrome automation per UI flow (utente la rifiuta). (`no_chrome_automation.md`)
- Cerbero overkill per vetrina statica: skippato.
- SVG illustrati non bastano per "realismo": serve foto vere. Switch confermato.

**Scartati**
- Emoji come ingredienti — troppo cartoony.
- SVG illustrati con gradient/shadow — comunque non realistici.
- Mass download Unsplash con ID guessati — hook block (giusto). Solo URL verificati via WebFetch.
- Cambio repo a public via gh CLI senza esplicita autorizzazione utente — hook block (giusto).

## Stato task — sito completo + 2 prototipi live

### ✅ Completati
1. **Scaffold + integrations** (Astro 5 + Tailwind 4 + sitemap + Vercel adapter)
2. **Data layer** type-safe: `src/data/business.ts`, `src/data/menu.ts`, `src/data/monthly-special.json`
3. **Layout + SEO**: BaseLayout con meta OG/Twitter, JSON-LD Restaurant+LocalBusiness, sitemap auto, robots.txt
4. **Componenti persistenti**: Header sticky+blur+mobile sheet, Footer con orari grouped/payment/social SVG, FrictionlessContact FAB
5. **Sezioni home (numbered editorial 01→05)**:
   - 01 Manifesto (3 pillar cards + decorative basil SVG + watermark numbers)
   - 02 MonthlySpecialFeatured (Zuccaccio 8€, foto pizza-wood)
   - **03 FeaturedPizzas — NUOVA** (dark cinematic, 3 foto-card Margherita/Diavola/Cuore + drawer slide-up ingredienti)
   - 04 Events (Mer Hamburger Day + Gio Frittura)
   - 05 InteractiveMenu (tabs desktop/accordion mobile per tutte le pizze classiche/speciali/sfizi/dolci)
6. **Pages**: index, menu, eventi, contatti (Google Maps embed), privacy-policy, cookie-policy
7. **Visual layer editorial**: grain texture, parallax hero, scroll-reveal IO, marquee strip, card-lift, heart-pulse
8. **GH Pages deploy** auto via Action: live a https://m8seven.github.io/cuore-ristopizza/
9. **Prototipi pizza interattiva v3** (foto vere):
   - `/prototipo-1` — Anatomia: foto pizza top-down + 6 hover hotspots con doppio ring pulsante + Ken Burns zoom + 3D mouse tilt + legend chips sotto
   - `/prototipo-2` — Le nostre pizze: 3 foto-card + drawer slide-up con ingredienti chips staggerati
10. **Foto Unsplash** scaricate (margherita, margherita-2, diavola, pizza-hero, pizza-rustic, pizza-wood) usate in Hero, MonthlySpecial, FeaturedPizzas, prototipi
11. **Repo pubblico** + Pages abilitato via API
12. **Last commit pushed**: `905414f feat: integrate signature pizzas section into homepage` (working tree clean, up to date con origin/main)

### ⏳ Pending pre-deploy produzione
- Sostituire foto Unsplash placeholder con foto vere del cliente (basta sovrascrivere i 6 jpg in `public/photos/`)
- Verificare coordinate geo `45.6483, 9.0852` (placeholder)
- Creare `public/og-image.jpg` 1200×630
- Revisione legale `privacy-policy.astro` + `cookie-policy.astro`
- Acquisto dominio `cuoreristopizza.it` + DNS verso Vercel
- `vercel login` + `vercel --prod` quando dominio pronto
- Aggiornare pizza del mese a inizio mese (`monthly-special.json`)

## File critici

```
cuore-ristopizza/
├── astro.config.mjs                env-aware site/base/adapter
├── public/
│   ├── favicon.svg                 cuore rosso
│   ├── robots.txt
│   └── photos/                     ← 6 foto Unsplash (licenza free)
│       ├── margherita.jpg          → home Hero (NO, Hero usa pizza-rustic)
│       ├── margherita-2.jpg        → FeaturedPizzas "Cuore" + proto-2
│       ├── diavola.jpg             → FeaturedPizzas + proto-2
│       ├── pizza-hero.jpg          → proto-1 centerpiece
│       ├── pizza-rustic.jpg        → home Hero
│       └── pizza-wood.jpg          → MonthlySpecialFeatured
├── src/
│   ├── data/{business,menu}.ts + monthly-special.json
│   ├── styles/global.css           Tailwind 4 + theme + animations (grain, marquee, reveal, heart-pulse, card-lift, ken-burns)
│   ├── layouts/BaseLayout.astro
│   ├── components/
│   │   ├── Header / Footer / FrictionlessContact / SchemaOrgJsonLd
│   │   ├── Hero / Manifesto / MonthlySpecialFeatured / Events / InteractiveMenu / PaymentBadges
│   │   ├── FeaturedPizzas (← NUOVO)
│   │   ├── Marquee / SectionNumber / ScrollReveal / IngredientSprite (unused, era v2 SVG, lasciato in repo)
│   └── pages/
│       ├── index.astro
│       ├── menu / eventi / contatti / privacy-policy / cookie-policy.astro
│       └── prototipo-1 / prototipo-2.astro (noindex)
└── .github/workflows/deploy.yml    (al repo root, NON in subdir)
```

## URL importanti
- **Live home**: https://m8seven.github.io/cuore-ristopizza/
- **Proto 1**: https://m8seven.github.io/cuore-ristopizza/prototipo-1/
- **Proto 2**: https://m8seven.github.io/cuore-ristopizza/prototipo-2/
- **Repo**: https://github.com/M8seven/cuore-ristopizza (pubblico)
- **Dev locale**: http://localhost:4321/ (se PID attivo)

## Cronologia commit principali
- `7f0050c` initial scaffold Astro
- `69b7971` editorial visual layer (grain, parallax, marquee, scroll-reveal)
- `b3da919` GH Pages deploy + Node 22 fix
- `13f3de0` proto v1 (emoji)
- `94390e1` proto v2 (SVG illustrati)
- `2aa2db5` proto v3 (foto vere Unsplash + Ken Burns + hover drawer)
- `f03dc5a` proto-2 fix overlap (drawer slide-up sotto name/price)
- `905414f` integrate FeaturedPizzas in homepage (sezione 03 dark)

## Note utente
- Italiano, brief, frustrazione per loop debug.
- Lavora a Cogliate, cliente Cuore Ristopizza è reale (titolare = Calia Dany).
- Ha rifiutato Chrome automation più volte → no MCP claude-in-chrome.
- Ha approvato esplicitamente: repo public, download foto Unsplash.
- Per cliente: chiede dinamismo + realismo. Sezione FeaturedPizzas è il risultato finale approvato ("ok integralo").

## Prossima sessione: comandi utili
```bash
# Verifica dev server attivo
ps -p $(cat /tmp/cuore-dev.pid 2>/dev/null) 2>/dev/null || echo "dev server giù — rilancia"

# Stato git
cd /Users/m87/Hub/dev/web_site && git status

# Force redeploy
cd /Users/m87/Hub/dev/web_site && gh workflow run deploy.yml --repo M8seven/cuore-ristopizza

# Watch deploy
gh run list --repo M8seven/cuore-ristopizza --limit 1
```
