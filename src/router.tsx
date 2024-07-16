import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/default'
import { Home } from './views/home/home'
import { Portfolio } from './views/portfolio/portfolio'

// Functional Component
export function Router() {
  // Rendering
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  )
}
