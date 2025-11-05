import WeatherAppBasic from "../lab-weather-basic/WeatherApp";
import WeatherAppComponents from "../lab-weather-components/WeatherApp";
// ✅ Components 버전
export const weatherProject = {
  component: WeatherAppBasic,
  requirements: (
    <>
      <ul>
        <li>도시명 입력 후 Enter 또는 “검색” 버튼으로 날씨 조회</li>
        <li>API 호출 중 로딩 상태 표기 (버튼 비활성화/메시지)</li>
        <li>도시명을 잘못 입력 시 오류 메시지 표시</li>
        <li>섭씨(°C) 기준으로 현재 온도 표시</li>
        <li>날씨 설명(한글)과 아이콘 표시</li>
        <li>.env.local의 API Key를 환경 변수로 사용</li>
        {/* <li>내 위치(geolocation) 기반 조회는 차기 버전에서 추가 예정</li> */}
      </ul>

      <h2>Memo</h2>
      <div>
        <p>이번 프로젝트는 처음으로 API를 직접 연결해 본 경험이었습니다.</p>
        <p>API 문서를 찾아보고 이해하는 과정이 생각보다 쉽지 않았습니다.</p>
        <p>
          아직은 API 문서를 읽는 것도, 실제로 연결하는 것도 익숙하지 않지만 여러
          번 연습하다 보면 자연스럽게 감을 잡게 될 거라 믿습니다.
        </p>
      </div>
    </>
  ),
};

// ✅ Components 버전
export const weatherComponentsProject = {
  component: WeatherAppComponents,
  requirements: (
    <>
      <ul>
        <li>입력 폼을 별도 컴포넌트(WeatherForm)로 분리</li>
        <li>날씨 결과 표시를 WeatherCard 컴포넌트로 분리</li>
        <li>에러 메시지를 WeatherError 컴포넌트로 분리</li>
        <li>로딩 상태를 WeatherLoading 컴포넌트로 분리 (스피너/텍스트)</li>
        <li>부모 컴포넌트(WeatherApp)가 상태(state) 및 API 로직을 관리</li>
        <li>props 구조 분해를 통해 자식 간 데이터와 이벤트 전달</li>
        <li>OpenWeather API (fetchByCity / fetchByCoords) 모듈화</li>
        <li>로딩 중일 때 버튼 비활성화 및 시각적 표시</li>
      </ul>

      <h2>Memo</h2>
      <div>
        <p>
          이번 컴포넌트 버전에서는 WeatherApp의 구조를 역할별로 분리했습니다.
        </p>
        <p>
          Form, Card, Error, Loading 네 개의 컴포넌트로 나누며 props 흐름과 상태
          관리 구조를 파악하려고 노력했습니다.
        </p>
        <p>
          아직 컴포넌트 분리가 완전히 익숙하진 않지만, 조금씩 감이 오고
          있습니다.
        </p>
      </div>
    </>
  ),
};
