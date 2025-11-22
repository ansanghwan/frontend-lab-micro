import styles from "./passwordApp.module.scss";

export default function ResultDisplay({
  password,
  error,
  onCopy,
  handleRefresh,
}) {
  return (
    <div className={styles.resultWrap}>
      {error && <p className={styles.error}>{error}</p>}

      {password && (
        <div className={styles.result}>
          <input type="text" readOnly value={password} />
          <button onClick={onCopy}>복사</button>

          <button onClick={handleRefresh} className={styles.refreshBtn}>
            새로고침
          </button>
        </div>
      )}
    </div>
  );
}
