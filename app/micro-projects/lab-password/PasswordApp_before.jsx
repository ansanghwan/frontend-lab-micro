"use client";
import { useState } from "react";
import LengthSlider from "./LengthSlider";
import OptionsGroup from "./OptionsGroup";
import ResultDisplay from "./ResultDisplay";

import styles from "./passwordApp.module.scss";

export default function PasswordApp() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatePassword = () => {
    let chars = "";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) chars += "0123456789";
    if (includeSymbol) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setError("최소 하나 이상의 옵션을 선택해주세요.");
      return;
    }

    setError("");

    let pw = "";
    for (let i = 0; i < length; i++) {
      pw += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(pw);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    alert("비밀번호가 복사되었습니다!");
  };

  return (
    <section className={styles.password}>
      <h2>Password Generator</h2>

      <div className={styles.control}>
        <label>길이: {length}</label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div className={styles.options}>
        <label>
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
          대문자 포함 (A-Z)
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
          소문자 포함 (a-z)
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeNumber}
            onChange={() => setIncludeNumber(!includeNumber)}
          />
          숫자 포함 (0-9)
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSymbol}
            onChange={() => setIncludeSymbol(!includeSymbol)}
          />
          특수문자 포함 (!@#$)
        </label>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.generateBtn} onClick={generatePassword}>
        비밀번호 생성
      </button>

      {password && (
        <div className={styles.result}>
          <input type="text" readOnly value={password} />
          <button onClick={copyToClipboard}>복사</button>
        </div>
      )}

      <h2>Password Generator (컴포넌트 버전)</h2>

      <LengthSlider value={length} onChange={setLength} />
      <OptionsGroup />
      <ResultDisplay />
    </section>
  );
}
