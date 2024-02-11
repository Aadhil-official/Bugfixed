import React from 'react'
import './Nav.css'

function Nav({ icon }) {
  return (
    <div className='nav'>
      <div className='test'><img className='logo' src={icon} alt='Logo' /></div>
      <div className='allset'>
        <span className='main'>Home</span>
        <span className='main'>Employee</span>
        <span className='main'>Admin</span>
      </div>
    </div>
  )
}

export default Nav