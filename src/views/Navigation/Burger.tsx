import React from "react";
import styled from "styled-components";

interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: 2rem;
  top: 1.25rem;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }: StyledBurgerProps) =>
      open ? "#0D0C1D" : "#EFFFFA"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

interface BurgerProps {
  open: boolean;
  setOpen: (prevState: boolean) => void;
}

function Burger({ open, setOpen }: BurgerProps) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Burger;
