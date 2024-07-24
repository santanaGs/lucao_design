import { A, Background, Container, Div, Img, P } from "./footer.style";


import whatsapp from '../../../assets/whatsapp.svg'
import instagram from '../../../assets/instagram.svg'
import mail from '../../../assets/mail.svg'
import logo_footer from '../../../assets/logo_footer.png'

// Functional Component
export function Footer() {
	// Rendering
	return (
		<Background>
			<Container>
				<Div>
					<A href="https://www.instagram.com/lucao.design_/?igsh=MTJ1amlpeXJvbWM3YQ%3D%3D&utm_source=qr" target="_blank">
						<Img src={instagram} alt="icone da rede socila instagram" />
						<P>@lucao.design_</P>
					</A>
					<A href="https://wa.me/5511986200021?text=Vim%20atrav%C3%A9s%20do%20portf%C3%B3lio." target="_blank">
						<Img src={whatsapp} alt="icone da rede socila whatsapp" />
						<P>(11) 98620-0021</P>
					</A>
				</Div>
				<A href="/">
					<img alt="logo do footer" src={logo_footer} />
				</A>
				<A href="mailto:lucaodesign232@gmail.com">
					<Img src={mail} alt="icone da rede socila instagram" />
					<P>lucaodesign232@gmail.com</P>
				</A>
			</Container>
		</Background>
	)
}
