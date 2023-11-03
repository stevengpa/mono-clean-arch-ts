import { Either } from "fp-ts/Either";
import { JSONSchemaType } from "ajv";

import {
  schemaValidatorAdapter,
  schemaValidatorPort,
  PokemonError,
  PokemonErrorInput,
} from "../../../Global";

export type PokemonId = number;

const PokemonIdSchema: JSONSchemaType<number> = {
  type: "integer",
  minimum: 1,
  maximum: 1000000,
};

const POKEMON_ID_ERROR: PokemonErrorInput = {
  code: "Pokemon_Id",
  message: "Invalid pokemon id",
};

export const pokemonIdConnector =
  (schemaValidatorPort: schemaValidatorPort) =>
  (value: number): Either<PokemonError, PokemonId> =>
    schemaValidatorPort<PokemonId>(PokemonIdSchema, POKEMON_ID_ERROR, value);

export const pokemonId = pokemonIdConnector(schemaValidatorAdapter);
