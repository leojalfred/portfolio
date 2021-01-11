import './Experience.scss'

export default function Experience({ reference }) {
  return (
    <div className="experience" ref={reference}>
      <h2 className="experience__heading">Experience</h2>
      <div className="experience__categories">
        <div className="experience__category experience__category--education">
          <h3 className="experience__heading">Education</h3>
          <div className="experience__group">
            <h4 className="experience__subheading">
              University of Minnesota Twin Cities
            </h4>
            <h4 className="experience__subheading">Sep 2018–⁠Present</h4>
            <p className="experience__body">
              I've always had a lot of interests, so it was hard to choose my
              educational focus. After a lot of thought and some maneuvering, I
              decided to enroll in the College of Science and Engineering in
              addition to the College of Liberal Arts, allowing me to pursue a
              BS in computer science and BA with a major in political science
              and a minor in statistics.
            </p>
            <p className="experience__body">
              My main fascination lies in the intersection of all of those
              fields, and I've long been intrigued by political modeling and
              election forecasting. Last year, I was recognized for my work
              applying quantitative analysis to explore the relationship between
              socioeconomic status and age of entering parenthood with a
              nomination for the William Jennings Bryan Prize.
            </p>
            <p className="experience__body">
              I maintain a 3.92 cumulative GPA, with a 3.881 and a 3.923 in
              computer science and political science respectively. Notable
              recent classes include Machine Learning Fundamentals, Applied
              Multivariate Methods, Algorithms and Data Structures, Regression
              and Correlated Data, Quantitative Political Analysis, and Advanced
              Programming Principles.
            </p>
          </div>
          <span className="experience__line"></span>
          <div className="experience__group">
            <h4 className="experience__subheading">Mayo High School</h4>
            <h4 className="experience__subheading">Sep 2014–Jan 2018</h4>
            <p className="experience__body">
              Throughout my high school experience, I always loved to challenge
              myself with difficult classes, while still pursuing my personal
              interests to the best of my ability. I graduated in the top 4% of
              my class, maintaining a 4.76 weighted GPA and a 4.0 unweighted
              GPA. Some of my favorite classes included AP Physics 2,
              Multivariable and Vector Calculus Honors, AP United States
              Government and Politics, Humanities: Search Honors, and Spanish 4
              Honors.
            </p>
          </div>
        </div>
        <div className="experience__category experience__category--work">
          <h3 className="experience__heading">Work</h3>
          <div className="experience__group">
            <h4 className="experience__subheading">Hetchie</h4>
            <h4 className="experience__subheading">May 2020–⁠Present</h4>
            <p className="experience__body">
              I recently cofounded Hetchie, a company that extracts insights
              from data to streamline law school on-campus interview processes.
              I've managed the project since its creation, conceptualizing its
              NoSQL data architecture and the flow of information to prioritize
              the results it returns.
            </p>
            <p className="experience__body">
              Throughout my work, I've formulated novel web application designs,
              ensuring a quality user experience and a distinctive brand
              presence. I've built its entire codebase from scratch,
              coordinating with our business team to bring abstract ideas to
              fruition and ensure the security of our platform. Furthermore, I
              handle the app's deployment and maintenance via Heroku,
              guaranteeing code integrity and platform stability. Hetchie uses
              MongoDB with Mongoose, Node.js with Express, and React with Sass
              as its core technology stack.
            </p>
          </div>
          <span className="experience__line"></span>
          <div className="experience__group">
            <h4 className="experience__subheading">Pixelsmith</h4>
            <h4 className="experience__subheading">May 2020–Aug 2020</h4>
            <p className="experience__body">
              After my sophomore year, I worked as an independent contractor
              producing unique WordPress themes for major companies including
              Medtronic and Charles Schwab through Pixelsmith, a local web
              development firm. Although I operated with some autonomy, I often
              interfaced with the project management team to translate client
              needs into robust, platform agnostic websites. The rest of my job
              consisted of modernizing and documenting legacy JavaScript and PHP
              codebases to ease future maintenance and reduce development costs.
            </p>
          </div>
          <span className="experience__line"></span>
          <div className="experience__group">
            <h4 className="experience__subheading">Considdr</h4>
            <h4 className="experience__subheading">Jun 2019–⁠Mar 2020</h4>
            <p className="experience__body">
              For my summer break after freshman year, I interned as a software
              engineer for Considdr, an AI-powered search engine startup that
              returned extracted information instead of links. Considdr was
              accepted into the 2019 MassChallenge Boston program, where I was
              the youngest worker in the accelerator.
            </p>
            <p className="experience__body">
              In my time as an intern, and later as a full stack developer, I
              led the application's front end development using HTML, CSS, and
              JavaScript. My principal acheivement was the redevelopment of the
              entirety of the main site's markup and styling, producing a
              responsive, cross-platform layout. I also picked up valuable user
              experience skills through conducting user interviews and
              incorporating responses into future prototypes and
              fully-functional implementations. Much of the rest of my work
              included facilitating asynchronous big data processing through
              Ruby on Rails, Postgres, Elasticsearch, and Ajax.
            </p>
          </div>
        </div>
        <div className="experience__category experience__category--volunteer">
          <h3 className="experience__heading">Volunteer</h3>
          <div className="experience__group">
            <h4 className="experience__subheading">Rich Wright for Congress</h4>
            <h4 className="experience__subheading">Feb 2018–⁠Apr 2018</h4>
            <p className="experience__body">
              Eager to apply my web development skills to the political world, I
              volunteered to design the campaign's web presence, organize
              content, and direct social media integration to promote Rich
              Wright's bid to represent Minnesota's 1st congressional district.
              My work was largely comprised of customizing WordPress themes,
              font pairings, and page layouts to increase voter engagement.
            </p>
          </div>
          <span className="experience__line"></span>
          <div className="experience__group">
            <h4 className="experience__subheading">
              Black Data Processing Associates Southern Minnesota
            </h4>
            <h4 className="experience__subheading">Nov 2016–⁠May 2018</h4>
            <p className="experience__body">
              Much of my initial design, web development, and project management
              training came from my time as a student at BDPA SMN, where I
              participated in weekly classes and annual national competitions.
              Looking to give back in my later high school years, I volunteered
              as a student teacher, composing curriculum for and teaching web
              development technologies to classes of up to 50 students. Apart
              from lectures, I mentored students individually to solidify their
              subject matter comprehension and increase knowledge retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
