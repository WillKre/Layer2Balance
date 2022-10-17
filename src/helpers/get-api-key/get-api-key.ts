import { Network } from "../../types";

export function getApiKey(network: Network) {
  const env = import.meta.env;

  switch (network) {
    case "arbitrum":
      return env.VITE_ARBITRUM_API_KEY;
    case "ethereum":
      return env.VITE_ETHEREUM_API_KEY;
    case "optimism":
      return env.VITE_OPTIMISM_API_KEY;
    case "polygon":
      return env.VITE_POLYGON_API_KEY;
    default:
      return "";
  }
}
