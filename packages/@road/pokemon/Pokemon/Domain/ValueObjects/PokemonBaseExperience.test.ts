import { test, expect, describe } from "bun:test";
import * as E from "fp-ts/Either";
import { pokemonBaseExperience } from "./PokemonBaseExperience";

describe("PokemonBaseExperience", () => {
  [false, undefined, -2.56, 1.5, NaN, 0, "1234567891234567890021"].forEach(
    (value: string | boolean | number | undefined) => {
      test(`should return error when value is ${value}`, () => {
        const _value = value as unknown as number;
        const result = pokemonBaseExperience(_value);

        expect(E.isLeft(result)).toBe(true);
      });
    },
  );

  [1, 10, 20].forEach((value: number) => {
    test(`should be ok when value is ${value}`, () => {
      const result = pokemonBaseExperience(value);

      expect(E.isRight(result)).toBe(true);
    });
  });
});
