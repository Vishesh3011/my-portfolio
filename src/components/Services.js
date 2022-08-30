import React from 'react';

import './css/Services.css';
import DoneIcon from '@mui/icons-material/Done';

function Services() {
  return (
    <section id = 'services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container servicesContainer'>
        <div className='service'>
          <div className='serviceHead'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </div>
        <div className='service'>
          <div className='serviceHead'>
            <h3>Web Development</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </div>
        <div className='service'>
          <div className='serviceHead'>
            <h3>Content Creation</h3>
          </div>
          <ul className='serviceList'>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <DoneIcon className = 'serviceListIcon'/>
              <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services