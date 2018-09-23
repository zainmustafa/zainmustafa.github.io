import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../components'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Zain Mustafa"
      meta={[
        { name: 'description', content: 'Zain Mustafa Portfolio build with Gatsby, React and love <3' },
        { name: 'keywords', content: 'Gatsby, React' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
