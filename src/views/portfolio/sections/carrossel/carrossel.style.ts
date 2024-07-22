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
`

export const Title = styled.h2`
${mixins.fonts.title}
`

export const TitleContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

export const Img = styled.img`
	scale: .95;
	transition: .3s;
	&:hover{ 
		scale: 1
	}
`