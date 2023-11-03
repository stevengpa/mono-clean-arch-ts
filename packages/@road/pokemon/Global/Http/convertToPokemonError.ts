import { AxiosError } from "axios";
import { PokemonError } from "../Error/PokemonError";

export function convertToPokemonError(error: AxiosError | Error): PokemonError {
  if (error instanceof AxiosError) {
    return PokemonError.new({
      code: error?.code ?? "HTTP_AXIOS_ERROR",
      message: error.message,
      metadata: {
        statusCode: error.status,
      },
    });
  } else {
    return PokemonError.new({
      code: "HTTP_ERROR",
      message: error?.message,
    });
  }
}
