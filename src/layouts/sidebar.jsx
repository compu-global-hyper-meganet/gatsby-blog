import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './sidebar.scss'

const Sidebar = ({ title, intro }) => (
  <aside className="sidebar">
    <header>
      <h1>{title}</h1>
      <h2>{intro}</h2>
      <button className="primary-button">READ MY MIND</button>
      <button className="secondary-button">SHOUT AT ME</button>
    </header>
  </aside>
)

export default Sidebar