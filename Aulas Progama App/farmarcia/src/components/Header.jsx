import React from 'react'
import './Header.css'
import Logo from './Logo'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-icon'>

          <Logo/>

        </div>

      <div className='header-label'>

      <label className='header-farm-label'>Farmárcia</label>
      </div>

    </div>
  )
}

export default Header
