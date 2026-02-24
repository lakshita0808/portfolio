import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Positions from './components/Positions'
import Experience from './components/Experience'
import ChatSection from './components/ChatSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-primary text-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Positions />
        <Experience />
        <ChatSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
