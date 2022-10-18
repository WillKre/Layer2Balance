import { Network } from "../../types";

export function getPrefix(network: Network) {
  switch (network) {
    case Network.Arbitrum:
      return "https://api.arbiscan.io/";
    case Network.Ethereum:
      return "https://api.etherscan.io/";
    case Network.Optimism:
      return "https://api-optimistic.etherscan.io/";
    case Network.Polygon:
      return "https://api.polygonscan.com/";
    default:
      return "https://api.etherscan.io/";
  }
}
