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
      <p className="block-text">
        Hi, I'm Zain Mustafa, software developer born and raised in Karachi. Did
        my BS Computer Science from DHA Suffa University. Computer science and
        design are two of my greatest passions, and I love channeling my
        enthusiasm for both through personal projects. I love to learn new
        things and am always eager to accept constructive criticism and new
        ideas.
      </p>
      <p className="block-text">
        I'm proficient in JavaScipt with 3+ years of experience in developing
        high performance web applications and services. My skill set include,
        but not limited to, ReactJS, React Native, Javascript, HTML, CSS,
        Bootstrap, Redux, RxJS, NodeJS, ExpressJS, AngularJS, MySQL, MongoDB,
        Postgres, Firebase, Test Driven Development, AWS Web Services and
        Product Design.
      </p>
      <p className="block-text">
        Aside from programming, I love reading non fiction and watching seasons.
        Athletics-wise, I love playing cricket and floating on water{' '}
      </p>
    </div>
  </section>
)

export default About
