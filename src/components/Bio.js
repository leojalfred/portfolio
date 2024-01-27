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
          Navigating the web should be seamless, not aggravating. As a dedicated
          full stack developer with a decade of experience, I specialize in
          creating beautiful products with intuitive interactions.
        </p>
        <p>
          From freelancing and web development competitions in my early years to
          my current role as a Senior Software Engineer on Kipsu’s frontend
          team, I've consistently crafted optimized, responsive, satisfying
          applications. I’ve worked independently, as a contractor, and spent
          time at agencies doing everything from mobile application development
          to design to data architecture, but I’ve found it most gratifying to
          work in-house at SaaS companies as a full stack developer. I love to
          solve complex problems from ideation through execution, with a focus
          on delivering exceptional user experiences.
        </p>
        <p>
          At Kipsu, I led my team to automate a core use case with AI, improving
          end user productivity by 20%. I work efficiently, developing Kipsu’s
          React Native SDK in half the estimated time and creating a demo for
          one of Br8kthru’s clients in just 5% of the quoted time.
        </p>
        <p>
          I'm always looking to tackle new and intriguing technical challenges.
          If you think I could be of help, please{' '}
          <button className="bio__contact" onClick={scrollTo(contact)}>
            reach out
          </button>{' '}
          for a deeper conversation.
        </p>
      </div>
    </div>
  )
}
