import { currencyFormat, decimalsCurrency } from "./helpers";

describe("helpers", () => {
  it("should format currency", () => {
    const decimales = 2000;
    const moneda = currencyFormat(decimales);
    expect(moneda).toEqual(
      "S/ " + decimalsCurrency(Number(decimales).toFixed(2))
    );
  });

  it("should format decimals currency", () => {
    const number1 = 123;
    const decimals1 = decimalsCurrency(number1);
    expect(decimals1).toEqual("123");

    const number2 = 1234;
    const decimals2 = decimalsCurrency(number2);
    expect(decimals2).toEqual("1,234");

    const numero3 = 12345;
    const decimales3 = decimalsCurrency(numero3);
    expect(decimales3).toEqual("12,345");

    const decimalss4 = decimalsCurrency(undefined);
    expect(decimalss4).toBeUndefined();
  });
});
