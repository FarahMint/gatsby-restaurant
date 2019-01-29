import React from 'react'
import PropTypes from 'prop-types'

import { createGlobalStyle } from 'styled-components'
// import { StaticQuery, graphql } from 'gatsby'

import Navbar from './globals/navbar'
// import Header from './header'

// import './layout.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family:'Open Sans', sans-serif;
  color:  #f15025;
  background:#fff;
}

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
