import './Experience.scss'

export default function Experience({ reference }) {
  return (
    <div className="experience" ref={reference}>
      <h2 className="experience__heading">Experience</h2>
      <div className="experience__categories">
        <div className="experience__category experience__category--education">
          <h3 className="experience__heading">Education</h3>
          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__headings">
                <h4 className="experience__h4">
                  University of Minnesota Twin Cities
                </h4>
                <h5 className="experience__h5">Student</h5>
              </div>
              <div className="experience__date">
                Sep 2018
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                ⁠Present
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                I've always had a lot of interests, so it was hard to choose my
                educational focus. I originally enrolled in the College of
                Liberal Arts before deciding to switch to the College of Science
                and Engineering, which allowed me to pursue a BS in computer
                science and minors in statistics and political science.
              </p>
              <p className="experience__text">
                I'm fascinated in the intersection of all of those fields, and
                I've long been intrigued by political modeling and election
                forecasting. In sophomore year, I was recognized for my work
                applying quantitative analysis to explore the relationship
                between socioeconomic status and age of entering parenthood with
                a nomination for the William Jennings Bryan Prize.
              </p>
              <p className="experience__text">
                I maintain a 3.934 cumulative GPA with a 3.904 computer science
                major GPA. Notable recent classes include Machine Learning
                Fundamentals, Applied Multivariate Methods, Algorithms and Data
                Structures, Regression and Correlated Data, Quantitative
                Political Analysis, and Artificial Intelligence II.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__date">
                Sep 2014
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                Jan 2018
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">Mayo High School</h4>
                <h5 className="experience__h5">Student</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                Throughout my high school experience, I always loved to
                challenge myself with difficult classes, while still pursuing my
                personal interests to the best of my ability. I graduated in the
                top 4% of my class, maintaining a 4.76 weighted GPA and a 4.0
                unweighted GPA. Some of my favorite classes included AP Physics
                2, Multivariable and Vector Calculus Honors, AP United States
                Government and Politics, Humanities: Search Honors, and Spanish
                4 Honors.
              </p>
            </div>
          </div>
        </div>

        <div className="experience__category experience__category--work">
          <h3 className="experience__heading">Work</h3>
          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__headings">
                <h4 className="experience__h4">Hetchie</h4>
                <h5 className="experience__h5">Chief Technology Officer</h5>
              </div>
              <div className="experience__date">
                May 2020
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                ⁠Present
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                I recently cofounded Hetchie, a company that extracts insights
                from data to streamline law school on-campus interview
                processes. I've managed the project since its creation,
                conceptualizing its NoSQL data architecture and the flow of
                information to prioritize the results it returns.
              </p>
              <p className="experience__text">
                Throughout my work, I've formulated novel web application
                designs, ensuring a quality user experience and a distinctive
                brand presence. I've built its entire codebase from scratch,
                coordinating with our business team to bring abstract ideas to
                fruition and ensure the security of our platform. Furthermore, I
                handle the app's deployment and maintenance via Heroku,
                guaranteeing code integrity and platform stability. Hetchie uses
                MongoDB with Mongoose, Node.js with Express, and React with Sass
                as its core technology stack.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__date">
                Jun 2021
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                Present
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">Br8kthru</h4>
                <h5 className="experience__h5">Web Development Intern</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                In my final college internship I work as a web development
                intern for Br8kthru, a digital marketing firm recently named the
                best in Minneapolis by Twin Cities Business. I serve as a jack
                of all trades, modernizing legacy codebases, improving
                performance metrics, creating unique designs, and implementing
                new features for a variety of clients. Through my work for
                Comport, for example, I conceptualized and developed a number of
                new components and managed to reduce load times by 43% as I
                streamlined their outdated code. My work generally involves
                designing solutions as part of team before implementing them
                through a combination of HTML, CSS, JavaScript, and PHP.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__headings">
                <h4 className="experience__h4">Pixelsmith</h4>
                <h5 className="experience__h5">Full Stack Developer</h5>
              </div>
              <div className="experience__date">
                May 2020
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                Aug 2020
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                After my sophomore year, I worked as an independent contractor
                producing unique WordPress themes for major companies through
                Pixelsmith, a local web development firm. Although I operated
                with some autonomy, I often interfaced with the project
                management team to translate client needs into robust, platform
                agnostic websites. The rest of my job consisted of modernizing
                and documenting legacy JavaScript and PHP codebases to ease
                future maintenance and reduce development costs.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__date">
                Jun 2019
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                ⁠Mar 2020
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">Considdr</h4>
                <h5 className="experience__h5">Full Stack Developer</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                For my summer break after freshman year, I interned as a
                software engineer for Considdr, an AI-powered search engine
                startup that returned extracted information instead of links.
                Considdr was accepted into the 2019 MassChallenge Boston
                program, where I was the youngest worker in the accelerator.
              </p>
              <p className="experience__text">
                In my time as an intern, and later as a full stack developer, I
                led the application's front end development using HTML, CSS, and
                JavaScript. My principal achievement was the redevelopment of
                the entirety of the main site's markup and styling, producing a
                responsive, cross-platform layout. I also picked up valuable
                user experience skills through conducting user interviews and
                incorporating responses into future prototypes and
                fully-functional implementations. Much of the rest of my work
                included facilitating asynchronous big data processing through
                Ruby on Rails, Postgres, Elasticsearch, and Ajax.
              </p>
            </div>
          </div>
        </div>

        <div className="experience__category experience__category--volunteer">
          <h3 className="experience__heading">Volunteering</h3>
          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__headings">
                <h4 className="experience__h4">Rich Wright for Congress</h4>
                <h5 className="experience__h5">Volunteer</h5>
              </div>
              <div className="experience__date">
                Feb 2018
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                Apr 2018
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                Eager to apply my web development skills to the political world,
                I volunteered to design the campaign's web presence, organize
                content, and direct social media integration to promote Rich
                Wright's bid to represent Minnesota's 1st congressional
                district. My work was largely comprised of customizing WordPress
                themes, font pairings, and page layouts to increase voter
                engagement.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__date">
                Nov 2016
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                May 2018
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">
                  Black Data Processing Associates Southern MN
                </h4>
                <h5 className="experience__h5">Student Teacher</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                Much of my initial design, web development, and project
                management training came from my time as a student at BDPA SMN,
                where I participated in weekly classes and annual national
                competitions. Looking to give back in my later high school
                years, I volunteered as a student teacher, composing curriculum
                for and teaching web development technologies to classes of up
                to 50 students. Apart from lectures, I mentored students
                individually to solidify their subject matter comprehension and
                increase knowledge retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
