import Hamburger from 'hamburger-react'
import { useRef, useState } from 'react'
import profile from '../images/profile.jpg'
import scrollTo from '../utils/scrollTo'
import './Navbar.scss'

export default function Navbar({ bio, skills, experience, contact }) {
  const [isOpen, setOpen] = useState(false)
  const overlay = useRef()
  function handleToggle(toggled) {
    if (toggled) {
      setOpen(true)

      overlay.current.classList.add('overlay--displayed')
      setTimeout(() => overlay.current.classList.add('overlay--visible'), 0)

      document.body.classList.add('overlayed')
    } else {
      if (overlay.current.classList.contains('overlay--visible')) {
        setOpen(false)

        overlay.current.classList.remove('overlay--visible')
        setTimeout(
          () => overlay.current.classList.remove('overlay--displayed'),
          200
        )

        document.body.classList.remove('overlayed')
      }
    }
  }

  const linkObjects = [
    { ref: bio, text: 'Bio' },
    { ref: skills, text: 'Skills' },
    { ref: experience, text: 'Experience' },
    { ref: contact, text: 'Contact' }
  ]
  const getLinks = prefix => {
    const links = linkObjects.map(({ ref, text }, i) => (
      <button
        className={`${prefix}__link-item link-item`}
        onClick={scrollTo(ref, () => handleToggle(false))}
        type="button"
        aria-label={text}
        key={i}
      >
        {text}
      </button>
    ))

    return <div className={`${prefix}__links`}>{links}</div>
  }
  const desktopLinks = getLinks('navbar')
  const mobileLinks = getLinks('overlay')

  const socialObjects = [
    {
      href: 'https://www.linkedin.com/in/leojalfred/',
      icon: 'linkedin',
      label: 'LinkedIn'
    },
    { href: 'https://github.com/leojalfred', icon: 'github', label: 'GitHub' }
  ]
  const getSocials = prefix => {
    const socials = socialObjects.map(({ href, icon, label }, i) => (
      <a
        className={`${prefix}__social-item social-item`}
        href={href}
        target="_blank"
        rel="noreferrer"
        title={label}
        aria-label={label}
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
        <button
          className="navbar__home-button"
          onClick={scrollTo(null, () => handleToggle(false))}
          type="button"
          aria-label="Home"
        >
          <img className="navbar__home" src={profile} alt="Home" />
        </button>
        {desktopSocials}
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={handleToggle}
          label="Hamburger Menu Toggle"
        />
      </nav>
      <nav className="overlay" ref={overlay}>
        {mobileLinks}
        {mobileSocials}
      </nav>
    </>
  )
}
