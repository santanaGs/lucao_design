import styled from "styled-components";

export const Button = styled.button`
  height: 55px;
  width: 55px;
  border: none;
  position: absolute;
  top: 37%;
  right: 0;
  z-index: 99;
  border-radius: 50%;
  padding: 0.8rem;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: .3s;

  &:hover{
    scale: 1.1;
    background-color: #FEF0D4;
  }
`;

export const Arrow = styled.img`
  width: 100%;
  height: auto;
`;