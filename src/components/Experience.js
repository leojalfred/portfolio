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
                  University of Minnesota
                  <br />
                  Twin Cities
                </h4>
                <h5 className="experience__h5">Student</h5>
              </div>
              <div className="experience__date">
                Sep 2018
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                Dec 2021
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                I've always loved learning and been interested in many things,
                so it was hard to choose my educational focus. I originally
                enrolled in the College of Liberal Arts before deciding to
                switch to the College of Science and Engineering, which allowed
                me to pursue a BS in computer science and minors in statistics
                and political science.
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
                I maintained a 3.9 GPA taking classing including Machine
                Learning Fundamentals, Applied Multivariate Methods, Algorithms
                and Data Structures, Regression and Correlated Data,
                Quantitative Political Analysis, and Artificial Intelligence II.
              </p>
            </div>
          </div>
        </div>

        <div className="experience__category experience__category--work">
          <h3 className="experience__heading">Work</h3>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__headings">
                <h4 className="experience__h4">Kipsu</h4>
                <h5 className="experience__h5">Senior Software Engineer</h5>
              </div>
              <div className="experience__date">
                Oct 2022
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                ⁠Present
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                My work at Kipsu has been a particular highlight in my career. I
                lead a fast-moving frontend team of four, setting technical
                direction, defining engineering standards, coordinating project
                details within my team and cross-functionally, providing
                technical guidance, and conducting in-depth code reviews. I’m
                most proud of my effort to modernize Kipsu’s frontend, using
                TypeScript, React, and Next.js to craft a maintainable codebase
                with developer experience in mind. One of the most common points
                of user feedback that we received with the legacy frontend was
                that the dashboard took too long to load, so we took care to
                optimize performance, so far managing to increase the core
                application’s speed over 10 fold.
              </p>
              <p>
                I’m known for my efficiency, thoughtfully collaborating with the
                product team to clarify requirements and solidify unknowns, and
                writing informative, concise technical designs prior to
                development to enable an expedited development process, which I
                particularly exemplified when creating Kipsu’s React Native SDK
                in half the estimated time. I put a lot of consideration into
                how to utilize design principles, design patterns, types, and
                organization to write code that’s easy to follow and fun to work
                with. When I see an opportunity for improvement, I take the
                initiative. As part of my work on the React Native SDK, I needed
                to utilize Kipsu’s JavaScript SDK, but I quickly realized that
                it was weakly typed and lacked support for crucial requests.
                Within a couple of days, I rewrote it from scratch to be simple,
                self-documenting, and support all necessary routes, and my
                colleagues who have worked on it since have thanked me for it.
              </p>
              <p>
                I’m also proud of the complex projects that I’ve led, notably
                including the automation of a core use case with natural
                language processing using Python, Elasticsearch, Docker, ECS,
                MySQL, and REST APIs. Data showed that this use case represented
                a significant portion of user interaction, and through its
                automation we improved end-user productivity by 20%.
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
                Oct 2022
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">Br8kthru</h4>
                <h5 className="experience__h5">Software Engineer</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                As a software engineer for Br8kthru, I provided the backbone of
                our clients' digital experiences. After taking over the
                responsibilities of my former manager I was able to increase the
                percentage of revenue from web development by 50% QoQ. As part
                of those responsibilities, I doubled my project load, defined
                technical guidelines, facilitated client communications, and
                managed and trained another member of our development team,
                working closely to ensure continuous improvement.
              </p>
              <p>
                I always aim to increase efficiency without sacrificing quality.
                To that end, I implemented numerous process reforms, including
                widespread Git usage, CSS and Sass guidelines, and design to
                developer handoff standardization, ultimately halving the time
                required to complete certain tasks. Through my work overhauling
                client websites, I doubled Core Web Vitals scores and reduced
                load times by up to 75%.
              </p>
              <p>
                Due to my diversified experience, I'm often able to combine
                skills to optimize tasks. Through combining my design and
                development skills, I was able to rapidly prototype and develop
                new features, removing the need for a handoff entirely. In one
                instance, for example, I created a demo in 30 minutes that a
                client quoted at 10 hours.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

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
                Mar 2022
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                Working with students from USC Law, I cofounded Hetchie, a
                company that aggregated and analyzed data to streamline the law
                school on-campus interview process. I managed the project since
                its creation, conceptualizing its NoSQL data architecture and
                the flow of information to prioritize its returned results.
              </p>
              <p className="experience__text">
                Throughout my work, I formulated novel web application designs,
                ensuring a quality user experience and a distinctive brand
                presence. I individually built its codebase from scratch,
                coordinating with the business team to bring abstract ideas to
                fruition and ensure the security of our platform. I handled the
                app's deployment and maintenance via Heroku, ensuring platform
                stability. Hetchie used MongoDB with Mongoose, Node.js with
                Express, React, and Sass as its core technology stack.
              </p>
            </div>
          </div>

          <span className="experience__line"></span>

          <div className="experience__group">
            <div className="experience__topline">
              <div className="experience__date">
                May 2020
                <br className="experience__break" /> –{' '}
                <br className="experience__break" />
                Aug 2020
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">Pixelsmith</h4>
                <h5 className="experience__h5">Full Stack Developer</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                I produced unique WordPress themes for major companies including
                Medtronic and Charles Schwab as an independent contractor for
                Pixelsmith, a local web development firm. I operated with
                autonomy but often interfaced with the project management team
                to translate client needs into robust, platform agnostic
                websites. I had a particular focus on modernizing and
                documenting legacy JavaScript and PHP codebases to ease future
                maintenance and reduce development costs.
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
                Apr 2020
              </div>
              <div className="experience__headings">
                <h4 className="experience__h4">Considdr</h4>
                <h5 className="experience__h5">Full Stack Developer</h5>
              </div>
            </div>

            <div className="experience__body">
              <hr className="experience__rule" />
              <p className="experience__text">
                I led the application's front end development using HTML, CSS,
                JavaScript for Considdr, an AI-powered search engine startup
                that distinguished itself by returning extracted information
                instead of links. Considdr was accepted into the 2019
                MassChallenge Boston program, where I was the youngest worker in
                the accelerator.
              </p>
              <p className="experience__text">
                I redeveloped Considdr's frontend from the ground up to ensure
                responsiveness and compatibility, managing to eliminate the need
                for a separate mobile codebase and reducing the size of the
                frontend repository by a third. I gained valuable UX experience
                through conducting user interviews and incorporating responses
                into future prototypes and fully-functional implementations. In
                addition to my frontend and UX work, I facilitated asynchronous
                big data processing using Ruby on Rails, Postgres,
                Elasticsearch, and Ajax, helping to generate over 3 million
                insights for major clients including a Big 4 consulting firm.
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
