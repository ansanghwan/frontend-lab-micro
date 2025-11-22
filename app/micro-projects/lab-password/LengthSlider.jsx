import styles from "./passwordApp.module.scss";

export default function LengthSlider({ length, onChange }) {
  return (
    <div className={styles.control}>
      <label>길이: {length}</label>
      <input
        type="range"
        min="8"
        max="32"
        value={length}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
