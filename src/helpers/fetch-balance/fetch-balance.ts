import axios from "axios";

import { Network } from "../../types";
import { getUrl } from "../get-url/get-url";
import { getApiKey } from "../get-api-key/get-api-key";

export function fetchBalance(network: Network, address: string) {
  return async function handleFetch() {
    const { data } = await axios.get(`${getUrl(network, address)}${getApiKey(network)}`);

    return data;
  };
}
