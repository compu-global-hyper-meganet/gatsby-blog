import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../templates/sidebar'

import './index.scss';

import LeagueSpartan from 'typeface-league-spartan';
import Aleo from 'typeface-aleo';
import OpenSans from 'typeface-open-sans';

const getIntro = () => {

  const introList = [
    'Web developer, golfer, dream weaver (not macromedia)',
    'Cakes please',
    'Why doesn\'t this work?',
    'If you can, you must',
    'Ask more questions, get more answers',
    'Sponsored by Rick and Morty',
    'Things I understand, and many I don\'t',
    'Powered by caffeine',
    'Just about awake',
    'Desirable on LinkedIn',
    ''
  ];

  const position = generateRandomInteger(introList.length);

  return introList[position];

}

const generateRandomInteger = (max) => {
  return Math.floor(max - Math.random()*(max))
}

const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet
        title="dougmcdonald.co.uk"
        meta={[
          { name: 'description', content: 'dougmcdonald.co.uk - things I understand, and many I don\'t' },
          { name: 'keywords', content: 'Doug McDonald\'s personal blog on tech, gaming and personal development, not always in that order.' },
        ]}
      />
      <Sidebar title="dougmcdonald.co.uk" intro={getIntro()} />
      <div className="content">
        {children()}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
