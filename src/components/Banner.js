import './Banner.scss'

export default function Banner() {
  const logos = [
    'invision',
    'mongodb',
    'rails',
    'redux',
    'mysql',
    'php',
    'css3',
    'git',
    'html5',
    'java',
    'jquery',
    'nodejs',
    'python',
    'react',
    'ruby',
    'sass',
  ]
  const squares = logos.map((logo, i) => {
    return (
      <div className="banner__square" key={i}>
        <i className={`fi fi-${logo}`}></i>
      </div>
    )
  })

  return (
    <div className="banner">
      <div className="banner__text">
        <h1 className="banner__heading">Hey, I'm Leo.</h1>
        <h1 className="banner__heading">I create things.</h1>
      </div>

      <div className="banner__tech">{squares}</div>
    </div>
  )
}
