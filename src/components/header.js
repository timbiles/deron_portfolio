import React from 'react'
import Link from 'gatsby-link'

import './header.css'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className="header_container">
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

        <Link className="header_link" to="/sermons">
          Sermons
        </Link>
      </div>
    </div>
    <div className='header_sub'>
        <p>Dean & Professor Southwestern Baptist Theological Seminary</p>
        <p>Author of After God's Heart: Becoming the Man God Is Seeking </p>
    </div>
  </div>
)

export default Header
