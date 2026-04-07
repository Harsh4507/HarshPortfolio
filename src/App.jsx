import './App.css'
import CodingProfilesSection from './components/CodingProfilesSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
