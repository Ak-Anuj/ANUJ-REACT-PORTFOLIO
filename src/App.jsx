import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
