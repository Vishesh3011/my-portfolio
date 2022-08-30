import React from 'react';

import './css/Educations.css';
import BTechResult from './files/BTechResult.pdf';
import tenthResult from './files/10thResult.pdf';
import twelfthResult from './files/12thResult.pdf';

function Education() {
  return (
    <section id = "educations">
        <h5>My Learning</h5>
        <h2>Education</h2>

        <div className='container educationContainer'>
            <div className='education'>
              <div className='educationHead'>
                <h3>Undergraduation</h3>
              </div>
              <div className='headTitle'>
                <h4>Navrachana University</h4>
              </div>
              <div className='educationInfo'>
                <p className='educationInfoDegree'>Bachelor of Technology (B.Tech)</p>
                <p className='educationInfoFOS'>Computer Science (CS)</p>
              </div>
              <div className='educationQualification'>
                <p className='educationQualificationDuration'>Year: 2019-Present</p>
                <p className='educationQualificationGrade'>Grade: 8.73 CGPA</p>
              </div>
              <div className='educationResult'>
                <a target='_blank' className='btn btn-primary' href = {BTechResult}>Academic Result</a>
              </div>
            </div>
            <div className='education'>
              <div className='educationHead'>
                <h3>High School</h3>
              </div>
              <div className='headTitle'>
                <h4>Bright Day School CBSE</h4>
              </div>
              <div className='educationQualification'>
                <small className='educationQualificationDuration'>Year: 2017-2019</small>
                <p className='educationQualificationGrade'>Grade: 85.4%</p>
              </div>
              <div className='educationResult'>
                <a target='_blank' className='btn btn-primary' href = {twelfthResult}>Academic Result</a>
              </div>
            </div>
            <div className='education'>
              <div className='educationHead'>
                <h3>Primary School</h3>
              </div>
              <div className='headTitle'>
                <h4>Bright Day School CBSE</h4>
              </div>
              <div className='educationQualification'>
                <p className='educationQualificationDuration'>Year: 2007-2017</p>
                <p className='educationQualificationGrade'>Grade: 8.6 CGPA</p>
              </div>
              <div className='educationResult'>
                <a target='_blank' className='btn btn-primary' href = {tenthResult}>Academic Result</a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Education