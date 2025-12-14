"use client";

import { useEffect, useReducer } from "react";
import { CryptoContext } from "./CryptoContext";
import { cryptoReducer, initialState } from "./cryptoReducer";

export default function CryptoProvider({ children }) {
  const [state, dispatch] = useReducer(cryptoReducer, initialState);

  const isLoading = state.loadingCrypto || state.loadingRate;

  // 1) 코인 시세 가져오기 (CoinGecko, USD 기준)
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1"
        );
        const data = await res.json();
        dispatch({ type: "FETCH_CRYPTOS_SUCCESS", payload: data });
      } catch (err) {
        console.error("💥 Crypto Fetch Error:", err);
        dispatch({ type: "FETCH_CRYPTOS_ERROR" });
      }
    };

    fetchCryptos();
  }, []);

  // 2) USD → KRW 환율 가져오기
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();

        if (data && data.result === "success" && data.rates?.KRW) {
          dispatch({ type: "FETCH_RATE_SUCCESS", payload: data.rates.KRW });
        } else {
          console.error("Unexpected rate response:", data);
          dispatch({ type: "FETCH_RATE_ERROR" });
        }
      } catch (err) {
        console.error("💥 Rate Fetch Error:", err);
        dispatch({ type: "FETCH_RATE_ERROR" });
      }
    };

    fetchRate();
  }, []);

  const value = {
    ...state,
    isLoading,
    setSortType: (type) => dispatch({ type: "SET_SORT_TYPE", payload: type }),
  };

  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
}
