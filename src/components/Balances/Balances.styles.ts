import styled from "styled-components";

import { getBorderAndBackground } from "../../App.styles";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 0;
  border-radius: 8px;
  flex-direction: column;
  ${getBorderAndBackground()}
`;

export const Asset = styled.div`
  display: flex;
  margin-left: 32px;
  align-items: center;
`;

export const Name = styled.h1`
  font-size: 20px;
  margin-left: 16px;
  text-transform: capitalize;
`;

export const Column = styled.div`
  display: flex;
  margin-left: 32px;
  flex-direction: column;

  @media (max-width: 400px) {
    font-size: 12px;
    margin-left: 16px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
`;
