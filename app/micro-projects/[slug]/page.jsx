import { notFound } from "next/navigation";
import { projects } from "../data";
import styles from "./ProjectDetail.module.scss";
import { components, requirementsMap } from "../_registry"; // ✅ 추가

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const Component = components[slug];
  const requirements = requirementsMap[slug] ?? null;

  if (!project) return notFound();

  return (
    <section className={styles.detail}>
      <div className={styles.header}>
        <div className={`section-card ${styles.headerInner}`}>
          <h1>{project.name}</h1>
          <p className="muted">{project.description}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={`section-card ${styles.left}`}>
          {Component ? <Component /> : <div>WIP</div>}
        </div>

        <aside
          className={`section-card ${styles.right}`}
          aria-label="Acceptance criteria"
        >
          <h2>Requirements</h2>
          {requirements ?? <div>요구사항 준비중...</div>}
        </aside>
      </div>
    </section>
  );
}
