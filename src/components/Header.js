import React from 'react';
import './css/Header.css';
import CTA from './CTA';
import myPic from './images/myPic1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
        <div className='container headerContainer'>
        <h5>Hey there, it's</h5>
        <h1>Vishesh Modi</h1>
        <h5 className='text-light'>Computer Science Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='headerPhoto'>
          <img src={myPic} alt = "me"/>
        </div>
        <a href='#contact' className='headerScroll'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header