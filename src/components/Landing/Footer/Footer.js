import React from 'react'

import Hands from './images/crowd-hands.jpeg'
import './Footer.css';



function Footer() {
    return (
            <div className="footer">
                <img className="footer-image" src={Hands} alt="hands reaching up"/>
            </div>
    );
}

export default Footer;