import styled from "styled-components";

import { getBorderAndBackground, getFocusStyles } from "../../App.styles";

export const Button = styled.button`
  top: 8px;
  right: 8px;
  padding: 16px;
  display: flex;
  cursor: pointer;
  position: absolute;
  border-radius: 8px;
  align-items: center;
  ${getBorderAndBackground()}
  ${({ disabled }) => (disabled ? `cursor: default;` : getFocusStyles())}
`;

export const Text = styled.span`
  font-size: 12px;
  margin-right: 8px;
  font-weight: bolder;

  @media (max-width: 768px) {
    display: none;
  }
`;

type ImageProps = {
  connected: boolean;
};

export const Image = styled.img<ImageProps>`
  width: 20px;
  height: 20px;
  ${({ connected }) => connected && "opacity: 0.5;"}
`;
