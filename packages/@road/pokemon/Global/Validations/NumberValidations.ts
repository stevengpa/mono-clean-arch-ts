import * as E from "fp-ts/Either";
import { pokemonError, PokemonErrorInputs } from "../Error/PokemonError";

export function numberType(
  value: number,
  errInputs: PokemonErrorInputs,
): E.Either<Error, number> {
  if (typeof value !== "number") return E.left(pokemonError(errInputs));
  if (Number.isNaN(value)) return E.left(pokemonError(errInputs));

  return E.right(value);
}

export function numberMin(
  value: number,
  min: number,
  errInputs: PokemonErrorInputs,
): E.Either<Error, number> {
  if (typeof value !== "number" || Number.isNaN(value) || value < min) {
    return E.left(pokemonError(errInputs));
  }

  return E.right(value);
}

export function numberMax(
  value: number,
  max: number,
  errInputs: PokemonErrorInputs,
): E.Either<Error, number> {
  if (typeof value !== "number" || Number.isNaN(value) || value > max) {
    return E.left(pokemonError(errInputs));
  }

  return E.right(value);
}
