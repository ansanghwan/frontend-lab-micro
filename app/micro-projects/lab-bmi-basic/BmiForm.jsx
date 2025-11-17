import styles from "./bmiApp.module.scss";

export default function BmiForm({
  height,
  weight,
  bmi,
  onHeightChange,
  onWeightChange,
  onSubmit,
  getCategory,
}) {
  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          type="number"
          placeholder="키(cm)"
          value={height}
          onChange={onHeightChange}
        />
        <input
          type="number"
          placeholder="몸무게(kg)"
          value={weight}
          onChange={onWeightChange}
        />
        <button type="submit">계산하기</button>
      </form>

      {bmi && <div className={styles.result}>BMI: {getCategory(bmi)}</div>}
    </>
  );
}
