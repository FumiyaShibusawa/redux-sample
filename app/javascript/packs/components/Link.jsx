import React from 'react'
import PropTypes from 'prop-types'

const button_style = { marginLeft: '4px' }

const Link = ({ active, children, onClick }) => (
  <button onClick={ onClick } disabled={ active } style={ button_style } >
    { children }
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link
