import React from 'react';

import './css/Experience.css';
import VerifiedIcon from '@mui/icons-material/Verified';

function Experience() {
  return (
    <section id = "experience">
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>

      <div className='container experienceContainer'>
        <div className='experienceCoreSkills'>
          <h3>Core Skills</h3>
          <div className='experienceContent'>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon   className='experienceDetailsIcons'/>
              <div>
                <h4>Data Analytics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon  className='experienceDetailsIcons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon  className='experienceDetailsIcons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
          </div>
        </div>
        <div className='experienceOtherSkills'>
          <h3>Other Skills</h3>
          <div className='experienceContent'>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>Databases</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon  className='experienceDetailsIcons'/>
              <div>
                <h4>R</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
            <p className='experienceDetails'>
              <VerifiedIcon className='experienceDetailsIcons'/>
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Basics</small>
              </div>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience