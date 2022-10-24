import { ChangeEvent, Fragment, useEffect, useState } from "react";
import Web3 from "web3";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

import { en } from "./lang";
import { Data, Network } from "./types";
import { Total } from "./components/Total";
import { Loader } from "./components/Loader";
import { Balances } from "./components/Balances";
import { TextInput } from "./components/TextInput";
import { Grid, Wrapper, Title } from "./App.styles";
import { fetchBalance } from "./helpers/fetchBalance";
import { MessageType, showMessage } from "./helpers/showMessage";
import { MetamaskConnectButton } from "./components/MetamaskConnectButton";
import { formatValidBalance } from "./helpers/formatValidBalance/formatValidBalance";

function App() {
  const [address, setAddress] = useState("0x0000000000000000000000000000000000000000");
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const isAddressValid = Web3.utils.isAddress(address);

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

  function handleSetAddress(e: ChangeEvent<HTMLInputElement>) {
    setAddress(e.target.value);
  }

  function handleAccountsChanged(accounts: string[]) {
    if (!accounts.length) {
      // Metamask is locked or the user has not connected any accounts
      showMessage(en.message.connectTo, MessageType.Error);
    } else if (accounts[0] !== address) {
      setAddress(accounts[0]);
      setMetamaskConnected(true);
    }
  }

  async function handleConnect() {
    if (window.ethereum) {
      await window.ethereum.enable();
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      try {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        handleAccountsChanged(accounts);
      } catch (err) {
        // Some unexpected error. For backwards compatibility reasons, if no accounts are available, eth_accounts will return an empty array.
        showMessage(en.message.unexpectedError, MessageType.Error);
      }
    } else {
      showMessage(en.message.installMetamask, MessageType.Error);
    }
  }

  const isLoading = arbitrum.isLoading || ethereum.isLoading || optimism.isLoading || polygon.isLoading;

  return (
    <Fragment>
      <Title>{en.title}</Title>

      <MetamaskConnectButton connected={metamaskConnected} onClick={handleConnect} />

      <TextInput
        value={address}
        onChange={handleSetAddress}
        showErrorMessage={isAddressValid}
        errorMessage={en.errorMessage}
      />

      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <Grid>
            <Balances
              network={Network.Arbitrum}
              isError={arbitrum.isError}
              balance={formatValidBalance(arbitrum.data)}
            />
            <Balances
              network={Network.Ethereum}
              isError={ethereum.isError}
              balance={formatValidBalance(ethereum.data)}
            />
            <Balances
              network={Network.Optimism}
              isError={optimism.isError}
              balance={formatValidBalance(optimism.data)}
            />
            <Balances network={Network.Polygon} isError={polygon.isError} balance={formatValidBalance(polygon.data)} />
          </Grid>
        )}

        <Total
          values={[arbitrum.data, ethereum.data, optimism.data, polygon.data].filter((s): s is Data => Boolean(s))}
        />
      </Wrapper>
      <Toaster />
    </Fragment>
  );
}

export default App;
