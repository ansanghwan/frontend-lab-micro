"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  // 마운트 시 DOM에서 현재 data-theme를 읽어 state 동기화
  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    // ★ 클릭 시에도 DOM의 현재값을 읽어서 next 계산 (state에 의존하지 않기)
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  if (!mounted) return null; // 초기 동기화 전엔 버튼 숨기기(깜빡임/헛클릭 방지)
  return (
    <button onClick={toggle}>
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
