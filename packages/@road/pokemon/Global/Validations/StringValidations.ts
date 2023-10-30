import * as E from "fp-ts/Either";
import { PokemonErrorInputs, pokemonError } from "../Error/PokemonError";

export function stringType(
  value: string,
  errInputs: PokemonErrorInputs,
): E.Either<Error, string> {
  if (typeof value !== "string") return E.left(pokemonError(errInputs));
  return E.right(value);
}

export function stringMin(
  value: string,
  min: number,
  errInputs: PokemonErrorInputs,
): E.Either<Error, string> {
  if (typeof value === "string" && value.length >= min) return E.right(value);
  return E.left(pokemonError(errInputs));
}

export function stringMax(
  value: string,
  max: number,
  errInputs: PokemonErrorInputs,
): E.Either<Error, string> {
  if (typeof value === "string" && value.length <= max) return E.right(value);
  return E.left(pokemonError(errInputs));
}
