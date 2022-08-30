import React, { useState } from 'react';
import './css/Nav.css';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {AiFillProject} from 'react-icons/ai';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a title = "Home" href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HomeIcon/></a>
      <a title = "About" href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><PersonIcon/></a>
      <a title = "Experience" href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><LibraryBooksIcon/></a>
      <a title = "Portfolio" href='#portfolio'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiFillProject fontSize='large'/></a>
      <a title = "Contact" href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><ContactPageIcon/></a>
    </nav>
  )
}

export default Nav