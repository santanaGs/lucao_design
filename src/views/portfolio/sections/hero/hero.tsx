import { Background, Container, Description, Icon, IconsDiv, InfosContainer, Me, Title } from "./hero.style";

// images
import me from '../../../../assets/person.png'
import whatsapp from '../../../../assets/whatsapp.svg'
import instagram from '../../../../assets/instagram.svg'
import linkedin from '../../../../assets/linkedin.svg'

// Functional Component
export function Hero() {
	// Rendering
	return (
		<Background>
			<Container id="eu">
				<a href="https://wa.me/5511986200021?text=Vim%20atrav%C3%A9s%20do%20portf%C3%B3lio." target="_blank">
					<Me src={me} alt="iamgem do design lucas" />
				</a>
				<InfosContainer>
					<Title>OLÁ!</Title>
					<Description>
						Sou o <b>Lucas Santos</b>, tenho 22 anos, sou estudante de Design Gráfico. Minha maior paixão é em criar <b>Ilustrações</b>, tenho conhecimento em mídias online e offline, edição de vídeo e criação de sites (UI/UX Design).
					</Description>
					<IconsDiv>
						<a href="https://wa.me/5511986200021?text=Vim%20atrav%C3%A9s%20do%20portf%C3%B3lio." target="_blank">
							<Icon src={whatsapp} alt="icon do whatsapp" />
						</a>
						<a href="https://www.instagram.com/lucao.design_/?igsh=MTJ1amlpeXJvbWM3YQ%3D%3D&utm_source=qr" target="_blank">
							<Icon src={instagram} alt="icone do instagram" />
						</a>
						<a href="https://www.linkedin.com/in/lucas-santana-86b360202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
							<Icon src={linkedin} alt="icone do linkdin" />
						</a>

					</IconsDiv>
				</InfosContainer>
			</Container>
		</Background>
	)
}
