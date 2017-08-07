import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sidebar from './sidebar'

import './index.scss'

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="dougmcdonald.co.uk - failed understandings and basic graspings"
        meta={[
          { name: 'description', content: 'dougmcdonald.co.uk - failed understandings and basic graspings' },
          { name: 'keywords', content: 'something, something, something darkside' },
        ]}
      />
      <Sidebar title="dougmcdonald.co.uk" intro="failed understandings and basic graspings" />
      <div className="content">
        {children()}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
