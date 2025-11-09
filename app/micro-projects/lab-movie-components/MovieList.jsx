"use client";
import { useState } from "react";
import styles from "./MovieApp.module.scss";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) return null;
  return (
    <div className={styles.results}>
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}
