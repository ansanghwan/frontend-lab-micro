import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav({ className = "" }) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/micro-projects">Micro Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
