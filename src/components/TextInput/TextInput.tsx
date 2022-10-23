import { ChangeEvent } from "react";

import { en } from "../../lang";
import { LabelContainer, Label } from "../../App.styles";
import { Container, Input, ErrorMessage } from "./TextInput.styles";

type TextInputProps = {
  value: string;
  errorMessage: string;
  showErrorMessage: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function TextInput({ value, onChange, showErrorMessage, errorMessage }: TextInputProps) {
  return (
    <Container>
      <LabelContainer>
        <Label>{en.address}</Label>
      </LabelContainer>

      <Input value={value} onChange={onChange} />

      {!showErrorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
