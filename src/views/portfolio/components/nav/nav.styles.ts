import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavProps } from "./nav";

export const DivS = styled.div`
  background-color: ${props => props.theme.black};
  width: 100%;
  height: 7rem;
  margin: 0 auto;
  position: fixed; 
  top: 0; 
  left: 0; 
  z-index: 1000; 
  padding-bottom: 1rem;
  border-bottom: 3px solid ${props => props.theme.white};
`

export const NavS = styled.nav`
	background-color: ${props => props.theme.black};
	width: 100%;
	height: 6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 70%;
	margin: 0 auto;
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
`

export const Image = styled.img``

export const LinkS = styled(NavLink)`
	text-decoration: none;
`