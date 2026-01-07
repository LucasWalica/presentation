import './App.css'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection.tsx'
import AboutSection from './components/AboutSection.tsx'
import ExperienceSection from './components/ExperienceSection.tsx'
import ProjectsSection from './components/ProjectsSection.tsx'
import SkillsSection from './components/SkillsSection.tsx'
import ContactSection from './components/ContactSection.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import { Analytics } from "@vercel/analytics/react"
function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-custom-background text-custom-neonGreen orbitron">
      <NavBar activeSection={activeSection} />
      
      <main className='pt-36 lg:pt-24'>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <ScrollToTop />
      <Analytics />
    </div>
  )
}

export default App
