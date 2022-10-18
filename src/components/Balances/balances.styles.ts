import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin: 40px auto;
  max-width: 600px;
  align-items: center;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
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
