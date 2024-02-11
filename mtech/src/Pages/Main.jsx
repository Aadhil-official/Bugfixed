import React from 'react'
import Nav from '../Component/Navbar/Nav'
import artic from "../Images/Logo.png"
import phn from  "../Images/Phone.png"
import email from  "../Images/Email.png"
import lction from "../Images/Location.png"
import Foot from '../Component/Foot/Foot'
import ReactDOM from 'react-dom';


import './Main.css'

function Main() {
  return (
    <div>
        <Nav icon={artic}/><br></br>
        <h1 className='cus'><i>Contact Us</i></h1>
        <div className='cicon'>
          <div className='set'><img src={phn} alt="phone" className='icon'/></div><br></br>
          <div className='set'><img src={email} alt="phone" className='icon'/></div><br></br>
          <div className='set'><img src={lction} alt="phone" className='icon'/></div><br></br>
        </div>
        <Foot/>
    </div>
  )
}

export default Main