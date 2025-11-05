const BASE = "https://api.openweathermap.org/data/2.5";
const KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

function toWeatherModel(data) {
  return {
    name: data.name,
    temp: Math.round(data.main.temp),
    desc: data.weather?.[0]?.description ?? "",
    icon: data.weather?.[0]?.icon ?? "01d",
  };
}

export async function fetchByCity(city) {
  const q = city.trim();
  if (!q) throw new Error("도시를 입력해 주세요");
  const url = `${BASE}/weather?q=${encodeURIComponent(
    q
  )}&units=metric&lang=kr&appid=${KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    // 404: 도시 못 찾음, 401: 키 문제, 429: 호출 초과 등
    const msg =
      res.status === 404
        ? "도시를 찾을 수 없습니다"
        : `요청 실패 (${res.status})`;
    throw new Error(msg);
  }
  const data = await res.json();
  return toWeatherModel(data);
}

export async function fetchByCoords(lat, lon) {
  const url = `${BASE}/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=${KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`요청 실패 (${res.status})`);
  const data = await res.json();
  return toWeatherModel(data);
}
