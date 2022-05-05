import React from 'react';
import robyn from '../../assets/images/robyn-profile.jpg'

function About() {
    return(
<section>
    <div className='box container'>
        
    <img src={robyn} className="circle" alt="Robyn Graham outside with Golden Gate Bridge in background" title="Robyn Graham" />
<div className='about-disc'>
    <h3>About Me</h3>
        <p>Hi! I'm Robyn Graham. My background is in journalism and digital media. With over 5 years experience of building websites for small businesses on WordPress, I wanted to branch out. </p>
        <p>I am currently learning JavaScript, see my coding portfolio.</p>
        </div>
        </div>

</section>

    )
}

export default About;