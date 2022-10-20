import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Network } from "./types";
import { Balances } from "./components/Balances";
import { fetchBalance } from "./helpers/fetch-balance/fetch-balance";
import { Button, Grid, InputContainer, Input, InputMessage, Title } from "./App.styles";
import Web3 from "web3";

function App() {
  // @todo add ability to connect wallet to get address
  const [address, setAddress] = useState("0x0000000000000000000000000000000000000000");
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const isAddressValid = Web3.utils.isAddress(address);

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

  window.ethereum.on("accountsChanged", handleAccountsChanged);

  function handleAccountsChanged(accounts: string[]) {
    if (!accounts.length) {
      // MetaMask is locked or the user has not connected any accounts
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== address) {
      setAddress(accounts[0]);
    }
  }

  async function handleConnect() {
    setMetamaskConnected(!metamaskConnected);

    await window.ethereum.enable();

    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          // Some unexpected error.
          // For backwards compatibility reasons, if no accounts are available,
          // eth_accounts will return an empty array.
          console.error(err);
        });
    } else {
      alert("Install metamask extension!!");
    }
  }

  // @todo handle loading & error within <Balances />
  if (arbitrum.isLoading || ethereum.isLoading || optimism.isLoading || polygon.isLoading) return <h1>Loading...</h1>;

  if (arbitrum.isError || ethereum.isError || optimism.isError || polygon.isError) return <h1>Error...</h1>;

  return (
    <Fragment>
      <Title>Layer2Balance</Title>

      <InputContainer>
        <Input value={address} onChange={handleChange} />
        {!isAddressValid && <InputMessage>Please enter a valid address</InputMessage>}
      </InputContainer>

      <Button disabled={metamaskConnected} onClick={handleConnect}>
        Connect Metamask
      </Button>

      <Grid>
        <Balances network={Network.Arbitrum} balance={arbitrum.data.result} />
        <Balances network={Network.Ethereum} balance={ethereum.data.result} />
        <Balances network={Network.Optimism} balance={optimism.data.result} />
        <Balances network={Network.Polygon} balance={polygon.data.result} />
      </Grid>
    </Fragment>
  );
}

export default App;
