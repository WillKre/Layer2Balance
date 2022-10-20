import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  margin: 0 auto 40px auto;
  background-color: rgb(14, 17, 26);
  border: 1px solid rgba(153, 161, 189, 0.14);
`;

export const Asset = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.h1`
  margin-left: 16px;
  text-transform: capitalize;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
`;
