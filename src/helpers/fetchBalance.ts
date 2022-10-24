import axios from "axios";

import { Data, Network } from "../types";

export function fetchBalance(network: Network, address: string) {
  return async function handleFetch() {
    const { data }: { data: Data } = await axios.get(
      `/.netlify/functions/balances?network=${network}&address=${address}`
    );

    return data;
  };
}
