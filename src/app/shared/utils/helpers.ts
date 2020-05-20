export function currencyFormat(currency: string | number, negative = false) {
  return (
    (negative ? "- " : "") +
    "S/ " +
    decimalsCurrency(Number(currency).toFixed(2))
  );
}
export function decimalsCurrency(number: string | number) {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
