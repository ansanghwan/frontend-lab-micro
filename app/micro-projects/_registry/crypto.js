import CryptoApp from "../lab-crypto/CryptoApp";

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
          <li>옵셔널 체이닝(?.)으로 안전하게 중첩 데이터 접근 하는 법을 알게 되었습니다.</li>
        </ul>
      </div>
    </>
  ),
};
