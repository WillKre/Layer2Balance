import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  padding-top: 16px;
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

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 360px;
  height: 24px;
  display: flex;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  border-radius: 16px;
  margin: 0 auto 40px auto;
  background-color: rgb(14, 17, 26);
  border: 1px solid rgba(153, 161, 189, 0.14);
`;

export const InputMessage = styled.span`
  position: absolute;
  text-align: center;
  bottom: -32px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Button = styled.button`
  top: 18px;
  right: 18px;
  padding: 1rem;
  position: absolute;
  border-radius: 16px;
  background-color: rgb(14, 17, 26);
  border: 1px solid rgba(153, 161, 189, 0.14);
`;
