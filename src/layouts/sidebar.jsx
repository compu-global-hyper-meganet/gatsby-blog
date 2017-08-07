import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './sidebar.scss'

const Sidebar = ({ title, intro }) => (
  <aside className="sidebar">
    <header>
      <h1>{title}</h1>
      <h2>{intro}</h2>
      <Link className="button primary-button" to="/read">READ MY MIND</Link>
      <Link className="button secondary-button" to="/shout">SHOUT AT ME</Link>      
    </header>
  </aside>
)

export default Sidebar