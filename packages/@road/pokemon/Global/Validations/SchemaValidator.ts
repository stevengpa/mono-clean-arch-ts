import Ajv, { ErrorObject } from "ajv";
import { Either, right, left } from "fp-ts/Either";

import { PokemonError, PokemonErrorInput } from "../Error/PokemonError";

const ajv = new Ajv();

export type schemaValidatorPort = <T>(
  schema: Record<string, unknown>,
  errorInput: PokemonErrorInput,
  value: T,
) => Either<PokemonError, T>;

export function schemaValidatorAdapter<T>(
  schema: Record<string, unknown>,
  errorInput: PokemonErrorInput,
  value: T,
): Either<PokemonError, T> {
  const validate = ajv.compile(schema);

  const isValid = validate(value);
  if (isValid) return right(value);

  const errors =
    validate?.errors?.map((error: ErrorObject) => error.message as string) ??
    [];

  const pokemonError = PokemonError.new({
    code: errorInput.code,
    message: errorInput.message,
    metadata: {
      errors,
    },
  });

  return left(pokemonError);
}
