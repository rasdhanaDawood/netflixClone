import React from 'react'
import Logo from '../../assets/netflix-logo.png'
import avatar from '../../assets/avatar.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="netflix logo" />
      <img className="avatar" src={avatar} alt="avatar icon" />
    </header>
  )
}

export default Header
