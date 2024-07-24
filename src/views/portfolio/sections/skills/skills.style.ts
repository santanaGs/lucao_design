import styled from "styled-components"
import { mixins } from "../../../../styles/mixins"

export const Background = styled.div`
	width: 100%;
`

export const Container = styled.div`
	max-width: 70%;
	margin: 0 auto;
	padding-top: 4rem;
	display: flex;
	justify-content: space-between;
	padding-bottom: 3rem;

	@media (max-width: 768px) {
    flex-direction: column;
		max-width: 90%;
		margin-top: 0;
		padding-top: 0;
  }
`

export const Neon = styled.div`
width: 75%;
margin: 0 auto;
	border-bottom: 2px solid ${props => props.theme.white};
	box-shadow: 0 2px 5px ${props => props.theme.white}, 
              0 4px 10px ${props => props.theme.white}, 
              0 6px 15px ${props => props.theme.white};

@media (max-width: 768px) {
  width: 90%;
	margin-bottom: 2rem;
 }
							
`



export const Title = styled.h2`
${mixins.fonts.title}
margin-bottom: 1.688rem;

@media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const ContainerTitle = styled.div`
	width: 50%;
	
	@media (max-width: 768px) {
   width: 100%;
  }
`

export const SkillList = styled.ul`
	@media (max-width: 768px) {
   margin-left: 5%;
	 padding-bottom: 5%;
  }
`


export const SkillItem = styled.li`
font-size: 30px;
font-weight: 400;

@media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const SoftwareContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 1rem;

	@media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SoftwareDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`