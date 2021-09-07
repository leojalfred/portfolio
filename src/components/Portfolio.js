import './Portfolio.scss'
import hetchie from '../images/portfolio/hetchie.png'
import comport from '../images/portfolio/comport.png'
import considdr from '../images/portfolio/considdr.png'
import stimrouter from '../images/portfolio/stimrouter.png'
import schwab from '../images/portfolio/schwab.png'
import polywater from '../images/portfolio/polywater.png'

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
      alt: 'Considdr',
      className: 'considdr',
      image: considdr,
      link: 'https://medium.com/considdr-history',
    },
    {
      alt: 'Stimrouter',
      className: 'stimrouter',
      image: stimrouter,
      link: 'https://stimrouter.com/',
    },
    {
      alt: 'Schwab Impact 2020',
      className: 'schwab',
      image: schwab,
      link: 'https://impact.schwab.com/',
    },
    {
      alt: 'Polywater',
      className: 'polywater',
      image: polywater,
      link: 'https://www.polywater.com/',
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
