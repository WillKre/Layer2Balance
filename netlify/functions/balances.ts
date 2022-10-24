import axios from "axios";
import { Handler } from "@netlify/functions";

enum Network {
  Arbitrum = "arbitrum",
  Ethereum = "ethereum",
  Optimism = "optimism",
  Polygon = "polygon",
}

export function getApiKey(network: Network) {
  switch (network) {
    case Network.Arbitrum:
      return process.env.VITE_ARBITRUM_API_KEY;
    case Network.Ethereum:
      return process.env.VITE_ETHEREUM_API_KEY;
    case Network.Optimism:
      return process.env.VITE_OPTIMISM_API_KEY;
    case Network.Polygon: // @todo get WETH over Matic
      return process.env.VITE_POLYGON_API_KEY;
    default:
      return "";
  }
}

function getPrefix(network: Network) {
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
      return "";
  }
}

export const handler: Handler = async (event) => {
  try {
    const { network, address } = event.queryStringParameters as { address: string; network: Network };

    const { data } = await axios.get(
      `${getPrefix(network)}api?module=account&action=balance&address=${address}&tag=latest&apikey=${getApiKey(
        network
      )}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
