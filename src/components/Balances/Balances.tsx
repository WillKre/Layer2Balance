import web3 from "web3";

import { Loader } from "../Loader";
import { Balance } from "./Balance";
import { Network } from "../../types";
import { Asset, Container, Column, Image, Name } from "./Balances.styles";

type BalancesProps = {
  balance: string;
  isError: boolean;
  network: Network;
};

export function Balances({ balance, isError, network }: BalancesProps) {
  return (
    <Container>
      <Asset>
        <Image src={`/${network}.svg`} alt={`${network} logo`} />
        <Name>{network}</Name>
      </Asset>

      {isError ? (
        <Loader />
      ) : (
        <Column>
          <Balance unit="Wei" value={balance} />
          <Balance unit="Gwei" value={web3.utils.fromWei(balance, "gwei")} />
          <Balance unit="Ether" value={web3.utils.fromWei(balance, "ether")} />
        </Column>
      )}
    </Container>
  );
}
