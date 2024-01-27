import { useRef } from 'react'
import './App.scss'
import Banner from './components/Banner'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

export default function App() {
  const bio = useRef()
  const skills = useRef()
  const experience = useRef()
  const contact = useRef()

  return (
    <>
      <Navbar
        bio={bio}
        skills={skills}
        experience={experience}
        contact={contact}
      />

      <div className="main">
        <Banner />
        <Bio bio={bio} contact={contact} />
        <Skills reference={skills} />
        <Experience reference={experience} />
        <Contact reference={contact} />
      </div>
    </>
  )
}
