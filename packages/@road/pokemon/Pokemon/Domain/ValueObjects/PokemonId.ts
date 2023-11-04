import { Either } from "fp-ts/Either";
import { JSONSchemaType } from "ajv";
import {
  PokemonError,
  PokemonErrorInput,
} from "../../../Global/Error/PokemonError";
import { SchemaValidatorPort } from "../../../Global/Validations/SchemaValidatorPorts";
import { schemaValidatorAdapter } from "../../../Global/Validations/SchemaValidator";

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
  (schemaValidatorPort: SchemaValidatorPort) =>
  (value: number): Either<PokemonError, PokemonId> =>
    schemaValidatorPort<PokemonId>(PokemonIdSchema, POKEMON_ID_ERROR, value);

export const pokemonId = pokemonIdConnector(schemaValidatorAdapter);
