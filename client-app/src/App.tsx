import { JSX } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './main-sections/Intro/Intro'
import About from './main-sections/About/About'
import Projects from './main-sections/Projects'
import Contact from './main-sections/Contact'
import More from './main-sections/More/More'

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="main-page-container">
        <section style={{ height: '100dvh' }} id="home">
          <Intro />
        </section>
        <section style={{ height: '100dvh' }} className="centered-x-axis" id="about">
          <About />
        </section>
        <section style={{ height: '100dvh' }} className="centered-x-axis" id="projects">
          <Projects />
        </section>
        <section style={{ height: '100dvh' }} className="centered-x-axis" id="more">
          <More />
        </section>
        <section style={{ height: '100dvh' }} className="centered-x-axis" id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
