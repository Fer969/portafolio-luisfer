import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <p className="footer__text">
            Luisfer Fuentes Montoya · Desarrollador Web Full Stack
          </p>
          <p className="footer__copy">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
