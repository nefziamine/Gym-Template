import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Membership from './components/Membership'
import Services from './components/Services'
import Schedule from './components/Schedule'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('apex-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('apex-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Membership />
        <Services />
        <Schedule />
        <Trainers />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
