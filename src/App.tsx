import { ChangeEvent, Fragment, useEffect, useState } from "react";
import Web3 from "web3";
import { Toaster } from "react-hot-toast";
import { useQueries } from "@tanstack/react-query";

import { en } from "./lang";
import { Data, Network } from "./types";
import { Total } from "./components/Total";
import { Loader } from "./components/Loader";
import { Balances } from "./components/Balances";
import { TextInput } from "./components/TextInput";
import { Grid, Wrapper, Title } from "./App.styles";
import { fetchBalance } from "./helpers/fetchBalance";
import { GitHubButton } from "./components/GitHubButton";
import { MessageType, showMessage } from "./helpers/showMessage";
import { MetamaskConnectButton } from "./components/MetamaskConnectButton";
import { formatValidBalance } from "./helpers/formatValidBalance/formatValidBalance";

const networks = [Network.Arbitrum, Network.Ethereum, Network.Optimism, Network.Polygon];

function App() {
  const [address, setAddress] = useState("0x0000000000000000000000000000000000000000");
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const isAddressValid = Web3.utils.isAddress(address);

  const queries = useQueries({
    queries: networks.map((network) => ({
      queryKey: [network],
      queryFn: fetchBalance(network, address),
      refetchOnWindowFocus: false,
    })),
  });

  useEffect(() => {
    if (isAddressValid) {
      queries.forEach(({ refetch }) => refetch());
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

  const isLoading = queries.some((query) => query.isLoading || query.isRefetching);

  return (
    <Fragment>
      <Title>{en.title}</Title>

      <GitHubButton />

      <MetamaskConnectButton onClick={handleConnect} connected={metamaskConnected} />

      <TextInput
        value={address}
        onChange={handleSetAddress}
        errorMessage={en.errorMessage}
        showErrorMessage={isAddressValid}
      />

      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <Grid>
            {queries.map((query, index) => (
              <Balances network={networks[index]} isError={query.isError} balance={formatValidBalance(query.data)} />
            ))}
          </Grid>
        )}

        <Total isLoading={isLoading} values={queries.map(({ data }) => data).filter((s): s is Data => Boolean(s))} />
      </Wrapper>
      <Toaster />
    </Fragment>
  );
}

export default App;
