import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMePage from './pages/AboutMe'
import ProjectPage from './pages/Projects'
import ContactPage from './pages/ContactPage'
import SkillPage from './pages/Skills'
import ThanksPage from './pages/Thanks'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/skills" element={<SkillPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/thanks" element={<ThanksPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
