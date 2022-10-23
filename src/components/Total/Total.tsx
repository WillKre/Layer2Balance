import web3 from "web3";

import { en } from "../../lang";
import { Data } from "../../types";
import { Container, Text } from "./Total.styles";
import { LabelContainer, Label } from "../../App.styles";

type TotalProps = {
  values: Data[];
};

export function Total({ values }: TotalProps) {
  const total = values.reduce((acc, cv) => {
    return cv && cv.status === "1" ? acc + Number(web3.utils.fromWei(cv.result, "ether")) : acc;
  }, 0);

  return (
    <Container>
      <LabelContainer>
        <Label>{en.total}</Label>
      </LabelContainer>

      <Text>
        <strong>{total}</strong> <i>ETH</i>
      </Text>
    </Container>
  );
}
