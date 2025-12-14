import { useContext } from "react";
import { CryptoContext } from "../context/CryptoContext";

export function useCrypto() {
  const ctx = useContext(CryptoContext);
  if (!ctx) {
    throw new Error("useCrypto must be used within CryptoProvider");
  }
  return ctx;
}
