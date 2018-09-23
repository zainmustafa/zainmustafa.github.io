import React, { Component } from 'react'
import { About, Contact, Main, Project } from '../components'


class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.about = React.createRef();
    this.main = React.createRef();
  }
  componentDidMount() {
    setTimeout(()=>{
        this.main.scrollIntoView();
    },1);
  }

  render() {
    return (
      <div style={{scrollBehavior:"smooth"}}>
        <Contact />
          <Project />
        <div ref={re => {this.about = re;}} >
          <About />
        </div>
        <div ref={re => {this.main = re}} >
            <Main />
        </div>
      </div>
    )
  }
}

export default IndexPage
