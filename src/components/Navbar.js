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
  const linkObjects = [
    { ref: bio, text: 'Bio' },
    { ref: skills, text: 'Skills' },
    { ref: portfolio, text: 'Portfolio' },
    { ref: experience, text: 'Experience' },
    { ref: contact, text: 'Contact' },
  ]
  const links = linkObjects.map(({ ref, text }, i) => (
    <div className="navbar__link-item" onClick={scrollTo(ref)} key={i}>
      {text}
    </div>
  ))

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <nav className="navbar">
      <div className="navbar__links">{links}</div>
      <img
        className="navbar__home"
        src={profile}
        alt="Home"
        onClick={scrollToTop}
      />
      <div className="navbar__socials">
        <a
          className="navbar__social-item"
          href="https://www.linkedin.com/in/leojalfred/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fi fi-linkedin"></i>
        </a>
        <a
          className="navbar__social-item"
          href="https://github.com/leojalfred"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fi fi-github"></i>
        </a>
      </div>
    </nav>
  )
}
