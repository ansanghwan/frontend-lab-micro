import Link from "next/link";
import { projects } from "./data";
import styles from "./MicroProject.module.scss";

export const metadata = {
  title: "Micro Projects | Frontend Lab",
};

export default function MicroProjectsPage() {
  return (
    <section className={styles.microProject}>
      <h1>Micro Projects</h1>
      <ul className={styles.lst}>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/micro-projects/${p.slug}`}>
              <p className={styles.name}>{p.name}</p>
              <div className={styles.descWrap}>
                <p className={styles.desc}>{p.description}</p>
                {/* <p className={styles.date}>{p.startedAt}</p> */}

                <p className={styles.date}>
                  {new Date(p.startedAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
