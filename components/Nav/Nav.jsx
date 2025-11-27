"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Nav.module.scss";

export default function Nav({ className = "" }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const pathname = usePathname();
  // 모바일 여부 체크
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 559;
      setIsMobile(mobile);

      //PC 전환시 메뉴 초기화
      if (!mobile) {
        setIsOpen(false);
        setShouldRender(true);
      }
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen && isMobile) {
      setShouldRender(false);
    }
  };
  //페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isOpen) {
      html.classList.add("scroll-lock");
    } else {
      html.classList.remove("scroll-lock");
    }

    // 언마운트 시 정리
    return () => {
      html.classList.remove("scroll-lock");
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isMobile && (
        <button
          className={`${styles.toggleMenuBtn} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span className={styles.toggleMenuIcon}></span>
        </button>
      )}
      {/* Dim 배경 */}
      {isMobile && isOpen && (
        <div className={styles.dim} onClick={toggleMenu} />
      )}

      <nav
        className={`${styles.nav} ${className} ${
          isMobile ? (isOpen ? styles.open : styles.closed) : styles.desktop
        }`}
      >
        <ul>
          <li>
            <Link
              href="/about"
              aria-current={pathname === "/about" ? "page" : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/micro-projects"
              aria-current={pathname === "/micro-projects" ? "page" : undefined}
            >
              Micro Projects
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
