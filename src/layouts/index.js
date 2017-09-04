import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from '../templates/sidebar'

import './index.scss';

import LeagueSpartan from 'typeface-league-spartan';
import Aleo from 'typeface-aleo';
import OpenSans from 'typeface-open-sans';

const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet
        title="dougmcdonald.co.uk"
        meta={[
          { name: 'description', content: 'dougmcdonald.co.uk - basic concepts and failed understanding' },
          { name: 'keywords', content: 'something, something, something darkside' },
        ]}
      />
      <Sidebar title="dougmcdonald.co.uk" intro="basic concepts and failed understanding" />
      <div className="content">
        {children()}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
