import { notFound } from "next/navigation";
import { projects } from "../data";
import styles from "./ProjectDetail.module.scss";
import TodoApp from "../lab-todo/TodoApp";

const components = {
  todo: TodoApp,
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const Component = components[slug];

  if (!project) return notFound();

  return (
    <section className={styles.detail}>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div className={styles.content}>
        <Component />
      </div>
    </section>
  );
}
