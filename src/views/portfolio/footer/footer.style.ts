import styled from "styled-components";

export const Background = styled.div`
	width: 100%;
	background-color: #000;

	@media (max-width: 768px){
		width: 100%;
    height: 12rem;
    display: flex;
	}
`

export const Container = styled.div`
	max-width: 70%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding: 1rem;

	@media (max-width: 768px) {
    flex-direction: column;
		align-items: center;
  }

	@media (max-width: 768px) {
    max-width: 90%;
  }
`

export const Div = styled.div`
	display: flex;
	gap: 1rem;
`

export const P = styled.p``

export const A = styled.a`
	display: flex;
	align-items: center;
	gap: 5px;
	text-decoration: none;
	font-weight: bold;
	font-style: italic;

	transition: .3s;

	&:hover{ 
		scale: 1.05
	}

	@media (max-width: 768px) {
    font-size: 0.9rem;
  }

`

export const Img = styled.img`
width: 30px;
`