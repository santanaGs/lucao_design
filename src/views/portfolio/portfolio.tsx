import { Nav } from "./components/nav/nav";
import { Footer } from "./footer/footer";
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
        <Carrossel title="Social Mídia" icon="celular" key="2" data="socialmedia" />
        <Carrossel title="Logos" icon="logo" key="3" data="logos" />
        <Carrossel title="Sites" icon="sites" key="4" data="sites" />
      </Main>
      <Footer />
    </div>
  )
}
