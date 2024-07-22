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
`

export const Neon = styled.div`
width: 75%;
margin: 0 auto;
	border-bottom: 2px solid ${props => props.theme.white};
	box-shadow: 0 2px 5px ${props => props.theme.white}, 
              0 4px 10px ${props => props.theme.white}, 
              0 6px 15px ${props => props.theme.white};
`



export const Title = styled.h2`
${mixins.fonts.title}
margin-bottom: 1.688rem;
`

export const ContainerTitle = styled.div`
	width: 50%;
`

export const SkillList = styled.ul``


export const SkillItem = styled.li`
font-size: 30px;
font-weight: 400;
`

export const SoftwareContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 1rem;
`

export const SoftwareDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`