import { Network } from "../../types";
import { getPrefix } from "../get-prefix/get-prefix";

export function getUrl(network: Network, address: string) {
  return `${getPrefix(network)}api?module=account&action=balance&address=${address}&tag=latest&apikey=`;
}
