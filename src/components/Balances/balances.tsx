import web3 from "web3";

import { Balance } from "./Balance";
import { Network } from "../../types";
import { Asset, Container, Column, Image, Name } from "./balances.styles";

type BalancesProps = {
  balance: string;
  network: Network;
};

export function Balances({ balance, network }: BalancesProps) {
  return (
    <Container>
      <Asset>
        <Image src={`/${network}.svg`} alt={`${network} logo`} />
        <Name>{network}</Name>
      </Asset>

      <Column>
        {/* @todo format numbers */}
        <Balance unit="Wei" value={balance} />
        <Balance unit="Gwei" value={web3.utils.fromWei(balance, "gwei")} />
        <Balance unit="Ether" value={web3.utils.fromWei(balance, "ether")} />
      </Column>
    </Container>
  );
}
