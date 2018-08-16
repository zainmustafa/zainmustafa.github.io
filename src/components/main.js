import React from 'react'

const Main = () => (
    <section id="title" className="page">
        <div className="top-absolute" id="title-arrow">
            <a href="#about">
                <img src="static/images/up-arrow.png" width="50px" height="25px" />
            </a>
        </div>
        <div className="centered-absolute">
            <div className="title-box">
                <h1>Zain Mustafa</h1>
                <h3 className="border-text" id="title-desc">developer &middot; entrepreneur &middot; innovator</h3>
            </div>
        </div>
    </section>
)

export default Main
