import { Container, Unit, Value } from "./balance.styles";

type BalanceProps = {
  unit: string;
  value: string;
};

export function Balance({ unit, value }: BalanceProps) {
  return (
    <Container>
      <Unit>{unit}</Unit>
      <Value>{value}</Value>
    </Container>
  );
}
