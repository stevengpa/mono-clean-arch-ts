import * as E from "fp-ts/Either";

import {
  schemaValidatorAdapter,
  schemaValidatorPort,
} from "../../../Global/Validations/SchemaValidator";

export type PokemonName = string;

const PokemonNameSchema = {
  type: "string",
  minLength: 2,
  maxLength: 20,
};

export const pokemonNameInit =
  (schemaValidator: schemaValidatorPort) =>
  (value: string): E.Either<string[], PokemonName> =>
    schemaValidator(PokemonNameSchema, "PokemonName", value);

export const pokemonName = pokemonNameInit(schemaValidatorAdapter);
