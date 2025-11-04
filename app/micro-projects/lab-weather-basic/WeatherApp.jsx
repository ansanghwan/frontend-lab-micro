"use client";
import { useState } from "react";
import styles from "./WeatherApp.module.scss";
import { fetchByCity, fetchByCoords } from "./weatherApi";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const data = await fetchByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message ?? "알 수 없는 오류");
    } finally {
      setLoading(false);
      setCity("");
    }
  };

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      setError("이 브라우저는 위치 정보를 지원하지 않습니다");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const data = await fetchByCoords(latitude, longitude);
          setWeather(data);
        } catch (err) {
          setError(err.message ?? "위치 기반 조회 실패");
        } finally {
          setLoading(false);
        }
      },
      (geoErr) => {
        setLoading(false);
        setError(geoErr.message ?? "위치 권한이 필요합니다");
      }
    );
  };

  return (
    <div className={styles.weather}>
      <h2>🌤️ Weather App</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="도시 이름 (예: Seoul)"
          aria-label="City name"
        />
        <button type="submit" disabled={loading || !city.trim()}>
          {loading ? "검색 중..." : "검색"}
        </button>
        <button
          className={styles.positonBtn}
          type="button"
          onClick={handleMyLocation}
          disabled={loading}
        >
          📍 내 위치
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.card}>
          <h3>{weather.name}</h3>
          <p className={styles.temp}>{weather.temp}°C</p>
          <p>{weather.desc}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.desc}
          />
        </div>
      )}
    </div>
  );
}
