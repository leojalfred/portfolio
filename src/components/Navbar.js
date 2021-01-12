import { useState, useRef } from 'react'
import Hamburger from 'hamburger-react'
import './Navbar.scss'
import scrollTo from '../utils/scrollTo'
import profile from '../images/profile.jpg'

export default function Navbar({
  bio,
  skills,
  portfolio,
  experience,
  contact,
}) {
  const [isOpen, setOpen] = useState(false)
  const overlay = useRef()
  function handleToggle(toggled) {
    if (toggled) {
      setOpen(true)

      overlay.current.classList.add('overlay--displayed')
      setTimeout(() => overlay.current.classList.add('overlay--visible'), 0)

      document.body.classList.add('overlayed')
    } else {
      setOpen(false)

      overlay.current.classList.remove('overlay--visible')
      setTimeout(
        () => overlay.current.classList.remove('overlay--displayed'),
        200
      )

      document.body.classList.remove('overlayed')
    }
  }

  const mobileScrollTo = ref => () => {
    handleToggle(false)

    const top =
      ref.current.getBoundingClientRect().top + window.pageYOffset - 96
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const linkObjects = [
    { ref: bio, text: 'Bio' },
    { ref: skills, text: 'Skills' },
    { ref: portfolio, text: 'Portfolio' },
    { ref: experience, text: 'Experience' },
    { ref: contact, text: 'Contact' },
  ]
  const getLinks = prefix => {
    const links = linkObjects.map(({ ref, text }, i) => (
      <div
        className={`${prefix}__link-item link-item`}
        onClick={prefix === 'navbar' ? scrollTo(ref) : mobileScrollTo(ref)}
        key={i}
      >
        {text}
      </div>
    ))

    return <div className={`${prefix}__links`}>{links}</div>
  }
  const desktopLinks = getLinks('navbar')
  const mobileLinks = getLinks('overlay')

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const socialObjects = [
    { href: 'https://www.linkedin.com/in/leojalfred/', icon: 'linkedin' },
    { href: 'https://github.com/leojalfred', icon: 'github' },
  ]
  const getSocials = prefix => {
    const socials = socialObjects.map(({ href, icon }, i) => (
      <a
        className={`${prefix}__social-item social-item`}
        href={href}
        target="_blank"
        rel="noreferrer"
        key={i}
      >
        <i className={`fi fi-${icon}`}></i>
      </a>
    ))

    return <div className={`${prefix}__socials`}>{socials}</div>
  }
  const desktopSocials = getSocials('navbar')
  const mobileSocials = getSocials('overlay')

  return (
    <>
      <nav className="navbar">
        {desktopLinks}
        <img
          className="navbar__home"
          src={profile}
          alt="Home"
          onClick={scrollToTop}
        />
        {desktopSocials}
        <Hamburger toggled={isOpen} toggle={setOpen} onToggle={handleToggle} />
      </nav>
      <nav className="overlay" ref={overlay}>
        {mobileLinks}
        {mobileSocials}
      </nav>
    </>
  )
}
