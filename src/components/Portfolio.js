import './Portfolio.scss'
import hetchie from '../images/portfolio/hetchie.png'
import comport from '../images/portfolio/comport.png'
import stimrouter from '../images/portfolio/stimrouter.png'
import considdr from '../images/portfolio/considdr.png'
import polywater from '../images/portfolio/polywater.png'
import schwab from '../images/portfolio/schwab.png'
import robland from '../images/portfolio/robland.png'

export default function Portfolio({ reference }) {
  const itemObjects = [
    {
      alt: 'Hetchie',
      className: 'hetchie',
      image: hetchie,
      link: 'https://www.hetchie.com/',
    },
    {
      alt: 'Comport',
      className: 'comport',
      image: comport,
      link: 'https://comport.com/',
    },
    {
      alt: 'Stimrouter',
      className: 'stimrouter',
      image: stimrouter,
      link: 'https://stimrouter.com/',
    },
    {
      alt: 'Considdr',
      className: 'considdr',
      image: considdr,
      link: 'https://medium.com/considdr-history',
    },
    {
      alt: 'Polywater',
      className: 'polywater',
      image: polywater,
      link: 'https://www.polywater.com/',
    },
    {
      alt: 'Schwab Impact 2020',
      className: 'schwab',
      image: schwab,
      link: 'https://impact.schwab.com/',
    },
    {
      alt: 'Robland Home Healthcare',
      image: robland,
      className: 'robland',
      link: 'https://www.roblandhomehealth.com/',
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
