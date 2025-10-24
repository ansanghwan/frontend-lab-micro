import Link from "next/link";
import { projects } from "./data";

export const metadata = {
  title: "Micro Projects | Frontend Lab",
};

export default function MicroProjectsPage() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Micro Projects</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((p) => (
          <li key={p.slug} style={{ margin: "20px 0" }}>
            <Link href={`/micro-projects/${p.slug}`}>
              <strong>{p.name}</strong> — {p.description}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
