import './Contact.scss'

export default function Contact({ reference }) {
  return (
    <div className="contact" ref={reference}>
      <h2>Contact me</h2>
      <div className="contact__contacts">
        <span className="contact__line">
          <i className="contact__icon contact__icon--email fi fi-email"></i>
          <a className="contact__link" href="mailto:leojalfred@gmail.com">
            leojalfred@gmail.com
          </a>
        </span>
        <span className="contact__line">
          <i className="contact__icon contact__icon--phone fi fi-phone"></i>
          <a className="contact__link" href="tel:507-316-3003">
            (507) 316-3003
          </a>
        </span>
      </div>
      <hr className="contact__break" />
      <p className="contact__by">
        <small>Designed and developed in a few days by Leo Alfred.</small>
      </p>
    </div>
  )
}
