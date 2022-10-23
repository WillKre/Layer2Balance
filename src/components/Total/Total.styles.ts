import styled from "styled-components";

import { getBorderAndBackground } from "../../App.styles";

export const Container = styled.div`
  width: 100%;
  margin: 32px auto;
  position: relative;
  text-align: center;
`;

export const Text = styled.div`
  width: 100%;
  height: 24px;
  padding: 1rem 0;
  position: relative;
  text-align: center;
  border-radius: 8px;
  ${getBorderAndBackground()}
`;
