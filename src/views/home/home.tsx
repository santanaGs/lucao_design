import { Background, Casal, Coracao, LinkS, Mundo, Paz, Praia, SubTitle, Title, Money } from './home.styles'

import logo from '../../assets/logo.svg'
import praia from '../../assets/praia.png'
import casal from '../../assets/amor.png'
import mundo from '../../assets/mundo.png'
import paz from '../../assets/paz.png'
import coracao from '../../assets/coracao.png'
import money from '../../assets/money.png'

// Functional Component
export function Home() {
  // Rendering
  return (
    <Background>
      <img src={logo} alt="Logo da empresa" />
      <Title>Portfólio</Title>
      <SubTitle>Lucas Santos - Design Gráfico</SubTitle>
      <LinkS to={'/portfolio'}>ACESSAR</LinkS>
      <Praia alt='ilustracao de um homem na praia' src={praia} />
      <Casal alt='ilustracao de um casal' src={casal} />
      <Mundo alt='ilustracao do mundo' src={mundo} />
      <Paz alt='ilustracao do simbolo da paz' src={paz} />
      <Coracao alt='ilustracao de um coracao partido' src={coracao} />
      <Money alt='ilustracao de um homem com dinheiro' src={money} />
    </Background>
  )
}
