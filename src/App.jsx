import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // bg-darkBg applique le noir partout, text-white définit le texte par défaut en blanc
    <div className="min-h-screen bg-darkBg text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App