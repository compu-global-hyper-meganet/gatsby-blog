import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { SocialIcons } from 'react-social-icons';

import './sass/sidebar.scss';
import DougHead from './../images/DougHead.fw.png';

const urls = [
  'https://twitter.com/dougajmcdonald',
  'https://github.com/dougajmcdonald/'
];

const Sidebar = ({ title, intro }) => (
  <aside className="sidebar">
    <header>
      <h1>doug<wbr/>mcdonald<wbr/>.co.uk</h1>
      <h2>{intro}</h2>
      <div className="facehugger">
        <img src={DougHead} className="face" alt="My face" />
      </div>
      <Link className="button primary-button" to="/">READ MY MIND</Link>
      <wbr/>
      <Link className="button secondary-button" to="/shout">SHOUT AT ME</Link>
      <SocialIcons urls={urls} color="rgba(255, 255, 255, 0.8)" />
    </header>
  </aside>
)

export default Sidebar;