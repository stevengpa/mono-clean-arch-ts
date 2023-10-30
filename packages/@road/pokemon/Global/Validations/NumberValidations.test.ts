import { test, describe, expect } from "bun:test";
import * as E from "fp-ts/Either";

import { numberMax, numberMin, numberType } from "./NumberValidations";

describe("NumberValidations", () => {
  describe("numberType", () => {
    [true, "string", null, NaN, undefined].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`should return error when number type is ${value}`, () => {
          const _value = value as unknown as number;
          const actual = numberType(_value, { code: "007", message: "err" });
          expect(E.isLeft(actual)).toBe(true);
        });
      },
    );

    [0, -1, 1.33, -2.15].forEach((value: number) => {
      test(`should be ok when number value is ${value}`, () => {
        const _value = value as unknown as number;
        const actual = numberType(_value, { code: "007", message: "err" });
        expect(E.isRight(actual)).toBe(true);
      });
    });
  });

  describe("numberMin", () => {
    [true, "string", null, NaN, undefined, 5].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`should return error when number min is ${value}`, () => {
          const _value = value as unknown as number;
          const actual = numberMin(_value, 6, { code: "007", message: "err" });
          expect(E.isLeft(actual)).toBe(true);
        });
      },
    );

    [5, 10].forEach((value: number) => {
      test(`should be ok when number min value is ${value}`, () => {
        const _value = value as unknown as number;
        const actual = numberMin(_value, -1, { code: "007", message: "err" });
        expect(E.isRight(actual)).toBe(true);
      });
    });
  });

  describe("numberMax", () => {
    [true, "string", null, NaN, undefined, 5].forEach(
      (value: string | boolean | number | undefined | null) => {
        test(`should return error when number max is ${value}`, () => {
          const _value = value as unknown as number;
          const actual = numberMax(_value, 4, { code: "007", message: "err" });
          expect(E.isLeft(actual)).toBe(true);
        });
      },
    );

    [5, 9].forEach((value: number) => {
      test(`should be ok when number min value is ${value}`, () => {
        const _value = value as unknown as number;
        const actual = numberMax(_value, 10, { code: "007", message: "err" });
        expect(E.isRight(actual)).toBe(true);
      });
    });
  });
});
