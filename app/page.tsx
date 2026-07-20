import Link from "next/link";
import { sections, stack } from "./content";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Astronautti verkkopalvelun suunnitelma</p>
        <h1>Moderni, skaalautuva sivustorakenne kasvua varten.</h1>
        <p className={styles.lead}>
          App Router -pohjainen toteutus jäsentää palvelut, toimialat,
          referenssit, sisällöt ja yhteydenoton omiksi optimoitaviksi
          kokonaisuuksikseen.
        </p>
        <div className={styles.primaryNav} aria-label="Pääsivut">
          {sections.map((section) => (
            <Link href={`/${section.slug}`} key={section.slug}>
              {section.title}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.stackSection} aria-labelledby="stack-heading">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Suositeltu stack</p>
          <h2 id="stack-heading">Teknologiat ja perustelut</h2>
        </div>

        <div className={styles.stackGrid}>
          {stack.map(([area, technology, rationale]) => (
            <article className={styles.card} key={area}>
              <span className={styles.area}>{area}</span>
              <h3>{technology}</h3>
              <p>{rationale}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
