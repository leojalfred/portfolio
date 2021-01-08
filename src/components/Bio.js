import './Bio.scss'
import leo from '../images/leo.jpg'
import resume from '../documents/resume.pdf'

export default function Bio({ reference }) {
  return (
    <div className="bio" ref={reference}>
      <div className="bio__image-container">
        <img className="bio__image" src={leo} alt="Leo" />
      </div>

      <div className="bio__text">
        <h2>About me</h2>
        <p>
          I’m currently a junior at the University of Minnesota, Twin Cities,
          where I maintain a 3.92 GPA pursuing a dual degree with a BS in
          computer science and a BA in political science and statistics.
        </p>
        <p>
          I'm passionate about applying technology and quantitative analysis to
          solve real-world problems. When I'm not in class, I spend my time
          researching algorithmic trading strategies and working on web
          applications. I recently cofounded{' '}
          <a href="https://www.hetchie.com/" target="_blank" rel="noreferrer">
            Hetchie Co.
          </a>{' '}
          alongside USC Law students, a platform that analyzes data to
          streamline the law school on-campus interview process. I keep busy
          handling its overall management, data architecture, design,
          development, deployment, maintenance, and everything else related to
          its technological implementation.
        </p>
        <p>
          Whether you need someone to develop entire applications solo or
          integrate seamlessly into a team, with 7 years of series development
          experience under my belt, I'm your guy. I'm proficient in full-stack
          development, quantitative analysis, user experience and user interface
          design, web design, and project management. I have practice with many
          languages you likely work with, and I’m a fast learner when it comes
          to new technologies.
        </p>
        <p>
          I'm always looking to tackle new and intriguing technical challenges.
          Please check out my background below, and if you think I could be of
          help, feel free to reach out.
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
