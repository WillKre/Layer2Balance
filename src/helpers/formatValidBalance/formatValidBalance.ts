import { Data } from "../../types";

export function formatValidBalance(data: Data | undefined) {
  return data?.message === "OK" ? data.result : "0";
}
