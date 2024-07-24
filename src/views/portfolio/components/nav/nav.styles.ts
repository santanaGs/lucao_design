import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavProps } from "./nav";

export const DivS = styled.div`
  background-color: ${props => props.theme.black};
  width: 100%;
  height: 9rem;
  margin: 0 auto;
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 1000; 
  padding-bottom: 1rem;
  padding-top: 2rem;
  border-bottom: 2px solid ${props => props.theme.white};
  box-shadow: 0 0 5px ${props => props.theme.white}, 
              0 0 10px ${props => props.theme.white}, 
              0 0 15px ${props => props.theme.white};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px ${props => props.theme.white}, 
                0 0 15px ${props => props.theme.white}, 
                0 0 20px ${props => props.theme.white};
  }

  @media (max-width: 768px) {
   min-height: 25%;
   height: 25%;
  }
  
`


export const NavS = styled.nav`
	background-color: ${props => props.theme.black};
	height: 6rem;
  display: flex;
	max-width: 70%;
	margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`

export const NavContainer = styled.div`
display: flex;
width: 85%;
justify-content: space-between;


@media (max-width: 768px) {
    height: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: .6rem;
  }

`

export const Item = styled.div<NavProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-bottom: 2px solid ${props => props.active ? '#FEF0D4' : 'transparent'};
  transition: all 0.3s;

  &:hover {
    border-bottom: 2px solid transparent;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transform: translateX(-100%); 
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateX(0); 
		background-color: #FEF0D4;
  }
`;

export const Title = styled.p`
font-size: 20px;

@media (max-width: 768px) {
    font-size: 14px;
  }

`

export const Image = styled.img`
  
`

export const LinkS = styled.a`
	text-decoration: none;
`

export const NavIcon = styled.img`
    @media (max-width: 768px) {
    display: none;
  }
`