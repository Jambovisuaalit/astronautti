import Link from "next/link";
import type { Section } from "./content";
import styles from "./page.module.css";

export function SectionPage({ section }: { section: Section }) {
  return (
    <main className={styles.page}>
      <section className={styles.subpageHero}>
        <Link className={styles.backLink} href="/">
          ← Etusivulle
        </Link>
        <p className={styles.eyebrow}>{section.eyebrow}</p>
        <h1>{section.title}</h1>
        <p className={styles.lead}>{section.description}</p>
      </section>

      <section className={styles.stackSection} aria-labelledby="focus-heading">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Sisältörakenne</p>
          <h2 id="focus-heading">Keskeiset nostot</h2>
        </div>
        <div className={styles.stackGrid}>
          {section.highlights.map((highlight) => (
            <article className={styles.card} key={highlight}>
              <span className={styles.area}>{section.title}</span>
              <h3>{highlight}</h3>
              <p>Valmis sisältöpaikka sivun jatkosuunnittelua, CMS-mallinnusta ja hakukoneoptimointia varten.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
