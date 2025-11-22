import styles from "./passwordApp.module.scss";

export default function OptionsGroup({
  includeUpper,
  includeLower,
  includeNumber,
  includeSymbol,
  onToggle,
}) {
  return (
    <div className={styles.options}>
      <label>
        <input
          type="checkbox"
          checked={includeUpper}
          onChange={() => onToggle("includeUpper")}
        />
        대문자 포함 (A-Z)
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeLower}
          onChange={() => onToggle("includeLower")}
        />
        소문자 포함 (a-z)
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeNumber}
          onChange={() => onToggle("includeNumber")}
        />
        숫자 포함 (0-9)
      </label>

      <label>
        <input
          type="checkbox"
          checked={includeSymbol}
          onChange={() => onToggle("includeSymbol")}
        />
        특수문자 포함 (!@#$)
      </label>
    </div>
  );
}
