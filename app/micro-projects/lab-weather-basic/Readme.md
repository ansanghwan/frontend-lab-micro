# 🌤️ Weather App (Basic)

### 개요

OpenWeather의 Current Weather API를 사용해 도시명을 입력하면 현재 날씨를 보여주는 기본 버전 앱.

## 📦 기술 스택

- Next.js (App Router) / React
- SCSS Modules
- OpenWeather REST API (Current Weather)

### 컴포넌트 구조

```
lab-weather-basic/
 |_ WeatherApp.jsx
 |_ TWeatherApp.module.scss
 |_ README.md

```

## 🔑 환경 변수 설정

프로젝트 루트에 `.env.local` 생성: NEXT*PUBLIC_OPENWEATHER_API_KEY=여기에*발급받은\_API키

### 주요 기능

- 도시명 입력 후 검색 버튼 / Enter로 조회
- API 호출 중 로딩 상태 표시
- 오류 처리 (잘못된 도시 등)
- 섭씨(℃) 단위, 한글 설명(lang=kr)
- 결과 카드: 도시명 / 현재온도 / 날씨설명 / 아이콘

### 상태 관리 흐름

- loading: 요청 시작 시 true → 응답/실패 후 false
- error: 요청 전에 초기화, 실패 시 메시지 표시
- weather: 요청 전에 null로 초기화 → 성공 시 { name, temp, desc, icon }
