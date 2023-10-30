import { test, expect, describe } from "bun:test";
import * as E from "fp-ts/Either";

import { pokemonName } from "./PokemonName";

describe("PokemonName", () => {
  [false, undefined, 1, 2.0, "1234567891234567890021"].forEach(
    (value: string | boolean | number | undefined) => {
      test(`should return error when value is ${value}`, () => {
        const _value = value as unknown as string;
        const result = pokemonName(_value);

        expect(E.isLeft(result)).toBe(true);
      });
    },
  );

  ["Pikachu", "Ditto", "AB", "12345678912345678900"].forEach(
    (value: string) => {
      test(`should be ok when value is ${value}`, () => {
        const result = pokemonName(value);

        expect(E.isRight(result)).toBe(true);
      });
    },
  );
});
