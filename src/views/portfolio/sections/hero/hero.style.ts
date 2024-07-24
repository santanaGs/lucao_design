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

	@media (max-width: 768px) {
    flex-direction: column;
		padding-top: 7rem;
		max-width: 90%;
  }
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

@media (max-width: 768px) {
    margin-bottom: 2rem;
		filter: grayscale(0%);
  }
`

export const InfosContainer = styled.div`
width: 65%;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h1`
	${mixins.fonts.titleG};

	@media (max-width: 768px) {
    font-size: 3rem;
		margin-bottom: 1rem;
  }
`

export const Description = styled.p`
	${mixins.fonts.descriptionInfo};
	width: 84%;

	@media (max-width: 768px) {
    width: 100%;
		font-size: 1.2rem;	
  }
`

export const IconsDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-top: 2rem;
	padding-bottom: 2rem;

	@media (max-width: 768px) {
    gap: .1rem;
  }
`

export const Icon = styled.img`
scale: 1;
cursor: pointer;
transition: all .3s;

&:hover{
	scale: 1.05;
}

@media (max-width: 768px) {
    width: 50%;
  }
`