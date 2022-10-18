import axios from "axios";

import { Network } from "../../types";
import { getUrl } from "../get-url/get-url";

export function fetchBalance(network: Network, address: string) {
  return async function handleFetch() {
    const { data } = await axios.get(getUrl(network, address));

    return data;
  };
}
