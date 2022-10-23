import styled from "styled-components";

import { getBorderAndBackground, getFocusStyles } from "../../App.styles";

export const Container = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 32px;
`;

export const Input = styled.input`
  height: 24px;
  width: calc(100% - 2rem);
  max-width: 370px;
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
  border-radius: 8px;
  ${getBorderAndBackground()}
  ${getFocusStyles()}

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -32px;
`;
