import * as E from "fp-ts/Either";

import {
  schemaValidatorAdapter,
  schemaValidatorPort,
} from "../../../Global/Validations/SchemaValidator";

export type PokemonBaseExperience = number;

const PokemonBaseExperienceSchema = {
  type: "integer",
  minimum: 1,
  maximum: 20,
};

export const pokemonBaseExperienceInit =
  (schemaValidator: schemaValidatorPort) =>
  (value: number): E.Either<string[], PokemonBaseExperience> =>
    schemaValidator<PokemonBaseExperience>(
      PokemonBaseExperienceSchema,
      "PokemonBaseExperience",
      value,
    );
export const pokemonBaseExperience = pokemonBaseExperienceInit(
  schemaValidatorAdapter,
);
