import resume from '../documents/resume.pdf'
import profile from '../images/profile.jpg'
import scrollTo from '../utils/scrollTo'
import './Bio.scss'

export default function Bio({ bio, contact }) {
  return (
    <div className="bio" ref={bio}>
      <div className="bio__image-container">
        <img className="bio__image" src={profile} alt="Leo" />
      </div>

      <div className="bio__text">
        <h2 className="bio__heading">About me</h2>
        <p>
          Whether you need someone to develop entire applications solo or
          integrate seamlessly into a team, I’m your guy. I have eight years of
          serious full stack development experience under my belt and a
          significant professional background in many other areas. On a weekly
          basis I can switch between full stack web development, mobile app
          development, web design, UI/UX design, SEO, project and personnel
          management, website management and maintenance, quality assurance,
          information technology support, and general consulting.
        </p>
        <p>
          I'm passionate about applying technology and design to solve
          real-world problems and love to spend my time learning new skills and
          developing websites and mobile applications. I'm always looking to
          tackle new and intriguing technical challenges, so if you think I
          could be of help, don’t hesitate to{' '}
          <button className="bio__contact" onClick={scrollTo(contact)}>
            reach out
          </button>
          .
        </p>
        <div className="bio__resume-wrapper">
          <a
            className="bio__resume"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            See résumé
          </a>
        </div>
      </div>
    </div>
  )
}
