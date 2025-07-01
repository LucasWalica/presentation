import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMePage from './pages/AboutMe'
import ProjectPage from './pages/Projects'
import ContactPage from './pages/ContactPage'
import SkillPage from './pages/Skills'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMePage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/skills" element={<SkillPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
