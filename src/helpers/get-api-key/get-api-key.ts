import { Network } from "../../types";

export function getApiKey(network: Network) {
  switch (network) {
    case "arbitrum":
      return "MOCK_TOKEN";
    case "optimism":
      return "MOCK_TOKEN";
    case "ethereum":
      return "MOCK_TOKEN";
    case "polygon":
      return "MOCK_TOKEN";
    default:
      return "MOCK_TOKEN";
  }
}
