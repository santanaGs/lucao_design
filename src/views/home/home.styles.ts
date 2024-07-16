import styled from 'styled-components'
import { mixins } from '../../styles/mixins'
import { NavLink } from 'react-router-dom'

export const Background = styled.div`
	background-color: ${props => props.theme.black};
	width: 100%;	
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
	overflow-y: hidden;
	overflow-x: hidden;
`

export const Title = styled.h1`
${mixins.fonts.titleLG};
`

export const SubTitle = styled.h1`
${mixins.fonts.subtitle};
`

export const LinkS = styled(NavLink)`
	background-color: ${props => props.theme.white};
	color: ${props => props.theme.black};
	padding: 10px 30px;
	text-decoration: none;
	font-weight: 600;
	font-size: 25px;
	border-radius: 20px;
	margin-top: 2%;
	transition: .3s;
	scale: 1;
	border: 1px solid transparent;

	&:hover{ 
		scale: 1.1;
		color: ${props => props.theme.white};
		border: 1px solid ${props => props.theme.white};
		background-color: transparent;
	}
`

export const Praia = styled.img`
	position: absolute;
	top: -6%;
	left: -11.3%;	
`

export const Casal = styled.img`
	position: absolute;
	top: 13.8%;
	left: -10%;	
	z-index: 2;	
`

export const Mundo = styled.img`
	position: absolute;
	top: 55%;
	left: -8%;
	z-index: 1;	
`
export const Paz = styled.img`
	position: absolute;
	top: -9%;
	right: -11.3%;	
`

export const Coracao = styled.img`
	position: absolute;
	top: 27%;
	right: -14.5%;	
	z-index: 4;	
`
export const Money = styled.img`
	position: absolute;
	top: 56%;
	right: -6.7%;
	z-index: 5;	
`