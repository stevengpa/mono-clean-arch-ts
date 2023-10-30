import axios from "axios";

export type httpGetPort = <T>(url: string) => Promise<T>;
export function httpGetAdapter<T>(url: string): Promise<T> {
  return axios.get(url);
}
