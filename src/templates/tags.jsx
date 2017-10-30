import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { css } from 'emotion';
import colours from '../colours';

const tagStyles = css`

  padding: 0.3em 0.7em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  color: #fff;
  background-color: ${colours.grey};
  display: inline-block;

  &:first-child {
    margin-left: 0;
  }

  @media (min-width: 60em) {
    font-size: 0.75em;
  }
`;

const tagColours = css`
  .devops {
    background-color: ${colours.yellow};
  }

  .elastic {
    background-color: ${colours.blue};
  }

  .gaming {
    background-color: ${colours.grey_blue};
  }

  .react {
    background-color: ${colours.react_blue};
  }

  .redux {
    background-color: ${colours.redux_purple};
  }

  .dotnet {
    background-color: ${colours.redux_purple};
  }

  .personal-development {
    background-color: ${colours.off_white};
    color: ${colours.grey};
  }
`;


const Tags = ({ tags }) => {
  return (
    <div className={tagColours}>
      {
        tags.map(tag =>
          <span key={tag} className={`${tagStyles} ${tag}`}>{tag}</span>
        )
      }
    </div>
  )
}

export default Tags