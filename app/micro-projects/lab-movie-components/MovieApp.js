"use client";
import { useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import styles from "./MovieApp.module.scss";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE = "https://api.themoviedb.org/3";

export default function MovieApp() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const url = `${BASE}/search/movie?query=${encodeURIComponent(
        q
      )}&language=ko-KR&api_key=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("검색 결과를 불러올 수 없습니다.");
      const data = await res.json();

      if (!data.results?.length) {
        setError("검색 결과가 없습니다.");
        return;
      }

      const mapped = data.results.map((m) => ({
        id: m.id,
        title: m.title,
        poster_path: m.poster_path,
        vote_average: m.vote_average,
        release_date: m.release_date,
        overview: m.overview,
      }));
      setMovies(mapped);
    } catch (err) {
      setError(err.message ?? "알 수 없는 오류");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.movie}>
      <h2>Movie Finder (Basic)</h2>
      <MovieForm
        onSubmit={handleSubmit}
        query={query}
        loading={loading}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className={styles.empty}>검색어를 입력해 영화를 찾아보세요.</p>
      )}
      <div className={styles.grid} aria-live="polite">
        <MovieList movies={movies} />
      </div>
    </section>
  );
}
