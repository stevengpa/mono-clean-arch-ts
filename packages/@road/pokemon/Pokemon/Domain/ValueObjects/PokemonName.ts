import * as E from "fp-ts/Either";
import {
  Pokemon_Name_001,
  Pokemon_Name_002,
  Pokemon_Name_003,
} from "./PokemonErrors";
import {
  stringMax,
  stringMin,
  stringType,
} from "../../../Global/Validations/StringValidations";

export type PokemonName = string;

export function pokemonName(value: string): E.Either<Error, PokemonName> {
  const validType = pokemonNameValidType(value);
  if (E.isLeft(validType)) return validType;

  const validMin = pokemonNameValidMin(value);
  if (E.isLeft(validMin)) return validMin;

  const validMax = pokemonNameValidMax(value);
  if (E.isLeft(validMax)) return validMax;

  return E.right(value as PokemonName);
}

export const pokemonNameValidType = (value: string) =>
  stringType(value, Pokemon_Name_001);

export const pokemonNameValidMin = (value: string) =>
  stringMin(value, 2, Pokemon_Name_002);

export const pokemonNameValidMax = (value: string) =>
  stringMax(value, 150, Pokemon_Name_003);
