"use client";
import { useState } from "react";
import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";
import WeatherError from "./WeatherError";
import WeatherLoading from "./WeatherLoading";
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
      <WeatherForm
        handleSubmit={handleSubmit}
        city={city}
        onChange={(e) => setCity(e.target.value)}
        loading={loading}
        handleMyLocation={handleMyLocation}
      />
      {error && <WeatherError message={error} />}
      <WeatherLoading show={loading} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
