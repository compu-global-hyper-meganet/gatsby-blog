import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import './sass/sidebar.scss'

const Sidebar = ({ title, intro }) => (
  <aside className="sidebar">
    <header>
      <h1>doug<wbr/>mcdonald<wbr/>.co.uk</h1>
      <h2>{intro}</h2>
      <Link className="button primary-button" to="/">READ MY MIND</Link>
      <wbr/>
      <Link className="button secondary-button" to="/shout">SHOUT AT ME</Link>
    </header>
  </aside>
)

export default Sidebar