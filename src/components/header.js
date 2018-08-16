import React from 'react'

const Header = () => (
  <nav id="fixed-nav-bar">
    <ul>
      <li>
        <a className="active link" href="#title">
          Start
        </a>
      </li>
      <li>
        <a className="link" href="#about" id="nav-about">
          About
        </a>
      </li>
      <li>
        <a className="link" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a href="resume.pdf" target="_blank">
          Resumé
        </a>
      </li>
      <li>
        <a className="link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
