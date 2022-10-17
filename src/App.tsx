import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Network } from "./types";
import { getUrl } from "./helpers/get-url/get-url";

function App() {
  const ADDRESS = "0x0000000000000000000000000000000000000000";

  function fetchBalance(network: Network, address: string) {
    return function handleFetch() {
      return axios.get(getUrl(network, address)).then(({ data }) => data);
    };
  }

  const arbitrum = useQuery(["arbitrum"], fetchBalance("arbitrum", ADDRESS));
  const ethereum = useQuery(["ethereum"], fetchBalance("ethereum", ADDRESS));
  const optimism = useQuery(["optimism"], fetchBalance("optimism", ADDRESS));
  const polygon = useQuery(["polygon"], fetchBalance("polygon", ADDRESS));

  if (arbitrum.isLoading || ethereum.isLoading || optimism.isLoading || polygon.isLoading) return <h1>Loading...</h1>;

  if (arbitrum.isError || ethereum.isError || optimism.isError || polygon.isError) return <h1>Error...</h1>;

  return (
    <div>
      <pre>{JSON.stringify(arbitrum.data)}</pre>
      <pre>{JSON.stringify(ethereum.data)}</pre>
      <pre>{JSON.stringify(optimism.data)}</pre>
      <pre>{JSON.stringify(polygon.data)}</pre>
    </div>
  );
}

export default App;
