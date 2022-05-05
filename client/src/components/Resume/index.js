import React from 'react';
import resume from '../../assets/images/robyn-graham-resume.pdf'

function Resume() {
    return(
        <section>
          <div className='div-resume col-6 container'>
          <h2>My Resume</h2>
          <div className='download'>
          <a href={resume} target="_blank" rel="noreferrer"> <button className='btn btn-success  float-left'>Download Now</button></a>
          </div>
          </div>
          
        </section>
    )
}

export default Resume;