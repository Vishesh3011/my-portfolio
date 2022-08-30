import React from 'react';

import './css/Interests.css';

import { BsCodeSlash } from 'react-icons/bs';
import { GiMicrophone } from 'react-icons/gi';
import { TbSwimming } from 'react-icons/tb';
import { BsFillPenFill } from 'react-icons/bs';
import { IoLogoGameControllerB } from 'react-icons/io';
import { GiGuitar } from 'react-icons/gi';


function Interests() {
  return (
    <section id = 'interests'>
        <h5>My hobbies</h5>
        <h2>Interests</h2>

        <div className='container hobbiesContainer'>
            <div className='hobbies'>
                <p className='hobby'>
                    <BsCodeSlash fontSize='large' className='hobbyIcon'/>
                    <h4>Coding</h4>
                </p>
                <p className='hobby'>
                    <BsFillPenFill fontSize='large' className='hobbyIcon'/>
                    <h4>Sketching</h4>
                </p>
                <p className='hobby'>
                    <GiMicrophone fontSize='large' className='hobbyIcon'/>
                    <h4>Singing</h4>
                </p>
                <p className='hobby'>
                    <IoLogoGameControllerB fontSize='large' className='hobbyIcon'/>
                    <h4>Gaming</h4>
                </p>
                <p className='hobby'>
                    <TbSwimming fontSize='large' className='hobbyIcon'/>
                    <h4>Swimming</h4>
                </p>
                <p className='hobby'>
                    <GiGuitar fontSize='large' className='hobbyIcon'/>
                    <h4>Playing Guitar</h4>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Interests