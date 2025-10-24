import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={`nav ${styles.nav}`}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <Link href="/about">About</Link>
        </li> */}
        <li>
          <Link href="/micro-projects">Micro Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
