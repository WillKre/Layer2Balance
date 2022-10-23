import axios from "axios";

import { getUrl } from "./getUrl";
import { getApiKey } from "./getApiKey";
import { Data, Network } from "../types";

export function fetchBalance(network: Network, address: string) {
  return async function handleFetch() {
    const { data }: { data: Data } = await axios.get(`${getUrl(network, address)}${getApiKey(network)}`);

    return data;
  };
}
