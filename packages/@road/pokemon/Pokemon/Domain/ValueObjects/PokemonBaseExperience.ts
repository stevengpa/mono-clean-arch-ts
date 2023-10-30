import * as E from "fp-ts/Either";
import {
  numberMax,
  numberMin,
  numberType,
} from "../../../Global/Validations/NumberValidations";
import {
  Pokemon_Base_Experience_001,
  Pokemon_Base_Experience_002,
  Pokemon_Base_Experience_003,
} from "./PokemonErrors";
import { pokemonNameValidType } from "./PokemonName";
export type PokemonBaseExperience = number;

export function pokemonBaseExperience(
  value: number,
): E.Either<Error, PokemonBaseExperience> {
  const validType = pokemonBaseExperienceValidType(value);
  if (E.isLeft(validType)) return validType;

  const validMin = pokemonBaseExperienceValidMin(value);
  if (E.isLeft(validMin)) return validMin;

  const validMax = pokemonBaseExperienceValidMax(value);
  if (E.isLeft(validMax)) return validMax;

  return E.right(value as PokemonBaseExperience);
}

export const pokemonBaseExperienceValidType = (value: number) =>
  numberType(value, Pokemon_Base_Experience_001);

export const pokemonBaseExperienceValidMin = (value: number) =>
  numberMin(value, 1, Pokemon_Base_Experience_002);

export const pokemonBaseExperienceValidMax = (value: number) =>
  numberMax(value, 20, Pokemon_Base_Experience_003);
