import styles from "./WeatherApp.module.scss";

export default function WeatherError({ message }) {
  if (!message) return null; // ✅ 메시지가 없으면 아무것도 렌더링 안 함

  return <p className={styles.error}>{message}</p>;
}
