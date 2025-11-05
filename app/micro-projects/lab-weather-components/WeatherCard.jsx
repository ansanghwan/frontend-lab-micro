import styles from "./WeatherApp.module.scss";

export default function WeatherCard({ weather }) {
  return (
    <>
      <div className={styles.card}>
        <h3>{weather.name}</h3>
        <p className={styles.temp}>{weather.temp}°C</p>
        <p>{weather.desc}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.desc}
        />
      </div>
      ;
    </>
  );
}
