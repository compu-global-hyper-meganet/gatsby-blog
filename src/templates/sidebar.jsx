import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { SocialIcons } from 'react-social-icons';
import { css } from 'emotion';

//import './sass/sidebar.scss';
import DougHead from './../images/DougHead.fw.png';

// $grey: #140F2D;
// $grey-blue: #628395;
// $red: #D72638;
// $yellow: #F49D37;
// $blue: #3F88C5;
// $off-white: #eeeeef;
// $react-blue: #61dafb;
// $redux-purple: #7848BF;

const colours = {
  grey: `#140F2D`,
  grey_blue: `#628395`,
  red: `#D72638`,
  yellow: `#F49D37`,
  blue: `#3F88C5`,
  off_white: `#eeeeef`,
  react_blue: `#61dafb`,
  redux_purple: `#7848BF`
};

const sidebarStyles = css`

    color: #fff;
    background-color: ${colours.grey};
    display: inline-block;
    width: 100%;

    header {
      margin: 1em auto;
      h2 {
        margin-bottom: 1em;
      }
      .facehugger {
        margin-bottom: 0;
      }
    }

    h1 {
      font-family: 'Aleo';
      color: #fff;
      font-size: 2em;
      margin: 0;
      letter-spacing: 0.1em;
    }

    & h2 {
      margin: 1em 0 3em 0;
      font-size: 1.2em;
      color: ${colours.grey_blue};
      font-weight: normal;
      font-family: 'Open Sans';
      text-transform: uppercase;
    }

    .button {
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
    }

    .button:hover {
      cursor: pointer;
      background: #fff;
    }

    .facehugger {
      text-align: center;
      margin-bottom: 2em;
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

      header {
        margin: 50% 2em 0;
        text-align: right;

        h2 {
          margin-bottom: 3em;
        }

        .facehugger {
          text-align: right;
          margin-bottom: 2em;
        }
      }

  }


`;

const urls = [
  'https://twitter.com/dougajmcdonald',
  'https://github.com/dougajmcdonald/'
];

const Sidebar = ({ title, intro }) => (
  <aside className={sidebarStyles}>
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