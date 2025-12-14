import CryptoApp from "../lab-crypto/CryptoApp";
import CryptoAppContext from "../lab-crypto-context/CryptoApp";

export const cryptoProject = {
  component: CryptoApp,
  requirements: (
    <>
      <ul>
        <li>CoinGecko API에서 실시간 시세 데이터 조회</li>
        <li>상위 10개의 코인을 표시</li>
        <li>코인명, 현재 가격(USD, KRW), 아이콘 이미지 노출</li>
        <li>로딩 상태를 처리</li>
        <li>정렬 기준(시가총액 / 가격 / 24h 상승률) 변경 기능 제공</li>
      </ul>
      <h2>Memo</h2>

      <div>
        <ul>
          <li>async/await + try/catch 비동기 요청 패턴 익힘</li>
          <li>외부 API 응답 구조 확인 및 방어적 if 검사 연습</li>
          <li>
            옵셔널 체이닝(?.)으로 안전하게 중첩 데이터 접근 하는 법을 알게
            되었습니다.
          </li>
        </ul>
      </div>
    </>
  ),
};

export const cryptoContextProject = {
  component: CryptoAppContext,
  requirements: (
    <>
      <ul>
        <li>
          기존 Crypto Basic 앱과 동일한 UI/동작을 유지하면서, 상태 관리를
          Context + useReducer 기반 전역 상태로 분리
        </li>
        <li>
          <code>CryptoProvider</code>에서 코인 시세, 환율, 로딩 플래그, 정렬
          타입을 한 곳에서 관리하고 하위 컴포넌트에 제공
        </li>
        <li>
          <code>useCrypto</code> 커스텀 훅으로 Context 접근을 캡슐화하여,
          Consumer 컴포넌트는 UI 렌더링과 이벤트 처리에만 집중
        </li>
        <li>
          전역 상태(<code>cryptos</code>, <code>usdToKrw</code>,
          <code>sortType</code>)와 파생 상태(<code>isLoading</code>)를 명확히
          구분해서 설계
        </li>
      </ul>
      <h2>Memo</h2>

      <div>
        <ul>
          <li>
            <code>useReducer</code>를 사용해 액션 기반 상태 전환 패턴 (예:{" "}
            <code>FETCH_CRYPTOS_SUCCESS</code>,<code>FETCH_RATE_SUCCESS</code>,
            <code>SET_SORT_TYPE</code>)을 연습했습니다.
          </li>
        </ul>
      </div>
    </>
  ),
};
