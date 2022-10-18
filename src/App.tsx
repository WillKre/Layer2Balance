import { ChangeEvent, useEffect, useState } from "react";
import web3 from "web3";
import { useQuery } from "@tanstack/react-query";

import { Network } from "./types";
import { Container, Input, Title } from "./App.styles";
import { fetchBalance } from "./helpers/fetch-balance/fetch-balance";

function App() {
  const [address, setAddress] = useState("0x0000000000000000000000000000000000000000");
  const isAddressValid = web3.utils.isAddress(address);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  const arbitrum = useQuery([Network.Arbitrum], fetchBalance(Network.Arbitrum, address));
  const ethereum = useQuery([Network.Ethereum], fetchBalance(Network.Ethereum, address));
  const optimism = useQuery([Network.Optimism], fetchBalance(Network.Optimism, address));
  const polygon = useQuery([Network.Polygon], fetchBalance(Network.Polygon, address));

  useEffect(() => {
    if (isAddressValid) {
      arbitrum.refetch();
      ethereum.refetch();
      optimism.refetch();
      polygon.refetch();
    }
  }, [address]);

  if (arbitrum.isLoading || ethereum.isLoading || optimism.isLoading || polygon.isLoading) return <h1>Loading...</h1>;

  if (arbitrum.isError || ethereum.isError || optimism.isError || polygon.isError) return <h1>Error...</h1>;

  return (
    <Container>
      <Title>Layer2Balance</Title>
      {!isAddressValid && <p>Please enter a valid address</p>}

      <Input value={address} onChange={handleChange} />
      <pre>{JSON.stringify(arbitrum.data)}</pre>
      <pre>{JSON.stringify(ethereum.data)}</pre>
      <pre>{JSON.stringify(optimism.data)}</pre>
      <pre>{JSON.stringify(polygon.data)}</pre>
    </Container>
  );
}

export default App;
