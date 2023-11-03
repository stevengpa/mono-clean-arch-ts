import { describe, test, expect } from "bun:test";

import { isRight, isLeft } from "fp-ts/Either";
import { pokemonId } from "./PokemonId";

describe("PokemonId", () => {
  [
    false,
    undefined,
    -2.56,
    NaN,
    Number.MAX_SAFE_INTEGER,
    "1234567891234567890021",
  ].forEach((value: string | boolean | number | undefined) => {
    test(`should return error when value is ${value}`, () => {
      const _value = value as unknown as number;
      const result = pokemonId(_value);

      expect(isLeft(result)).toBe(true);
    });
  });

  [1, 10, 20, 1000000].forEach((value: number) => {
    test(`should be ok when value is ${value}`, () => {
      const result = pokemonId(value);

      expect(isRight(result)).toBe(true);
    });
  });
});
