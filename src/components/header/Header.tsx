import React from 'react'
import Logo from '../logo/Logo'

import './Header.scss'

import Theme from '../theme/Theme'

const Header: React.FC = () => {
  return (
    <div className='container'>
      <header className='header'>
          <Logo />
          <Theme />
      </header>
    </div>
  )
}

export default Header