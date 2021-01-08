import { useRef } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'

export default function App() {
  const bio = useRef()
  const skills = useRef()
  const portfolio = useRef()
  const experience = useRef()
  const contact = useRef()

  return (
    <>
      <Navbar
        bio={bio}
        skills={skills}
        portfolio={portfolio}
        experience={experience}
      />

      <div className="main">
        <Banner />
        <Bio bio={bio} contact={contact} />
        <Skills reference={skills} />
        <Portfolio reference={portfolio} />
        <Experience reference={experience} />
      </div>
    </>
  )
}
