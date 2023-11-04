import { PokemonError, PokemonErrorInput } from "../Error/PokemonError";
import { Either } from "fp-ts/Either";

export type SchemaValidatorPort = <T>(
  schema: Record<string, unknown>,
  errorInput: PokemonErrorInput,
  value: T,
) => Either<PokemonError, T>;
