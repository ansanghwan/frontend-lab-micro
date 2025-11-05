import styles from "./WeatherApp.module.scss";
export default function WeatherForm({
  handleSubmit,
  city,
  onChange,
  loading,
  handleMyLocation,
}) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={city}
        onChange={onChange}
        placeholder="도시 이름 (예: Seoul)"
        aria-label="City name"
      />
      <button
        className={styles.searchBtn}
        type="submit"
        disabled={loading || !city.trim()}
      >
        {loading ? "검색 중..." : "검색"}
      </button>
      <button
        className={styles.positionBtn}
        type="button"
        onClick={handleMyLocation}
        disabled={loading}
      >
        📍 내 위치
      </button>
    </form>
  );
}
