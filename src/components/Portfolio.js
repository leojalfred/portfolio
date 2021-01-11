import './Portfolio.scss'
import considdr from '../images/portfolio/considdr.png'
import hetchie from '../images/portfolio/hetchie.png'
import polywater from '../images/portfolio/polywater.png'
import robland from '../images/portfolio/robland.png'
import schwab from '../images/portfolio/schwab.png'
import stimrouter from '../images/portfolio/stimrouter.png'

export default function Portfolio({ reference }) {
  const itemObjects = [
    {
      alt: 'Considdr',
      className: 'considdr',
      image: considdr,
    },
    {
      alt: 'Hetchie',
      className: 'hetchie',
      image: hetchie,
      link: 'https://www.hetchie.com/',
    },
    {
      alt: 'Polywater',
      className: 'polywater',
      image: polywater,
    },
    {
      alt: 'Robland Home Healthcare',
      image: robland,
      className: 'robland',
      link: 'https://www.roblandhomehealth.com/',
    },
    {
      alt: 'Schwab Impact 2020',
      className: 'schwab',
      image: schwab,
      link: 'https://impact.schwab.com/',
    },
    {
      alt: 'Stimrouter',
      className: 'stimrouter',
      image: stimrouter,
      link: 'https://stimrouter.com/',
    },
  ]
  const items = itemObjects.map(({ alt, className, image, link }, i) =>
    link ? (
      <a
        className={`portfolio__item portfolio__item--${className}`}
        href={link}
        target="_blank"
        rel="noreferrer"
        key={i}
      >
        <img className="portfolio__image" src={image} alt={alt} />
      </a>
    ) : (
      <div className={`portfolio__item portfolio__item--${className}`} key={i}>
        <img className="portfolio__image" src={image} alt={alt} />
      </div>
    )
  )

  return (
    <div ref={reference}>
      <h2 className="portfolio__heading">Selected portfolio</h2>
      <div className="portfolio">{items}</div>
    </div>
  )
}
