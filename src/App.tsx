import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { SEO } from './components/shared/SEO'
import { Curriculo } from './pages/Curriculo'
import { Home } from './pages/Home'

function PortfolioLayout() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>
    </BrowserRouter>
  )
}
