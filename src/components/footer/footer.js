import React from 'react'
import Link from 'gatsby-link'

import Olive from './olive-branch.svg';
import './footer.css'

const Footer = ({ siteTitle }) => (
  <div className="footer">
    <div className="footer_container">
      <p>© Olive Branch Designs</p>
      <img
        className="olive"
        src={Olive}
        alt=""
      />
    </div>
  </div>
)

export default Footer
