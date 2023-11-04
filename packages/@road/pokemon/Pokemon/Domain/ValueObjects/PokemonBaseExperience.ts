import { Either } from "fp-ts/Either";
import { JSONSchemaType } from "ajv";

import {
  PokemonError,
  PokemonErrorInput,
} from "../../../Global/Error/PokemonError";
import { schemaValidatorAdapter } from "../../../Global/Validations/SchemaValidator";
import { SchemaValidatorPort } from "../../../Global/Validations/SchemaValidatorPorts";

export type PokemonBaseExperience = number;

const PokemonBaseExperienceSchema: JSONSchemaType<number> = {
  type: "integer",
  minimum: 1,
  maximum: 20,
};

const POKEMON_BASE_EXPERIENCE_ERROR: PokemonErrorInput = {
  code: "Pokemon_Base_Experience",
  message: "Invalid pokemon base experience",
};

export const pokemonBaseExperienceConnector =
  (schemaValidatorPort: SchemaValidatorPort) =>
  (value: number): Either<PokemonError, PokemonBaseExperience> =>
    schemaValidatorPort<PokemonBaseExperience>(
      PokemonBaseExperienceSchema,
      POKEMON_BASE_EXPERIENCE_ERROR,
      value,
    );

export const pokemonBaseExperience = pokemonBaseExperienceConnector(
  schemaValidatorAdapter,
);
