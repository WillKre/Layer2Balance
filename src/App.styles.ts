import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-gap: 32px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 32px;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 60px;
  margin-bottom: 60px;
`;

/* Shared styles */

export function getBorderAndBackground() {
  return `
    background-color: rgb(14, 17, 26);
    border: 1px solid rgba(153, 161, 189, 0.14);
  `;
}

export function getFocusStyles() {
  return `
    outline: none;

    &:hover,
    &:focus-visible {
      border-color: cyan;
    }
  `;
}

export const LabelContainer = styled.div`
  left: 0;
  right: 0;
  top: -19.5px;
  z-index: 999;
  width: 100px;
  height: 20px;
  margin: 0 auto;
  position: absolute;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  ${getBorderAndBackground()}
  border-bottom: none;
`;

export const Label = styled.span`
  font-size: 14px;
`;
