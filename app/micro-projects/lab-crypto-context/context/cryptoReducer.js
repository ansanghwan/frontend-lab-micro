export const initialState = {
  cryptos: [],
  usdToKrw: null,
  loadingCrypto: true,
  loadingRate: true,
  sortType: "market_cap",
};

export function cryptoReducer(state, action) {
  switch (action.type) {
    case "FETCH_CRYPTOS_SUCCESS":
      return {
        ...state,
        cryptos: action.payload,
        loadingCrypto: false,
      };

    case "FETCH_CRYPTOS_ERROR":
      return {
        ...state,
        loadingCrypto: false,
      };

    case "FETCH_RATE_SUCCESS":
      return {
        ...state,
        usdToKrw: action.payload,
        loadingRate: false,
      };

    case "FETCH_RATE_ERROR":
      return {
        ...state,
        loadingRate: false,
      };

    case "SET_SORT_TYPE":
      return {
        ...state,
        sortType: action.payload,
      };

    default:
      return state;
  }
}
