import axios from "axios";
import { Handler } from "@netlify/functions";

enum Network {
  Arbitrum = "arbitrum",
  Ethereum = "ethereum",
  Optimism = "optimism",
  Polygon = "polygon",
}

export function getConfig(network: Network) {
  switch (network) {
    case Network.Arbitrum:
      return {
        apiKey: process.env.VITE_ARBITRUM_API_KEY,
        prefix: "https://api.arbiscan.io/",
      };
    case Network.Ethereum:
      return {
        apiKey: process.env.VITE_ETHEREUM_API_KEY,
        prefix: "https://api.etherscan.io/",
      };
    case Network.Optimism:
      return {
        apiKey: process.env.VITE_OPTIMISM_API_KEY,
        prefix: "https://api-optimistic.etherscan.io/",
      };
    case Network.Polygon:
      return {
        apiKey: process.env.VITE_POLYGON_API_KEY,
        prefix: "https://api.polygonscan.com/",
        action: "tokenbalance&contractaddress=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      };
  }
}

export const handler: Handler = async (event) => {
  try {
    const { network, address } = event.queryStringParameters as { address: string; network: Network };
    const { apiKey, prefix, action } = getConfig(network);

    const { data } = await axios.get(
      `${prefix}api?module=account&action=${action || "balance"}&address=${address}&tag=latest&apikey=${apiKey}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};
