"use client";
import { useState } from "react";
import BmiForm from "./BmiForm";
import styles from "./bmiApp.module.scss";

export default function BmiApp() {
  // const [height, setHeight] = useState("");
  // const [weight, setWeight] = useState("");
  // const [bmi, setBmi] = useState(null);

  const [forms, setForms] = useState({
    basic: { height: "", weight: "", bmi: null },
    comp: { height: "", weight: "", bmi: null },
  });

  const update = (formKey, field, value) => {
    setForms((prev) => ({
      ...prev,
      [formKey]: { ...prev[formKey], [field]: value },
    }));
  };

  const handleSubmit = (formKey) => (e) => {
    e.preventDefault();
    const { height, weight } = forms[formKey];
    const h = Number(height) / 100;
    const w = Number(weight);
    if (!h || !w) return;
    const bmi = Number((w / (h * h)).toFixed(1));

    setForms((prev) => ({
      ...prev,
      [formKey]: { ...prev[formKey], bmi },
    }));
  };

  const getCategory = (bmi) => {
    if (bmi == null) return "";
    if (bmi < 18.5) return "저체중";
    if (bmi < 23) return "정상";
    if (bmi < 25) return "과체중";
    if (bmi < 30) return "비만 1단계";
    if (bmi < 35) return "비만 2단계";
    return "비만 3단계";
  };

  return (
    <section className={styles.bmi}>
      <h2>BMI 계산기 (기본)</h2>
      <form onSubmit={handleSubmit("basic")} className={styles.form}>
        <input
          type="number"
          placeholder="키(cm)"
          value={forms.basic.height}
          onChange={(e) => update("basic", "height", e.target.value)}
        />
        <input
          type="number"
          placeholder="몸무게(kg)"
          value={forms.basic.weight}
          onChange={(e) => update("basic", "weight", e.target.value)}
        />
        <button type="submit">계산하기</button>
      </form>

      {forms.basic.bmi && (
        <div className={styles.result}>BMI: {getCategory(forms.basic.bmi)}</div>
      )}

      {/* {bmi && (
        <div className={styles.result}>
          BMI: {bmi} → {getCategory(bmi)}
        </div>
      )} */}

      <hr />
      <h2>BMI 계산기 (컴포넌트 버전)</h2>

      <BmiForm
        height={forms.comp.height}
        weight={forms.comp.weight}
        bmi={forms.comp.bmi}
        onHeightChange={(e) => update("comp", "height", e.target.value)}
        onWeightChange={(e) => update("comp", "weight", e.target.value)}
        onSubmit={handleSubmit("comp")}
        getCategory={getCategory}
      />
    </section>
  );
}
