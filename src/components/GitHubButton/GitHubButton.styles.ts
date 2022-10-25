import styled from "styled-components";

import { getBorderAndBackground, getFocusStyles } from "../../App.styles";

export const Button = styled.button`
  top: 8px;
  left: 8px;
  padding: 16px;
  display: flex;
  cursor: pointer;
  position: absolute;
  border-radius: 8px;
  align-items: center;
  color: #fff;
  ${getBorderAndBackground()}
  ${getFocusStyles()}
`;

export const Text = styled.span`
  font-size: 12px;
  margin-right: 8px;
  font-weight: bolder;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  -webkit-filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.7));
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.7));
`;
