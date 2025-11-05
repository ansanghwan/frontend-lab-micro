import styles from "./WeatherApp.module.scss";

export default function WeatherLoading({ show = false, text = "검색 중..." }) {
  if (!show) return null;
  return (
    <div className={styles.loading} role="status" aria-live="polite">
      <span className={styles.spinner} aria-hidden="true" />
      <span className={styles.loadingText}>{text}</span>
    </div>
  );
}
