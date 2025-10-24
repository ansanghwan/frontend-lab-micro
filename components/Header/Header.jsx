import styles from "./Header.module.scss";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Frontend Lab</div>
      <Nav />
    </header>
  );
}
