import React from 'react'

const Contact = () => (
  <section id="contact">
    <div className="top-relative">
      <h2>contact me</h2>
    </div>
    <div className="centered-absolute">
      <div className="icon-row">
        <div className="icon-container">
          <a href="mailto:zaindsu@gmail.com" target="_blank">
            <img className="icon" src="static/images/mail.png" />
          </a>
          <a href="mailto:zaindsu@gmail.com" className="overlap" target="_blank">
            <img className="icon-hover" src="static/images/mail-hover.png" />
          </a>
        </div>
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/izainmustafa" target="_blank">
            <img className="icon" src="static/images/linkedin.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/izainmustafa"
            className="overlap"
            target="_blank"
          >
            <img className="icon-hover" src="static/images/linkedin-hover.png" />
          </a>
        </div>
      </div>
      <div className="icon-row">
        <div className="icon-container">
          <a href="https://www.facebook.com/zmdhillo" target="_blank">
            <img className="icon" src="static/images/facebook.png" />
          </a>
          <a
            href="https://www.facebook.com/zmdhillo"
            className="overlap"
            target="_blank"
          >
            <img className="icon-hover" src="static/images/facebook-hover.png" />
          </a>
        </div>
        <div className="icon-container">
          <a href="https://github.com/zainmustafa" target="_blank">
            <img className="icon" src="static/images/github.png" />
          </a>
          <a
            href="https://github.com/zainmustafa"
            className="overlap"
            target="_blank"
          >
            <img className="icon-hover" src="static/images/github-hover.png" />
          </a>
        </div>
      </div>
    </div>
    <div className="bottom-absolute">
      <p className="copyright">&copy; Zain Mustafa 2018</p>
    </div>
  </section>
)

export default Contact
