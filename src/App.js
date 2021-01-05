import profile from './images/profile.jpg'
import './App.scss'

export default function App() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar__links">
          <div className="navbar__link-item">Bio</div>
          <div className="navbar__link-item">Skills</div>
          <div className="navbar__link-item">Portfolio</div>
          <div className="navbar__link-item">Experience</div>
          <div className="navbar__link-item">Contact</div>
        </div>
        <img
          className="navbar__home"
          src={profile}
          alt="Home"
          onClick={handleClick}
        />
        <div className="navbar__socials">
          <a
            className="navbar__social-item"
            href="https://www.linkedin.com/in/leojalfred/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fi fi-linkedin"></i>
          </a>
          <a
            className="navbar__social-item"
            href="https://github.com/leojalfred"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fi fi-github"></i>
          </a>
        </div>
      </nav>
      <div className="main">
        <h1>big ol cock</h1>
      </div>
    </div>
  )
}
