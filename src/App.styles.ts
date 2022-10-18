import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 800px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 60px;
  font-size: 2rem;
  text-align: center;
  color: palevioletred;
`;

export const Input = styled.input`
  display: flex;
  width: 400px;
  padding: 0.5rem;
  margin: 0 auto 40px auto;
`;
