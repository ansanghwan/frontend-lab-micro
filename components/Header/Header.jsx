import styles from "./Header.module.scss";
import Nav from "../Nav/Nav";
import Link from "next/link";

import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">Sanghwan Frontend</Link>
      </div>
      <div className={styles.right}>
        <Nav className={styles.nav} />
        <ThemeToggle />
      </div>
    </header>
  );
}
