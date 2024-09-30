import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-icon'>

      <img className='header-logo' src="./public/image/farmarcia-logo-pq.png" alt="" />
        </div>

      <div className='header-label'>

      <label className='header-farm-label'>Farmárcia</label>
      </div>

    </div>
  )
}

export default Header
