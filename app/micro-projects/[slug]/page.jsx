import { notFound } from "next/navigation";
import { projects } from "../data";
import styles from "./ProjectDetail.module.scss";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className={styles.detail}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div className={styles.content}>
        <p>이 페이지는 {project.name}의 데모 영역입니다.</p>
      </div>
    </section>
  );
}
