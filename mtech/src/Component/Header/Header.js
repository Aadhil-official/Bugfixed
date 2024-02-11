import React from 'react'
import min from '../../Images/Minimize.jpg'
import max from '../../Images/Maximize.jpg'
import close from '../../Images/Close.jpg'
// import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import {useState} from 'react';
import './Header.css'
import Home from '../Homeh/Home';
// import { Style } from '@mui/icons-material'


  


const handleMinimizeClick = () => {
  // Add your logic for minimizing here
  console.log('Minimize clicked');
};

const handleMaximizeClick = () => {
  // Add your logic for maximizing here
  console.log('Maximize clicked');
};

const handleCloseClick = () => {
  // Add your logic for closing here
  console.log('Close clicked');
};



function Header() {
  const [isHovering1, setIsHovering1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };

  const [isHovering2, setIsHovering2] = useState(false);
  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const [isHovering3, setIsHovering3] = useState(false);
  const handleMouseEnter3 = () => {
    setIsHovering3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovering3(false);
  };

  return (
    <div className='head'>
      <header>
        <div className='control'>
          <button className='cntrl'
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1} 
          style={{backgroundColor: isHovering1 ? 'gray' : '',
          opacity: isHovering1 ? '0.5':'0'}} onClick={handleMinimizeClick}></button>
          <img className='img' src={min} alt='Minimize' />
          <button className='cntrl'
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2} 
          style={{backgroundColor: isHovering2 ? 'gray' : '',
          opacity: isHovering2 ? '0.5':'0'}}
          onClick={handleMaximizeClick}></button>
          <img className='img' src={max} alt='Maximize' />
          <button className='cntrl'
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3} 
          style={{backgroundColor: isHovering3 ? 'red' : '',
          opacity: isHovering3 ? '0.5':'0'}}
          onClick={handleCloseClick}></button>
          <img className='img' src={close} alt='Close' />

        </div>
        <div className='home'><Home/></div>
      </header>
    </div>
  )
}

export default Header