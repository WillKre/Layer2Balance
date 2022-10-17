import { Network } from "../../types";
import { getApiKey } from "../get-api-key/get-api-key";
import { getPrefix } from "../get-prefix/get-prefix";

export function getUrl(network: Network, address: string) {
  return `${getPrefix(network)}api?module=account&action=balance&address=${address}&tag=latest&apikey=${getApiKey(
    network
  )}`;
}
