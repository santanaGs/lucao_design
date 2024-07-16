import { Nav } from "./components/nav/nav";
import { Main } from "./portfolio.styles";
import { Hero } from "./sections/hero/hero";

// Functional Component
export function Portfolio() {
  // Rendering
  return (
    <div style={{ flexDirection: "column", width: '100%' }}>
      <Nav />
      <Main>
        <Hero />
      </Main>
    </div>
  )
}
