import { useRef } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Skills from './components/Skills'

export default function App() {
  const bioRef = useRef(null)
  const skillsRef = useRef(null)
  // const portfolio = useRef(null)
  // const experience = useRef(null)
  // const contact = useRef(null)

  return (
    <div>
      <Navbar bioRef={bioRef} skillsRef={skillsRef} />

      <div className="main">
        <Banner />
        <Bio reference={bioRef} />
        <Skills reference={skillsRef} />
      </div>
    </div>
  )
}
