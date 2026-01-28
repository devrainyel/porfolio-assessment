import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Certifications from './pages/Certifications'
import Redacted from './pages/Redacted'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Certifications />
              <Contact />
            </main>
          } />
          <Route path="/redacted" element={<Redacted />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
