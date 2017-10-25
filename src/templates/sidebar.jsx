import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { SocialIcons } from 'react-social-icons';
import { css } from 'emotion';
import colours from '../colours';

import DougHead from './../images/DougHead.fw.png';

const sidebarStyles = css`

    color: #fff;
    background-color: ${colours.grey};
    display: inline-block;
    width: 100%;

    h1 {
      font-family: 'Aleo';
      color: #fff;
      font-size: 2em;
      margin: 0;
      letter-spacing: 0.1em;
    }

    h2 {
      margin: 1em 0 3em 0;
      font-size: 1.2em;
      color: ${colours.grey_blue};
      font-weight: normal;
      font-family: 'Open Sans';
      text-transform: uppercase;
    }

    .face {
      width: 100px;
      height: 100px;
      display: inline-block;
    }

    .social-icon {
      margin: 0.5em;
    }

    // Full size

  @media (min-width: 60em) {

      position: fixed;
      width: 25%;
      top: 0;
      bottom: 0;
      left: 0;

      h1 {
        padding-bottom: 0.2em;
      }
  }
`;

const headerStyles = css`

  text-align: center;
  top: auto;
  margin: 3em auto;

  h2 {
    margin-bottom: 1em;
  }

  @media (min-width: 60em) {

    margin: 50% 2em 0;
    text-align: right;

    h2 {
      margin-bottom: 3em;
    }
  }
`;

const facehuggerStyles = css`
  margin-bottom: 0;

  @media (min-width: 60em) {
    margin-bottom: 2em;
  }
`;

const buttonStyles = css`
  border: 2px solid #fff;
  color: ${colours.grey_blue};
  padding: 1.1em 1em 1em 1em;
  margin: 1em 0 1em 1em;
  font-size: 0.7em;
  background: transparent;
  border-radius: 2px;
  text-decoration: none;
  display: inline-block;
  font-family: 'League Spartan';

  &:hover {
    cursor: pointer;
    background: #fff;
  }
`;

const urls = [
  'https://twitter.com/dougajmcdonald',
  'https://github.com/dougajmcdonald/'
];

const Sidebar = ({ title, intro }) => (
  <aside className={sidebarStyles}>
    <header className={headerStyles}>
      <h1>doug<wbr/>mcdonald<wbr/>.co.uk</h1>
      <h2>{intro}</h2>
      <div className={facehuggerStyles}>
        <img src={DougHead} className="face" alt="My face" />
      </div>
      <Link className={`${buttonStyles} primary-button`} to="/">READ MY MIND</Link>
      <wbr/>
      <Link className={`${buttonStyles} secondary-button`} to="/shout">SHOUT AT ME</Link>
      <SocialIcons urls={urls} color="rgba(255, 255, 255, 0.8)" />
    </header>
  </aside>
)

export default Sidebar;