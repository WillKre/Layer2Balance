import { Network } from "../../types";

export function getPrefix(network: Network) {
  switch (network) {
    case "arbitrum":
      return "https://api.arbiscan.io/";
    case "ethereum":
      return "https://api.etherscan.io/";
    case "optimism":
      return "https://api-optimistic.etherscan.io/";
    case "polygon":
      return "https://api.polygonscan.com/";
    default:
      return "https://api.etherscan.io/";
  }
}
