import { useRef } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'

export default function App() {
  const bioRef = useRef(null)
  const skillsRef = useRef(null)
  const portfolioRef = useRef(null)
  // const experienceRef = useRef(null)
  // const contactRef = useRef(null)

  return (
    <div>
      <Navbar
        bioRef={bioRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
      />

      <div className="main">
        <Banner />
        <Bio reference={bioRef} />
        <Skills reference={skillsRef} />
        <Portfolio reference={portfolioRef} />
      </div>
    </div>
  )
}
