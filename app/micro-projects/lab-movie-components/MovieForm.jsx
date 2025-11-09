"use client";
import { useState } from "react";
import styles from "./MovieApp.module.scss";

export default function MovieForm({ onSubmit, query, onChange, loading }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="영화 제목을 입력하세요 (예: Inception)"
        aria-label="Movie title"
        className={styles.movieInput}
      />
      <button type="submit" disabled={loading || !query.trim()}>
        {loading ? "검색중..." : "검색"}
      </button>
    </form>
  );
}
