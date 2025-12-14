"use client";

import CryptoProvider from "./context/CryptoProvider";
import { useCrypto } from "./hooks/useCrypto";
import styles from "./CryptoApp.module.scss";

export default function CryptoApp() {
  // 레지스트리가 이 컴포넌트를 그대로 렌더링함
  return (
    <CryptoProvider>
      <CryptoScreen />
    </CryptoProvider>
  );
}

// 👉 실제 화면 UI (기존 Basic 버전과 동일)
function CryptoScreen() {
  const { cryptos, usdToKrw, sortType, setSortType, isLoading } = useCrypto();

  if (isLoading) return <p>Loading crypto data &amp; exchange rate...</p>;

  // 화면에 보여줄 때는 반올림 + 천단위 콤마
  const displayRate =
    usdToKrw != null ? Math.round(usdToKrw).toLocaleString() : null;

  // ✅ 정렬된 코인 목록 계산 (베이직 버전과 동일)
  const sortedCryptos = [...cryptos]
    .sort((a, b) => {
      if (sortType === "price") {
        // 가격 기준 내림차순
        return b.current_price - a.current_price;
      }
      if (sortType === "change24h") {
        // 24h 상승률 기준 내림차순
        const aChange = a.price_change_percentage_24h ?? 0;
        const bChange = b.price_change_percentage_24h ?? 0;
        return bChange - aChange;
      }
      // 기본: 시가총액 기준 내림차순
      return (b.market_cap ?? 0) - (a.market_cap ?? 0);
    })
    .slice(0, 10); // ✅ 정렬 후 상위 10개만 사용

  // 정렬 타입에 따른 설명 문구 (베이직 버전과 동일)
  const sortDescription =
    sortType === "market_cap"
      ? "전체 발행량과 가격을 곱한 시가총액이 큰 코인부터 보여줍니다. \n'시장 규모가 큰 코인 TOP 10'이라고 생각하면 됩니다."
      : sortType === "price"
      ? "현재 1코인당 가격(USD 기준)이 높은 순서대로 보여줍니다.\n 개당 가격 기준이라 시가총액 순위와는 다를 수 있습니다."
      : sortType === "change24h"
      ? "최근 24시간 동안 가격이 얼마나 퍼센트(%)로 올랐는지 기준으로, 상승률이 높은 코인부터 정렬했습니다."
      : "";

  return (
    <div className={styles.wrapper}>
      {/* ▶ 제목 영역 */}
      <header className={styles.header}>
        <h2>CoinGecko 기준 상위 10위</h2>
        {displayRate && (
          <p className={styles.rate}>오늘의 환율: {displayRate}원</p>
        )}
      </header>

      <div className={styles.noticeWrap}>
        <p className={styles.notice}>
          ※ 코인 시세 데이터 출처: CoinGecko (공개 API)
          <br />
          ※ 환율 데이터 출처: ExchangeRate-API (open.er-api.com, 무료 Open API)
          <br />※ 표시는 참고용이며, 실제 은행/금융기관/면세점에서 사용하는
          환율과 차이가 있을 수 있습니다.
        </p>
      </div>

      {/* ▶ 정렬 버튼 */}
      <div className={styles.sortControls}>
        <button
          type="button"
          onClick={() => setSortType("market_cap")}
          aria-pressed={sortType === "market_cap"}
        >
          시가총액 순
        </button>
        <button
          type="button"
          onClick={() => setSortType("price")}
          aria-pressed={sortType === "price"}
        >
          가격 순
        </button>
        <button
          type="button"
          onClick={() => setSortType("change24h")}
          aria-pressed={sortType === "change24h"}
        >
          24h 상승률 순
        </button>
      </div>

      <div className={styles.sortDesc}> {sortDescription}</div>

      {/* ▶ 코인 리스트 */}
      <ul className={styles.cryptoList}>
        {sortedCryptos.map((coin) => {
          const priceUsd = coin.current_price;
          const priceKrw =
            usdToKrw != null ? Math.round(priceUsd * usdToKrw) : null;
          const change24 = coin.price_change_percentage_24h; // 24h 변동률

          // +3.21% / -1.05% 형태로 만들기
          const changeLabel =
            typeof change24 === "number"
              ? `${change24 > 0 ? "+" : ""}${change24.toFixed(2)}%`
              : null;
          return (
            <li key={coin.id} className={styles.item}>
              <div className={styles.coninArea}>
                <img src={coin.image} alt={coin.name} width={24} height={24} />
                <div className={styles.meta}>
                  <strong className={styles.name}>{coin.name}</strong>
                  <span className={styles.symbol}>
                    {coin.symbol.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className={styles.price}>
                <span className={styles.usd}>${priceUsd.toLocaleString()}</span>
                {priceKrw != null && (
                  <span className={styles.krw}>
                    ₩{priceKrw.toLocaleString()}원
                  </span>
                )}
              </div>
              {/* ✅ 24h 상승률 모드일 때만 표시 */}
              {sortType === "change24h" && changeLabel && (
                <div
                  className={`${styles.change24} ${
                    change24 > 0
                      ? styles.changeUp
                      : change24 < 0
                      ? styles.changeDown
                      : ""
                  }`}
                >
                  24h 변동률: <span className={styles.up}>{changeLabel}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
