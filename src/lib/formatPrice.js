import currency from "currency.js";

const VND_TO_USD_RATE = 25000;

export function formatPrice(vndValue) {
  const usd = currency(Number(vndValue) || 0).divide(VND_TO_USD_RATE);
  return usd.format({ symbol: "$", precision: 2 });
}
