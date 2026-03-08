import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import HireSection from './components/HireSection'

function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <HireSection />
    </div>
  )
}

export default App
