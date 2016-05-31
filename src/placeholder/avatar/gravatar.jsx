import React, { PropTypes } from 'react'
import md5 from 'blueimp-md5'


const Gravatar = ({email, def, size}) => (
  <img alt="Ruben Paz" src={`https://secure.gravatar.com/avatar/${md5(email)}?s=${size}&d=${def}`}/>
)

Gravatar.propTypes = {
  email: PropTypes.string.isRequired,
  size:  PropTypes.string.isRequired,
  def: PropTypes.string
}

Gravatar.defaultProps = {
  def: 'identicon'
}

export default Gravatar
