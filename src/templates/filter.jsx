import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { SocialIcons } from 'react-social-icons';
import { css } from 'emotion';

const filterStyles = css`
  display: inline-block;
  height: 80px;

  select {
    margin: 1em;
    padding: 1em;
    font-family: 'League Spartan';
    font-size: 1em;
    border: none;

    option {
      padding: 1em;
      height: 2em;
    }

  }

`;

const selectStyles = css`

`;

const Filter = ({ options }) => {

  return (
    <div className={filterStyles}>
      Filter
      <select>
        {
          options.map((option) => {
            return <option>{option}</option>
          })
        }
      </select>
    </div>
  )

}

export default Filter