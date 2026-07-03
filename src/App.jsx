import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Format from './components/Format'
import Achievements from './components/Achievements'
import IOAAHistory from './components/IOAAHistory'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Format />
        <Achievements />
        <IOAAHistory />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
