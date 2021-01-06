import './Bio.scss'
import leo from '../images/leo.jpg'

export default function Bio({ reference }) {
  return (
    <div className="bio" ref={reference}>
      <div className="bio__image-container">
        <img className="bio__image" src={leo} alt="Leo" />
      </div>

      <div className="bio__text">
        <h2>About me</h2>
        <p className="bio__paragraph">
          Anim sint nisi consectetur minim incididunt duis laboris consectetur
          consectetur ad ut proident sunt. Dolore officia commodo irure magna
          veniam eu aute. Nulla duis cupidatat consequat ea voluptate officia
          sint proident. Laborum do adipisicing id enim pariatur id cupidatat
          cupidatat in Lorem sunt do fugiat. Excepteur tempor occaecat occaecat
          et ullamco cillum proident laboris nulla ad veniam consectetur
          incididunt dolore. Laborum id aute occaecat aliquip esse. Laborum
          fugiat commodo nostrud nisi do ut magna fugiat occaecat adipisicing
          officia.
        </p>
        <p className="bio__paragraph">
          Anim sint nisi consectetur minim incididunt duis laboris consectetur
          consectetur ad ut proident sunt. Dolore officia commodo irure magna
          veniam eu aute. Nulla duis cupidatat consequat ea voluptate officia
          sint proident. Laborum do adipisicing id enim pariatur id cupidatat
          cupidatat in Lorem sunt do fugiat. Excepteur tempor occaecat occaecat
          et ullamco cillum proident laboris nulla ad veniam consectetur
          incididunt dolore. Laborum id aute occaecat aliquip esse. Laborum
          fugiat commodo nostrud nisi do ut magna fugiat occaecat adipisicing
          officia.
        </p>
        <p className="bio__paragraph">
          Anim sint nisi consectetur minim incididunt duis laboris consectetur
          consectetur ad ut proident sunt. Dolore officia commodo irure magna
          veniam eu aute. Nulla duis cupidatat consequat ea voluptate officia
          sint proident. Laborum do adipisicing id enim pariatur id cupidatat
          cupidatat in Lorem sunt do fugiat. Excepteur tempor occaecat occaecat
          et ullamco cillum proident laboris nulla ad veniam consectetur
          incididunt dolore. Laborum id aute occaecat aliquip esse. Laborum
          fugiat commodo nostrud nisi do ut magna fugiat occaecat adipisicing
          officia.
        </p>
      </div>
    </div>
  )
}
