import { Nav } from "./components/nav/nav";
import { Main } from "./portfolio.styles";
import { Carrossel } from "./sections/carrossel/carrossel";
import { Hero } from "./sections/hero/hero";
import { Skills } from "./sections/skills/skills";

// Functional Component
export function Portfolio() {
  // Rendering
  return (
    <div style={{ flexDirection: "column", width: '100%' }}>
      <Nav />
      <Main>
        <Hero />
        <Skills />
        <Carrossel title="Ilustrações" icon="lapis" key="1" data="ilustracoes" />
        <Carrossel title="Social Mídia" icon="celular" key="1" data="socialmedia" />
      </Main>
    </div>
  )
}
