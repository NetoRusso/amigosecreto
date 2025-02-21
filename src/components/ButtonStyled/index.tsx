

import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: var(--color-yellow);
  color: var(--color-purple);
  outline: none;
  font-family: var(--font-text);
  font-weight: 800;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover { 
    scale: 0.9;
    background-color: var(--color-purple);
    color: var(--color-yellow);
    transition: all 200ms ease-in-out;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`

