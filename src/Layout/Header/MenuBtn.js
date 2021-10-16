import React from "react";
import styled from "styled-components";
import {theme} from "../../styles/theme";

const StyledMenuBtn = styled.button`
  --line-width: 32px;
  --line-height: 3px;

  width: var(--line-width);
  height: var(--line-width);
  position: relative;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  
  span,
  &::before,
  &::after {
    display: block;
    width: var(--line-width);
    height: var(--line-height);
    background: ${theme.colors.blue};
    border-radius: 2px;
  }
  span {
    opacity: 1;
    transition: opacity .1s ease .1s;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all .3s ease .1s;
  }

  &::before {
    top: 6px;
  }

  &::after {
    top: calc(100% - var(--line-height) - 6px);
  }
  
  &.active {
    span {
      opacity: 0;
    }
    &::before,
    &::after {
      top: calc(50% - var(--line-height));
    }
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`

const MenuBtn = ({isOpen, onClick }) => {
    return (
        <StyledMenuBtn className={isOpen ? 'active' : ''} onClick={onClick}>
            <span />
        </StyledMenuBtn>
    )
}

export default MenuBtn