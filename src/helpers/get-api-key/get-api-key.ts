import { Network } from "../../types";

export function getApiKey(network: Network) {
  const env = import.meta.env;

  switch (network) {
    case Network.Arbitrum:
      return env.VITE_ARBITRUM_API_KEY;
    case Network.Ethereum:
      return env.VITE_ETHEREUM_API_KEY;
    case Network.Optimism:
      return env.VITE_OPTIMISM_API_KEY;
    case Network.Polygon:
      return env.VITE_POLYGON_API_KEY;
    default:
      return "";
  }
}
