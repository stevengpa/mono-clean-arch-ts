import { Either, right, left } from "fp-ts/Either";

// TODO: Working on this function
export function extractPokemonIdFrom(url: string): Either<Error, number> {
  try {
    const urlId = url.split("/");
    return right(1);
  } catch (err) {
    return left(new Error("demo"));
  }
}
