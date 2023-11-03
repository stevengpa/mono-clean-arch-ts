import { Either } from "fp-ts/Either";
import { JSONSchemaType } from "ajv";

import {
  schemaValidatorAdapter,
  schemaValidatorPort,
  PokemonError,
  PokemonErrorInput,
} from "../../../Global";

export type PokemonName = string;

const PokemonNameSchema: JSONSchemaType<string> = {
  type: "string",
  minLength: 2,
  maxLength: 20,
};

const POKEMON_NAME_ERROR: PokemonErrorInput = {
  code: "Pokemon_Name",
  message: "Invalid pokemon name",
};

export const pokemonNameConnector =
  (schemaValidatorPort: schemaValidatorPort) =>
  (value: string): Either<PokemonError, PokemonName> =>
    schemaValidatorPort<PokemonName>(
      PokemonNameSchema,
      POKEMON_NAME_ERROR,
      value,
    );

export const pokemonName = pokemonNameConnector(schemaValidatorAdapter);
