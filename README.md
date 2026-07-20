# Astronautti teknologiapino

Tämä Next.js-sovellus esittelee suositellun teknologiapinon modernille, skaalautuvalle verkkopalvelulle.

## Teknologiavalinnat

| Osa | Teknologia | Perustelu |
| --- | --- | --- |
| Frontend | **Next.js 15 (App Router)** | Paras SEO, Server Components, korkea suorituskyky |
| Styling | **Tailwind CSS v4** | Nopea kehitys, helppo design system |
| UI | **shadcn/ui** | Kevyt, laadukas ja täysin muokattava |
| Animoinnit | **Framer Motion** | Modernit mutta suorituskykyiset animaatiot |
| CMS | **Sanity** | Erinomainen editorikokemus ja skaalautuvuus |
| Hosting | **Vercel** | Optimoitu Next.js:lle |
| Kuvien hallinta | **Cloudinary** | Kuvien optimointi ja automaattiset formaatit |
| Lomakkeet | **React Hook Form + Zod** | Nopeat ja tyypitetyt lomakkeet |
| CRM | **HubSpot** tai **Pipedrive** | Liidien hallinta |
| Analytics | **PostHog** + **Google Analytics 4** | Tuote- ja markkinointianalytiikka yhdessä |
| SEO | **next-seo + JSON-LD** | Schema.org ja metatiedot |
| Hakutoiminto | **Algolia** (myöhemmin) | Blogin ja resurssien haku |
| Tietokanta | **Supabase** | Lomakkeet, referenssit, asiakaskirjautuminen tarvittaessa |

## Sivustorakenne

App Routeriin on mallinnettu seuraavat pääsivut:

- `/solutions`
- `/services`
- `/industries`
- `/locations`
- `/case-studies`
- `/blog`
- `/resources`
- `/pricing`
- `/about`
- `/contact`

## Kehitys

```bash
npm install
npm run dev
```

## Tuotantobuild

```bash
npm run build
npm run start
```
