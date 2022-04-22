import { useRef } from 'react'
import './App.scss'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

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
        contact={contact}
      />

      <div className="main">
        <Banner />
        <Bio bio={bio} contact={contact} />
        <Skills reference={skills} />
        <Portfolio reference={portfolio} />
        <Experience reference={experience} />
        <Contact reference={contact} />
      </div>
    </>
  )
}
