import React from 'react'
import Resume from './files/Resume.pdf'

function CTA() {
  return (
    <div className='CTA'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA