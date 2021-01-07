import './Portfolio.scss'

export default function Portfolio({ reference }) {
  return (
    <>
      <h2 className="portfolio__heading">Portfolio</h2>
      <div className="portfolio" ref={reference}></div>
    </>
  )
}
