import './Navbar.scss'
import profile from '../images/profile.jpg'

export default function Navbar({ bioRef, skillsRef }) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = ref => () =>
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <div className="navbar__link-item" onClick={scrollTo(bioRef)}>
          Bio
        </div>
        <div className="navbar__link-item" onClick={scrollTo(skillsRef)}>
          Skills
        </div>
        <div className="navbar__link-item">Portfolio</div>
        <div className="navbar__link-item">Experience</div>
        <div className="navbar__link-item">Contact</div>
      </div>
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
