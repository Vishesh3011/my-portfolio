import React from 'react';

import './css/Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer>
      <a href = "#" className='footerLogo'>Vishesh Modi</a>
      <ul className='permalinks'>
        <li><a href = "#">Home</a></li>
        <li><a href = "#about">About</a></li>
        <li><a href = "#experience">Experience</a></li>
        <li><a href = "#portfolio">Portfolio</a></li>
        <li><a href = "#contact">Contact</a></li>
      </ul>
      <div className='footerSocials'>
        <a href = "https://instagram.com"><InstagramIcon/></a>
        <a href = "https://linkedin.com"><LinkedInIcon/></a>
        <a href = "https://github.com"><GitHubIcon/></a>
      </div>
      <div className='footerCopyright'>
        <small>&copy; The Portfolio is completely created by Vishesh Modi. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer