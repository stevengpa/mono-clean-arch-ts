import { test, describe, expect } from "bun:test";
import { stringMax, stringMin, stringType } from "./StringValidations";
import * as E from "fp-ts/Either";

describe("stringValidations", () => {
  describe("stringType", () => {
    [false, undefined, 1, 1.0, NaN, null].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`invalid string, value is ${value}`, () => {
          const _value = value as unknown as string;
          const result = stringType(_value, { code: "007", message: "err" });

          expect(E.isLeft(result)).toBe(true);
        });
      },
    );

    ["", "Hello"].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`valid string, value is ${value}`, () => {
          const _value = value as unknown as string;
          const result = stringType(_value, { code: "007", message: "err" });

          expect(E.isRight(result)).toBe(true);
        });
      },
    );
  });

  describe("stringMin", () => {
    ["a", "", null, undefined, false].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`invalid string min, value is ${value}`, () => {
          const _value = value as unknown as string;
          const result = stringMin(_value, 2, { code: "007", message: "err" });

          expect(E.isLeft(result)).toBe(true);
        });
      },
    );

    ["ad", "abc"].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`valid string min, value is ${value}`, () => {
          const _value = value as unknown as string;
          const result = stringMin(_value, 2, { code: "007", message: "err" });

          expect(E.isRight(result)).toBe(true);
        });
      },
    );
  });

  describe("stringMax", () => {
    ["123", "12345", null, undefined, false].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`invalid string max, value is ${value}`, () => {
          const _value = value as unknown as string;
          const result = stringMax(_value, 2, { code: "007", message: "err" });

          expect(E.isLeft(result)).toBe(true);
        });
      },
    );

    ["ad3", "abc"].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`valid string max, value is ${value}`, () => {
          const _value = value as unknown as string;
          const result = stringMax(_value, 3, { code: "007", message: "err" });

          expect(E.isRight(result)).toBe(true);
        });
      },
    );
  });
});
