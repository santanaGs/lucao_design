import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const Background = styled.div`
	width: 100%;
`

export const Container = styled.div`
	max-width: 70%;
	margin: 0 auto;
	padding-top: 4rem;
	display: flex;
	flex-direction: column;
	gap: 3.25rem;
	justify-content: space-between;
	padding-bottom: 3rem;

	@media (max-width: 768px) {
    max-width: 90%;
		padding-top: 0;
		padding-bottom: 1rem;
  }
`

export const Title = styled.h2`
${mixins.fonts.title}

@media (max-width: 768px) {
    font-size: 2rem;
		text-align: center;
  }
`

export const TitleContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;

@media (max-width: 768px) {
    justify-content: center;
  }
`

export const Img = styled.img`
	scale: .95;
	transition: .3s;
	&:hover{ 
		scale: 1
	};
	width: 100%;

	@media (max-width: 768px) {
    width: 100%;
  }
`