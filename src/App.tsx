import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import BackgroundEffects from './components/BackgroundEffects'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.2,
        duration: 0.8
      }
    }
  }

  if (loading) return <Loader />

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative"
    >
      <BackgroundEffects />
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Courses />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm opacity-60">
        © {new Date().getFullYear()} Piotr Peszko | Portfolio CV
      </footer>
    </motion.div>
  )
}

export default App 