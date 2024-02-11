import React from 'react'
import FB from '../../Images/FB.png'
import LI from '../../Images/LinkedIn.png'
import WP from '../../Images/WP.png'

import './Foot.css'
import Footer from '../Footer/Footer'

function Foot() {
    return (
        <div>
            <div className='allin'>
                <div className='top'>
                    <i>Follow us on social media</i>
                </div>
                <div className='vsn'>
                    <span className='ghead'>Our vision</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br></br>sed do eiusmod tempor incididunt ut labore et dolore
                        <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud
                        <br></br>exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        <br></br>consequat. Duis aute irure dolor in reprehenderit in
                        <br></br>voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br></br>Excepteur sint occaecat cupidatat non proident, sunt in
                        <br></br>culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='msn'>
                    <span className='ghead'>Our mission</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br></br>sed do eiusmod tempor incididunt ut labore et dolore
                        <br></br>magna aliqua. Ut enim ad minim veniam, quis nostrud
                        <br></br>exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        <br></br>consequat. Duis aute irure dolor in reprehenderit in
                        <br></br>voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <br></br>Excepteur sint occaecat cupidatat non proident, sunt in
                        <br></br>culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div><br></br>
            <img src={FB} className='social' style={{ marginRight: '3%' }} alt='Face Book' />
            <img src={WP} className='social' style={{ marginRight: '3%' }} alt='WhatsApp' />
            <img src={LI} className='social' style={{ marginRight: '3%' }} alt='LinkedIn' />
            <Footer/>
        </div>
    )
}

export default Foot