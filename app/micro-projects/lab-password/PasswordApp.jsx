"use client";
import { useState } from "react";
import LengthSlider from "./LengthSlider";
import OptionsGroup from "./OptionsGroup";
import ResultDisplay from "./ResultDisplay";
import styles from "./passwordApp.module.scss";

export default function PasswordApp() {
  // ---------------------------------
  // 1) Basic 버전의 state
  // ---------------------------------
  const [basic, setBasic] = useState({
    length: 12,
    includeUpper: true,
    includeLower: true,
    includeNumber: true,
    includeSymbol: false,
    password: "",
    error: "",
  });

  // ---------------------------------
  // 2) Component 버전의 state
  // ---------------------------------
  const [comp, setComp] = useState({
    length: 12,
    includeUpper: true,
    includeLower: true,
    includeNumber: true,
    includeSymbol: false,
    password: "",
    error: "",
  });

  // ---------------------------------
  // 공통: 비밀번호 생성 로직
  // ---------------------------------
  const generatePassword = (state, setState) => {
    let chars = "";
    if (state.includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (state.includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (state.includeNumber) chars += "0123456789";
    if (state.includeSymbol) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      setState({ ...state, error: "최소 하나 이상의 옵션을 선택해주세요." });
      return;
    }

    let pw = "";
    for (let i = 0; i < state.length; i++) {
      pw += chars[Math.floor(Math.random() * chars.length)];
    }

    setState({ ...state, password: pw, error: "" });
  };

  const copy = async (pw) => {
    if (!pw) return;
    await navigator.clipboard.writeText(pw);
    alert("비밀번호가 복사되었습니다!");
  };
  const handleRefresh = (state, setState) => {
    generatePassword(state, setState);
  };

  return (
    <section className={styles.password}>
      {/* ------------------------------- */}
      {/*  BASIC VERSION                  */}
      {/* ------------------------------- */}
      <h2>Password Generator (Basic)</h2>

      <div className={styles.control}>
        <label>길이: {basic.length}</label>
        <input
          type="range"
          min="8"
          max="32"
          value={basic.length}
          onChange={(e) =>
            setBasic({ ...basic, length: Number(e.target.value) })
          }
        />
      </div>

      <div className={styles.options}>
        <label>
          <input
            type="checkbox"
            checked={basic.includeUpper}
            onChange={() =>
              setBasic({ ...basic, includeUpper: !basic.includeUpper })
            }
          />
          대문자 포함 (A-Z)
        </label>

        <label>
          <input
            type="checkbox"
            checked={basic.includeLower}
            onChange={() =>
              setBasic({ ...basic, includeLower: !basic.includeLower })
            }
          />
          소문자 포함 (a-z)
        </label>

        <label>
          <input
            type="checkbox"
            checked={basic.includeNumber}
            onChange={() =>
              setBasic({ ...basic, includeNumber: !basic.includeNumber })
            }
          />
          숫자 포함 (0-9)
        </label>

        <label>
          <input
            type="checkbox"
            checked={basic.includeSymbol}
            onChange={() =>
              setBasic({ ...basic, includeSymbol: !basic.includeSymbol })
            }
          />
          특수문자 포함 (!@#$)
        </label>
      </div>

      {basic.error && <p className={styles.error}>{basic.error}</p>}

      <button
        className={styles.generateBtn}
        onClick={() => generatePassword(basic, setBasic)}
      >
        비밀번호 생성
      </button>

      {basic.password && (
        <div className={styles.result}>
          <input type="text" readOnly value={basic.password} />
          <button onClick={() => copy(basic.password)}>복사</button>

          <button
            onClick={() => handleRefresh(basic, setBasic)}
            className={styles.refreshBtn}
          >
            새로고침
          </button>
        </div>
      )}

      <hr />

      {/* ------------------------------- */}
      {/*  COMPONENT VERSION              */}
      {/* ------------------------------- */}
      <h2>Password Generator (컴포넌트 버전)</h2>

      <LengthSlider
        length={comp.length}
        onChange={(len) => setComp({ ...comp, length: len })}
      />

      <OptionsGroup
        includeUpper={comp.includeUpper}
        includeLower={comp.includeLower}
        includeNumber={comp.includeNumber}
        includeSymbol={comp.includeSymbol}
        onToggle={(key) => setComp({ ...comp, [key]: !comp[key] })}
      />

      <button
        className={styles.generateBtn}
        onClick={() => generatePassword(comp, setComp)}
      >
        비밀번호 생성
      </button>

      <ResultDisplay
        password={comp.password}
        error={comp.error}
        onCopy={() => copy(comp.password)}
        handleRefresh={() => handleRefresh(comp, setComp)}
      />
    </section>
  );
}
