import styles from "./MovieApp.module.scss";

export default function MovieCard({ movie }) {
  return (
    <div className={styles.card}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "/no-poster.png"
        }
        alt={movie.title}
      />
      <div className={styles.info}>
        <h3>{movie.title}</h3>

        <p className={styles.meta}>
          {movie.release_date
            ? movie.release_date.slice(0, 4)
            : "연도 정보 없음"}{" "}
          · ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
        </p>

        <p className={styles.meta}>
          {movie.release_date
            ? movie.release_date.slice(0, 4)
            : "연도 정보 없음"}{" "}
          · ⭐ {movie.vote_average.toFixed(1)}
        </p>
        <p className={styles.overview}>
          {movie.overview || "줄거리 정보가 없습니다."}
        </p>
      </div>
    </div>
  );
}
