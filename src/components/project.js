import React from 'react'

const Projects = () => (
  <section id="projects">
    <div className="top-relative">
      <h2>projects</h2>
    </div>
    <ul className="project-items div-max-width">
      <li className="project">
        <figure>
          <div className="view">
            <img src="static/images/freshair.jpg" />
          </div>
          <figcaption>
            <p>TensorFlow, React, Node.js</p>
            <p>
              <a href="http://freshairsensor.com/" target="_blank">
                Site
              </a>
              <a
                href="https://www.cnet.com/reviews/freshair-sensor-airguard-preview/"
                target="_blank"
              >
                CNET Post
              </a>&nbsp;&nbsp;
            </p>
          </figcaption>
        </figure>
        <div className="project-title">FreshAir Sensor</div>
      </li>
      <li className="project">
        <figure>
          <div className="view">
            <img src="static/images/petreon.png" />
          </div>
          <figcaption>
            <p>jQuery, Python, AWS Lambda, Amazon RDS</p>
            <p>
              <a
                href="https://github.com/zainmustafa/treehacks-2017"
                target="_blank"
              >
                Github
              </a>&nbsp;&nbsp;
              <a href="http://freshairsensor.com/" target="_blank">
                Site
              </a>
            </p>
          </figcaption>
        </figure>
        <div className="project-title">Petreon</div>
      </li>
      <li className="project">
        <figure>
          <div className="view">
            <img src="static/images/minimalist.png" />
          </div>
          <figcaption>
            <p>Java, XML, SQLite</p>
            <p>
              <a
                href="https://github.com/zainmustafa/minimaList"
                target="_blank"
              >
                Github
              </a>
            </p>
          </figcaption>
        </figure>
        <div className="project-title">MinimaList</div>
      </li>
      <li className="project">
        <figure>
          <div className="view">
            <img src="static/images/dreampainter.png" />
          </div>
          <figcaption>
            <p>C#, Unity, Python</p>
            <p>
              <a
                href="https://github.com/lawrencecheng123/DreamPainter-VR"
                target="_blank"
              >
                Github
              </a>&nbsp;&nbsp;
              <a
                href="https://devpost.com/software/dreampainter"
                target="_blank"
              >
                Devpost
              </a>
            </p>
          </figcaption>
        </figure>
        <div className="project-title">DreamPainter</div>
      </li>
      <li className="project">
        <figure>
          <div className="view">
            <img src="static/images/simple-weather.png" />
          </div>
          <figcaption>
            <p>Java, XML</p>
            <p>
              <a
                href="https://github.com/zainmustafa/simple-weather-app"
                target="_blank"
              >
                Github
              </a>
            </p>
          </figcaption>
        </figure>
        <div className="project-title">Simple Weather</div>
      </li>
    </ul>
  </section>
)

export default Projects
