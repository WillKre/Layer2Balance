import { en } from "../../lang/en";
import { Button, Text, Image } from "./MetamaskConnectButton.styles";

type MetamaskConnectButtonProps = {
  connected: boolean;
  onClick: () => void;
};

export function MetamaskConnectButton({ connected, onClick }: MetamaskConnectButtonProps) {
  return (
    <Button disabled={connected} onClick={onClick}>
      <Text>{connected ? en.connected : en.connectMetamask}</Text>
      <Image connected={connected} src="/metamask-fox.svg" alt="Metamask logo" />
    </Button>
  );
}
