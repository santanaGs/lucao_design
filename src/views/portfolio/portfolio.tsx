import { Nav } from "./components/nav/nav";
import { Main } from "./portfolio.styles";
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
      </Main>
    </div>
  )
}
