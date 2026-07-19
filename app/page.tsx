import styles from "./page.module.css";

const stack = [
  {
    area: "Frontend",
    technology: "Next.js 15 (App Router)",
    rationale: "Paras SEO, Server Components, korkea suorituskyky",
  },
  {
    area: "Styling",
    technology: "Tailwind CSS v4",
    rationale: "Nopea kehitys, helppo design system",
  },
  {
    area: "UI",
    technology: "shadcn/ui",
    rationale: "Kevyt, laadukas ja täysin muokattava",
  },
  {
    area: "Animoinnit",
    technology: "Framer Motion",
    rationale: "Modernit mutta suorituskykyiset animaatiot",
  },
  {
    area: "CMS",
    technology: "Sanity",
    rationale: "Erinomainen editorikokemus ja skaalautuvuus",
  },
  {
    area: "Hosting",
    technology: "Vercel",
    rationale: "Optimoitu Next.js:lle",
  },
  {
    area: "Kuvien hallinta",
    technology: "Cloudinary",
    rationale: "Kuvien optimointi ja automaattiset formaatit",
  },
  {
    area: "Lomakkeet",
    technology: "React Hook Form + Zod",
    rationale: "Nopeat ja tyypitetyt lomakkeet",
  },
  {
    area: "CRM",
    technology: "HubSpot tai Pipedrive",
    rationale: "Liidien hallinta",
  },
  {
    area: "Analytics",
    technology: "PostHog + Google Analytics 4",
    rationale: "Tuote- ja markkinointianalytiikka yhdessä",
  },
  {
    area: "SEO",
    technology: "next-seo + JSON-LD",
    rationale: "Schema.org ja metatiedot",
  },
  {
    area: "Hakutoiminto",
    technology: "Algolia (myöhemmin)",
    rationale: "Blogin ja resurssien haku",
  },
  {
    area: "Tietokanta",
    technology: "Supabase",
    rationale: "Lomakkeet, referenssit, asiakaskirjautuminen tarvittaessa",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Astronautti verkkopalvelun suunnitelma</p>
        <h1>Moderni, skaalautuva teknologiapino kasvua varten.</h1>
        <p className={styles.lead}>
          Kokonaisuus yhdistää nopean Next.js-kehityksen, laadukkaan
          sisällönhallinnan, automaatiot ja analytiikan yhdeksi selkeäksi
          toteutuspoluksi.
        </p>
      </section>

      <section className={styles.stackSection} aria-labelledby="stack-heading">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Suositeltu stack</p>
          <h2 id="stack-heading">Teknologiat ja perustelut</h2>
        </div>

        <div className={styles.stackGrid}>
          {stack.map((item) => (
            <article className={styles.card} key={item.area}>
              <span className={styles.area}>{item.area}</span>
              <h3>{item.technology}</h3>
              <p>{item.rationale}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
