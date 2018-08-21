import React from 'react'
import Link from 'gatsby-link'

import './header.css'

console.log(window.location)
const Header = ({ siteTitle }) => (
  <div>
    {window.location.pathname === '/' ? (
      <div
        className="header_container"
        style={{ backgroundColor: 'transparent' }}
      >
        <div className="header_main">
          <Link className="header_link" to="/">
            <h1>Deron Biles</h1>
          </Link>
        </div>
        <div className="header_right">
          <Link className="header_link" to="/">
            Home
          </Link>

          <Link className="header_link" to="/about">
            About
          </Link>

          <Link className="header_link" to="/portfolio">
            Portfolio
          </Link>

          <Link className="header_link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    ) : (
      <div
        className="header_container"
        style={{
          backgroundColor: '#1B1A1B',
          position: 'fixed',
          width: '100%'
        }}
      >
        <div className="header_main">
          <Link className="header_link" to="/">
            <h1>Deron Biles</h1>
          </Link>
        </div>
        <div className="header_right">
          <Link className="header_link" to="/">
            Home
          </Link>

          <Link className="header_link" to="/about">
            About
          </Link>

          <Link className="header_link" to="/portfolio">
            Portfolio
          </Link>

          <Link className="header_link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    )}
  </div>
)

export default Header
