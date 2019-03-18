import React from 'react'

const About = () => (
  <section id="about">
    <div className="top-relative">
      <h2>about me</h2>
    </div>
    <div className="div-max-width">
      <img
        className="border-img"
        src="static/images/portrait.png"
        width="200px"
      />
    </div>
    <div className="div-max-width">
      <p className="block-text">
        Software Developer born and raised in Karachi. Completed my Bachelors in
        Computer Science from DHA Suffa University. Computer Science and Graphic
        Designing are two of my passions which I utilize and enhance upon daily
        by using a combination of both in my projects.
      </p>
      <p className="block-text">
        I'm proficient in JavaScript with greater than 4 years of professional
        experience in developing high performance web applications and services.
        My skill set includes, but is not limited to, ReactJS, GraphQL, React
        Native, Bootstrap, Redux, RxJS, NodeJS, ExpressJS, AngularJS, MySQL,
        MongoDB, Postgres, Firebase, Test Driven Development, AWS Web Services
        and Product Design.
      </p>
      <p className="block-text">
        Non-fiction books and Netflix are a major part of my leisure time.{' '}
      </p>
    </div>
  </section>
)

export default About
