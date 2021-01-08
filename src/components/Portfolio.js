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
      link: 'https://medium.com/considdr-history',
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
      link: 'https://www.polywater.com/',
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
  const items = itemObjects.map(({ alt, className, image, link }, i) => {
    return (
      <a
        className={`portfolio__item portfolio__item--${className}`}
        href={link}
        target="_blank"
        rel="noreferrer"
        key={i}
      >
        <img className="portfolio__image" src={image} alt={alt} />
      </a>
    )
  })

  return (
    <>
      <h2 className="portfolio__heading">Selected Portfolio</h2>
      <div className="portfolio" ref={reference}>
        {items}
      </div>
    </>
  )
}
