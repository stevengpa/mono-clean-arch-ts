import Ajv from "ajv";
import * as E from "fp-ts/Either";

import { pokemonErrors } from "../Error/PokemonError";

const ajv = new Ajv();

export type schemaValidatorPort = <T>(
  schema: Record<string, unknown>,
  key: string,
  value: T,
) => E.Either<string[], T>;

export function schemaValidatorAdapter<T>(
  schema: Record<string, unknown>,
  key: string,
  value: T,
): E.Either<string[], T> {
  const validate = ajv.compile(schema);

  const isValid = validate(value);
  if (isValid) return E.right(value);

  const errors = pokemonErrors(key, validate.errors ?? []);
  return E.left(errors);
}
