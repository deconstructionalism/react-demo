import React from 'react'
import logo from '../images/dog-head.png'

import '../styles/Header.css'

const Header = props => {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>{props.headerTitle}</h1>
    </header>
  )
}

export default Header
  