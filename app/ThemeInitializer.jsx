"use client";
import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (systemDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  return null;
}
