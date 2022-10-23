import { APIResponse } from "../../types";

export function formatValidBalance(data: APIResponse) {
  return data.message === "OK" ? data.result : "0";
}
