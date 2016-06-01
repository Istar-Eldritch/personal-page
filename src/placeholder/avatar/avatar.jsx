import React, { PropTypes } from 'react'
import Gravatar from './gravatar.jsx'
import style from './avatar.scss'

const Avatar = () => (
  <div className="avatar">
    <Gravatar alt="Ruben Paz" email="me@ruben.io" size="99"/>
  </div>
)

export default Avatar
