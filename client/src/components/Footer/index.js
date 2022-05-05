import React from 'react';
import github from '../../assets/images/git-hub.png'
import linkedin from '../../assets/images/linkedin.png'
import laptop from '../../assets/images/laptop-icon-circle.png'

function Footer() {
    return(
        <footer>
<a href="https://github.com/robyng"><img src={github} class="icon" height="25px" alt='' /></a>
<a href="https://www.linkedin.com/in/robyn-graham-b067aa97/"><img src={linkedin} class="icon" height="25px" alt='' /></a>
<a href="https://www.sitereworks.com/"><img src={laptop} class="icon" height="25px" alt='' /></a>
<br/>
           <p>&copy; {(new Date().getFullYear())} Robyn Graham</p>
        </footer>
    )
}

export default Footer;