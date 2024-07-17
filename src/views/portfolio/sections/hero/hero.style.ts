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
	justify-content: space-between;
`

export const Me = styled.img`
width: 100%;
filter: grayscale(100%);
scale: 1;
cursor: pointer;
transition: all .6s;

&:hover{
	filter: grayscale(0%);
	scale: 1.05;
}
`

export const InfosContainer = styled.div`
width: 65%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const Title = styled.h1`
	${mixins.fonts.titleG};
`

export const Description = styled.p`
	${mixins.fonts.descriptionInfo};
	width: 84%;
`

export const IconsDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`

export const Icon = styled.img`
scale: 1;
cursor: pointer;
transition: all .3s;

&:hover{
	scale: 1.05;
}
`