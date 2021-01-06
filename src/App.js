import { useRef } from 'react'
import profile from './images/profile.jpg'
import leo from './images/leo.jpg'
import './App.scss'

export default function App() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const bio = useRef(null)
  const skills = useRef(null)
  // const portfolio = useRef(null)
  // const experience = useRef(null)
  // const contact = useRef(null)
  const scrollTo = ref => () =>
    ref.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__links">
          <div className="navbar__link-item" onClick={scrollTo(bio)}>
            Bio
          </div>
          <div className="navbar__link-item" onClick={scrollTo(skills)}>
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

      <div className="main">
        <div className="banner">
          <div className="banner__text">
            <h1 className="banner__heading">Hey, I'm Leo.</h1>
            <h1 className="banner__heading">I create things.</h1>
          </div>

          <div className="banner__tech">
            <div className="banner__square">
              <i className="fi fi-invision"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-mongodb"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-rails"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-redux"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-mysql"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-php"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-css3"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-git"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-html5"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-java"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-jquery"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-nodejs"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-python"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-react"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-ruby"></i>
            </div>
            <div className="banner__square">
              <i className="fi fi-sass"></i>
            </div>
          </div>
        </div>

        <div className="bio" ref={bio}>
          <div className="bio__image-container">
            <img className="bio__image" src={leo} alt="Leo" />
          </div>

          <div className="bio__text">
            <h2 className="bio__heading">About me</h2>
            <p className="bio__paragraph">
              Anim sint nisi consectetur minim incididunt duis laboris
              consectetur consectetur ad ut proident sunt. Dolore officia
              commodo irure magna veniam eu aute. Nulla duis cupidatat consequat
              ea voluptate officia sint proident. Laborum do adipisicing id enim
              pariatur id cupidatat cupidatat in Lorem sunt do fugiat. Excepteur
              tempor occaecat occaecat et ullamco cillum proident laboris nulla
              ad veniam consectetur incididunt dolore. Laborum id aute occaecat
              aliquip esse. Laborum fugiat commodo nostrud nisi do ut magna
              fugiat occaecat adipisicing officia.
            </p>
            <p className="bio__paragraph">
              Anim sint nisi consectetur minim incididunt duis laboris
              consectetur consectetur ad ut proident sunt. Dolore officia
              commodo irure magna veniam eu aute. Nulla duis cupidatat consequat
              ea voluptate officia sint proident. Laborum do adipisicing id enim
              pariatur id cupidatat cupidatat in Lorem sunt do fugiat. Excepteur
              tempor occaecat occaecat et ullamco cillum proident laboris nulla
              ad veniam consectetur incididunt dolore. Laborum id aute occaecat
              aliquip esse. Laborum fugiat commodo nostrud nisi do ut magna
              fugiat occaecat adipisicing officia.
            </p>
            <p className="bio__paragraph">
              Anim sint nisi consectetur minim incididunt duis laboris
              consectetur consectetur ad ut proident sunt. Dolore officia
              commodo irure magna veniam eu aute. Nulla duis cupidatat consequat
              ea voluptate officia sint proident. Laborum do adipisicing id enim
              pariatur id cupidatat cupidatat in Lorem sunt do fugiat. Excepteur
              tempor occaecat occaecat et ullamco cillum proident laboris nulla
              ad veniam consectetur incididunt dolore. Laborum id aute occaecat
              aliquip esse. Laborum fugiat commodo nostrud nisi do ut magna
              fugiat occaecat adipisicing officia.
            </p>
          </div>
        </div>

        <div className="skills" ref={skills}></div>
      </div>
    </div>
  )
}
