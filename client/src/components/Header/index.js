import React from 'react';
import logo from '../../assets/images/logo.png'

function Header(props) {
    return(
        <header className="d-flex justify-content-between">
          <a href='/my-portfolio-with-react/' >
<h1><img src={logo} className="logo" height="50px" alt=''/>Robyn's Portfolio</h1></a>  
           {props.children}
        </header>
    )
}

export default Header;